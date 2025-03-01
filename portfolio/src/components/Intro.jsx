import React from "react";
import avatarImage from "../assets/avatar.jpeg"; // Import the image

const Intro = () => {
    const handleButtonClick = (target) => {
        if (target === "contact") {
            document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
        } else {
            window.open(target, "_blank");
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center py-20 bg-gray-900">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <div className="relative w-96 h-96 mx-auto">
                        {/* Glowing circle behind avatar */}
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
                        {/* Avatar container */}
                        <div className="relative w-full h-full rounded-full border-2 border-cyan-500 overflow-hidden">
                            {/* Add your image here */}
                            <img
                                src={avatarImage} // Use the imported image
                                alt="Avatar"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                <div className="md:w-1/2 text-center md:text-left">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
                            Hello, I'm Tam Nguyen
                        </span>
                    </h1>
                    <div className="space-y-2 mb-6">
                        <p className="text-xl text-gray-300">
                            Software Engineer • AI Research Student{" "}
                        </p>
                        <p className="text-gray-400 max-w-lg">
                            I love researching, building, and shipping!
                        </p>
                        <p className="text-gray-400 max-w-lg italic">
                            "Life-long learning is the only way to discover the truth of the
                            world."
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                        <button
                            className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-colors duration-300 flex items-center"
                            onClick={() => handleButtonClick("https://drive.google.com/file/d/1Z3aU_kVYlYiI_Hzx-HqRCQepO2HmZkLk/view?usp=sharing")}
                        >
                            <svg
                                className="w-5 h-5 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V3"
                                ></path>
                            </svg>
                            Resume
                        </button>
                        <button
                            className="px-6 py-3 border border-cyan-600 text-cyan-400 hover:bg-cyan-600/10 rounded-lg transition-colors duration-300"
                            onClick={() => handleButtonClick("contact")}
                        >
                            Contact Me
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;
