import React from "react";
import EventFeatures from "./EventFeatures";
import BlogFeatures from "./BlogFeatures";
import { useState } from "react";
import TodoFeatures from "./TodoFeatures";

const TabComponent = ({ refs }) => {
  const [activeTab, setActiveTab] = useState("events");

  return (
    <div className="lg:px-28 mt-16 md:mt-24 p-2 md:p-4">
      <div className="grid grid-cols-3 text-center text-xl text-gray-800 border-b-2 border-gray-200">
        <p
          className={`cursor-pointer font-semibold ${
            activeTab === "events" ? "text-blue-600 border-b-4 border-blue-600" : ""
          }`}
          onClick={() => setActiveTab("events")}
        >
          Events
        </p>
        <p
          className={`cursor-pointer font-semibold ${
            activeTab === "todos" ? "text-blue-600 border-b-4 border-blue-600" : ""
          }`}
          onClick={() => setActiveTab("todos")}
        >
          Todos
        </p>
        <p
          className={`cursor-pointer font-semibold ${
            activeTab === "blogs" ? "text-blue-600 border-b-4 border-blue-600" : ""
          }`}
          onClick={() => setActiveTab("blogs")}
        >
          Blogs
        </p>
      </div>

      <div ref={refs.featuresRef}>
        {activeTab === "events" && <EventFeatures />}
        {activeTab === "todos" && <TodoFeatures />}
        {activeTab === "blogs" && <BlogFeatures />}
      </div>
    </div>
  );
};

export default TabComponent;
