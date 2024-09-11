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

  InstalarDependenciasNextJS: {
    consola: {
      title: "Consola VSCode",
      icon: <VscDebugConsole style={{ color: "#f6f7f8" }} />,
      code: `npm i next-themes
npm i clsx
npm i react-icons --save
npm i -D prettier prettier-plugin-tailwindcss
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

  CodigoInstalarVercel: {
    consola: {
      title: "Consola VSCode",
      icon: <VscDebugConsole style={{ color: "#f6f7f8" }} />,
      code: `npm install -g vercel
Set-ExecutionPolicy -ExecutionPolicy Unrestricted -Scope CurrentUser
vercel login
Set-ExecutionPolicy -ExecutionPolicy Restricted -Scope CurrentUser

`,
    },
  },

  CodigoInstalarVercelbConCodigoExtra: {
    consola: {
      title: "Consola VSCode",
      icon: <VscDebugConsole style={{ color: "#f6f7f8" }} />,
      code: `Set-ExecutionPolicy -ExecutionPolicy Unrestricted -Scope CurrentUser
vercel
Set-ExecutionPolicy -ExecutionPolicy Restricted -Scope CurrentUser

`,
    },
  },

  CodigoDeployarVercelbConCodigoExtra: {
    consola: {
      title: "Consola VSCode",
      icon: <VscDebugConsole style={{ color: "#f6f7f8" }} />,
      code: `Set-ExecutionPolicy -ExecutionPolicy Unrestricted -Scope CurrentUser
vercel --prod
Set-ExecutionPolicy -ExecutionPolicy Restricted -Scope CurrentUser

`,
    },
  },

  MetadatosEdicionRapida: {
    html: {
      title: "index.html (Edición rapida)",
      icon: <FaHtml5 style={{ color: "#e65100" }} />,
      code: `<head>
<meta charset="utf-8" />
<link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="theme-color" content="#000000" />
<link rel="apple-touch-icon" href="%PUBLIC_URL%/apple-touch-icon.png" />
<link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

<title>CHANGE</title>
<meta name="twitter:title" content="CHANGE">
<meta property="og:title" content="CHANGE">

<meta name="description" content="CHANGE"/>
<meta name="twitter:description" content="CHANGE">
<meta property="og:description" content="CHANGE">

<meta name="twitter:site" content="@CHANGE">
<meta name="twitter:image" content="https://CHANGE.xyz/card.png">
<meta property="og:url" content="https://CHANGE.xyz">
<meta property="og:image" content="https://CHANGE.xyz/card.png">

<meta name="twitter:card" content="summary_large_image">
<meta property="og:type" content="website">
</head>
`,
    },
  },

  MetadatosEdicionOrganizada: {
    html: {
      title: "index.html (Organizado)",
      icon: <FaHtml5 style={{ color: "#e65100" }} />,
      code: `<head>
<meta charset="utf-8" />
<link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="theme-color" content="#000000" />
<meta name="description" content="CHANGE"/>
<link rel="apple-touch-icon" href="%PUBLIC_URL%/apple-touch-icon.png" />
<link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
<title>CHANGE</title>

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@CHANGE">
<meta name="twitter:title" content="CHANGE">
<meta name="twitter:description" content="CHANGE">
<meta name="twitter:image" content="https://CHANGE.xyz/card.png">

<meta property="og:title" content="CHANGE">
<meta property="og:type" content="website">
<meta property="og:url" content="https://CHANGE.xyz">
<meta property="og:image" content="https://CHANGE.xyz/card.png">
<meta property="og:description" content="CHANGE">
</head>
`,
    },
  },

  FontPersonalizada: {
    css: {
      title: "App.css",
      icon: <FaCss3 style={{ color: "#42a5f5" }} />,
      code: `@font-face {
  font-family: 'MiFuentePersonalizada';
  src: url('../public/fonts/CoffeCake.otf');
}
  
body {
  font-family: 'MiFuentePersonalizada', sans-serif;
}
`,
    },
  },

  ScrollBar: {
    css: {
      title: "App.css",
      icon: <FaCss3 style={{ color: "#42a5f5" }} />,
      code: `::-webkit-scrollbar {
  width: 14px;
}

::-webkit-scrollbar-track {
  border-radius: 6px;
  background-color: rgb(136, 89, 156);
  border: solid 2px black;
}

::-webkit-scrollbar-thumb {
  border-radius: 6px;
  border: solid 2px black;
  background-color: rgb(55, 137, 44);
}

::-webkit-scrollbar-thumb:hover {
  background-color: rgb(76, 190, 60);
}
`,
    },
  },

  Responsive: {
    css: {
      title: "App.css",
      icon: <FaCss3 style={{ color: "#42a5f5" }} />,
      code: `@media screen and (max-width: 1440px)  {

}

@media screen and (max-width: 1024px) {

}

@media screen and (max-width: 768px) /* Tablet */ {

}

@media screen and (max-width: 425px) /* Movil */ {

}

@media screen and (max-width: 375px) /* Movil */ {

}

@media screen and (max-width: 320px) /* Movil */ {

}
`,
    },
  },

  MagickCrearWebpPNG: {
    consola: {
      title: "Consola VSCode",
      icon: <VscDebugConsole style={{ color: "#f9a825" }} />,
      code: `magick mogrify -format webp *.png
      `,
    },
  },
  MagickCrearWebpJPG: {
    consola: {
      title: "Consola VSCode",
      icon: <VscDebugConsole style={{ color: "#f9a825" }} />,
      code: `magick mogrify -format webp *.jpg
      `,
    },
  },
  MagickCrearWebpJPEG: {
    consola: {
      title: "Consola VSCode",
      icon: <VscDebugConsole style={{ color: "#f9a825" }} />,
      code: `magick mogrify -format webp *.jpeg
      `,
    },
  },
  MagickEliminarIMGPNG: {
    consola: {
      title: "Consola VSCode",
      icon: <VscDebugConsole style={{ color: "#f9a825" }} />,
      code: `del *.png
      `,
    },
  },
  MagickEliminarIMGJPG: {
    consola: {
      title: "Consola VSCode",
      icon: <VscDebugConsole style={{ color: "#f9a825" }} />,
      code: `del *.jpg
      `,
    },
  },
  MagickEliminarIMGJPEG: {
    consola: {
      title: "Consola VSCode",
      icon: <VscDebugConsole style={{ color: "#f9a825" }} />,
      code: `del *.jpeg
      `,
    },
  },

  PowerToysQuitarNumerologia: {
    consola: {
      title: "Consola VSCode",
      icon: <VscDebugConsole style={{ color: "#f9a825" }} />,
      code: `^\\d+\\s-\\s
      `,
    },
  },

  PowerToysCrearNumerologia: {
    consola: {
      title: "Consola VSCode",
      icon: <VscDebugConsole style={{ color: "#f9a825" }} />,
      code: `\${start=1} - 
      `,
    },
  },

  PowerToysCQuitarNumerologiaRepetida: {
    consola: {
      title: "Consola VSCode",
      icon: <VscDebugConsole style={{ color: "#f9a825" }} />,
      code: `\\s*\\(\\d+\\)\\s* 
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
