import Inicio from "./pages/Inicio";
import Error from "./pages/Error";

import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </HashRouter>
    </div>
  );
}
export default App;
