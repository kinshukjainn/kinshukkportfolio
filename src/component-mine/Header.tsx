import { Link, useLocation } from "react-router-dom"
import Profile from "../assets/image.jpg"

const Header = () => {
  const location = useLocation()

  const getPathText = () => {
    const pathname = location.pathname

    if (pathname === "/") return "Home"
    if (pathname === "/aboutme" || pathname.startsWith("/aboutme/")) return "Me"
    return "Blogs"
  }

  const isActiveRoute = (path: string) => {
    if (path === "/" && location.pathname === "/") return true
    if (path === "/blog" && (location.pathname === "/blog" || location.pathname.startsWith("/blog/"))) return true
    if (path === "/aboutme" && (location.pathname === "/aboutme" || location.pathname.startsWith("/aboutme/")))
      return true
    return false
  }

  return (
    <header className="bg-[#181818] mx-4 mt-2 mb-4 rounded-lg p-4 shadow-lg border border-gray-800/50">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        {/* Brand Section */}
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div className="relative flex-shrink-0">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden ring-2 ring-gray-700/50 transition-all duration-300 hover:ring-red-500/50">
              <img
                src={Profile || "/placeholder.svg"}
                alt="Kinshuk Jain's Profile"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                onError={(e) => {
                  const target = e.currentTarget
                  target.style.display = "none"
                  const parent = target.parentElement
                  if (parent && !parent.querySelector(".fallback-avatar")) {
                    const fallback = document.createElement("div")
                    fallback.className =
                      "fallback-avatar flex items-center justify-center w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 text-white text-sm font-bold rounded-full"
                    fallback.textContent = "KJ"
                    parent.appendChild(fallback)
                  }
                }}
              />
            </div>
          </div>

          {/* Brand Name */}
          <div className="flex items-center">
            <h1 className="text-lg sm:text-xl font-semibold text-white">
              <Link
                to="/"
                className="hover:text-gray-300 transition-colors duration-300 focus:outline-none focus:text-red-400"
              >
                Kinshuk Jain
                <span className="text-gray-400 font-normal ml-2">| {getPathText()}</span>
              </Link>
            </h1>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex items-center justify-center sm:justify-end">
          <div className="flex items-center gap-1 sm:gap-2  p-1">
            <NavLink to="/blog" isActive={isActiveRoute("/blog")} label="blogs" />
            <NavLink to="/aboutme" isActive={isActiveRoute("/aboutme")} label="About Me" />
          </div>
        </nav>
      </div>
    </header>
  )
}

// Professional Navigation Link Component
interface NavLinkProps {
  to: string
  isActive: boolean
  
  label: string
}

const NavLink = ({ to, isActive, label }: NavLinkProps) => {
  return (
    <Link
      to={to}
      className={`
        relative px-4 py-2 rounded-md text-xl font-medium transition-all duration-300 ease-out
        focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:ring-offset-2 focus:ring-offset-gray-900
        ${
          isActive
            ? "bg-red-600 text-white shadow-lg shadow-red-600/25 transform scale-105"
            : "text-gray-300 hover:text-white  hover:scale-105"
        }
      `}
      aria-current={isActive ? "page" : undefined}
    >
      <span className="relative z-10">{label}</span>
      {isActive && <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500 rounded-md opacity-90" />}
    </Link>
  )
}

export default Header
