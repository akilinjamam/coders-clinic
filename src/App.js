import { Route, Routes } from "react-router-dom";
import Header from "./Pages/SharedPage/Header/Header";
import Home from "./Pages/Components/Home/Home";
import Quiz from "./Pages/Components/Home/QuizSection/Quiz";
import Login from "./Pages/Components/user/Login";
import Signup from "./Pages/Components/user/Signup";
import ContactUs from "./Pages/Contact/ContactUs";
import Footer from "./Pages/SharedPage/Footer/Footer";
import NotFound from "./Pages/SharedPage/NotFound/NotFound";
import Courses from "./Pages/Components/Courses/Courses";
import JavascriptCourse from "./Pages/Components/Courses/JavascriptCourse/JavascriptCourse";
import Cpp from "./Pages/Components/Courses/CppCourse/Cpp";
import Introduction from "./Pages/Components/Courses/HtmlCourse/Introduction";
import EnrollMain from "./Pages/Components/Home/EnrollSection/EnrollMain";
import About from "./Pages/Components/About";
import Intro from "./Pages/Components/Courses/HtmlCourse/Intro";
import Attributes from "./Pages/Components/Courses/HtmlCourse/Attributes";
import HtmlStyle from "./Pages/Components/Courses/HtmlCourse/HtmlStyle";
import HtmlImage from "./Pages/Components/Courses/HtmlCourse/HtmlImage";
import HtmlCce from "./Pages/Components/Courses/HtmlCourse/HtmlCce";
import Editor from "./Pages/Components/Editor/Editor";

import PythonCompiler from "./Pages/Components/Editor/PythonCompiler";

import JsCourses from "./Pages/Components/Courses/JsCourses";
import JsSyntex from "./Pages/Components/Courses/JavascriptCourse/JsSyntex";
import JsVariables from "./Pages/Components/Courses/JavascriptCourse/JsVariables";
import JsLet from "./Pages/Components/Courses/JavascriptCourse/JsLet";
import JsConst from "./Pages/Components/Courses/JavascriptCourse/JsConst";
import CplusplusCourses from "./Pages/Components/Courses/CplusplusCourses";
import CppIntro from "./Pages/Components/Courses/CppCourse/CppIntro";


function App() {
  return (
    <div className="mx-auto">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/quiz" element={<Quiz />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signUp" element={<Signup />}></Route>
        <Route path="/EnrollMain" element={<EnrollMain />}></Route>
        <Route path="/contactUs" element={<ContactUs />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/Editor" element={<Editor />}></Route>


        <Route path="/pythonCom" element={<PythonCompiler />}></Route>

        <Route path="/introduction" element={<Introduction />}></Route>
        {/* <Route path="/courses" element={<Courses />}>
          <Route index element={<HtmlCourse />}></Route>
          <Route
            path="/courses/javascriptcourse"
            element={<JavascriptCourse />}
          />
          <Route path="/courses/c++" element={<Cpp />} />
        </Route> */}

        <Route path="/courses" element={<Courses />}>
          <Route index element={<Intro />}></Route>

          <Route path="/courses/intro" element={<Intro />} />

          <Route path="/courses/attribute" element={<Attributes />} />

          <Route path="/courses/htmlStyle" element={<HtmlStyle />} />

          <Route path="/courses/htmlImage" element={<HtmlImage />} />

          <Route path="/courses/htmlCce" element={<HtmlCce />} />



          <Route
            path="/courses/cpp"
            element={<Cpp />}
          />
        </Route>

        <Route path="/jsCourses" element={<JsCourses></JsCourses>}>

          <Route
            index
            element={<JavascriptCourse />}
          />

          <Route path="/courses/cpp" element={<Cpp />} />

          <Route
            path="/jsCourses/jsSyntex"
            element={<JsSyntex />}
          />

          <Route
            path="/jsCourses/jsVariables"
            element={<JsVariables />}
          />

          <Route
            path="/jsCourses/jsLet"
            element={<JsLet />}
          />

          <Route
            path="/jsCourses/jsConst"
            element={<JsConst />}
          />

        </Route>

        <Route path="/cplusPlusCourses" element={<CplusplusCourses />}>

          <Route
            path="/cplusPlusCourses"
            element={<CppIntro />}
          />

        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
