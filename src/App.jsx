// import React from 'react'

import { useState } from "react"
import ProductList from "./component/ProductList";
import Header from "./component/Header";
import UseEffect from "./component/UseEffect";
import Counter from "./component/Counter";

// import Counter from "./component/Counter"
// import EventToDo from "./component/EventToDo"
// import Search from "./component/Search"

// import Wrapper from './component/Wrapper'
export default function App ()  {
  // const user = [
  //   {name: "Virat Kohli",
  //   country: "India",
  //   role: "Batman"
  //   },
  //    {name: "Dhoni",
  //   country: "India",
  //   role: "Wk-Batman"
  //   },
  //    {name: "hardik Pandya",
  //   country: "India",
  //   role: "Boller"
  //   },
  // ]
  const[cart,setCard] = useState([]);
  const[total,setTotal] = useState(0);

  const products = [
    {id:1,
      name:"Charger",
      price:5000,
      Image:"https://m.media-amazon.com/images/I/611crhyZZhL._AC_.jpg"
    },{
      id:2,
      name:"Laptop",
      price:10000,
      Image:"https://helios-i.mashable.com/imagery/articles/05djrP5PjtVB7CcMtvrTOAP/images-1.fill.size_2000x1125.v1723100793.jpg"
    },{
      id:3,
      name:"Mobile",
      price:1100100,
      Image:"https://cdn.beebom.com/mobile/vivo-t4x-5g-front-and-back-7.png"
    }
  ]

  function addToCard(product,price){
      setCard([...cart,product]);
      setTotal(()=>total+price);
  }

  function removeFromCard(index,price){
      const updatecart = cart.filter((_,i)=>i!=index);
      setCard(updatecart);
      setTotal(()=>total-price);
  }

  
  return (
    <div className="app">
      <Header cart={cart} total={total} products={products}></Header>
      <ProductList products = {products} addToCard={addToCard} ></ProductList>
      {
        cart.map((product,index)=>{
          return <div key={index}  >
            <img src={product.Image} alt="" height={200} width={200} />
            <h4>{product.name}</h4>
            <p>{product.price}</p>
            <button onClick={()=>removeFromCard(index,product.price)}> Remove Item from Card</button>
          </div>
        })
      }
      {/* <EventToDo></EventToDo>
      <Counter></Counter> */}
      {/* <Wrapper user = {user}></Wrapper> */}
      {/* <UseEffect></UseEffect> */}
      
    </div>
  )
}
