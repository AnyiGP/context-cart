import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ContextFilter } from "./FContext/ContextFilter";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Cart } from "./Pages/Cart";
import { Product } from "./Pages/Product";
import { Store } from "./Pages/Store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextFilter>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Store />}>Store</Route>
          <Route path="/store" element={<App />}>App</Route>
          <Route path="/cart" element={<Cart />}>Cart</Route>
          <Route path="/product" element={<Product />}>Product</Route>
        </Routes>
      </BrowserRouter>
    </ContextFilter>
  </React.StrictMode>
);
