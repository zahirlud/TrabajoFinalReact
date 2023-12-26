import React from "react";
import { useCart } from "../../context/CarritoContext";

const CarritoCard = ({ carrito }) => {
  const { removeFromCart } = useCart();
  const deleteProduct = (e) => {
    e.preventDefault();
    removeFromCart({ id: parseInt(e.target.id, 10) });
    console.log(e);
  };

  return (
    <div>
      <h1>Mi Carrito</h1>
      {carrito.map((item, index) => (
        <div key={index}>
          <p>{item.name}</p>
          <p>Precio: {item.price}</p>
          <p>Cantidad: {item.quantity}</p>
          <button id={item.id} onClick={deleteProduct}>
            Quitar del carrito
          </button>
        </div>
      ))}
      {carrito.length > 0 && (
        <h2>
          <button>Finalizar Compra</button>
        </h2>
      )}
    </div>
  );
};

export { CarritoCard };
