import React from "react";
import community from "../assets/community.png";
import customisation from "../assets/customisation.png";
import web from "../assets/web.png";
import BenefitCard from "./BenefitCard";

const Benefits = ({ refs }) => {
  const benefits = [
    {
      label: "Seamless Collaboration",
      description:
        "Empower your team to collaborate in real time with easy task management and transparent project tracking.",
      Icon: community,
      className: "bg-pink-100 min-w-60",
    },
    {
      label: "Mobile Friendly",
      description:
        "Create and publish blogs on the go with mobile responsiveness allowing easy management anytime, anywhere.",
      Icon: web,
      className: "bg-yellow-100 min-w-60",
    },
    {
      label: "Customizable Workflow",
      description:
        "Manage everything from task to team communication in one intuitive platform designed to boost productivity.",
      Icon: customisation,
      className: "bg-blue-100 md:hidden lg:block",
      iconColor: "text-blue-500 min-w-60",
    },
  ];
  return (
    <div className="mt-12 flex flex-col items-center justify-center p-3" ref={refs.benefitsRef}>
      <p className="md:text-3xl text-2xl font-medium text-center">
        The <span className="text-blue-600 md:text-4xl text-3xl">smart choice</span> for your team
      </p>
      <p className="text-sm mt-3 text-gray-800 text-center">
        Everything you need to simplify your projects, boost productivity and keep your team aligned
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3 md:gap-y-0 lg:gap-8 gap-x-7 mt-10 lg:px-16">
        {benefits.map((benefit, index) => (
          <BenefitCard
            key={index}
            label={benefit.label}
            description={benefit.description}
            Icon={benefit.Icon}
            className={benefit.className}
          />
        ))}
      </div>
      <BenefitCard
        label="Customizable Workflow"
        description="Manage everything from task to team communication in one intuitive platform designed to boost productivity."
        Icon={customisation}
        className="bg-blue-100 hidden md:block lg:hidden my-0"
      />
    </div>
  );
};

export default Benefits;
