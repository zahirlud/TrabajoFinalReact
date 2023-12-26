import React, { useState } from "react";
import { login } from "../../Services/authentication";
import { useAuth } from "../../context/AuthContext";
import { redirect, useNavigate } from "react-router-dom";

const Login = () => {
  const { handleLogin } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
    const { email, password } = formData;
    login({ email, password }).then((res) => {
      const { access_token, refresh_token } = res;

      handleLogin({ access_token, refresh_token });
      navigate("/");
    });
  };

  return (
    <>
      <div style={formContainerStyle}>
        <form style={formStyle} onSubmit={handleSubmit}>
          <h1>
            <strong>Login</strong>
          </h1>
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

          <button type="submit">INICIAR SESION</button>
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

export { Login };
