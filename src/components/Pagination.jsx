import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = () => {
    return (
        <>
            <div className="row">
                <div className="col-md-12">
                    <ul className="pagination custom-pagination">
                        <li className="active"><Link to="/">01</Link></li>
                        <li><Link to="/">02</Link></li>
                        <li><Link to="/">03</Link></li>
                        <li><Link to="/">04</Link></li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Pagination;