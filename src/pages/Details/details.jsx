import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./details.module.css";
import Navbar from "../../components/navbar/navbar";
function Details() {
  const { name } = useParams();
  const baseDetailUrl = "https://restcountries.com/v3.1/name/";
  // Search by country’s full name. It can be the common or official value
  //https://restcountries.com/v3.1/name/{name}?fullText=true
  // Just for baseDetailUrl, if we do https://restcountries.com/v3.1/name/India
  // this gives a countries that have this name too.
  // For India, two country info is given with just baseUrl
  //
  const fullNameUrl = "?fullText=true";
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const getDetails = async () => {
      try {
        const res = await fetch(baseDetailUrl + `${name}` + fullNameUrl);
        const data = await res.json();

        if (res.ok) {
          setDetails(data);
        } else {
          throw new Error("Failed to fetch countries from the URL");
        }
      } catch (error) {
        console.error("Error fetching the countries ", error);
      }
    };
    getDetails();
  }, [name]);

  return (
    <div>
      <Navbar />
      <div className={style.container}>
        {details.map((country) => (
          <div key={country.name.common}>
            <div className={style.box}>
              <div>
                <img
                  className={style.flag}
                  src={country.flags.svg}
                  alt={country.name.common}
                />
              </div>
              <div className={style.content}>
                <h1>{country.name.common}</h1>
                <p>Capital: {country.capital}</p>
                <p></p>
                Currencies:
                <ul>
                  {Object.entries(country.currencies).map(
                    ([code, { name, symbol }]) => (
                      <li key={code}>
                        {name} ({symbol})
                      </li>
                    )
                  )}
                </ul>
                Languages:
                <ul>
                  {Object.entries(country.languages).map(([code, name]) => (
                    <li key={code}>{name}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Details;
