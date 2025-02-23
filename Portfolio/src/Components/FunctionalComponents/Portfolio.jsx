import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Portfolio = () => {
  const [projects] = useState([
    { id: 1, name: "Project 1", description: "A brief description of the project." },
    { id: 2, name: "Project 2", description: "A brief description of the project." }
  ]);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <header className="text-center my-6">
        <h1 className="text-4xl font-bold">Your Name</h1>
        <p className="text-lg text-gray-400">Software Engineer | React Developer</p>
      </header>
      
      <section className="grid md:grid-cols-2 gap-6">
        {projects.map(project => (
          <div key={project.id} className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold">{project.name}</h2>
            <p className="text-gray-400 mt-2">{project.description}</p>
          </div>
        ))}
      </section>

      <footer className="mt-10 flex space-x-4">
        <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-2xl hover:text-gray-400" />
        </a>
        <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-2xl hover:text-gray-400" />
        </a>
        <a href="mailto:your.email@example.com">
          <FaEnvelope className="text-2xl hover:text-gray-400" />
        </a>
      </footer>
    </div>
  );
};

export default Portfolio;
