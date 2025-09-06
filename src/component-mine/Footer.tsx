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
    { icon: FaGithub, href: "https://github.com/kinshukjainn", label: "GitHub", color: "hover:text-gray-700" },
    { icon: FaTwitter, href: "https://twitter.com/realkinshuk004", label: "Twitter", color: "hover:text-blue-600" },
    { icon: FaLinkedin, href: "https://linkedin.com/in/kinshukjainn", label: "LinkedIn", color: "hover:text-blue-700" },
    { icon: FaInstagram, href: "https://instagram.com/kinshukjainn", label: "Instagram", color: "hover:text-pink-600" },
    { icon: FaEnvelope, href: "mailto:kinshuk25jan04@gmail.com", label: "Email", color: "hover:text-red-600" },
  ]

  return (
    <footer className="bg-neutral-900 text-gray-100 relative overflow-hidden  backdrop-blur-xl">
      {/* Windows 11 style background blur overlay */}
      
      {/* Subtle floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse animation-delay-1000"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-white rounded-full animate-pulse animation-delay-3000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Main content */}
        <div className="flex flex-col items-center space-y-8 lg:space-y-12">
          {/* Logo and brand section */}
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center gap-3 sm:gap-4">
              <div className="relative p-3 rounded-xl bg-white/60 backdrop-blur-sm border border-white/20 shadow-lg">
                <span className="text-blue-600">
                  <FaCloud size={40} className="sm:w-12 sm:h-12 lg:w-14 lg:h-14 drop-shadow-sm" />
                </span>
                {/* Subtle glow effect */}
                <div className="absolute inset-0 text-blue-600/20 animate-pulse opacity-50 rounded-xl">
                  <FaCloud size={40} className="sm:w-12 sm:h-12 lg:w-14 lg:h-14 mt-3 ml-3" />
                </div>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-semibold text-white">
                CloudKinshuk
              </h2>
            </div>

            {/* Subtitle */}
            <p className="text-gray-200 text-sm sm:text-base lg:text-lg max-w-md mx-auto font-semibold">
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
                  className={`group relative p-3 sm:p-4 text-gray-100 ${link.color}  shadow-sm transition-all duration-300  hover:scale-105`}
                  
                  aria-label={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <link.icon
                    size={20}
                    className="sm:w-6 sm:h-6 relative z-10 transition-transform duration-200"
                  />

                  {/* Windows 11 style tooltip */}
                  <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900/90 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap backdrop-blur-sm border border-gray-700/50 shadow-xl">
                    {link.label}
                    {/* Tooltip arrow */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900/90"></div>
                  </span>

                  <span className="sr-only">{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="w-full max-w-4xl">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-300/50 to-transparent"></div>
          </div>

          {/* Copyright section */}
          <div className="text-center space-y-2">
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-500 font-light">
              <span className="animate-pulse animation-delay-1600">☁️</span>
              <span>© {new Date().getFullYear()} Kinshuk Jain. All rights reserved.</span>
              <span className="animate-pulse animation-delay-1800">☁️</span>
            </div>

            <p className="text-xs text-gray-400 font-light">Made with ❤️ and lots of ☕</p>
          </div>
        </div>
      </div>

      {/* Windows 11 style accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500/60 via-indigo-500/60 to-blue-500/60"></div>
    </footer>
  )
}

export default Footer;