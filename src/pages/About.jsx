import Personalinfos from "../components/About/Personalinfos";
import Skills from "../components/About/Skills";

const About = () => {
  return (
    <div className="mb-24 px-5">
      <Personalinfos />
      <hr className="w-1/2 mx-auto my-16" />
      <Skills />
    </div>
  );
};

export default About;
