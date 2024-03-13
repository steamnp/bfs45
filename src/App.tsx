import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
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
