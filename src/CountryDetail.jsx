import React from "react";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';


function CountryDetail() {
    const [country, setCountry] = useState();
    const [error, setError] = useState("");

    const { countryName } = useParams();
    const url = `https://restcountries.com/v3.1/name/${countryName}`;

    useEffect(() => {
        const countryDetail = async () => {
            try {
                const res = await fetch(url);
                if (!res.ok) {
                    throw new error("Failed to fetch data");
                } else {
                    const data = res.json();
                    setCountry(data);
                }
            } catch (error) {
                setError(error.message);
            }
        };

        countryDetail();
    }, []);

    return (
        <div>
            <div >
                {country &&
                    country.map((country) => (
                        <div key={country.name.common}>
                            <span className="country-name">{country.name.common}</span>

                            <img
                                src={country.flags.svg}
                                alt={`Flag of ${country.name.common}`}
                            />
                        </div>
                    ))}
                {error && <div>{error}</div>}
            </div>



        </div>
    );
}

export default CountryDetail;
