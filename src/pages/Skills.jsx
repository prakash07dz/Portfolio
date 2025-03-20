import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaReact,
  FaDatabase,
  FaFigma,
  FaAws,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiBootstrap,
  SiJest,
  SiCypress,
  SiRender,
  SiNetlify,
  SiRedux,
  SiPostman,
  SiDocker,
  SiGithubactions,
  SiCloudinary,
} from "react-icons/si";

const skillsData = {
  Technologies: [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" />, level: 90 },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" />, level: 85 },
    {
      name: "JavaScript",
      icon: <FaJs className="text-yellow-500" />,
      level: 70,
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-green-500" />,
      level: 65,
    },
    { name: "SQL", icon: <FaDatabase className="text-blue-400" />, level: 60 },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-400" />,
      level: 65,
    },
  ],
  Frameworks: [
    {
      name: "Express.js",
      icon: <SiExpress className="text-gray-500" />,
      level: 60,
    },
    {
      name: "React.js",
      icon: <FaReact className="text-blue-400" />,
      level: 70,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-cyan-400" />,
      level: 70,
    },
    {
      name: "Bootstrap",
      icon: <SiBootstrap className="text-purple-500" />,
      level: 65,
    },
  ],
  Tools: [
    { name: "Figma", icon: <FaFigma className="text-pink-500" />, level: 40 },
    { name: "Jest", icon: <SiJest className="text-red-500" />, level: 40 },
    {
      name: "Cypress",
      icon: <SiCypress className="text-green-500" />,
      level: 45,
    },
    {
      name: "Postman",
      icon: <SiPostman className="text-orange-500" />,
      level: 75,
    },
    { name: "Docker", icon: <SiDocker className="text-blue-500" />, level: 50 },
    {
      name: "Cloudinary",
      icon: <SiCloudinary className="text-yellow-500" />,
      level: 55,
    },
  ],
  Deployment: [
    { name: "Render", icon: <SiRender className="text-blue-500" />, level: 80 },
    {
      name: "Netlify",
      icon: <SiNetlify className="text-teal-500" />,
      level: 75,
    },
    {
      name: "AWS",
      icon: <FaAws className="text-orange-500" />,
      level: 50,
    },
  ],
  "Version Control": [
    { name: "Git", icon: <FaGitAlt className="text-orange-500" />, level: 70 },
    { name: "GitHub", icon: <FaGithub className="text-white" />, level: 85 },
    {
      name: "GitHub Actions",
      icon: <SiGithubactions className="text-purple-500" />,
      level: 60,
    },
  ],
  "State Management": [
    { name: "Redux", icon: <SiRedux className="text-purple-500" />, level: 65 },
    {
      name: "Context API",
      icon: <FaReact className="text-blue-400" />,
      level: 60,
    },
  ],
  Authentication: [
    { name: "JWT", icon: <FaDatabase className="text-blue-400" />, level: 65 },
    {
      name: "bcrypt.js",
      icon: <FaDatabase className="text-green-400" />,
      level: 60,
    },
  ],
  Spoken_Languages: [
    { name: "English", level: 65 },
    { name: "Hindi", level: 85 },
    { name: "Gujrati", level: 95 },
  ],
};

const barVariants = {
  hidden: { width: "0%" },
  visible: (level) => ({
    width: `${level}%`,
    transition: { duration: 1.2, ease: "easeInOut" },
  }),
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-800 text-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          My Skills
        </h2>
        <p className="text-lg mt-2 text-gray-400">
          Here are some of the technologies I work with
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-6">
        {Object.entries(skillsData).map(([category, skills], index) => (
          <div key={index} className="mb-10">
            <h3 className="text-2xl font-semibold text-blue-400 mb-4">
              {category.replace("_", " ")}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {skills.map((skill, i) => (
                <div key={i}>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <h4 className="text-lg font-medium">{skill.name}</h4>
                  </div>
                  <motion.div
                    className="w-full h-3 bg-gray-700 rounded-full mt-2 overflow-hidden"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={skill.level}
                    variants={barVariants}
                  >
                    <div
                      className="h-full bg-blue-500 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    />
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
