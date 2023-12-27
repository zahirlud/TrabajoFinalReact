import React from "react";
const cardStyle = {
  border: "3px solid #000",
  borderRadius: "8px",
  padding: "10px",
  margin: "10px",
  width: "200px",
};

const botonAgregarStyle = {
  backgroundColor: "#ffA500",
  color: "#fff",
  padding: "10px 15px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontWeight: "bold",
};

const imageStyle = {
  width: "100%",
  height: "150px",
  marginBottom: "10px",
  borderRadius: "8px",
};

const CategoryCard = ({ key, name, image }) => {
  return (
    <div style={cardStyle} key={key}>
      <img src={image} alt="imagen1" style={imageStyle} />
      <p>{name}</p>
      <button style={botonAgregarStyle}>Ver productos</button>
    </div>
  );
};

export { CategoryCard };
