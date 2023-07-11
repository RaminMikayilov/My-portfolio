import profile from "../../assets/images/profile.jpeg";
import { FaDownload } from "react-icons/fa";

const Personalinfos = () => {
  return (
    <div className="text-grey-dark">
      <h1 className="uppercase text-center text-4xl font-extrabold py-20">
        about <span className="text-orange">me</span>
      </h1>
      <h2 className="uppercase text-xl font-semibold">personal infos</h2>

      <img
        src={profile}
        alt="Ramin"
        className="rounded-full w-[230px] h-[230px] sm:w-[250px] sm:h-[250px] object-cover border-4 border-grey md:hidden mx-auto my-5"
      />

      <div className="flex text-base font-light">
        <div className="space-y-4 flex-1">
          <p>
            First Name:{" "}
            <span className="font-medium block sm:inline">Ramin</span>
          </p>
          <p>
            Age: <span className="font-medium block sm:inline">20 years</span>
          </p>
          <p>
            Freelance:{" "}
            <span className="font-medium text-orange block sm:inline">
              Available
            </span>
          </p>
        </div>

        <div className="space-y-4 flex-1">
          <p>
            Last Name:{" "}
            <span className="font-medium block sm:inline">Mikayilov</span>
          </p>
          <p>
            Address:{" "}
            <span className="font-medium block sm:inline">Azerbaijan</span>
          </p>

          <p>
            Language:{" "}
            <span className="font-medium block sm:inline">English</span>
          </p>
        </div>
      </div>

      <button className="button font-semibold text-grey-dark border-orange hover:text-white duration-300 border-2 rounded-full py-4 pl-8 pr-16 ml-1 mt-10">
        download cv
        <span className="p-5 bg-orange text-white absolute right-[-1px] top-[-1px] rounded-full">
          <FaDownload className="text-lg font-bold rounded-full" />
        </span>
      </button>
    </div>
  );
};

export default Personalinfos;
