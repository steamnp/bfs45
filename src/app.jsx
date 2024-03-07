import { useState, useEffect } from "react";
import "./styles/country.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const getCountriesData = async () => {
      try {
        const res = await fetch("https://restcountries.com/v3.1/all");
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        setCountries(data);
      } catch (error) {
        setError(error.message);
      }
    };
    getCountriesData();
  }, []);

  return (
    <>
      <div className="container">
        {countries &&
          countries.map((country) => (
            <div key={country.name.common} className="country-container">
              <img
                src={country.flags.svg}
                alt={`Flag of ${country.name.common}`}
                className="country-flag"
              />
              <span className="country-name">{country.name.common}</span>
            </div>
          ))}
        {error && <div>{error}</div>}
      </div>
    </>
  );
}

export default App;
