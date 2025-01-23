import React from "react";


interface BenefitsCardProps {
    label: string;
    description: string;
    Icon: any;
    className: string;
}

const BenefitCard = ({ label, description, Icon, className }: BenefitsCardProps) => {
    return (
      <div
        className={`shadow-md h-64 w-64 text-center flex flex-col my-3 px-5 py-10 rounded-full hover:scale-105 transition duration-300  ${className}`}
      >
        <div className="flex items-center justify-center">
          <img src={Icon} className="w-8 h-8" />
        </div>
        <p className="text-lg mt-4 font-medium">{label}</p>
        <p className="text-sm text-gray-800 mt-3">{description}</p>
      </div>
    );
  };

export default BenefitCard;
