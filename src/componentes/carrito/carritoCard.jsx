import React from "react";
import { useCart } from "../../context/CarritoContext";

const CarritoCard = ({ carrito }) => {
  const { removeFromCart } = useCart();
  const deleteProduct = (e) => {
    e.preventDefault();
    removeFromCart({ id: parseInt(e.target.id, 10) });
    console.log(e);
  };

  const buttonStyle = {
    cursor: "pointer",
  };

  const productoItemStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    border: "1px solid #ccc",
    padding: "10px",
    marginBottom: "10px",
  };

  const carritoContainerStyle = {
    maxWidth: "600px",
    margin: "auto",
    flexDirection: "column",
    alignItems: "center",
  };

  return (
    <div style={carritoContainerStyle}>
      <h1 style={{ alignItems: "center" }}> Mi Carrito</h1>
      {carrito.map((item, index) => (
        <div style={productoItemStyle} key={index}>
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
          <button style={buttonStyle}>Finalizar Compra</button>
        </h2>
      )}
    </div>
  );
};

export { CarritoCard };
