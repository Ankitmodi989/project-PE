import React from 'react'
import { useState } from 'react';


const Home = () => {
      const[cart,setCard] = useState([]);
    const[total,setTotal] = useState(0);
  return (
     <div className="app">
      
      {
        cart.map((product, index) => {
          return <div key={index}  >
            <img src={product.Image} alt="" height={200} width={200} />
            <h4>{product.name}</h4>
            <p>{product.price}</p>
            <button onClick={() => removeFromCard(index, product.price)}> Remove Item from Card</button>
          </div>
        })
      }
    </div>
  )
}

export default Home