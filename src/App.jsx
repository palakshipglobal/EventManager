import React, { useRef } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import PageWrapper from "./PageWrapper";
import Login from "./authentication/Login";

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
      element:<Login/>
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
