import React, { useState, useEffect } from "react";
import "../Fichas/fichapersonajes.css";

import { fichapersonajes } from "../Fichas/Fichas";

const Fichas = ({ darkMode }) => {
  useEffect(() => {}, [darkMode]);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleExpandClick = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div>
      <div className={`Fichas-Caja ${darkMode ? "dark" : ""}`}>
        <div className={`Fichas-Contenedor ${darkMode ? "dark" : ""}`}>
          {fichapersonajes.map((ficha, index) => (
            <div
              className={`Ficha-Card ${
                expandedIndex === index ? "expanded" : ""
              } ${darkMode ? "dark" : ""}`}
              key={index}
            >
              <div
                className={`Ficha-Imagen ${
                  expandedIndex === index ? "expanded" : ""
                }`}
                style={{
                  backgroundImage: `url(${ficha.imagen})`,
                  objectPosition: ficha.posicionImagen,
                }}
              ></div>
              <div className={`Ficha-Contenido ${darkMode ? "dark" : ""}`}>
                <h3>{ficha.nombreCompleto}</h3>
                <p>
                  <strong>Plataforma:</strong> {ficha.plataforma}
                </p>
                <p>
                  <strong>Edad:</strong> {ficha.edadActual}
                </p>

                <p>
                  <strong>Apodo:</strong> {ficha.apodo}
                </p>

                {expandedIndex === index && (
                  <>
                    <p>
                      <strong>Fecha de Nacimiento:</strong>{" "}
                      {ficha.fechaNacimiento}
                    </p>
                    <p>
                      <strong>Lugar de Nacimiento:</strong>{" "}
                      {ficha.lugarNacimiento}
                    </p>
                    <p>
                      <strong>Estado Civil:</strong> {ficha.estadoCivil}
                    </p>
                    <p>
                      <strong>Residencia:</strong> {ficha.residencia}
                    </p>
                    <p>
                      <strong>Altura:</strong> {ficha.altura}
                    </p>
                    <p>
                      <strong>Peso:</strong> {ficha.peso}
                    </p>
                    <p>
                      <strong>Raza:</strong> {ficha.raza}
                    </p>
                    <p>
                      <strong>Color de Ojos:</strong> {ficha.colorOjos}
                    </p>
                    <p>
                      <strong>Color de Cabello:</strong> {ficha.colorCabello}
                    </p>
                    <p>
                      <strong>Cicatrices:</strong> {ficha.cicatrices}
                    </p>
                    <p>
                      <strong>Antecedentes Penales:</strong>{" "}
                      {ficha.antecedentesPenales}
                    </p>
                    <p>
                      <strong>Historial Médico:</strong> {ficha.historialMedico}
                    </p>
                    <p>
                      <strong>Estudios:</strong> {ficha.estudios}
                    </p>
                  </>
                )}

                <div className={`Btn-LeerMas ${darkMode ? "dark" : ""}`}>
                  <button
                    className="btn"
                    onClick={() => handleExpandClick(index)}
                  >
                    {expandedIndex === index ? "Leer menos" : "Leer más"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fichas;
