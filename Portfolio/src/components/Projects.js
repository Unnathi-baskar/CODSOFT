import React from 'react';

export const Projects = () => {
  const projects = [
    { title: 'CONNECT 4', description: 'A classic strategy game where two players take turns dropping colored discs into a grid. The goal is to align four discs in a row, column, or diagonal before your opponent does!', link: 'https://github.com/Unnathi-baskar/connect-four-game' },
    { title: 'SIMPLE CALCULATOR', description: 'Allows users to perform basic arithmetic operations like addition, subtraction, multiplication, and division with ease.', link: '#' },
    { title: 'COMING SOON!!!', description: "Won't keep you waiting for long!", link: '#' },
    { title: 'COMING SOON!!!', description: "Won't keep you waiting for long!", link: '#' },
  ];

  return (
    <section classname= "projects" id="projects">
    <div className="projects-section">
      <div className="projects-header">
        <h1>Projects</h1>
        <p>
        Explore my projects, showcasing technical expertise and creative problem-solving. Each one highlights my ability to design and deliver impactful and innovative solutions.
        </p>
      </div>

      <div className="tabs-container">
        <button className="tab-button">Tab 1</button>
        <button className="tab-button">Tab 2</button>
        <button className="tab-button">Tab 3</button>
      </div>

      <div className="projects-container">
        {projects.map((project, index) => (
          <a key={index} href={project.link} className="project-card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </a>
        ))}
      </div>
    </div>
    </section>
  );
};

