import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const OffCanvasMenu = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Lock scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [open]);

  return (
    <>
      {/* OPEN BUTTON */}
      <button
        onClick={() => setOpen(true)}
        className="offcanvas-btn z-50"
        aria-label="Open menu"
      >
        <i className="fa-solid fa-bars"></i>
      </button>

      {/* BACKDROP */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 "
        />
      )}

      {/* OFFCANVAS PANEL */}
      <div
        className={`fixed top-0 right-0 h-full w-[80vw] max-w-sm bg-white z-50
        transform transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <Link to="/">
            <img
              src="/img/logo/logo1.webp"
              alt="logo"
              className="w-[30vw] max-w-[140px]"
            />
          </Link>

          <button onClick={() => setOpen(false)} aria-label="Close menu">
            <i className="fa-solid fa-xmark text-2xl relative px-3"></i>
          </button>
        </div>

        {/* BODY */}
        <div className="px-6 py-6 bg-black/10 h-full overflow-y-auto">
          <nav className="text-[17px] font-medium text-black space-y-4 text-left mt-3  ">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Service", path: "/service" },
              { name: "Project", path: "/project" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className="block"
              >
                <span className="hover:text-[#f55b14] hover:font-bold transition mx-3  ">
                  {item.name}
                </span>
                <div className="bg-gray-400 w-full h-[0.5px] mb-3 text-center items-center" />
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default OffCanvasMenu;
