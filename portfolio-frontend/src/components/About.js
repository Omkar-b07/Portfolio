import React from "react";
import resumeFile from "../assets/resume.pdf";

const About = () => {
  return (
    <section id="about" className="content-section section-frame">
      <div className="section-heading"><span className="section-label">01</span><h2>How I work</h2><span className="heading-note">Curious by default</span></div>
      <div className="about-grid">
        <div className="about-copy">
          <p>I&apos;m a <strong>MERN stack developer</strong> who enjoys taking complex ideas and turning them into clear, useful software.</p>
          <p>My work sits between <strong>product thinking, interface design, and backend engineering</strong>. I care about the small details, but I always keep the larger user journey in view.</p>
          <a href={resumeFile} target="_blank" rel="noopener noreferrer" className="resume-link">View my resume <span>↗</span></a>
          <div className="skills-row">
            {['React', 'Node.js', 'MongoDB', 'Express', 'JavaScript', 'Git'].map((skill) => <span className="skill" key={skill}>{skill}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
