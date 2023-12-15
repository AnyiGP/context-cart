import React from "react";
import { Btn } from "./commons/Btn";
import { Link, useSearchParams } from "react-router-dom";
import { Form } from "react-bootstrap";

export const Card = ({ products }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get("filter") ?? "";

  const handleSearchFilter = (e) => {
    setSearchParams({ filter: e.target.value });
  };
  return (
    <>
    
      <div>
        <Form className="d-flex">
          <Form.Control
            value={filter}
            onChange={handleSearchFilter}
            type="text"
            placeholder="search-filter"
            className="me-2"
            aria-label="Search"
          />
        </Form>
      </div>
      <ul>
        {products
          .filter((product) => {
            if (!filter) return true;
            const name = product.name.toLowerCase();
            return name.includes(filter.toLowerCase());
          })

          .map((product) => {
            return (
              <li key={product.id}>
                <img src={product.img} alt={product.name} />
                <div>
                  <h2>{product.name}</h2>
                </div>
                <div>
                  <Link to={"/product/" + product.id.toString()}>
                    <Btn />
                  </Link>
                </div>
              </li>
            );
          })}
      </ul>
    </>
  );
};

// return (
//     <li key={product.id}>
//       <img src={imgs.ALASKA} alt={product.name} />
//       <h2>{product.name}</h2>
//       <h2>{product.category}</h2>
//       <h2>{product.price}</h2>
//       <h2>{product.description}</h2>
//     </li>
//   );
