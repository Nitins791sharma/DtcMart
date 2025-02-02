import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            <div className="container-fluid topbar bg-secondary w-100">
                <div className="container">
                    <div className="row gx-0 align-items-center" style={{ height: "45px" }}>
                        <div className="col-lg-8 text-center text-lg-start mb-lg-0">
                            <div className="d-flex flex-wrap">
                                <Link to="tel:+919876543210" className="text-light me-4 d-none d-xl-block"><i className="fas fa-phone-alt text-light me-2"></i>+91-919876543210</Link>
                                <Link to="mailto:nitinkumar@gmail.com" className="text-light me-4"><i className="fas fa-envelope text-light me-2"></i>nitinkumar@gmail.com</Link>
                                <Link to="http://wa.me/+91919876543210" className="text-light me-4"><i className="fa fa-whatsapp text-light me-2"></i>+91-919876543210</Link>
                            </div>
                        </div>
                        <div className="col-lg-4 text-center text-lg-end d-none d-xl-block">
                            <div className="d-flex align-items-center justify-content-end">
                                <a href="#" className="btn btn-light btn-sm-square rounded-circle me-3"><i className="fab fa-facebook-f"></i></a>
                                <a href="#" className="btn btn-light btn-sm-square rounded-circle me-3"><i className="fab fa-twitter"></i></a>
                                <a href="#" className="btn btn-light btn-sm-square rounded-circle me-3"><i className="fab fa-instagram"></i></a>
                                <a href="#" className="btn btn-light btn-sm-square rounded-circle me-0"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid nav-bar sticky-top px-0 px-lg-4 py-2 py-lg-0">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <Link to="/" className="navbar-brand p-0">
                            <h1 className="display-6 text-primary"><i className="fas fa-shopping-cart me-3"></i>DtcMart</h1>
                            {/* <!-- <img src="img/logo.png" alt="Logo"> --> */}
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="fa fa-bars"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="navbar-nav mx-auto py-0">
                                <NavLink to="/" className="nav-item nav-link">Home</NavLink>
                                <NavLink to="/about" className="nav-item nav-link">About</NavLink>
                                <NavLink to="/shop" className="nav-item nav-link">Shop</NavLink>
                                <NavLink to="/features" className="nav-item nav-link">Features</NavLink>
                                <NavLink to="/testimonials" className="nav-item nav-link">Testimonials</NavLink>
                                <NavLink to="/contactus" className="nav-item nav-link">Contact</NavLink>
                                <NavLink to="/admin" className="nav-item nav-link">Admin</NavLink>

                                {/* <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                <div className="dropdown-menu m-0">
                                    <a href="feature.html" className="dropdown-item">Our Feature</a>
                                    <a href="cars.html" className="dropdown-item">Our Cars</a>
                                    <a href="team.html" className="dropdown-item">Our Team</a>
                                    <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                                    <a href="404.html" className="dropdown-item">404 Page</a>
                                </div>
                            </div> */}
                               
                            </div>
                            <a href="#" className="btn btn-primary rounded-pill py-2 px-4">Login</a>
                        </div>
                    </nav>
                </div>
            </div >
        </>
    )
}
