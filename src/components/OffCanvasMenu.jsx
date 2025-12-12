import React from 'react';
import { useLocation } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

const OffCanvasMenu = () => {

    const location = useLocation();

    return (
        <>
            {/* OPEN BUTTON */}
                                <Link className="offcanvas-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i className="fa-solid fa-bars"></i></Link>
           

            {/* OFFCANVAS PANEL */}
            <div
                className="offcanvas offcanvas-end bg-white"
                tabIndex="-1"
                id="offcanvasRight"
            >
                {/* HEADER */}
                <div className="offcanvas-header">
           <Link to="/#"><img src="/img/logo/logo1.webp" alt="logo" className='w-[30vw] '/></Link>
           <button type="button" className='offcanvasClose' data-bs-dismiss="offcanvas" aria-label="Close"><i className="fa-solid fa-xmark"></i></button>
       </div>

                {/* NAVIGATION */}
                <div className="offcanvas-body  px-6 py-6 bg-black/10 ">

                    <div className="text-[17px] font-medium text-black float-left text-left ">

                        <div className="py-3 border-b border-gray-300 ">
                            <Link to="/#" className="flex text-black hover:text-yellow-600">
                            <span className='hover:text-[#f55b14] hover:font-bold'>Home</span>    </Link>
                            <div className='bg-gray-400 w-[70vw] h-[0.01rem] mt-1 '></div>
                        </div>

                      <div className="py-2 border-b border-gray-300">
                            <Link to="/about" className="flex "><span className='hover:text-[#f55b14] hover:font-bold'>About</span> </Link>
                            <div className='bg-gray-400 w-[70vw] h-[0.01rem] mt-1 '></div>
                        </div>

                        <div className="py-2 border-b border-gray-300">
                            <Link to="/service" className="flex "><span className='hover:text-[#f55b14] hover:font-bold'>Service</span> </Link>
                            <div className='bg-gray-400 w-[70vw] h-[0.01rem] mt-1 '></div>
                        </div>

                        <div className="py-2 border-b border-gray-300">
                            <Link to="/project" className="flex "><span className='hover:text-[#f55b14] hover:font-bold'>Project</span></Link>
                            <div className='bg-gray-400 w-[70vw] h-[0.01rem] mt-1 '></div>
                        </div>

                        {/* <div className="py-3 border-b border-gray-300">
                            <Link
                                to="/blog#"
                                className={`block ${location.pathname === '/blog' ? 'text-yellow-600' : ''}`}
                            >
                                Blog
                            </Link>
                        </div> */}

                        <div className=" py-2 border-b border-gray-300">
                            <Link to="/contact" className="flex "><span className='hover:text-[#f55b14] hover:font-bold'>Contact</span></Link>
                            <div className='bg-gray-400 w-[70vw] h-[0.01rem] mt-1 '></div>
                        </div>
                        

                    </div>

                </div>
            </div>
        </>
    );
};

export default OffCanvasMenu;
