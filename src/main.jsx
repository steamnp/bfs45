import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Store from "./pages/store";
import Contact from "./pages/contact";
import Assignment from "./pages/assignment";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/store",
    element: <Store />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/",
    element: <Assignment />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
