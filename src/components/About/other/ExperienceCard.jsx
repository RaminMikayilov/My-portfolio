import { FaBriefcase } from "react-icons/fa";

const ExperienceCard = ({ time, text1, text2, text3 }) => {
  return (
    <div className="flex items-start">
      <div className="p-3 text-xl rounded-full bg-orange text-white relative after:content-[''] after:absolute after:top-[100%] after:left-1/2 after:bg-[#ddd] dark:after:bg-dgrey after:w-[2px] after:h-[65px]">
        {<FaBriefcase />}
      </div>
      <div className="px-4 space-y-4">
        <span className="bg-grey dark:bg-navbg text-xs font-medium rounded-full px-2 py-1">
          {time}
        </span>
        <h2 className="font-semibold">
          {text1} {text2 && <span className="font-normal">- {text2}</span>}
        </h2>
        <p>{text3}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
