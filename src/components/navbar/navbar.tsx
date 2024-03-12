import { Link } from "react-router-dom";
import style from "./navbar.module.css";

function Navbar() {
  return (
    <div>
      <div className={style.nav}>
        <Link to="/" className={style.link}>
          <h1 className={style.header}>POKEMON</h1>
        </Link>
      </div>
      <div className={style.line}>
        <hr />
      </div>
    </div>
  );
}

export default Navbar;
