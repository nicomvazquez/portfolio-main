import React from "react";
import "../styles/home.css";

function Home() {
  return (
    <div className="home-page">
      <div className="content-title">
        <h1>Nicolas Vazquez</h1>
      </div>
      <div className="text-content">
        <p>
          Graduado de tecnico en informatica personal y profecional en E.S.T. F.
          Ameghino. Con formacion mayormente autodidacta en el desarrollo de
          aplicaciones full-stack con diversos frameworks y herramientas tanto
          de aplicaciones web, de escritorio y moviles. Cuento con experiencia
          trabajando en equipos de desarrollo y metodologia de trabajo SCRUM. Lo
          invuto a descargar mi CV y a visitar algunos de mis proyectos.  
        </p>
      </div>
      <div className="button-container">
        <a href="">
          <button>Descargar CV</button>
        </a>
      </div>
    </div>
  );
}

export default Home;
