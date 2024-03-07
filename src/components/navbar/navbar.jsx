import { Link } from "react-router-dom";
import world from "../../assets/countries.png";
import "./navbar.css";
import { useState } from "react";

function Navbar({ onSearch }) {
  const [search, setSearch] = useState("");

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearch(query);
    onSearch(query); // Call the onSearch function with the search query
  };

  return (
    <div className="topnav">
      <div>
        <Link to="/" className="nav-link">
          <img src={world} className="nav-img" />
        </Link>
      </div>
      <div>
        <input
          type="text"
          value={search}
          onChange={handleInputChange}
          placeholder="Search countries..."
        />
      </div>
    </div>
  );
}

export default Navbar;
