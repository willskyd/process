import React from 'react';
import { Link } from 'react-router-dom';
import footerLogo from '/img/logo/ft-logo.png'
import SocialShare from './SocialShare';
import FooterBottom from './FooterBottom';
import logo1 from '../../public/img/logo/logo1.webp'

const 
Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer-overlay"></div>
                <div className="footer-sec">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="footer-widget-one ">
                                    <h2 className='footer-title-one'>Company Info</h2>
                   <Link to="/#" className="footer-logo"><img src="/img/logo/logo3.webp" alt="footerLogo" /></Link>
                            <p>Process Oil & Gas Limited is committed to delivering reliable, efficient, and innovative solutions across the oil and gas
                                   industry. We combine technical expertise, quality service delivery, and a strong safety culture to 
                                   support our clients’ operations and help them achieve sustainable performance.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="footer-widget-two footer-widget-menu">
                                    <h2>our solutions</h2>
                                    <ul>
                                        <li><Link to="">Factory Energy Power</Link></li>
                                        <li><Link to="">Chemical Research</Link></li>
                                        {/* <li><Link to="#">Expert Mechanical</Link></li> */}
                                        {/* <li><Link to="#">civil engineering</Link></li> */}
                                        <li><Link to="">oil & gas services</Link></li>
                                        {/* <li><Link to="#">Repair Technology</Link></li> */}
                                        <li><Link to="">Refinery Petroleum</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6">
                                <div className="footer-widget-three footer-widget-menu">
                                    <h2>useful link</h2>
                                    <ul>
                                        <li><Link to="/about">about us</Link></li>
                                        {/* <li><Link to="/project">latest project</Link></li> */}
                                        {/* <li><Link to="/about">faq</Link></li> */}
                                        <li><Link to="/contact">Contact Us</Link></li>
                                        {/* <li><Link to="/contact">site map</Link></li> */}
                                        {/* <li><Link to="#">trust People</Link></li> */}
                                        <li><Link to="/project">Our Project</Link></li>
                                        <li><Link to="/service">Our Service</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="footer-widget-four">
                                    <h2>contact form</h2>
                                    <div className="footer-contact-inner">
                                        <div className="footer-contact-info">
                                            <div className="footer-contact-info-icon">
                                                <i className="icofont-google-map"></i>
                                            </div>
                                            <div className="footer-contact-info-text capitalize"> 
                                                <span>No 26 Aba/ Port-Harcourt Express Road Oyigbo Port-Harcourt, </span>
                                                <span>Rivers State, Nigeria</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="footer-contact-inner">
                                        <div className="footer-contact-info">
                                            <div className="footer-contact-info-icon">
                                                <i className="icofont-email"></i>
                                            </div>
                                            <div className="footer-contact-info-text">
                                                <a href="mailto:processoilandgas.com.ng"> processoilandgas.com.ng</a>
                                                {/* <a href="mailto:info@finixpa.com">info@finixpa.com</a> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="footer-contact-inner">
                                        <div className="footer-contact-info">
                                            <div className="footer-contact-info-icon">
                                                <i className="icofont-telephone"></i>
                                            </div>
                                            <div className="footer-contact-info-text">
                                                <a href="tel:+2348037253302">+234 8037253302</a>
                                                {/* <a href="tel:254-7494-6494">254-7494-6494</a> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <FooterBottom />
            </footer>
        </>
    );
};

export default Footer;