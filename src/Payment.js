import React from 'react';
import './Payment.css';
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct';

function Payment() {

  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="payment">
      <div className="payment__container">
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment_address">
            <p>{user?.email}</p>
            <p>New Road 23</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and deliver</h3>
          </div>
          <div className="payment__item">
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
        <div className="payment__section">

        </div>
      </div>
    </div>
  )
}

export default Payment