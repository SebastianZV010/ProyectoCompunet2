import React from 'react';
import { Link } from 'react-router-dom';

function Unauthorized() {
  return (
    <div className="form-container">
      <h1>Acceso No Autorizado</h1>
      <p>No tienes permiso para acceder a esta página.</p>
      <Link to="/login">Volver al Login</Link>
    </div>
  );
}

export default Unauthorized;
