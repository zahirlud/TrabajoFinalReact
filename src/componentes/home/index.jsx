import React from "react";
import { Layout } from "../layout";

const Home = () => {
  const imageUrl =
    "https://img.freepik.com/fotos-premium/3d-conjunto-electrodomesticos-sobre-fondo-blanco_751108-1072.jpg?w=740";
  return (
    <div>
      <div style={contentStyle}>
        <div style={mainContentStyle}>
          <h1>Bienvenido a E-commerce</h1>
        </div>
        <img src={imageUrl} alt="Imagen" />
      </div>
    </div>
  );
};

// Estilo para el contenido principal
const mainContentStyle = {
  padding: "100px",
  // Agrega más estilos según sea necesario
};

const contentStyle = {
  display: "flex",
  justifyContent: "flex-end", // Alinea el contenido a la derecha
  padding: "20px", // Añade un poco de espacio alrededor del contenido
};
export { Home };
