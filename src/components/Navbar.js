import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-[#1f1f1f] text-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-500">Omkar Bondge</h1>
        <ul className="flex space-x-8 text-lg">
          <li><a href="#about" className="hover:text-blue-400 transition-colors">About</a></li>
          <li><a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
