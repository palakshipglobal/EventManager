import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import login from "../assets/loginImg.png";
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
    <div className="flex w-screen min-h-screen bg-blue-50 flex-col md:flex-row items-center md:justify-center px-3">
      <LazyLoadImage src={login} className="max-h-screen mt-10 md:mt-0 h-32 w-40 lg:-ml-32 md:w-1/2 md:h-1/2" />
      <div className="lg:w-1/3 lg:-ml-20 shadow-lg bg-white/20 rounded-lg p-5">
        <div className="flex gap-x-4 items-center justify-center">
          <LazyLoadImage src={logo} className="w-9 h-9" />
          <p className="text-3xl font-medium">
            <span className="text-blue-600">W</span>elcome back!
          </p>
        </div>
        <p className="mt-3 md:mt-5 text-xs text-center md:text-base">
          Enter email address associated with your account and you will receive an email to reset your password.
        </p>
        <div className="flex flex-col">
          <div className="flex">
            <Label title="Email" className="mt-5" />
            <Required className="mt-5" />
          </div>
          <Input type="email" className="mt-1 w-full" placeholder="Enter your email..." />
          <span
            className="text-blue-700 hover:underline cursor-pointer text-xs mt-2"
            onClick={() => handleTypeChange("login")}
          >
            Return to Login
          </span>
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
