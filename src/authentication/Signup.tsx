import React from "react";
import Label from "./Label";
import Input from "./Input";
import Required from "./Required";
import { Link } from "react-router-dom";
import s from "../assets/s.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Signup() {
  const formFields = [
    { title: "Name", placeholder: "Enter your name...", type: "text" },
    { title: "Phone Number", placeholder: "Enter your phone number...", type: "number" },
    { title: "Email", placeholder: "Enter your email...", type: "email" },
    { title: "Password", placeholder: "Enter your password...", type: "password" },
    { title: "Confirm Password", placeholder: "Confirm your password...", type: "password" },
  ];

  return (
    <div className="flex md:gap-10 flex-col md:flex-row lg:gap-40 max-h-screen">
      <LazyLoadImage src={s} alt="" className="lg:w-2/5 md:w-80 hidden md:block" />
      <div className="flex flex-col p-3 md:p-0">
        <p className="text-center text-3xl mt-5 font-semibold">
          <span className="text-blue-600">R</span>egister Now!
        </p>
        <p className="mt-2 md:hidden text-center">
          Manage your <span className="text-blue-600">tasks </span>effortlessly!
        </p>
        <div className="py-1 mt-3 px-3 md:px-8 max-h-max rounded-lg shadow-md bg-white">
          {formFields.map((field, index) => (
            <FormField key={index} title={field.title} placeholder={field.placeholder} type={field.type} />
          ))}

          <div className="flex mt-2 gap-2">
            <Input type="checkbox" className="mt-1 cursor-pointer" />
            <p className="text-sm">
              I agree to all the <span className="text-blue-800">Terms</span>,{" "}
              <span className="text-blue-800">Privacy Policy</span> and{" "}
              <span className="text-blue-800">Conditions</span>
            </p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-500 text-white w-full py-2 rounded-lg mt-8">
            Create Account
          </button>
          <p className="mt-2 md:mt-1.5 text-xs text-center pb-2">
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

interface FormFieldProps {
  title: string;
  placeholder: string;
  type: string;
}
const FormField = ({ title, placeholder, type }: FormFieldProps) => {
  return (
    <div>
      <div className="flex">
        <Label title={title} className="mt-3" />
        <Required className="mt-3" />
      </div>
      <Input type={type} className="w-full h-16 mt-1" placeholder={placeholder} />
    </div>
  );
};

