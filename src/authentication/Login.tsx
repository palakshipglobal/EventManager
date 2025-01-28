import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import login from "../assets/login.png";
import bg from "../assets/bg.jpg";
import login2 from "../assets/login2.png";
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
    // <div className="flex flex-col md:flex-row items-center justify-center p-2">
    //   <LazyLoadImage
    //     src={login2}
    //     className="h-60 w-60 md:h-80 -mt-14 md:-mt-0 pt-10 md:w-80 lg:-ml-28 lg:h-2/5 lg:w-2/5"
    //   />
    //   <div className="w-2/5 md:mt-20 shadow-md rounded-lg p-5 md:px-10 md:py-5">
    //     <div className="flex gap-x-4 items-center justify-center">
    //       <img src={logo} className="w-9 h-9" />
    //       <p className="text-3xl font-medium">
    //         <span className="text-blue-600">W</span>elcome back!
    //       </p>
    //     </div>
    //     <p className="mt-5 text-sm md:text-base">Let's get you ready for your next unforgettable event.</p>
    //     <div className="flex flex-col">
    //       <div className="flex">
    //         <Label title="Email" className="mt-5" />
    //         <Required className="mt-5" />
    //       </div>
    //       <Input type="email" className="mt-1" placeholder="Enter your email..." />
    //       <div className="flex">
    //         <Label title="Password" className="mt-5" />
    //         <Required className="mt-5" />
    //       </div>
    //       <div className="flex">
    //         <Input
    //           type={showPassword ? "text" : "password"}
    //           className="w-full h-16 mt-1"
    //           placeholder="Enter your password..."
    //         />
    //         {showPassword ? (
    //           <Eye className="-ml-8 text-gray-800 size-4 mt-4 cursor-pointer" onClick={handleShowPassword} />
    //         ) : (
    //           <EyeOff className="-ml-8 text-gray-800 size-4 mt-4 cursor-pointer" onClick={handleShowPassword} />
    //         )}
    //       </div>
    //       <a href="#">
    //         <span
    //           className="text-blue-700 hover:underline cursor-pointer text-xs mt-2"
    //           onClick={() => handleTypeChange("forgotPassword")}
    //         >
    //           Forgot your password?
    //         </span>
    //       </a>
    //       <button className="bg-blue-600 hover:bg-blue-500 text-white w-full py-2 rounded-lg mt-8">Log in</button>
    //       <p className="mt-2 md:mt-5 text-xs text-center">
    //         Don't have an account?{" "}
    //         <Link to="/signup" className="text-blue-700 underline cursor-pointer">
    //           Register here
    //         </Link>
    //       </p>
    //     </div>
    //   </div>
    // </div>
    <div className="flex bg-image bg-no-repeat bg-blue-50 min-h-screen flex-col md:flex-row items-center justify-center p-2">
      <LazyLoadImage src={bg} className="h-60 w-60 md:h-80 -mt-14 md:-mt-0 pt-10 md:w-80 lg:-ml-28 lg:h-2/5 lg:w-2/5" />
      <div className="max-w-max md:mt-10 ml-96 shadow-md bg-white/20 rounded-lg p-5 md:px-10 md:py-5 backdrop-blur-lg">
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

export default Login;
