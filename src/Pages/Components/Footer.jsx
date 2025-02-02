import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <>
            {/* <!-- Footer Start --> */}
            <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-md-6 col-xl-4">
                            <div className="footer-item d-flex flex-column">
                                <div className="footer-item">
                                    <h4 className="text-white mb-4">About DctMart</h4>
                                    <p className="mb-3">Dolor amet sit justo amet elitr clita ipsum elitr est.Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit.</p>
                                </div>
                                <div className="position-relative">
                                    <input className="form-control rounded-pill w-100 py-3 ps-4 pe-5" type="text" placeholder="Enter your email" />
                                    <button type="button" className="btn btn-secondary rounded-pill position-absolute top-0 end-0 py-2 mt-2 me-2">Subscribe</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-2">
                            <div className="footer-item d-flex flex-column">
                                <h4 className="text-white mb-4">Menu</h4>
                                <Link to="/"><i className="fas fa-angle-right me-2"></i> Home</Link>
                                <Link to="/about"><i className="fas fa-angle-right me-2"></i> About</Link>
                                <Link to="/shop"><i className="fas fa-angle-right me-2"></i> Shop</Link>
                                <Link to="/features"><i className="fas fa-angle-right me-2"></i> Features</Link>
                                <Link to="/contactus"><i className="fas fa-angle-right me-2"></i> ContactUS</Link>
                            </div>
                        </div><div className="col-md-6 col-xl-2">
                            <div className="footer-item d-flex flex-column">
                                <h4 className="text-white mb-4">Menu</h4>
                                <Link to="#"><i className="fas fa-angle-right me-2"></i> Terms & Conditions</Link>
                                <Link to="#"><i className="fas fa-angle-right me-2"></i> Refund Policy</Link>
                                <Link to="#"><i className="fas fa-angle-right me-2"></i> Privacy Policy</Link>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-3">
                            <div className="footer-item d-flex flex-column">
                                <h4 className="text-white mb-4">Contact Info</h4>
                                <a href="#"><i className="fa fa-map-marker me-2"></i>A-43, Sector 16,Noida</a>
                                <a href="mailto:vishankchauhan@gmail.com"><i className="fas fa-envelope me-2"></i> vishankchauhan@gmail.com</a>
                                <a href="tel:+919873948046"><i className="fas fa-phone me-2"></i> +91-9873948046</a>
                                <a href="http://wa.me/+919873948046"><i className="fa fa-whatsapp me-2"></i> +91-9873948046</a>
                                <div className="d-flex">
                                    <a className="btn btn-secondary btn-md-square rounded-circle me-3" href=""><i className="fab fa-facebook-f text-white"></i></a>
                                    <a className="btn btn-secondary btn-md-square rounded-circle me-3" href=""><i className="fab fa-twitter text-white"></i></a>
                                    <a className="btn btn-secondary btn-md-square rounded-circle me-3" href=""><i className="fab fa-instagram text-white"></i></a>
                                    <a className="btn btn-secondary btn-md-square rounded-circle me-0" href=""><i className="fab fa-linkedin-in text-white"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Footer End --> */}
        </>
    )
}
