import { Route, BrowserRouter, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ThemeSwitcher from "./components/ThemeSwitcher";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <ThemeSwitcher />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/portfolio" element={<Portfolio />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <Navbar />
    </BrowserRouter>
  );
}

export default App;
