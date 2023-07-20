import profile from "../assets/images/profile.jpeg";
import { FaArrowRight } from "react-icons/fa";
import CoolButton from "../components/CoolButton/CoolButton";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col items-center justify-center lg:flex-row lg:justify-around lg:pr-8 xl:pr-12 2xl:pr-20 pb-20 xs:pb-0"
    >
      <img
        src={profile}
        alt="Ramin"
        className="shadow-xl rounded-full w-[230px] h-[230px] sm:w-[270px] sm:h-[270px] object-cover border-4 border-grey dark:border-dgrey md:mb-3 lg:rounded-3xl lg:border-none lg:w-[360px] xl:w-[430px] 2xl:w-[470px] lg:h-[88vh] lg:mb-0 z-10"
      />

      <div className="flex items-center flex-col lg:items-start lg:max-w-[500px] xl:max-w-[580px] 2xl:max-w-[620px]">
        <div className="uppercase text-2xl sm:text-3xl md:text-4xl lg:text-[40px] sm:tracking-wide font-bold text-center lg:text-start py-6 sm:py-7 sm:space-y-1 md:space-y-2 lg:space-y-3">
          <h1 className="text-orange">i{`'`}m ramin mikayilov.</h1>
          <h2>web developer</h2>
        </div>

        <p className="font-normal text-sm lg:text-lg leading-7 lg:leading-10 text-center lg:text-start mb-6 sm:mb-7 max-w-[90%] sm:max-w-[75%] md:max-w-[65%] lg:max-w-[90%]">
          Highly motivated and detail oriented web developer with{" "}
          <span className="text-orange">1+ years of experience</span> building
          responsive and mobile first websites.
        </p>

        <Link to="/about">
          <CoolButton text="more about me" Icon={FaArrowRight} />
        </Link>
      </div>

      {/* polygon for background */}
      <div className="hidden lg:block [clip-path:polygon(0%_0%,47%_0%,100%_100%,0%_100%)] bg-orange lg:w-[340px] xl:w-[370px] 2xl:w-[400px] h-screen absolute left-0"></div>
    </motion.div>
  );
};

export default Home;
