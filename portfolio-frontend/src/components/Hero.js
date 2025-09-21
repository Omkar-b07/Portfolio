import React from "react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-[#0f0f0f] to-[#1a1a1a] text-center py-32">
      <h1 className="text-5xl font-bold mb-4">Hi, I'm Omkar</h1>
      <p className="text-lg text-gray-400 mb-8">MERN Stack Developer | Building Modern Web Apps</p>
      <div className="space-x-4">
        <a href="#projects" className="bg-blue-600 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/50 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
          View Projects
        </a>
        <a href="#contact" className="bg-[#1f1f1f] border border-blue-600 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/50 px-6 py-3 rounded-lg font-semibold transition-all duration-300">
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Hero;
