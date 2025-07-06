import type React from "react"
import { FaCloud, FaGithub, FaTwitter, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa"
import { MdDiamond } from "react-icons/md";
interface SocialLink {
  icon: React.ElementType
  href: string
  label: string
}

const Footer = () => {
  const socialLinks: SocialLink[] = [
    { icon: FaGithub, href: "https://github.com/kinshukjainn", label: "GitHub" },
    { icon: FaTwitter, href: "https://twitter.com/realkinshuk004", label: "Twitter" },
    { icon: FaLinkedin, href: "https://linkedin.com/in/kinshukjainn", label: "LinkedIn" },
    { icon: FaInstagram, href: "https://instagram.com/kinshukjain._", label: "Instagram" },
    { icon: FaEnvelope, href: "mailto:kinshuk25jan04@gmail.com", label: "Email" },
  ]

  return (
    <footer className=" text-gray-300 py-8 mb-3 mr-3 ml-3 rounded-md  mt-6">
      <div className="container mx-auto px-4">
        {/* Top section with logo and name */}
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-red-500 animate-pulse">
              <FaCloud size={36} />
            </span>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-100 to-red-400 bg-clip-text text-transparent">
              CloudKinshuk
            </h2>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            {/* Hashnode Blog Button */}
            <a
              href="https://blog.cloudkinshuk.in"
              target="_blank"
              aria-label="Hashnode Blogs"
              rel="noopener noreferrer"
              className="group relative px-6 py-3 bg-gradient-to-r from-black via-red-800 to-black rounded-md font-semibold text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-black via-blue-700 to-red-900 transition-opacity duration-300"></div>
              <div className="relative flex items-center gap-2">
                < MdDiamond size={20} />
                <span>Subscribe to my Newsletter </span>
              </div>
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </a>

            {/* GitHub Repo Button */}
            <a
              href="https://github.com/kinshukjainn/kinshukkportfolio"
              aria-label="GitHub Repository"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-3 py-3 bg-white rounded-md font-semibold text-black  transform hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-grey-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center gap-2">
                <FaGithub size={20} />
                <span>GitHub Repository</span>
              </div>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white text-black to-transparent my-6"></div>

        {/* Social media links */}
        <div className="flex flex-col items-center">
          <div className="flex justify-center space-x-6 mb-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-400 hover:text-red-500 transform hover:scale-110 transition-all duration-300"
                aria-label={link.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <link.icon size={24} />
                <span className="sr-only">{link.label}</span>
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-xs text-gray-600 flex items-center gap-2">
            <span className="inline-block">☁️</span>© {new Date().getFullYear()} Kinshuk Jain. All rights reserved.
            <span className="inline-block">☁️</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
