import React from "react";
import Label from "./Label";
import Input from "./Input";
import Required from "./Required";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="w-screen min-h-screen bg-image bg-cover">
      <div className="flex flex-col pt-8 items-center justify-center">
        <p className="text-center text-2xl font-semibold">
          <span className="text-blue-600">R</span>egister Now!
        </p>
        <p className="mt-2 text-center">
          Manage your <span className="text-blue-600">tasks </span>effortlessly!
        </p>
        <div className="w-1/3 py-5 px-8 max-h-max rounded-lg mt-5 bg-white/20 backdrop-blur-md">
          <div className="flex">
            <Label title="Name" className="mt-2" />
            <Required className="mt-2" />
          </div>
          <Input type="text" className="w-full h-16 mt-1" placeholder="Enter your firstname..." />

          <div className="flex">
            <Label title="Phone number" className="mt-3" />
            <Required className="mt-3" />
          </div>
          <Input type="number" className="w-full h-16 mt-1" placeholder="Enter phone number..." />

          <div className="flex">
            <Label title="Email" className="mt-3" />
            <Required className="mt-3" />
          </div>
          <Input type="email" className="w-full h-16 mt-1" placeholder="Enter your email..." />

          <div className="flex">
            <Label title="Password" className="mt-3" />
            <Required className="mt-3" />
          </div>
          <Input type="password" className="w-full h-16 mt-1" placeholder="Enter password..." />

          <div className="flex">
            <Label title="Confirm Password" className="mt-3" />
            <Required className="mt-3" />
          </div>
          <Input type="password" className="w-full h-16 mt-1" placeholder="Confirm password..." />

          <div className="flex items-start mt-2 gap-2">
            <Input type="checkbox" className="max-w-max mt-1 cursor-pointer" />
            <p className="text-sm">
              I agree to all the <span className="text-blue-800">Terms</span>,{" "}
              <span className="text-blue-800">Privacy Policy</span> and{" "}
              <span className="text-blue-800">Conditions</span>
            </p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-500 text-white w-full px-28 py-2 rounded-lg mt-8">
            Create Account
          </button>
          <p className="mt-2 md:mt-3 text-xs text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-700 underline cursor-pointer">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
