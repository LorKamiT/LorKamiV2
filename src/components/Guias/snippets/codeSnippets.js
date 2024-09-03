import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5, FaCss3 } from "react-icons/fa";
import { VscDebugConsole } from "react-icons/vsc";
import { VscJson } from "react-icons/vsc";
import { GrLanguage } from "react-icons/gr";
import { MdDns } from "react-icons/md";

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

  IniciarProyectoReact: {
    consola: {
      title: "Consola VSCode",
      icon: <VscDebugConsole style={{ color: "#f6f7f8" }} />,
      code: `npm start 
      `,
    },
  },

  InstalarNextJS: {
    consola: {
      title: "Consola VSCode",
      icon: <VscDebugConsole style={{ color: "#f6f7f8" }} />,
      code: `npx create-next-app@latest
      `,
    },
  },

  IniciarProyectoNextJS: {
    consola: {
      title: "Consola VSCode",
      icon: <VscDebugConsole style={{ color: "#f6f7f8" }} />,
      code: `npm run dev
      `,
    },
  },

  ConfiguracionPackageJson: {
    json: {
      title: "package.json",
      icon: <VscJson style={{ color: "#f9a825" }} />,
      code: `"homepage": "https://pagina.xyz/",

"scripts": {
"predeploy": "npm run build",
"deploy": "gh-pages -d build",
  },`,
    },
  },

  DatosParaElCNAME: {
    cname: {
      title: "CNAME",
      icon: <GrLanguage style={{ color: "#e53935" }} />,
      code: `pagina.xyz`,
    },
  },

  DNSGithub: {
    consola: {
      title: "DNS",
      icon: <MdDns style={{ color: "#f9a825" }} />,
      code: `185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153`,
    },
  },

  EjemploCodigoGithub: {
    consola: {
      title: "Consola VSCode",
      icon: <VscDebugConsole style={{ color: "#f6f7f8" }} />,
      code: `git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/LorKamiT/Proyecto.git
git push -u origin main
`,
    },
  },

  CodigoDeployarGithub: {
    consola: {
      title: "Consola VSCode",
      icon: <VscDebugConsole style={{ color: "#f6f7f8" }} />,
      code: `npm run deploy
      `,
    },
  },

  CodigoDeployarGithubConCodigoExtra: {
    consola: {
      title: "Consola VSCode",
      icon: <VscDebugConsole style={{ color: "#f6f7f8" }} />,
      code: `Set-ExecutionPolicy -ExecutionPolicy Unrestricted -Scope CurrentUser
npm run deploy
Set-ExecutionPolicy -ExecutionPolicy Restricted -Scope CurrentUser
`,
    },
  },

  CodigoPushPullGithub: {
    consola: {
      title: "Consola VSCode",
      icon: <VscDebugConsole style={{ color: "#f6f7f8" }} />,
      code: `<---- PC a Github ---->
git push

<---- Github a PC ---->
git pull
`,
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
    json: {
      title: "package.json",
      icon: <VscJson style={{ color: "#f9a825" }} />,
      code: `Esto es un json:`,
    },
    cname: {
      title: "CNAME",
      icon: <GrLanguage style={{ color: "#e53935" }} />,
      code: `Esto es el CNAME:`,
    },
    dns: {
      title: "DNS",
      icon: <MdDns style={{ color: "#f9a825" }} />,
      code: `Esto es el DNS:`,
    },
    consola: {
      title: "Consola VSCode",
      icon: <VscDebugConsole style={{ color: "#f9a825" }} />,
      code: `Este es el codigo xd:`,
    },
  },
};
