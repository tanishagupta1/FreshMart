import React, { useEffect, useState } from 'react'
import CheckoutProduct from './CheckoutProduct'
import './Payment.css'
import { Link, useNavigate } from 'react-router-dom'
import { useStateValue } from './StateProvider'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from './reducer'
import axios from './axios'

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();

    const navigate = useNavigate();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [succeeded, setSucceded] = useState(false);
    const [processing, setProcesssing] = useState("");
    const [clientSecret, setClientSecret] = useState(true);

    //every time the order total changes, the client secret key will also change
    useEffect(() => {
        //generate the special stripe secret for the client which helps us to charge the customer

        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                //stripe accepts the total in the currencies subunits
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret);
        }

        getClientSecret();
    }, [basket])

    const handleSubmit = async (event) => {
        //stripe stuff
        event.preventDefault();
        //prevent user to click on the buy now button multiple times
        setProcesssing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            //paymentIntent  = payment Confirmation

            setSucceded(true);
            setError(null);
            setProcesssing(false);
            navigate("../orders", { replace: true })
        })

    }

    const handleChange = event => {
        //to be able to check the state as in disabled or not and processing and not processing
        // Listen for changes in the CardElement and display any errors as the customer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : " ");



    }


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

                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />

                            <div className='payment__priceContainer'>
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <>
                                            <h3>Order Total: {value}</h3>
                                        </>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"₹"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>

                            {/* Errors */}
                            {error && <div>{error}</div>}
                        </form>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Payment