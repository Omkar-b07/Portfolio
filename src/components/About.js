import React from "react";
import profileImage from "../assets/profile2.jpg";

const About = () => {
  return (
    <section id="about" className="bg-gray-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Profile Image */}
        <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-purple-600 shadow-lg hover:scale-105 transition-transform duration-300">
          <img
            src={profileImage}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* About Content */}
        <div className="text-center md:text-left max-w-2xl">
          <h2 className="text-4xl font-extrabold mb-6 text-purple-400">About Me</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            I'm a passionate <span className="text-purple-400">MERN Stack Developer</span> who loves creating modern and responsive web applications.
            Skilled in React, Node.js, MongoDB, and Express, I enjoy turning ideas into real-world projects.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed mb-6">
            I'm an <span className="text-purple-400">Electronics and Computer Engineering</span> student at 
            Zeal College of Engineering and Research, Pune.
            Technology excites me, and I am always in awe of the change it drives in the world.
          </p>

          {/* Resume Download Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-500 transition-colors"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
