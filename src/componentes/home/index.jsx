import React from "react";

const Home = () => {
  const imageUrl =
    "https://lagamablanca.es/modules/posslideshows/images/35be1fef58aed2a66dc6950b55337e01ab176742_01.png";
  return (
    <div style={contentStyle}>
      <div style={mainContentStyle}></div>
      <img style={imageStyle} src={imageUrl} alt="Imagen" />
    </div>
  );
};

const mainContentStyle = {
  padding: "50px",
};

const contentStyle = {
  display: "flex",
  justifyContent: "flex-end",
};

const imageStyle = {
  width: "100%",
  height: "auto",
  objectFit: "cover",
  objectPosition: "left bottom",
};
export { Home };
