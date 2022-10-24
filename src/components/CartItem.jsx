import React from 'react';
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/actions/AppActions';
import { incrementItemCount, decrementItemCount } from '../redux/actions/AppActions';

const CartItem = (props) => {

    const dispatch = useDispatch();

    return (

        <div className="row border rounded mb-3">
            <div className="col-md-5 col-11 mx-auto  d-flex justify-content-center align-items-center">
                <Link className="nav-link" to={`/product/${props.product.id}`}>
                    <img className='p-3' src={props.product.image} height="150px" />
                </Link>
            </div>

            <div className="col-md-7 col-11 mx-auto py-3">
                <div className="row">
                    <div className="col-6 card-title">
                        <p className="mb-2 text-muted">Category : {props.product.category}</p>
                        <h3 className="mb-2">{props.product.title.substring(0, 12)}...</h3>
                    </div>
                    <div className="col-6">
                        <ul className="pagination justify-content-end">
                            <li className="page-item">
                                <button className='btn btn-outline-dark' onClick={() => dispatch(decrementItemCount(props.product))}><i className="fa-solid fa-minus "></i></button>
                            </li>
                            <li className="page-item">
                                <button disabled="disabled" className='btn btn-light'>{props.product.quantity}</button>

                            </li>
                            <li className="page-item">
                                <button className='btn btn-outline-dark' onClick={() => dispatch(incrementItemCount(props.product))}><i className="fa-solid fa-plus "></i></button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8 d-flex justify-content-between">
                        <p className='card-text lead fw-bold'>$<span>{props.product.price}</span></p>
                    </div>
                    <div className="col-4 d-flex justify-content-end">
                        <button className='btn btn-outline-danger' onClick={() => dispatch(removeFromCart(props.product))}><i className="fa-solid fa-trash"></i></button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CartItem;