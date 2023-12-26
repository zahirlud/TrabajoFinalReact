import React from "react";

const NoMatch = () => {
  return <div style={errorStyle}>ERROR 404</div>;
};

const errorStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  fontSize: "3rem",
};

export { NoMatch };
