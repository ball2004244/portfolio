import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-cyan-400 mb-3">
          Featured Projects
        </h2>
        <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">
          Bridging research, data science, and entrepreneurship through innovative solutions
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300">
            <div className="flex items-center mb-4">
              <svg className="w-6 h-6 text-cyan-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <h3 className="text-xl font-semibold text-white">Data Science Research</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Advanced machine learning algorithms for predictive analytics in [specific domain]. Implemented using PyTorch and deployed at scale.
            </p>
            <div className="flex gap-2 mb-4">
              <span className="px-2 py-1 text-xs bg-gray-700 text-cyan-400 rounded">Python</span>
              <span className="px-2 py-1 text-xs bg-gray-700 text-cyan-400 rounded">PyTorch</span>
              <span className="px-2 py-1 text-xs bg-gray-700 text-cyan-400 rounded">AWS</span>
            </div>
            <a href="#" className="inline-flex items-center text-cyan-400 hover:text-cyan-300">
              View Project <span className="ml-1">→</span>
            </a>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300">
            <div className="flex items-center mb-4">
              <svg className="w-6 h-6 text-cyan-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <h3 className="text-xl font-semibold text-white">Entrepreneurial Project</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Developed a full-stack web application to streamline business operations. Utilized React, Node.js, and MongoDB for a robust and scalable solution.
            </p>
            <div className="flex gap-2 mb-4">
              <span className="px-2 py-1 text-xs bg-gray-700 text-cyan-400 rounded">React</span>
              <span className="px-2 py-1 text-xs bg-gray-700 text-cyan-400 rounded">Node.js</span>
              <span className="px-2 py-1 text-xs bg-gray-700 text-cyan-400 rounded">MongoDB</span>
            </div>
            <a href="#" className="inline-flex items-center text-cyan-400 hover:text-cyan-300">
              View Project <span className="ml-1">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
