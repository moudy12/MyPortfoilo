import classes from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
//import { useNavigate } from "react-router";
import logo from "../../Assets/logo.png";
//import { useLocation } from "react-router";
const Navigation = () => {
  //let navigate = useNavigate();
  //const location = useLocation();
  //const { pathname } = location;
  //function clickHandler() {
    //navigate("/about-me");
  //}
  //let btnClass = classes.about;
  //if (pathname === "/about-me") {
   //btnClass = classes.btnClicked;
  //}
  return (
    <header className={classes.main}>
      <nav className={classes.nav}>
        <img className={classes.logo} src={logo} alt="my logo" />
        <ul>
          <li>
            <NavLink
              to="/about-me"
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
            </NavLink>{" "}
          </li>
        </ul>
        <div></div>
        {/*<button className={btnClass} onClick={clickHandler}>
          About Me
  </button>*/}
      </nav>
    </header>
  );
};

export default Navigation;
