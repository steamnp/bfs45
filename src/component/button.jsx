import style from "./button.module.css";

// view
// view--all
// back
// remove
// get-started

function Button({ type, children = "Button" }) {
  return (
    <button className={`button ${type ? `button--${type}` : ""}`}>
      {children}
    </button>
  );
}

export default Button;

const myName = "Bikash";

// `` -> backtick

// intro
const intro = `hello ${myName}`;

// `hello ${myName}` -> Template Literal
