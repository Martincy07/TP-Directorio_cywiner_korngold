import { useParams } from "react-router-dom";
import personas from "../people.json";

export default function DetallePersona() {
  const { id } = useParams();
  const persona = personas.find(p => p.id === Number(id));

  if (!persona) return <p>Persona no encontrada</p>;

  return (
    <section>
      <h2>{persona.nombre} {persona.apellido}</h2>
      <p>Edad: {persona.edad} – {persona.edad >= 18 ? "Mayor de edad" : "Menor de edad"}</p>
      <p>Email: {persona.email}</p>
    </section>
  );
}
