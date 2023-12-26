import React from "react";
import { AuthProvider } from "./context/AuthContext";
import { Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CarritoContext";

import { Home } from "./componentes/home";
import { Login } from "./componentes/login";
import { Register } from "./componentes/register";
import { About } from "./componentes/about";
import { Cart } from "./componentes/carrito";
import { Sucursales } from "./componentes/sucursales";
import { Helper } from "./componentes/ayuda";
import { Productos } from "./componentes/productos";
import { Layout } from "./componentes/layout";
import { NoMatch } from "./componentes/nomath";
import { Categorias } from "./componentes/categorias";
import { MiPerfil } from "./componentes/miperfil";

function App() {
  return (
    <CartProvider>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="productos" element={<Productos />} />
            <Route path="ayuda" element={<Helper />} />
            <Route path="sucursales" element={<Sucursales />} />
            <Route path="carrito" element={<Cart />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NoMatch />} />
            <Route path="categorias" element={<Categorias />} />
            <Route path="miperfil" element={<MiPerfil />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </CartProvider>
  );
}

export default App;
