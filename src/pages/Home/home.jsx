import { useState, useEffect } from "react";
import "./home.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";

function Home() {
  const [countries, setCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const getCountries = async () => {
      try {
        const res = await fetch("https://restcountries.com/v3.1/all");
        const data = await res.json();

        if (res.ok) {
          setCountries(data);
        } else {
          throw new Error("Failed to fetch countries from the URL");
        }
      } catch (error) {
        console.error("Error fetching the countries ", error);
      }
    };

    getCountries();
  }, []);

  // Update the search query state
  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  };

  return (
    <div>
      {/* Render the Navbar component and pass handleSearch as a prop */}
      <Navbar onSearch={handleSearch} />

      <div className="container">
        {countries
          // filtering the search with {country.name.common}
          .filter((country) =>
            country.name.common.toLowerCase().includes(searchQuery)
          )
          .map((country) => (
            <div key={country.name.common} className="box">
              {/* Link to detail page */}
              <Link to={`/details/${country.name.common}`}>
                <img
                  className="flag"
                  src={country.flags.svg}
                  alt={country.name.common}
                />
              </Link>
              <div className="name">{country.name.common}</div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Home;
