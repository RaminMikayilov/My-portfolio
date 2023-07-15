import { Link } from "react-router-dom";
import { navitems } from "../../data/navitems";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="fixed bottom-0 w-full lg:right-0 lg:bottom-1/2 lg:translate-y-1/2 lg:w-auto bg-white dark:bg-navbg dark:lg:bg-transparent lg:bg-transparent lg:shadow-none shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] z-20">
      <div className="flex justify-around p-2 lg:p-8 lg:flex-col lg:space-y-8">
        {navitems.map((item, index) => (
          <Link
            key={index}
            to={`${item.path}`}
            className="p-3 lg:p-4 text-xl rounded-full bg-grey dark:bg-dgrey lg:dark:bg-navbg text-grey-dark dark:text-white duration-300 dark:hover:bg-orange hover:bg-orange hover:text-white nav__button"
          >
            <span className="hidden lg:block nav__text">{item.name}</span>
            {<item.icon />}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
