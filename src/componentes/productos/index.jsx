import React, { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";
import { getProducts } from "../../Services/products";

const containerStyle = {
  display: "flex",
  justifyContent: "space-around", // Distribuye las tarjetas en todo el ancho de la página
  marginTop: "20px", // Margen superior para separarlas del borde superior
  flexWrap: "wrap",
};

const Productos = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((res) => {
        setProducts(res);
      })
      .catch((e) => {
        new Error(e);
        console.log(e.response);
      });
  }, []);
  return (
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
  );
};

export { Productos };
