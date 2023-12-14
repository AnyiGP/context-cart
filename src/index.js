import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ContextFilter } from "./FContext/ContextFilter";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Cart } from "./Pages/Cart";
import { Product } from "./Pages/Product";
import { Store } from "./Pages/Store";
import "bootstrap/dist/css/bootstrap.min.css";
import { Layout } from "./components/layout/Layout";
import { NavBar } from "./components/layout/NavBar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextFilter>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<App />}/>
             <Route path="store" element={<Store />}/>
              
            <Route path="cart" element={<Cart />}/>
              
            <Route path="product" element={<Product />}/>
              
            <Route path="*" element={<div>Error 404 - not found</div>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ContextFilter>
  </React.StrictMode>
);
