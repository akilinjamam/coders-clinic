import React from "react";
import Learn from "../Learn";

const LangHeading = () => {
  return (
    <div>
      <div className="navbar">
        <div className="navbar-start w-[10%]">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li tabIndex="0">
                <a href="www.google.com">Tutorials</a>
                <a href="www.google.com">Examples</a>
                <a href="www.google.com">References</a>
                <a href="www.google.com">Editor</a>
              </li>
            </ul>
          </div>
          <a href="/home" className="btn btn-ghost normal-case text-xl">
            JS
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li tabIndex="0">
              <a href="www.google.com">Tutorials</a>
              <a href="www.google.com">Examples</a>
              <a href="www.google.com">References</a>
              <a href="www.google.com">Editor</a>
            </li>
          </ul>
        </div>
      </div>
      <Learn />
    </div>
  );
};

export default LangHeading;
