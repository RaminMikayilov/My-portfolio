import { BsMoonStars } from "react-icons/bs";

const ThemeSwitcher = () => {
  return (
    <button className="fixed top-4 right-8 p-3 text-2xl rounded-full bg-grey">
      <BsMoonStars className="text-grey-dark" />
    </button>
  );
};

export default ThemeSwitcher;
