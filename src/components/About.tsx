import React from "react";
import Footer from "./Footer";
import task from "../assets/task-management.png";
import event from "../assets/event-list.png";
import progress from "../assets/performance.png";

const About = () => {
  const cardData = [
    {
      text: "events",
      description: "Effortlessly schedule and manage events.",
    },
    {
      text: "todos",
      description: "Organize tasks and stay on track.",
    },
    {
      text: "blogs",
      description: "Share ideas and insights through blogging.",
    },
    {
      text: "Collaboration",
      description: "Work together seamlessly with team-focused tools.",
    },
  ];

  const featureData = [
    {
      imgSrc: task,
      title: "Task Management",
      description:
        "Effortlessly organize tasks with easy-to-use to-do lists, priorities, and deadlines. Our task management tool ensures you stay on top of your work.",
    },
    {
      imgSrc: event,
      title: "Event Scheduling",
      description:
        "Plan and manage events with our intuitive scheduling feature. You can set dates, send invitations and integrate your calendar to avoid scheduling conflicts.",
    },
    {
      imgSrc: progress,
      title: "Progress Tracking",
      description:
        "Visualize your progress with analytics and reporting tools. Track your milestones, completed tasks, and upcoming events.",
    },
  ];

  return (
    <div>
      <div className="lg:px-28 mt-12 lg:mt-28 p-2 md:p-6">
        <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-300 text-white rounded-lg p-10 pb-32 relative">
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
        <div className="grid-cols-4 mt-10 hidden md:block relative z-10 p-5">
          <div className="relative lg:-mt-16 md:-mt-10">
            <div className="grid grid-cols-4 gap-3 lg:gap-8 absolute top-1/2 transform -translate-y-1/2">
              {cardData.map((data, index) => (
                <Card text={data.text} description={data.description} key={index} />
              ))}
            </div>
          </div>
        </div>
        <div>
          <p className="text-2xl font-semibold mt-20 text-center">
            Our platform offers a variety of tools designed to streamline{" "}
            <span className="text-3xl text-blue-600">productivity</span>, from task management to event{" "}
            <span className="text-3xl text-blue-600">scheduling</span>.
          </p>
          <div className="grid grid-cols-3 mt-20 px-10 gap-16">
            {featureData.map((feature, index) => (
              <div key={index} className="text-center">
                <img src={feature.imgSrc} className="w-32 h-32 mx-auto" />
                <p className="text-2xl font-bold mt-5">{feature.title}</p>
                <p className="mt-5 leading-7">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const Card = ({ text, description }) => {
  return (
    <div className="p-5 rounded-2xl shadow-md bg-white hover:border border-blue-400 hover:shadow-lg">
      <p className="uppercase font-medium">{text}</p>
      <p className="mt-5">{description}</p>
    </div>
  );
};



export default About;
