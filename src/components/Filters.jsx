import React, { useContext, useState } from "react";
import { FilterContext } from "../FContext/ContextFilter";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import "./filters.css";

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
      <Container>
        <Row className="myFilters">
          <Col>
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
          </Col>
        </Row>
        <Row className="myFilters">
        
            <Form.Select name="" id="category" onChange={(e) => handleCategory(e)}>
            <option>Categoria</option>
              <option value="all">Todos</option>
              <option value="Pegamentos">Pegamentos</option>
              <option value="Obras en general">Obras en general</option>
              <option value="Pinturas y complementos">
                Pinturas y complementos
              </option>
              <option value="Complemento para obras Húmedas">
                Complemento para obras Húmedas
              </option>
              <option value="Cubiertas y aislaciones">
                Cubiertas y aislaciones
              </option>
            </Form.Select>
          
        </Row>
      </Container>
    </>
  );
};
