import React, { useEffect } from "react";
import "./ContenidoGuias.css";
import CodeBox from "../Codebox/CodeBox";

import { RiErrorWarningLine } from "react-icons/ri";
import { FaCloudArrowDown } from "react-icons/fa6";

import DNSCheck from "../../images/Guias/DNS/DNSCheck.webp";

{
  /* 
  <div
className={`Caja-Advertencia Verde ${darkMode ? "dark" : ""}`}
>
<RiErrorWarningLine />
<p>Advertencia Verde</p>
</div>
<div
className={`Caja-Advertencia Azul ${darkMode ? "dark" : ""}`}
>
<RiErrorWarningLine />
<p>Advertencia Azul</p>
</div>
<div
className={`Caja-Advertencia Amarillo ${
  darkMode ? "dark" : ""
}`}
>
<RiErrorWarningLine />
<p>Advertencia Amarilla</p>
</div>
<div
className={`Caja-Advertencia Rojo ${darkMode ? "dark" : ""}`}
>
<RiErrorWarningLine />
<p>Advertencia Roja</p>
</div>
 */
}

const ContenidoGuias = ({ darkMode }) => {
  useEffect(() => {}, [darkMode]);
  return (
    <div className={`guide-content ${darkMode ? "dark" : ""}`}>
      <div id="section1" className={`section ${darkMode ? "dark" : ""}`}>
        <h2 className={`timeline-title ${darkMode ? "dark" : ""}`}>
          Crear proyecto con ReactJS
        </h2>
        <div className={`timeline ${darkMode ? "dark" : ""}`}>
          <div className={`timeline-item ${darkMode ? "dark" : ""}`}>
            <div className={`timeline-icon ${darkMode ? "dark" : ""}`}>1</div>
            <div className={`timeline-content ${darkMode ? "dark" : ""}`}>
              <h3>Primero pasos:</h3>
              <p>Crea la carpeta en donde vas a crear el proyecto.</p>
              <p>
                Abrir el VSCode, abrir esa carpeta, abrir la terminal y poner el
                siguente comando, remplazando "nombre" por el nombre del
                proyecto, siempre haciendolo en minusculas.
              </p>
              <CodeBox id="CrearProyectoReactJS" darkMode={darkMode} />
            </div>
          </div>

          <div className={`timeline-item ${darkMode ? "dark" : ""}`}>
            <div className={`timeline-icon ${darkMode ? "dark" : ""}`}>2</div>
            <div className={`timeline-content ${darkMode ? "dark" : ""}`}>
              <h3>
                Eliminar y modificar los archivos dentro de la carpeta src:
              </h3>
              <p>
                Esto es recomendable hacerlo, ya que seria la manera mas facil
                de iniciar un proyecto.
              </p>
              <p>
                - Eliminar todos los archivos dentro de la carpeta src,
                exceptuando index.js, index.css, App.js y App.css
              </p>
              <p>
                - Dentro del archivo index.js en la carpeta src, eliminar la
                linea 5 y 14 las cuales son de reportWebVitals
              </p>
              <p>
                - Dentro de la carpeta src, crear las sub-carpetas components,
                images y pages
              </p>
              <div
                className={`Caja-Advertencia Azul ${darkMode ? "dark" : ""}`}
              >
                <RiErrorWarningLine />
                <p>
                  Opcional, pero muy util para ahorrar trabajo. Descargar los
                  archivos ya seteados para un inicio rapido
                </p>
              </div>
              <div className={`Caja-Descarga ${darkMode ? "dark" : ""}`}>
                <a href="/descargas/Base-inicial-para-React.rar" download>
                  <button>
                    <FaCloudArrowDown /> DESCARGAR ARCHIVOS
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className={`timeline-item ${darkMode ? "dark" : ""}`}>
            <div className={`timeline-icon ${darkMode ? "dark" : ""}`}>3</div>
            <div className={`timeline-content ${darkMode ? "dark" : ""}`}>
              <h3>Instalar librerias mas utilizadas</h3>
              <p>- react-router-dom: Para el enrutado de paginas</p>
              <p>
                - gh-pages: Para poder subir directamente una build a Github
              </p>
              <p>
                - react-icons --save y @react-icons/all-files --save para usar
                los iconos de la libreria de React
              </p>
              <CodeBox id="LibreriasMasUtilizadas" darkMode={darkMode} />
            </div>
          </div>

          <div className={`timeline-item ${darkMode ? "dark" : ""}`}>
            <div className={`timeline-icon ${darkMode ? "dark" : ""}`}>4</div>
            <div className={`timeline-content ${darkMode ? "dark" : ""}`}>
              <h3>Configurar ReactDOM</h3>
              <div
                className={`Caja-Advertencia Amarillo ${
                  darkMode ? "dark" : ""
                }`}
              >
                <RiErrorWarningLine />
                <p>
                  Si estas usando los archivos descargados y pre-configurados,
                  mencionados en el paso 2, puedes omitir esta parte, hasta el
                  "Deployar con Github Pages"
                </p>
              </div>
              <p>
                - Actualmente esta es la mejor configuración para el enrutado
                dentro de "App.js"
              </p>
              <CodeBox id="HashRouterQueUsoActualmente" darkMode={darkMode} />
            </div>
          </div>
        </div>
      </div>

      <div id="section2" className={`section ${darkMode ? "dark" : ""}`}>
        <h2 className={`timeline-title ${darkMode ? "dark" : ""}`}>
          Crear proyecto con NextJS
        </h2>
        <div className={`timeline ${darkMode ? "dark" : ""}`}>
          <div className={`timeline-item ${darkMode ? "dark" : ""}`}>
            <div className={`timeline-icon ${darkMode ? "dark" : ""}`}>1</div>
            <div className={`timeline-content ${darkMode ? "dark" : ""}`}>
              <h3>Primero pasos:</h3>
              <p>Crea la carpeta en donde vas a crear el proyecto.</p>
              <p>
                Abrir el VSCode, abrir esa carpeta, abrir la terminal y poner el
                siguente comando, remplazando "nombre" por el nombre del
                proyecto, siempre haciendolo en minusculas.
              </p>
              <CodeBox id="Ejemplo1" darkMode={darkMode} />
              <CodeBox id="CrearProyectoReactJS" darkMode={darkMode} />
              <CodeBox id="CrearProyectoReactJS" darkMode={darkMode} />
              <CodeBox id="CrearProyectoReactJS" darkMode={darkMode} />
              <CodeBox id="CrearProyectoReactJS" darkMode={darkMode} />
              <CodeBox id="CrearProyectoReactJS" darkMode={darkMode} />
            </div>
          </div>
        </div>
      </div>

      {/* Más secciones aquí */}
    </div>
  );
};

export default ContenidoGuias;
