import React from "react";
import Card from "./Card";
import todos from "../assets/calendar.png";
import collab from "../assets/community.png";
import blog from "../assets/management.png";
import event from "../assets/event-list.png";

function AboutGradient() {
  const cardData = [
    {
      text: "events",
      description: "Effortlessly schedule and manage events.",
      Icon: event,
    },
    {
      text: "todos",
      description: "Organize tasks and stay on track.",
      Icon: todos,
    },
    {
      text: "blogs",
      description: "Share ideas and insights through blogging.",
      Icon: blog,
    },
    {
      text: "Collaborate",
      description: "Work together seamlessly with team-focused tools.",
      Icon: collab,
    },
  ];
  return (
    <div>
      <div className="bg-gradient-to-r mt-8 md:mt-20 from-blue-600 via-blue-500 to-blue-300 text-white rounded-lg md:p-10 pb-20 md:pb-32 relative py-5 px-3">
        <p className="text-3xl font-semibold text-center">
          We Provide Tools to <span className="text-blue-800"> Organize, Collaborate,</span> and{" "}
          <span className="text-blue-800">Create, Streamlining</span> Your Tasks, Events, and Ideas.
        </p>
        <p className="text-center text-md mt-5 px-5">
          Our platform is your ultimate assistant for managing tasks, scheduling events, and sharing ideas. Whether
          you’re working solo or collaborating with a team, get everything done in one place with ease.
        </p>
        <div className="flex items-center justify-center">
          <button className="rounded-full py-2.5 px-7 bg-white text-blue-600 mr-3 text-sm font-base mt-5">
            Get Started
          </button>
        </div>
      </div>
      <div className="grid-cols-4 md:block mt-16 md:-mt-8 relative z-10 p-5">
        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 lg:gap-5 transform -translate-y-1/2">
            {cardData.map((data, index) => (
              <Card
                text={data.text}
                description={data.description}
                key={index}
                Icon={data.Icon}
                className="bg-white hover:shadow-lg"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutGradient;
