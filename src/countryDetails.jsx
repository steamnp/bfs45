import React from 'react';

function CountryDetails({ country }) {
  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>Capital: {country.capital}</p>
      <p>Region: {country.region}</p>
      {/* Add more details as needed */}
    </div>
  );
}

export default CountryDetails;
