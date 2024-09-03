import React, { useState, useEffect } from "react";
import "./GuiasSecc.css";

import { Divide as Hamburger } from "hamburger-react";

import MenuGuias from "./MenuGuias";
import ContenidoGuias from "./ContenidoGuias";

const Guias = ({ darkMode }) => {
  useEffect(() => {}, [darkMode]);

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <div className="Contenedor-Menu-Guias-Completo">
      <div
        className={`Contenedor-Menu-Guias ${isMenuOpen ? "open" : ""} ${
          darkMode ? "dark" : ""
        }`}
      >
        <MenuGuias toggleMenu={toggleMenu} darkMode={darkMode} />
      </div>
      <div className="Contenedor-Guias">
        <div className="Contenedor-Contenido-Guias">
          <ContenidoGuias darkMode={darkMode} />
        </div>
      </div>
      <div
        className={`hamburger-menu ${isMenuOpen ? "open" : ""} ${
          darkMode ? "dark" : ""
        }`}
        onClick={toggleMenu}
      >
        <Hamburger />
      </div>
    </div>
  );
};

export default Guias;
