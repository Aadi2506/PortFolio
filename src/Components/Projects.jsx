import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion'; // Import Framer Motion
import { FaReact, FaNodeJs, FaJs, FaDatabase, FaPython, FaJava } from 'react-icons/fa'; // Import tech stack icons
import { SiMongodb, SiNextdotjs, SiExpress, SiTypescript, SiTailwindcss, SiMysql, SiFlask, SiSpringboot } from 'react-icons/si';

const projects = [
  {
    title: 'Digimarket – Farmer to Consumer Marketplace',
    description: 'Web-based marketplace connecting farmers with consumers. Integrated ML for product recommendation and demand prediction.',
    image: '/images/farm.png',
    demoLink: '',
    techStack: [<FaPython />, <SiFlask />, <FaDatabase />],
  },
  {
    title: 'College Internship Management System (CIMS)',
    description: 'Web-based system for internship management with application tracking, resume uploads, and real-time status updates.',
    image: '/images/initernship.png',
    demoLink: '',
    techStack: [<FaJava />, <SiMysql />, <FaDatabase />],
  },
  {
    title: 'Complaint Management System',
    description: 'System for managing and tracking complaints with real-time updates and resolution tracking.',
    image: '/images/complain.png',
    demoLink: '',
    techStack: [<FaJava />, <SiSpringboot />, <SiMysql />, <FaDatabase />],
  },
];

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }} // Slightly enlarge on hover
      whileTap={{ scale: 0.95 }} // Slightly shrink on tap
      initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and move up
      animate={{ opacity: 1, y: 0 }} // Animate to full opacity and original position
      transition={{ duration: 0.5, ease: 'easeOut' }} // Smooth transition
    >
      <Card>
        <div className="card-img">
          <div
            className="img"
            style={{ backgroundImage: `url(${project.image})` }}
          />
        </div>
        <div className="card-title">{project.title}</div>
        <div className="card-subtitle">{project.description}</div>
        <hr className="card-divider" />
        <div className="tech-stack">
          {project.techStack.map((icon, index) => (
            <span key={index} className="tech-icon">
              {icon}
            </span>
          ))}
        </div>
      </Card>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <ProjectsWrapper>
      <ProjectTitle>My Projects</ProjectTitle>
      <ProjectsContainer>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </ProjectsContainer>
    </ProjectsWrapper>
  );
};

const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 30px;
  background: url('https://shivangvora.vercel.app/static/media/game-bg-2-m.f2cf1302dfcdc832463e.gif');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  min-height: 100vh; /* Ensures the section takes at least the full viewport height */
  overflow-y: auto; /* Enables vertical scrolling if content overflows */
  box-sizing: border-box; /* Ensures padding is included in height calculations */
`;

const ProjectTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 20px;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  width: 100%;
`;

const Card = styled.div`
  --font-color: #323232;
  --font-color-sub: #666;
  --bg-color: #fff;
  --main-color: #323232;
  --main-focus: #2d8cf0;

  width: 300px;
  height: 400px;
  background: var(--bg-color);
  border: 2px solid var(--main-color);
  box-shadow: 4px 4px var(--main-color);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px;
  gap: 10px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  .card-img {
    width: 100%;
    height: 150px;
    border-radius: 5px;
    overflow: hidden;
  }

  .img {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
  }

  .card-title {
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    color: var(--font-color);
  }

  .card-subtitle {
    font-size: 14px;
    font-weight: 400;
    color: var(--font-color-sub);
    text-align: center;
  }

  .card-divider {
    width: 100%;
    border: 1px solid var(--main-color);
    border-radius: 50px;
  }

  .card-footer {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card-btn {
    height: 35px;
    background: var(--bg-color);
    border: 2px solid var(--main-color);
    border-radius: 5px;
    padding: 0 15px;
    text-decoration: none;
    color: var(--main-color);
    font-weight: 500;
    transition: all 0.3s;
    text-align: center;
    line-height: 35px;
  }

  .card-btn:hover {
    border-color: var(--main-focus);
    color: var(--main-focus);
  }

  .card-btn:active {
    transform: translateY(3px);
  }

  .tech-stack {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 10px;
  }

  .tech-icon {
    font-size: 20px;
    color: var(--main-color);
    transition: color 0.3s;
  }

  .tech-icon:hover {
    color: var(--main-focus);
  }
`;

export default Projects;
