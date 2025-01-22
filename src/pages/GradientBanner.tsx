import React from "react";
import { Button } from "./Home";

const GradientBanner = () => {
  return (
    <div className="lg:px-20">
      <div className="flex flex-col items-center justify-center mt-16 text-center bg-gradient-to-br from-pink-600 via-red-500 to-yellow-300 text-white px-5 py-16 rounded-lg">
        <p className="text-3xl font-medium">Join 2,078,753 customers already using EveManage Apps</p>
        <p className="mt-4">Get the taste of 80+ powerful apps by EveManage. No credit card. Joining is free!</p>
        <Button text="Get started" className="bg-yellow-300 hover:bg-yellow-200 mt-8 px-9 py-3 rounded-md text-black" />
        <div className="flex mt-5 gap-2">
          <p>Get 20% discount now!</p>
          <div className="uppercase bg-black rounded-full py-1 px-3 text-xs">bonus</div>
        </div>
      </div>
    </div>
  );
};

export default GradientBanner;
