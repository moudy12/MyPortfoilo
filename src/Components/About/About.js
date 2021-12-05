import React, { useState } from "react";
import { Fragment } from "react/cjs/react.production.min";
import classes from "./About.module.css";
import fbLogo from "../../Assets/fb.png";
import inLogo from "../../Assets/in.png";
import whatsLogo from "../../Assets/whats.png";
const About = () => {
  const [toggle, setToggle] = useState(false);
  const toggleNumberHandler = () => {
    setToggle((prev) => !prev);
  };
  return (
    <Fragment>
      <div className={classes.box}>
        <div className={classes.profile} />
        <p className={classes.name}>I am Mohamad Nasser</p>
        <h5 className={classes.description}>
          A Third Year Computer Science Student At the lebanese University,
          Continuesly learning new languages,frameworks, and Librarys... This is
          just a static website to show what i am up to, what skills i have and
          the recent projects i am working on!
        </h5>
      </div>
      <div className={classes.socialMedia}>
        <img
          src={whatsLogo}
          alt="reach me on Whatsapp"
          onClick={toggleNumberHandler}
        />
        <a
          href="https://www.linkedin.com/in/mohamad-nasser-a6bb8b177"
          target="_blank"
          rel="noreferrer"
        >
          <img src={inLogo} alt="find me on Linkedin" />
        </a>
        <a
          href="https://www.facebook.com/mohammad.nasser.37604/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={fbLogo} alt="find me on Facebook" />
        </a>
        {toggle && <p className={classes.number}>+961 76592038</p>}
      </div>
    </Fragment>
  );
};

export default About;
