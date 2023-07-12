import skills from "../../data/skills.json";

// Import react-circular-progressbar module and styles
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Skills = () => {
  return (
    <div className="text-grey-dark ">
      <h2 className="uppercase text-xl font-semibold mb-10">my skills</h2>
      <div className="grid grid-cols-2 gap-y-8">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center space-y-3">
            <div className="w-[100px] font-medium">
              <CircularProgressbar
                value={skill.percentage}
                text={`${skill.percentage}%`}
                strokeWidth={7}
                styles={buildStyles({
                  textColor: "#666",
                  pathColor: "#FFB400",
                  trailColor: "#EEE",
                })}
              />
            </div>
            <div className="uppercase">{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
