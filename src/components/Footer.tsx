import React from "react";
import { Instagram, Facebook, Navigation, Copyright } from "lucide-react";
import logo from "../assets/Logo.png";

const Footer = () => {
  const data = [
    {
      title: "Product",
      items: ["Home", "Events", "Features", "Benefits"],
    },
    {
      title: "Resources",
      items: ["Technical support", "My account"],
    },
    {
      title: "Community",
      items: ["Blog", "Knowledgebase", "Support"],
    },
  ];
  return (
    <div>
      <div className="bg-gray-100 mt-24 py-10 px-6 md:px-12 lg:px-16">
        <div className="flex justify-between gap-4 sm:gap-2 cursor-pointer">
          <div className="flex gap-2">
            <img src={logo} className="h-7 w-7" />
            <p className="text-md md:text-xl font-medium">
              EveMana<span className="text-blue-700">ge</span>
            </p>
          </div>

          <div className="flex gap-3 justify-end">
            <FooterLinks Icon={Instagram} />
            <FooterLinks Icon={Facebook} />
          </div>
        </div>

        <div className="mt-5 lg:mt-8">
          <div className="flex flex-col lg:flex-row justify-between gap-8">
            <div>
              <p className="text-md font-medium">STAY CONNECTED</p>
              <p className="text-xs mt-4">Sign up for our latest updates and helpful resources.</p>
              <div className="flex mt-2">
                <input
                  type="email"
                  className="w-full sm:w-72 h-10 rounded-full bg-gray-200 px-5 py-2 placeholder:text-xs placeholder:text-gray-800"
                  placeholder="Email address..."
                />
                <div className="bg-white/50 w-7 h-7 rounded-full p-2 -ml-9 my-auto">
                  <Navigation className="w-4 h-4" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 md:gap-44 lg:gap-28">
              {data.map((section: any, index: any) => (
                <FooterSection key={index} title={section.title} items={section.items} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="my-1 text-gray-700 px-6 md:px-12 lg:px-16 flex justify-between">
        <div className="flex md:gap-1 gap-0.5">
          <Copyright className="size-3 mt-1" />
          <span className="text-xs md:text-sm">2025 All rights Reserved</span>
        </div>

        <div className="md:text-sm text-xs flex md:flex-row flex-col md:gap-5 gap-1">
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

const FooterSection = ({ title, items }: { title: any; items: any }) => {
  return (
    <div>
      <p className="uppercase text-sm md:text-md font-medium mb-2">{title}</p>
      {items.map((item: any, index: any) => (
        <p key={index} className="text-xs md:text-sm mt-1 cursor-pointer">
          {item}
        </p>
      ))}
    </div>
  );
};

const FooterLinks = ({ Icon }: { Icon: any }) => {
  return (
    <div className="bg-gray-300 rounded-full p-1.5 md:p-2 cursor-pointer">
      <Icon className="size-4 md:w-5 md:h-5 text-black" />
    </div>
  );
};
