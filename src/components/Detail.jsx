// src/components/Detail.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const Detail = () => {
  const { countryCode } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    const fetchCountryDetail = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`);
        const data = await response.json();
        setCountry(data ? data[0] : null); // Ensure data is not undefined
      } catch (error) {
        console.error('Error fetching country detail:', error);
      }
    };

    fetchCountryDetail();
  }, [countryCode]);

  return (
    <div>
      <h2>Country Detail Page</h2>
      {country && (
        <div>
          <img
            src={country.flags.svg}
            alt={`Flag of ${country.name.common}`}
            className="country-flag"
          />
          <h3>{country.name.common}</h3>
          <p>Capital: {country.capital}</p>
          <p>Population: {country.population}</p>
          {country.description && (
            <div>
              <h4>Description:</h4>
              <p>{country.description}</p>
            </div>
          )}
          {country.languages && (
            <div>
              <h4>Languages:</h4>
              <ul>
                {Object.values(country.languages).map((language, index) => (
                  <li key={index}>{language}</li>
                ))}
              </ul>
            </div>
          )}
          {/* Add more details as needed */}
          <Link to="/">Back to Home</Link>
        </div>
      )}
    </div>
  );
};

export default Detail;
