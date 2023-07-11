import { IconButton } from "@mui/material";
import { useState, useEffect } from "react";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import { Routes, Route } from "react-router-dom";
import Navbars from "./components/global/Navbar";
import "./index.css";
import Home from "./components/Home";
import About from "./components/About/About";
import Service from "./components/Servise/Servise";
import Portfolio from "./components/Portfolio/Protfolio";
import Contact from "./components/Contact/Contact";
import ScrollToTop from "./components/global/scrolltop";
import ScrollStartTop from "./components/function/topThepage";

function App() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  let handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, []);
  return (
    <div className=" App h-screen dark:bg-neutral-900 bg-stone-100  relative    ">
      <div
        onClick={handleThemeSwitch}
        className=" 
         w-fit lg:p-1 rounded-full z-50 cursor-pointer
          absolute lg:fixed lg:top-1/2 lg:right-2 centerT 
          top-7  right-12 dark:bg-gray-600/80 lg:dark:bg-transparent lg:bg-transparent  bg-gray-300/80 
            lg:after:w-96 
          lg:after:dark:bg-gray-600/90
          lg:after:bg-gray-300/90 
           lg:after:rounded-l-full 
           lg:after:fixed
           lg:after:h-full lg:after:-z-50 
           lg:after:left-0 lg:after:top-0"
      >
        <IconButton onClick={handleThemeSwitch}>
          {theme === "light" ? (
            <DarkModeRoundedIcon className=" text-black" />
          ) : (
            <LightModeRoundedIcon className=" text-white " />
          )}
        </IconButton>
      </div>
      <Navbars />
      <ScrollToTop isVisible={isVisible} />
      <div className="  allpage  dark:bg-neutral-900 bg-stone-100   ">
        <ScrollStartTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
