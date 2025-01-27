import React, { lazy } from "react";
import f1 from "../assets/f1.png";
import f2 from "../assets/f2.png";
import schedule from "../assets/schedule.png";
import calender from "../assets/calendar.png";
import active from "../assets/active.png";
import chat from "../assets/chat.png";
import color from "../assets/color-palette.png";
import community from "../assets/community.png";
import customisation from "../assets/customisation.png";
import tick from "../assets/tick.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

const EventFeatures = () => {
  const features = [
    {
      img: schedule,
      title: "Easy Event Creation",
      description: "quickly Add events with titles, descriptions, and specific dates to keep your plans organized.",
      highlight: "Add events",
    },
    {
      img: active,
      title: "Reminders & Notifications",
      description: "Set reminders to ensure you never miss an important deadline, meeting, or special occasion.",
      highlight: "Set reminders",
    },
    {
      img: calender,
      title: "Recurring Events",
      description: "Schedule recurring tasks such as weekly meetings, birthdays, and anniversaries effortlessly.",
      highlight: "Schedule recurring tasks",
    },
    {
      img: customisation,
      title: "Customizable Views",
      description: "Switch between daily, weekly, or monthly views for better visualization of your schedule.",
      highlight: "Switch",
    },
  ];
  const features2 = [
    {
      img: tick,
      title: "Sync Across Devices",
      description: "access your events anytime, anywhere by syncing across multiple devices.",
      highlight: "Syncing",
    },
    {
      img: color,
      title: "Color Coding",
      description: "helps in categorizing your events Different colors to prioritize and differentiate them easily.",
      highlight: "Different colors",
    },
    {
      img: chat,
      title: "User-Friendly Interface",
      description: "Navigate the calendar seamlessly with an intuitive and responsive design.",
      highlight: "Navigate",
    },
    {
      img: community,
      title: "Collaboration Options",
      description: "Share events with family, friends, or team members to keep everyone informed.",
      highlight: "Share",
    },
  ];
  return (
    <div className="md:mt-10 mt-6">
      <p className="md:text-2xl text-xl font-medium animate-appear text-center">
        Effortlessly organize your schedule with our{" "}
        <span className="text-blue-600 md:text-3xl text-2xl">event calendar feature</span>. Whether you're planning{" "}
        <span className="text-blue-600 md:text-3xl text-2xl">personal activities</span> or{" "}
        <span className="text-blue-600 md:text-3xl text-2xl">professional commitments</span>, our calendar helps you
        stay on top of your schedule with ease.
      </p>
      <div className="mt-5 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 p-3">
        <div className="animate-slideInLeft">
          {features.map((feature, index) => (
            <div key={index} className="mt-5">
              <div className="flex gap-4 items-center">
                <img src={feature.img} className="w-7 h-7" />
                <p className="text-md md:text-lg font-medium">{feature.title}</p>
              </div>
              <p className="text-sm md:text-sm text-gray-800 mt-3">
                <span className="font-medium">{feature.highlight} </span>
                {feature.description.replace(feature.highlight, "")}
              </p>
            </div>
          ))}
        </div>
        <LazyLoadImage
          src={f1}
          className="rounded-xl scale-105 mt-16 lg:mt-5 hover:scale-110 hidden md:block transition duration-300 md:h-72 lg:h-[370px] w-full animate-appear"
        />
      </div>

      <div className="md:mt-20 mt-2 grid grid-cols-1 md:grid-cols-2 gap-16 px-3">
        <LazyLoadImage
          src={f2}
          className="rounded-xl scale-105 mt-16 lg:mt-10 hover:scale-110 hidden md:block transition duration-300 md:h-72 lg:h-[370px] w-full animate-appear"
          // loading="lazy"
        />
        <div className="animate-slideInRight">
          {features2.map((feature, index) => (
            <div key={index} className="md:mt-5 mt-4">
              <div className="flex gap-4 items-center">
                <img src={feature.img} className="w-7 h-7" />
                <p className="text-md md:text-lg font-medium">{feature.title}</p>
              </div>
              <p className="text-sm md:text-sm text-gray-800 mt-3">
                <span className="font-medium">{feature.highlight} </span>
                {feature.description.replace(feature.highlight, "")}
              </p>
            </div>
          ))}
        </div>
      </div>
      <p className="md:text-2xl text-xl md:mt-14 mt-8 text-center font-medium">
        With our calendar feature,{" "}
        <span className="font-bold text-blue-600 md:text-3xl text-2xl">managing your time</span> has never been
        easier—stay productive and on track effortlessly.
      </p>
    </div>
  );
};

export default EventFeatures;
