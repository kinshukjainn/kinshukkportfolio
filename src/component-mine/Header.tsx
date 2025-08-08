"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence, useScroll } from "framer-motion"
import { FiMenu, FiX } from "react-icons/fi"
import Profile from "../assets/image.jpg"

// Custom hook to detect scroll position with smooth transitions
const useScrollPosition = (threshold = 10) => {
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()
  
  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      setScrolled(latest > threshold)
    })
    return unsubscribe
  }, [scrollY, threshold])
  
  return scrolled
}

const Header = () => {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [imageError, setImageError] = useState(false)
  const scrolled = useScrollPosition(20)
  
  // Smooth scroll-based transforms

  const getPathText = () => {
    const { pathname } = location
    if (pathname === "/") return "Cloudkinshuk"
    if (pathname.startsWith("/gears")) return "Gears I Use"
    if (pathname.startsWith("/blog")) return "Minimal Mind"
    if (pathname.startsWith("/sources")) return "Learning Sources"
    return "Cloudkinshuk"
  }

  const isActiveRoute = (path: string) => {
    return location.pathname.startsWith(path) && path !== "/" || location.pathname === path
  }

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isMenuOpen])

  const navItems = [
    { path: "/blog", label: "Blogs" },
    { path: "/gears", label: "Gear I Use" },
    { path: "/sources", label: "Learning Sources" },
  ]

  return (
    <>
      <motion.header
        className="fixed top-0  left-0 right-0 z-50"
        style={{
          backdropFilter: `blur(${scrolled ? '24px' : '12px'})`,
        }}
      >
        <motion.div
          className="relative"
          style={{
            background: scrolled 
              ? 'linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(15,15,15,0.92) 50%, rgba(0,0,0,0.95) 100%)'
              : 'linear-gradient(135deg, rgba(0,0,0,0.85) 0%, rgba(10,10,10,0.82) 50%, rgba(0,0,0,0.85) 100%)',
          }}
          animate={{
            borderBottomColor: scrolled 
              ? 'rgba(255,255,255,0.15)' 
              : 'rgba(255,255,255,0.08)',
          }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent" />
          
          {/* Glass reflection effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.08] via-transparent to-transparent" />
          
          <div className="relative max-w-6xl mx-auto px-6 sm:px-8">
            <div className="flex items-center justify-between h-16 sm:h-20">
              {/* Brand & Avatar */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.8, 
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: 0.1 
                }}
                className="flex items-center gap-4"
              >
                <motion.div
                  className="relative w-11 h-11 overflow-hidden rounded-full flex-shrink-0"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  {/* Glass border effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 via-white/5 to-transparent p-[1px]">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-900 to-black overflow-hidden">
                      {!imageError ? (
                        <img
                          src={Profile || "/placeholder.svg"}
                          alt="Kinshuk Jain"
                          className="w-full h-full object-cover"
                          onError={() => setImageError(true)}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-white text-lg font-semibold bg-gradient-to-br from-gray-800 to-gray-900">
                          KJ
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
                
                <Link to="/" onClick={closeMenu}>
                  <motion.span
                    className="text-white text-2xl sm:text-2xl  tracking-tight bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text"
                    whileHover={{ 
                      backgroundImage: "linear-gradient(to right, #ffffff, #f0f0f0, #ffffff)",
                      scale: 1.02 
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  >
                    {getPathText()}
                  </motion.span>
                </Link>
              </motion.div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-1">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.1 + 0.3,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
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
                  className="relative p-3 rounded-full text-white/90 hover:text-white transition-colors duration-300"
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "rgba(255,255,255,0.08)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  aria-label="Toggle menu"
                >
                  {/* Glass button background */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-sm border border-white/10" />
                  
                  <motion.div
                    animate={{ rotate: isMenuOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="relative z-10"
                  >
                    {isMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
                  </motion.div>
                </motion.button>
              </div>
            </div>
          </div>
          
          {/* Bottom border with gradient */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-[1px]"
            style={{
              background: scrolled
                ? 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)'
                : 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)'
            }}
            animate={{
              opacity: scrolled ? 1 : 0.6
            }}
            transition={{ duration: 0.6 }}
          />
        </motion.div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ 
                duration: 0.4, 
                ease: [0.25, 0.46, 0.45, 0.94],
                staggerChildren: 0.05
              }}
              className="md:hidden absolute top-full left-0 right-0 p-4"
            >
              <div className="relative bg-black/90 backdrop-blur-2xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
                {/* Glass overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent" />
                
                {/* Content */}
                <div className="relative p-2 flex flex-col gap-1">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        delay: index * 0.1,
                        duration: 0.4,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }}
                    >
                      <MobileNavLink
                        to={item.path}
                        isActive={isActiveRoute(item.path)}
                        label={item.label}
                        onClick={closeMenu}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Background Overlay for Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 md:hidden"
            onClick={closeMenu}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
    </>
  )
}

// Enhanced NavLink Component
interface NavLinkProps {
  to: string
  isActive: boolean
  label: string
}

const NavLink = ({ to, isActive, label }: NavLinkProps) => (
  <Link to={to}>
    <motion.div
      className="relative px-5 py-2.5 rounded-full text-sm font-medium transition-colors duration-300 overflow-hidden"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      {/* Active state background */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            layoutId="active-pill"
            className="absolute inset-0 rounded-full"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.15) 100%)'
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ 
              type: "spring", 
              stiffness: 500, 
              damping: 35,
              duration: 0.3
            }}
          />
        )}
      </AnimatePresence>
      
      {/* Hover state background */}
      <motion.div
        className="absolute inset-0 rounded-full bg-white/5 opacity-0"
        whileHover={{ opacity: isActive ? 0 : 1 }}
        transition={{ duration: 0.2 }}
      />
      
      {/* Text */}
      <span 
        className={`relative z-10 transition-colors duration-300 ${
          isActive 
            ? "text-white " 
            : "text-gray-300 hover:text-white"
        }`}
      >
        {label}
      </span>
      
      {/* Subtle glow for active state */}
      {isActive && (
        <div className="absolute inset-0 rounded-full bg-white/5 blur-sm" />
      )}
    </motion.div>
  </Link>
)

// Enhanced Mobile NavLink Component
interface MobileNavLinkProps extends NavLinkProps {
  onClick: () => void
}

const MobileNavLink = ({ to, isActive, label, onClick }: MobileNavLinkProps) => (
  <Link to={to} onClick={onClick} className="block">
    <motion.div
      className={`relative w-full p-4 text-base rounded-xl font-medium transition-all duration-300 text-left overflow-hidden ${
        isActive
          ? "text-white"
          : "text-gray-300 hover:text-white"
      }`}
      whileHover={{ 
        scale: 1.01,
        backgroundColor: isActive ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.05)"
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      {/* Active state background */}
      {isActive && (
        <motion.div
          className="absolute inset-0 rounded-xl"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.1) 100%)'
          }}
          layoutId="mobile-active"
          transition={{ type: "spring", stiffness: 500, damping: 35 }}
        />
      )}
      
      {/* Content */}
      <span className="relative z-10">{label}</span>
      
      {/* Subtle border */}
      <div className="absolute inset-0 rounded-xl border border-white/5" />
    </motion.div>
  </Link>
)

export default Header
