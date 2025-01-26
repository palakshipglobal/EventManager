import React from "react";
import Footer from "./Footer";
import task from "../assets/task-management.png";
import event from "../assets/event-list.png";
import progress from "../assets/performance.png";
import todos from "../assets/calendar.png";
import collab from "../assets/community.png";
import blog from "../assets/management.png";
import people from "../assets/about.png";
import team from "../assets/team.jpg";
import commitment from "../assets/network.png";
import honesty from "../assets/customer-satisfaction.png";
import Button from "./Button.tsx";

const About = () => {
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
      text: "Collaboration",
      description: "Work together seamlessly with team-focused tools.",
      Icon: collab,
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

  const lightCardData = [
    {
      title: "Our Vision",
      description:
        "To empower individuals and teams to organize their lives seamlessly by unlocking productivity. We aim to be the go-to platform for task management and event planning, making life simpler and more efficient for everyone.",
    },
    {
      title: "Our Mission",
      description:
        "To provide an intuitive and user-friendly platform that combines advanced features with simplicity and to Enhance productivity while reducing stress and clutter.",
    },
    {
      title: "Our Values",
      description:
        "We value simplicity by keeping our platform easy and accessible for everyone, fostering innovation to continuously enhance our features. With a commitment to reliability and security, we create tools that promote seamless collaboration.",
    },
  ];

  const achieveCardData = [
    {
      title: "Commitment",
      description:
        "We are dedicated to providing exceptional solutions and unwavering support to help you achieve your goals.",
      Icon: commitment,
    },
    {
      title: "Honesty",
      description:
        "Transparency and integrity guide everything we do, ensuring trust and reliability in every interaction.",
      Icon: honesty,
    },
    {
      title: "Growth",
      description:
        "We embrace continuous learning and innovation, constantly evolving to meet the changing needs of our users.",
      Icon: progress,
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
                <Card
                  text={data.text}
                  description={data.description}
                  key={index}
                  Icon={data.Icon}
                  className="bg-white hover:border border-blue-400 hover:shadow-lg"
                />
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
          <div className="grid grid-cols-1 md:grid-cols-3 mt-20 px-10 gap-10 lg:gap-16">
            {featureData.map((feature, index) => (
              <div key={index} className="text-center">
                <img src={feature.imgSrc} className="w-32 h-32 mx-auto" />
                <p className="text-2xl font-bold mt-5">{feature.title}</p>
                <p className="mt-5 leading-7">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="md:mt-28 mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col w-5/6">
              <p className="text-2xl font-medium ml-10">
                Start Your Journey to <span className="text-blue-600">Seamless Organization</span> Today
              </p>
              <img src={people} className="h-96 hidden md:block" />
            </div>
            <div className="flex flex-col gap-y-5 mt-8 md:mt-0">
              {lightCardData.map((item, index) => (
                <LightCard title={item.title} description={item.description} key={index} />
              ))}
            </div>
          </div>
        </div>
        <div className="md:mt-24 mt-8 flex flex-col gap-y-5">
          <div className="flex gap-5">
            <img src={team} className="h-72 rounded-lg md:pl-10 hidden md:block md:w-1/2" />
            <div className="flex flex-col bg-blue-100 rounded-xl py-5 px-10">
              <p className="text-2xl font-medium">We're here to help you achieve your goals</p>
              <p className="text-sm mt-3">
                By providing the tools and support you need to stay organized and focused. Whether you’re managing
                personal tasks, planning events, or collaborating with a team, our platform is designed to streamline
                your workflow and simplify your life.
              </p>
              <Button text="Contact Us" className="bg-blue-600 hover:bg-blue-500 mt-5 text-white max-w-max" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-y-0 gap-x-5 md:pl-10">
            {achieveCardData.map((item, index) => (
              <Card
                text={item.title}
                description={item.description}
                key={index}
                Icon={item.Icon}
                className="bg-blue-100"
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

const Card = ({ text, description, Icon, className }) => {
  return (
    <div className={`px-3 py-5 rounded-2xl shadow-md ${className}`}>
      <div className="flex items-center gap-5 md:gap-2 lg:gap-5">
        <img src={Icon} className="size-6" />
        <p className="uppercase font-medium md:text-sm">{text}</p>
      </div>
      <p className="mt-5">{description}</p>
    </div>
  );
};

const LightCard = ({ title, description }) => {
  return (
    <div className="flex flex-col p-5 bg-blue-200 rounded-xl">
      <p className="font-medium bg-white p-2 rounded-lg max-w-28">{title}</p>
      <p className="mt-2 text-sm leading-5">{description}</p>
    </div>
  );
};

export default About;
