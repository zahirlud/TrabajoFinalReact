import React from "react";

const NoMatch = () => {
  return <div style={errorStyle}>ERROR 404</div>;
};

// Estilos para centrar y agrandar el texto
const errorStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh", // Ajusta la altura según tus necesidades
  fontSize: "3rem", // Ajusta el tamaño del texto según tus necesidades
};

export { NoMatch };
