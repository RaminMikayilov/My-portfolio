import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import CoolButton from "../components/CoolButton/CoolButton";
import { FaEye } from "react-icons/fa";
import { motion } from "framer-motion";

const Portfolio = () => {
  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="pb-24 lg:pb-16 px-5 max-w-[1200px] mx-auto"
    >
      <h1 className="uppercase text-center text-3xl xs:text-4xl sm:text-6xl font-extrabold py-20">
        my <span className="text-orange">portfolio</span>
      </h1>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7 xl:gap-8"
      >
        {projects.map((project, index) => (
          <motion.div variants={item} key={index}>
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.div>

      <div className="flex">
        <a
          href="https://github.com/RaminMikayilov"
          target="_blank"
          rel="noreferrer"
          className="ml-auto sm:mr-4"
        >
          <CoolButton text="see more projects" Icon={FaEye} />
        </a>
      </div>
    </motion.div>
  );
};

export default Portfolio;
