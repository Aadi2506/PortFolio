"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const bioLines = [
  'const bio = {',
  '  college: "R. C. Patel Institute of Technology, Shirpur",',
  '  branch: "Computer Engineering",',
  '  year: "Final Year",',
  '  skills: ["Java", "MERN", "C", "And Many More..."]',
  '};',
];

export default function About() {
  const [displayedText, setDisplayedText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentLine = bioLines[lineIndex];
    if (charIndex < currentLine.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentLine[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 30);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + "\n");
        setLineIndex((prev) => (prev + 1) % bioLines.length);
        setCharIndex(0);
        if (lineIndex === bioLines.length - 1) {
          setDisplayedText("");
        }
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, lineIndex]);

  return (
    <div
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden px-6"
      style={{
        fontFamily: "'Orbitron', sans-serif",
        backgroundImage:
          "url('https://user-images.githubusercontent.com/74038190/225813708-98b745f2-7d22-48cf-9150-083f1b00d6c9.gif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 z-0 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-7xl">
        {/* Left Text */}
        <motion.div
          className="text-white max-w-2xl md:ml-10 text-center md:text-left px-4 md:px-0"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl md:text-5xl font-light mb-4 text-stone-200 mrs-saint-delafield-regular">
            Hey👋🏻 It's About Me...
          </h1>
          <p className="text-base md:text-xl text-gray-300 mb-6 mrs-saint-delafield-regular">
            Full Stack Developer
          </p>

          {/* Code-styled Bio with Mac-like circles */}
          <div className="bg-[#1e1e2f] rounded-xl p-4 pt-6 relative text-left text-sm md:text-base text-green-400 font-mono shadow-xl w-full max-w-md h-52 overflow-hidden">
            {/* Mac window control dots */}
            <div className="absolute top-2 left-3 flex gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500" />
              <span className="w-3 h-3 rounded-full bg-yellow-400" />
              <span className="w-3 h-3 rounded-full bg-green-500" />
            </div>

            <pre className="whitespace-pre-wrap mt-2">
              <code>{displayedText}</code>
            </pre>
          </div>
        </motion.div>

        {/* Right Corner Image */}
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-12 md:mt-0 md:mr-10 flex justify-center"
        >
          <img
            src="profile1.jpeg"
            alt="Aditya Jadhav"
            className="w-72 h-auto md:w-96 md:h-144 rounded-[20px] object-cover shadow-2xl border-4 border-transparent"
          />
        </motion.div>
      </div>
    </div>
  );
}
