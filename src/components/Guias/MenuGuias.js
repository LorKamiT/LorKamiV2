import React, { useEffect, useState } from "react";
import "./MenuGuias.css";

const MenuGuias = ({ toggleMenu, darkMode }) => {
  useEffect(() => {}, [darkMode]);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".section");
      let found = false;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActiveSection(section.id);
          found = true;
        }
      });

      if (!found) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const sectionsData = [
    {
      title: "Crear proyecto en VsCode",
      subtitles: [
        { title: "React JS Native", sectionId: "section1" },
        { title: "Next JS", sectionId: "section2" },
      ],
    },
    {
      title: "Titulo",
      subtitles: [
        { title: "Titulo", sectionId: "section3" },
        { title: "Titulo", sectionId: "section4" },
      ],
    },
  ];

  const handleClick = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    toggleMenu();
  };

  return (
    <div className="menu">
      {sectionsData.map((section, index) => (
        <div key={index} className={`menu-item ${darkMode ? "dark" : ""}`}>
          <h3>{section.title}</h3>
          <ul>
            {section.subtitles.map((subtitle, subIndex) => (
              <li
                key={subIndex}
                onClick={() => handleClick(subtitle.sectionId)}
                className={`${
                  activeSection === subtitle.sectionId ? "active" : ""
                } ${darkMode ? "dark" : ""}`}
              >
                {subtitle.title}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MenuGuias;
