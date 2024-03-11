import { Link, useLocation } from "react-router-dom";

import { routes } from "../../routes";

import style from "./nav.module.css";

function NavBar() {
  const location = useLocation();

  const allRoutes = routes.filter(
    (route) => ["Task 2 Detail", "wildcard"].indexOf(route.text) === -1
  );

  return (
    <div className={style.navbar}>
      {allRoutes.map((route) => (
        <Link
          className={`${style.nav} ${
            location.pathname.includes(route.to) ? style.active : null
          }`}
          key={route.to}
          to={route.to}
        >
          {route.text}
        </Link>
      ))}
    </div>
  );
}

export default NavBar;
