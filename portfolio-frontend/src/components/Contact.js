import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiX } from "react-icons/si";

const Contact = () => {
  return (
    <section id="contact" className="contact-section content-section section-frame">
      <div className="section-heading"><span className="section-label">03 / Contact</span><span className="section-label">Have a good one.</span></div>
      <div className="contact-copy">
        <h2>Have an idea?<br /><em>Let&apos;s make it real.</em></h2>
      </div>
      <div className="contact-bottom">
        <div><p>Interested in working together, or just want to say hello? My inbox is always open.</p><a href="mailto:omkarbondge07@gmail.com" className="button button-primary" style={{ marginTop: '24px' }}>Send an email <span>↗</span></a></div>
        <div className="socials">
          <a href="https://www.linkedin.com/in/omkarbondge/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="https://github.com/Omkar-b07" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a href="https://x.com/Omkar_B07" target="_blank" rel="noreferrer" aria-label="X"><SiX /></a>
          <a href="https://instagram.com/omkar_bondge07" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
