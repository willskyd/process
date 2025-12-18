import React from 'react';
import { Link } from 'react-router-dom';

const LoadMoreProduct = () => {
    return (
        <>
            <div className="row">
                <div className="col-md-12">
                    <div className="gallery-load-more-btn">
                        <Link to="/">Load More Project <i className="icofont-thin-double-right"></i></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoadMoreProduct;