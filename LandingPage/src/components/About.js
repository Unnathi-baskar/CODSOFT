import React from "react";
import aboutImage from "/Users/unnathibaskar/landing/src/image.jpg";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-text">
        <h2>About Us</h2>
        <p>We have 15 years of experience in delivering quality results.</p>
        <button className="read-more">Read More</button>
      </div>
      <div className="about-image">
        <img src={aboutImage} alt="About us" />
      </div>
    </section>
  );
};

export default About;
