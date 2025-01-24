import React from "react";
import Accordion from "./Accordion";

const FAQPrivacy = () => {
  const items = [
    {
      title: "How can I reset my password?",
      description:
        "You can reset your password by clicking on the 'Forgot Password' link on the login page and following the instructions.",
    },
    {
      title: "Is my data secure on this platform?",
      description:
        "Yes, we take security seriously and implement measures like encryption and secure authentication to protect your data.",
    },
    {
      title: "Can I delete my account?",
      description:
        "Yes, you can delete your account from the settings page. Please note that this action is irreversible.",
    },
    {
      title: "Do you store my personal information?",
      description:
        "We only store the necessary data required for your account functionality and do not share your information with third parties.",
    },
  ];

  return (
    <div className="animate-appear mt-4 md:mt-12">
      {items.map((item, index) => (
        <Accordion key={index} title={item.title} description={item.description} />
      ))}
    </div>
  );
};

export default FAQPrivacy;
