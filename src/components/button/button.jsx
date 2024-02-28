import style from "./button.module.css";

function Button({ children = "Button", type }) {
  const className_ = type ? `${style.btn} ${style[type]}` : style.btn;

  return (
    <button className={className_} onClick={() => window.alert("Hello")}>
      {children}
    </button>
  );
}

export default Button;
