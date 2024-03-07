import { Link } from "react-router-dom";
import style from "./home.module.css";
import { useEffect, useState } from "react";

function Home() {
  const [countries, setCountries] = useState();
  const [error, setError] = useState();

  const url = "https://restcountries.com/v3.1/all";

  useEffect(() => {
    const getAllCountries = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();

        if (data.status === 404) {
          setError(data.message);
        } else {
          setCountries(data);
        }
      } catch (error) {
        setError(error);
      }
    };

    getAllCountries();
  }, []);

  return (
    <div className={style.home}>
      {countries &&
        countries.map((country, index) => {
          return (
            <div key={index} className={style.country}>
              <Link to={`/country-detail/${country.name.common}`}>
                <img src={country.flags.svg} className={style.image} />
                <div className={style.name}>{country.name.common}</div>
              </Link>
            </div>
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

export default Home;
