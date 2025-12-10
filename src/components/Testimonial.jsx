import React from 'react';
import TestimonialData from '../jsonData/TestimonialData.json'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Keyboard, Pagination } from 'swiper';
import SingleTestimonial from './SingleTestimonial';

const Testimonial = () => {
    return (
        <>
            <section className="testimonial-v1-sec ">
                <div className="container ">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="sec-title">
                                <h1>What Say Our Client</h1>
                           <p>Our clients trust Process Oil & Gas Limited for our commitment to quality, reliability, and exceptional 
                            service delivery. Over the years, we have built strong partnerships through consistent performance, innovative 
                            solutions, and a dedication to meeting industry standards. Here’s what some of our valued clients say about 
                            working with us.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="testimonial-v1-all">
                                <Swiper
                                    modules={[Keyboard, Autoplay, Pagination]}
                                    spaceBetween={50}
                                    slidesPerView={3}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    pagination={{
                                        clickable: true,
                                        dynamicBullets: true
                                    }}
                                    loop={true}
                                    keyboard={{
                                        enabled: true,
                                    }}
                                    breakpoints={{
                                        220: {
                                            slidesPerView: 1,
                                            spaceBetween: 20,
                                        },
                                        768: {
                                            slidesPerView: 3,
                                            spaceBetween: 40,
                                        }
                                    }}
                                >
                                    {TestimonialData.map(testimonial =>
                                        <SwiperSlide key={testimonial.id}>
                                            <SingleTestimonial testimonial={testimonial} />
                                        </SwiperSlide>
                                    )}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Testimonial;