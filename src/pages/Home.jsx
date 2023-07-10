import profile from "../assets/images/profile.jpeg";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <img
        src={profile}
        alt="Ramin"
        className="rounded-full w-[230px] h-[230px] object-cover border-4 border-grey"
      />

      <div className="uppercase text-2xl font-bold text-center p-6">
        <h1 className="text-orange">i{`'`}m ramin mikayilov.</h1>
        <h2 className="text-grey-dark">web developer</h2>
      </div>

      <p className="font-light text-grey-dark text-center max-w-[90%]">
        Highly motivated and detail-oriented web developer with experience in
        building responsive and mobile-first websites.
      </p>

      <button className="button mt-5 uppercase relative font-semibold text-grey-dark border-orange hover:text-white duration-300 border-2 rounded-full py-4 pl-8 pr-16">
        more about me
        <span className="p-5 bg-orange text-white absolute right-[-1px] top-[-1px] rounded-full">
          <FaArrowRight className="text-lg font-bold rounded-full" />
        </span>
      </button>
    </div>
  );
};

export default Home;
