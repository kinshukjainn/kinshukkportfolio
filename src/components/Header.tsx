"use client";

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { FaCloud, FaCloudUploadAlt } from "react-icons/fa";
import profile from "../assets/image.jpg";
import { FaHashnode} from "react-icons/fa6";
import { GoPersonFill } from "react-icons/go";



const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // Get current location

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  // Function to determine the path text based on current route
  const getPathText = () => {
    const pathname = location.pathname;
    
    if (pathname === "/") {
      return "Profile";
    } else if (pathname === "/blogs" || pathname.startsWith("/blogs/")) {
      return "Blogs";
    } else if (pathname === "/aboutme" || pathname.startsWith("/aboutme/")) {
      return "Personal Info";
    } else {
      return "Profile"; // Default fallback
    }
  };

  // Cloud animations
  const cloudVariants = {
    floating: {
      y: [0, -8, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`bg-[#f3ecec] font-sans  p-4 flex flex-col sm:flex-row justify-between items-center   overflow-hidden`}
    >
      {/* Decorative Cloud Elements */}
      <motion.div 
        variants={cloudVariants}
        animate="floating"
        className="absolute -left-4 -bottom-4 text-black opacity-10 text-6xl"
      >
        <FaCloud />
      </motion.div>
      
      <motion.div 
        variants={cloudVariants}
        animate="floating"
        className="absolute right-20 top-0 text-black opacity-10 text-5xl"
      >
        <FaCloudUploadAlt />
      </motion.div>

      <div className="flex items-center w-full sm:w-auto justify-between mb-3 sm:mb-0 relative z-10">
        {/* Avatar Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7, type: "spring" }}
          className="relative mr-3 flex-shrink-0"
        >
          <motion.div
            whileHover={{ 
              scale: 1.08, 
              rotate: 5,
              boxShadow: "0 0 15px rgba(99, 179, 237, 0.5)" 
            }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-10 h-10 sm:w-12 sm:h-12 overflow-hidden rounded-full shadow-lg border-3 border-black"
          >
            <img
              src={profile}
              alt="Kinshuk Jain"
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback to initials if image fails to load
                e.currentTarget.style.display = 'none';
                const parent = e.currentTarget.parentElement;
                if (parent) {
                  const initialsDiv = document.createElement('div');
                  initialsDiv.className = 'flex items-center justify-center w-full h-full bg-gradient-to-br from-black-900 to-grey-700 text-gray-100 text-lg font-bold';
                  initialsDiv.textContent = 'KJ';
                  parent.appendChild(initialsDiv);
                }
              }}
            />
          </motion.div>
        </motion.div>

        {/* Dynamic Portfolio Name with cloud theme */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex items-center"
        >
          <motion.h1
            className="text-lg sm:text-xl font-semibold tracking-wide text-black"
          >
            <Link 
              to="/" 
              onClick={closeMenu}
              className="hover:text-gray-900 transition-colors duration-300"
            >
              CloudKinshuk / {getPathText()} 
            </Link>
          </motion.h1>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          whileHover={{ 
            scale: 1.1,
            backgroundColor: "rgba(66, 153, 225, 0.2)"
          }}
          transition={{ duration: 0.3 }}
          className="sm:hidden text-2xl text-white focus:outline-none bg-black hover:bg-black rounded-lg p-2"
          onClick={toggleMenu}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </motion.button>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden sm:flex items-center gap-4 md:gap-6 flex-wrap justify-center">
        <NavLinks closeMenu={closeMenu} />
      </nav>

      {/* Mobile Menu with improved animation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full overflow-hidden sm:hidden backdrop-blur-md bg-gray-200  rounded-md mt-2"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, staggerChildren: 0.1 }}  
              className="pt-3 pb-2 flex flex-col items-center gap-4"
            >
              <NavLinks  closeMenu={closeMenu} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

// Navigation Links Component with Microsoft-inspired theme
const NavLinks = ({ closeMenu }: { closeMenu: () => void }) => {
  const linkVariants = {
    hover: {
      scale: 1.05, 
      transition: { type: "spring", stiffness: 400 }
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 w-full sm:w-auto">
      <motion.div 
        whileHover="hover" 
        variants={linkVariants}
        className="group"
      >
        <Link 
          to="/" 
          className="flex items-center gap-2 hover:text-blue-300 transition-colors duration-300" 
          onClick={closeMenu}
        >
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
          </motion.div>
        </Link>
      </motion.div>
      
      <motion.div 
        whileHover="hover" 
        variants={linkVariants}
      >
        <Link 
          to="/blogs" 
          className="flex items-center gap-2 text-black text-lg md:text-base transition-colors duration-300" 
          onClick={closeMenu}
        >
          <FaHashnode className="text-lg text-black" /> 
          <span className="relative group">
            Blogs
            <motion.span 
              className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full"
              transition={{ duration: 0.3 }}
            />
          </span>
        </Link>
      </motion.div>
      <motion.div 
        whileHover="hover" 
        variants={linkVariants}
      >
        <Link 
          to="/aboutme" 
          className="flex items-center gap-2 text-black text-lg md:text-base transition-colors duration-300" 
          onClick={closeMenu}
        >
          <GoPersonFill className="text-lg text-black" /> 
          <span className="relative group">
            About me
            <motion.span 
              className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full"
              transition={{ duration: 0.3 }}
            />
          </span>
        </Link>
      </motion.div>
    </div>
  );
};

export default Header;