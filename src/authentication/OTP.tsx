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
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/components/ui/input-otp";

function OTP() {
  return (
    <div className="flex bg-blue-50 min-h-screen flex-col md:flex-row p-3 md:p-0">
      <LazyLoadImage src={bg} className="hidden max-h-screen md:block md:w-3/5 lg:w-1/2 md:-ml-10 lg:-ml-0" />
      <LazyLoadImage src={loginImg} className="md:hidden mx-auto h-32 w-40" />
      <div className="shadow-lg md:-ml-24 rounded-xl max-h-max lg:px-10 md:my-auto z-50 bg-blue-50 p-5">
        <p className="text-xl md:text-2xl text-center font-medium">Review Phone</p>
        <p className="mt-3 mb-8 text-xs text-center md:text-base">Code has been sent to +91 9872413267</p>
        <div className="flex justify-center">
          <InputOTP maxLength={6}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </div>
        <p className="mt-10 text-sm text-center">
          Didn't get Otp? <span className="text-blue-600 cursor-pointer hover:decoration-2">Send again</span>
        </p>
        <button className="bg-blue-600 hover:bg-blue-500 text-white w-full py-2 rounded-lg mt-8">Verify</button>
      </div>
    </div>
  );
}

export default OTP;
