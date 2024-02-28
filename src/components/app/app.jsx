import style from "../../styles/components/app.module.scss";
import Button from "../button/button";

function App() {
  return (
    <>
      <div className={style.app}>
        <div>
          Hello,World
          <br />
          <small>Satshree Shrestha</small>
        </div>
      </div>
      <br />
      <div style={{ padding: "1rem" }}>
        <Button>Main Button</Button>
        <Button type="btn-remove">Remove Button</Button>
      </div>
    </>
  );
}

// <></> -> React Fragment

export default App;
