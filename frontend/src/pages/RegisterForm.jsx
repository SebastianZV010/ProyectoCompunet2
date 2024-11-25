import React, { useState } from 'react';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    role: 'cliente', // Valor predeterminado
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        alert('Usuario registrado con éxito.');
        window.location.href = '/login'; // Redirige a la página de login
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error('Error en el registro:', error);
      alert('Ocurrió un error al registrar el usuario.');
    }
  };

  return (
    <div className="form-container">
      <h1>Registrarse</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Usuario</label>
        <input
          type="text"
          name="username"
          placeholder="Crea tu usuario"
          value={formData.username}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          name="password"
          placeholder="Crea tu contraseña"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <label htmlFor="role">Tipo de usuario</label>
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          required
        >
          <option value="cliente">Cliente</option>
          <option value="admin">Administrador</option>
        </select>

        <button type="submit">Registrarse</button>
      </form>
      <p>
        ¿Ya tienes cuenta? <a href="/login">Inicia sesión aquí</a>
      </p>
    </div>
  );
};

export default RegisterForm;
