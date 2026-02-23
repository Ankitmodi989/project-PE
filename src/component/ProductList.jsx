import React from 'react'
import ProductCard from './ProductCard'
import { useState } from 'react'

const ProductList = ({products,addToCard}) => {

   const [search,setsearch]=useState("");
      // const name=["Charger", "Laptop", "Mobile"] 
   const student=products.filter((product)=>product.name.toLowerCase().includes(search.toLowerCase()));
  return (

    <div>
      <div>
            <h2>Demo to show Search</h2>
            <input type="text" placeholder='Enter key to search'
             value={search} 
             onChange={(e)=>setsearch(e.target.value)}/>

             <ul>
                {
          student.map((product)=>{
            return <ProductCard 
            key={product.id}
            product={product}
            addToCard={addToCard}
            ></ProductCard>
          })
        }
             </ul>
        </div>
        
    </div>
  )
}

export default ProductList  