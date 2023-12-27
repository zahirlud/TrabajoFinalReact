import React, { useState, useEffect } from "react";
import { getCategories } from "../../Services/categories";
import { CategoryCard } from "./CategoryCard";

const settingStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  fontSize: "2em",
};

const containerStyle = {
  display: "flex",
  justifyContent: "space-around",
  marginTop: "20px",
  flexWrap: "wrap",
  marginLeft: "200px",
  marginRight: "200px",
};

const headingStyle = {
  fontSize: "2em",
  fontWeight: "bold",
  marginBottom: "20px",
  marginLeft: "250px",
};
const Categorias = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getCategories()
      .then((res) => {
        setCategories(res);
        setLoading(false);
        console.log(res);
      })
      .catch((e) => {
        setError(e);
        console.log(e.response);
      });
  }, []);

  if (loading) {
    return <div style={settingStyle}>Cargando categorías...</div>;
  }
  if (!categories) {
    return <div style={settingStyle}>Cargando datos...</div>;
  }

  if (error) {
    return <div style={settingStyle}>Error cargando datos</div>;
  }

  return (
    <>
      <div>
        <h2 style={headingStyle}>Categorías</h2>
      </div>
      <div style={containerStyle}>
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            name={category.name}
            image={category.image}
          />
        ))}
      </div>
    </>
  );
};

export { Categorias };
