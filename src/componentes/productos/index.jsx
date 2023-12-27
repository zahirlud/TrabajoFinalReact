import React, { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";
import { getProducts } from "../../Services/products";

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
  marginLeft: "20px",
  marginLeft: "250px",
};

const Productos = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getProducts()
      .then((res) => {
        setProducts(res);
        setLoading(false);
      })
      .catch((e) => {
        new Error(e);
        setError(e);
        console.log(e.response);
      });
  }, []);

  if (loading) {
    return <div style={settingStyle}>Cargando Productos...</div>;
  }
  if (!products) {
    return <div style={settingStyle}>Cargando datos...</div>;
  }

  if (error) {
    return <div style={settingStyle}>Error cargando datos</div>;
  }

  return (
    <>
      <div>
        <h2 style={headingStyle}>Productos</h2>
      </div>
      <div style={containerStyle}>
        {products.map((product) => (
          <ProductCard
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            category={product.category.name}
            images={product.images}
          />
        ))}
      </div>
    </>
  );
};

export { Productos };
