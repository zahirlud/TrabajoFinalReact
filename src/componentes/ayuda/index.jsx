import React, { useState } from "react";
import { Link } from "react-router-dom";

const Helper = () => {
  const [isFormSubmitted, setFormSubmitted] = useState(false);

  const [formhelp, setFormHelp] = useState({
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    telefono: "",
    consulta: "",
    compra: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormHelp((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    console.log("Datos del formulario:", formData);
  };

  return (
    <>
      {!isFormSubmitted ? (
        <div style={formContainerStyle}>
          <form style={formStyle} onSubmit={handleSubmit}>
            <h1>
              <strong>Contactanos</strong>
            </h1>
            <label>
              Nombre:
              <input
                style={inputStyle}
                type="firstName"
                name="firstName"
                value={formhelp.firstName}
                onChange={handleChange}
              />
            </label>
            <br />

            <label>
              Apellido:
              <input
                style={inputStyle}
                type="lastName"
                name="lastName"
                value={formhelp.lastName}
                onChange={handleChange}
              />
            </label>
            <br />

            <label>
              Direccion:
              <input
                style={inputStyle}
                type="address"
                name="address"
                value={formhelp.address}
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
                value={formhelp.email}
                onChange={handleChange}
              />
            </label>
            <br />

            <label>
              Telefono:
              <input
                style={inputStyle}
                type="telefono"
                name="telefono"
                value={formhelp.telefono}
                onChange={handleChange}
              />
            </label>
            <br />

            <label>
              Consulta:
              <input
                style={{ ...inputStyle, height: "80px" }}
                type="consulta"
                name="consulta"
                value={formhelp.consulta}
                onChange={handleChange}
              />
            </label>
            <br />

            <label>
              N° de compra:
              <input
                style={inputStyle}
                type="n-compra"
                name="compra"
                value={formhelp.compra}
                onChange={handleChange}
              />
            </label>
            <br />

            <button type="submit">ENVIAR CONSULTA</button>
          </form>
        </div>
      ) : (
        <>
          <div style={messageStyle}>
            Muchas gracias por rellenar los datos. Estaremos en contacto a la
            brevedad.
          </div>
          <div style={{ textAlign: "center" }}>
            <Link to="/">Volver</Link>
          </div>
        </>
      )}
    </>
  );
};

const messageStyle = {
  marginTop: "20px",
  color: "green",
  textAlign: "center",
  fontSize: "1.5em",
  fontWeight: "bold",
};

const formContainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  overflowY: "auto",
  padding: "20px",
};

const formStyle = {
  border: "1px solid #ccc",
  padding: "50px",
  borderRadius: "8px",
  marginBottom: "100px",
  marginTop: "400px",
  width: "60%",
  margin: "auto",
};

const inputStyle = {
  display: "block",
  width: "100%",
  padding: "8px",
  margin: "8px 0",
  boxSizing: "border-box",
};

export { Helper };
