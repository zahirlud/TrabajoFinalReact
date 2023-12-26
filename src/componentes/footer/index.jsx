import React from "react";

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>&copy; 2015-2023 E-commerce S.A. Todos los derechos reservados.</p>
    </footer>
  );
};

const footerStyle = {
  position: "fixed",
  bottom: "0",
  left: "0",
  width: "100%",
  padding: "0rem",
  background: "#000",
  color: "#fff",
  textAlign: "center",
};

export { Footer };
