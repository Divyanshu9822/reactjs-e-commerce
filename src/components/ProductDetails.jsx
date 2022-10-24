import React from 'react'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectedProduct, removeSelectedProduct, addToCart } from '../redux/actions/AppActions'
import Loading from './Loading';
import Rating from './Rating';

const ProductDetails = () => {
    const [isLoading, setIsLoading] = useState(false);
    const product = useSelector((state) => state.product);
    const { productId } = useParams();
    const dispatch = useDispatch();
    const fetchProduct = async () => {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const data = await response.json();
        setIsLoading(true);
        dispatch(selectedProduct(data));
    }
    useEffect(() => {
        fetchProduct();
        return () => {
            dispatch(removeSelectedProduct());
        }
    }, [productId]);

    return (
        <div>
            {isLoading ? (
                <div className="container my-5">
                    <div className="card" >
                        <div className="row g-0">
                            <div className="col-md-6 my-auto ">
                                <div className="d-flex justify-content-center">
                                    <div className='py-5 px-2'>
                                        <img src={product.image} alt='...' width="300px" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 border-start m-auto p-3">
                                <div className="p-3 right-side">
                                    <div className="d-flex justify-content-between align-items-center my-2">
                                        <h2>{product.title}</h2>
                                    </div>
                                    <p className="text-muted">Category : {product.category}</p>
                                    <div className="mt-2 pr-3 content">
                                        <p>{product.description}</p>
                                    </div>
                                    <h3>${product.price}</h3>
                                    < div className="d-flex justify-content-start small text-warning mb-3" >
                                        <h6 className="mt-1">
                                            <Rating product={product}/>
                                            <div className='text-dark'>{product.rating.count} reviews</div>
                                        </h6>
                                    </div >
                                    <div className="buttons d-flex flex-row mb-2 gap-2">
                                        <button className="btn btn-warning">Buy Now</button>
                                        <button className="btn btn-warning" onClick={() => { dispatch(addToCart(product)) }}><i className="fa-solid fa-cart-shopping"></i> Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : <Loading />}
        </div>
    )
}

export default ProductDetails;
