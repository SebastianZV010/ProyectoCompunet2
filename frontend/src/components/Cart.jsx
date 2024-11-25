import React, { useState, useEffect } from 'react';

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/cart', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(response => response.json())
      .then(data => setCartItems(data))
      .catch(error => console.error('Error al cargar el carrito:', error));
  }, []);

  const handleRemoveItem = (productId) => {
    fetch(`http://localhost:3000/cart/${productId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(response => {
        if (response.ok) {
          setCartItems(cartItems.filter(item => item.productId !== productId));
        } else {
          alert('Error al eliminar el producto del carrito.');
        }
      })
      .catch(error => console.error('Error al eliminar producto del carrito:', error));
  };

  const handleCheckout = () => {
    alert('Función de compra aún no implementada.'); // Aquí puedes implementar más funcionalidades.
  };

  return (
    <div className="cart">
      <h1>Carrito</h1>
      <div>
        {cartItems.length === 0 ? (
          <p>El carrito está vacío.</p>
        ) : (
          <ul>
            {cartItems.map(item => (
              <li key={item.productId}>
                <h3>{item.name}</h3>
                <p>Precio: ${item.price}</p>
                <p>Cantidad: {item.quantity}</p>
                <button onClick={() => handleRemoveItem(item.productId)}>Eliminar</button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <button onClick={handleCheckout}>Comprar</button>
    </div>
  );
}

export default Cart;
