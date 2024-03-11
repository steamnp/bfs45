import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Country.css';

const Country = () => {
  const [country, setCountry] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const params = useParams();
  const { name } = params;

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${name}`
      );
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const data = await response.json();
      setCountry(data[0]);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [name]);

  return (
    <div className="country-details">
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        country && (
          <>
            <img
              className="country-flag"
              src={country.flags.svg}
              alt={`${country.name.common} flag`}
            />
            <div className="country-info">
              <h2 className="country-name">{country.name.common}</h2>
              <p className="country-detail">
                Population: {country.population.toLocaleString()}
              </p>
              <p className="country-detail">Region: {country.region}</p>
              <p className="country-detail">Subregion: {country.subregion}</p>
              <p className="country-detail">Capital: {country.capital}</p>
            </div>
          </>
        )
      )}
    </div>
  );
};

export default Country;
