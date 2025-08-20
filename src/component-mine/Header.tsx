"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion, useScroll } from "framer-motion"
import { FiMenu, FiX } from "react-icons/fi"
import { UserButton, useUser, SignOutButton } from "@clerk/clerk-react"
import Profile from "../assets/image.jpg"

const useScrollPosition = (threshold: number = 10): boolean => {
  const [scrolled, setScrolled] = useState<boolean>(false)
  const { scrollY } = useScroll()
  
  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest: number) => {
      setScrolled(latest > threshold)
    })
    return unsubscribe
  }, [scrollY, threshold])
  
  return scrolled
}

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
      className={`relative px-6 py-3 rounded-xl transition-all duration-300 ${
        isActive 
          ? "bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 text-white border border-emerald-500/30" 
          : "text-gray-300 hover:text-white hover:bg-white/5"
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {isActive && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-xl"
          layoutId="activeBackground"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
      <span className="relative z-10 font-medium">{label}</span>
    </motion.div>
  </Link>
)

const Header = () => {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [imageError, setImageError] = useState<boolean>(false)
  const scrolled = useScrollPosition(20)
  const { isSignedIn } = useUser()

  const protectedRoutes: string[] = ["/blog", "/sources"]
  
  const isProtectedRoute: boolean = protectedRoutes.some((route: string) =>
    location.pathname.startsWith(route)
  )

  const getPathText = (): string => {
    const { pathname } = location
    if (pathname === "/") return "Cloudkinshuk"
    if (pathname.startsWith("/gears")) return "Gears I Use"
    if (pathname.startsWith("/blog")) return "Minimal Mind"
    if (pathname.startsWith("/sources")) return "Learning Sources"
    return "Cloudkinshuk"
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
    { path: "/gears", label: "Gear I Use" },
    { path: "/sources", label: "Learning Sources" },
  ]

  return (
    <>
      {/* Header */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <motion.div
          className="relative backdrop-blur-xl border-b"
          style={{
            background: scrolled
              ? "linear-gradient(135deg, rgba(3,7,18,0.95) 0%, rgba(15,23,42,0.92) 50%, rgba(3,7,18,0.95) 100%)"
              : "linear-gradient(135deg, rgba(3,7,18,0.85) 0%, rgba(15,23,42,0.82) 50%, rgba(3,7,18,0.85) 100%)",
          }}
          animate={{
            borderBottomColor: scrolled
              ? "rgba(6,182,212,0.2)"
              : "rgba(255,255,255,0.1)",
          }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/[0.02] to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/[0.05] via-transparent to-transparent" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 sm:h-20">
              {/* Logo Section */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="flex items-center gap-3 sm:gap-4"
              >
                <motion.div 
                  className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl overflow-hidden ring-2 ring-emerald-500/30 shadow-lg shadow-emerald-500/20"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {!imageError ? (
                    <img
                      src={Profile}
                      alt="Kinshuk Jain"
                      className="w-full h-full object-cover"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-white text-sm sm:text-lg font-bold bg-gradient-to-br from-emerald-600 to-cyan-600">
                      KJ
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </motion.div>
                
                <Link to="/" onClick={closeMenu}>
                  <motion.h1 
                    className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-300 to-white bg-clip-text text-transparent"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {getPathText()}
                  </motion.h1>
                </Link>
              </motion.div>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-2">
                {navItems.map((item: NavItem, index: number) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
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
                    className="flex items-center gap-4 ml-6 pl-6 border-l border-white/10"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    {isSignedIn ? (
                      <>
                        <UserButton 
                          afterSignOutUrl="/"
                          appearance={{
                            elements: {
                              avatarBox: "w-10 h-10 ring-2 ring-emerald-500/30 shadow-lg shadow-emerald-500/20",
                            }
                          }}
                        />
                        <SignOutButton>
                          <motion.button 
                            className="px-5 py-2.5 bg-gradient-to-r from-red-500 to-rose-600 text-white text-sm font-medium rounded-xl hover:from-red-600 hover:to-rose-700 transition-all duration-300 shadow-lg shadow-red-500/25"
                            whileHover={{ scale: 1.05, y: -1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Sign Out
                          </motion.button>
                        </SignOutButton>
                      </>
                    ) : (
                      <Link to="/sign-in">
                        <motion.div
                          className="px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-green-500 text-white text-sm font-medium rounded-xl hover:from-emerald-600 hover:to-green-600 transition-all duration-300 shadow-lg shadow-emerald-500/25"
                          whileHover={{ scale: 1.05, y: -1 }}
                          whileTap={{ scale: 0.95 }}
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
                  className="relative p-3 text-white hover:bg-white/10 rounded-xl transition-all duration-300"
                  whileTap={{ scale: 0.9 }}
                >
                  <motion.div
                    animate={{ rotate: isMenuOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
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
        className="lg:hidden fixed inset-0 z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: isMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ pointerEvents: isMenuOpen ? 'auto' : 'none' }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: isMenuOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          onClick={closeMenu}
        />

        {/* Mobile Menu Content */}
        <motion.div
          className="absolute top-16 sm:top-20 left-0 right-0 bg-gradient-to-b from-slate-900/95 to-slate-800/95 backdrop-blur-xl border-b border-white/10"
          initial={{ y: -50, opacity: 0 }}
          animate={{ 
            y: isMenuOpen ? 0 : -50, 
            opacity: isMenuOpen ? 1 : 0 
          }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="px-4 sm:px-6 py-6 space-y-3">
            {navItems.map((item: NavItem, index: number) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: isMenuOpen ? 1 : 0, 
                  x: isMenuOpen ? 0 : -20 
                }}
                transition={{ 
                  duration: 0.3, 
                  delay: isMenuOpen ? index * 0.1 : 0 
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
                className="pt-6 mt-6 border-t border-white/10 space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: isMenuOpen ? 1 : 0, 
                  y: isMenuOpen ? 0 : 20 
                }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                {isSignedIn ? (
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <UserButton 
                        afterSignOutUrl="/"
                        appearance={{
                          elements: {
                            avatarBox: "w-10 h-10 ring-2 ring-emerald-500/30 shadow-lg shadow-emerald-500/20",
                          }
                        }}
                      />
                      <span className="text-gray-300 text-sm">Signed in</span>
                    </div>
                    <SignOutButton>
                      <motion.button 
                        className="w-full px-6 py-3 bg-gradient-to-r from-red-500 to-rose-600 text-white text-sm font-medium rounded-xl hover:from-red-600 hover:to-rose-700 transition-all duration-300 shadow-lg shadow-red-500/25"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
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
                      className="w-full px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white text-sm font-medium rounded-xl hover:from-emerald-600 hover:to-green-600 transition-all duration-300 shadow-lg shadow-emerald-500/25 text-center"
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