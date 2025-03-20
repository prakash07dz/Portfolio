import { useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "A Vacation Rental Platform",
    image: "/images/airbnb.png",
    description:
      "A full-stack web application that enables users to explore, book, and manage vacation rentals. Features include advanced search, detailed listing views, and secure booking management.",
    liveLink: "https://airbnb-clone-sam9.onrender.com",
    sourceCode: "https://github.com/prakash07dz/Airbnb-Clone",
  },
  {
    id: 2,
    title: "A Version Control and Repository Management Platform",
    image: "/images/github.png",
    description:
      "A GitHub-inspired platform with core features like init, add, commit, push, and pull. Integrated with Google Drive API for secure file storage.",
    liveLink: "https://githubclone-soob.onrender.com/",
    sourceCode: "https://github.com/prakash07dz/Github-Clone",
  },
  {
    id: 3,
    title: "A Real-Time Video Conferencing App",
    image: "/images/zoom.png",
    description:
      "A real-time communication platform supporting video calls, screen sharing, and chat functionality. Integrated with WebRTC and Socket.io for seamless connectivity.",
    liveLink: "https://zoom-clone-frontend-0ztm.onrender.com",
    sourceCode: "https://github.com/prakash07dz/Zoom-Clone",
  },
  {
    id: 4,
    title: " A Stock Trading and Portfolio Management System",
    image: "/images/zerodha.png",
    description:
      "A feature-rich trading platform that offers portfolio tracking, real-time charts, and order management. Built with responsive UI and tested using Jest and Cypress for reliability.",
    liveLink: "https://zerodha-clone-frontend-d2dl.onrender.com",
    sourceCode: "https://github.com/prakash07dz/Zerodha-Clone",
  },
  {
    id: 5,
    title: "A Smart Solar Panel Management System",
    image: "/images/devineenergy.png",
    description:
      "A comprehensive web solution for solar panel installations, subsidy applications, and customer management. Includes an admin panel for monitoring applications and updating website content.",
    liveLink: "https://devineenergy.onrender.com/",
    sourceCode:
      "https://github.com/prakash07dz/Devine-Energy-Fullstack-Website",
  },
  {
    id: 6,
    title: "Animated Fruit Juice Website",
    image: "/images/cool-crush.png",
    description:
      "A vibrant and animated e-commerce website showcasing fruit juices. Features engaging UI animations for an interactive and delightful user experience.",
    liveLink:
      "https://prakash07dz.github.io/Cool-Crush-3D-Fruit-juice-website-/",
    sourceCode:
      "https://prakash07dz.github.io/Cool-Crush-Fruit-juice-website-/",
  },
];

const Projects = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          My Projects
        </h2>
        <p className="text-lg mt-2 text-gray-400">Some of my recent work</p>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, showMore ? projects.length : 3).map((project) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg text-center border border-gray-700 transform hover:scale-105 hover:shadow-xl ease-in-out transition-all"
              transition={{ duration: 1 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
              <p className="text-gray-400 text-sm mt-2">
                {project.description}
              </p>
              <div className="mt-4 flex justify-between">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400 transition-all"
                >
                  Live Demo
                </a>
                <a
                  href={project.sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all"
                >
                  Source Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button
            onClick={() => setShowMore(!showMore)}
            className="text-blue-400 hover:underline text-lg cursor-pointer"
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
