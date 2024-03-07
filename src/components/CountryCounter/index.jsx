import React, { useEffect, useState } from "react";

function CountryCounter(props) {
  const [length, setLength] = useState(props.length);

  useEffect(() => setLength(props.length), [props.length]);

  return <div>Total Countries: {length}</div>;
}

export default CountryCounter;
