import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getCountryDetail } from "../../utils";

import Button from "../../components/Button";
import FlexBox from "../../components/FlexBox";

import style from "./details.module.css";

function Details() {
  const { name } = useParams();
  const [error, setError] = useState("");
  const [detail, setDetail] = useState("");

  useEffect(() => {
    try {
      const fetchDetail = async () => await getCountryDetail(name);

      fetchDetail()
        .then((data) => setDetail(data[0]))
        .catch((error) => setError(error.message));
    } catch (error) {
      setError(JSON.stringify(error.message));
    }
  }, []);

  return (
    <div className={style["detail-card"]}>
      {error ? (
        <>
          <div className="center">Something went wrong</div>
          <br />
          <div className="center">{error}</div>
        </> // ERROR
      ) : detail ? (
        <>
          <FlexBox style={{ minHeight: 200 }}>
            <div>
              <div className={style.title}>{detail.name.official}</div>
              <div className={style.subtitle}>{detail.name.common}</div>
            </div>
            <div>
              {detail.coatOfArms.svg ? (
                <img
                  src={detail.coatOfArms.svg}
                  className={style.coat}
                  alt="coat"
                />
              ) : (
                <small>No Coat of Arms</small>
              )}
            </div>
          </FlexBox>
          <div>
            <div className={style["detail-list"]}>
              <span className={style["detail-title"]}>Region:</span>
              {detail.region}
              <br />
              <br />
              <span className={style["detail-title"]}>Area:</span>
              {detail.area} sq. km
              <br />
              <br />
              <span className={style["detail-title"]}>Population:</span>
              {detail.population}
              <br />
              <br />
              <span className={style["detail-title"]}>Capital:</span>
              {detail.capital[0]}
              <br />
              <br />
              <span className={style["detail-title"]}>Driving Side:</span>
              {detail.car.side}
              <br />
              <br />
              They are {detail.unMember ? "" : "not"} a United Nations Member
            </div>
          </div>
          <br />
          <div className={style["flag-detail"]}>
            <img src={detail.flags.svg} className={style.flag} alt="flag" />
            {detail.flags.alt || "No flag description available"}
          </div>
          <br />
          <FlexBox center={true}>
            <Button to="/" as="link">
              Go Back
            </Button>
          </FlexBox>
        </>
      ) : (
        <>
          <FlexBox center={true}>Hang in there... fetching data...</FlexBox>
        </>
      )}
    </div>
  );
}

export default Details;
