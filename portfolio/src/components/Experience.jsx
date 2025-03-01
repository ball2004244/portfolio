import React, { useState } from "react";
import { expTimeIntervals } from "../shared/constant";

const Experience = () => {
  const [activeInterval, setActiveInterval] = useState(expTimeIntervals[0]);

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
          Experience
        </h2>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          My professional journey across industry and academia
        </p>

        <div className="max-w-5xl mx-auto">
          {/* Interactive Timeline */}
          <div className="relative mb-12">
            {/* Timeline Line */}
            <div className="absolute h-1 w-full bg-gray-800 top-7 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
                style={{
                  width: `${
                    (expTimeIntervals.indexOf(activeInterval) /
                      (expTimeIntervals.length - 1)) *
                    100
                  }%`,
                  transition: "width 0.5s ease-in-out",
                }}
              ></div>
            </div>

            {/* Timeline Nodes */}
            <div className="relative flex justify-between items-center">
              {expTimeIntervals.map((interval, index) => (
                <button
                  key={interval.id}
                  onClick={() => setActiveInterval(interval)}
                  className={`
                    w-14 h-14 rounded-full flex items-center justify-center z-10
                    transition-all duration-300 focus:outline-none
                    ${
                      activeInterval.id === interval.id
                        ? "bg-cyan-500 text-white transform scale-110"
                        : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                    }
                  `}
                >
                  <span className="font-bold">{index + 1}</span>
                  <span
                    className={`
                      absolute -bottom-8 text-xs whitespace-nowrap transition-opacity duration-300
                      ${
                        activeInterval.id === interval.id
                          ? "opacity-100"
                          : "opacity-50"
                      }
                    `}
                  >
                    {interval.period}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Time Interval Details */}
          <div className="relative bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden">
            {/* Header */}
            <div className="p-6 bg-gradient-to-r from-gray-800/80 to-gray-900/80 border-b border-gray-700 flex justify-between items-center">
              <h3 className="text-2xl font-bold text-cyan-400">
                {activeInterval.period}
              </h3>
              <span className="text-gray-400 text-sm">
                {activeInterval.experiences.length} position
                {activeInterval.experiences.length !== 1 ? "s" : ""}
              </span>
            </div>

            {/* Multiple Experiences in this time interval */}
            <div className="p-6">
              {activeInterval.experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  className={`${
                    index > 0 ? "mt-8 pt-8 border-t border-gray-700" : ""
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 mr-4">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-white">
                          {exp.title}
                        </h4>
                        <p className="text-cyan-400 text-sm">{exp.company}</p>
                      </div>
                    </div>
                  </div>

                  <div className="ml-14">
                    <p className="text-gray-300 mb-3">{exp.summary}</p>
                    <div className="text-gray-300 mb-4">
                      <span className="text-cyan-400">Achievement:</span>{" "}
                      {exp.highlight}
                    </div>

                    {/* Skills with subtle border */}
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span 
                          key={skill} 
                          className="px-3 py-1 text-sm bg-gray-800 text-cyan-400 rounded-full border border-cyan-500/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-cyan-500/5 to-blue-500/5 rounded-tr-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
