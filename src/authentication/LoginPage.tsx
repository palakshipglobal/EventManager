import React from "react";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import { useState } from "react";

function LoginPage() {
  const [type, setType] = useState<"login" | "forgotPassword">("login");
  const handleTypeChange = (newType: "login" | "forgotPassword") => {
    setType(newType);
  };
  return (
    <div>
      <p className="font-semibold text-xl text-center flex flex-col p-8 tracking-tight">
       
      </p>
      {type === "login" && <Login handleTypeChange={handleTypeChange} />}
      {type === "forgotPassword" && <ForgotPassword handleTypeChange={handleTypeChange} />}
    </div>
  );
}

export default LoginPage;
