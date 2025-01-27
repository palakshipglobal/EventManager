import React, { useRef } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import PageWrapper from "./PageWrapper";

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
  ]);
  return <RouterProvider router={router} />;
}

export default App;
