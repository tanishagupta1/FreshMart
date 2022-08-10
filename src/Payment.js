import React from 'react'
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider'


function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <div className='payment'>
            <div className="payment__container">

                <h1>Checkout(
                    <Link to='/checkout'>{basket?.length} items</Link>
                    )</h1>

                {/* delivery-address */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h1>Delivery Address</h1>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 tilak nagar</p>
                        <p>Indore, M.P</p>
                    </div>
                </div>

                {/* review items */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h1>Review Items and delivery</h1>
                    </div>
                    <div className="payment__items">
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
                {/* payment method */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        {/* Stripe */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment