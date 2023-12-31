import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink, Outlet } from "react-router-dom";
import "./nav.css"

export const NavBar = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link>
                <NavLink to="/store">Tienda</NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/cart">Carrito</NavLink>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <section>
        <Outlet />
      </section> */}

      {/* <nav>
        <Link to="/store">Store</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/product">Product</Link>
      </nav> */}
    </>
  );
};
