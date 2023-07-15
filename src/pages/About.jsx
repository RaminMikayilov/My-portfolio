import Personalinfos from "../components/About/Personalinfos";
import Skills from "../components/About/Skills";
import Experience from "../components/About/Experience";

const About = () => {
  return (
    <div className="pb-24 lg:pb-16 px-5 max-w-[1200px] mx-auto">
      <Personalinfos />
      <div className="w-[40%] mx-auto my-16 lg:my-[73px] border-t-[1px] border-grey dark:border-dgrey"></div>
      <Skills />
      <div className="w-[40%] mx-auto my-16 lg:my-[73px] border-t-[1px] border-grey dark:border-dgrey"></div>
      <Experience />
    </div>
  );
};

export default About;
