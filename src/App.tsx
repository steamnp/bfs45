import { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import "./App.css";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") navigate("/contacts");
  }, []);

  return (
    <Routes>
      <Route path="/contacts" element={<HomePage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}

export default App;
