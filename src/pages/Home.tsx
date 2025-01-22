import React, { useState } from "react";
import Price from "./Price";
import SchedulingBanner from "./SchedulingBanner";
import Benefits from "./Benefits";
import GradientBanner from "./GradientBanner";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import TabComponent from "./TabComponent";

const Home = () => {
  return (
    <div id="home">
      <Navbar />
      <div className="md:p-4 p-2">
        <HeroSection />
        <TabComponent />
        <SchedulingBanner />
        {/* <Benefits /> */}
        <GradientBanner />
        <Price />
      </div>
      <Footer />
    </div>
  );
};

export default Home;

interface BenefitsCardProps {
  label: string;
  description: string;
  Icon: any;
  className: string;
}
export const BenefitsCard = ({ label, description, Icon, className }: BenefitsCardProps) => {
  return (
    <div
      className={`shadow-md min-w-[300px] flex flex-col my-3 p-5 rounded-lg hover:scale-105 transition duration-300  ${className}`}
    >
      <img src={Icon} className="w-8 h-8" />
      <p className="text-lg mt-4 font-medium">{label}</p>
      <p className="text-sm text-gray-800 mt-3">{description}</p>
    </div>
  );
};

export const Button = ({ text, className }: { text: string; className: string }) => {
  return <button className={`rounded-full py-2 px-4 text-sm ${className}`}>{text}</button>;
};
