import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = ({ onSignInClick , onSignUpClick, onDarkModeToggle, isDarkMode}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-300 text-black h-20 fixed w-full top-0 z-[60] dark:bg-gray-900 dark:text-gray-300">
      <div className="container mx-auto flex justify-between items-center h-full px-6">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-orange-600">QuizMaster</h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="#home" className="hover:text-orange-400">Home</a></li>
          <li><a href="#mathematics" className="hover:text-orange-400" >Mathematics & Science</a></li>
          <li><a href="#history" className="hover:text-orange-400">History</a></li>
          <li><a href="#technology" className="hover:text-orange-400">Technology</a></li>
          <li><a href="#entertainment" className="hover:text-orange-400">Entertainment</a></li>
          <li><a href="#sport" className="hover:text-orange-400">Sport</a></li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-4">
        <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-300" onClick={onDarkModeToggle}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
          <button className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700" onClick={onSignUpClick}>
            Sign up
          </button>
          {/* Call onSignInClick when this button is clicked */}
          <button
            className="bg-transparent border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-gray-800"
            onClick={onSignInClick}
          >
            Sign in
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 text-white w-40">
          <ul className="space-y-4 p-4">
            <li><a href="#home" className="block hover:text-orange-400">Home</a></li>
            <li><a href="#mathematics" className="block hover:text-orange-400">Mathematics & Science</a></li>
            <li><a href="#history" className="block hover:text-orange-400">History</a></li>
            <li><a href="#technology" className="block hover:text-orange-400">Technology</a></li>
            <li><a href="#entertainment" className="block hover:text-orange-400">Entertainment</a></li>
            <li><a href="#sport" className="block hover:text-orange-400">Sport</a></li>
            <div className="flex flex-col space-y-2 mt-4">
              <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-300 " onclick={onDarkModeToggle}>
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
              </button>
              <button className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700" onClick={onSignUpClick}>
                Sign up
              </button>
              <button
                className="bg-transparent border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-gray-800"
                onClick={onSignInClick} // Call onSignInClick here
              >
                Sign in
              </button>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;