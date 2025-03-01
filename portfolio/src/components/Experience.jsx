import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
          Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Job Title 1
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Company Name 1
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Description of job responsibilities and achievements.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Job Title 2
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Company Name 2
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Description of job responsibilities and achievements.
            </p>
          </div>
          {/* Add more experience items as needed */}
        </div>
      </div>
    </section>
  );
};

export default Experience;
