import { useState } from "react";

export default function FormularioContacto() {
  const [form, setForm] = useState({ nombre:"", apellido:"", email:"", edad:"" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const validarEmail = email => /\S+@\S+\.\S+/.test(email);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { nombre, apellido, email, edad } = form;
    if (!nombre || !apellido || !email || !edad) {
      setError("Completar todos los campos");
      return;
    }
    if (!validarEmail(email)) {
      setError("Email inválido");
      return;
    }
    if (Number(edad) <= 0 || isNaN(Number(edad))) {
      setError("La edad debe ser un número positivo");
      return;
    }
    setError("");
    setSuccess(true);
    setForm({ nombre:"", apellido:"", email:"", edad:"" });
  };

  return (
    <section>
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit} className="form">
        {/* Campos... */}
        <input name="nombre" value={form.nombre} onChange={handleChange} placeholder="Nombre"/>
        <input name="apellido" value={form.apellido} onChange={handleChange} placeholder="Apellido"/>
        <input name="email" value={form.email} onChange={handleChange} placeholder="Email"/>
        <input name="edad" value={form.edad} onChange={handleChange} placeholder="Edad" type="number"/>
        <button type="submit">Enviar</button>
      </form>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">¡Gracias! Tu formulario fue enviado.</p>}
    </section>
  );
}

