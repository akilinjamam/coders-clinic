import React from "react";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import github from '../../../Assets/icons/github.gif';
import google from '../../../Assets/icons/google.svg';
import auth from "../../../firebase.init";
import { useForm } from "react-hook-form";
import Loading from "../../SharedPage/Footer/Loader";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithGithub, , gitUser, gitLoading, gitError] = useSignInWithGithub(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  console.log(user)
  const [theUser] = useAuthState(auth)
  console.log(theUser)
  let signInError;

  if (loading || gLoading || gitLoading) {
    return <Loading></Loading>;
  }

  if (error || gError || gitError) {
    signInError = (
      <p >
        <small>{error?.message || gError?.message}</small>
      </p>
    );
  }

  if (user || gUser || gitUser) {
    navigate('/')
  }

  const onSubmit = (data) => {
    console.log(data);
    signInWithEmailAndPassword(data.email, data.password);

  };

  return (
    <div className="flex h-screen backgroundImg justify-center items-center">
      <div className="card w-96 bg-base-100 bg-transparent shadow-2xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Login</h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text ">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is Required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid Email",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt ">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt ">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text ">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered  w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is Required",
                  },
                  minLength: {
                    value: 6,
                    message: "Must be 6 characters or longer",
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt ">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt ">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            {signInError}
            <input
              className="btn w-full max-w-xs text-white'"
              type="submit"
              value="Login"
            />
          </form>
          <p>
            <small >
              New to Coder Clinic?
              <Link className="text-green-500 ml-2" to="/SignUp">
                Create New Account
              </Link>
            </small>
          </p>
          <div className="divider">OR</div>
          <div className=" flex justify-evenly items-center">
            <button
              onClick={() => signInWithGoogle()}
            >
              <img src={google} alt=''></img>
            </button>
            <button
              onClick={() => signInWithGithub()}
            >
              <img style={{ width: '50px', height: '50px' }} src={github} alt=''></img>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
