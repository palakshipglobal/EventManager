import React from "react";
import Input from "./Input";
import Label from "./Label";
import { Link } from "react-router-dom";
import Required from "./Required";
import reset from "../assets/reset-password.png";
import bg from "../assets/bg.jpg";
import loginImg from "../assets/loginImg.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const ResetPassword = () =>  {
  return (
    <div className="flex bg-blue-50 min-h-screen flex-col md:flex-row p-3 md:p-0">
    <LazyLoadImage src={bg} className="hidden max-h-screen md:block md:w-3/5 lg:w-1/2 lg:-ml-0" />
    <LazyLoadImage src={loginImg} className="md:hidden mx-auto h-32 w-40" />
    <div className="shadow-lg md:-ml-24 rounded-xl max-h-max lg:px-10 md:my-auto z-50 bg-blue-50 p-5">
      <div className="flex gap-x-4 items-center justify-center">
        <img src={reset} className="w-8 h-8" />
        <p className="text-2xl font-medium">
          <span className="text-blue-600"></span>Set New Password
        </p>
      </div>
      <p className="mt-3 md:mt-5 text-xs text-center md:text-base">
        Let's get you ready for your next unforgettable event.
      </p>
      <div className="flex flex-col">
        <div className="flex">
          <Label title="New Password" className="mt-5" />
          <Required className="mt-5" />
        </div>
        <Input type="password" className="mt-1 w-full" placeholder="Enter your password..." />
        <div className="flex">
          <Label title="Confirm Password" className="mt-5" />
          <Required className="mt-5" />
        </div>
        <div className="flex">
          <Input type="password" className="w-full h-16 mt-1" placeholder="Confirm password..." />
        </div>
        <button className="bg-blue-600 hover:bg-blue-500 text-white w-full py-2 rounded-lg mt-8">Reset Password</button>

        <Link to="/login" className="text-blue-700 text-xs underline cursor-pointer">
          <div className="mt-5 flex items-center justify-center gap-2">Back to login</div>
        </Link>
      </div>
    </div>
  </div>
  )
}

