import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SingleBanner = ({ banner }) => {
    const { image, title, text, btn1, btn2 } = banner;

    return (
        <div
            className="single-slide"
            style={{ backgroundImage: `url(/img/banner/${image})` }}
        >
            <div className="slider-overlay"></div>

            <div className="slider-wrapper">
                <div className="slider-text">
                    <div className="slider-caption">

                        {/* TITLE */}
                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            {title}
                        </motion.h1>

                        {/* TEXT + BUTTONS */}
                        <motion.div
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        >
                            <p>{text}</p>

                            <ul>
                                <li>
                                    <Link to="/about">
                                        {btn1} <i className="icofont-long-arrow-right"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact">
                                        {btn2} <i className="icofont-long-arrow-right"></i>
                                    </Link>
                                </li>
                            </ul>
                        </motion.div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleBanner;
