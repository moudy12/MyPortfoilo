import classes from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

import logo from "../../Assets/logo.png";

const Navigation = () => {
  return (
    <header className={classes.main}>
      <nav className={classes.nav}>
        <img className={classes.logo} src={logo} alt="my logo" />
        <ul>
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => ({ color: isActive ? "cyan" : "" })}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/skills"
              style={({ isActive }) => ({ color: isActive ? "cyan" : "" })}
            >
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              style={({ isActive }) => ({ color: isActive ? "cyan" : "" })}
            >
              Projects
            </NavLink>
          </li>
        </ul>
        <div className={classes.space}></div>
      </nav>
    </header>
  );
};

export default Navigation;
