import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/home";
import Details from "./pages/Details/details";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:name" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
