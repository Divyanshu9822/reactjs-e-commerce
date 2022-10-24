import React from 'react'
import { Link } from 'react-router-dom';
import Rating from './Rating';

const Product = (props) => {

    return (
        <div className="col">
            <Link className="nav-link" to={`/product/${props.product.id}`}>
                <div className="card h-100 text-center p-3">
                    <img className="card-img-top px-4 py-2" src={props.product.image} alt="..." height="150px" />
                    <div className="card-body border-top">
                        <div className="text-center">
                            <h5 className="cart-title mb-2" >{props.product.title.substring(0, 12)}...</h5>

                            <h5 className='fw-bold'>${props.product.price}</h5>
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