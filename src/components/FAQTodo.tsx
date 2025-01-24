import React, { useState } from "react";
import Accordion from "./Accordion";
const FAQTodo = () => {
  const items = [
    {
      title: "How do I add a new to-do item?",
      description: "Simply click on the 'Add To-Do' button, enter your task details, and hit 'Save.'",
      id: 1,
    },
    {
      title: "Can I set reminders for my to-dos?",
      description:
        "Yes, you can set due dates and reminders for each to-do item to ensure you never miss an important task.",
      id: 2,
    },
    {
      title: "Can I categorize my to-dos?",
      description: "Absolutely! You can organize your to-dos into categories such as Work, Personal, and Shopping.",
      id: 3,
    },
    {
      title: "Is there an option to mark tasks as completed?",
      description:
        "Yes, you can mark tasks as completed, and they will be moved to the completed section for easy tracking.",
      id: 4,
    },
    {
      title: "Can I share my to-do list with others?",
      description: "Currently, sharing is not supported, but we are working on adding collaboration features soon.",
      id: 5,
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

export default FAQTodo;
