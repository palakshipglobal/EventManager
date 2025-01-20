import React, { useState } from "react";
import home from "./assets/home.webp";
import image from "./assets/image.jpg";
import image4 from "./assets/image4.png";
import image3 from "./assets/image3.webp";
import {
  Star,
  Banknote,
  BellRing,
  AlarmClockCheck,
  AudioWaveform,
  Menu,
  Calendar1,
  CalendarCheck,
  CalendarDays,
  Clock,
  CreditCard,
  Infinity,
} from "lucide-react";
const Home = () => {
  return (
    <div className="md:p-4 p-1">
      <Navbar />
      <div className="flex flex-col items-center justify-center">
        <p className="md:text-4xl text-lg md:mt-16 mt-10 font-semibold text-center">
          Streamline your <span className="text-blue-700">Event Planning</span> effortlessly.
        </p>
        <p className="text-gray-800 mt-2 md:mt-4 font-medium md:text-md text-center text-sm">
          Plan, organize and execute with ease.
        </p>
        <button className="text-white bg-blue-700 hover:bg-blue-600 rounded-full text-sm px-4 py-2 my-3">
          Start orgainising
        </button>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 lg:gap-10 mt-7">
          <InfoCard Icon={Star} text="4.9 Customer Rating" />
          <InfoCard Icon={Banknote} text="Completely Free" />
          <InfoCard Icon={BellRing} text="Reminders and Alerts" />
          <InfoCard Icon={AlarmClockCheck} text="Push Notifications" />
        </div>
      </div>
      <div className="mt-10 lg:px-32 p-3">
        <div className="bg-gray-100 rounded-xl p-3 animate-floating">
          <img src={home} alt="" className="md:h-[720px] h-72 w-full rounded-xl" />
        </div>
      </div>
      <div className="md:mt-20 mt-5 grid grid-cols-1 md:grid-cols-2 lg:px-32 gap-6 p-3">
        <div className="rounded-xl">
          <p className="text-3xl font-medium">
            Effortless <span className="text-blue-600">Scheduling</span> for every task in your day
          </p>
          <p className="text-sm text-gray-800 mt-5 px-2">
            Say goodbye to the hassale of managing your calender. EveManage streamlines your schedulling process,
            helping you plan, organize and stay on top of your commitments with ease. From automated reminders to
            seamless integration with your favorite tools, we ensure you never miss a beat.
          </p>
          <div className="grid grid-cols-2 mt-7 gap-y-3">
            <EventFeature Icon={Calendar1} label="Single day events" />
            <EventFeature Icon={CalendarCheck} label="Multiple day events" />
            <EventFeature Icon={Clock} label="Timed entry" />
            <EventFeature Icon={CalendarDays} label="Recurring events" />
          </div>
          <button className="rounded-full mt-7 py-2 px-4 bg-blue-600 text-white mr-3 text-sm hover:bg-blue-500">
            Create new Event
          </button>
        </div>
        <div className="bg-gray-100 rounded-xl p-8">
          <img src={image} className="rounded-xl " />
          {/* h-64 w-96 lg:m-auto */}
        </div>
      </div>

      <div className="md:mt-16 mt-5 grid grid-cols-1 md:grid-cols-2 lg:px-32 gap-6 p-3">
        <div className="bg-gray-100 rounded-xl p-8">
          <img src={image3} className="rounded-xl " />
          {/* h-64 w-96 lg:m-auto */}
        </div>
        <div className="rounded-xl">
          <p className="text-3xl font-medium mt-10">
            No <span className="text-blue-600">Contracts</span> and No Commitments
          </p>
          <p className="text-sm text-gray-800 mt-5 px-2">
            With us, you always have complete freedom over your event. All the incredible t ools ou r ticketing
            solutions has to offer are available to everyone from the start with no contracts or hidden fees to worry
            about. We believe in simplicity and transparency, giving you all the features upfront without locking you
            into unnecessary commitments.
          </p>
          <div className="grid grid-cols-1 mt-7 gap-y-3">
            <EventFeature Icon={CreditCard} label="No creadit cards required" />
            <EventFeature Icon={Infinity} label="Unlimited features" />
          </div>
        </div>
      </div>
      <div className="px-20 mt-16">
        <div className="bg-gradient-to-r from-blue-700 via-blue-500 to-blue-300 text-white grid grid-cols-2 rounded-xl gap-14">
          <div className="px-10 pt-20">
            <p className="text-3xl font-semibold">Take your Scheduling to next level</p>
            <p className="text-sm my-6">
              From effortless task organization to seamless calender integration. It makes staying on top o f your
              schedule easier and more effective than ever before.
            </p>
            <button className="rounded-lg py-2.5 px-4 bg-white text-blue-600 mr-3 text-sm font-base">
              Sign up for free
            </button>
            <button className="rounded-lg py-2.5 px-4 bg-white/20 text-white mr-3 text-sm font-base">Get a demo</button>
          </div>
          <div>
            <img src={image4} className="h-96 w-full mt-2" />
          </div>
        </div>
      </div>
      <div className="pb-32"></div>
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

const EventFeature = ({ Icon, label }) => {
  return (
    <div className="flex gap-2 items-center">
      <Icon className="bg-gray-100 p-2 size-8 rounded-lg" />
      <p className="text-gray-800 text-sm">{label}</p>
    </div>
  );
};
