import Home from "./pages/Home";
import Details from "./pages/Details";

export const routes = [
  {
    to: "/",
    text: "home",
    state: {},
    element: <Home />,
  },
  {
    to: "/details/:name/",
    text: "details",
    state: {},
    element: <Details />,
  },
];
