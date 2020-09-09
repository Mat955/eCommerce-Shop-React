import React from 'react'
import './Checkout.css';
import Subtotal from './Subtotal'

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS5BL-4uOu54AsSUMbL18odm9dzUVzuj9scBA&usqp=CAU" alt="" />
        <div>
          <h2 className="checkout__title">Your shopping Basket</h2>
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout
