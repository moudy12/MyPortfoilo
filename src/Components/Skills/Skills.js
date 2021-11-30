import Skill from "../Skill/Skill";
import jsLogo from "../../Assets/jsLogo.svg";
import cLogo from "../../Assets/cLogo.svg";
import cssLogo from "../../Assets/cssLogo.svg";
import nextLogo from "../../Assets/nextLogo.svg";
import Reactlogo from "../../Assets/logo.svg";
import mongoLogo from "../../Assets/mongodbLogo.svg";
import javaLogo from "../../Assets/javaLogo.svg";
import sqlLogo from "../../Assets/sqlLogo.svg";
import classes from "./Skills.module.css";
const mySkills = [
  {
    subject: "Reactjs",
    logo: Reactlogo,
    description:
      "What i used to build This Website, I am Well acquainted with Reactjs Library and a multitude of its packages like Redux and React Router, also have taken multiple courses and built alot of small scale projects...",
    color: "cyan",
    level: "90%",
  },
  {
    subject: "Nextjs",
    logo: nextLogo,
    description:
      "Fairly skilled in Nextjs which is a ServerSide Reactjs Framework that uses file based routing",
    color: "black",
    level: "80%",
  },
  {
    subject: "CSS",
    logo: cssLogo,
    description:
      "Being good at CSS is crucial for Building a Good Looking Responsive web app. This is a Skill that is Gained by practice and i have yet to master all of its ins and outs.",
    color: "rgb(67, 208, 255)",
    level: "60%",
  },
  {
    subject: "Javascript",
    logo: jsLogo,
    description:
      "Theres always something new to learn in Javascript, i am continously learning new librarys, packages and implementations of Javascript",
    color: "yellow",
    level: "80%",
  },

  {
    subject: "Java",
    logo: javaLogo,
    description: "The first intro i had to object oriented programming, have fair knowledge of all its concepts and proper programming patterns. i am also learning android studio in the meantime",
    color: "#f89820",
    level: "60%",
  },
  {
    subject: "C Programing",
    logo: cLogo,
    description:
      "Had Extensive practice since it is the first programming language i learned in college and used in the most part of my computer science education.",
    color: "rgb(167, 167, 167)",
    level: "90%",
  },
  {
    subject: "Mongodb",
    logo: mongoLogo,
    description:
      "Used and Experimented quite a bit fetching and posting data to Mongodb. have yet to learn all of its features",
    color: "#4DB33D",
    level: "60%",
  },
  {
    subject: "SQL",
    logo: sqlLogo,
    description:
      "Acquainted With how SQL infrastructure works and how to manage and Create well structured SQL databases, But Still require Practice",
    color: "red",
    level: "60%",
  },
];
export const Skills = () => {
  return (
    <div className={classes.skills}>
      {mySkills.map((skill) => (
        <Skill
          key={skill.subject}
          subject={skill.subject}
          color={skill.color}
          logo={skill.logo}
          description={skill.description}
          level={skill.level}
        />
      ))}
    </div>
  );
};
