import React, { useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  // Función para agregar un item al carrito
  const addItemToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  // Función para eliminar un item del carrito
  const removeItemFromCart = (item) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updatedCart);
  };

  return (
    <div>
      <h2>Carrito de compras</h2>
      {cartItems.length === 0 ? (
        <p>No hay items en el carrito</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price}
              <button onClick={() => removeItemFromCart(item)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Agregar items al carrito:</h3>
      <button onClick={() => addItemToCart({ id: 1, name: 'Producto 1', price: 10 })}>
        Agregar Producto 1
      </button>
      <button onClick={() => addItemToCart({ id: 2, name: 'Producto 2', price: 20 })}>
        Agregar Producto 2
      </button>
    </div>
  );
};

export default Cart;
