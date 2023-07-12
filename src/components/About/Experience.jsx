import education from "../../data/education";
import experience from "../../data/experience";
import { FaBriefcase } from "react-icons/fa";

const Experience = () => {
  return (
    <div className="text-grey-dark">
      <h1 className="text-xl font-semibold uppercase mb-10">
        Experience & education
      </h1>

      {/* experince */}
      <div className="space-y-12 uppercase">
        {experience.map((exp, index) => (
          <div key={index} className="flex items-start">
            <div className="p-3 text-xl rounded-full bg-orange text-white relative after:content-[''] after:absolute after:top-[100%] after:left-1/2 after:bg-[#ddd] after:w-[2px] after:h-[65px]">
              {<FaBriefcase />}
            </div>
            <div className="px-4 space-y-4">
              <span className="bg-grey text-xs font-medium rounded-full px-2 py-1">
                {exp.time}
              </span>
              <h2 className="font-semibold">{exp.title}</h2>
              <p>{exp.company}</p>
            </div>
          </div>
        ))}
      </div>

      {/* education */}
      <div className="space-y-12 uppercase mt-12">
        {education.map((edu, index) => (
          <div key={index} className="flex items-start">
            <div className="p-3 text-xl rounded-full bg-orange text-white relative after:content-[''] after:absolute after:top-[100%] after:left-1/2 after:bg-[#ddd] after:w-[2px] after:h-[65px]">
              {<FaBriefcase />}
            </div>
            <div className="px-4 space-y-4">
              <span className="bg-grey text-xs font-medium rounded-full px-2 py-1">
                {edu.time}
              </span>
              <h2 className="font-semibold">
                {edu.degree} - <span className="font-normal">{edu.school}</span>
              </h2>
              <p className="text-sm">{edu.major}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
