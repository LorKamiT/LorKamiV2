import React, { useState, useEffect } from 'react';
import { TbZoom } from "react-icons/tb";

const SearchBar = ({ setSearchTerm, darkMode }) => {
  useEffect(() => {
  }, [darkMode]);
  const [forceUpdate, setForceUpdate] = useState(0);
  useEffect(() => {
    setForceUpdate(forceUpdate + 1);
  }, [darkMode]);
  return (
    <div className={`GaleriaInput ${darkMode ? "dark" : ""}`}>
      <TbZoom className={`IcoZoom ${darkMode ? "dark" : ""}`} />
      <input 
        type="text"
        required="required"
        onChange={(e) => setSearchTerm(e.target.value)}
        className={darkMode ? "dark" : ""}
      />
      <span className={darkMode ? "dark" : ""}>Buscador de imágenes</span>
    </div>
  );
};

export default SearchBar;
