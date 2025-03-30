"use client";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaDiscord, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiDocsdotrs } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";
import { CiLogout } from "react-icons/ci";
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

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className={`bg-[#272822] text-[#f8f8f2] mt-2 mx-2 p-4 flex flex-col sm:flex-row justify-between items-center font-mono  shadow-lg border border-[#75715e] relative z-50 ${
        scrolled ? "sticky top-2 backdrop-blur-sm bg-opacity-95" : ""
      }`}
    >
      <div className="flex items-center w-full sm:w-auto justify-between mb-3 sm:mb-0">
        {/* Avatar Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="relative mr-3 flex-shrink-0"
        >
          <motion.div
            whileHover={{ scale: 1.05, rotate: 3 }}
            className="w-10 h-10 sm:w-12 sm:h-12  overflow-hidden  shadow-lg"
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
                  initialsDiv.className = 'flex items-center justify-center w-full h-full bg-[#414339] text-[#a6e22e] text-lg font-bold';
                  initialsDiv.textContent = 'KJ';
                  parent.appendChild(initialsDiv);
                }
              }}
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, type: "spring" }}
            className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500  border-2 border-[#272822]" 
            title="Online"
          />
        </motion.div>

        {/* Portfolio Name */}
        <motion.h1
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-lg sm:text-xl font-semibold tracking-wide text-[#a6e22e]"
        >
          <Link to="/" onClick={closeMenu}>Kinshuk Jain / Profile</Link>
        </motion.h1>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="sm:hidden text-2xl text-[#f8f8f2] focus:outline-none"
          onClick={toggleMenu}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </motion.button>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden sm:flex items-center gap-4 md:gap-6 flex-wrap justify-center">
        <NavLinks closeMenu={closeMenu} />
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full overflow-hidden sm:hidden"
          >
            <div className="pt-3 pb-2 border-t border-[#75715e] flex flex-col items-center gap-4">
              <NavLinks closeMenu={closeMenu} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

// Navigation Links Component
const NavLinks = ({ closeMenu }: { closeMenu: () => void }) => (
  <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 w-full sm:w-auto">
    <motion.div whileHover={{ scale: 1.1 }}>
      <Link to="/" className="hover:text-[#a6e22e]" onClick={closeMenu}>
        <CiLogout className="text-2xl text-[#f92672]" />
      </Link>
    </motion.div>
    <motion.div whileHover={{ scale: 1.05 }}>
      <Link 
        to="/awsdocs" 
        className="flex items-center gap-2 text-[#fd971f] text-sm md:text-base" 
        onClick={closeMenu}
      >
        <SiDocsdotrs className="text-lg" /> Resources
      </Link>
    </motion.div>
    {/* Social Links */}
    <div className="flex flex-wrap gap-2 md:gap-4 mt-2 sm:mt-0 justify-center">
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
    className="flex items-center gap-1 px-2 sm:px-3 py-1 text-[#f8f8f2] bg-[#414339] border border-[#75715e]  hover:bg-[#66d9ef] hover:text-[#272822] transition-all duration-300 shadow-md text-sm md:text-base"
  >
    {icon}
    <span className="font-semibold hidden md:inline">{label}</span>
  </motion.a>
);

export default Header;