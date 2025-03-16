import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaDiscord, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiDocsdotrs } from "react-icons/si";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md mt-2 mx-2 p-4 flex justify-between items-center font-poppins relative">
      {/* Portfolio Name */}
      <h1 className="text-lg sm:text-xl font-semibold text-black tracking-wide">
        <Link to="/">Kinshuk Jain / Profile</Link>
      </h1>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-6">
        <NavLinks />
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-2xl text-black focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md p-4 flex flex-col items-center gap-4 md:hidden">
          <NavLinks />
        </div>
      )}
    </header>
  );
};

// Navigation Links Component
const NavLinks = () => (
  <div className="flex flex-col md:flex-row items-center gap-6">
    <Link to="/" className="text-black hover:text-gray-600 font-medium">
      Back
    </Link>
    <Link to="/awsdocs" className="text-black hover:text-gray-600 flex items-center gap-2 font-medium">
      <SiDocsdotrs className="text-lg" /> AWS Docs
    </Link>

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
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 px-3 py-1 text-white bg-black rounded-lg hover:bg-gray-800 transition-all duration-300 shadow-md"
  >
    {icon}
    <span className="font-semibold hidden sm:inline">{label}</span>
  </a>
);

export default Header;
