import React from "react";

const Button = ({ text, className, onClick }: { text: string; className: string; onClick?: any }) => {
  return (
    <button className={`rounded-full py-2 px-4 text-sm ${className}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
