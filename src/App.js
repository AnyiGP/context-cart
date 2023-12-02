import { useState } from 'react';
import './App.css';
import { products } from './Data/data';
import { Products } from './components/Products';
import { Header } from './components/Header';
import { useContext } from 'react';
import { FilterContext } from './FContext/ContextFilter';

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
    )
  }) 
}

const filteredProduct = filterProducts(products)

  return (
    <div className="App">
      <header className="App-header">
        {/* <Products products={products}/> */}
        <Header />
        <Products products={filteredProduct}/>

      </header>
    </div>
  );
}

export default App;
