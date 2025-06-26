import { Link } from "react-router-dom";

export default function PersonaCard({ persona }) {
  return (
    <div className="card">
      <h3>{persona.nombre} {persona.apellido}</h3>
      <p>Edad: {persona.edad}</p>
      <Link to={`/persona/${persona.id}`} className="btn">Ver más</Link>
    </div>
  );
}

