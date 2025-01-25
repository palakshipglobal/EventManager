import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import logo from "../assets/Logo.png";
import Button from "./Button";

const Navbar = ({ refs }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const navigationItems = [
    { name: "Home", path: "/" },
    { name: "Features", ref: refs.featuresRef },
    { name: "Benefits", ref: refs.benefitsRef },
    { name: "About Us", path: "/about-us" },
  ];

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed bg-white z-50 w-full flex py-3 px-6 md:px-12 lg:px-16 justify-between items-center cursor-pointer">
      <div className="flex items-start gap-2">
        <img src={logo} className="h-7 w-7" alt="Logo" />
        <p className="md:text-xl text-md font-medium">
          EveMana<span className="text-blue-700">ge</span>
        </p>
      </div>
      <div className="md:flex md:gap-7 hidden">
        {navigationItems.map((item, index) =>
          item.path ? (
            <Link key={index} to={item.path} className="cursor-pointer group flex flex-col">
              <span>{item.name}</span>
              <span className="w-0 h-0.5 bg-blue-700 transition-all duration-500 ease-in-out group-hover:w-full"></span>
            </Link>
          ) : (
            <p key={index} className="cursor-pointer group flex flex-col" onClick={() => scrollToSection(item.ref)}>
              <span>{item.name}</span>
              <span className="w-0 h-0.5 bg-blue-700 transition-all duration-500 ease-in-out group-hover:w-full"></span>
            </p>
          ),
        )}
      </div>
      <div className="md:hidden">
        <Menu onClick={handleIsOpen} />
      </div>
      <div className="hidden md:block">
        <div className="flex items-center justify-center gap-3">
          <Button text="Login" className="bg-blue-700 text-white hover:bg-blue-600" />
          <button className="w-9 h-9 rounded-full bg-blue-500 text-white">PJ</button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 mt-14 py-2 fixed right-5 w-32 shadow-md bg-white rounded-lg">
          {navigationItems.map((item, index) =>
            item.path ? (
              <Link key={index} to={item.path} className="cursor-pointer ml-5 text-sm group flex flex-col">
                <span>{item.name}</span>
                <span className="w-0 h-0.5 bg-blue-700 transition-all duration-500 ease-in-out group-hover:w-14"></span>
              </Link>
            ) : (
              <p
                key={index}
                className="cursor-pointer ml-5 text-sm group flex flex-col"
                onClick={() => scrollToSection(item.ref)}
              >
                <span>{item.name}</span>
                <span className="w-0 h-0.5 bg-blue-700 transition-all duration-500 ease-in-out group-hover:w-14"></span>
              </p>
            ),
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
