import React, { useEffect, useState } from "react";

import { getCountryList } from "../../utils";

import CountryList from "./CountryList";

import style from "./home.module.css";

function getCountryListWithNames(countryList) {
  return countryList.map((country) => country.name.common);
}

function Home() {
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    try {
      const fetchCountries = async () => await getCountryList();

      fetchCountries().then((data) => {
        setCountries(data);
      });
    } catch (error) {
      setError(JSON.stringify(error));
    }
  }, []);

  const getCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="center">
        <input
          className="input-control"
          placeholder="Country Name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          disabled={countries.length === 0}
        />
      </div>
      <br />
      <div className={style.main}>
        {
          error ? (
            <>
              <div className="center">Something went wrong.</div>
              <br />
              <div className="center">{error}</div>
              <br />
              <div className="center">
                <button
                  className="btn"
                  onClick={() => window.location.reload(true)}
                >
                  Refresh Page
                </button>
              </div>
            </> // ERROR
          ) : countries.length === 0 ? (
            <>
              <div className="center">
                Hang in there... fetching countries...
              </div>
            </> // EMPTY
          ) : (
            <>
              <CountryList
                countries={getCountries}
                setSearch={setSearch}
                countryNames={getCountryListWithNames(countries)}
              />
            </>
          ) // COUNTRY LIST
        }
      </div>
    </div>
  );
}

export default Home;
