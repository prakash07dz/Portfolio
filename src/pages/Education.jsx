import { motion } from "framer-motion";

const educationData = [
  {
    title: "10th Standard",
    year: "March 2019",
    percentage: "75.05%",
  },
  {
    title: "12th Standard",
    year: "May 2021",
    percentage: "72.05%",
  },
  {
    title: "BCA - Gokul Global University",
    year: "Currently in 6th Sem",
    percentage: "5th Sem: 90.05%",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-900 text-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          My Education
        </h2>
        <p className="text-lg mt-2 text-gray-400">
          A brief overview of my academic journey
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 max-w-6xl mx-auto">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="p-6 bg-gray-800 rounded-lg shadow-lg text-center border border-gray-700 transform hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <h3 className="text-2xl font-semibold text-blue-400">
              {edu.title}
            </h3>
            <p className="mt-2 text-lg ">
              <span className="font-bold text-blue-300">Year:</span> {edu.year}
            </p>
            <p className="mt-2 text-lg">
              <span className="font-bold text-blue-300">Percentage:</span>{" "}
              {edu.percentage}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
export default Education;
