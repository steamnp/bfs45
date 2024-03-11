import style from "./nav.module.css";

import { routes } from "../../routes";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className={style.navbar}>
      {routes.map((route) => (
        <Link className={style.nav} key={route.to} to={route.to}>
          {route.text}
        </Link>
      ))}
    </div>
  );
}

export default NavBar;
