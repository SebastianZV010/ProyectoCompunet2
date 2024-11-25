import React from 'react';
import Navbar from '../components/NavbarPage';
import ProductList from '../components/ProductList';
import SeccionBeneficios from '../components/BenefitSection';
import SeccionBlogs from '../components/BlogSection';

const ProducstForm = () => {
  return (
    <div>
      <Navbar />
      <header className="page-header">
        <h1>¡Ofertas Tecnológicas!</h1>
        <p>Equipos, gadgets y accesorios al mejor precio.</p>
        <button className="btn-primary">Explorar productos</button>
      </header>
      <main>
        <ProductList />
        <SeccionBeneficios />
        <SeccionBlogs />
      </main>
    </div>
  );
};

export default ProducstForm;
