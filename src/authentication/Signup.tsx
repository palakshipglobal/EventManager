import React from "react";
import Label from "./Label";
import Input from "./Input";
import Required from "./Required";
import { Link } from "react-router-dom";
import register from "../assets/r.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Signup() {
  const formFields = [
    { title: "Name", placeholder: "Enter your name...", type: "text" },
    { title: "Contact Number", placeholder: "Enter your contact number...", type: "text" },
    { title: "Email", placeholder: "Enter your email...", type: "email" },
    { title: "Password", placeholder: "Enter your password...", type: "password" },
    { title: "Confirm Password", placeholder: "Confirm your password...", type: "password" },
  ];
  return (
    <div className="flex min-h-screen">
      <div className="bg-blue-100 w-1/2 md:p-3 hidden md:block">
        <div className="flex flex-col justify-center min-h-screen">
          <p className="text-2xl text-center font-medium">
            <span className="text-3xl text-blue-700">Sign up </span>now to unlock exclusive access and start your
            journey with us!
          </p>
          <LazyLoadImage src={register} className="w-full max-h-screen" />
        </div>
      </div>
      <div className="bg-blue-50 w-full md:w-1/2 p-3 flex justify-center">
        <div className="flex flex-col justify-center">
          <LazyLoadImage src={register} className="w-40 h-32 md:hidden mx-auto" />
          <div className="py-2 px-3 md:px-10 max-h-max rounded-xl shadow-md">
            <p className="text-center text-3xl md:mb-3 font-semibold">
              <span className="text-blue-600">R</span>egister Now!
            </p>
            <p className="md:hidden text-center">
              Manage your <span className="text-blue-600">tasks </span>effortlessly!
            </p>
            {formFields.map((field, index) => (
              <FormField key={index} title={field.title} placeholder={field.placeholder} type={field.type} />
            ))}

            <div className="flex mt-2 gap-2 items-start">
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
            <p className="mt-2 md:mt-1.5 text-xs text-center pb-3">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-700 underline cursor-pointer">
                Login
              </Link>
            </p>
          </div>
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
