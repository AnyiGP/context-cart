import React from 'react'


export const Products = ({ products }) => {
    return (
    
    <ul>
        {products.map(product => {
            return(
                <li key={product.id}>
                   <h2>{product.name}</h2>
                   <h2>{product.category}</h2>
                   <h2>{product.price}</h2>
                   <h2>{product.description}</h2>

                </li>
            )
        })}
    </ul>
    )
}
