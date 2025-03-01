import React from "react";

const AboutCard = ({ icon, title, subtitle, details }) => {
  return (
    <div className="group bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center mr-4">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="text-cyan-400">{subtitle}</p>
        </div>
      </div>
      {details.map((detail, index) => (
        <p key={index} className="text-gray-400">
          {detail}
        </p>
      ))}
    </div>
  );
};

const AboutMe = () => {
  return (
    <section id="About Me" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
          About Me
        </h2>
        <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">
          Academic journey in technology and research
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AboutCard
            icon={
              <svg
                className="w-6 h-6 text-cyan-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
              </svg>
            }
            title="Bachelor's in Computer Science"
            subtitle="University of South Florida - 05/2026"
            details={[
              "Coursework: Data Structure & Algorithm, Database Design, Distributed Systems, Parallel Computing, Linear Algebra, Probability & Statistics",
              "Minors: Physics, Astronomy",
              "GPA: 3.87/4.0",
            ]}
          />
          {/* AboutCard for Skillsets */}
          <AboutCard
            icon={
              <svg
                className="w-6 h-6 text-cyan-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            }
            title="Skillsets"
            subtitle="Technical Proficiencies"
            details={[
              "Full-stack Development",
              "DevOps & Infrastructure",
              "Cloud & Distributed Computing",
              "Data Science",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
