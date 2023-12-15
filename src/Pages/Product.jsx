import React from 'react'
import { useParams } from 'react-router-dom'
import { getProduct } from '../Data/data'

export const Product = () => {
  const params = useParams()
  const product = getProduct(parseInt(params.productId))
  return (
    <>
    <div>Product details</div>
    <div>{product.name}</div>
    
    </>
  )
}
