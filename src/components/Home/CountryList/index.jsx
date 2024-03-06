import React, { useEffect, useState } from "react";

import style from "./list.module.css";

const getRandomCountryName = (countries) =>
  countries[Math.floor(Math.random() * countries.length)];

function CountryList(props) {
  const [countryList, setCountryList] = useState(props.countries);
  const [countryName, setCountryName] = useState(
    getRandomCountryName(props.countryNames)
  );

  useEffect(() => setCountryList(props.countries), [props.countries]);

  return (
    <div>
      <div className="center" style={{ justifyContent: "space-between" }}>
        Total Countries: {countryList.length}
        <div>
          Not sure what country to name?
          <button
            className="btn"
            onClick={() => {
              props.setSearch(countryName);
              setCountryName(getRandomCountryName(props.countryNames));
            }}
          >
            Try {countryName}
          </button>
          <button className="btn" onClick={() => props.setSearch("")}>
            Clear Search
          </button>
        </div>
      </div>
      <br />
      {countryList.map((country, index) => (
        <div key={index} className={style.list}>
          {country.name.common}
        </div>
      ))}
    </div>
  );
}

export default CountryList;
