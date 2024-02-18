import { Link, NavLink } from "react-router-dom";
import classes from "./Navigation.module.css";
import { JSXElementConstructor, ReactNode } from "react";
import menuItems from "../../../system/menu.json";

function Navigation() {
  const menuItem = menuItems.map((item: any) => (
    <li key={item.id}>
      <NavLink className={classes.item} to={item.link}>
        {item.title}
      </NavLink>
    </li>
  ));

  return (
    <div className={classes.header__nav}>
      <ul className={classes.nav__item}>{menuItem}</ul>
    </div>
  );
}

export default Navigation;
