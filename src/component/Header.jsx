import React from 'react'
import Footer from './Footer'
import './Header.css'
import Form from './Form'


const Header = (props) => {
  const arr = [2024,2045,2026];
  return (
    <>
    <div className='Header'>
    <a href="">Home</a>
    <a href="">Contact</a>
    <a href="">New web</a>
    </div>
    <h1>{props.title}</h1>
    <Form></Form>
    <Footer arr={arr}></Footer>
    </>
  )
}

export default Header   