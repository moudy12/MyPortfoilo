import { useState } from "react";
import classes from "./Skill.module.css";
const Skill = (props) => {
  const [show, setShow] = useState(false);
  const clickmeHandler = () => {
    setShow((prevstate) => !prevstate);
  };
  return (
    <div
      className={classes.box}
      style={{
        color: props.color,
        boxShadow: `1px 3px 15px 1px ${props.color}`,
        transition: "all 0.5s Linear",
        borderRadius: show ? "5%" : "50%",
      }}
      onClick={clickmeHandler}
    >
      <h2 className={classes.subject}>{props.subject}</h2>
      <div style={{ display: "inline-block", margin: "0" }}>
        <img src={props.logo} className={classes.image} alt={props.alt} />
        <div className={classes.progressbar}>
          <div
            style={{ backgroundColor: props.color, width: props.level }}
          ></div>
        </div>
      </div>
      {!show && <div className={classes.clickMe}>Click Me</div>}
      {show && <div className={classes.description}>{props.description}</div>}
    </div>
  );
};

export default Skill;
