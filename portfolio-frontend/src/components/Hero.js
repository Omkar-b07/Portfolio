import React from "react";
import profileImage from "../assets/profile-latest.png";

const Hero = () => {
  return (
    <section id="home" className="hero section-frame">
      <div className="hero-topline"><span><i className="status-dot" /> Available for opportunities</span><span>Full-stack developer / Pune, India</span></div>
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Hello, I&apos;m Omkar <span>✳</span></p>
          <h1>I build software<br /><span>people can use.</span></h1>
          <p className="hero-description">Full-stack developer focused on thoughtful interfaces, dependable systems, and products that solve real problems.</p>
          <div className="hero-actions">
            <a href="#projects" className="button button-primary">See my work <span>↓</span></a>
            <a href="mailto:omkarbondge07@gmail.com" className="text-link">Start a conversation <span>↗</span></a>
          </div>
        </div>
        <div className="hero-profile">
          <div className="profile-orbit orbit-one" /><div className="profile-orbit orbit-two" />
          <div className="profile-frame"><img src={profileImage} alt="Omkar Bondge" /><span className="profile-tag">BUILDING FROM<br /><strong>IDEA → IMPACT</strong></span></div>
          <span className="profile-number">01 / 04</span>
        </div>
      </div>
      <div className="hero-footer"><span>Currently learning / building / shipping</span><span>Scroll to explore ↓</span></div>
    </section>
  );
};

export default Hero;
