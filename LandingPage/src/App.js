import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import Services from "./components/Services";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="landing-page">
      <Header />
      <Hero />
      <Features />
      <About />
      <Services />
      <Footer />
    </div>
  );
};

export default App;