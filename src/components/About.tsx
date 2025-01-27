import React from "react";
import Footer from "./Footer";
import AboutVision from "./AboutVision.tsx";
import AboutGradient from "./AboutGradient.tsx";
import AboutPlatform from "./AboutPlatform.tsx";
import AboutAchieve from "./AboutAchieve.tsx";

const About = () => {
  return (
    <div>
      <div className="lg:px-28 mt-12 lg:mt-24 p-3 md:p-6">
        <AboutVision />
        <AboutGradient />
        <AboutPlatform />
        <AboutAchieve />
      </div>
      <Footer />
    </div>
  );
};

export default About;
