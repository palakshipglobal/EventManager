import React from "react";
import community from "../assets/community.png";
import customisation from "../assets/customisation.png";
import web from "../assets/web.png";
import { BenefitsCard } from "./Home";

const Benefits = () => {
  return (
    <div className="mt-12 flex flex-col items-center justify-center p-3">
      <p className="text-4xl mt-5 font-medium text-center">
        The <span className="text-blue-600">smart choice</span> for your team
      </p>
      <p className="text-sm mt-3 text-gray-800 text-center">
        Everything you need to simplify your projects, boost productivity and keep your team aligned
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-10 gap-3 mt-10 md:mt-16 lg:px-20">
        <BenefitsCard
          label="Seamless Collaboration"
          description="Empower your team to collaborate in real time with easy task management and transparent project tracking."
          Icon={community}
          className="bg-red-50"
        />
        <BenefitsCard
          label="All-in-one Solution"
          description="Manage everything from task to team communication in one intuitive platform designed to boost productivity."
          Icon={web}
          className="bg-green-50"
        />
        <BenefitsCard
          label="Customizable Workflow"
          description="Manage everything from task to team communication in one intuitive platform designed to boost productivity."
          Icon={customisation}
          className="bg-orange-50"
        />
      </div>
    </div>
  );
};

export default Benefits;
