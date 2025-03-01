import React from 'react';
import { projects } from '../shared/constant';

const Projects = () => {
  const displayedProjects = projects.slice(0, 4); // Show first 4 projects initially
  
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
          Featured Projects
        </h2>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Project-based learning is the best way to master new skills
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {displayedProjects.map((project, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300"
            >              
              <div className="p-6">
                {/* Header with icon */}
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gray-700 flex items-center justify-center text-cyan-400 mr-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>
                
                {/* Description */}
                <p className="text-gray-300 mb-4">
                  {project.description}
                </p>
                
                {/* Technologies with subtle styling */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-3 py-1 text-xs bg-gray-800 text-cyan-400 rounded-full border border-cyan-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.link} 
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300"
                >
                  View Project 
                  <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* See More Button - With lightning spark animation */}
        <div className="text-center mt-16">
          <div className="relative inline-block group">
            <a 
              href="/projects" 
              className="inline-flex items-center justify-center px-8 py-4 bg-gray-800 border border-cyan-500/30 group-hover:bg-gray-800/80 group-hover:backdrop-blur-sm text-cyan-400 font-semibold rounded-lg transition-all duration-300 relative overflow-hidden z-10"
            >
              See All Projects
              <svg 
                className="ml-2 w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>

              {/* Lightning spark animation */}
              <span className="absolute inset-0 pointer-events-none">
                {/* Right edge spark */}
                <span className="absolute top-0 right-0 h-0 w-0.5 bg-cyan-400 group-hover:animate-spark-right"></span>
                
                {/* Bottom edge spark */}
                <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-cyan-400 group-hover:animate-spark-bottom"></span>
                
                {/* Left edge spark */}
                <span className="absolute bottom-0 left-0 h-0 w-0.5 bg-cyan-400 group-hover:animate-spark-left"></span>
                
                {/* Top edge spark */}
                <span className="absolute top-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:animate-spark-top"></span>
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Add custom animations for lightning effect */}
      <style jsx>{`
        @keyframes spark-right {
          0% { height: 0; top: 0; }
          25% { height: 100%; top: 0; }
          25.1% { height: 0; top: 100%; }
          100% { height: 0; top: 100%; }
        }
        
        @keyframes spark-bottom {
          0% { width: 0; right: 0; }
          25% { width: 0; right: 0; }
          50% { width: 100%; right: 0; }
          50.1% { width: 0; right: 100%; }
          100% { width: 0; right: 100%; }
        }
        
        @keyframes spark-left {
          0% { height: 0; bottom: 0; }
          50% { height: 0; bottom: 0; }
          75% { height: 100%; bottom: 0; }
          75.1% { height: 0; bottom: 100%; }
          100% { height: 0; bottom: 100%; }
        }
        
        @keyframes spark-top {
          0% { width: 0; left: 0; }
          75% { width: 0; left: 0; }
          100% { width: 100%; left: 0; }
        }
        
        :global(.group:hover .group-hover\\:animate-spark-right) {
          animation: spark-right 2s linear;
        }
        
        :global(.group:hover .group-hover\\:animate-spark-bottom) {
          animation: spark-bottom 2s linear;
        }
        
        :global(.group:hover .group-hover\\:animate-spark-left) {
          animation: spark-left 2s linear;
        }
        
        :global(.group:hover .group-hover\\:animate-spark-top) {
          animation: spark-top 2s linear;
        }
      `}</style>
    </section>
  );
};

export default Projects;
