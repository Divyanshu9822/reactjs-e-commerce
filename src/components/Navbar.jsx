import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const cart = useSelector((state) => state.cartProducts.cart);
  return (
    <header className="p-3 text-bg-dark sticky-top">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            {/* <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg> */}
            <h4 className=" mx-3">Savana</h4>
          </Link>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            {/* <li><Link to="/" className="nav-link px-2 text-white">Home</Link></li> */}
            {/* <li><a href="#" className="nav-link px-2 text-white">Features</a></li> */}
            {/* <li><a href="#" className="nav-link px-2 text-white">Pricing</a></li> */}
            {/* <li><a href="#" className="nav-link px-2 text-white">FAQs</a></li> */}
            {/* <li><Link to="/about" className="nav-link px-2 text-secondary">About</Link></li> */}
          </ul>

          {/* <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search"/>
        </form> */}

          <div className="d-flex text-end">
            <Link className="nav-link" to="/cart"><button type="button" className="btn btn-outline-light me-2"><i className="fa-solid fa-cart-shopping"></i> Cart {cart.length}</button></Link>
            <button type="button" className="btn btn-outline-light me-2">Login</button>
            <button type="button" className="btn btn-warning">Sign-up</button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar