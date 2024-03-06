import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Details from "./components/Details";

const routes = [
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

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="page">
          <Routes>
            {routes.map((route, index) => (
              <Route
                key={index}
                exact={true}
                path={route.to}
                state={route.state}
                element={route.element}
              />
            ))}
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
