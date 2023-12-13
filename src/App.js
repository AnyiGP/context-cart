import { useState } from 'react';
import './App.css';
import { products } from './Data/data';
import { Products } from './components/Products';
import { Header } from './components/layout/Header';
import { useContext } from 'react';
import { FilterContext } from './FContext/ContextFilter';
import { Layout } from './components/layout/Layout';

function App() {

  const {filters} = useContext(FilterContext)

const filterProducts = (products) => {
  return products.filter(product => {
    return(
      product.price >= filters.minPrice &&
      (
        filters.category === "all" || 
        product.category === filters.category
      )
    ) //devuelve true para los productos que pasen las condiciones
  }) 
}

const filteredProduct = filterProducts(products)

  return (
    <div className="App">
      <header className="App-header">
        {/* <Products products={products}/> */}
        {/* <Header /> */}
        <Layout />
        <Products products={filteredProduct}/>

      </header>
    </div>
  );
}

export default App;
