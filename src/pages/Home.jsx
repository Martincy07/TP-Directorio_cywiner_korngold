import personas from "../people.json";
import PersonaCard from "../components/personacard.jsx";


export default function Home() {
  return (
    <section>
      <h2>Directorio de Personas</h2>
      <div className="grid">
        {personas.map(p => (
          <PersonaCard key={p.id} persona={p} />
        ))}
      </div>
    </section>
  );
}
