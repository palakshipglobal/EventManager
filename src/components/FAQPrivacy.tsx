import React, { useState } from "react";
import Accordion from "./Accordion";

const FAQPrivacy = () => {
  const items = [
    {
      title: "How can I reset my password?",
      description:
        "You can reset your password by clicking on the 'Forgot Password' link on the login page and following the instructions.",
      id: 1,
    },
    {
      title: "Is my data secure on this platform?",
      description:
        "Yes, we take security seriously and implement measures like encryption and secure authentication to protect your data.",
      id: 2,
    },
    {
      title: "Can I delete my account?",
      description:
        "Yes, you can delete your account from the settings page. Please note that this action is irreversible.",
      id: 3,
    },
    {
      title: "Do you store my personal information?",
      description:
        "We only store the necessary data required for your account functionality and do not share your information with third parties.",
      id: 4,
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
export default FAQPrivacy;
