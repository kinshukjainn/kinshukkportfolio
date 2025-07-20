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
    if (pathname === "/") return "Cloudkinshuk"
    if (pathname === "/gears" || pathname.startsWith("/gears/")) return "Gears I Use"
    if (pathname === "/blog" || pathname.startsWith("/blog/")) return "Minimal Mind"
    return "Learning sources"
  }

  const isActiveRoute = (path: string) => {
    if (path === "/" && location.pathname === "/") return true
    if (path === "/blog" && (location.pathname === "/blog" || location.pathname.startsWith("/blog/"))) return true
    if (path === "/gears" && (location.pathname === "/gears" || location.pathname.startsWith("/gears/"))) return true
    if (path === "/sources" && (location.pathname === "/sources" || location.pathname.startsWith("/sources/")))
      return true
    return false
  }

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-black/20 border border-white/10 rounded-md mt-2 mb-2 ml-2 mr-2 shadow-2xl shadow-black/50">
        <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5 rounded-md"></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-20">
            {/* Brand & Avatar */}
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 border border-white/20 overflow-hidden rounded-full flex-shrink-0 bg-white/10 backdrop-blur-sm">
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
                <div className="text-white text-3xl sm:text-2xl font-sans font-semibold tracking-wide drop-shadow-lg">
                  {getPathText()}
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-3">
              <NavLink to="/blog" isActive={isActiveRoute("/blog")} label="Blogs" />
              <NavLink to="/gears" isActive={isActiveRoute("/gears")} label="Gear i use" />
              <NavLink to="/sources" isActive={isActiveRoute("/sources")} label="Learning sources" />
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-white p-3 rounded-xl hover:bg-white/10 backdrop-blur-sm transition duration-200 border border-white/10"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/30 backdrop-blur-xl mt-2 mx-4 rounded-2xl border border-white/20 shadow-2xl shadow-black/50">
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-2xl"></div>
            <div className="relative px-4 py-4 flex flex-col gap-2">
              <MobileNavLink to="/blog" isActive={isActiveRoute("/blog")} label="Blogs" onClick={closeMenu} />
              <MobileNavLink to="/gears" isActive={isActiveRoute("/gears")} label="Gear i use" onClick={closeMenu} />
              <MobileNavLink
                to="/sources"
                isActive={isActiveRoute("/sources")}
                label="Learning sources"
                onClick={closeMenu}
              />
            </div>
          </div>
        )}
      </header>

      {/* Background Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
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
    className={`px-4 py-2 rounded-full text-xl font-medium transition-all duration-200 backdrop-blur-sm border ${
      isActive
        ? "bg-white/90 text-black shadow-inner border-white/30"
        : "text-white hover:text-[#ff9100] hover:bg-white/10 border-white/10 hover:border-white/20"
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
    className={`block w-full px-4 py-3 text-base rounded-xl font-semibold transition-all duration-200 backdrop-blur-sm border ${
      isActive
        ? "bg-white/90 text-black shadow-inner border-white/30"
        : "text-white hover:text-[#ff9100] hover:bg-white/10 border-white/10 hover:border-white/20"
    }`}
    aria-current={isActive ? "page" : undefined}
  >
    {label}
  </Link>
)

export default Header
