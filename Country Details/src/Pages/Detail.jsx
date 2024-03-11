import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import style from './Style.module.scss';


function Detail() {
  const [countryDetail, setCountryDetail] = useState('');
  const [error, setError] = useState('');

  const { name } = useParams();
  

  useEffect(() => {
    const getDetails = async () => {
      try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
        if (!res.ok) {                                     
          throw new Error("Unable to Fetch Data");
        }
        const data = await res.json();
        setCountryDetail(data);
      } catch (error) {                                    
        setError(error.message);
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
              <div key={country.name.common}
              className={style.container}>
                
                <img className= {style.img1} 
                src={country.flags.svg}  />

                <div className={style.details}>
                <li>Name - {country.name.common}</li>                               
                <li>Region - {country.region}</li>
                <li>Capital - {country.capital}</li>    
                <li>Population - {country.population}</li>
                </div>  

              </div>
            </>
          );
        })}
        {error && <div>{error}</div>}     
    </div>
  );
}

export default Detail;