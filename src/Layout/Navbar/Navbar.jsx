import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-gray-950 sticky top-0">
      <div className="container mx-auto">
        <nav>
          <div className="text-black flex flex-col-2 lg:flex-row justify-between items-center sticky top-0 ">
            <div className="flex justify-between ">
              {/* Logo */}
              <div className="flex items-center">
                <a href="/">
                  <h1 className="text-6xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold font-semibold text-black bg-emerald-400 px-5 py-3">
                    R
                  </h1>
                </a>
                <a href="/">
                  <h1 className="text-white text-3xl ps-4 ">Rakib</h1>
                </a>
              </div>
              {/* Mobile Menu Toggle Button */}
              <div className="md:hidden flex ps-40 items-center">
                <button
                  onClick={toggleMobileMenu}
                  className="text-black focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-8 w-8 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                      color="white"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            {/* Desktop Navigation Links */}
            <div className="hidden md:flex space-x-2 ">
              <a
                href="/home"
                className="p-2 text-gray-500 text-large font-semibold hover:text-green-400 "
                aria-current="page"
              >
                HOME
              </a>
              <a
                href="#"
                className="p-2 text-gray-500 text-large font-semibold hover:text-green-400 "
              >
                ABOUT
              </a>
              <a
                href="#"
                className="p-2 text-gray-500 text-large font-semibold hover:text-green-400 "
              >
                PROJECTS
              </a>
              <a
                href="#"
                className="p-2 text-gray-500 text-large font-semibold hover:text-green-400 "
              >
                BLOGS
              </a>
              <a
                href="#"
                className="p-2 text-gray-500 text-large font-semibold hover:text-green-400 "
              >
                CONTACT
              </a>
            </div>
          </div>

          {/* Mobile Navigation Menu (Initially Hidden) */}
          <div
            className={`md:hidden ${
              isMobileMenuOpen ? "block" : "hidden"
            } bg-gray-900`}
          >
            <div className="container  mx-auto p-4 space-y-4">
              <a href="#" className="text-white hover:text-emerald-400 block">
                HOME
              </a>
              <a href="#" className="text-white hover:text-emerald-400 block">
                ABOUT
              </a>
              <a href="#" className="text-white hover:text-emerald-400 block">
                PROJECTS
              </a>
              <a href="#" className="text-white hover:text-emerald-400 block">
                BLOG
              </a>
              <a href="#" className="text-white hover:text-emerald-400 block">
                CONTACT
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
