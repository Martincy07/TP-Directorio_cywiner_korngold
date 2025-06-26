import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout.jsx";
import Home from "./pages/Home.jsx";
import DetallePersona from "./pages/Detalle.jsx";
import Estadisticas from "./pages/Estadisticas.jsx";
import FormularioContacto from "./components/contacto.jsx";
import NotFound from "./pages/notfound.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="persona/:id" element={<DetallePersona />} />
          <Route path="estadisticas" element={<Estadisticas />} />
          <Route path="contacto" element={<FormularioContacto />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
