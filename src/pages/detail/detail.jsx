import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import style from "./detail.module.css";
import { v4 as uuidv4 } from "uuid";

function Detail() {
  const [countryDetail, setCountryDetail] = useState();
  const [error, setError] = useState();

  const { name } = useParams();
  const url = `https://restcountries.com/v3.1/name/${name}`;

  useEffect(() => {
    const getDetails = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();

        if (data.status === 404) {
          setError(data.message);
        } else {
          setCountryDetail(data);
        }
      } catch (error) {
        setError(error);
      }
    };
    getDetails();
  }, [name]);

  return (
    <div>
      {countryDetail &&
        countryDetail.map((country) => {
          return (
            <>
              <div key={uuidv4()} className={style.country}>
                <img src={country.flags.svg} className={style.image} />
                <ul>
                  <li>Name - {country.name.common}</li>
                  <li>Population - {country.population}</li>
                  <li>Region - {country.region}</li>
                  <li>Capital - {country.capital}</li>
                  <li>Languages - {Object.values(country.languages) + ""}</li>
                </ul>
              </div>
              <Link to="/" className={style.goBack}>
                Go to Home Page
              </Link>
            </>
          );
        })}

      {error && (
        <div className="error">
          {`Error fetching data for ${url}: ` + error}
        </div>
      )}
    </div>
  );
}

export default Detail;
