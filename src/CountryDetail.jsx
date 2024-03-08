
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';


function CountryDetail() {
    const [country, setCountry] = useState(null);
    const [error, setError] = useState("");

    const { countryName } = useParams();
    const url = `https://restcountries.com/v3.1/name/${countryName}`;

    useEffect(() => {
        const fetchCountry = async () => {
            try {
                const res = await fetch(url);
                if (!res.ok) {
                    throw new error("Failed to fetch data details");
                }
                const data = res.json();
                setCountry(data);

            } catch (error) {
                setError(error.message);
            }
        };

        fetchCountry();

    }, [url]);

    return (

        <>
            <div>
                {Array.isArray(country) && country.map((countryData) => (
                    <div key={countryData.name.common}>
                        <span className="country-name">{countryData.name.common}</span>
                        <img
                            src={countryData.flags.svg}
                            alt={`Flag of ${countryData.name.common}`}
                        />
                    </div>
                ))}
            </div>
            {error && <div>{error}</div>}
        </>
    );
}

export default CountryDetail;
