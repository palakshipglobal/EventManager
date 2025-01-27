import { useState } from "react";
import React from "react";
import Button from "./Button";
import { ChevronLeft, ChevronRight } from "lucide-react";
const Price = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = [
    {
      packageLabel: "Free",
      description: "Good for testing purposes",
      description2: "Free forever",
      price: "0",
      text: "Get Started",
    },
    {
      packageLabel: "Basic",
      description: "Best for low-traffic websites",
      description2: "Billed yearly",
      price: "5",
      text: "Try for free",
    },
    {
      packageLabel: "Premium",
      description: "Good for testing purposes",
      description2: "Free forever",
      price: "10",
      text: "Try for free",
    },
    {
      packageLabel: "Enterprise",
      description: "Best for low-traffic websites",
      description2: "Billed yearly",
      price: "20",
      text: "Try for free",
    },
  ];

  const handleLeftClick = () => {
    if (activeIndex > 0) setActiveIndex((prevIndex) => prevIndex - 1);
  };

  const handleRightClick = () => {
    if (activeIndex < cards.length - 1) setActiveIndex((prevIndex) => prevIndex + 1);
  };
  return (
    <div>
      <p className="text-2xl lg:px-28 mt-12 font-semibold text-center lg:text-start">
        Choose your <span className="text-blue-600 text-3xl">Plan</span>
      </p>
      <div className="flex md:items-center md:justify-center flex-col md:flex-row mt-3">
        <div className="my-auto hidden md:block ml-4 md:ml-2 lg:ml-10">
          <button
            onClick={handleLeftClick}
            className={`h-10 w-10 shadow-md rounded-full border border-gray-200 ${
              activeIndex === 0 ? "hidden" : "cursor-pointer"
            }`}
          >
            <ChevronLeft className="size-10 p-1 text-blue-600" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0 mt-6 md:mt-10 px-6">
          {cards.map((card, index) => (
            <div key={index} onClick={() => setActiveIndex(index)}>
              <PricingCard
                packageLabel={card.packageLabel}
                description={card.description}
                description2={card.description2}
                price={card.price}
                text={card.text}
                index={index}
                activeIndex={activeIndex}
              />
            </div>
          ))}
        </div>
        <div className="my-auto hidden md:block mr-2 lg:mr-10">
          <button
            onClick={handleRightClick}
            className={`h-10 w-10 shadow-md rounded-full border border-gray-200 ${
              activeIndex === cards.length - 1 ? "hidden" : "cursor-pointer"
            }`}
          >
            <ChevronRight className="size-10 p-1 text-blue-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Price;

interface PricingCardProps {
  packageLabel: string;
  description: string;
  price: string;
  description2: string;
  text: string;
  className?: string;
  index: any;
  activeIndex: any;
}

const PricingCard = ({
  packageLabel,
  description,
  description2,
  price,
  text,
  className,
  activeIndex,
  index,
}: PricingCardProps) => {
  return (
    <div
      className={`duration-300 rounded-lg relative shadow-md px-7 md:px-10 py-6 cursor-pointer ${className} ${
        index === activeIndex && "scale-105 bg-blue-200 z-10"
      }`}
    >
      <div className="flex justify-between md:flex-col">
        <div>
          <p className="font-semibold text-2xl mt-3">{packageLabel}</p>
          <p className="text-xs mt-2">{description}</p>
        </div>
        <div className="flex mt-3.5 md:mt-5">
          <p className="text-sm text-gray-700">$</p>
          <span className="text-4xl text-black">{price}</span>
          <p className="text-sm text-gray-700 mt-4">/mo</p>
        </div>
      </div>
      <p className="text-sm md:text-lg text-gray-700 mt-1 md:mt-2">{description2}</p>
      <Button
        text={text}
        className="bg-blue-400 w-full hover:bg-blue-300 mt-4 md:mt-8 px-10 py-3 rounded-md text-white"
      />
      <p className="font-medium mt-4 md:mt-8">Unlimited websites</p>
      <p className="font-medium mt-1">200 views</p>
      <p className="mt-1">Projects</p>
      <p className="mt-1">Collaborators</p>
      <p className="mt-1 line-through text-gray-400">Advanced Customisations</p>
      <p className="mt-1">Branding</p>
    </div>
  );
};
