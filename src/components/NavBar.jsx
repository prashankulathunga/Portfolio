import { useState } from 'react';
import {motion} from "framer-motion";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.div initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration:2}} 
    className="container mx-auto relative">
      <header className="fixed top-0 left-0 w-full bg-black text-white z-50 shadow-lg">
        <div className="flex items-center justify-between p-4 md:p-8">
          <h1 className="text-2xl font-semibold">Portfolio</h1>
          <nav>
            <div className="hidden md:flex space-x-6">
              <ul className="flex space-x-6 font-medium">
                <li><a href="/#about" className="text-gray-300 hover:text-blue-400">About</a></li>
                <li><a href="/#projects" className="text-gray-300 hover:text-blue-400">Projects</a></li>
                <li><a href="/#contact" className="text-gray-300 hover:text-blue-400">Contact</a></li>
              </ul>
            </div>

            {/* Hamburger Menu for Mobile */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-300 hover:text-blue-500 focus:outline-none"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Dropdown Menu for Mobile */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <ul className="space-y-4 bg-black/90 rounded-2xl z-2 p-4 pt-20 px-12 text-xs font-medium">
        
          <li><a href="/#about" className="block text-gray-300 hover:text-blue-500">About</a></li>
          <li><a href="/#projects" className="block text-gray-300 hover:text-blue-500">Projects</a></li>
          <li><a href="/#contact" className="block text-gray-300 hover:text-blue-500">Contact</a></li>
        </ul>
      </div>
    </motion.div>
  );
};

export default NavBar;
