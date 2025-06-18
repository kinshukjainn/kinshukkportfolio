"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Github, Mail, MessageCircle, MapPin, Linkedin, Globe, BookOpen, ArrowUpRight, Dot } from "lucide-react"
import { useState, useEffect } from "react"
import profileimage from "../assets/mainweb.jpg"

// ===== CONFIGURATION DATA - EASY TO EDIT =====
const CONFIG = {
  personal: {
    name: "Kinshuk Jain",
    title: "Aspiring Cloud-Native Solutions Engineer",
    profileImage: profileimage, // Add your profile image URL here
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
    "Cloud & Infrastructure": ["AWS", "Amplify" , "EC2" , "IAM" , "Lambda" , "Docker", "Kubernetes", "Terraform", "Linux"],
    "Frontend Development": ["React", "TypeScript", "Tailwind CSS", "Vite"],
    "Backend & DevOps": ["Github actions" ,  "Git", "CI/CD", "Serverless", "Microservices"],
    "Databases & Tools": ["PostgreSQL", "Postman", "VS Code"],
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
        "Features include responsive design, SEO optimization, and seamless content management through Hashnode's powerful CMS interface.",
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
      challenges: [
        "Learning DNS management and SSL certificate configuration",
        "Optimizing content delivery and performance",
        "Implementing proper SEO strategies for technical content",
      ],
      impact: "Serves as a knowledge-sharing platform reaching developers interested in cloud technologies",
    },
    {
      title: "PassGentool",
      year: "2024",
      status: "In Development",
      type: "Security Tool",
      description: [
        "A modern, secure password generation tool built with React and TypeScript. Focuses on creating cryptographically secure passwords with customizable parameters.",
        "Features include multiple password generation algorithms, strength analysis, and secure clipboard integration for enhanced user security.",
        "Built with performance and security in mind, utilizing modern web APIs for cryptographic operations and secure random number generation.",
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
      challenges: [
        "Implementing secure random number generation",
        "Building intuitive UX for complex security features",
        "Ensuring cross-browser compatibility for crypto APIs",
      ],
      impact: "Aims to improve password security practices for developers and general users",
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

  experience: [
    {
      title: "Self-Directed Learning",
      type: "Continuous Education",
      period: "2020 - Present",
      description: [
        "Actively learning cloud technologies, web development, and DevOps practices through hands-on projects",
        "Building real-world applications to understand modern software architecture and deployment",
        "Contributing to open-source projects and engaging with the developer community",
      ],
    },
  ],
}

// ===== MAIN COMPONENT =====
export default function MainContent() {
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
    <div className="min-h-screen bg-black text-white ">
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-16">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="space-y-2">
            <div className="text-green-400 text-xl">
              {typedText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
              >
                |
              </motion.span>
            </div>
          </div>

          {/* Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <motion.img
                src={CONFIG.personal.profileImage}
                alt={CONFIG.personal.name}
                className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover border-2 border-gray-700 hover:border-white transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.8 }}
              />
            </div>
          </motion.div>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-medium">{CONFIG.personal.name}</h1>
            <h2 className="text-2xl md:text-3xl text-white font-normal">{CONFIG.personal.title}</h2>
            <div className="flex items-center gap-2 text-white text-lg">
              <MapPin className="w-5 h-5" />
              <span>{CONFIG.personal.location}</span>
            </div>
          </div>

          <div className="space-y-3">
            {CONFIG.personal.bio.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="text-white leading-relaxed text-lg"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          <div className="flex items-center gap-6 text-base">
            <span className="text-green-400">● {CONFIG.personal.availability}</span>
            <span className="text-white">● {CONFIG.personal.status}</span>
          </div>
        </motion.header>

        {/* Contact */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-6"
        >
          <h3 className="text-3xl font-medium">Connect</h3>
          <div className="space-y-3">
            {CONFIG.social.map((social, index) => {
              const Icon = social.icon
              return (
                <motion.button
                  key={index}
                  onClick={() => handleSocialClick(social)}
                  className="flex items-center gap-4 text-blue-400 hover:text-white transition-colors group w-full text-left text-lg"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Icon className="w-6 h-6" />
                  <span className="flex-1">{social.platform}</span>
                  <span className="text-blue-400 group-hover:text-blue-400 transition-colors">{social.handle}</span>
                  <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.button>
              )
            })}
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className="text-3xl font-medium">Skills</h3>
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
                <h4 className="text-white font-semibold text-xl">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="text-white text-lg">
                      {skill}
                      {skillIndex < skills.length - 1 && <span className="text-white ml-2"> ,</span>}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Projects */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h3 className="text-3xl font-medium">Projects</h3>
          <div className="space-y-12">
            {CONFIG.projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <h4 className="text-2xl font-medium">{project.title}</h4>
                    <div className="flex items-center gap-4 text-base text-white">
                      <span>{project.year}</span>
                      <span>•</span>
                      <span>{project.type}</span>
                      <span>•</span>
                      <span className={project.status === "Live" ? "text-green-400" : "text-yellow-400"}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  {project.description.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-white leading-relaxed text-lg">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="space-y-3">
                  <div>
                    <h5 className="text-base font-semibold text-green-500 mb-2">Technologies</h5>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="text-white text-base">
                          {tech}
                          {techIndex < project.technologies.length - 1 && <span className="text-white ml-2">•</span>}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h5 className="text-base font-semibold text-green-500 mb-2">Key Highlights</h5>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="text-white text-base flex items-start gap-2">
                          <Dot className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center gap-6 pt-2">
                    {project.links.live && (
                      <motion.a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2  font-bold text-black rounded-full p-2 bg-yellow-200  transition-colors group text-lg"
                        whileHover={{ x: 2 }}
                      >
                        <Globe className="w-5 h-5" />
                        <span>Live Site</span>
                        <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </motion.a>
                    )}
                    {project.links.repo && (
                      <motion.a
                        href={project.links.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 font-bold  text-black rounded-full p-2 bg-yellow-200 transition-colors group text-lg"
                        whileHover={{ x: 2 }}
                      >
                        <Github className="w-5 h-5" />
                        <span>Repository</span>
                        <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </motion.a>
                    )}
                    {project.links.blog && (
                      <motion.a
                        href={project.links.blog}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 font-bold  text-black rounded-full p-2 bg-yellow-200 transition-colors group text-lg"
                        whileHover={{ x: 2 }}
                      >
                        <BookOpen className="w-5 h-5" />
                        <span>Blog Post</span>
                        <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Certifications */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className="text-3xl font-medium">Certifications</h3>
          <div className="space-y-6">
            {CONFIG.certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <h4 className="font-semibold text-orange-500 text-xl">{cert.title}</h4>
                    <div className="flex items-center gap-4 text-base text-white">
                      <span>{cert.organization}</span>
                      <span>•</span>
                      <span>{cert.year}</span>
                      <span>•</span>
                      <span className={cert.status === "Completed" ? "text-green-400" : "text-yellow-400"}>
                        {cert.status}
                      </span>
                    </div>
                  </div>
                  {cert.url && (
                    <motion.a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1  text-black rounded-full p-2 bg-yellow-200 font-bold transition-colors group text-base"
                      whileHover={{ x: 2 }}
                    >
                      <span>View</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </motion.a>
                  )}
                </div>
                <p className="text-white text-base">{cert.description}</p>
                {cert.progress && <p className="text-white text-base">Progress: {cert.progress}</p>}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className="text-3xl font-medium">Education</h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <h4 className="text-2xl font-semibold">{CONFIG.education.degree}</h4>
              <div className="flex items-center gap-4 text-base text-white">
                <span>{CONFIG.education.field}</span>
                <span> | </span>
                <span>{CONFIG.education.period}</span>
                <span> | </span>
                <span className="text-green-400">{CONFIG.education.status}</span>
              </div>
              <p className="text-white text-lg">
                {CONFIG.education.institution}, {CONFIG.education.location}
              </p>
            </div>
            <div className="space-y-2">
              {CONFIG.education.description.map((desc, index) => (
                <p key={index} className="text-white text-base leading-relaxed">
                  {desc}
                </p>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-gray-800 text-center text-white text-base"
        >
          <p>© 2025 {CONFIG.personal.name}. Built with passion for clean code and great experiences.</p>
        </motion.footer>
      </div>
    </div>
  )
}
