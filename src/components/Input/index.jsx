import React from "react";

import style from "./input.module.css";

function Input(props) {
  return (
    <input
      className={style["input-control"]}
      placeholder={props.placeholder || ""}
      value={props.value || ""}
      onChange={props.onChange || null}
      disabled={props.disabled || false}
    />
  );
}

export default Input;
