"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa"
import { AnimatePresence } from "framer-motion"
import { FaHashnode } from "react-icons/fa6"
import { GoPersonFill } from "react-icons/go"
import profile from "../assets/image.jpg"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation() // Get current location

  const toggleMenu = () => setMenuOpen((prev) => !prev)
  const closeMenu = () => setMenuOpen(false)

  // Function to determine the path text based on current route
  const getPathText = () => {
    const pathname = location.pathname

    if (pathname === "/") {
      return "Profile"
    } else if (pathname === "/blogs" || pathname.startsWith("/blogs/")) {
      return "Blogs"
    } else if (pathname === "/aboutme" || pathname.startsWith("/aboutme/")) {
      return "Personal Info"
    } else {
      return "Profile" // Default fallback
    }
  }

  return (
    <header className="bg-[#f6fdd9] font-sans p-4 flex flex-col sm:flex-row justify-between items-center overflow-hidden">
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
          <h1 className="text-lg sm:text-xl font-semibold tracking-wide text-black">
            <Link to="/" onClick={closeMenu} className="hover:text-gray-900 transition-colors duration-300">
              CloudKinshuk / {getPathText()}
            </Link>
          </h1>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden text-2xl text-white focus:outline-none bg-black hover:bg-black rounded-lg p-2"
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
          <div className="w-full overflow-hidden sm:hidden bg-[#f6fdd9] rounded-md mt-2">
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
          to="/"
          className="flex items-center gap-2 hover:text-blue-300 transition-colors duration-300"
          onClick={closeMenu}
        >
          <div></div>
        </Link>
      </div>

      <div>
        <Link
          to="/blogs"
          className="flex items-center gap-2 text-black text-lg md:text-base transition-colors duration-300"
          onClick={closeMenu}
        >
          <FaHashnode className="text-lg text-black" />
          <span className="relative group">
            Blogs
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300" />
          </span>
        </Link>
      </div>
      <div>
        <Link
          to="/aboutme"
          className="flex items-center gap-2 text-black text-lg md:text-base transition-colors duration-300"
          onClick={closeMenu}
        >
          <GoPersonFill className="text-lg text-black" />
          <span className="relative group">
            About me
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300" />
          </span>
        </Link>
      </div>
    </div>
  )
}

export default Header
