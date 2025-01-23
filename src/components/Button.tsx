import React from "react";

const Button = ({ text, className }: { text: string; className: string }) => {
    return <button className={`rounded-full py-2 px-4 text-sm ${className}`}>{text}</button>;
  };

export default Button;
