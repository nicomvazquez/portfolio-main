import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home.jsx";
import SkillsPages from "./pages/SkillsPages.jsx";
import ProyectPage from "./pages/ProyectsPage.jsx";
import Foother from "./components/Foother.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <SkillsPages />
      <ProyectPage />
      <Foother />
    </>
  );
}

export default App;
