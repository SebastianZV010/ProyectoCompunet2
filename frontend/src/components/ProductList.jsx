import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/products', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        setProducts(response.data);
      } catch (err) {
        setError('Error al cargar productos. Intenta nuevamente.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Cargando productos...</div>;
  if (error) return <div>{error}</div>;

  return (
    <section className="product-list">
      <h2>Productos</h2>
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            {/* <img src={product.image} alt={product.name} /> */}
            <img src={`/images2${product.image}`} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="price">${product.price}</p>
            <button>Agregar al carrito</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductList;
