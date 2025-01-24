import React, { useRef } from "react";
import Price from "./Price";
import SchedulingBanner from "./SchedulingBanner";
import GradientBanner from "./GradientBanner";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import TabComponent from "./TabComponent";
import Benefits from "./Benefits";
import FAQ from "./FAQ";

const Home = () => {
  const heroSectionRef = useRef(null);
  const featuresRef = useRef(null);
  const benefitsRef = useRef(null);
  const refs = {
    heroSectionRef,
    featuresRef,
    benefitsRef,
  };

  return (
    <div>
      <Navbar refs={refs} />
      <div>
        <HeroSection refs={refs} />
        <TabComponent refs={refs} />
        <SchedulingBanner />
        <Benefits refs={refs} />
        <GradientBanner />
        <Price />
        <FAQ />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
