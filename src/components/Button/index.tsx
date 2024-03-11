import React from "react";
import { Link } from "react-router-dom";

import { ButtonProps } from "../../types";

import style from "./button.module.css";

function Button(props: ButtonProps) {
  return React.createElement(
    props.as === "link" ? Link : "button",
    {
      to: props.to || "",
      className: `${style.btn} ${props.className || ""}`,
      style: props.style || {},
      onClick: props.onClick,
      type: props.type || "button",
    },
    props.children
  );
}

export default Button;
