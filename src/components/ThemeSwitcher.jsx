import { BsMoonStars, BsSunFill } from "react-icons/bs";
import { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const getCurrentTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());

  const handleThemeChange = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  useEffect(() => {
    if (isDarkTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkTheme]);

  return (
    <button
      className="fixed top-4 right-8 p-3 text-2xl rounded-full bg-grey dark:bg-dgrey z-30 duration-300"
      onClick={handleThemeChange}
    >
      {isDarkTheme ? (
        <BsSunFill className="text-white" />
      ) : (
        <BsMoonStars className="text-grey-dark" />
      )}
    </button>
  );
};

export default ThemeSwitcher;
