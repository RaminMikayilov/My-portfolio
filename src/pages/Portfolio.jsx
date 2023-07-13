import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import CoolButton from "../components/CoolButton/CoolButton";
import { FaEye } from "react-icons/fa";

const Portfolio = () => {
  return (
    <div className="text-grey-dark mb-24 lg:mb-16 px-5 max-w-[1200px] mx-auto">
      <h1 className="uppercase text-center text-3xl xs:text-4xl sm:text-6xl font-extrabold py-20">
        my <span className="text-orange">portfolio</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

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
    </div>
  );
};

export default Portfolio;
