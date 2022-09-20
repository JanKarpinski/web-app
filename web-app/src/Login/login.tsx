import React from "react";
import classes from "./login.module.css";
import { Link, Navigate, useNavigate } from "react-router-dom";



function Login() {
  let letFurther = useNavigate();
  return (
    <div className={classes.dyf}>
      <div className={classes.ver}>#pion_placeholder</div>
      <div className={classes.right}>
        <h2>Zaloguj się</h2>
        Podaj numer telefonu oraz hasło, aby się zalogować
        <form
          onSubmit={(e: React.SyntheticEvent) => {
            e.preventDefault();
            letFurther("/account");
          }}
        >
          <p>
            <input
              type="text"
              name="country"
              placeholder="kraj"
              className={classes.kraj}
            />
            <input
              type="tel"
              name="nrPhone"
              id=""
              placeholder="Numer telefonu"
              className={classes.tel}
            />
          </p>
          <p>
            <input
              type="password"
              name="password"
              id=""
              placeholder="Hasło"
              className={classes.haslo}
            />
          </p>

          <p>
            <input
              type="submit"
              className={classes.button}
              value="Zaloguj"
              id="sub"
            />
          </p>
        </form>
      </div>
    </div>
  );
}
export default Login;
