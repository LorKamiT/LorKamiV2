import React, { useEffect } from "react";
import "./ContenidoGuias.css";
import CodeBox from "../Codebox/CodeBox";

import { RiErrorWarningLine } from "react-icons/ri";
import { FaCloudArrowDown } from "react-icons/fa6";

import DNS from "../../images/Guias/DNS/DNS.webp";
import DNSInProgress from "../../images/Guias/DNS/DNSInProgress.webp";
import DNSCheck from "../../images/Guias/DNS/DNSCheck.webp";
import Https from "../../images/Guias/DNS/Https.webp";

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
      <div id="seccion1" className={`section ${darkMode ? "dark" : ""}`}>
        <h2 className={`timeline-title ${darkMode ? "dark" : ""}`}>
          Crear proyecto con ReactJS
        </h2>
        <div className={`timeline ${darkMode ? "dark" : ""}`}>
          <div className={`timeline-item ${darkMode ? "dark" : ""}`}>
            <div className={`timeline-icon ${darkMode ? "dark" : ""}`}>1</div>
            <div className={`timeline-content ${darkMode ? "dark" : ""}`}>
              <h3>Primeros pasos:</h3>
              <p>Crea la carpeta en donde vas a crear el proyecto.</p>
              <p>
                Abrir el VSCode, abrir la carpeta creada, abrir la terminal y
                poner el siguente comando, remplazando "nombre" por el nombre
                del proyecto, siempre haciendolo en minusculas.
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

          <div className={`timeline-item ${darkMode ? "dark" : ""}`}>
            <div className={`timeline-icon ${darkMode ? "dark" : ""}`}>5</div>
            <div className={`timeline-content ${darkMode ? "dark" : ""}`}>
              <h3>Iniciar proyecto</h3>
              <p>
                Cuado completes todos los pasos anterior, solo queda iniciar el
                proyecto desde la consola de VScode.
              </p>
              <p>
                Antes de iniciar el proyecto, no te olvides de usar el comando
                "cd nombreproyecto" para ir directamente a la raiz del proyecto.
              </p>
              <CodeBox id="IniciarProyectoReact" darkMode={darkMode} />
            </div>
          </div>
        </div>
      </div>

      <div id="seccion2" className={`section ${darkMode ? "dark" : ""}`}>
        <h2 className={`timeline-title ${darkMode ? "dark" : ""}`}>
          Crear proyecto con NextJS + Tailwind CSS
        </h2>
        <div className={`timeline ${darkMode ? "dark" : ""}`}>
          <div className={`timeline-item ${darkMode ? "dark" : ""}`}>
            <div className={`timeline-icon ${darkMode ? "dark" : ""}`}>1</div>
            <div className={`timeline-content ${darkMode ? "dark" : ""}`}>
              <h3>Primeros pasos:</h3>
              <p>Crea la carpeta en donde vas a crear el proyecto.</p>
              <p>
                Abrir el VSCode, abrir la carpeta creada, abrir la terminal y
                poner el siguente comando.
              </p>
              <CodeBox id="InstalarNextJS" darkMode={darkMode} />
            </div>
          </div>

          <div className={`timeline-item ${darkMode ? "dark" : ""}`}>
            <div className={`timeline-icon ${darkMode ? "dark" : ""}`}>2</div>
            <div className={`timeline-content ${darkMode ? "dark" : ""}`}>
              <h3>Instalación</h3>
              <div
                className={`Caja-Advertencia Azul ${darkMode ? "dark" : ""}`}
              >
                <RiErrorWarningLine />
                <p>
                  Al momento de poner el comando para la creación del proyecto
                  de NextJS nos dara a elegir, que es lo que queremos instalar.
                </p>
              </div>
              <p>
                - Nombre del proyecto: Aqui pones el nombre de nuestro proyecto,
                o dejarlo en blanco, y se asignara uno automaticamente.
              </p>
              <p>- TypeScript: No se que es, pero es recomendable incluirlo.</p>
              <p>- ESLint: No se que es, pero es recomendable incluirlo</p>
              <p>
                - Tailwind CSS: Ya sabes lo que es. Tu sabras si quieres que te
                explote el craneo usando Tailwind xd
              </p>
              <p>
                - Usar src/directory: Es para usar una estructura de archivos,
                que ya conocemos gracias a React Native
              </p>
              <p>
                - App Router: Muy parecido a lo que usabamos en React Native.
                Solo que mas facil aqui en NextJS
              </p>
              <p>
                - import alias (@/*): Es para usar @ en lugar de ../ para
                importar cosas
              </p>
            </div>
          </div>

          <div className={`timeline-item ${darkMode ? "dark" : ""}`}>
            <div className={`timeline-icon ${darkMode ? "dark" : ""}`}>3</div>
            <div className={`timeline-content ${darkMode ? "dark" : ""}`}>
              <h3>Iniciar proyecto</h3>
              <p>Ahora, solo queda iniciar nuestro nuevo proyecto de NextJS</p>
              <CodeBox id="IniciarProyectoNextJS" darkMode={darkMode} />
            </div>
          </div>
        </div>
      </div>

      <div id="seccion3" className={`section ${darkMode ? "dark" : ""}`}>
        <h2 className={`timeline-title ${darkMode ? "dark" : ""}`}>
          Deployar proyecto con Github
        </h2>

        <div className={`timeline ${darkMode ? "dark" : ""}`}>
          <div className={`timeline-item ${darkMode ? "dark" : ""}`}>
            <div className={`timeline-icon ${darkMode ? "dark" : ""}`}>1</div>
            <div className={`timeline-content ${darkMode ? "dark" : ""}`}>
              <h3>Configurar los datos correspondientes</h3>
              <p>
                Dentro del package.json, se deberan configurar tres lineas de
                codigo
              </p>
              <p>
                - Al principio del package.json, por debajo de "name" escribir
                "home" y poner nuestro link "https://pagina.xyz/".
              </p>
              <p>
                - En caso no contar con un dominio, se pueda utilizar el
                siguente link: "https://lorkamiT.github.io/Proyecto"
              </p>
              <p>
                - En el area de "scripts" poner las dos ultimas lineas de codigo
                de build y gh-pages
              </p>
              <CodeBox id="ConfiguracionPackageJson" darkMode={darkMode} />
            </div>
          </div>

          <div className={`timeline-item ${darkMode ? "dark" : ""}`}>
            <div className={`timeline-icon ${darkMode ? "dark" : ""}`}>2</div>
            <div className={`timeline-content ${darkMode ? "dark" : ""}`}>
              <h3>Crear archivo CNAME</h3>
              <p>
                - Dentro de la carpeta public, crear un nuevo archivo llamado
                "CNAME"
              </p>
              <p>
                - Dentro del CNAME pondremos nuestra pagina en el siguente
                formato "pagina.xyz".
              </p>
              <p>
                - Y en caso de ser pagina de Github, debe ser asi
                "https://lorkami.github.io/Proyecto"
              </p>
              <CodeBox id="DatosParaElCNAME" darkMode={darkMode} />
            </div>
          </div>

          <div className={`timeline-item ${darkMode ? "dark" : ""}`}>
            <div className={`timeline-icon ${darkMode ? "dark" : ""}`}>3</div>
            <div className={`timeline-content ${darkMode ? "dark" : ""}`}>
              <h3>Crear archivo CNAME</h3>
              <p>
                Una vez teniendo ya la web comprada, ir a la configuración de
                DNS
              </p>
              <p>
                - Agregar las DNS proporcionadas por Github, en Tipo: A. Host: @{" "}
              </p>
              <p>
                - Si existe algun CNAME modificarlo/crearlo. Type: CNAME. Host:
                www. "pagina.xyz"
              </p>
              <CodeBox id="DNSGithub" darkMode={darkMode} />
              <img src={DNS} />
            </div>
          </div>

          <div className={`timeline-item ${darkMode ? "dark" : ""}`}>
            <div className={`timeline-icon ${darkMode ? "dark" : ""}`}>4</div>
            <div className={`timeline-content ${darkMode ? "dark" : ""}`}>
              <h3>Crear repositorio de Github</h3>
              <p>- Se debe crear un nuevo repositorio de Github en publico</p>
              <p>
                - Copiar todas las lineas de codigo, omitiendo "echo "#
                Proyecto" >> README.md" y en "git add README.md" borrar el
                "README.md" y solo dejar un punto, como se muestra a
                continuación.
              </p>
              <CodeBox id="EjemploCodigoGithub" darkMode={darkMode} />
              <p>
                Si se copia este codigo directamente, cambiar la penultima
                linea, la del link del Github, la parte final donde dice
                "Proyecto.git" por el nombre del proyecto actual
              </p>
            </div>
          </div>

          <div className={`timeline-item ${darkMode ? "dark" : ""}`}>
            <div className={`timeline-icon ${darkMode ? "dark" : ""}`}>5</div>
            <div className={`timeline-content ${darkMode ? "dark" : ""}`}>
              <h3>Deployar con Github</h3>
              <p>
                - Una vez que se subieron todos los archivos a Github con los
                codigos anteriores, vamos a usar el siguente codigo.
              </p>
              <CodeBox id="CodigoDeployarGithub" darkMode={darkMode} />
              <div
                className={`Caja-Advertencia Rojo ${darkMode ? "dark" : ""}`}
              >
                <RiErrorWarningLine />
                <p>
                  Al usar el codigo "npm run deploy". Es casi seguro que te de
                  un error de seguridad o permisos de Windows. Para eso, vamos a
                  usar el siguente codigo:
                </p>
              </div>
              <CodeBox
                id="CodigoDeployarGithubConCodigoExtra"
                darkMode={darkMode}
              />
              <p>
                - Con este codigo, vamos a desactivar y volver a activar para
                poder ejecutar el codigo.
              </p>
            </div>
          </div>

          <div className={`timeline-item ${darkMode ? "dark" : ""}`}>
            <div className={`timeline-icon ${darkMode ? "dark" : ""}`}>6</div>
            <div className={`timeline-content ${darkMode ? "dark" : ""}`}>
              <h3>Deployar con Github</h3>
              <p>
                - En Github dentro de Settings y Pages, ir hasta la seccion
                "Custom domain" en donde se podra observar en un color amarillo,
                que la DNS se esta revisando.
              </p>
              <p>
                - Debajo hay que activar la casilla de "Enforce HTTPS" para
                activar la web segura.
              </p>
              <img src={DNSInProgress} />
              <img src={DNSCheck} />
              <img src={Https} />
            </div>
          </div>

          <div className={`timeline-item ${darkMode ? "dark" : ""}`}>
            <div className={`timeline-icon ${darkMode ? "dark" : ""}`}>7</div>
            <div className={`timeline-content ${darkMode ? "dark" : ""}`}>
              <h3>Push y Pull de Github</h3>
              <p>
                Comandos para subir cambios de PC a Github, o actualizar cambios
                de Github a PC.
              </p>
              <CodeBox id="CodigoPushPullGithub" darkMode={darkMode} />
            </div>
          </div>
        </div>
      </div>

      {/* Más secciones aquí */}
    </div>
  );
};

export default ContenidoGuias;
