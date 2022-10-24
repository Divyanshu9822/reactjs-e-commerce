import React from 'react'
import Product from './Product'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../redux/actions/AppActions';
import Loading from './Loading';

const ProductList = () => {
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    const fetchData = async () => {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json()
        dispatch(setProducts(data));
        setIsLoading(true);
    }
    useEffect(() => {
        fetchData();
    }, []);
    const selectCategory = async (category) => {
            const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
            const data = await response.json()
            dispatch(setProducts(data));
            setIsLoading(true);
        }
    
    const products = useSelector((state) => state.allProducts.products);
    
    return (
        <>
            {
                isLoading ? (
                    <>
                        <div className='d-flex justify-content-between border border-bottom px-1'>
                            <div className='p-3 text-warning'>
                                {products.length} results
                            </div>
                            <div className="dropdown my-auto mx-2">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Filter
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" role="button" onClick={() => fetchData()}>All</a>
                                    <a className="dropdown-item" role="button" onClick={() => selectCategory("men's clothing")}>Men's clothing</a>
                                    <a className="dropdown-item" role="button" onClick={() => selectCategory("women's clothing")}>Women's clothing</a>
                                    <a className="dropdown-item" role="button" onClick={() => selectCategory("electronics")}>Electronics</a>
                                    <a className="dropdown-item" role="button" onClick={() => selectCategory("jewelery")}>Jewellery</a>
                                </div>
                            </div>
                        </div>
                        <div className="container my-2">
                            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-2">
                                {
                                    products.map(product => {
                                        return <Product product={product} key={product.id}/>
                                    })
                                }
                            </div>
                        </div>
                    </>
                ) : <Loading />
            }
        </>
    )
}

export default ProductList