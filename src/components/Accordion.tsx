import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const Accordion = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="shadow-sm mb-2 p-3 rounded-lg">
      <div onClick={toggleAccordion} className="cursor-pointer flex justify-between">
        <h3 className="font-medium text-base">{title} </h3>
        <p>{isOpen ? <ChevronUp /> : <ChevronDown />}</p>
      </div>
      <div
        className={`overflow-hidden text-sm transition-max-height duration-300 ease-in-out  my-2 text-gray-800 ${
          isOpen ? "max-h-10" : "max-h-0"
        } `}
      >
        {description}
      </div>
    </div>
  );
};

export default Accordion;
