import React, { useContext } from 'react'
import './cart.css'
import { StoreContext } from '../../storeContext'
const Cart = () => {
  const {name}=useContext(StoreContext);
  console.log(name)
  return (
    <div>cart</div>
  )
}

export default Cart