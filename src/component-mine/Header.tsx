"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa"
import { AnimatePresence } from "framer-motion"
import profile from "../assets/image.jpg"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation() // Get current location

  const toggleMenu = () => setMenuOpen((prev) => !prev)
  const closeMenu = () => setMenuOpen(false)

  // Function to determine the path text based on current route
  const getPathText = () => {
    const pathname = location.pathname

    // custom route names changes for heading  : 
    if (pathname === "/") {
      return "Home"
    } else if (pathname === "/my-personal-learning-resources" || pathname.startsWith("/my-personal-learning-resources/")) {
      return "Learning.Hub"
    } else if (pathname === "/aboutme" || pathname.startsWith("/aboutme/")) {
      return "Me"
    } else {
      return "Profile" 
    }
  }

  return (
    <header className="bg-blue-900 p-3 flex flex-col  sm:flex-row justify-between items-center overflow-hidden">
      <div className="flex items-center w-full sm:w-auto justify-between mb-3 sm:mb-0 relative z-10">
        {/* Avatar Section */}
        <div className="relative mr-3 flex-shrink-0">
          <div className="w-10 h-10 sm:w-12 sm:h-12 overflow-hidden rounded-full shadow-lg border-3 border-black">
            <img
              src={profile || "/placeholder.svg"}
              alt="Kinshuk Jain"
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback to initials if image fails to load
                e.currentTarget.style.display = "none"
                const parent = e.currentTarget.parentElement
                if (parent) {
                  const initialsDiv = document.createElement("div")
                  initialsDiv.className =
                    "flex items-center justify-center w-full h-full bg-gradient-to-br from-black-900 to-grey-700 text-gray-100 text-lg font-bold"
                  initialsDiv.textContent = "KJ"
                  parent.appendChild(initialsDiv)
                }
              }}
            />
          </div>
        </div>

        {/* Dynamic Portfolio Name with cloud theme */}
        <div className="flex items-center">
          <h1 className="text-lg sm:text-xl font-semibold tracking-wide text-white">
            <Link to="/" onClick={closeMenu} className="hover:text-gray-100 transition-colors duration-300">
              Kinshuk Jain  | <span className="ml-2 text-white">
  {getPathText()}
</span>
 
            </Link>
          </h1>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden text-2xl text-white focus:outline-none   p-2"
          onClick={toggleMenu}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden sm:flex items-center gap-4 md:gap-6 flex-wrap justify-center">
        <NavLinks closeMenu={closeMenu} />
      </nav>

      {/* Mobile Menu with improved animation */}
      <AnimatePresence>
        {menuOpen && (
          <div className="w-full overflow-hidden sm:hidden font-semibold rounded-4xl mt-2">
            <div className="pt-3 pb-2 flex flex-col items-center gap-4">
              <NavLinks closeMenu={closeMenu} />
            </div>
          </div>
        )}
      </AnimatePresence>
    </header>
  )
}

// Navigation Links Component with Microsoft-inspired theme
const NavLinks = ({ closeMenu }: { closeMenu: () => void }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 w-full sm:w-auto">
      <div className="group">
      <Link
  to="/blog"
  className="flex hover:underline px-2 py-1 items-center gap-2 text-white text-lg md:text-base transition-all duration-300 ease-in-out hover:scale-105"
  onClick={closeMenu}
>
  <span className="relative group">Blogs</span>
</Link>
</div>
<div>
  <Link
    to="/my-personal-learning-resources"
    className="flex items-center gap-2 text-white text-lg md:text-base transition-all duration-300 ease-in-out hover:scale-105"
    onClick={closeMenu}
  >
    <span className="hover:underline relative group">Learning.Hub</span>
  </Link>
</div>
<div>
  <Link
    to="/aboutme"
    className="flex items-center gap-2 text-white text-lg md:text-base transition-all duration-300 ease-in-out hover:scale-105"
    onClick={closeMenu}
  >
    <span className="hover:underline relative group">About me</span>
  </Link>
      </div>
    </div>
  )
}

export default Header;

