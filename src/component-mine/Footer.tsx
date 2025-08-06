import type React from "react"
import { FaCloud, FaGithub, FaTwitter, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa"

interface SocialLink {
  icon: React.ElementType
  href: string
  label: string
  color: string
}

const Footer = () => {
  const socialLinks: SocialLink[] = [
    { icon: FaGithub, href: "https://github.com/kinshukjainn", label: "GitHub", color: "hover:text-gray-300" },
    { icon: FaTwitter, href: "https://twitter.com/realkinshuk004", label: "Twitter", color: "hover:text-blue-400" },
    { icon: FaLinkedin, href: "https://linkedin.com/in/kinshukjainn", label: "LinkedIn", color: "hover:text-blue-500" },
    { icon: FaInstagram, href: "https://instagram.com/kinshukjainn", label: "Instagram", color: "hover:text-pink-400" },
    { icon: FaEnvelope, href: "mailto:kinshuk25jan04@gmail.com", label: "Email", color: "hover:text-red-400" },
  ]

  return (
    <footer className="bg-neutral-900 text-white relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Floating particles animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full opacity-20 animate-ping animation-delay-1000"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-400 rounded-full opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-white rounded-full opacity-25 animate-bounce animation-delay-3000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Main content */}
        <div className="flex flex-col items-center space-y-8 lg:space-y-12">
          {/* Logo and brand section */}
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center gap-3 sm:gap-4">
              <div className="relative">
                <span className="text-blue-400 animate-pulse">
                  <FaCloud size={40} className="sm:w-12 sm:h-12 lg:w-14 lg:h-14" />
                </span>
                {/* Glow effect */}
                <div className="absolute inset-0 text-blue-400 animate-ping opacity-20">
                  <FaCloud size={40} className="sm:w-12 sm:h-12 lg:w-14 lg:h-14" />
                </div>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-blue-400 bg-clip-text text-transparent animate-gradient-x">
                CloudKinshuk
              </h2>
            </div>

            {/* Subtitle */}
            <p className="text-gray-300 text-sm sm:text-base lg:text-lg max-w-md mx-auto opacity-80 animate-fade-in-up animation-delay-500">
              Building the future, one cloud at a time
            </p>
          </div>

          {/* Social media links */}
          <div className="w-full max-w-md">
            <div className="flex justify-center items-center space-x-4 sm:space-x-6 lg:space-x-8">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`group relative p-3 sm:p-4  text-gray-100 ${link.color}`}
                  
                  aria-label={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* Background glow on hover */}
                  <div className="absolute inset-0"></div>

                  <link.icon
                    size={20}
                    className="sm:w-6 sm:h-6 relative z-10 transition-transform duration-300 group-hover:scale-110"
                  />

                  {/* Tooltip */}
                  <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-gray-700">
                    {link.label}
                  </span>

                  <span className="sr-only">{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="w-full max-w-4xl">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent animate-fade-in animation-delay-1200"></div>
          </div>

          {/* Copyright section */}
          <div className="text-center space-y-2 animate-fade-in-up animation-delay-1400">
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-500">
              <span className="animate-bounce animation-delay-1600">☁️</span>
              <span>© {new Date().getFullYear()} Kinshuk Jain. All rights reserved.</span>
              <span className="animate-bounce animation-delay-1800">☁️</span>
            </div>

            <p className="text-xs text-gray-600 animate-pulse">Made with ❤️ and lots of ☕</p>
          </div>
        </div>
      </div>

      {/* Bottom gradient border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 animate-gradient-x"></div>
    </footer>
  )
}

export default Footer
