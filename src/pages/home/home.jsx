import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';


function Home() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const getAllCountries = async () => {
      try {
        const res = await fetch('https://restcountries.com/v3.1/all');
        const data = await res.json();

        if (data.length > 0) {
          setCountries(data);
        } else {
          setError('No countries found.');
        }
      } catch (error) {
        setError(error.message);
      }
    };
    getAllCountries();
  }, []);

  return (
    <div>
      {countries.map((country) => (
        <div key={uuidv4()}>
          <Link to={`/${country.name.common}`}>
            <img src={country.flags.svg}  width={200} />
            <div>{country.name.common}</div>
          </Link>
        </div>
      ))}
      {error && <div>{error}</div>}
    </div>
  );
}

export default Home;