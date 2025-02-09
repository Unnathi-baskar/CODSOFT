import React from "react";

const Services = () => {
  return (
    <section className="services" id="services">
      <h2>Our Services</h2>
      <div className="services-container">
        <div className="service-box">
          <span className="icon">📊</span>
          <h3>User Experience</h3>
          <p>Enhancing digital interactions for users.</p>
        </div>
        <div className="service-box">
          <span className="icon">🎨</span>
          <h3>Creative Design</h3>
          <p>Innovative designs that capture attention.</p>
        </div>
        <div className="service-box">
          <span className="icon">📷</span>
          <h3>Retina Ready</h3>
          <p>High-resolution visuals for all screens.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
