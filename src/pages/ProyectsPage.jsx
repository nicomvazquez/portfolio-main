import React from "react";
import ProyectCard from "../components/ProyectCard.jsx";
import "../styles/proyectPage.css";

import { proyects } from "../database/data.js";

function ProyectsPage() {
  const data = proyects;

  return (
    <div className="proyect-page">
      <div className="content-title">
        <h1>Porfolio</h1>
      </div>
      <div className="proyects-content">
        {data.map((proyect) => {
          return <ProyectCard key={proyect.id} proyect={proyect}></ProyectCard>;
        })}
      </div>
    </div>
  );
}

export default ProyectsPage;
