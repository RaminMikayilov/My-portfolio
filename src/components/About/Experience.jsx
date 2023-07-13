import education from "../../data/education";
import experience from "../../data/experience";
import ExperienceCard from "./other/ExperienceCard";

const Experience = () => {
  return (
    <div className="text-grey-dark">
      <h1 className="text-xl font-semibold uppercase mb-10">
        Experience & education
      </h1>

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
      <div className="space-y-12 uppercase mt-12">
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
  );
};

export default Experience;
