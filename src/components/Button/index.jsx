import React from "react";
import { Link } from "react-router-dom";

import style from "./button.module.css";

function Button(props) {
  const buttonProps = {
    className: style.btn,
    to: props.to || "",
    style: props.style || {},
    onClick: () => {
      if (props.onClick) props.onClick();
    },
    children: props.children || "Button",
  };

  // USE EITHER AS A BUTTON OR REACT ROUTER LINK
  if (props.as === "link") {
    return <Link {...buttonProps} />;
  } else {
    return <button {...buttonProps} />;
  }
}

export default Button;
