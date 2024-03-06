import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Detail from "./pages/detail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/country-detail/:name" element={<Detail />}></Route>
    </Routes>
  );
}

export default App;
