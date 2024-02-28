// Relative import
import style from "../../styles/components/app.module.css";
import Contact from "../contact/contact";
{
  /* <div>Hello React</div> -> JSX */
}

function App() {
  return (
    <>
      <div className={style.outerDiv}>
        <div className={style.headerDiv}>
          <h1>This is a React Application</h1>
          <h3 className={style.notice}>
            To test the media query, change the screen's width.
          </h3>
        </div>
        <div className={style.contactDiv}>
          <Contact />
        </div>
      </div>
    </>
  );
}

// <></> -> React Fragment

export default App;
