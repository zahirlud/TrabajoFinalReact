import React from "react";
import { Header } from "../header";
import { Footer } from "../footer";
import { Navbar } from "../navbar";

const containerStyle = {
  backgroundColor: "#e0e0e0", // Puedes ajustar el color gris según tus preferencias
  // minHeight: "100vh", // Esto garantiza que el fondo cubra al menos el 100% de la altura de la ventana
  // padding: "20px", // Ajusta el relleno según sea necesario
};

const Layout = ({ children }) => {
  return (
    <div style={containerStyle}>
      <Header />
      <Navbar />
      <>{children}</>
      {/* <Footer /> */}
    </div>
  );
};

export { Layout };
