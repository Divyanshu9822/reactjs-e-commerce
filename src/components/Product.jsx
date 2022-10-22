import React from 'react'
import { Link } from 'react-router-dom';
import Rating from './Rating';

const Product = (props) => {

    return (
        <div className="col">
            <Link className="nav-link" to={`/product/${props.product.id}`}>
                <div className="card h-100 text-center p-3">
                    <img className="card-img-top p-2" src={props.product.image} alt="..." height="200px" />
                    <div className="card-body">
                        <div className="text-center">
                            <h5 className="cart-title mb-0">{props.product.title.substring(0, 12)}...</h5>
                            <div className="d-flex justify-content-center small text-warning mb-2">
                                <div className="mt-1">
                                    <Rating product={props.product}/>
                                    &nbsp;
                                    <span className='text-dark'>{props.product.rating.count} reviews</span>
                                </div>
                            </div>
                            <p className='card-text lead fw-bold'>${props.product.price}</p>
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="btn btn-outline-dark mt-auto">View</div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Product