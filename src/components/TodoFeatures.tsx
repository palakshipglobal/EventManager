import React from "react";
import tick from "../assets/tick.png";
import add from "../assets/add-file.png";
import follow from "../assets/follow-up.png";
import network from "../assets/network.png";
import reminder from "../assets/reminder.png";
import priority from "../assets/priority.png";

const TodoFeatures = () => {
  const tasks = [
    {
      icon: add,
      title: "Quick Task Addition",
      description: "Easily add tasks with details such as due dates, priorities, and descriptions.",
    },
    {
      icon: priority,
      title: "Prioritization",
      description: "Categorize tasks by priority levels to focus on what matters most.",
    },
    {
      icon: follow,
      title: "Progress Tracking",
      description: "Monitor task progress with checklists and completion percentages.",
    },
    {
      icon: reminder,
      title: "Reminders & Alerts",
      description: "Set reminders to keep yourself on track and ensure deadlines are met.",
    },
    {
      icon: tick,
      title: "Recurring Tasks",
      description: "Automate repetitive tasks such as daily workouts or weekly reviews.",
    },
    {
      icon: network,
      title: "Share with Others",
      description: "Collaborate with teammates, family, or friends to manage joint tasks.",
    },
  ];
  return (
    <div className="md:mt-10 mt-6">
      <p className="md:text-2xl text-xl font-medium animate-appear text-center">
        Stay productive and organized with our{" "}
        <span className="text-blue-600 md:text-3xl text-2xl">to-do list feature</span>. Whether you're managing work
        projects or personal tasks, this feature helps you achieve your goals efficiently.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 md:mt-20 mt-8 gap-y-2 md:gap-y-5">
        {tasks.map((task) => (
          <div className="flex flex-col text-center p-3 md:p-5">
            <img src={task.icon} className="w-8 h-8 mx-auto" alt={task.title} />
            <p className="text-lg mt-2 md:mt-4 font-medium">{task.title}</p>
            <p className="text-sm text-gray-800 mt-2 md:mt-3">{task.description}</p>
          </div>
        ))}
      </div>
      <p className="md:text-2xl text-xl md:mt-20 mt-8 text-center font-medium">
        Take control of your day with our <span className="font-bold md:text-3xl text-2xl">to-do feature</span> and
        accomplish more with
        <span className="font-bold md:text-3xl text-2xl"> less effort</span>.
      </p>
    </div>
  );
};

export default TodoFeatures;
