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
          A man with multiple passions. Curious about everything, I build to
          learn and learn to build.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
            title="Bachelor in Computer Science"
            subtitle="University of South Florida"
            details={[
              "Specialties: Infrastructure & Data Science",
              "Minors: Physics, Astronomy",
              "Expected: May 2026",
              "GPA: 3.87/4.0",
            ]}
          />
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
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            }
            title="Other Interests"
            subtitle="Beyond Coding"
            details={["Writing", "Open Science", "Accessible Education"]}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
