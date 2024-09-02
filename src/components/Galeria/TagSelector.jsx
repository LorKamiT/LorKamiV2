import React, { useState, useEffect } from 'react';
import { FaTag } from "react-icons/fa";

const tags = ['REDM', 'LEJANO OESTE', 'CANTARES', 'FRONTERA', 'FIVEM', 'BACKV', 'VIBES', 'SAFD', 'OASIS', 'CLICKSENSE', 'NEGROS', 'GANGA', 'LOS ANGELES','BOMBEROS', 'URBANPULSE', 'VIVA CHILE', 'FORTNITE', 'MINECRAFT','SAMP','OTROS','VIDEO', 'GIF', 'SEA OF THIEVES'];

const TagSelector = ({ selectedTags, setSelectedTags, darkMode }) => {
  useEffect(() => {
  }, [darkMode]);
  const [forceUpdate, setForceUpdate] = useState(0);
  useEffect(() => {
    setForceUpdate(forceUpdate + 1);
  }, [darkMode]);
  const toggleTag = (tag) => {
    setSelectedTags(
      selectedTags.includes(tag)
        ? selectedTags.filter(t => t !== tag)
        : [...selectedTags, tag]
    );
  };

  return (
      <div className={`tag-selector ${darkMode ? "dark" : ""}`}>
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => toggleTag(tag)}
          className={selectedTags.includes(tag) ? 'selected' : ''}
        >
          <FaTag style={{verticalAlign: 'middle'}}/> {tag}
        </button>
      ))}
    </div>
  );
};

export default TagSelector;
