
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/home-page";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/contacts" />} />
      <Route path="/contacts" element={<HomePage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}

export default App;