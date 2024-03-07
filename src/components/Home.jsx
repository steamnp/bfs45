// src/components/Home.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Add this import statement

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        setCountries(data || []);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchCountries();
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Home Page</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by country name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <ul className="country-list">
        {filteredCountries.map((country) => (
          <li key={country.cca2} className="country-item">
            <Link to={`/detail/${country.cca2}`} className="country-link">
              {country.cca2 && (
                <img
                  src={country.flags.svg}
                  alt={`Flag of ${country.name.common}`}
                  className="country-flag"
                />
              )}
              <span className="country-name">{country.name.common}</span>
            </Link>
            {console.log(`Image URL: https://restcountries.com/v3.1/flag/${country.cca2.toLowerCase()}.svg`)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
