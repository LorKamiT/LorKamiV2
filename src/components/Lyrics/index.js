import React, { useState } from "react";
import "../Lyrics/Lyrics.css";
import { songsdata } from "./letrasapp";

const Lyrics = ({ darkMode }) => {
  const [selectedSong, setSelectedSong] = useState(songsdata[0]);

  const handleSongChange = (event) => {
    const selectedSongIndex = event.target.value;
    setSelectedSong(songsdata[selectedSongIndex]);
  };
  return (
    <div className={`Letras-Caja ${darkMode ? "dark" : ""}`}>
      <div className="LetrasMonitor">
        <div className="Letras-Video">
          <iframe
            width="500"
            height="215"
            src={selectedSong.ytlink}
            title={selectedSong.title}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="Letras-Controlador">
          <div className="Letras-InfoSuperior">
            <div className="Letras-SelectorIzquierdo">
              <p>Seleccionar canción</p>
              <select className="Letras-Selector" onChange={handleSongChange}>
                {songsdata.map((song, index) => (
                  <option key={index} value={index}>
                    {song.title}
                  </option>
                ))}
              </select>
            </div>
            <div className="Letras-InformaciónDerecha">
              <div className="Letras-InfoCancion">
                <p>{selectedSong.title}</p>
                <p>{selectedSong.artist}</p>
              </div>
              <div className="Letras-ImagenCancion">
                <img
                  src={selectedSong.musicimage}
                  alt="Carátula de la canción"
                />
              </div>
            </div>
          </div>
          <div className="Letras-LectorTexto">
            {selectedSong.letras.split("\n").map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lyrics;
