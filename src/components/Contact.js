import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiX } from "react-icons/si";

const Contact = () => {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-20 text-center">
      <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
      <p className="text-lg mb-6 text-gray-400">Interested in working together? Let's talk!</p>
      <a href="omkarbondge07@gmail.com" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 mb-8 inline-block">
        Send Email
      </a>
      <div className="flex justify-center space-x-6 mt-8">
        <a href="https://www.linkedin.com/in/omkarbondge/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-500 hover:shadow-blue-500/50 text-2xl transition-all"><FaLinkedin /></a>
        <a href="https://github.com/Omkar-b07" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white hover:shadow-white/50 text-2xl transition-all"><FaGithub /></a>
        <a href="https://x.com/Omkar_B07" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-400 hover:shadow-blue-400/50 text-2xl transition-all"><SiX /></a>
        <a href="https://instagram.com/omkar_bondge07" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-pink-500 hover:shadow-pink-500/50 text-2xl transition-all"><FaInstagram /></a>
      </div>
    </section>
  );
};

export default Contact;
