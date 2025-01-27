import React from "react";
import task from "../assets/task-management.png";
import event from "../assets/event-list.png";
import progress from "../assets/performance.png";
function AboutPlatform() {
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
      <p className="text-2xl font-semibold -mt-24 md:-mt-0 text-center">
        Our platform offers a variety of tools designed to streamline{" "}
        <span className="text-3xl text-blue-600">productivity</span>, from task management to event{" "}
        <span className="text-3xl text-blue-600">scheduling</span>.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-10 md:mt-20 px-10 gap-10 lg:gap-16">
        {featureData.map((feature, index) => (
          <div key={index} className="text-center">
            <img src={feature.imgSrc} className="w-32 h-32 mx-auto" />
            <p className="text-2xl font-bold mt-5">{feature.title}</p>
            <p className="mt-5 leading-7">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutPlatform;
