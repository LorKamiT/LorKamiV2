import React, { useState, useEffect, useRef } from "react";
import "../Menu/Menu.css";

import { Link } from "react-router-dom";
import { Divide as Hamburger } from "hamburger-react";
import { Switch } from "@mui/material";
import { styled } from "@mui/system";
import Skeleton from "@mui/material/Skeleton";

import { MdPlayArrow } from "react-icons/md";

import InicioH from "../Inicio";
import Galeria from "../Galeria";
import GuiasH from "../Guias";
import FichasH from "../Fichas";
import LyricsH from "../Lyrics";
import ReproductorMusicah from "../ReproductorMusica/ReproductorMusica";

import LogoLK from "../../images/Menu/LogoLK.webp";
import ImagenCambianteDefault from "../../images/Menu/MenuInicio.webp";
import MenuInicio from "../../images/Menu/MenuInicio.webp";
import MenuGaleria from "../../images/Menu/MenuGaleria.webp";
import MenuGuias from "../../images/Menu/MenuGuias.webp";
import MenuFichas from "../../images/Menu/MenuFichas.webp";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: "#aab4be",
        ...theme.applyStyles("dark", {
          backgroundColor: "#8796A5",
        }),
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: "#001e3c",
    width: 32,
    height: 32,
    "&::before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
    ...theme.applyStyles("dark", {
      backgroundColor: "#003892",
    }),
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: "#aab4be",
    borderRadius: 20 / 2,
    ...theme.applyStyles("dark", {
      backgroundColor: "#8796A5",
    }),
  },
}));

const Menu = () => {
  // ScrollArriba
  const [showScrollTopBtn, setShowScrollTopBtn] = useState(false);

  const [selectedComponent, setSelectedComponent] = useState(<InicioH />);

  // Callback para manejar la expansión del reproductor
  const handleReproductorMount = () => {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      const reproductorElement = document.querySelector(".music-player");
      if (
        reproductorElement &&
        reproductorElement.classList.contains("expanded") === false
      ) {
        // Expande el reproductor si está en móvil
        reproductorElement.click(); // Simula un click para expandir
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > 200) {
        // Cambia 200 por la cantidad de píxeles que prefieras
        setShowScrollTopBtn(true);
      } else {
        setShowScrollTopBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Asegurarse de recalcular cuando el componente cambia
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [selectedComponent]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // ModoDark
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode === "true";
  });

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", newMode);
      return newMode;
    });
    document.body.classList.toggle("dark-mode", !darkMode);
    setOpen(false);
  };

  useEffect(() => {
    setSelectedComponent((prevComponent) => {
      return React.cloneElement(prevComponent, { darkMode });
    });
  }, [darkMode]);

  // Imagen Cambiante con Skeleton
  const [changingImage, setChangingImage] = useState(ImagenCambianteDefault);
  const [loading, setLoading] = useState(true);

  const handleMouseEnter = (image) => {
    setLoading(true);
    const img = new Image();
    img.src = image;
    img.onload = () => {
      setChangingImage(image);
      setLoading(false);
    };
  };

  const handleMouseLeave = () => {
    setChangingImage(ImagenCambianteDefault);
  };

  // Hamburguesa
  const [isOpen, setOpen] = useState(false);
  const menuRef = useRef(null); // Referencia al menú desplegable

  // Menu
  const handleComponentChange = (Component) => {
    if (Component === ReproductorMusicah) {
      setSelectedComponent(
        <Component onMount={handleReproductorMount} darkMode={darkMode} />
      );
    } else {
      setSelectedComponent(<Component darkMode={darkMode} />);
    }
    setOpen(false); // Cerrar el menú al seleccionar un componente
  };

  // Manejar la animación del menú
  useEffect(() => {
    const menuElement = menuRef.current;

    if (isOpen) {
      menuElement.style.display = "flex"; // Mostrar el menú
      requestAnimationFrame(() => {
        menuElement.classList.add("animate-in");
        menuElement.classList.remove("animate-out");
      });
    } else {
      menuElement.classList.add("animate-out");
      menuElement.classList.remove("animate-in");

      menuElement.addEventListener(
        "transitionend",
        () => {
          if (!isOpen) {
            menuElement.style.display = "none"; // Ocultar el menú después de la animación
          }
        },
        { once: true }
      );
    }
  }, [isOpen]);

  return (
    <div>
      <div className={`MonitorSec ${darkMode ? "dark" : ""}`}>
        <div className={`MenuSeccion ${darkMode ? "dark" : ""}`}>
          <div className="MenuBox">
            <div className="MenuBoxInterno">
              <div className="MenuBoxLogoSwitch">
                <div className="MenuBoxLogo">
                  <img src={LogoLK} />
                </div>

                <div className="MenuBoxSwitch">
                  <MaterialUISwitch
                    checked={darkMode}
                    onChange={toggleDarkMode}
                  />
                </div>
              </div>
              <div className={`MenuBoxHamburger ${darkMode ? "dark" : ""}`}>
                <Hamburger toggled={isOpen} toggle={setOpen} />
              </div>
            </div>
          </div>
        </div>

        <div
          ref={menuRef}
          className={`MenuDesplegadoBox ${darkMode ? "dark" : ""}`}
        >
          <div className="MenuDesplegadoIndice">
            <Link
              onMouseEnter={() => handleMouseEnter(MenuInicio)}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className="MenuIndice"
                onClick={() => handleComponentChange(InicioH)}
              >
                <span className="AnimSube">Inicio</span>
                <span className="AnimBaja">Inicio</span>
              </div>
            </Link>
            <Link
              onMouseEnter={() => handleMouseEnter(MenuGaleria)}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className="MenuIndice"
                onClick={() => handleComponentChange(Galeria)}
              >
                <span className="AnimSube">Galeria</span>
                <span className="AnimBaja">Galeria</span>
              </div>
            </Link>
            <Link
              onMouseEnter={() => handleMouseEnter(MenuGuias)}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className="MenuIndice"
                onClick={() => handleComponentChange(GuiasH)}
              >
                <span className="AnimSube">Guias</span>
                <span className="AnimBaja">Guias</span>
              </div>
            </Link>
            <Link
              onMouseEnter={() => handleMouseEnter(MenuFichas)}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className="MenuIndice"
                onClick={() => handleComponentChange(FichasH)}
              >
                <span className="AnimSube">Fichas</span>
                <span className="AnimBaja">Fichas</span>
              </div>
            </Link>

            <Link>
              <div
                className="MenuIndiceSecu"
                onClick={() => handleComponentChange(LyricsH)}
              >
                <span>Lyrics</span>
              </div>
            </Link>
            <Link>
              <div
                className="MenuIndiceSecu"
                onClick={() => handleComponentChange(Galeria)}
              >
                <span>Mapa interactivo</span>
              </div>
            </Link>
            <Link
              to="https://lorkami.vercel.app/Windows"
              target="_blank"
              rel="noreferer"
            >
              <div className="MenuIndiceSecu">
                <span>Proyecto Windows</span>
              </div>
            </Link>
            <Link
              to="https://lorkami.vercel.app/"
              target="_blank"
              rel="noreferer"
            >
              <div className="MenuIndiceSecu">
                <span>Pagina LorKami V1</span>
              </div>
            </Link>
            <Link>
              <div
                className="MenuIndiceSecu Mobile"
                onClick={() => handleComponentChange(ReproductorMusicah)}
              >
                <span>Reproductor</span>
              </div>
            </Link>
          </div>
          <div className="MenuImagenCambiante">
            {loading ? (
              <Skeleton
                variant="rounded"
                animation="wave"
                width={"100%"}
                height={"100vh"}
              />
            ) : (
              <img src={changingImage} alt="Imagen de Reproductor" />
            )}
          </div>
        </div>

        <div className="SeccionDeCargaDeComponentes">{selectedComponent}</div>

        <div
          className={`BtnArriba ${
            showScrollTopBtn ? `show ${darkMode ? "dark" : ""}` : ""
          }`}
          onClick={scrollToTop}
        >
          <MdPlayArrow size="1.6rem" />
        </div>
        <div className="VentanaReproductorMusica">
          <div className="VentanaReproductorMusicaCaja">
            <ReproductorMusicah darkMode={darkMode} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
