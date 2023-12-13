import React from "react";
import { Btn } from "./commons/Btn";

export const Products = ({ products }) => {
  return (
    <ul>
      {products.map((product) => {
        return (
          <li key={product.id}>
            <img src={product.img} alt={product.name} />
            <div>
              <h2>{product.name}</h2>
            </div>
            <div>
              <Btn />
            </div>
          </li>
        );
      })}
    </ul>
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
