import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Para manejar redirecciones

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const navigate = useNavigate(); // Hook de react-router-dom para redirigir

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();
      if (response.ok) {
        // Guardar token y rol en localStorage
        localStorage.setItem('token', data.token);
        localStorage.setItem('role', data.role);

        alert('Inicio de sesión exitoso.');

        // Redirigir según el rol del usuario
        if (data.role === 'admin') {
          navigate('/admin'); // Redirige al panel de administrador
        } else {
          navigate('/products'); // Redirige a la página principal para clientes
        }
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error('Error en el inicio de sesión:', error);
      alert('Ocurrió un error al iniciar sesión.');
    }
  };

  return (
    <div className="form-container">
      <h1>Iniciar Sesión</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Usuario</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Ingresa tu usuario"
          value={credentials.username}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Ingresa tu contraseña"
          value={credentials.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Entrar</button>
      </form>
      <p>
        ¿No tienes cuenta? <a href="/register">Regístrate aquí</a>
      </p>
    </div>
  );
};

export default Login;
