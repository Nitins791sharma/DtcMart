import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function Testimonials() {
    let options = {
        responsive: {
            0: {
                items: 1.2
            },
            720: {
                items: 2.2
            },
            1000: {
                items: 3.2
            },
            1920: {
                items: 4.2
            },
        },
        dots: false,
        loop: true,
        margin:10,
        autoplay:true,
        autoplayTimeout:3000
    }
    return (
        <>
            <div className="container-fluid testimonial py-3">
                <div className="container pb-5">
                    <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "800px" }}>
                        <h1 className="display-5 text-capitalize mb-3">Our Clients<span className="text-primary"> Riviews</span></h1>
                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo expedita asperiores commodi accusantium at cum harum, excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam quia distinctio,
                        </p>
                    </div>
                    <div className="testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
                        <OwlCarousel {...options} className='owl-theme'>
                            <div className="testimonial-item">
                                <div className="testimonial-quote"><i className="fa fa-quote-right fa-2x"></i>
                                </div>
                                <div className="testimonial-inner p-4">
                                    <img src="img/testimonial-1.jpg" className="img-fluid" alt="" />
                                    <div className="ms-4">
                                        <h4>Person Name</h4>
                                        <p>Profession</p>
                                        <div className="d-flex text-primary">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star text-body"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-top rounded-bottom p-4">
                                    <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam soluta neque ab repudiandae reprehenderit ipsum eos cumque esse repellendus impedit.</p>
                                </div>
                            </div>
                            <div className="testimonial-item">
                                <div className="testimonial-quote"><i className="fa fa-quote-right fa-2x"></i>
                                </div>
                                <div className="testimonial-inner p-4">
                                    <img src="img/testimonial-2.jpg" className="img-fluid" alt="" />
                                    <div className="ms-4">
                                        <h4>Person Name</h4>
                                        <p>Profession</p>
                                        <div className="d-flex text-primary">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star text-body"></i>
                                            <i className="fas fa-star text-body"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-top rounded-bottom p-4">
                                    <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam soluta neque ab repudiandae reprehenderit ipsum eos cumque esse repellendus impedit.</p>
                                </div>
                            </div>
                            <div className="testimonial-item">
                                <div className="testimonial-quote"><i className="fa fa-quote-right fa-2x"></i>
                                </div>
                                <div className="testimonial-inner p-4">
                                    <img src="img/testimonial-3.jpg" className="img-fluid" alt="" />
                                    <div className="ms-4">
                                        <h4>Person Name</h4>
                                        <p>Profession</p>
                                        <div className="d-flex text-primary">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star text-body"></i>
                                            <i className="fas fa-star text-body"></i>
                                            <i className="fas fa-star text-body"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-top rounded-bottom p-4">
                                    <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam soluta neque ab repudiandae reprehenderit ipsum eos cumque esse repellendus impedit.</p>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </>
    )
}
