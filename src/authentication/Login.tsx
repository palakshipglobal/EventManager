import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import login from "../assets/loginImg.png";

import Input from "./Input";
import Label from "./Label";
import { EyeOff, Eye } from "lucide-react";
import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import Required from "./Required";

interface LoginProps {
  handleTypeChange: (newType: "login" | "forgotPassword") => void;
}

function Login({ handleTypeChange }: LoginProps) {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex w-screen min-h-screen bg-blue-50 flex-col md:flex-row items-center justify-center px-3">
      <LazyLoadImage src={login} className="max-h-screen h-32 w-40 lg:-ml-32 md:w-1/2 md:h-1/2" />
      <div className="lg:w-1/3 lg:-ml-20 shadow-lg bg-white/20 rounded-lg p-5">
        <div className="flex gap-x-4 items-center justify-center">
          <img src={logo} className="w-9 h-9" />
          <p className="text-3xl font-medium">
            <span className="text-blue-600">W</span>elcome back!
          </p>
        </div>
        <p className="mt-2 md:mt-5 text-xs ml-16 md:text-base">
          Let's get you ready for your next unforgettable event.
        </p>
        <div className="flex flex-col">
          <div className="flex">
            <Label title="Email" className="mt-5" />
            <Required className="mt-5" />
          </div>
          <Input type="email" className="mt-1" placeholder="Enter your email..." />
          <div className="flex">
            <Label title="Password" className="mt-5" />
            <Required className="mt-5" />
          </div>
          <div className="flex">
            <Input
              type={showPassword ? "text" : "password"}
              className="w-full h-16 mt-1"
              placeholder="Enter your password..."
            />
            {showPassword ? (
              <Eye className="-ml-8 text-gray-800 size-4 mt-4 cursor-pointer" onClick={handleShowPassword} />
            ) : (
              <EyeOff className="-ml-8 text-gray-800 size-4 mt-4 cursor-pointer" onClick={handleShowPassword} />
            )}
          </div>
          <span
            className="text-blue-700 hover:underline cursor-pointer text-xs mt-2"
            onClick={() => handleTypeChange("forgotPassword")}
          >
            Forgot your password?
          </span>
          <button className="bg-blue-600 hover:bg-blue-500 text-white w-full py-2 rounded-lg mt-8">Log in</button>
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

export default Login;
