import React from "react";
import Button from "./Button.tsx";
import Card from "./Card.tsx";
import team from "../assets/team.jpg";
import progress from "../assets/performance.png";
import commitment from "../assets/network.png";
import honesty from "../assets/customer-satisfaction.png";
function AboutAchieve() {
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
    <div className="md:mt-24 mt-8 flex flex-col gap-y-5">
      <div className="flex gap-5">
        <img src={team} className="h-72 rounded-lg md:pl-10 hidden md:block md:w-1/2" />
        <div className="flex flex-col bg-blue-100 rounded-xl py-5 px-10">
          <p className="text-2xl font-medium">We're here to help you achieve your goals</p>
          <p className="text-sm mt-3">
            By providing the tools and support you need to stay organized and focused. Whether you’re managing personal
            tasks, planning events, or collaborating with a team, our platform is designed to streamline your workflow
            and simplify your life.
          </p>
          <Button text="Contact Us" className="bg-blue-600 hover:bg-blue-500 mt-5 text-white max-w-max" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-y-0 gap-x-5 md:pl-10">
        {achieveCardData.map((item, index) => (
          <Card text={item.title} description={item.description} key={index} Icon={item.Icon} className="bg-blue-100" />
        ))}
      </div>
    </div>
  );
}

export default AboutAchieve;
