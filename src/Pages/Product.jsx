import React from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../Data/data";
import { Col, Container, Row } from "react-bootstrap";
import "./product.css"

export const Product = () => {
  const params = useParams();
  const product = getProduct(parseInt(params.productId));
  return (
    <>
      <Container>
        <Row>
          {" "}
          <h2 className="myTitle">Detalles del producto</h2>
        </Row>
        <Row>
          <Col>
            <div>
              <img src={product.img} alt={product.name} />
            </div>
          </Col>{" "}
          <Col>
            <h3>{product.name}</h3>
            <h6><strong>Descripción: </strong>{product.description}</h6>
            <h6><strong>Categoría: </strong>{product.category}</h6>
            <h5><strong>Precio: </strong>{"$" + product.price}</h5>
          </Col>
        </Row>
      </Container>
    </>
  );
};
