import { useState } from "react";
import React from "react";
import { Button } from "./Home";
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
      className: "rounded-tl-lg rounded-bl-lg",
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
      className: "rounded-tr-lg rounded-br-lg",
    },
  ];

  const handleLeftClick = () => {
    if (activeIndex > 0) setActiveIndex((prevIndex) => prevIndex - 1);
  };

  const handleRightClick = () => {
    if (activeIndex < cards.length - 1) setActiveIndex((prevIndex) => prevIndex + 1);
  };
  return (
    <div className="flex md:items-center md:justify-center flex-col md:flex-row mt-16">
      <div className="my-auto hidden md:block ml-4 md:ml-2 lg:ml-10">
        <button
          onClick={handleLeftClick}
          disabled={activeIndex === 0}
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
              className={card.className}
              index={index}
              activeIndex={activeIndex}
            />
          </div>
        ))}
      </div>
      <div className="my-auto hidden md:block mr-2 lg:mr-10">
        <button
          onClick={handleRightClick}
          disabled={activeIndex === cards.length - 1}
          className={`h-10 w-10 shadow-md rounded-full border border-gray-200 ${
            activeIndex === cards.length - 1 ? "hidden" : "cursor-pointer"
          }`}
        >
          <ChevronRight className="size-10 p-1 text-blue-600" />
        </button>
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
      className={`duration-300 relative bg-white shadow-md px-10 py-6 cursor-pointer ${className} ${
        index === activeIndex && "scale-105 bg-blue-200 z-10"
      }`}
    >
      <p className="font-semibold text-2xl mt-3">{packageLabel}</p>
      <p className="text-xs mt-2">{description}</p>
      <div className="flex mt-5">
        <p className="text-sm text-gray-700">$</p>
        <span className="text-4xl text-black">{price}</span>
        <p className="text-sm text-gray-700 mt-4">/mo</p>
      </div>
      <p className="text-lg text-gray-700 mt-2">{description2}</p>
      <Button text={text} className="bg-blue-400 w-full hover:bg-blue-300 mt-8 px-10 py-3 rounded-md text-white" />
      <p className="font-medium mt-8">Unlimited websites</p>
      <p className="font-medium mt-1">200 views</p>

      <p className="mt-1">Projects</p>
      <p className="mt-1">Collaborators</p>
      <p className="mt-1 line-through text-gray-400">Advanced Customisations</p>
      <p className="mt-1">Branding</p>
    </div>
  );
};
