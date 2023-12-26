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
          Productos
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

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem",
  background: "#000",
  color: "#fff",
  height: "2rem",
};

const leftSection = {
  marginRight: "auto",
  display: "flex",
  gap: "20px",
};

const rightSection = {
  marginLeft: "auto",
  display: "flex",
  gap: "20px",
};

const linkStyle = {
  textDecoration: "none",
  color: "#fff",
};

const searchBarStyle = {
  display: "flex",
  alignItems: "center",
  backgroundColor: "#333",
  borderRadius: "4px",
  padding: "8px",
  height: "1rem",
};

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
