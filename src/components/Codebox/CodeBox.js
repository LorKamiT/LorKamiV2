import React, { useState, useEffect } from "react";
import "../Codebox/CodeBox.css";

import { codeSnippets } from "../Guias/snippets/codeSnippets";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { RiErrorWarningLine } from "react-icons/ri";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus as syntaxTheme } from "react-syntax-highlighter/dist/esm/styles/prism";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

const CodeBox = ({ id, darkMode }) => {
  useEffect(() => {}, [darkMode]);
  const snippet = codeSnippets[id];

  const [activeTab, setActiveTab] = useState(
    snippet ? Object.keys(snippet)[0] : ""
  ); // Garantiza la llamada al hook
  const [copySuccess, setCopySuccess] = useState(false);

  if (!snippet) {
    return (
      <div className={`CodeBoxError ${darkMode ? "dark" : ""}`}>
        <RiErrorWarningLine />
        <p>La ID del CodeBox es incorrecta o inexistente papu!</p>
      </div>
    );
  }

  const handleCopy = () => {
    setCopySuccess(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setCopySuccess(false);
  };

  return (
    <div className="codebox">
      <div className="tabs">
        {Object.keys(snippet).map((lang) => (
          <button
            key={lang}
            onClick={() => setActiveTab(lang)}
            className={activeTab === lang ? "active" : ""}
          >
            {snippet[lang].icon} {snippet[lang].title}
          </button>
        ))}
      </div>
      <SyntaxHighlighter language={activeTab} style={syntaxTheme}>
        {snippet[activeTab].code}
      </SyntaxHighlighter>
      <CopyToClipboard text={snippet[activeTab].code} onCopy={handleCopy}>
        <button className="copy-button">Copy</button>
      </CopyToClipboard>
      <Snackbar
        open={copySuccess}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Código copiado correctamente
        </Alert>
      </Snackbar>
    </div>
  );
};

export default CodeBox;
