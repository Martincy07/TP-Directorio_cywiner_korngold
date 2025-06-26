import personas from "../people.json";


export default function Estadisticas() {
  const total = personas.length;
  const mayores35 = personas.filter(p => p.edad > 35).length;
  const edades = personas.map(p => p.edad);
  const maxEdad = Math.max(...edades);
  const minEdad = Math.min(...edades);
  const promedio = (edades.reduce((a,b)=>a+b,0)/total).toFixed(1);

  return (
    <section>
      <h2>Estadísticas</h2>
      <ul>
        <li>Total: {total}</li>
        <li>+35 años: {mayores35}</li>
        <li>Mayor edad: {personas.filter(p => p.edad === maxEdad).map(p => `${p.nombre} ${p.apellido}`).join(", ")} ({maxEdad})</li>
        <li>Menor edad: {personas.filter(p => p.edad === minEdad).map(p => `${p.nombre} ${p.apellido}`).join(", ")} ({minEdad})</li>
        <li>Edad promedio: {promedio}</li>
      </ul>
    </section>
  );
}
