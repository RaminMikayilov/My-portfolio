import Personalinfos from "../components/About/Personalinfos";
import Skills from "../components/About/Skills";
import Experience from "../components/About/Experience";

const About = () => {
  return (
    <div className="mb-24 px-5 max-w-[1200px] mx-auto">
      <Personalinfos />
      <hr className="w-1/2 mx-auto my-16" />
      <Skills />
      <hr className="w-1/2 mx-auto my-16" />
      <Experience />
    </div>
  );
};

export default About;
