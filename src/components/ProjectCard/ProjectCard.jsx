import "./project.css";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";

const ProjectCard = ({ name, image, github, live }) => {
  return (
    <div className="project__card mb-10 rounded-md hover:shadow-md duration-300 mx-auto cursor-pointer">
      <img src={image} alt={name} />
      <div className="flex justify-between items-center p-3 bg-grey">
        <h1 className="font-medium ">{name}</h1>
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
