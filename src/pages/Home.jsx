import profile from "../assets/images/profile.jpeg";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center lg:flex-row lg:justify-around lg:pr-8 xl:pr-12 2xl:pr-20">
      <img
        src={profile}
        alt="Ramin"
        className="rounded-full w-[230px] h-[230px] sm:w-[270px] sm:h-[270px] object-cover border-4 border-grey md:mb-3 lg:rounded-3xl lg:border-none lg:w-[360px] xl:w-[420px] 2xl:w-[450px] lg:h-[88vh] lg:mb-0"
      />

      <div className="flex items-center flex-col lg:items-start lg:max-w-[500px] xl:max-w-[580px] 2xl:max-w-[620px]">
        <div className="uppercase text-2xl sm:text-3xl md:text-4xl lg:text-[40px] sm:tracking-wide font-bold text-center lg:text-start py-6 sm:py-7 sm:space-y-1 md:space-y-2 lg:space-y-3">
          <h1 className="text-orange">i{`'`}m ramin mikayilov.</h1>
          <h2 className="text-grey-dark">web developer</h2>
        </div>

        <p className="font-normal text-sm lg:text-lg leading-7 lg:leading-10 text-grey-dark text-center lg:text-start mb-6 sm:mb-7 max-w-[90%] sm:max-w-[75%] md:max-w-[65%] lg:max-w-[90%]">
          Highly motivated and detail oriented web developer with{" "}
          <span className="text-orange">1+ years of experience</span> building
          responsive and mobile first websites.
        </p>

        <button className="button uppercase font-semibold text-grey-dark border-orange hover:text-white duration-300 border-2 rounded-full py-4 pl-8 pr-16">
          more about me
          <span className="p-5 bg-orange text-white absolute right-[-1px] top-[-1px] rounded-full">
            <FaArrowRight className="text-lg font-bold rounded-full" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Home;
