import React from "react";
import { useCart } from "../../context/CarritoContext";

const cardStyle = {
  border: "3px solid #000",
  borderRadius: "8px",
  padding: "10px",
  margin: "10px",
  width: "200px", // Ancho de la tarjeta, ajusta según sea necesario
};

const imageStyle = {
  width: "100%", // La imagen ocupa el 100% del ancho de la tarjeta
  height: "auto", // Altura automática para mantener la proporción
  marginBottom: "10px",
  borderRadius: "8px", // Bordes redondeados
};

const ProductCard = ({ id, title, price, description, category, images }) => {
  const { addToCart } = useCart();
  const onAgregarAlCarrito = (e) => {
    e.preventDefault();
    addToCart({ id, name: title, price });
  };
  return (
    <div style={cardStyle} key={id}>
      <img src={images[0]} alt="imagen1" style={imageStyle} />
      <p>{title}</p>
      <p>Precio: ${price}</p>
      <p>Descripción: {description}</p>
      <p>Categoría: {category}</p>
      <button onClick={onAgregarAlCarrito}>Agregar al carrito</button>
    </div>
  );
};

export { ProductCard };
