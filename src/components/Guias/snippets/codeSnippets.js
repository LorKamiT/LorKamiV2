import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5, FaCss3 } from "react-icons/fa";
import { VscDebugConsole } from "react-icons/vsc";

export const codeSnippets = {
  CrearProyectoReactJS: {
    consola: {
      title: "Consola VSCode",
      icon: <VscDebugConsole style={{ color: "#f6f7f8" }} />,
      code: `npx create-react-app nombre`,
    },
  },
  LibreriasMasUtilizadas: {
    consola: {
      title: "Consola VSCode",
      icon: <VscDebugConsole style={{ color: "#f6f7f8" }} />,
      code: `npm i react-router-dom
npm i gh-pages
npm i react-icons --save
npm i @react-icons/all-files --save
`,
    },
  },
  HashRouterQueUsoActualmente: {
    js: {
      title: "App.js",
      icon: <IoLogoJavascript style={{ color: "#ffca28" }} />,
      code: `import Home from "./pages/Home";
import Error from "./pages/Error";

import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;`,
    },
  },
  Ejemplo1: {
    js: {
      title: "App.js",
      icon: <IoLogoJavascript style={{ color: "#ffca28" }} />,
      code: `Este es JS:`,
    },
    css: {
      title: "App.css",
      icon: <FaCss3 style={{ color: "#42a5f5" }} />,
      code: `Este es CSS:`,
    },
    html: {
      title: "index.html",
      icon: <FaHtml5 style={{ color: "#e65100" }} />,
      code: `Este es HTML:`,
    },
    consola: {
      title: "Consola VSCode",
      icon: <VscDebugConsole style={{ color: "#f6f7f8" }} />,
      code: `Este es el codigo xd:`,
    },
  },
};
