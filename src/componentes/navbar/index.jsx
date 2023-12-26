import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav style={navbarStyle}>
      <div style={leftSection}>
        <span>Seguinos en</span>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://thumbs.dreamstime.com/z/logotipo-de-instagram-blanco-y-negro-cuadrado-en-con-archivo-ai-vectorial-f%C3%A1cil-editar-fondo-alta-resoluci%C3%B3n-192780656.jpg"
            alt="instagram_image"
            style={imageStyle}
          />
        </a>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://thumbs.dreamstime.com/z/icono-del-logotipo-de-facebook-en-blanco-y-negro-alta-resoluci%C3%B3n-con-fondo-archivo-pasos-vectoriales-disponible-para-descarga-175771686.jpg"
            alt="facebook_image"
            style={imageStyle}
          />
        </a>
        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://thumbs.dreamstime.com/z/icono-del-logotipo-de-youtube-en-blanco-y-negro-alta-resoluci%C3%B3n-archivo-pasos-vectoriales-tambi%C3%A9n-disponible-para-descargas-175792602.jpg"
            alt="youtube_image"
            style={imageStyle}
          />
        </a>
      </div>
      <div style={rightSection}>
        <span>
          <Link to="/sucursales" style={linkStyle}>
            Sucursales
          </Link>
        </span>
        <span>
          <Link to="/ayuda" style={linkStyle}>
            Centro de ayuda
          </Link>
        </span>
      </div>
    </nav>
  );
};

const navbarStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0.5rem",
  background: "#333",
  color: "#fff",
  height: "2rem",
};

const leftSection = {
  marginRight: "auto",
};

const rightSection = {
  display: "flex",
  gap: "20px",
};

const linkStyle = {
  textDecoration: "none",
  color: "#fff",
};

const imageStyle = {
  width: "auto",
  height: "1.5rem",
  marginLeft: "10px",
  borderRadius: "50%",
  borderBottomLeftRadius: "120%",
  borderBottomRightRadius: "120%",
  borderTopRightRadius: "120%",
  borderTopLeftRadius: "120%",
};

export { Navbar };
