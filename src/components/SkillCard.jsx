import React from "react";
import "../styles/skillCard.css";

function SkillCard({ skill }) {
  return (
    <div className="skill-card">
      <div className="logo-content">
        <ion-icon name={skill.icon}></ion-icon>
      </div>
      <div className="name-content">
        <h2>{skill.name}</h2>
      </div>
      <div className="description-content">
        <p>{skill.description}</p>
      </div>
    </div>
  );
}

export default SkillCard;
