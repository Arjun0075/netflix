// import React from 'react'
import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignUpForm, setSignUpForm] = useState(false);

  const toggleSignInForm = () => {
    setSignUpForm(!isSignUpForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="login"
        />
      </div>

      <form
        action=""
        className=" w-3/12 p-12 absolute bg-black my-36 mx-auto left-0 right-0 text-white bg-opacity-80 rounded-lg"
      >
        <h1 className="text-3xl my-2 py-2 font-bold">
          {isSignUpForm ? "Sign Up" : "Sign In"}
        </h1>
        {isSignUpForm && (
          <input
            type="name"
            placeholder="Enter Name"
            className="rounded-sm my-3 p-4 w-full  bg-gray-700"
          />
        )}
        {isSignUpForm && (
          <input
            type="number"
            placeholder="Enter Mobile Number"
            className="rounded-sm my-3 p-4 w-full  bg-gray-700"
          />
        )}

        <input
          type="email"
          placeholder="Email Address"
          className="rounded-sm my-3 p-4 w-full bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="rounded-sm my-3 p-4 w-full  bg-gray-700"
        />

        <button className="p-4 my-4 bg-red-600 w-full text-sm rounded-sm">
          {isSignUpForm ? "Sign Up" : "Sign In"}
        </button>
        {/* <h2>Forgot Password</h2> */}
        {isSignUpForm ? (
          <p className="py-4 font-light">
            Already signed up?{" "}
            <span
              className="font-bold cursor-pointer"
              onClick={toggleSignInForm}
            >
              Sign In
            </span>
          </p>
        ) : (
          <p className="py-4 font-light">
            New to Netflix?{" "}
            <span
              className="font-bold cursor-pointer"
              onClick={toggleSignInForm}
            >
              Sign Up now.
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
