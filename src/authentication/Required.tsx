import React from "react";
function Required({ className }) {
  return <p className={`ml-1 text-red-500 ${className}`}>*</p>;
}

export default Required;
