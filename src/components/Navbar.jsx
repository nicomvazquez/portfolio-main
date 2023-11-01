import React from "react";
import "../styles/navba.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo-content">
        <img src="../../public/logo.png" alt="" />
      </div>
      <div className="menu-navigation">
        <a href="">
          <ion-icon name="logo-linkedin"></ion-icon>
        </a>
        <a href="https://github.com/nicomvazquez">
          <ion-icon name="logo-github"></ion-icon>
        </a>
        <a href="mailto:vazquezpizzinicolas@gmail.com">
          <ion-icon name="mail-outline"></ion-icon>
        </a>
        <a href=" https://w.app/Jq2ghZ">
          <ion-icon name="logo-whatsapp"></ion-icon>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
