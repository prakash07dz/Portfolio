import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gray-800 text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          Who Am I?
        </h2>
        <p className="mt-6 text-lg leading-relaxed">
          I'm an{" "}
          <span className="text-blue-400 font-semibold">
            {" "}
            undergraduate Computer Science student{" "}
          </span>{" "}
          at{" "}
          <span className="text-blue-400 font-semibold">
            {" "}
            Gokul Global University, Siddhpur{" "}
          </span>
          . I've participated in several hackathons, including{" "}
          <span className="text-blue-400 font-semibold">SSIP</span> and{" "}
          <span className="text-blue-400 font-semibold">HTM</span>, where I
          contributed as a{" "}
          <span className="text-blue-400 font-semibold">front-end</span> and{" "}
          <span className="text-blue-400 font-semibold">
            {" "}
            full-stack developer
          </span>
          .
        </p>
        <p className="mt-4 text-lg leading-relaxed">
          I'm passionate about technology and how it's reshaping the world. I've
          gained practical experience with the{" "}
          <span className="text-blue-400 font-semibold">MERN Stack</span>{" "}
          through personal projects and coursework, and I'm eager to expand my
          skills further.
        </p>
        <p className="mt-4 text-lg leading-relaxed">
          {" "}
          Outside of coding, I enjoy{" "}
          <span className="text-blue-400 font-semibold">
            {" "}
            listening to music{" "}
          </span>
          and <span className="text-blue-400 font-semibold">traveling</span>,
          always looking for new adventures and opportunities that align with my
          passion and skills.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
