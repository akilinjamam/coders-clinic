import React from "react";
import InterviewImg from "../../../../Assets/icons/interview.png";
import CoddingSkills from "../../../../Assets/icons/coding.png";
import { useNavigate } from "react-router-dom";

const DeveloperBanner = () => {
  const navigate = useNavigate();

  return (
    <div className="hero pt-36 px-5 bg-slate-100">
      <div className="hero-content flex-col lg:flex-row ">
        <div className="flex flex-col lg:flex-row">
          <div className="grid flex-grow w-full px-5 lg:px-0 lg:w-1/2 mx-auto card rounded-lg place-items-start">
            <img className="w-[80px] mx-auto" src={CoddingSkills} alt="CoddingSkills" />
            <h3 className="text-lg font-bold text-[#adafad] mt-6">
              FOR DEVELOPERS
            </h3>
            <h3 className="text-4xl font-bold text-slate-800">
              Improve your coding skills.
            </h3>
            <p className="py-6 text-[#626363]">
              As a developer we need to improve our coding skills. And to
              increase this skill we need different skill assessment. (You can
              improve your assessment by clicking the button below.)
            </p>
            <button
              className="btn btn-primary w-[250px]"
              onClick={() => {
                navigate("/quiz");
              }}
            >
              Try for free challenge
            </button>
          </div>
          <div className="divider lg:divider-horizontal"></div>
          <div className="grid flex-grow w-full mt-20 lg:mt-2 px-5 lg:px-0 lg:w-1/2 mx-auto card rounded-lg place-items-start">
            <img className="w-[70px] mx-auto" src={InterviewImg} alt="InterviewImg" />
            <h3 className="text-lg font-bold text-[#adafad] mt-1">
              FOR INTERVIEWER
            </h3>
            <h3 className="text-4xl font-bold text-slate-800">
              Interview Preparation.
            </h3>
            <p className="py-6 text-[#8b8d8d]">
              If you are a candidate.You will be asked many types of questions,
              which you can see by clicking on the button below.
            </p>
            <button
              className="btn btn-primary w-[200px]"
              onClick={() => {
                navigate("/mockinterview");
              }}
            >
              7 day's free trial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperBanner;
