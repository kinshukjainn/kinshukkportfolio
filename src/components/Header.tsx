"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaDiscord, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiDocsdotrs } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false); // Close menu on navigation

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="bg-white shadow-md mt-2 mx-2 p-4 flex justify-between items-center font-poppins relative"
    >
      {/* Portfolio Name */}
      <motion.h1
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-lg sm:text-xl font-semibold text-black tracking-wide"
      >
        <Link to="/" onClick={closeMenu}>Kinshuk Jain / Profile</Link>
      </motion.h1>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-6">
        <NavLinks closeMenu={closeMenu} />
      </nav>

      {/* Mobile Menu Button */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        className="md:hidden text-2xl text-black focus:outline-none"
        onClick={toggleMenu}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </motion.button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="absolute top-full left-0 w-full bg-white shadow-md p-4 flex flex-col items-center gap-4 md:hidden"
          >
            <NavLinks closeMenu={closeMenu} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

// Navigation Links Component
const NavLinks = ({ closeMenu }: { closeMenu: () => void }) => (
  <div className="flex flex-col md:flex-row items-center gap-6">
    <motion.div whileHover={{ scale: 1.1 }}>
      <Link to="/" className="text-black hover:text-gray-600 font-medium" onClick={closeMenu}>
        Back
      </Link>
    </motion.div>
    
    <motion.div whileHover={{ scale: 1.1 }}>
      <Link to="/awsdocs" className="text-black hover:text-gray-600 flex items-center gap-2 font-medium" onClick={closeMenu}>
        <SiDocsdotrs className="text-lg" /> AWS Learning resources
      </Link>
    </motion.div>

    {/* Social Links */}
    <div className="flex gap-4 mt-2 md:mt-0">
      <SocialLink href="https://discord.gg/vA92jrVC" icon={<FaDiscord />} label="Discord" />
      <SocialLink href="https://instagram.com/kinshukjain._" icon={<FaInstagram />} label="Instagram" />
      <SocialLink href="https://linkedin.com/kinshukjainn" icon={<FaLinkedin />} label="LinkedIn" />
      <SocialLink href="https://github.com/kinshukjainn" icon={<FaGithub />} label="GitHub" />
    </div>
  </div>
);

// Social Link Component
const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <motion.a
    whileHover={{ scale: 1.1, rotate: 5 }}
    whileTap={{ scale: 0.9 }}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 px-3 py-1 text-white bg-black rounded-lg hover:bg-gray-800 transition-all duration-300 shadow-md"
  >
    {icon}
    <span className="font-semibold hidden sm:inline">{label}</span>
  </motion.a>
);

export default Header;
