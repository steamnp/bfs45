import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Button from "../Button";
import CountryCounter from "../CountryCounter";

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
        <CountryCounter length={countryList.length} />
        <div>
          Not sure what country to name?
          <Button
            onClick={() => {
              props.setSearch(countryName);
              setCountryName(getRandomCountryName(props.countryNames));
            }}
          >
            Try {countryName}
          </Button>
          <Button onClick={() => props.setSearch("")}>Clear Search</Button>
        </div>
      </div>
      <br />
      <div className={style["list-container"]}>
        {countryList.map((country, index) => (
          <Link
            to={`/details/${country.name.common.toLowerCase()}/`}
            key={index}
            className={style.list}
          >
            <span className={style.flag}>{country.flag}</span>
            {country.name.common}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CountryList;
