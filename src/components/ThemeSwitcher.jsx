import { BsMoonStars, BsSunFill } from "react-icons/bs";

const ThemeSwitcher = () => {
  return (
    <button className="fixed top-4 right-8 p-3 text-2xl rounded-full bg-grey dark:bg-dgrey z-30">
      {/* <BsMoonStars className="text-grey-dark" /> */}
      <BsSunFill className="text-white" />
    </button>
  );
};

export default ThemeSwitcher;
