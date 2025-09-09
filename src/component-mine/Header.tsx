"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion} from "framer-motion"
import { FiMenu, FiX } from "react-icons/fi"
import { UserButton, useUser, SignOutButton } from "@clerk/clerk-react"
import Profile from "../assets/image.jpg"



interface NavItem {
  path: string
  label: string
}

interface NavLinkProps {
  to: string
  isActive: boolean
  label: string
  onClick?: () => void
}

const NavLink = ({ to, isActive, label, onClick }: NavLinkProps) => (
  <Link to={to} onClick={onClick}>
    <motion.div
      className={`relative px-3 py-1 rounded-sm transition-all duration-200 ${
        isActive
          ? "bg-[#252525] text-green-500 shadow-sm border border-[#444444]"
          : "text-gray-100 hover:text-green-500 hover:bg-[#252525]"
      }`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {isActive && (
        <motion.div
          className="absolute inset-0 bg-[#252525] rounded-lg text-green-500"
          layoutId="activeBackground"
          transition={{ type: "spring", bounce: 0.1, duration: 0.3 }}
        />
      )}
      <span className="relative z-10 font-medium text-sm">{label}</span>
    </motion.div>
  </Link>
)

const Header = () => {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [imageError, setImageError] = useState<boolean>(false)
  const { isSignedIn } = useUser()

  const protectedRoutes: string[] = ["/blog", "/sources"]
  
  const isProtectedRoute: boolean = protectedRoutes.some((route: string) =>
    location.pathname.startsWith(route)
  )

  const getPathText = (): string => {
    const { pathname } = location
    if (pathname.startsWith("/gears")) return "Gears I Use"
    if (pathname.startsWith("/blog")) return "Blogs"
    if (pathname.startsWith("/sources")) return "Learning"
    if (pathname.startsWith("/sign-in")) return "Verify"
    return "Home"
  }

  const isActiveRoute = (path: string): boolean =>
    location.pathname.startsWith(path) || location.pathname === path

  const toggleMenu = (): void => setIsMenuOpen(!isMenuOpen)
  const closeMenu = (): void => setIsMenuOpen(false)

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isMenuOpen])

  const navItems: NavItem[] = [
    { path: "/blog", label: "Blogs" },
    { path: "/gears", label: "Dev Setup" },
    { path: "/sources", label: "Learning Sources" },
  ]

  return (
    <>
      {/* Header */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-[9999]"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <motion.div
          className="relative backdrop-blur-xl"
        >
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 sm:h-20">
              {/* Logo Section */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="flex items-center gap-3 sm:gap-4"
              >
                <motion.div
                  className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-md overflow-hidden shadow-sm"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  {!imageError ? (
                    <img
                      src={Profile}
                      alt="Kinshuk Jain"
                      className="w-full h-full object-cover"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-white text-sm sm:text-lg font-semibold bg-gradient-to-br from-blue-500 to-blue-600">
                      kinshuk jain
                    </div>
                  )}
                </motion.div>
                
                <Link to="/" onClick={closeMenu}>
                  <motion.h1 
                    className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white"
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    Cloudkinshuk {"/"} {getPathText()}
                  </motion.h1>
                </Link>
              </motion.div>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-1">
                {navItems.map((item: NavItem, index: number) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                  >
                    <NavLink
                      to={item.path}
                      isActive={isActiveRoute(item.path)}
                      label={item.label}
                    />
                  </motion.div>
                ))}

                {/* Auth Section - Only on Protected Routes */}
                {isProtectedRoute && (
                  <motion.div
                    className="flex items-center gap-4 ml-6 pl-6 border-l border-gray-200/60"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    {isSignedIn ? (
                      <>
                        <UserButton 
                          afterSignOutUrl="/"
                          appearance={{
                            elements: {
                              avatarBox: "w-10 h-10 ring-1 ring-gray-200/60 shadow-sm",
                            }
                          }}
                        />
                        <SignOutButton>
                          <motion.button 
                            className="px-2 py-1 bg-[#252525] border border-[#444444] text-white text-lg  rounded-sm transition-all cursor-pointer duration-200 shadow-sm"
                            whileHover={{ scale: 1.02, y: -1 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            Sign Out
                          </motion.button>
                        </SignOutButton>
                      </>
                    ) : (
                      <Link to="/sign-in">
                        <motion.div
                          className="px-5 py-2.5 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-600 transition-all duration-200 shadow-sm"
                          whileHover={{ scale: 1.02, y: -1 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Sign In
                        </motion.div>
                      </Link>
                    )}
                  </motion.div>
                )}
              </nav>

              {/* Mobile Menu Button */}
              <div className="lg:hidden">
                <motion.button
                  onClick={toggleMenu}
                  className="relative p-2 text-white bg-[#252525] border border-[#444444] rounded-sm outline-none transition-all cursor-pointer duration-200"
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    animate={{ rotate: isMenuOpen ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isMenuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
                  </motion.div>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <motion.div
        className="lg:hidden fixed inset-0 z-[9998]"
        initial={{ opacity: 0 }}
        animate={{ opacity: isMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        style={{ pointerEvents: isMenuOpen ? 'auto' : 'none' }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: isMenuOpen ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          onClick={closeMenu}
        />

        {/* Mobile Menu Content */}
        <motion.div
          className="absolute top-16 sm:top-20 left-0 right-0 text-white bg-neutral-900 backdrop-blur-xl"
          initial={{ y: -50, opacity: 0 }}
          animate={{ 
            y: isMenuOpen ? 0 : -50, 
            opacity: isMenuOpen ? 1 : 0 
          }}
          transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="px-4 sm:px-6 py-6 space-y-2">
            {navItems.map((item: NavItem, index: number) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: isMenuOpen ? 1 : 0, 
                  x: isMenuOpen ? 0 : -20 
                }}
                transition={{ 
                  duration: 0.2, 
                  delay: isMenuOpen ? index * 0.05 : 0 
                }}
              >
                <NavLink
                  to={item.path}
                  isActive={isActiveRoute(item.path)}
                  label={item.label}
                  onClick={closeMenu}
                />
              </motion.div>
            ))}

            {/* Mobile Auth Section - Only on Protected Routes */}
            {isProtectedRoute && (
              <motion.div
                className="pt-4 mt-4 border-t border-gray-200/60 space-y-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: isMenuOpen ? 1 : 0, 
                  y: isMenuOpen ? 0 : 20 
                }}
                transition={{ duration: 0.25, delay: 0.15 }}
              >
                {isSignedIn ? (
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <UserButton 
                        afterSignOutUrl="/"
                        appearance={{
                          elements: {
                            avatarBox: "w-10 h-10 ring-1 ring-gray-200/60 shadow-sm",
                          }
                        }}
                      />
                      <span className="text-gray-100 text-sm">Signed in</span>
                    </div>
                    <SignOutButton>
                      <motion.button 
                        className="w-full px-6 py-3 bg-[#252525] text-white text-sm font-medium rounded-sm border border-[#444444] hover:bg-[#222222] transition-all cursor-pointer duration-200 shadow-sm"
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        onClick={closeMenu}
                      >
                        Sign Out
                      </motion.button>
                    </SignOutButton>
                  </div>
                ) : (
                  <Link 
                    to="/sign-in" 
                    onClick={closeMenu}
                    className="block"
                  >
                    <motion.div
                      className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Sign In
                    </motion.div>
                  </Link>
                )}
              </motion.div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </>
  )
}

export default Header;