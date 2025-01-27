import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";
import logo from "../assets/Logo.png";
import Button from "./Button";

const Navbar = ({ refs }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const navigationItems = [
    { name: "Home", path: "/", ref: refs.heroSectionRef },
    { name: "Features", path: "/", ref: refs.featuresRef },
    { name: "Benefits", path: "/", ref: refs.benefitsRef },
    { name: "About Us", path: "/about-us" },
  ];

  const navigate = useNavigate();

  const handleClick = (item: any) => {
    if (item.path) {
      navigate(item.path);
    }
    if (item.ref) {
      item.ref.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bg-white z-50 w-full flex py-3 px-6 md:px-12 lg:px-16 justify-between items-center ">
      <div className="flex items-start gap-2 cursor-pointer">
        <img src={logo} className="h-7 w-7" alt="Logo" />
        <p className="md:text-xl text-md font-medium">
          EveMana<span className="text-blue-700">ge</span>
        </p>
      </div>
      <div className="md:flex md:gap-7 hidden">
        {navigationItems.map((item, index) => (
          <p key={index} onClick={() => handleClick(item)} className="group cursor-pointer flex flex-col">
            <span className="hover:text-blue-600 hover:scale-105 text-base duration-100 cursor-pointer">
              {item.name}
            </span>
            <span className="w-0 h-0.5 bg-blue-700 transition-all duration-500 ease-in-out group-hover:w-full"></span>
          </p>
        ))}
      </div>
      <div className="md:hidden">
        <Menu onClick={handleIsOpen} />
      </div>
      <div className="hidden md:block">
        <div className="flex items-center text-blue-600 justify-center gap-1 cursor-pointer">
          <Link to="/login">Login</Link>
          <p className="text-black">/</p>
          <p>Register</p>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 mt-44 py-2 fixed right-5 pl-2 w-32 shadow-md bg-white rounded-lg">
          {navigationItems.map((item, index) => (
            <p key={index} onClick={() => handleClick(item)} className="group cursor-pointer flex flex-col">
              <span className="hover:text-blue-600 hover:scale-105 text-base duration-100">{item.name}</span>
              <span className="w-0 h-0.5 bg-blue-700 transition-all duration-500 ease-in-out group-hover:w-full"></span>
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
