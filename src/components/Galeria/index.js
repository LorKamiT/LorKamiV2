import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import TagSelector from "./TagSelector";
import ImageCard from "./ImageCard";
import "./Galeria.css";

// Importar las imágenes desde todas las subcarpetas en la ruta especificada
const images = require.context("../../images/Galeria/", true, /\.(gif|webp)$/);

const imagesList = images.keys().map((image) => {
  const parts = image.split("/");
  const imageName = parts[parts.length - 1];

  // Eliminar la extensión del archivo
  const baseName = imageName.replace(/\.[^/.]+$/, "");

  // Dividir el nombre en palabras usando espacios, pero mantener grupos de palabras conectadas por guiones como una etiqueta
  let tags = baseName.split(" ").slice(2); // Omitir las dos primeras partes si son números o nombres sin relevancia

  // Convertir cada etiqueta, manejando los guiones para formar una sola etiqueta
  tags = tags.map((tag) =>
    tag
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ")
  );

  return {
    src: images(image),
    name: imageName,
    tags: tags, // Etiquetas procesadas
    folder: parts[parts.length - 2], // Carpeta a la que pertenece la imagen
  };
});

const Galeria = ({ darkMode }) => {
  useEffect(() => {}, [darkMode]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);

  const filteredImages = imagesList.filter((image) => {
    const lowerCaseName = image.name.toLowerCase(); // Convertir nombre a minúsculas
    const searchMatch = lowerCaseName.includes(searchTerm.toLowerCase()); // Búsqueda insensible a mayúsculas y minúsculas

    const tagsMatch =
      selectedTags.length === 0 ||
      selectedTags.every((tag) =>
        image.tags.some(
          (imageTag) => imageTag.toLowerCase() === tag.toLowerCase()
        )
      );

    return searchMatch && tagsMatch;
  });
  return (
    <div>
      <div className={`GaleriaMonitor ${darkMode ? "dark" : ""}`}>
        <div className={`GaleriaBox ${darkMode ? "dark" : ""}`}>
          <div className={`GaleriaTitulo ${darkMode ? "dark" : ""}`}>
            {/* <h1>Galeria de Imágenes</h1> */}
          </div>
          <div className={`GaleriaBarraBusqueda ${darkMode ? "dark" : ""}`}>
            <SearchBar setSearchTerm={setSearchTerm} darkMode={darkMode} />
          </div>
          <div className={`GaleriaTags ${darkMode ? "dark" : ""}`}>
            <TagSelector
              selectedTags={selectedTags}
              setSelectedTags={setSelectedTags}
              darkMode={darkMode}
            />
          </div>
          <div className={`image-grid ${darkMode ? "dark" : ""}`}>
            {filteredImages.map((image, index) => (
              <ImageCard
                key={index}
                image={image}
                images={filteredImages}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Galeria;
