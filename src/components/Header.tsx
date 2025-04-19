"use client";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaDiscord, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiDocsdotrs } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";
import { CiLogout } from "react-icons/ci";
import { FaCloud, FaCloudDownloadAlt, FaCloudUploadAlt } from "react-icons/fa";
import profile from "../assets/image.jpg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  // Add scroll detection for sticky header effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      className={`bg-gradient-to-r from-gray-900 to-slate-900 text-gray-300 mt-2 mx-2 p-4 flex flex-col sm:flex-row justify-between items-center font-mono rounded-xl shadow-xl border border-gray-800 relative z-50 overflow-hidden ${
        scrolled ? "sticky top-2 backdrop-blur-md bg-opacity-95" : ""
      }`}
    >
      {/* Decorative Cloud Elements */}
      <motion.div 
        variants={cloudVariants}
        animate="floating"
        className="absolute -left-4 -bottom-4 text-gray-700 opacity-20 text-6xl"
      >
        <FaCloud />
      </motion.div>
      
      <motion.div 
        variants={cloudVariants}
        animate="floating"
        className="absolute right-20 top-0 text-gray-700 opacity-20 text-5xl"
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
              boxShadow: "0 0 15px rgba(45, 55, 72, 0.7)" 
            }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-10 h-10 sm:w-12 sm:h-12 overflow-hidden rounded-full shadow-lg border-2 border-slate-700"
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
                  initialsDiv.className = 'flex items-center justify-center w-full h-full bg-gradient-to-br from-slate-800 to-slate-700 text-gray-200 text-lg font-bold';
                  initialsDiv.textContent = 'KJ';
                  parent.appendChild(initialsDiv);
                }
              }}
            />
          </motion.div>
          
          {/* Pulsing online indicator */}
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, type: "spring" }}
            className="absolute -bottom-1 -right-1 z-10"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1], 
                boxShadow: [
                  "0 0 0 0 rgba(56, 161, 105, 0.7)",
                  "0 0 0 4px rgba(56, 161, 105, 0.2)",
                  "0 0 0 0 rgba(56, 161, 105, 0.7)"
                ]
              }}
              transition={{ 
                duration: 2.5, 
                repeat: Infinity,
                repeatType: "loop"
              }}
              className="w-4 h-4 bg-green-600 rounded-full border-2 border-slate-900" 
              title="Online"
            />
          </motion.div>
        </motion.div>

        {/* Portfolio Name with cloud theme */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex items-center"
        >
          <FaCloudDownloadAlt className="text-slate-500 mr-2 text-xl" />
          <motion.h1
            className="text-lg sm:text-xl font-semibold tracking-wide text-slate-300"
          >
            <Link 
              to="/" 
              onClick={closeMenu}
              className="hover:underline decoration-wavy decoration-slate-500 underline-offset-4"
            >
              Kinshuk Jain / Cloud
            </Link>
          </motion.h1>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          whileHover={{ 
            scale: 1.1,
            rotate: [0, 5, -5, 0],
            transition: { duration: 0.5 }
          }}
          className="sm:hidden text-2xl text-slate-400 focus:outline-none bg-slate-800 rounded-lg p-2"
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
            className="w-full overflow-hidden sm:hidden backdrop-blur-sm bg-slate-900 bg-opacity-90 rounded-lg mt-2"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, staggerChildren: 0.1 }}  
              className="pt-3 pb-2 border-t border-slate-800 flex flex-col items-center gap-4"
            >
              <NavLinks closeMenu={closeMenu} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

// Navigation Links Component with cloud theme
const NavLinks = ({ closeMenu }: { closeMenu: () => void }) => {
  const linkVariants = {
    hover: {
      scale: 1.05, 
      textShadow: "0 0 8px rgba(160, 174, 192, 0.6)",
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
          className="flex items-center gap-2 hover:text-gray-200 transition-colors duration-300" 
          onClick={closeMenu}
        >
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <CiLogout className="text-2xl text-gray-400 group-hover:text-gray-200" />
          </motion.div>
          <span className="sm:hidden text-sm">Exit</span>
        </Link>
      </motion.div>
      
      <motion.div 
        whileHover="hover" 
        variants={linkVariants}
      >
        <Link 
          to="/docs" 
          className="flex items-center gap-2 text-slate-400 text-sm md:text-base hover:text-slate-300 transition-colors duration-300" 
          onClick={closeMenu}
        >
          <SiDocsdotrs className="text-lg" /> 
          <span className="relative">
            Resources
            <motion.span 
              className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-600"
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </span>
        </Link>
      </motion.div>
      
      {/* Social Links with cloud-themed hover effects */}
      <div className="flex flex-wrap gap-2 md:gap-4 mt-2 sm:mt-0 justify-center">
        <SocialLink href="https://discord.gg/vA92jrVC" icon={<FaDiscord />} label="Discord" />
        <SocialLink href="https://instagram.com/kinshukjain._" icon={<FaInstagram />} label="Instagram" />
        <SocialLink href="https://linkedin.com/kinshukjainn" icon={<FaLinkedin />} label="LinkedIn" />
        <SocialLink href="https://github.com/kinshukjainn" icon={<FaGithub />} label="GitHub" />
      </div>
    </div>
  );
};

// Enhanced Social Link Component with cloud-themed hover effects
const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <motion.a
    whileHover={{ 
      scale: 1.1,
      y: -3,
      backgroundColor: "rgba(74, 85, 104, 0.9)",
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -4px rgba(0, 0, 0, 0.2)"
    }}
    whileTap={{ scale: 0.95 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ 
      type: "spring", 
      stiffness: 500, 
      damping: 17,
      mass: 0.8
    }}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-1 px-2 sm:px-3 py-1 text-gray-300 bg-slate-800 border border-slate-700 rounded-full hover:text-white transition-all duration-300 shadow-md text-sm md:text-base group"
  >
    <motion.span
      animate={{ rotate: [0, 0] }}
      whileHover={{ rotate: [0, 10, -10, 0] }}
      transition={{ duration: 0.6 }}
      className="text-base sm:text-lg"
    >
      {icon}
    </motion.span>
    <span className="font-medium hidden md:inline relative">
      {label}
      <motion.span 
        className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-400 opacity-0 group-hover:opacity-100"
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.3, delay: 0.1 }}
      />
    </span>
  </motion.a>
);

export default Header;