import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import "./country.css";

function Country() {
    const [countries, setCountries] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const getAllCountries = async () => {
            try {
                const res = await fetch("https://restcountries.com/v3.1/all");
                if (!res.ok) {
                    throw new error("Failed to fetch data");
                }
                const data = await res.json();
                setCountries(data);
            } catch (error) {
                setError(error.message);
            }
        };

        getAllCountries();
    }, []);

    return (
        <div>
            <div className="container">
                {countries &&
                    countries.map((country) => (
                        <div key={country.name.common} className="country-container">
                            <Link to={`/${country.name.common}`}>
                                <img
                                    src={country.flags.svg}
                                    alt={`Flag of ${country.name.common}`}
                                    className="country-flag"
                                />
                                <span className="country-name">{country.name.common}</span>
                            </Link>
                        </div>
                    ))}
                {error && <div>{error}</div>}
            </div>




        </div >
    );
}

export default Country;

//we have to insert key and value on this list
//students.map((tempstudent) => <li>{tempstudent}<li/>)
