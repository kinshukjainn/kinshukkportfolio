"use client"

import { Link, useLocation } from "react-router-dom"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import Profile from "../assets/image.jpg"

const Header = () => {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const getPathText = () => {
    const pathname = location.pathname
    if (pathname === "/") return "Home"
    if (pathname === "/aboutme" || pathname.startsWith("/aboutme/")) return "Me"
    return "Blogs"
  }

  const isActiveRoute = (path: string) => {
    if (path === "/" && location.pathname === "/") return true
    if (path === "/blog" && (location.pathname === "/blog" || location.pathname.startsWith("/blog/"))) return true
    if (path === "/aboutme" && (location.pathname === "/aboutme" || location.pathname.startsWith("/aboutme/"))) return true
    return false
  }

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-[#0d0d0de6] border-b border-neutral-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-20">
            {/* Brand & Avatar */}
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 border border-gray-700 overflow-hidden rounded-full flex-shrink-0 bg-[#1f1f1f]">
                <img
                  src={Profile || "/placeholder.svg"}
                  alt="Kinshuk Jain"
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => {
                    const target = e.currentTarget
                    target.style.display = "none"
                    const parent = target.parentElement
                    if (parent && !parent.querySelector(".fallback-avatar")) {
                      const fallback = document.createElement("div")
                      fallback.className =
                        "fallback-avatar flex items-center justify-center w-full h-full text-white text-sm font-bold"
                      fallback.textContent = "KJ"
                      parent.appendChild(fallback)
                    }
                  }}
                />
              </div>
              <Link to="/" onClick={closeMenu}>
                <div className="text-white text-xl sm:text-2xl font-semibold tracking-wide">
                  Kinshuk Jain{" "}
                  <span className="ml-2 text-xs sm:text-sm font-normal text-gray-400">| {getPathText()}</span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-3">
              <NavLink to="/blog" isActive={isActiveRoute("/blog")} label="Blogs" />
              <NavLink to="/aboutme" isActive={isActiveRoute("/aboutme")} label="About" />
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-white p-3 rounded-xl hover:bg-[#222] transition duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#111] mt-2 mx-4 rounded-2xl border border-neutral-800">
            <div className="px-4 py-4 flex flex-col gap-2">
              <MobileNavLink to="/blog" isActive={isActiveRoute("/blog")} label="Blogs" onClick={closeMenu} />
              <MobileNavLink to="/aboutme" isActive={isActiveRoute("/aboutme")} label="About" onClick={closeMenu} />
            </div>
          </div>
        )}
      </header>

      {/* Background Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </>
  )
}

// Desktop NavLink
interface NavLinkProps {
  to: string
  isActive: boolean
  label: string
}

const NavLink = ({ to, isActive, label }: NavLinkProps) => (
  <Link
    to={to}
    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
      isActive
        ? "bg-white text-black shadow-inner"
        : "text-white hover:text-[#ff9100] hover:bg-[#1a1a1a]"
    }`}
    aria-current={isActive ? "page" : undefined}
  >
    {label}
  </Link>
)

// Mobile NavLink
interface MobileNavLinkProps {
  to: string
  isActive: boolean
  label: string
  onClick: () => void
}

const MobileNavLink = ({ to, isActive, label, onClick }: MobileNavLinkProps) => (
  <Link
    to={to}
    onClick={onClick}
    className={`block w-full px-4 py-3 text-base rounded-xl font-semibold transition-all duration-200 ${
      isActive
        ? "bg-white text-black shadow-inner"
        : "text-white hover:text-[#ff9100] hover:bg-[#1c1c1c]"
    }`}
    aria-current={isActive ? "page" : undefined}
  >
    {label}
  </Link>
)

export default Header
