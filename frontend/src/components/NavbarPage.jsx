import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <header className="navbar">
      <div className="logo">TechStore</div>
      <nav>
        <ul>
          <li><Link to="/home">Inicio</Link></li>
          <li><Link to="/history">Historial de Facturas</Link></li>
          <li><button onClick={handleLogout} className="logout-btn">Cerrar sesión</button></li>
        </ul>
      </nav>
      <div className="cart-icon">
        <Link to="/cart">
          <img src="/images2/car.svg" alt="Carrito" />
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
