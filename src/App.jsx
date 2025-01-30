import React, { useRef } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import PageWrapper from "./PageWrapper";
import LoginPage from "./authentication/LoginPage";
import Signup from "./authentication/Signup";
import ResetPassword from "./authentication/ResetPassword";

function App() {
  const heroSectionRef = useRef(null);
  const featuresRef = useRef(null);
  const benefitsRef = useRef(null);

  const refs = {
    heroSectionRef,
    featuresRef,
    benefitsRef,
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <PageWrapper />,
      children: [
        { path: "/", element: <Home refs={refs} /> },
        { path: "/about-us", element: <About /> },
      ],
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/reset",
      element: <ResetPassword />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
