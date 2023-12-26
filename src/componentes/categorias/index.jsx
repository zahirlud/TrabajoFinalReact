import React, { useState, useEffect } from "react";
import { getCategories } from "../../Services/categories";
import { CategoryCard } from "./CategoryCard";

const containerStyle = {
  display: "flex",
  justifyContent: "space-around",
  marginTop: "20px",
  flexWrap: "wrap",
};

const headingStyle = {
  fontSize: "2em",
  fontWeight: "bold",
  marginBottom: "20px",
  marginLeft: "20px",
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
    return <p>Cargando categorías...</p>;
  }
  if (!categories) {
    return <div>Cargando datos...</div>;
  }

  if (error) {
    return <div>Error cargando datos</div>;
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
