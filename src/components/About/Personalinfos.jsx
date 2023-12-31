import profile from "../../assets/images/profile.jpeg";
import { FaDownload } from "react-icons/fa";
import CoolButton from "../CoolButton/CoolButton";
import InfoCard from "./other/InfoCard";
import CV from "../../assets/files/RaminMikayilov.pdf";

const Personalinfos = () => {
  return (
    <div>
      <h1 className="uppercase text-center text-4xl sm:text-6xl font-extrabold py-20">
        about <span className="text-orange">me</span>
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="uppercase text-xl sm:text-2xl sm:pb-6 font-semibold">
            personal infos
          </h2>

          <img
            src={profile}
            alt="Ramin"
            className="rounded-full w-[230px] h-[230px] sm:hidden object-cover border-4 border-grey dark:border-dgrey mx-auto my-5"
          />

          <div className="text-base font-light grid grid-cols-2 gap-y-4 sm:gap-y-5">
            <p>
              First Name:{" "}
              <span className="font-medium block sm:inline">Ramin</span>
            </p>

            <p>
              Last Name:{" "}
              <span className="font-medium block sm:inline">Mikayilov</span>
            </p>

            <p>
              Age: <span className="font-medium block sm:inline">20 years</span>
            </p>
            <p>
              Address:{" "}
              <span className="font-medium block sm:inline">Azerbaijan</span>
            </p>
            <p>
              Language:{" "}
              <span className="font-medium block sm:inline">English</span>
            </p>
            <p className="hidden sm:block">
              Email:{" "}
              <span className="font-medium inline">
                raminmikayilovdev@gmail.com
              </span>
            </p>
            <p className="hidden sm:block">
              Phone:{" "}
              <span className="font-medium inline">(+994)55 836 26 88</span>
            </p>

            <p>
              Freelance:{" "}
              <span className="font-medium text-orange block sm:inline">
                Available
              </span>
            </p>
          </div>

          <div className="ml-1 my-10">
            <a href={CV} download>
              <CoolButton text="download cv" Icon={FaDownload} />
            </a>
          </div>
        </div>

        <div className="uppercase grid grid-cols-2 lg:grid-cols-1 lg:col-span-1 gap-5 sm:gap-8">
          <InfoCard number="1" text1="years of" text2="experience" />
          <InfoCard number="5" text1="completed" text2="projects" />
        </div>
      </div>
    </div>
  );
};

export default Personalinfos;
