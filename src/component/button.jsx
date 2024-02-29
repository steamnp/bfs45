// For every Button component, we must pass paramters(props), or it'll use the default values.
import "./button.css";

// const btnStyle = {
//   backgroundColor: "rgb(122, 123, 100, 0.5)",
//   color: "aliceblue",
// };

function Button({ type, children = "Default Button" }) {
  return (
    <button className={`button ${type ? `button--${type}` : ""}`}>
      {children}
    </button>
  );
}

export default Button;
