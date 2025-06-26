import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" end>Inicio</NavLink>
      <NavLink to="/estadisticas">Estadísticas</NavLink>
      <NavLink to="/contacto">Contacto</NavLink>
    </nav>
  );
}
