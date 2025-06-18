"use client"

import type React from "react"
import { motion } from "framer-motion"
import {
  Github,
  Mail,
  MessageCircle,
  MapPin,
  Linkedin,
  Globe,
  BookOpen,
  ExternalLink,
  Calendar,
  Award,
  GraduationCap,
  Code,
  Cloud,
  Database,
  Server,
  Terminal,
  Zap,
  Shield,
  Cpu,
  Monitor,
} from "lucide-react"
import { useState, useEffect } from "react"

// ===== CONFIGURATION DATA =====
const CONFIG = {
  personal: {
    name: "Kinshuk Jain",
    title: "Aspiring Cloud-Native Solutions Engineer",
    profileImage: "/placeholder.svg?height=200&width=200",
    email: "kinshuk25jan04@gmail.com",
    whatsappNumber: "919172702501",
    location: "Ghaziabad, UP, India",
    bio: [
      "I'm a passionate Cloud-Native Solutions Engineer with a strong focus on AWS technologies, React development, and DevOps practices.",
      "Currently pursuing my Bachelor's in Electrical Engineering while actively learning and building cloud solutions.",
      "Always open to connecting with fellow developers, engineers, and anyone curious about technology and cloud computing.",
    ],
    availability: "Available for opportunities",
    status: "Open to collaborations",
  },

  social: [
    {
      platform: "GitHub",
      url: "https://github.com/kinshukjainn",
      icon: Github,
      handle: "@kinshukjainn",
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/kinshukjainn/",
      icon: Linkedin,
      handle: "kinshukjainn",
    },
    {
      platform: "Email",
      url: "mailto:kinshuk25jan04@gmail.com",
      icon: Mail,
      handle: "kinshuk25jan04@gmail.com",
    },
    {
      platform: "WhatsApp",
      url: "#",
      icon: MessageCircle,
      handle: "+91 9172702501",
      action: "whatsapp",
    },
  ],

  skills: {
    "Cloud & Infrastructure": [
      { name: "AWS", icon: Cloud },
      { name: "Amplify", icon: Zap },
      { name: "EC2", icon: Server },
      { name: "IAM", icon: Shield },
      { name: "Lambda", icon: Zap },
      { name: "Docker", icon: Code },
      { name: "Kubernetes", icon: Cpu },
      { name: "Terraform", icon: Code },
      { name: "Linux", icon: Terminal },
    ],
    "Frontend Development": [
      { name: "React", icon: Code },
      { name: "TypeScript", icon: Code },
      { name: "Tailwind CSS", icon: Monitor },
      { name: "Vite", icon: Zap },
    ],
    "Backend & DevOps": [
      { name: "Github Actions", icon: Github },
      { name: "Git", icon: Code },
      { name: "CI/CD", icon: Zap },
      { name: "Serverless", icon: Cloud },
      { name: "Microservices", icon: Server },
    ],
    "Databases & Tools": [
      { name: "PostgreSQL", icon: Database },
      { name: "Postman", icon: Code },
      { name: "VS Code", icon: Monitor },
    ],
  },

  projects: [
    {
      title: "Tech Blog Platform",
      year: "2024",
      status: "Live",
      type: "Web Platform",
      description: [
        "A content-focused blogging platform that showcases my technical writing and cloud engineering insights. Built using Hashnode's CMS with custom domain configuration.",
        "The platform serves as a hub for sharing knowledge about cloud technologies, DevOps practices, and software engineering concepts with the developer community.",
      ],
      technologies: ["Hashnode CMS", "AWS Route 53", "DNS Management", "CDN", "SSL/TLS"],
      links: {
        live: "https://blog.cloudkinshuk.in",
        blog: "https://blog.cloudkinshuk.in/building-my-blog-platform",
        repo: null,
      },
      highlights: [
        "Independent AWS Route 53 configuration for custom domain",
        "SSL certificate management and DNS optimization",
        "Content delivery optimization with CDN integration",
        "SEO-optimized content structure and metadata",
      ],
    },
    {
      title: "PassGentool",
      year: "2024",
      status: "In Development",
      type: "Security Tool",
      description: [
        "A modern, secure password generation tool built with React and TypeScript. Focuses on creating cryptographically secure passwords with customizable parameters.",
        "Features include multiple password generation algorithms, strength analysis, and secure clipboard integration for enhanced user security.",
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Web Crypto API"],
      links: {
        live: null,
        blog: null,
        repo: "https://github.com/kinshukjainn/passgentool",
      },
      highlights: [
        "Cryptographically secure random password generation",
        "Customizable password parameters and complexity",
        "Real-time password strength analysis",
        "Secure clipboard integration",
      ],
    },
  ],

  certifications: [
    {
      title: "AWS Cloud Practitioner",
      organization: "Amazon Web Services",
      status: "In Progress",
      year: "2025",
      progress: "679/1000 (Recent attempt: Jan 24, 2025)",
      description: "Foundational AWS certification covering cloud concepts, security, and core services",
      skills: ["Cloud Computing", "AWS Services", "Security", "Pricing Models"],
    },
    {
      title: "AWS Serverless Badge",
      organization: "Amazon Web Services",
      status: "Completed",
      year: "2024",
      url: "https://www.credly.com/badges/0bcd1190-2d68-45ff-91d9-32b65aa93ed8/public_url",
      description: "Digital badge demonstrating serverless architecture knowledge and implementation",
      skills: ["Lambda", "API Gateway", "DynamoDB", "Serverless Framework"],
    },
    {
      title: "AWS Machine Learning Badge",
      organization: "Amazon Web Services",
      status: "Completed",
      year: "2024",
      url: "https://www.credly.com/badges/a0042ec2-cc6e-4a99-84de-a1516ee5775a/public_url",
      description: "Digital badge covering machine learning concepts and AWS ML services",
      skills: ["SageMaker", "ML Algorithms", "Data Processing", "Model Deployment"],
    },
  ],

  education: {
    degree: "Bachelor of Technology",
    field: "Electrical Engineering",
    institution: "JSS Academy of Technical Education",
    location: "Noida, Uttar Pradesh",
    period: "2022 - 2026",
    status: "Active",
    description: [
      "Pursuing electrical engineering while self-learning cloud technologies and software development",
      "Focusing on the intersection of traditional engineering and modern cloud computing",
      "Active in technical communities and hands-on project development",
    ],
  },
}

export default function ModernPortfolio() {
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

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi Kinshuk, I saw your portfolio and wanted to connect.")
    window.open(`https://wa.me/${CONFIG.personal.whatsappNumber}?text=${message}`, "_blank")
  }

  interface SocialLink {
    platform: string
    url: string
    icon: React.ComponentType
    handle: string
    action?: string
  }

  const handleSocialClick = (social: SocialLink) => {
    if (social.action === "whatsapp") {
      handleWhatsAppClick()
    } else {
      window.open(social.url, "_blank")
    }
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-900 border border-gray-800 rounded-xl p-6 sm:p-8 mb-8"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-shrink-0"
            >
              <div className="relative">
                <img
                  src={CONFIG.personal.profileImage || "/placeholder.svg"}
                  alt={CONFIG.personal.name}
                  className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-2 border-gray-700 hover:border-red-500 transition-colors duration-300"
                />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-gray-900"></div>
              </div>
            </motion.div>

            {/* Header Content */}
            <div className="flex-1 space-y-4">
              <div className="space-y-2">
                <div className="text-green-400 text-sm sm:text-base font-mono">
                  {typedText}
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
                  >
                    |
                  </motion.span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">{CONFIG.personal.name}</h1>
                <h2 className="text-lg sm:text-xl text-gray-300">{CONFIG.personal.title}</h2>
                <div className="flex items-center gap-2 text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm sm:text-base">{CONFIG.personal.location}</span>
                </div>
              </div>

              {/* Status Badges */}
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-900/30 text-green-400 text-xs sm:text-sm rounded-full border border-green-800">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  {CONFIG.personal.availability}
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-900/30 text-blue-400 text-xs sm:text-sm rounded-full border border-blue-800">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  {CONFIG.personal.status}
                </span>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="mt-6 space-y-3">
            {CONFIG.personal.bio.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="text-gray-300 leading-relaxed text-sm sm:text-base"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-1 space-y-8">
            {/* Contact Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-red-500" />
                Connect
              </h3>
              <div className="space-y-3">
                {CONFIG.social.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <motion.button
                      key={index}
                      onClick={() => handleSocialClick(social)}
                      className="flex items-center gap-3 w-full p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors group"
                      whileHover={{ x: 2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon className="w-5 h-5 text-gray-400 group-hover:text-red-500 transition-colors" />
                      <div className="flex-1 text-left">
                        <div className="text-sm font-medium text-white">{social.platform}</div>
                        <div className="text-xs text-gray-400">{social.handle}</div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.button>
                  )
                })}
              </div>
            </motion.div>

            {/* Skills Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Code className="w-5 h-5 text-red-500" />
                Skills
              </h3>
              <div className="space-y-4">
                {Object.entries(CONFIG.skills).map(([category, skills], index) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <h4 className="text-sm font-medium text-gray-300">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill, skillIndex) => {
                        const Icon = skill.icon
                        return (
                          <span
                            key={skillIndex}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-gray-800 text-gray-300 text-xs rounded-md border border-gray-700 hover:border-red-500 transition-colors"
                          >
                            <Icon className="w-3 h-3" />
                            {skill.name}
                          </span>
                        )
                      })}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-red-500" />
                Education
              </h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-white">{CONFIG.education.degree}</h4>
                  <p className="text-sm text-gray-400">{CONFIG.education.field}</p>
                  <p className="text-sm text-gray-400">{CONFIG.education.institution}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span className="text-xs text-gray-500">{CONFIG.education.period}</span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-green-900/30 text-green-400 text-xs rounded-full">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                      {CONFIG.education.status}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Projects Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <Code className="w-5 h-5 text-red-500" />
                Featured Projects
              </h3>
              <div className="space-y-6">
                {CONFIG.projects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-800 border border-gray-700 rounded-lg p-5 hover:border-gray-600 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-lg font-semibold text-white">{project.title}</h4>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs text-gray-400">{project.year}</span>
                          <span className="text-gray-600">•</span>
                          <span className="text-xs text-gray-400">{project.type}</span>
                          <span
                            className={`inline-flex items-center gap-1 px-2 py-0.5 text-xs rounded-full ${
                              project.status === "Live"
                                ? "bg-green-900/30 text-green-400"
                                : "bg-yellow-900/30 text-yellow-400"
                            }`}
                          >
                            <div
                              className={`w-1.5 h-1.5 rounded-full ${
                                project.status === "Live" ? "bg-green-400" : "bg-yellow-400"
                              }`}
                            ></div>
                            {project.status}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {project.description.map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-sm text-gray-300 leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    <div className="mt-4 space-y-3">
                      <div>
                        <h5 className="text-xs font-medium text-gray-400 mb-2">Technologies</h5>
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded border border-gray-600"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center gap-3 pt-2">
                        {project.links.live && (
                          <motion.a
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white text-xs font-medium rounded-md transition-colors"
                            whileHover={{ scale: 1.02 }}
                          >
                            <Globe className="w-3 h-3" />
                            Live Site
                          </motion.a>
                        )}
                        {project.links.repo && (
                          <motion.a
                            href={project.links.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-700 hover:bg-gray-600 text-gray-300 text-xs font-medium rounded-md transition-colors border border-gray-600"
                            whileHover={{ scale: 1.02 }}
                          >
                            <Github className="w-3 h-3" />
                            Repository
                          </motion.a>
                        )}
                        {project.links.blog && (
                          <motion.a
                            href={project.links.blog}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-700 hover:bg-gray-600 text-gray-300 text-xs font-medium rounded-md transition-colors border border-gray-600"
                            whileHover={{ scale: 1.02 }}
                          >
                            <BookOpen className="w-3 h-3" />
                            Blog Post
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Certifications Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-red-500" />
                Certifications
              </h3>
              <div className="space-y-4">
                {CONFIG.certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-800 border border-gray-700 rounded-lg p-4 hover:border-gray-600 transition-colors"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-white text-sm">{cert.title}</h4>
                        <p className="text-xs text-gray-400 mt-1">{cert.organization}</p>
                        <p className="text-xs text-gray-300 mt-2">{cert.description}</p>
                        {cert.progress && <p className="text-xs text-yellow-400 mt-1">Progress: {cert.progress}</p>}
                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-xs text-gray-500">{cert.year}</span>
                          <span
                            className={`inline-flex items-center gap-1 px-2 py-0.5 text-xs rounded-full ${
                              cert.status === "Completed"
                                ? "bg-green-900/30 text-green-400"
                                : "bg-yellow-900/30 text-yellow-400"
                            }`}
                          >
                            <div
                              className={`w-1.5 h-1.5 rounded-full ${
                                cert.status === "Completed" ? "bg-green-400" : "bg-yellow-400"
                              }`}
                            ></div>
                            {cert.status}
                          </span>
                        </div>
                      </div>
                      {cert.url && (
                        <motion.a
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-2 py-1 bg-red-600 hover:bg-red-700 text-white text-xs font-medium rounded transition-colors ml-3"
                          whileHover={{ scale: 1.02 }}
                        >
                          View
                          <ExternalLink className="w-3 h-3" />
                        </motion.a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-800 text-center"
        >
          <p className="text-gray-400 text-sm">
            © 2025 {CONFIG.personal.name}. Built with passion for clean code and great experiences.
          </p>
        </motion.footer>
      </div>
    </div>
  )
}
