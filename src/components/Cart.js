import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartContext } from './CartContext';
import CartWidget from './CartWidget';


const Cart = () => {

  return (
    <CartWidget></CartWidget>
  )
}

export default Cart
