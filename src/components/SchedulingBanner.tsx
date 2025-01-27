import React from "react";
import image4 from "../assets/image4.png";

const SchedulingBanner = () => {
  return (
    <div className="lg:px-28 mt-12 lg:mt-28 p-3 md:p-6">
      <div className="bg-gradient-to-r from-blue-700 via-blue-500 to-blue-300 text-white grid grid-cols-1 md:grid-cols-2 rounded-xl lg:gap-10">
        <div className="lg:px-10 p-5 lg:pt-20 pt-10">
          <p className="text-3xl font-semibold">Take your Scheduling to next level</p>
          <p className="text-sm my-6">
            From effortless task organization to seamless calendar integration, it makes managing your schedule easier
            than ever. Intuitive reminders and alerts ensure you never miss a deadline, while its user-friendly
            interface and powerful tools help you stay organized and prioritize tasks effectively.
          </p>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-y-2">
            <button className="rounded-lg py-2.5 px-4 bg-white text-blue-600 mr-3 text-sm font-base">
              Sign up for free
            </button>
            <button className="rounded-lg py-2.5 px-4 bg-white/20 text-white mr-3 text-sm font-base">Get a demo</button>
          </div>
        </div>
        <div>
          <img src={image4} className="h-96 w-full pr-2 md:block hidden" />
        </div>
      </div>
    </div>
  );
};

export default SchedulingBanner;
