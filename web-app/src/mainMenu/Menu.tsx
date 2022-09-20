import classes from "./Menu.module.css";
import { useState, useEffect } from "react";
function Menu() {
  return (
    <div>
      <div className={classes.ver}>#pion_placeholder</div>
      <div className={classes.right}>
        <h2>Lorem ipsum dolor sit amet</h2>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        placerat quam vel fringilla tincidunt. <br />
        Ut blandit diam nec diam consequat, quis ultrices lectus dapibus.
        Phasellus ac iaculis nunc, id malesuada purus.
        <p>
          <button className={classes.button}>Lorem ipsum</button>
        </p>
      </div>
    </div>
  );
}
export default Menu;
