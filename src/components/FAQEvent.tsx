import React from "react";

import Accordion from "./Accordion";
const FAQEvent = () => {
  const items = [
    {
      title: "How do I create an event?",
      description: "Go to the calendar section, click on the desired date, fill in the event details, and save it.",
    },
    {
      title: "Can I set recurring events?",
      description: "Yes, you can create recurring events such as daily, weekly, or monthly occurrences.",
    },
    {
      title: "Will I receive notifications for my events?",
      description: "Yes, you can enable notifications to receive timely reminders about your upcoming events.",
    },
    {
      title: " Can I invite others to my events?",
      description: "Yes, you can send event invites to friends and colleagues via email.",
    },
    {
      title: "How can I edit or delete an event?",
      description: "Simply click on the event in your calendar, and you'll have the option to edit or delete it.",
    },
  ];
  return (
    <div className="animate-appear mt-12">
      {items.map((item, index) => (
        <Accordion key={index} title={item.title} description={item.description} />
      ))}
    </div>
  );
};

export default FAQEvent;
