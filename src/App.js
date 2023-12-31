import { useState } from "react";
import "./App.css";
import { products } from "./Data/data";
import { Card } from "./components/Card";
import { Header } from "./components/layout/Header";
import { useContext } from "react";
import { FilterContext } from "./FContext/ContextFilter";
import { Layout } from "./components/layout/Layout";

function App() {
  const { filters } = useContext(FilterContext);

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === "all" || product.category === filters.category)
      ); //devuelve true para los productos que pasen las condiciones
    });
  };

  const filteredProduct = filterProducts(products);

  return (
    <>
      <div className="App">
        
          <Card products={filteredProduct} />
        
      </div>
    </>
  );
}

export default App;
