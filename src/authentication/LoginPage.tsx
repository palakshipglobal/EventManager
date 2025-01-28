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
      {type === "login" && <Login handleTypeChange={handleTypeChange} />}
      {type === "forgotPassword" && <ForgotPassword handleTypeChange={handleTypeChange} />}
    </div>
  );
}

export default LoginPage;
