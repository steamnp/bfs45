import { Link } from "react-router-dom";
import style from "../styles/home.module.css";
import { useEffect, useState } from "react";

function Home() {
  const [countries, setCountries] = useState();

  useEffect(() => {
    const getAllCountries = async () => {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();
      // console.log(data);
      setCountries(data);
    };
    getAllCountries();
  }, []);

  return (
    <div>
      {countries &&
        countries.map((country, index) => {
          return (
            <div key={index}>
              <Link to={`/country-detail/${country.name.common}`}>
                <img src={country.flags.svg} className={style.image} />
                <div>{country.name.common}</div>
              </Link>
            </div>
          );
        })}
    </div>
  );
}

export default Home;
