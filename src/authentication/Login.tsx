import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import bg from "../assets/bg.jpg";
import Input from "./Input";
import Label from "./Label";
import { EyeOff, Eye } from "lucide-react";
import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import Required from "./Required";
import loginImg from "../assets/loginImg.png";

interface LoginProps {
  handleTypeChange: (newType: "login" | "forgotPassword") => void;
}

function Login({ handleTypeChange }: LoginProps) {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex bg-blue-50 min-h-screen flex-col md:flex-row p-3 md:p-0">
      <LazyLoadImage src={bg} className="hidden max-h-screen md:block md:w-3/5 lg:w-1/2  lg:-ml-0" />
      <LazyLoadImage src={loginImg} className="md:hidden mx-auto h-32 w-40" />
      <div className="shadow-lg md:-ml-24 rounded-xl max-h-max lg:px-10 md:my-auto z-50 bg-blue-50 p-5">
        <div className="flex gap-x-4 items-center justify-center ">
          <img src={logo} className="w-9 h-9" />
          <p className="text-xl md:text-3xl font-medium">
            <span className="text-blue-600">W</span>elcome back!
          </p>
        </div>
        <p className="mt-3 md:mt-5 text-xs text-center md:text-base">
          Let's get you ready for your next unforgettable event.
        </p>
        <div className="flex flex-col">
          <div className="flex">
            <Label title="Email" className="mt-5" />
            <Required className="mt-5" />
          </div>
          <Input type="email" className="mt-1 w-full" placeholder="Enter your email..." />
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
