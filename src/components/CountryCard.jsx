import React from 'react'



function CountryCard(country) {
  return (
    <div className="country-card">
    <h2>{country.name?.common || "No country name available"}</h2>
    <p>Capital: {country.capital || "Unknown"}</p>
    <p>Population: {country.population || "Unknown"}</p>
  </div>
  )
}

export default CountryCard