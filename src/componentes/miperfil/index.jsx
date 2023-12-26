import React, { useEffect, useState } from "react";
import { getUsers } from "../../Services/users";

const containerStyle = {
  display: "flex",
  justifyContent: "space-around",
  marginTop: "20px",
  flexWrap: "wrap",
};
const cardStyle = {
  border: "3px solid #000",
  borderRadius: "8px",
  padding: "10px",
  margin: "10px",
  width: "200px",
};

const imageStyle = {
  width: "100%",
  height: "auto",
  marginBottom: "10px",
  borderRadius: "8px",
};

const MiPerfil = () => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    getUsers({ userId: 3 })
      .then((res) => {
        setProfile(res);
      })
      .catch((e) => {
        new Error(e);
        console.log(e.response);
      });
  }, []);

  const { id, email, password, name, role, avatar } = profile;

  return (
    <div style={containerStyle}>
      <div style={cardStyle} key={id}>
        <h1>Informacion de perfil</h1>
        <img src={avatar} alt="imagenUser" style={imageStyle} />
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <p>Nombre: {name}</p>
        <p>Rol: {role}</p>
      </div>
    </div>
  );
};

export { MiPerfil };
