import React, { useEffect, useState } from "react";

import { getCountryList } from "../../utils";

import CountryList from "../../components/CountryList";
import FlexBox from "../../components/FlexBox";

import style from "./home.module.css";
import Input from "../../components/Input";

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
      <FlexBox center={true}>
        <Input
          placeholder="Country Name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          disabled={countries.length === 0}
        />
      </FlexBox>
      <br />
      <div className={style.main}>
        {
          error ? (
            <>
              <FlexBox center={true}>Something went wrong.</FlexBox>
              <br />
              <FlexBox center={true}>{error}</FlexBox>
              <br />
              <FlexBox center={true}>
                <button
                  className="btn"
                  onClick={() => window.location.reload(true)}
                >
                  Refresh Page
                </button>
              </FlexBox>
            </> // ERROR
          ) : countries.length === 0 ? (
            <>
              <FlexBox center={true}>
                Hang in there... fetching countries...
              </FlexBox>
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
