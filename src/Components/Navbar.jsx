"use client";
import React, { useState, useEffect } from "react";
import { IconMenu2 } from "@tabler/icons-react";
import { Link } from "react-scroll";
import styled, { createGlobalStyle } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Button from './Button';
import Typewriter from "typewriter-effect"; // Import Typewriter

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

  .vt323-font {
    font-family: 'VT323', monospace;
  }
`;

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <GlobalStyle />
      <div
        className="relative h-screen w-full text-white"
        style={{
          backgroundImage: `url('https://i.pinimg.com/originals/52/9c/49/529c49e9164d33dd37bdc658d9a807f5.gif')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Navbar */}
        <nav
          className={`fixed top-0 left-0 w-full z-50 px-10 py-4 transition-all duration-300 ${
            isScrolled ? "bg-black bg-opacity-50 backdrop-blur-md" : "bg-transparent"
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo Text */}
            <div className="text-xs md:text-lg text-stone-100 ">
              Aditya Jadhav
            </div>

            {/* Navigation Links for Desktop */}
            <ul className="hidden md:flex space-x-8 text-black">
              {["Home", "About", "Technologies", "Projects", "Contact"].map(
                (item, index) => (
                  <li key={index}>
                    <Link
                      to={item.toLowerCase()}
                      smooth={true}
                      duration={500}
                      className="text-white text-sm vt323-font tracking-wide relative group cursor-pointer"
                    >
                      {item}
                      <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-stone-400 transition-all duration-300 group-hover:w-full" />
                    </Link>
                  </li>
                )
              )}
            </ul>

            {/* Mobile Menu Icon */}
            <div
              className="md:hidden text-white cursor-pointer"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} // Toggle mobile menu
            >
              <IconMenu2 className="h-6 w-6" />
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="absolute top-16 left-0 w-full bg-black bg-opacity-90 text-white flex flex-col items-center space-y-4 py-4">
              {["Home", "About", "Technologies",  "Projects", "Contact"].map(
                (item, index) => (
                  <Link
                    key={index}
                    to={item.toLowerCase()}
                    smooth={true}
                    duration={500}
                    className="text-white text-lg vt323-font cursor-pointer"
                    onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
                  >
                    {item}
                  </Link>
                )
              )}
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <div className="relative z-10 flex flex-col items-center justify-center h-[calc(100vh-80px)] text-center text-white">
          <h1 className="text-2xl md:text-4xl vt323-font animate-fade-in-up">
            <Typewriter
              options={{
                strings: ["Hi, I'm Aditya Jadhav..."],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="mt-4 text-2xl text-black max-w-xl animate-fade-in-up delay-300 vt323-font">
            Portfolio that builds blazing-fast, visually stunning tech experiences with modern web technologies.
          </p>

          {/* Resume Button */}
          <StyledWrapper className="mt-10 animate-fade-in-up delay-300">
            <Button>
              <a
                href="https://onedrive.live.com/your-onedrive-link" // Replace with your actual OneDrive link
                target="_blank" // Opens the link in a new tab
                rel="noopener noreferrer" // Improves security
                className="flex items-center space-x-2"
              >
                <span>Download Resume</span>
              </a>
            </Button>
          </StyledWrapper>

          {/* Social Icons */}
          <div className="mt-6 flex space-x-6">
            <a
              href="https://www.linkedin.com/in/aditya-jadhav25/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a
              href="https://github.com/Aadi2506"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a
              href="https://www.instagram.com/aaditya_rajput2546/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-400"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>

          {/* Scroll Down Arrow */}
          <div className="mt-10 animate-bounce cursor-pointer">
            <Link to="about" smooth={true} duration={500}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

const StyledWrapper = styled.div`
  button {
    display: flex;
    align-items: center;
    font-family: inherit;
    cursor: pointer;
    font-weight: 500;
    font-size: 13px;
    padding: 0.8em 1.3em 0.8em 0.9em;
    color: white;
    background: transparent;
    border: 2px solid white;
    letter-spacing: 0.05em;
    border-radius: 16px;
    transition: background 0.3s, color 0.3s;
  }

  button:hover {
    background: white;
    color: black;
  }

  button svg {
    margin-right: 3px;
    transform: rotate(30deg);
    transition: transform 0.5s cubic-bezier(0.76, 0, 0.24, 1);
  }

  button span {
    transition: transform 0.5s cubic-bezier(0.76, 0, 0.24, 1);
  }

  button:hover svg {
    transform: translateX(5px) rotate(90deg);
  }

  button:hover span {
    transform: translateX(7px);
  }
`;

export default Navbar;
