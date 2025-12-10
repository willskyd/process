import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import about from '/img/about/about.webp'

const AboutUsV2 = () => {
    return (
        <>
            <section className="about-us-sec pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-desc">
                                <div className="sec-title">
                                    <h1>About Our Company</h1>
                                </div>
                        <p>Process Oil & Gas Limited is committed to delivering reliable, efficient, and innovative solutions across the 
                             oil and gas industry. We combine technical expertise, quality service delivery, and a strong safety culture 
                             to support our clients’ operations and help them achieve sustainable performance.</p>
                                <div className="read-more-btn">
                                    <Link to="/contact#">Contact Us</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="about-us-img">
                                <img src={about} alt="about" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutUsV2;