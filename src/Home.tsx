import React, { useState } from "react";
import home from "./assets/home.webp";
import { Star, Banknote, BellRing, AlarmClockCheck, AudioWaveform, Menu } from "lucide-react";
const Home = () => {
  return (
    <div className="md:p-4 p-1">
      <Navbar />
      <div className="flex flex-col items-center justify-center">
        <p className="md:text-4xl text-lg md:mt-16 mt-10 font-semibold text-center">
          Streamline your <span className="text-blue-700">Event Planning</span> effortlessly.
        </p>
        <p className="text-gray-800 mt-2 md:mt-4 font-medium md:text-md text-center text-sm">
          Plan, organize, and execute with ease.
        </p>
        <button className="text-white bg-blue-700 hover:bg-blue-600 rounded-full text-sm px-4 py-2 my-3">
          Start orgainising
        </button>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-10 mt-10">
          <InfoCard Icon={Star} text="4.9 Customer Rating" />
          <InfoCard Icon={Banknote} text="Completely Free" />
          <InfoCard Icon={BellRing} text="Reminders and Alerts" />
          <InfoCard Icon={AlarmClockCheck} text="Push Notifications" />
        </div>
      </div>
      <div className="mt-10 px-32">
        <div className="bg-gray-100 rounded-xl p-3 animate-floating">
        <img src={home} alt="" className="h-[720px] w-full rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default Home;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };
  const navigationItems = ["Home", "Events", "Benefits", "About Us"];
  return (
    <div>
      <div className="sticky w-full flex p-3 justify-between items-center cursor-pointer">
        <div className="flex items-start gap-2">
          <AudioWaveform className="mt-0.5 text-blue-600 size-4 md:size-6" />
          <p className="md:text-xl text-md font-medium">
            EveMana<span className="text-blue-700">ge</span>
          </p>
        </div>
        <div className="md:flex md:gap-7 hidden">
          {navigationItems.map((item, index) => (
            <p key={index} className="cursor-pointer mt-4 group flex flex-col">
              <span>{item}</span>
              <span className="w-0 h-0.5 bg-blue-700 transition-all duration-500 ease-in-out group-hover:w-full"></span>
            </p>
          ))}
        </div>
        <div className="hidden md:block">
          <button className="rounded-lg py-2 px-4 bg-gray-50 text-blue-700 mr-3 text-sm">Login</button>
          <button className="rounded-lg py-2 px-4 bg-blue-700 text-white mr-3 text-sm hover:bg-blue-600">
            Get Started
          </button>
        </div>
        <div className="md:hidden">
          <Menu onClick={handleIsOpen} />
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 p-2 fixed right-5 w-32 shadow-md bg-white rounded-lg">
          {navigationItems.map((item, index) => (
            <p key={index} className="cursor-pointer ml-5 text-sm group flex flex-col">
              <span>{item}</span>
              <span className="w-0 h-0.5 bg-blue-700 transition-all duration-500 ease-in-out group-hover:w-14"></span>
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

const InfoCard = ({ Icon, text }) => {
  return (
    <div className="border border-gray-300 p-2 rounded-md text-sm text-gray-800">
      <div className="flex items-center gap-1">
        <Icon className="size-5 fill-blue-700 text-white" />
        {text}
      </div>
    </div>
  );
};
