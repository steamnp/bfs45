import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";

import { routes } from "./routes";
import { useEffect } from "react";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") navigate("/task1");
  }, []);

  return (
    <div className="page">
      <NavBar />
      <div className="container">
        <Routes>
          {routes.map((route) => (
            <Route key={route.to} path={route.to} element={route.element} />
          ))}
        </Routes>
      </div>
    </div>
  );
}

export default App;
