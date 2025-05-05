import React from 'react'

export const ProductInfo = () => {
  var product = {
    name: "Laptop",
    price: 1200,
    availability: "In Stock"
  };
  return (
    <div>{product.name}  {product.price}  {product.availability}</div>
  )
}

export default ProductInfo