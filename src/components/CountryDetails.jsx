import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function CountryDetails() {
  const { countryName } = useParams();
  const [country, setCountry] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
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
  }, [countryName]);

  return (
    <div>
      {country ? (
        <div>
          <h1>{country.name.common}</h1>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      {error && <p>{error}</p>}
    </div>
  );
}

export default CountryDetails;
