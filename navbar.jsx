import React, { useEffect, useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { BiPhoneCall, BiSolidMoon, BiSolidSun } from "react-icons/bi";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";

// Define the ResponsiveMenu component
const ResponsiveMenu = ({ showMenu, toggleMenu }) => (
  <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 ${showMenu ? 'block' : 'hidden'}`}>
    <div className="bg-white p-4">
      <button onClick={toggleMenu} className="text-black">
        Close Menu
      </button>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  </div>
);

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");
  const [showMenu, setShowMenu] = useState(false);
  const element = document.documentElement;

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <>
      <nav className="bg-gradient-to-l from-violet-900 via-violet-800 to-violet-900 text-white fixed top-left-0 w-full border-b-[1px] border-primary/50">
        <div className="container">
          <div className="flex items-center justify-between h-[70px] py-2">
            {/* Logo section */}
            <div className="text-2xl md:text-3xl text-white uppercase">
              <a href="#">
                Leisure <span>Loans</span>
              </a>
            </div>
            {/* Desktop Menu section */}
            <div>
              <ul className="flex items-center gap-10">
                <li className="group relative cursor-pointer">
                  <a href="#" className="flex items-center gap-[2px] h-[72px]">
                    Home{" "}
                    <span>
                      <FaCaretDown className="group-hover:rotate-180 transition-all duration-200" />
                    </span>
                  </a>
                </li>
                {/* Add other menu items here */}
              </ul>
            </div>
            {/* Mobile menu section */}
            <button onClick={toggleMenu} className="text-white">
              {showMenu ? <HiMenuAlt3 /> : <HiMenuAlt1 />}
            </button>
          </div>
        </div>
      </nav>
      <ResponsiveMenu showMenu={showMenu} toggleMenu={toggleMenu} />
    </>
  );
};

export default Navbar;