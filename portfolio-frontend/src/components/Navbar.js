import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav-bar">
      <div className="nav-inner">
        <a href="#home" className="wordmark"><span>OB</span><strong>Omkar Bondge</strong></a>

        {/* Desktop Menu */}
        <div className="nav-links">
          <Link to="about" smooth={true} duration={500}>About</Link>
          <Link to="projects" smooth={true} duration={500}>Selected work</Link>
          <Link to="contact" smooth={true} duration={500}>Contact</Link>
          <a href="https://github.com/Omkar-b07" target="_blank" rel="noreferrer" className="nav-github">GitHub ↗</a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="menu-button"
          aria-label="Toggle navigation"
        >
          {isOpen ? (
            <svg className="menu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="menu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu">
          <Link
            to="home"
            smooth={true}
            duration={500}
            onClick={() => setIsOpen(false)}
            className="mobile-link"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            onClick={() => setIsOpen(false)}
            className="mobile-link"
          >
            About
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            onClick={() => setIsOpen(false)}
            className="mobile-link"
          >
            Selected work
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
