import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function CountryDetails() {

  const [country, setCountry] = useState();
  const [error, setError] = useState('');

  const { countryName } = useParams();
  const url = `https://restcountries.com/v3.1/name/${countryName}`

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await res.json();
        setCountry(data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchCountry();
  }, []);

  return (
    <>
      <div >
        {country &&
          country.map((country) => (
            <div key={country.name.common}>
              <span className="country-name">{country.name.common}</span>

              <img
                src={country.flags.svg}
                alt={`Flag of ${country.name.common}`}
              />
            </div>
          ))}
        {error && <div>{error}</div>}
      </div>
    </>
  );
}

export default CountryDetails;
