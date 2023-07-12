import profile from "../../assets/images/profile.jpeg";
import { FaDownload } from "react-icons/fa";
import CoolButton from "../CoolButton/CoolButton";

const Personalinfos = () => {
  return (
    <div className="text-grey-dark">
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
            className="rounded-full w-[230px] h-[230px] sm:hidden object-cover border-4 border-grey mx-auto my-5"
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
            <CoolButton text="download cv" Icon={FaDownload} />
          </div>
        </div>

        <div className="uppercase grid grid-cols-2 lg:grid-cols-1 lg:col-span-1 gap-5 sm:gap-8">
          <div className="p-5 sm:pl-10 sm:py-7 border-[#ddd] border-[1px] rounded-md hover:shadow-md duration-300">
            <p className="text-orange text-5xl font-extrabold">
              1<span className="font-semibold">+</span>
            </p>
            <div className="flex sm:space-x-5">
              {/* line */}
              <div className="bg-[#777] w-[30px] h-[1px] my-3 hidden sm:block"></div>
              <p>
                years of <br /> experience
              </p>
            </div>
          </div>
          <div className="p-5 border-[#ddd] border-[1px] rounded-md hover:shadow-md duration-300">
            <p className="text-orange text-5xl font-extrabold">
              5<span className="font-semibold">+</span>
            </p>
            <div className="flex sm:space-x-5">
              {/* line */}
              <div className="bg-[#777] w-[30px] h-[1px] my-3 hidden sm:block"></div>
              <p>
                completed <br /> projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personalinfos;
