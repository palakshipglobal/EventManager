import Home from "./components/Home";
import TodoFeatures from "./components/TodoFeatures";
import React from "react";
export default function Routes() {
  return {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/features",
        element: <TodoFeatures />,
      },
      // {
      //   path: "/home/resume",
      //   element: <Resume />,
      // },
      // {
      //   path: "about",
      //   element: <About />,
      // },
    ],
  };
}
