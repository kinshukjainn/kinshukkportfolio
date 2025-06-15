"use client"

import { motion } from "framer-motion"
import { Github, Mail, MessageCircle, ExternalLink, MapPin, Linkedin } from "lucide-react"
import { useState, useEffect } from "react"

export default function Portfolio() {
  const [typedText, setTypedText] = useState("")
  const fullText = "$ whoami"

  useEffect(() => {
    let i = 0
    const typingTimer = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(typingTimer)
      }
    }, 150)
    return () => clearInterval(typingTimer)
  }, [])

  const personalInfo = {
    name: "Kinshuk Jain",
    title: "Aspiring Cloud-Native Solutions Engineer",
    email: "kinshuk25jan04@gmail.com",
    whatsappNumber: "919172702501",
    location: "Ghaziabad, UP, India",
  }

  const socialLinks = [
    { label: "GitHub", url: "https://github.com/kinshukjainn", icon: Github },
    {
      label: "LinkedIn",
      url: "https://linkedin.com/in/kinshukjainn/",
      icon: Linkedin,
    },
  ]

  const techStack = ["AWS", "React", "Docker", "Kubernetes", "Terraform", "Linux", "Git"]

  const projects = [
    {
      title: "Tech Blog Platform",
      description: [
        "This blog isn't built through traditional programming—instead, it utilizes Hashnode's CMS to link my blog content to a custom subdomain I purchased via Hostinger. Essentially, it's a content-focused platform where I share my ideas, presented through a personalized URL.",
        "What makes this setup significant is that I independently configured the redirection of my custom domain to my Hashnode blog using AWS Route 53. This AWS service allowed me to manage the domain, subdomain, and SSL certificate setup. While I had prior guidance when connecting my portfolio website, this time I handled everything—from DNS configuration to SSL management—completely on my own.",
      ],
      url: "https://blog.cloudkinshuk.in",
      tech: ["Hashnode", "Route53", "DNS", "CDN"],
      status: "LIVE",
    },
    {
      title: "PassGentool",
      description: ["Password generation tool - currently in development phase"],
      url: "#",
      tech: ["React", "TypeScript", "Tailwind", "Vite"],
      status: "BUILDING",
    },
  ]

  const certifications = [
    {
      title: "AWS Cloud Practitioner",
      status: "IN_PROGRESS",
      progress: "679/1000 (Recent attempt: Jan 24, 2025)",
      expected: "Q3 2025",
    },
    {
      title: "AWS Serverless Badge",
      status: "COMPLETED",
      url: "https://www.credly.com/badges/0bcd1190-2d68-45ff-91d9-32b65aa93ed8/public_url",
      year: "2024",
    },
    {
      title: "AWS Machine Learning Badge",
      status: "COMPLETED",
      url: "https://www.credly.com/badges/a0042ec2-cc6e-4a99-84de-a1516ee5775a/public_url",
      year: "2024",
    },
  ]

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi Kinshuk, I saw your portfolio and wanted to connect.")
    window.open(`https://wa.me/${personalInfo.whatsappNumber}?text=${message}`, "_blank")
  }

  return (
    <div className="min-h-screen bg-[#121212] text-white overflow-x-hidden">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 xl:px-12 py-16"
      >
        <div className="max-w-7xl mx-auto w-full">
          {/* Terminal Prompt */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8 sm:mb-10 lg:mb-12"
          >
            <div className="text-green-400 text-base sm:text-lg lg:text-xl mb-2 font-mono">
              {typedText}
              <span className="animate-pulse">|</span>
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-10 sm:mb-12 lg:mb-16"
          >
            <h1 className="personal-name mb-4 sm:mb-6 leading-tight">{personalInfo.name}</h1>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-300 mb-4 sm:mb-6 font-medium">
              {personalInfo.title}
            </h2>
            <div className="flex items-center text-gray-200 text-sm sm:text-base lg:text-lg">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
              {personalInfo.location}
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-10 lg:mb-12 max-w-md"
          >
            <button
              onClick={handleWhatsAppClick}
              className="w-full rounded-full text-green-500 border-2 border-green-500 hover:bg-green-500 hover:text-black px-6 py-3 sm:py-4 font-medium hover:font-bold transition-all duration-300 flex items-center justify-center gap-3 text-sm sm:text-base lg:text-lg hover:scale-105 active:scale-95"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              <span>WhatsApp</span>
            </button>
            <a
              href={`mailto:${personalInfo.email}`}
              className="w-full border-2 border-white text-white rounded-full px-6 py-3 sm:py-4 font-semibold hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-3 text-sm sm:text-base lg:text-lg hover:scale-105 active:scale-95"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              <span>Email Me</span>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6 max-w-md"
          >
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full border-2 border-yellow-200 text-gray-100 px-6 py-3 sm:py-4 hover:font-bold hover:shadow-2xl hover:shadow-yellow-500/50 hover:text-black hover:bg-[#FF9100] rounded-full transition-all duration-300 flex items-center justify-center gap-3 text-sm sm:text-base lg:text-lg hover:scale-105 active:scale-95"
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  {social.label}
                </a>
              )
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-12 sm:py-16 lg:py-20 space-y-20 sm:space-y-24 lg:space-y-32">
        {/* About Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6 sm:space-y-8"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold flex items-center font-mono gap-3 sm:gap-4">
            <span className="text-yellow-200 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">#</span>
            About
          </h2>
          <div className="space-y-4 sm:space-y-6 text-base sm:text-lg lg:text-xl text-gray-100 leading-relaxed">
            <p>
              I'm a passionate Cloud-Native Solutions Engineer with a strong focus on AWS technologies, React
              development, and DevOps practices. Currently pursuing my Bachelor's in Electrical Engineering while
              actively learning and building cloud solutions.
            </p>
            <p>
              Always open to connecting with fellow developers, engineers, and anyone curious about technology and cloud
              computing. Let's build something amazing together!
            </p>
          </div>
          <div className="p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-gray-800 via-black to-yellow-900/20 border border-gray-700">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-mono text-[#ff9100] font-bold mb-4 sm:mb-6">
              Quick Info
            </h3>
            <div className="space-y-2 sm:space-y-3 text-sm sm:text-base lg:text-lg text-gray-100">
              <div className="flex items-center gap-2">📍 {personalInfo.location}</div>
              <div className="flex items-center gap-2">📧 {personalInfo.email}</div>
              <div className="flex items-center gap-2">🟢 Available for opportunities</div>
            </div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8 sm:space-y-10 lg:space-y-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold flex items-center font-mono gap-3 sm:gap-4">
            <span className="text-yellow-200 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">#</span>
            Projects
          </h2>
          <div className="grid gap-6 sm:gap-8 lg:gap-10">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-[#171717] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-gray-800"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 lg:gap-6 mb-4 sm:mb-6">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold">{project.title}</h3>
                  <span
                    className={`px-3 sm:px-4 lg:px-5 py-1 sm:py-2 text-xs sm:text-sm lg:text-base font-bold rounded-full w-fit ${
                      project.status === "LIVE" ? "bg-blue-500 text-white" : "border-2 border-yellow-200 text-white"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg text-gray-100 leading-relaxed">
                  {project.description.map((paragraph, pIndex) => (
                    <p key={pIndex}>{paragraph}</p>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 sm:px-4 py-1 sm:py-2 text-black font-semibold text-xs sm:text-sm lg:text-base rounded-xl sm:rounded-2xl bg-[#FF9100]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portfolio-website-link inline-flex items-center gap-2 sm:gap-3 text-sm sm:text-base lg:text-lg"
                >
                  <span>View Project</span>
                  <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Tech Stack Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6 sm:space-y-8"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-mono font-semibold lg:font-bold flex items-center gap-3 sm:gap-4 text-white">
            <span className="text-yellow-300 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">#</span>
            Tech Stack
          </h2>
          <div className="bg-[#0d0d0d] border border-[#1f1f1f] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-[0_0_0_1px_#1a1a1a]">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-3 sm:gap-4 lg:gap-5 mb-6 sm:mb-8">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center px-3 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 text-xs sm:text-sm lg:text-base font-medium text-white hover:shadow-lg hover:shadow-[#ff9100]/50 hover:font-mono border-2 border-[#ff9100] rounded-lg sm:rounded-xl bg-[#121212] hover:bg-[#ff9100] hover:text-black transition-all duration-300 active:scale-95 select-none cursor-pointer"
                >
                  {tech}
                </div>
              ))}
            </div>
            <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed bg-[#141414] p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl border border-[#202020]">
              I believe in continuous learning and hands-on experience. Currently focusing on deepening my AWS expertise
              while exploring modern DevOps practices and cloud-native architectures.
            </p>
          </div>
        </motion.section>

        {/* Certifications Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6 sm:space-y-8"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-mono font-bold flex items-center gap-3 sm:gap-4">
            <span className="text-yellow-200 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">#</span>
            Certifications
          </h2>
          <div className="border-2 border-[#ff9100] rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
            <h3 className="text-base sm:text-lg lg:text-xl font-mono font-bold mb-2 sm:mb-3 text-yellow-200">
              Current Focus
            </h3>
            <p className="text-gray-100 text-sm sm:text-base lg:text-lg">
              AWS Cloud Practitioner - Recent score:{" "}
              <span className="font-bold text-[#ff9100] font-mono">679/1000</span> (Jan 24, 2025)
            </p>
          </div>
          <div className="grid gap-4 sm:gap-6 lg:gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gradient-to-tr from-[#171717] via-[#ff9100]/10 to-gray-800/50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-gray-700"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 sm:gap-6">
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-2 sm:mb-3">{cert.title}</h3>
                    <p className="text-gray-300 text-sm sm:text-base lg:text-lg">
                      {cert.progress || `Status: ${cert.status.replace("_", " ")}`}
                      {cert.year && ` (${cert.year})`}
                    </p>
                  </div>
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 sm:gap-3 hover:font-bold hover:underline text-white hover:text-[#ff9100] transition-all duration-300 text-sm sm:text-base lg:text-lg hover:scale-105 active:scale-95"
                    >
                      View Certificate <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6 sm:space-y-8"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold font-mono flex items-center gap-3 sm:gap-4">
            <span className="text-yellow-200 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">#</span>
            Education
          </h2>
          <div className="bg-[#121212] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-gray-900 shadow-lg shadow-black/50">
            <div className="mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3">Bachelor of Technology</h3>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-2 sm:mb-3">Electrical Engineering</p>
              <p className="text-sm sm:text-base lg:text-lg text-gray-400 mb-3 sm:mb-4">
                JSS Academy of Technical Education
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-400 text-sm sm:text-base lg:text-lg">
                <span>
                  Noida, Uttar Pradesh | <span className="text-[#ff9100] font-mono font-bold">2022 - 2026</span>
                </span>
                <span className="px-3 sm:px-4 py-1 sm:py-2 border-2 border-[#ff9100] hover:shadow-md hover:shadow-[#ff9100]/50 rounded-full text-white text-xs sm:text-sm lg:text-base font-bold w-fit">
                  Active
                </span>
              </div>
            </div>
            <div>
              <h4 className="text-base sm:text-lg lg:text-xl font-bold mb-3 sm:mb-4">Self-Directed Learning</h4>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg">
                While pursuing my degree in Electrical Engineering, I've been actively self-learning cloud technologies,
                web development, and DevOps practices through hands-on projects and real-world applications.
              </p>
            </div>
          </div>
        </motion.section>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 sm:py-12 mt-16 sm:mt-20 lg:mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-400 text-center text-sm sm:text-base lg:text-lg">
            © 2025 {personalInfo.name}. Available for opportunities.
          </p>
        </div>
      </footer>
    </div>
  )
}
