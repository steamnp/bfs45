import Home from "./pages/Home";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";

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
  {
    to: "/*",
    text: "not-found",
    state: {},
    element: <NotFound />,
  },
];
