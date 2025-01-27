import React, { useRef } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

export default function PageWrapper({ children }) {
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
      <div className="overflow-auto h-screen">
        <Outlet />
      </div>
    </div>
  );
}
