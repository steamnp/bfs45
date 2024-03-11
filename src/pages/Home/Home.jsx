import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const data = await response.json();
      // console.log(data);
      //   console.log(data);
      setCountries(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        countries && (
          <div className="country-container">
            {countries.map((country) => (
              <Link
                to={`/country/${country.name.common}`}
                key={country.name.official}
              >
                <div className="country-item">
                  <h3>{country.name.common}</h3>
                  <img
                    src={country.flags.svg}
                    alt={`${country.name.common} flag`}
                  />
                </div>
              </Link>
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default Home;
