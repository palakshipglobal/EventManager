import React, { useState } from "react";
import home from "./assets/home.webp";
import home2 from "./assets/home2.png";
import image from "./assets/image.jpg";
import image4 from "./assets/image4.png";
import image3 from "./assets/image3.webp";
import f1 from "./assets/f1.png";
import f2 from "./assets/f2.png";
import logo from "/logo.png";
import {
  Star,
  Banknote,
  BellRing,
  AlarmClockCheck,
  Menu,
  Calendar1,
  CalendarCheck,
  CalendarDays,
  Clock,
  CreditCard,
  Infinity,
  Share2,
  LayoutDashboard,
  Settings,
  Instagram,
  Facebook,
  Copyright,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
const Home = () => {
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
    <div>
      <Navbar />
      <div className="md:p-4 p-2">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center">
          <p className="md:text-4xl text-lg md:mt-24 mt-20 font-semibold text-center">
            Streamline your <span className="text-blue-700">Event Planning</span> effortlessly.
          </p>
          <p className="text-gray-800 mt-2 md:mt-8 font-medium md:text-md text-center text-sm">
            Plan, organize and execute with ease.
          </p>

          <Button text="Start orgainising" className="text-white bg-blue-700 hover:bg-blue-600 my-8" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 lg:gap-10 mt-7">
            <InfoCard Icon={Star} text="4.9 Customer Rating" />
            <InfoCard Icon={Banknote} text="Completely Free" />
            <InfoCard Icon={BellRing} text="Reminders and Alerts" />
            <InfoCard Icon={AlarmClockCheck} text="Push Notifications" />
          </div>
        </div>
        <div className="lg:px-32 hidden md:block">
          <img src={home2} alt="" className="md:h-[550px] mt-14 h-72 w-full rounded-xl" />
        </div>
        {/* Scheduling Section */}
        <div>
          <p className="text-3xl font-bold uppercase text-center mt-20">Features</p>
          <div className="mt-10 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:px-32 gap-5 lg:gap-14 p-3">
            <div className="rounded-xl">
              <p className="text-3xl font-medium">
                Effortless <span className="text-blue-600">Scheduling</span> for every task in your day
              </p>
              <p className="text-sm text-gray-800 mt-5">
                Say <span className="font-medium">goodbye</span> to the hassale of managing your calender. EveManage
                streamlines your scheduling process, helping you <span className="font-medium">plan, organize</span> and
                stay on top of your commitments with ease. From <span className="font-medium">automated reminders</span>{" "}
                to seamless integration with your favorite tools, we ensure you never miss a beat.
              </p>
              <div className="grid grid-cols-2 mt-7 gap-y-3">
                <EventFeature Icon={Calendar1} label="Single day events" />
                <EventFeature Icon={CalendarCheck} label="Multiple day events" />
                <EventFeature Icon={Clock} label="Timed entry" />
                <EventFeature Icon={CalendarDays} label="Recurring events" />
              </div>
              <div className="flex justify-end items-center mr-20">
                <Button text="Create new Event" className="bg-blue-600 text-white lg:mr-3 hover:bg-blue-500 mt-5" />
              </div>
            </div>
            <img src={f1} className="rounded-xl hover:scale-105 transition duration-300 md:mt-10 lg:mt-0" />
          </div>
        </div>

        {/* No contracts Section */}
        <div className="md:mt-20 mt-5 grid grid-cols-1 md:grid-cols-2 lg:px-32 gap-14 p-3">
          <img src={f2} className="rounded-xl hover:scale-105 transition duration-300 md:mt-10 lg:mt-0" />

          <div className="rounded-xl">
            <p className="text-3xl font-medium">
              No <span className="text-blue-600">Contracts</span> and No Commitments
            </p>
            <p className="text-sm text-gray-800 mt-5">
              <span className="font-medium">With</span> us, you always have complete freedom over your event. All the
              incredible tools our ticketing solutions has to offer are
              <span className="font-medium">available to everyone</span> from the start with
              <span className="font-medium">no contracts</span> or <span className="font-medium">hidden fees</span> to
              worry about. We believe in
              <span className="font-medium">
                {" "}
                simplicity and transparency, giving you all the features upfront without
              </span>{" "}
              locking you into unnecessary commitments.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 mt-4 lg:mt-7 gap-y-3">
              <EventFeature Icon={CreditCard} label="No credit cards required" />
              <EventFeature Icon={Infinity} label="Unlimited features" />
            </div>
          </div>
        </div>
        {/* Scheduling Banner */}
        <div className="lg:px-20 mt-12 lg:mt-28">
          <div className="bg-gradient-to-r from-blue-700 via-blue-500 to-blue-300 text-white grid grid-cols-1 md:grid-cols-2 rounded-xl lg:gap-10">
            <div className="lg:px-10 p-5 lg:pt-20 pt-10">
              <p className="text-3xl font-semibold">Take your Scheduling to next level</p>
              <p className="text-sm my-6">
                From effortless task organization to seamless calendar integration, it makes managing your schedule
                easier than ever. Intuitive reminders and alerts ensure you never miss a deadline, while its
                user-friendly interface and powerful tools help you stay organized and prioritize tasks effectively.
              </p>
              <div className="grid grid-cols-2">
                <button className="rounded-lg py-2.5 px-4 bg-white text-blue-600 mr-3 text-sm font-base">
                  Sign up for free
                </button>
                <button className="rounded-lg py-2.5 px-4 bg-white/20 text-white mr-3 text-sm font-base">
                  Get a demo
                </button>
              </div>
            </div>
            <div>
              <img src={image4} className="h-96 w-full mt-2 md:block hidden" />
            </div>
          </div>
        </div>
        {/* Benefits Section */}
        <div className="md:mt-12 flex flex-col items-center justify-center p-3">
          <p className="text-4xl mt-5 font-medium text-center">
            The <span className="text-blue-600">smart choice</span> for your team
          </p>
          <p className="text-sm mt-3 text-gray-800 text-center">
            Everything you need to simplify your projects, boost productivity and keep your team aligned
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-10 gap-3 mt-10 md:mt-16 lg:px-20">
            <BenefitsCard
              label="Seamless Collaboration"
              description="Empower your team to collaborate in real time with easy task management and transparent project tracking."
              Icon={Share2}
              className="bg-red-50"
              iconColor="text-red-500"
            />
            <BenefitsCard
              label="All-in-one Solution"
              description="Manage everything from task to team communication in one intuitive platform designed to boost productivity."
              Icon={LayoutDashboard}
              className="bg-green-50"
              iconColor="text-green-500"
            />
            <BenefitsCard
              label="Customizable Workflow"
              description="Manage everything from task to team communication in one intuitive platform designed to boost productivity."
              Icon={Settings}
              className="bg-orange-50"
              iconColor="text-orange-500"
            />
          </div>
        </div>

        {/* Gradient Banner */}
        <div className="lg:px-20">
          <div className="flex flex-col items-center justify-center mt-16 text-center bg-gradient-to-br from-pink-600 via-red-500 to-yellow-300 text-white px-5 py-16 rounded-lg">
            <p className="text-3xl font-medium">Join 2,078,753 customers already using EveManage Apps</p>
            <p className="mt-4">Get the taste of 80+ powerful apps by EveManage. No credit card. Joining is free!</p>
            <Button
              text="Get started"
              className="bg-yellow-300 hover:bg-yellow-200 mt-8 px-9 py-3 rounded-md text-black"
            />
            <div className="flex mt-5 gap-2">
              <p>Get 20% discount now!</p>
              <div className="uppercase bg-black rounded-full py-1 px-3 text-xs">bonus</div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}

        <div className="flex mt-16">
          <div className="my-auto ml-10">
            <button
              onClick={handleLeftClick}
              disabled={activeIndex === 0}
              className={`h-10 w-10 shadow-md rounded-full border border-gray-200 ${
                activeIndex === 0 ? "cursor-not-allowed opacity-50" : "cursor-pointer"
              }`}
            >
              <ChevronLeft className="size-10 p-1 text-blue-600" />
            </button>
          </div>
          <div className="flex lg:px-24">
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
          <div className="my-auto mr-10">
            <button
              onClick={handleRightClick}
              disabled={activeIndex === cards.length - 1}
              className={`h-10 w-10 shadow-md rounded-full border border-gray-200 ${
                activeIndex === cards.length - 1 ? "cursor-not-allowed opacity-50" : "cursor-pointer"
              }`}
            >
              <ChevronRight className="size-10 p-1 text-blue-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };
  const navigationItems = ["Home", "Features", "Benefits", "About Us"];
  return (
    <div>
      <div className="fixed bg-white z-50 w-full flex py-3 px-5 justify-between items-center cursor-pointer">
        <div className="flex items-start gap-2">
          <img src={logo} className="h-7 w-7" />
          {/* <AudioWaveform className="mt-0.5 text-blue-600 size-4 md:size-6" /> */}
          <p className="md:text-xl text-md font-medium">
            EveMana<span className="text-blue-700">ge</span>
          </p>
        </div>
        <div className="md:flex md:gap-7 hidden">
          {navigationItems.map((item, index) => (
            <p key={index} className="cursor-pointer group flex flex-col">
              <span>{item}</span>
              <span className="w-0 h-0.5 bg-blue-700 transition-all duration-500 ease-in-out group-hover:w-full"></span>
            </p>
          ))}
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
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 p-2 fixed right-5 w-32 shadow-md bg-white rounded-lg">
          {navigationItems.map((item, index) => (
            <p key={index} className="cursor-pointer ml-5 text-sm group flex flex-col">
              <span>{item}</span>
              <span className="w-0 h-0.5 bg-blue-700 transition-all duration-500 ease-in-out group-hover:w-14"></span>
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

const Button = ({ text, className }: { text: string; className: string }) => {
  return <button className={`rounded-full py-2 px-4 text-sm ${className}`}>{text}</button>;
};

const InfoCard = ({ Icon, text }) => {
  return (
    <div className="flex flex-col items-center gap-1">
      <Icon className="size-8 fill-blue-700 text-white" />
      <div>{text}</div>
    </div>
  );
};

const EventFeature = ({ Icon, label }) => {
  return (
    <div className="flex gap-2 items-center">
      <Icon className="size-5 text-blue-600" />
      <p className="text-gray-800 text-sm">{label}</p>
    </div>
  );
};

interface BenefitsCardProps {
  label: string;
  description: string;
  Icon: any;
  className: string;
  iconColor: String;
}
const BenefitsCard = ({ label, description, Icon, className, iconColor }: BenefitsCardProps) => {
  return (
    <div className="shadow-md flex flex-col p-5 rounded-lg border border-gray-100 hover:scale-105 transition duration-300">
      <div className={`rounded-lg p-2 max-w-max ${className}`}>
        <Icon className={`size-6 ${iconColor}`} />
      </div>
      <p className="text-lg mt-4 font-medium">{label}</p>
      <p className="text-sm text-gray-800 mt-3">{description}</p>
      <button className="text-sm mt-5 text-blue-600 hover:underline">Learn more</button>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="bg-black text-white mt-16 py-10 sticky">
      <div className="flex justify-between px-5 gap-2 cursor-pointer">
        <div className="flex gap-2">
          <img src={logo} className="h-7 w-7" />
          <p className="md:text-xl text-md font-medium">
            EveMana<span className="text-blue-700">ge</span>
          </p>
        </div>
        <div className="flex gap-2 justify-end">
          <div className="bg-gray-50 rounded-full md:p-2 p-1 cursor-pointer">
            <Instagram className="md:size-5 size-3 text-black" />
          </div>

          <div className="bg-gray-50 rounded-full p-1 md:p-2 cursor-pointer ">
            <Facebook className="md:size-5 size-3 text-black" />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center"></div>
      <div className="mt-10 px-5">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
          <div>
            <p className="text-md">STAY CONNECTED</p>
            <p className="text-xs mt-4">Sign up for our latest updates and helpful resources.</p>
            <input
              type="email"
              className="w-72 h-10 mt-2 rounded-full bg-white/5 px-5 py-2 placeholder:text-xs"
              placeholder="Email address..."
            ></input>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            <div>
              <p className="uppercase text-md mb-2">product</p>
              <p className="text-sm mt-1">Home</p>
              <p className="text-sm mt-1">Events</p>
              <p className="text-sm mt-1">Benefits</p>
            </div>

            <div>
              <p className="uppercase text-md mb-2">legal</p>
              <p className="text-sm mt-1">Privacy Policy</p>
              <p className="text-sm mt-1">Terms & Conditions</p>
              <p className="text-sm mt-1">Services Agreement</p>
            </div>
            <div>
              <p className="uppercase text-md mb-2">community</p>
              <p className="text-sm mt-1">Blog</p>
              <p className="text-sm mt-1">Knowledgebase</p>
              <p className="text-sm mt-1">Support</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 flex justify-end gap-1 px-5">
        <Copyright className="size-3 mt-1" />
        <span className="text-xs md:text-sm">2025 All rights Reserved</span>
      </div>
    </div>
  );
};

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
      className={`transform transition-transform duration-300 bg-white overflow-x-auto shadow-md px-10 py-6 mt-10 cursor-pointer ${className} ${
        index === activeIndex ? "scale-105" : "bg-slate-100"
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
