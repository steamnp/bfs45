import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Detail from "./components/Detail";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/pokemon/:name" element={<Detail />}></Route>
    </Routes>
  );
}
