import React, { useContext, useState } from "react";
import { FilterContext } from "../FContext/ContextFilter";
import { Button, Form } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

export const Filters = () => {
 
  const { setFilters } = useContext(FilterContext);
  // ojo,
  const [minPrice, setMinPrice] = useState();
  

  const handleMinPrice = (e) => {
    setMinPrice(e.target.value);
    setFilters((prevState) => ({ ...prevState, minPrice: e.target.value }));
    //setMinPrice()
  };

  const handleCategory = (e) => {
    setFilters((prevState) => ({ ...prevState, category: e.target.value }));
  };

  //filtrar categorias disponibles e imrpimirlas en un select
 

  return (
    <>
      
      <div>
        <label htmlFor="price">Precio</label>
        <input
          type="range"
          name=""
          id="price"
          min={0}
          max={100}
          onChange={(e) => handleMinPrice(e)}
        />
        <span>{minPrice}</span>
      </div>
      <div>
        <label htmlFor="category">Categoria</label>
        <select name="" id="category" onChange={(e) => handleCategory(e)}>
          <option value="all">Todos</option>
          <option value="Pegamentos">Pegamentos</option>
          <option value="Obras en general">Obras en general</option>
          <option value="Pinturas y complementos">
            Pinturas y complementos
          </option>
          <option value="Complemeno para obras Húmedas">
            Complemeno para obras Húmedas
          </option>
          <option value="Cubiertas y aislaciones">
            Cubiertas y aislaciones
          </option>
        </select>
      </div>
    </>
  );
};
