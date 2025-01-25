import React, { useRef } from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import TabComponent from "./TabComponent";
import SchedulingBanner from "./SchedulingBanner";
import Benefits from "./Benefits";
import GradientBanner from "./GradientBanner";
import Price from "./Price";
import FAQ from "./FAQ";
import Footer from "./Footer";

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
      <HeroSection refs={refs} />
      <TabComponent refs={refs} />
      <SchedulingBanner />
      <Benefits refs={refs} />
      <GradientBanner />
      <Price />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
