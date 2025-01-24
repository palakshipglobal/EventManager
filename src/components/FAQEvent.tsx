import React,{useState} from "react";

import Accordion from "./Accordion";
const FAQEvent = () => {
  const items = [
    {
      title: "How do I create an event?",
      description: "Go to the calendar section, click on the desired date, fill in the event details, and save it.",
      id:1
    },
    {
      title: "Can I set recurring events?",
      description: "Yes, you can create recurring events such as daily, weekly, or monthly occurrences.",
      id:2
    },
    {
      title: "Will I receive notifications for my events?",
      description: "Yes, you can enable notifications to receive timely reminders about your upcoming events.",
      id:3
    },
    {
      title: " Can I invite others to my events?",
      description: "Yes, you can send event invites to friends and colleagues via email.",
      id:4
    },
    {
      title: "How can I edit or delete an event?",
      description: "Simply click on the event in your calendar, and you'll have the option to edit or delete it.",
      id:5
    },
  ];
  const [openAccordion, setOpenAccordion] = useState(null);

  const handleToggle = (id: any) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };
  return (
    <div className="animate-appear mt-4 md:mt-12">
      {items.map((item) => (
        <Accordion
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          isOpen={openAccordion === item.id}
          onToggle={handleToggle}
        />
      ))}
    </div>
  );
};

export default FAQEvent;
