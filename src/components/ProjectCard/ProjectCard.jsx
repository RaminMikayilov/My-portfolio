import "./project.css";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";

const ProjectCard = ({ name, image, github, live }) => {
  return (
    <div className="project__card p-5 mb-10 w-[270px] xs:w-[300px] sm:w-[260px] md:w-[290px] xl:w-[300px] 2xl:w-[320px] border-2 border-orange rounded-xl hover:shadow-lg duration-300 mx-auto">
      <img src={image} alt={name} className="rounded-xl" />
      <div className="font-medium flex justify-between items-center mt-5">
        <h1>{name}</h1>
        <span className="flex gap-x-2 text-2xl">
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white hover:bg-orange duration-300 p-2 bg-grey rounded-full"
          >
            <FaGithub />
          </a>
          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white hover:bg-orange duration-300 p-2 bg-grey rounded-full"
          >
            <BiLinkExternal />
          </a>
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
