import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });

  const dot = {
    default: {
      x: mousePosition.x - 5,
      y: mousePosition.y - 5,
      transition: { duration: 0.1 },
    },
  };
  const outline = {
    default: {
      x: mousePosition.x - 25,
      y: mousePosition.y - 25,
      transition: { duration: 0.2 },
    },
  };

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <>
      <motion.div
        variants={outline}
        animate="default"
        className="fixed top-0 left-0 w-[50px] h-[50px] bg-orange border-2 border-white rounded-full opacity-70 pointer-events-none z-50 transition-all ease-out duration-100 hidden xl:block"
      ></motion.div>
      <motion.div
        variants={dot}
        animate="default"
        className="fixed top-0 left-0 w-[10px] h-[10px] bg-dgrey dark:bg-white rounded-full opacity-60 pointer-events-none z-50 hidden xl:block"
      ></motion.div>
    </>
  );
};

export default CustomCursor;
