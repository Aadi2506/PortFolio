import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaJava
} from "react-icons/fa";
import {
  SiJavascript,
  // SiTailwindcss,
  SiMongodb,
  // SiExpress,
  // SiFirebase,
  SiMysql,
} from "react-icons/si";

const technologies = [
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  // { name: "Express", icon: <SiExpress className="text-gray-300" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "MySQL", icon: <SiMysql className="text-black-500" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "GitHub", icon: <FaGithub className="text-white" /> }, // Moved GitHub below JavaScript
  { name: "Java", icon: <FaJava className="text-sky-400" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
];

const Technologies = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center text-white py-16 px-6"
      style={{
        backgroundImage:
          "url('https://dijorajsenroy.github.io/pixel-themed-portfolio/assets/556534.jpg')",
      }}
    >
      {/* OUTER DOTTED BORDER */}
      <div className="border-4 border-dotted border-white rounded-3xl p-2">
        {/* INNER CONTENT */}
        <div className="bg-black/60 rounded-2xl p-8">
          <h2 className="text-3xl md:text-5xl vt323-font text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            Technology Arsenal 
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                animate={{
                  y: [0, -5, 0], // Moves the icon up and down
                }}
                transition={{
                  duration: 2, // Duration of the animation
                  repeat: Infinity, // Infinite loop
                  repeatType: "loop", // Smooth looping
                }}
                className="w-24 h-24 md:w-28 md:h-28 flex flex-col items-center justify-center rounded-2xl shadow-lg shadow-black/40 transition-all hover:shadow-pink-500/30 backdrop-blur"
              >
                <div className="text-3xl md:text-4xl mb-2">{tech.icon}</div>
                <p className="text-sm font-medium text-center">{tech.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
