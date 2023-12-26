import React, { useState } from "react";
import { register } from "../../Services/authentication";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    password: "",
    avatar: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, email, password, avatar } = formData;
    register({ name: firstName, email, password, avatar }).then((res) => {
      navigate("/login");
    });
  };

  return (
    <>
      <div style={formContainerStyle}>
        <form style={formStyle} onSubmit={handleSubmit}>
          <h1>
            <strong>Formulario de registro</strong>
          </h1>
          <label>
            Nombre y Apellido:
            <input
              style={inputStyle}
              type="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </label>
          <br />

          <label>
            Email:
            <input
              style={inputStyle}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <br />

          <label>
            Password:
            <input
              style={inputStyle}
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </label>
          <br />

          <label>
            Avatar:
            <input
              style={inputStyle}
              type="avatar"
              name="avatar"
              value={formData.avatar}
              onChange={handleChange}
            />
          </label>
          <br />

          <button type="submit">REGISTRARSE</button>
        </form>
      </div>
    </>
  );
};

// Estilos para el contenedor del formulario
const formContainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh", // Ajusta la altura según tus necesidades
  overflowY: "auto", // Habilita el desplazamiento vertical
  padding: "20px", // Agregado un relleno al contenedor
};

// Estilos para el formulario
const formStyle = {
  border: "1px solid #ccc",
  padding: "20px",
  borderRadius: "8px",
};
// Estilos para los campos de entrada (inputs)
const inputStyle = {
  display: "block",
  width: "100%",
  padding: "8px",
  margin: "8px 0",
  boxSizing: "border-box",
};

export { Register };
