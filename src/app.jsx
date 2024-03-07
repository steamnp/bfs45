import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Detail from "./pages/detail/detail";
import "./index.css";
import Error from "./pages/error";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/country-detail/:name" element={<Detail />}></Route>
      <Route path="*" element={<Error />}></Route>
    </Routes>
  );
}

export default App;
