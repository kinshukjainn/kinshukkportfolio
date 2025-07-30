"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { FiMenu, FiX } from "react-icons/fi"
import Profile from "../assets/image.jpg" // Your profile image path

// Custom hook to detect scroll position
const useScrollPosition = (threshold = 10) => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > threshold) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    // Run on mount to check initial position
    handleScroll() 
    
    return () => window.removeEventListener("scroll", handleScroll)
  }, [threshold])

  return scrolled
}

const Header = () => {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [imageError, setImageError] = useState(false)
  const scrolled = useScrollPosition(20)

  const getPathText = () => {
    const { pathname } = location
    if (pathname === "/") return "Cloudkinshuk"
    if (pathname.startsWith("/gears")) return "Gears I Use"
    if (pathname.startsWith("/blog")) return "Minimal Mind"
    if (pathname.startsWith("/sources")) return "Learning Sources"
    return "Cloudkinshuk" // Default fallback
  }

  const isActiveRoute = (path: string) => {
    return location.pathname.startsWith(path) && path !== "/" || location.pathname === path
  }

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)
  
  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  const navItems = [
    { path: "/blog", label: "Blogs" },
    { path:"/gears", label: "Gear I Use" },
    { path: "/sources", label: "Learning Sources" },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-mono ease-in-out m-2 header-rounded ${
          scrolled
            ? "backdrop-blur-xs bg-black/50 border-white/20"
            : "backdrop-blur-sm bg-black/20 border-white/10"
        }`}
      >
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Brand & Avatar */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 border-2 border-white/30 overflow-hidden rounded-full flex-shrink-0 bg-white/10">
                {!imageError ? (
                  <img
                    src={Profile}
                    alt="Kinshuk Jain"
                    className="w-full h-full object-cover"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white text-lg font-bold bg-gray-800">
                    KJ
                  </div>
                )}
              </div>
              <Link to="/" onClick={closeMenu} className="text-white text-xl sm:text-2xl heading-kinshuk font-semibold tracking-tight">
                {getPathText()}
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <NavLink
                    to={item.path}
                    isActive={isActiveRoute(item.path)}
                    label={item.label}
                  />
                </motion.div>
              ))}
            </nav>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <motion.button
                onClick={toggleMenu}
                className="text-white p-2.5 rounded-full 
               hover:bg-yellow-200
               hover:text-black transition-colors duration-200 border border-transparent focus:border-white/20"
                aria-label="Toggle menu"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden absolute top-full left-0 right-0 p-2"
            >
              <div className="bg-black/70 backdrop-blur-xl rounded-2xl border border-white/20 shadow-xl">
                <div className="p-2 flex flex-col gap-2">
                  {navItems.map((item) => (
                    <MobileNavLink
                      key={item.path}
                      to={item.path}
                      isActive={isActiveRoute(item.path)}
                      label={item.label}
                      onClick={closeMenu}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Background Overlay for Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
            onClick={closeMenu}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
    </>
  )
}

// Reusable NavLink Components
// Kept in the same file as per your request.

interface NavLinkProps {
  to: string
  isActive: boolean
  label: string
}

const NavLink = ({ to, isActive, label }: NavLinkProps) => (
  <Link to={to}>
    <motion.div
      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 relative ${
        isActive ? "text-black" : "text-gray-200 hover:text-white"
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {isActive && (
        <motion.div
          layoutId="active-pill"
          className="absolute inset-0 bg-green-500 rounded-full z-0"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
      <span className="relative z-10">{label}</span>
    </motion.div>
  </Link>
)

interface MobileNavLinkProps extends NavLinkProps {
  onClick: () => void
}

const MobileNavLink = ({ to, isActive, label, onClick }: MobileNavLinkProps) => (
  <Link to={to} onClick={onClick} className="block">
    <motion.div
      className={`w-full p-4 text-base rounded-xl font-semibold transition-colors duration-200 text-left ${
        isActive
          ? "bg-white/10 text-white"
          : "text-gray-300 hover:bg-white/5 hover:text-white"
      }`}
      whileTap={{ scale: 0.98 }}
    >
      {label}
    </motion.div>
  </Link>
)

export default Header;