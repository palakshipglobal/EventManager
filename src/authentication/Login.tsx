import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import login from "../assets/login.png";
import login2 from "../assets/login2.png";
import Input from "./Input";
import Label from "./Label";
import { EyeOff, Eye } from "lucide-react";
import logo from "../assets/Logo.png";

function Login() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-2">
      <LazyLoadImage
        src={login2}
        className="h-60 w-60 md:h-80 -mt-14 md:-mt-0 pt-10 md:w-80 lg:-ml-28 lg:h-2/5 lg:w-2/5"
      />
      <div className="max-w-max md:mt-20 shadow-md rounded-lg p-5 md:px-10 md:py-5">
        <div className="flex gap-x-4">
          <img src={logo} className="w-9 h-9" />
          <p className="text-3xl font-medium text-left">
            <span className="text-blue-600">W</span>elcome back!
          </p>
        </div>
        <p className="mt-2 text-sm md:text-base">Let's get you ready for your next unforgettable event.</p>
        <div className="flex flex-col">
          <Label title="Email" className="mt-5 md:mt-10" />
          <Input type="email" className="mt-1" placeholder="Enter your email..." />
          <Label title="Password" className="mt-5" />
          <Input type="password" className="w-full h-16 mt-1" placeholder="Enter your password..." />
          <p className="text-blue-700 hover:underline cursor-pointer text-xs mt-2">Forgot your password?</p>
          <button className="bg-blue-600 hover:bg-blue-500 text-white w-full py-2 rounded-lg mt-8">Log in</button>
          <p className="mt-2 md:mt-5 text-xs text-center">
            Don't have an account? <span className="text-blue-700 underline cursor-pointer">Register here</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
