import React from 'react'
import './Checkout.css';
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS5BL-4uOu54AsSUMbL18odm9dzUVzuj9scBA&usqp=CAU" alt="checkout ad" />
        <div>
          <h2 className="checkout__title">Your shopping Basket</h2>
          {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              ratings={item.ratings}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout
