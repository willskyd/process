import React from 'react';
import { Link } from 'react-router-dom';

const SingleTestimonial = ({ testimonial }) => {
    const { image, name, designation, text } = testimonial;

    return (
        <>
            <div className="single-testimonial-v1">
                {/*  */}
                <div className="testimonial-v1-img ">
                    <img src={`img/client/${image}`} alt="client"  />
                </div>
              

                <div className="details">
                    <h2><Link to="/">{name}</Link></h2>
                    <span>{designation}</span>
                </div>
                <div className="rating">
                    <p>{text}</p>
                    <i className="icofont-star"></i>
                    <i className="icofont-star"></i>
                    <i className="icofont-star"></i>
                    <i className="icofont-star"></i>
                    <i className="icofont-star"></i>
                </div>
            </div>
        </>
    );
};

export default SingleTestimonial;