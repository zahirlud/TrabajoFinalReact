import React, { useState } from "react";
import { CarritoCard } from "./carritoCard";
import { useCart } from "../../context/CarritoContext";

const Cart = () => {
  const { cart } = useCart();
  console.log(cart);
  return (
    <div>
      <CarritoCard carrito={cart} />
    </div>
  );
};

export { Cart };
