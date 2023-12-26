import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const SearchBar = ({ isLogged }) => {
  return <div>{isLogged && <strong>¡Bienvenido!</strong>}</div>;
};

const Header = () => {
  const { tokens, handleSignOut } = useAuth();
  const navigate = useNavigate();

  const handleLogOut = (e) => {
    e.preventDefault();
    handleSignOut();
    navigate("/");
  };

  const isLogged = tokens.access_token && tokens.refresh_token;
  return (
    <header style={headerStyle}>
      <div style={leftSection}>
        <Link to="/" style={linkStyle}>
          E-commerce
        </Link>
        <Link to="/categorias" style={linkStyle}>
          Categorias
        </Link>
        <Link to="/productos" style={linkStyle}>
          Todos los Productos
        </Link>
        <Link to="/about" style={linkStyle}>
          Acerca de
        </Link>
      </div>
      <SearchBar isLogged={isLogged} />
      <div style={rightSection}>
        <Link to="/carrito" style={linkStyle}>
          Mi carrito
        </Link>
        {!isLogged ? (
          <>
            <Link to="/login" style={linkStyle}>
              Login
            </Link>
            <Link to="/register" style={linkStyle}>
              Registro
            </Link>
          </>
        ) : (
          <>
            <Link to="/miperfil" style={linkStyle}>
              Mi Perfil
            </Link>
            <button onClick={handleLogOut}>Cerrar Sesión</button>
          </>
        )}
      </div>
    </header>
  );
};

// Estilos para el header y sus secciones
const headerStyle = {
  display: "flex", // Hace que los elementos hijos se coloquen en una fila (horizontal) debido al modelo de diseño flexible.
  justifyContent: "space-between", // Distribuye el espacio disponible entre los elementos hijos, colocando el máximo espacio posible entre ellos.
  alignItems: "center", // Centra verticalmente los elementos hijos.
  padding: "1rem", // Agrega un relleno de 1 rem alrededor del contenido del header.
  background: "#000", // Fondo negro
  color: "#fff", // Texto blanco
  height: "2rem", //Puedes ajustar la altura según tus necesidades de arriba-abajo
  //width: '100%', // Asegura que el ancho del header sea del 100%
};

const leftSection = {
  marginRight: "auto", // Empuja el elemento hacia la derecha tanto como sea posible.
  display: "flex", // Hace que los elementos hijos dentro de leftSection se coloquen en una fila.
  gap: "20px", // Agrega un espacio de 20 píxeles entre los elementos hijos.
};

const rightSection = {
  marginLeft: "auto", // Empuja el elemento hacia la izquierda tanto como sea posible.
  display: "flex", // Hace que los elementos hijos dentro de rightSection se coloquen en una fila.
  gap: "20px", // Agrega un espacio de 20 píxeles entre los elementos hijos.
};

const linkStyle = {
  textDecoration: "none", //  Elimina la decoración de subrayado de los enlaces.
  color: "#fff", //Establece el color del texto en blanco.
};

// estilos del SearchBar
const searchBarStyle = {
  display: "flex",
  alignItems: "center", // Centra los elementos verticalmente
  backgroundColor: "#333",
  borderRadius: "4px",
  padding: "8px",
  height: "1rem",
};
// Estilo del input del SearchBar
const inputStyle = {
  border: "none",
  outline: "none",
  backgroundColor: "#333",
  color: "#fff",
  marginLeft: "8px",
};

const buttonStyle = {
  cursor: "pointer",
  backgroundColor: "#555",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  padding: "8px",
  height: "2rem",
};

export { Header };
