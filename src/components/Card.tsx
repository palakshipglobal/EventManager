import React from "react";

const Card = ({ text, description, Icon, className }) => {
  return (
    <div className={`px-3 py-5 rounded-2xl shadow-md ${className}`}>
      <div className="flex items-center gap-2 lg:gap-4">
        <img src={Icon} className="hidden md:block md:size-6" />
        <p className="uppercase font-medium text-xs lg:text-md">{text}</p>
      </div>
      <p className="mt-5 text-xs md:text-sm">{description}</p>
    </div>
  );
};
export default Card;
