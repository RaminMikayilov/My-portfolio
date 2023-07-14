import education from "../../data/education";
import experience from "../../data/experience";
import ExperienceCard from "./other/ExperienceCard";

const Experience = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold uppercase mb-10 sm:mb-12 sm:text-2xl md:text-[26px] sm:text-center">
        Experience & education
      </h2>

      <div className="grid grid-col-1 lg:grid-cols-2">
        {/* experince */}
        <div className="space-y-12 uppercase">
          {experience.map((exp, index) => (
            <ExperienceCard
              key={index}
              time={exp.time}
              text1={exp.title}
              text3={exp.company}
            />
          ))}
        </div>

        {/* education */}
        <div className="space-y-12 uppercase mt-16 lg:mt-0">
          {education.map((edu, index) => (
            <ExperienceCard
              key={index}
              time={edu.time}
              text1={edu.degree}
              text2={edu.school}
              text3={edu.major}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
