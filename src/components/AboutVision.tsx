import React from "react";
import people from "../assets/about.png";

function AboutVision() {
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
  return (
    <div>
      <p className="text-2xl font-semibold md:pl-10">
        <span className="text-blue-600 text-3xl">A</span>bout Us
      </p>
      <p className="text-2xl font-medium md:ml-10 mt-2 md:mt-4">
        Start Your Journey to <span className="text-blue-600 text-3xl">Seamless Organization</span> Today
      </p>
      <div className="mt-2 md:mt-14">
        <div className="grid grid-cols-1 items-center md:grid-cols-2">
          <div className="flex flex-col w-5/6">
            <img src={people} className="h-96 hidden md:block" />
          </div>
          <div className="flex flex-col gap-y-2 mt-8 md:mt-0">
            {lightCardData.map((item, index) => (
              <LightCard title={item.title} description={item.description} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutVision;
const LightCard = ({ title, description }) => {
  return (
    <div className="flex flex-col p-5 bg-blue-200 rounded-xl">
      <p className="font-medium bg-white p-2 rounded-lg max-w-28">{title}</p>
      <p className="mt-2 text-sm leading-5">{description}</p>
    </div>
  );
};
