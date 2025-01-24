import React, { useState } from "react";
import FAQEvent from "./FAQEvent";
import FAQTodo from "./FAQTodo";
import FAQBlog from "./FAQBlog";
import FAQPrivacy from "./FAQPrivacy";

const FAQ = () => {
  const [activeFaq, setActiveFaq] = useState("events");

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 p-2 md:p-4 lg:px-28 mt-12 md:mt-20 md:gap-24 gap-10">
      <div className="flex flex-col">
        <p className="text-3xl font-semibold text-center md:text-start">FAQs</p>
        <p className="mt-6 font-medium text-center md:text-start">
          Everything you need to know about <span className="text-lg text-blue-600">Events, To-Dos, Blogs</span> and{" "}
          <span className="text-lg text-blue-600">Account & Privacy</span>
        </p>
        <div className="grid grid-cols-2 gap-x-14 lg:gap-x-28 gap-y-5 mt-5 px-10 md:px-0 items-center justify-center">
          <FAQButton text="events" label="Events" onClick={() => setActiveFaq("events")} activeFaq={activeFaq} />
          <FAQButton text="todos" label="Todos" onClick={() => setActiveFaq("todos")} activeFaq={activeFaq} />
          <FAQButton text="blogs" label="Blogs" onClick={() => setActiveFaq("blogs")} activeFaq={activeFaq} />
          <FAQButton text="privacy" label="Privacy" onClick={() => setActiveFaq("privacy")} activeFaq={activeFaq} />
        </div>
      </div>
      {activeFaq === "events" && <FAQEvent />}
      {activeFaq === "todos" && <FAQTodo />}
      {activeFaq === "blogs" && <FAQBlog />}
      {activeFaq === "privacy" && <FAQPrivacy />}
    </div>
  );
};

export default FAQ;

interface FAQButtonProps {
  activeFaq: any;
  onClick: any;
  text: string;
  label: string;
}
const FAQButton = ({ activeFaq, onClick, text, label }: FAQButtonProps) => {
  return (
    <p
      className={`cursor-pointer font-semibold text-center border border-blue-600 rounded-full px-3 py-2 ${
        activeFaq === text && "bg-blue-600 text-white"
      }`}
      onClick={onClick}
    >
      {label}
    </p>
  );
};
