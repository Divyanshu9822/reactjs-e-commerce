import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'

const Cart = () => {
    const cart = useSelector((state) => state.cartProducts.cart);
    return (
        <div>
            {
                cart.length === 0 ? (<h3 className='text-center m-5 p-5'>Your Cart is empty</h3>) : (
                    <div className="container my-5 px-5">
                        <div className="row">
                            <div className="col-md-8">
                                {
                                    cart.map((product) => {
                                        return <CartItem product={product} key={product.id} />
                                    })
                                }
                            </div>
                            <div className="col-md-12 col-lg-4 col-11 mx-auto mt-lg-0 mt-md-5">
                                <div className="p-3 border rounded">
                                    <h2 className="mb-5">Total Amount</h2>
                                    <div className="d-flex justify-content-between">
                                        <p>Product amount</p>
                                        <p>$<span id="product_total_amt">0.00</span></p>
                                    </div>
                                    <div className="price_indiv d-flex justify-content-between">
                                        <p>Shipping Charge</p>
                                        <p>$<span Sid="shipping_charge">50.0</span></p>
                                    </div>
                                    <hr />
                                    <button className="btn btn-primary text-uppercase">Checkout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Cart;