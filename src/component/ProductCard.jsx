import React from 'react'

const ProductCard = ({product,addToCard}) => {
  return (
    <div>
        <img src={product.Image} alt=""  height={200} width={200} />
        <h4>{product.name}</h4>
        <p>{product.price}</p>
        <button onClick={()=>addToCard(product,product.price)}>Add to Card</button>
    </div>
  )
}

export default ProductCard  