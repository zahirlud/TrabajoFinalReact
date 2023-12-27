import React, { useState } from "react";
import { login } from "../../Services/authentication";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const settingStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  fontSize: "2em",
};

const Login = () => {
  const { handleLogin } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
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
    setLoading(true);
    login({ email, password })
      .then((res) => {
        const { access_token, refresh_token } = res;

        handleLogin({ access_token, refresh_token });
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error en el inicio de sesión:", error);
        setLoading(false);
        setError("Usuario incorrecto. Intente nuevamente.");
      });
  };

  if (loading) {
    return <div style={settingStyle}>Iniciando sesión...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <div>Recomendación: iniciar sesión con usuario admin</div>
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

const formContainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
};

const formStyle = {
  border: "1px solid #ccc",
  padding: "20px",
  borderRadius: "8px",
};

const inputStyle = {
  display: "block",
  width: "100%",
  padding: "8px",
  margin: "8px 0",
  boxSizing: "border-box",
};

export { Login };
