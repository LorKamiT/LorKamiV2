import React, { useState, useEffect } from "react";
import "../Inicio/Inicio.css";

const Inicio = ({ darkMode }) => {
  useEffect(() => {}, [darkMode]);
  return (
    <div>
      <div className="SeccionInicio">
        <div className={`InicioCaja ${darkMode ? "dark" : ""}`}>
          <h1>LorKami</h1>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
