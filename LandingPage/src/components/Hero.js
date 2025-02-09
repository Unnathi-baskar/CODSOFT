import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <h1>Creative Digital Agency</h1>
        <p>We provide the best solutions for your business growth.</p>
        <div className="buttons">
          <button className="primary">Read More</button>
          <button className="secondary">Request a Consult</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;