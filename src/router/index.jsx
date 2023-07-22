import { BrowserRouter, Route, Routes } from "react-router-dom";
import ThemeSwitcher from "../components/ThemeSwitcher";
import CustomCursor from "../components/CustomCursor";
import Navbar from "../components/Navbar/Navbar";
import Home from "../pages/Home";
import About from "../pages/About";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";

const Router = () => {
  return (
    <BrowserRouter>
      <ThemeSwitcher />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Navbar />
      <CustomCursor />
    </BrowserRouter>
  );
};

export default Router;
