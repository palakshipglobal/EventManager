import React from "react";

function Label({ className, title }) {
  return <label className={`${className}`}>{title}</label>;
}

export default Label;
