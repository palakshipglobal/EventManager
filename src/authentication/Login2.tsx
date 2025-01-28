import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import login from "../assets/login.png";
import bg from "../assets/bg.jpg";
import login2 from "../assets/login2.png";
import bg2 from "../assets/bg2.jpg";
import a from "../assets/a.png";
import Input from "./Input";
import Label from "./Label";
import { EyeOff, Eye } from "lucide-react";
import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import Required from "./Required";

function Login2() {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex  min-h-screen bg-blue-50 flex-col md:flex-row items-center justify-center p-2">
      <LazyLoadImage src={bg} className="h-60 w-60 md:h-80 md:w-80 lg:-ml-28 lg:h-2/5 lg:w-2/5" />
      <div className="max-w-max md:mt-20 z-50 shadow-md bg-white/20 rounded-lg p-5 md:px-10 md:py-5 backdrop-blur-lg">
        <div className="flex gap-x-4 items-center justify-center">
          <img src={logo} className="w-9 h-9" />
          <p className="text-3xl font-medium">
            <span className="text-blue-600">W</span>elcome back!
          </p>
        </div>
        <p className="mt-5 text-sm md:text-base">Let's get you ready for your next unforgettable event.</p>
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
          <p className="text-blue-700 hover:underline cursor-pointer text-xs mt-2">Forgot your password?</p>
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

export default Login2;
