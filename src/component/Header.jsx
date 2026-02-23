import React from 'react'
import Footer from './Footer'
import './Header.css'
import Form from './Form'
import Search from './Search'


const Header = ({cart,total,products}) => {
  // const arr = [2024,2045,2026];
  return (
    <>
    {/* <Search products={products}></Search> */}
    <div className='Header'>
    {/* <a href="">Home</a>
    <a href="">Contact</a>
    <a href="">About</a> */}
    <h4 style={{color:"white", fontSize:"20px", marginRight:"20px"}}>Card-{cart.length}</h4>
     <h4 style={{color:"white", fontSize:"20px", marginRight:"20px"}}>Total Price-{total}</h4>
    </div>
    {/* <h1>{props.title}</h1>
    <Form></Form>
    <Footer arr={arr}></Footer> */}
    </>
  )
}

export default Header   