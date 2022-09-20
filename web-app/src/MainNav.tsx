import { Link } from "react-router-dom";
import classes from "./MainNav.module.css";

function MainNav() {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <Link to="/login">Zaloguj się</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNav;
