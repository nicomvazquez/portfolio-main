import React from "react";
import "../styles/proyectCard.css";

function ProyectCard({ proyect }) {
  return (
    <div className="proyect-card">
      <div className="image-content">
        <img src={proyect.image} alt="" />
      </div>
      <div className="card-content">
        <div className="title-container">
          <h1>{proyect.name}</h1>
        </div>
        <div className="content-description">
          <p>{proyect.description}</p>
        </div>
        <div className="containers-buttons">
          <a href={proyect.vista}><h4>vista</h4></a>
          <a href={proyect.git}><h4>code</h4></a>
        </div>
      </div>
    </div>
  );
}

export default ProyectCard;
