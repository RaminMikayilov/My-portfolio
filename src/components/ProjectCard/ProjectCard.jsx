import "./project.css";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";

const ProjectCard = ({ name, image, github, live }) => {
  return (
    <div className="project__card mb-10 shadow-sm hover:shadow-md duration-300 rounded-lg cursor-pointer">
      <div className="overflow-hidden">
        <img src={image} alt={name} className="rounded-t-lg" />
      </div>
      <div className="flex justify-between items-center p-4 bg-grey dark:bg-navbg rounded-b-lg border-t-[5px] border-orange">
        <h1 className="font-semibold">{name}</h1>
        <span className="flex gap-x-2 text-2xl">
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white hover:bg-orange duration-300 p-2 bg-slate-300 rounded-full dark:bg-dgrey dark:hover:bg-orange dark:hover:text-white"
          >
            <FaGithub />
          </a>
          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white hover:bg-orange duration-300 p-2 bg-slate-300 rounded-full dark:bg-dgrey dark:hover:bg-orange dark:hover:text-white"
          >
            <BiLinkExternal />
          </a>
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
