import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "../styles/home.module.css";

function Detail() {
  const [countryDetail, setCountryDetail] = useState();
  const { name } = useParams();

  useEffect(() => {
    const getDetails = async () => {
      const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
      const data = await res.json();
      console.log(data);
      setCountryDetail(data);
    };
    getDetails();
  }, [name]);

  return (
    <div>
      {countryDetail &&
        countryDetail.map((country, index) => {
          return (
            <div key={index}>
              <img src={country.flags.svg} className={style.image} />
              <ul>
                <li>Name: {country.name.common}</li>
                <li>Population: {country.population}</li>
                <li>Region: {country.region}</li>
                <li>Capital: {country.capital}</li>
                <li>Languages: {Object.values(country.languages) + ",  "}</li>
              </ul>
            </div>
          );
        })}
    </div>
  );
}

export default Detail;
