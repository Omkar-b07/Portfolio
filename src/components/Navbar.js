import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white fixed w-full top-0 left-0 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-2xl font-bold text-indigo-500">Omkar</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link to="home" smooth={true} duration={500} className="hover:text-indigo-400 cursor-pointer">
            Home
          </Link>
          <Link to="about" smooth={true} duration={500} className="hover:text-indigo-400 cursor-pointer">
            About
          </Link>
          <Link to="projects" smooth={true} duration={500} className="hover:text-indigo-400 cursor-pointer">
            Projects
          </Link>
          <Link to="contact" smooth={true} duration={500} className="hover:text-indigo-400 cursor-pointer">
            Contact
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-4 py-2 space-y-2">
          <Link
            to="home"
            smooth={true}
            duration={500}
            onClick={() => setIsOpen(false)}
            className="block hover:text-indigo-400"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            onClick={() => setIsOpen(false)}
            className="block hover:text-indigo-400"
          >
            About
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            onClick={() => setIsOpen(false)}
            className="block hover:text-indigo-400"
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            onClick={() => setIsOpen(false)}
            className="block hover:text-indigo-400"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
