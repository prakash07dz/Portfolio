import { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Airbnb Clone",
    image: "/images/airbnb.png",
    description:
      "A fully functional Airbnb clone with booking, authentication, and payments.",
    liveLink: "https://airbnb-clone-obo8.onrender.com/listings",
    sourceCode: "https://github.com/prakash07dz/Airbnb-Clone",
  },
  {
    id: 2,
    title: "GitHub Clone",
    image: "/images/github.png",
    description:
      "A GitHub-like platform with repository management and version control features.",
    liveLink: "https://githubclone-soob.onrender.com/",
    sourceCode: "https://github.com/prakash07dz/Github-Clone",
  },
  {
    id: 3,
    title: "Zoom Clone",
    image: "/images/zoom.png",
    description:
      "A video conferencing app similar to Zoom with real-time chat and screen sharing.",
    liveLink: "https://zoom-clone-frontend-0ztm.onrender.com",
    sourceCode: "https://github.com/prakash07dz/Zoom-Clone",
  },
  {
    id: 4,
    title: "Task Management Dashboard",
    image: "/images/task-management.png",
    description:
      "Task management dashboard with drag-and-drop functionality for organizing tasks efficiently.",
    liveLink: "https://prakash07dz.github.io/Task-Management-Dashboard/",
    sourceCode: "https://github.com/prakash07dz/Task-Management-Dashboard",
  },
  {
    id: 5,
    title: "Animated Fruit Juice Website",
    image: "/images/cool-crush.png",
    description:
      "Cool Crush is a vibrant and engaging fruit juice website featuring stunning animations that bring freshness to life.",
    liveLink:
      "https://prakash07dz.github.io/Cool-Crush-3D-Fruit-juice-website-/",
    sourceCode:
      "https://github.com/prakash07dz/Cool-Crush-3D-Fruit-juice-website-",
  },
  {
    id: 6,
    title: "Professional Business Website",
    image: "/images/business-website.png",
    description:
      "A sleek and responsive business website featuring essential sections and showcases your company's expertise.",
    liveLink: "https://prakash07dz.github.io/Business-Website-Landing-Page/",
    sourceCode: "https://github.com/prakash07dz/Business-Website-Landing-Page",
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

      <div className="max-w-6xl mx-auto px-6">
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
                  Try it Live
                </a>
                <a
                  href={project.sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all"
                >
                  View Code
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
