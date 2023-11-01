import React from "react";
import SkillCard from "../components/SkillCard.jsx";
import "../styles/skillPage.css";

// importamos el arreglo de datos
import { skills } from "../database/data.js";

//inicializamos los el arreglo de datos
const data = skills;

function SkillsPages() {
  return (
    <div className="skill-page">
      <div className="content-title">
        <h1>Stack de desarrollo</h1>
      </div>
      <div className="skills-content">
        {data.map((skill) => {
          return <SkillCard key={skill.id} skill={skill}></SkillCard>;
        })}
      </div>
    </div>
  );
}

export default SkillsPages;
