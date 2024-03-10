import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


function Detail() {
  const [countryDetail, setCountryDetail] = useState();
  const [error, setError] = useState();

  const { name } = useParams();
  

  useEffect(() => {
    const getDetails = async () => {
      try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
        if (!res.ok) {                                      //If the request fails, it throws an error with the message "Failed to fetch data".
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        setCountryDetail(data);
      } catch (error) {                                   //If any errors occur during the fetch or parsing of JSON, they are caught and the error message is stored in the error state. 
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
              <div key={country.name.common} >
                
                <img src={country.flags.svg}  /> 
                <li>Name - {country.name.common}</li>                               
                <li>Region - {country.region}</li>
                <li>Capital - {country.capital}</li>    

              </div>
            </>
          );
        })}
        {error && <div>{error}</div>}     
    </div>
  );
}

export default Detail;