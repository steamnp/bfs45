import { BrowserRouter, Route, Routes } from "react-router-dom";

import { routes } from "./routes";

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
