import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import User from './User'

const Navbar = (props) => {
  const cart = useSelector((state) => state.cartProducts.cart);

  return (
    <header className="p-3 text-bg-dark sticky-top">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            <h4 className=" mx-3">Savana</h4>
          </Link>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            {/* <li><Link to="/" className="nav-link px-2 text-white">Home</Link></li> */}
            {/* <li><Link to="/about" className="nav-link px-2 text-secondary">About</Link></li> */}
          </ul>
          <div>
            {props.state ?
              (
                <>
                  <div className="w-100 d-flex justify-content-between text-end">
                    <Link className="nav-link" to="/cart"><button type="button" className="btn btn-outline-light me-2"><i className="fa-solid fa-cart-shopping"></i> Cart {cart.length}</button></Link>
                    <User />
                  </div>
                </>
              )
              : (
                  <>
                    <div className="d-flex text-end">
                      <Link className="nav-link" to="/cart"><button type="button" className="btn btn-outline-light me-2"><i className="fa-solid fa-cart-shopping"></i> Cart {cart.length}</button></Link>
                      <Link className="nav-link" to="/login"><button type="button" className="btn btn-outline-light me-2">Login</button></Link>
                      <Link className="nav-link" to="/signup"><button type="button" className="btn btn-warning">Sign-up</button></Link>
                    </div>
                  </>
              )

            }
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar