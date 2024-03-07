import React from "react";

import style from "./flexbox.module.css";

function FlexBox(props) {
  const flexProp = {
    justifyContent: props.center ? "center" : "space-between",
    ...(props.style || {}),
  };

  return (
    <div className={style.flexbox} style={{ ...flexProp }}>
      {props.children}
    </div>
  );
}

export default FlexBox;
