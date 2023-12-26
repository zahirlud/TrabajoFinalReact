import React, { useState, useEffect } from "react";
import { getCategories } from "../../Services/categories";
import { CategoryCard } from "./CategoryCard";

const Categorias = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCategories()
      .then((res) => {
        setCategories(res);
        console.log(res);
      })
      .catch((e) => {
        setError(e);
        console.log(e.response);
      });
  }, []);

  if (!categories) {
    return <div>Cargando datos...</div>;
  }

  if (error) {
    return <div>Error cargando datos</div>;
  }

  return (
    <div>
      {categories.map((category) => (
        <CategoryCard
          key={category.id}
          name={category.name}
          image={category.image}
        />
      ))}
    </div>
  );
};

export { Categorias };
