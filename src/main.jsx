import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./page/Home";
import CountryDetails from "./page/CountryDetails";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/:countryName",
    element: <CountryDetails/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <RouterProvider router={router}/>
  // </StrictMode>
)

