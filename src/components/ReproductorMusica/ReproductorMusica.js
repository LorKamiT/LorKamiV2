import React, { useState, useRef, useEffect } from "react";
import "./ReproductorMusica.css";

import Slider from "@mui/material/Slider";
import { ImMinus } from "react-icons/im";
import { FaList } from "react-icons/fa";
import { IoIosRadio } from "react-icons/io";
import { CiPause1 } from "react-icons/ci";
import {
  HiOutlineBackward,
  HiOutlinePlay,
  HiOutlineForward,
  HiOutlineStop,
} from "react-icons/hi2";
import {
  IoVolumeMuteOutline,
  IoVolumeMediumOutline,
  IoVolumeLowOutline,
} from "react-icons/io5";

import { songsdata, radiosdata } from "./audiosapp";

const ReproductorMusicah = ({ darkMode, onMount }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [isVolumeTooltipVisible, setIsVolumeTooltipVisible] = useState(false);
  const [isRadioTooltipVisible, setIsRadioTooltipVisible] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [currentRadioIndex, setCurrentRadioIndex] = useState(null);
  const [elapsed, setElapsed] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(5); // Volumen predeterminado al 5%
  const [isMuted, setIsMuted] = useState(false); // Estado de mute
  const [isMobile, setIsMobile] = useState(false); // Estado para detectar versión móvil
  const previousVolume = useRef(volume); // Almacenar el volumen antes de mutear
  const audioRef = useRef(null);

  const expandPlayer = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleTooltip = () => setIsTooltipVisible(!isTooltipVisible);
  const toggleRadioTooltip = () =>
    setIsRadioTooltipVisible(!isRadioTooltipVisible);

  useEffect(() => {
    const handleResize = () => {
      const isMobileSize = window.innerWidth <= 768;
      setIsMobile(isMobileSize);
      if (isMobileSize && !isExpanded) {
        setIsExpanded(true); // Expande automáticamente si es móvil
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Comprobar el tamaño de la ventana al cargar

    // Ejecutar el callback cuando el componente se monta, si se proporciona
    if (onMount) {
      onMount();
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMobile) {
      setVolume(100); // Establecer volumen predeterminado al 100% en versión móvil
    }
  }, [isMobile]);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
    }

    const audio = audioRef.current;
    audio.volume = volume / 100; // Establecer volumen predeterminado

    const updateProgress = () => {
      setElapsed(audio.currentTime);
      setDuration(audio.duration);
    };

    const handleSongEnd = () => {
      handleForward();
    };

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("loadedmetadata", updateProgress);
    audio.addEventListener("ended", handleSongEnd);

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("loadedmetadata", updateProgress);
      audio.removeEventListener("ended", handleSongEnd);
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (currentRadioIndex !== null) {
      audio.src = radiosdata[currentRadioIndex].url;
    } else {
      audio.src = songsdata[currentSongIndex].url;
    }
    if (isPlaying) {
      audio.play();
    }
  }, [currentSongIndex, currentRadioIndex]);

  useEffect(() => {
    console.log("useEffect - isPlaying:", isPlaying);
    const audio = audioRef.current;
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    audioRef.current.volume = isMuted ? 0 : volume / 100;
  }, [isMuted, volume]);

  const handlePlayPause = () => {
    console.log("Antes de cambiar:", isPlaying); // Log antes de cambiar el estado
    setIsPlaying(!isPlaying);
    console.log("Después de cambiar:", !isPlaying); // Log después de cambiar el estado
  };

  const handleStop = () => {
    const audio = audioRef.current;
    audio.pause();
    audio.currentTime = 0;
    setIsPlaying(false);
  };

  const handleRewind = () => {
    const audio = audioRef.current;
    if (audio.currentTime > 2) {
      audio.currentTime = 0;
    } else if (currentRadioIndex !== null) {
      setCurrentRadioIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : radiosdata.length - 1
      );
    } else {
      setCurrentSongIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : songsdata.length - 1
      );
    }
  };

  const handleForward = () => {
    if (currentRadioIndex !== null) {
      setCurrentRadioIndex((prevIndex) => (prevIndex + 1) % radiosdata.length);
    } else {
      setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songsdata.length);
    }
  };

  const handleRadioSelect = (index) => {
    setCurrentRadioIndex(index);
    setCurrentSongIndex(null); // Deselect song
    setIsPlaying(true); // Comienza a reproducir automáticamente la radio seleccionada
  };

  const handleSongSelect = (index) => {
    setCurrentSongIndex(index);
    setCurrentRadioIndex(null); // Deselect radio
    setIsPlaying(true); // Comienza a reproducir automáticamente la canción seleccionada
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handleProgressChange = (event, newValue) => {
    const audio = audioRef.current;
    if (isFinite(audio.duration)) {
      audio.currentTime = (audio.duration * newValue) / 100;
      setElapsed(audio.currentTime);
    }
  };

  const handleVolumeChange = (event, newValue) => {
    setVolume(newValue);
    audioRef.current.volume = newValue / 100;
    if (isMuted) setIsMuted(false); // Desmutear si se ajusta el volumen
  };

  const toggleMute = () => {
    if (isMuted) {
      setVolume(previousVolume.current); // Restaurar el volumen previo
    } else {
      previousVolume.current = volume; // Guardar el volumen actual
      setVolume(0); // Mutear
    }
    setIsMuted(!isMuted);
  };

  const getVolumeIcon = () => {
    if (isMuted || volume === 0) {
      return <IoVolumeMuteOutline className="btn-vol" size="1.6rem" />;
    } else if (volume <= 66) {
      return <IoVolumeLowOutline className="btn-vol" size="1.6rem" />;
    } else {
      return <IoVolumeMediumOutline className="btn-vol" size="1.6rem" />;
    }
  };

  return (
    <div
      className={`music-player ${isExpanded ? "expanded" : ""} ${
        darkMode ? "dark" : ""
      }`}
    >
      {!isExpanded && (
        <div
          className={`audio-waves-icon ${darkMode ? "dark" : ""}`}
          onClick={expandPlayer}
        >
          <div className={`wave ${isPlaying ? "playing" : ""}`}></div>
          <div className={`wave2 ${isPlaying ? "playing" : ""}`}></div>
          <div className={`wave3 ${isPlaying ? "playing" : ""}`}></div>
          <div className={`wave2 ${isPlaying ? "playing" : ""}`}></div>
          <div className={`wave ${isPlaying ? "playing" : ""}`}></div>
        </div>
      )}
      {isExpanded && (
        <div className={`containermusicapp ${darkMode ? "dark" : ""}`}>
          <div className="imageApp-container">
            <div className="ImageApp">
              <img
                src={
                  currentRadioIndex !== null
                    ? radiosdata[currentRadioIndex].musicimage
                    : songsdata[currentSongIndex].musicimage
                }
                alt="Album Cover"
              />
            </div>
          </div>

          <div className="controlsmusicapp">
            <div className="control-group btnplay">
              <HiOutlineBackward
                className="btn-vol"
                size="1.6rem"
                onClick={handleRewind}
              />
              {isPlaying ? (
                currentRadioIndex !== null ? (
                  <HiOutlineStop
                    className="btn-vol"
                    size="1.6rem"
                    onClick={handleStop}
                  />
                ) : (
                  <CiPause1
                    className="btn-vol"
                    size="1.6rem"
                    onClick={handlePlayPause}
                  />
                )
              ) : (
                <HiOutlinePlay
                  className="btn-vol"
                  size="1.6rem"
                  onClick={handlePlayPause}
                />
              )}
              <HiOutlineForward
                className="btn-vol"
                size="1.6rem"
                onClick={handleForward}
              />
            </div>
            <div className="control-group btnmenu">
              <div
                className="btn relative"
                onMouseEnter={toggleTooltip}
                onMouseLeave={toggleTooltip}
              >
                <FaList
                  className="btn-vol"
                  style={{ verticalAlign: "middle" }}
                />
                <div
                  className={`tooltip ${darkMode ? "dark" : ""} ${
                    isTooltipVisible
                      ? `tooltip-visible ${darkMode ? "dark" : ""}`
                      : ""
                  }`}
                >
                  {songsdata.map((song, index) => (
                    <div
                      key={index}
                      className={`TitleSongMenu ${darkMode ? "dark" : ""}`}
                      onClick={() => handleSongSelect(index)}
                    >
                      <HiOutlinePlay
                        className="btn-link"
                        size="0.7rem"
                        style={{ verticalAlign: "middle" }}
                      />{" "}
                      {song.title}
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="btn relative"
                onMouseEnter={toggleRadioTooltip}
                onMouseLeave={toggleRadioTooltip}
              >
                <IoIosRadio
                  className="btn-vol"
                  size="1.3rem"
                  style={{ verticalAlign: "middle" }}
                />
                <div
                  className={`tooltip ${darkMode ? "dark" : ""} ${
                    isRadioTooltipVisible
                      ? `tooltip-visible ${darkMode ? "dark" : ""}`
                      : ""
                  }`}
                >
                  {radiosdata.map((radio, index) => (
                    <div
                      key={index}
                      className={`TitleSongMenu ${darkMode ? "dark" : ""}`}
                      onClick={() => handleRadioSelect(index)}
                    >
                      <HiOutlinePlay
                        className="btn-link"
                        size="0.7rem"
                        style={{ verticalAlign: "middle" }}
                      />{" "}
                      {radio.title}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="slider-container">
            <div className="titlemusica">
              <p className={`TitleMusicaTitle ${darkMode ? "dark" : ""}`}>
                {currentRadioIndex !== null
                  ? radiosdata[currentRadioIndex].title
                  : songsdata[currentSongIndex].title}
              </p>
              <p className={`TitleMusicaArtist ${darkMode ? "dark" : ""}`}>
                {currentRadioIndex !== null
                  ? radiosdata[currentRadioIndex].artist
                  : songsdata[currentSongIndex].artist}
              </p>
            </div>
            <div className="slidermusicapp">
              <div className="SliderBoxTime">
                <div className="SliderBoxmusicapp">
                  <Slider
                    aria-label="Progress"
                    value={(elapsed / duration) * 100}
                    onChange={handleProgressChange}
                    sx={{
                      color: darkMode ? "white" : "black",
                      "& .MuiSlider-thumb": {
                        borderRadius: "50px",
                      },
                    }}
                  />
                </div>

                <div className="time-info-controller">
                  <div className={`time-info ${darkMode ? "dark" : ""}`}>
                    <span>{formatTime(elapsed)}</span>
                    <span>
                      {currentRadioIndex !== null &&
                      (isNaN(duration) || !isFinite(duration))
                        ? "EN VIVO 🔴"
                        : formatTime(duration)}
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="volume-control"
                onMouseEnter={() =>
                  !isMobile && setIsVolumeTooltipVisible(true)
                }
                onMouseLeave={() => setIsVolumeTooltipVisible(false)}
              >
                <div onClick={toggleMute} className="btnvolumen">
                  {getVolumeIcon()}
                </div>
                {isVolumeTooltipVisible && !isMobile && (
                  <div className={`volume-tooltip ${darkMode ? "dark" : ""}`}>
                    <Slider
                      aria-label="Volume"
                      min={0}
                      max={100}
                      step={1}
                      value={volume}
                      valueLabelDisplay="auto"
                      onChange={(e, newValue) =>
                        handleVolumeChange(null, newValue)
                      }
                      sx={{
                        color: darkMode ? "white" : "black", // Ajusta el color según el modo oscuro
                        "& .MuiSlider-thumb": {
                          borderRadius: "50px", // Forma del thumb
                        },
                      }}
                    />
                    {/* <span className="volume-percentage">{volume}%</span> */}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {isExpanded && (
        <button
          className={`minimize-icon ${darkMode ? "dark" : ""}`}
          onClick={expandPlayer}
        >
          <ImMinus />
        </button>
      )}
    </div>
  );
};

export default ReproductorMusicah;
