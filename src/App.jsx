import { Route, BrowserRouter, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ThemeSwitcher from "./components/ThemeSwitcher";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import CustomCursor from "./components/CustomCursor";

function App() {
  return (
    <div className="bg-white dark:bg-dark text-grey-dark dark:text-white min-h-screen">
      <BrowserRouter>
        <ThemeSwitcher />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Navbar />
      </BrowserRouter>
      <CustomCursor />
    </div>
  );
}

export default App;
