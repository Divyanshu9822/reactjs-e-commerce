import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
    return (

        <div className="container  px-5 mt-5">
            <div className="row justify-content-center">
                <div className="col-md-7 col-lg-5 shadow">
                    <div className="wrap">
                        <div className="login-wrap p-4 p-md-5">
                            <div className="d-flex">
                                <div className="w-100">
                                    <h3 className="mb-4">Sign Up</h3>
                                </div>
                            </div>
                            <form className="signin-form">
                                <div className="form-group mt-3 mb-3">
                                    <label className="form-control-placeholder" htmlFor="username">Username</label>
                                    <input type="text" className="form-control" required="" />
                                </div>
                                <div className="form-group mb-3">
                                    <label className="form-control-placeholder" htmlFor="password">Password</label>
                                    <input id="password-field" type="password" className="form-control" required="" />
                                </div>
                                <div className="form-group mb-3">
                                    <label className="form-control-placeholder" htmlFor="confirm-password">Confirm Password</label>
                                    <input id="confirm-password-field" type="password" className="form-control" required="" />
                                </div>
                                <div className="form-group">
                                   <Link className='nav-link text-warning' to="/login" ><button className="form-control btn btn-warning rounded submit px-3">Sign Up</button></Link>                                </div>

                            </form>
                            <p className="text-center mt-2">Already a user ? <Link className='nav-link text-warning' to="/login" >Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp