import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import login from "../assets/login.png";

import login2 from "../assets/login2.png";
import Input from "./Input";
import Label from "./Label";
import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import Required from "./Required";

interface ForgotPasswordProps {
  handleTypeChange: (newType: "login" | "forgotPassword") => void;
}

function ForgotPassword({ handleTypeChange }: ForgotPasswordProps) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-2">
      <LazyLoadImage
        src={login2}
        className="h-60 w-60 md:h-80 -mt-14 md:-mt-0 pt-10 md:w-80 lg:-ml-28 lg:h-2/5 lg:w-2/5"
      />
      <div className="w-2/5 md:mt-20 shadow-md rounded-lg p-5 md:px-10 md:py-5">
        <div className="flex gap-x-4 items-center justify-center">
          <img src={logo} className="w-9 h-9" />
          <p className="text-3xl font-medium">
            <span className="text-blue-600">W</span>elcome back!
          </p>
        </div>
        <p className="mt-5 text-sm md:text-base">
          {" "}
          Enter email address associated with your account and you will receive an email to reset your password.
        </p>
        <div className="flex flex-col">
          <div className="flex">
            <Label title="Email" className="mt-5" />
            <Required className="mt-5" />
          </div>
          <Input type="email" className="mt-1" placeholder="Enter your email..." />

          <a href="#">
            <span
              className="text-blue-700 hover:underline cursor-pointer text-xs mt-2"
              onClick={() => handleTypeChange("login")}
            >
              Return to Login
            </span>
          </a>
          <button className="bg-blue-600 hover:bg-blue-500 text-white w-full py-2 rounded-lg mt-8">Submit</button>
          <p className="mt-2 md:mt-5 text-xs text-center">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-700 underline cursor-pointer">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
