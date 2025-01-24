import React from "react";
import Button from "./Button";
import home2 from "../assets/home2.png";
import free from "../assets/jackpot.png";
import rating from "../assets/customer-satisfaction.png";
import notification from "../assets/notification.png";
import reminder from "../assets/reminder.png";
// import { LazyLoadImage } from "react-lazy-load-image-component";

const HeroSection = ({ refs }) => {
  const data = [
    {
      text: "4.9 Customer Rating",
      Icon: rating,
    },
    {
      text: "Completely Free",
      Icon: free,
    },
    {
      text: "Reminders and Alerts",
      Icon: reminder,
    },
    {
      text: "Push Notifications",
      Icon: notification,
    },
  ];

  return (
    <div ref={refs.heroSectionRef}>
      <div className="flex flex-col items-center justify-center">
        <p className="md:text-3xl px-2 text-lg md:mt-24 mt-20 font-semibold text-center">
          Streamline your <span className="text-blue-700 md:text-4xl text-xl">Event Planning</span> effortlessly.
        </p>
        <p className="text-gray-800 mt-2 md:mt-8 font-medium md:text-lg text-center text-md">
          Plan, organize and execute with ease.
        </p>
        <Button text="Start Organizing" className="text-white bg-blue-700 hover:bg-blue-600 my-8" />
        <div className="grid grid-cols-2 pl-2 gap-x-1 md:grid-cols-4 gap-y-8 lg:gap-10 mt-7">
          {data.map((item, index) => (
            <InfoCard key={index} Icon={item.Icon} text={item.text} />
          ))}
        </div>
      </div>
      <div className="md:px-24 lg:px-32 hidden md:block">
        <img src={home2} alt="" className="md:h-[400px] lg:h-[550px] mt-14 h-72 w-full rounded-xl" />
      </div>
    </div>
  );
};

export default HeroSection;

const InfoCard = ({ Icon, text }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <img src={Icon} className="w-7 h-7" />
      <div>{text}</div>
    </div>
  );
};
