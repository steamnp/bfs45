import { ButtonProps } from "../../types";

import style from "./button.module.css";

function Button(props: ButtonProps) {
  return (
    <button
      className={`${style.btn} ${props.className || ""}`}
      style={props.style}
      onClick={props.onClick}
      type={props.type || "button"}
    >
      {props.children}
    </button>
  );
}

export default Button;
