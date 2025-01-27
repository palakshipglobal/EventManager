import React from "react";

interface InputProps {
  type: string;
  placeholder: string;
  className?: string;
}

const Input = ({ type, placeholder, className }: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`rounded-md h-10 w-full focus-visible:outline-none focus-visible:ring-1 focus:ring-blue-400 p-2 border border-blue-300 text-sm  ${className}`}
    />
  );
};

export default Input;
