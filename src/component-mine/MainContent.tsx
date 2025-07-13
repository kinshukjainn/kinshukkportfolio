"use client"
import type React from "react"
import {
  SiTerraform,
  SiKubernetes,
  SiPostgresql,
  SiPostman,
  SiVite,
  SiTypescript,
  SiAwslambda,
  SiAmazonec2,
  SiAwsamplify,
  SiAmazoniam,
  SiAmazonroute53,
  SiAmazons3,
  SiTailwindcss,
  SiGmail,
} from "react-icons/si"
import { useState, useEffect } from "react"
import {
  FaGithub,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGlobe,
  FaExternalLinkAlt,
  FaCalendarAlt,
  FaAward,
  FaGraduationCap,
  FaCode,
  FaGit,
  FaDocker,
  FaAws,
} from "react-icons/fa"
import { VscVscodeInsiders } from "react-icons/vsc"
import profileimg from "../assets/mainweb.jpg";

// Configuration Data
const CONFIG = {
  personal: {
    name: "Kinshuk Jain",
    title: "Aspiring Cloud-Native Solutions Engineer",
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
      icon: FaGithub,
      handle: "@kinshukjainn",
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/kinshukjainn/",
      icon: FaLinkedin,
      handle: "@kinshukjainn",
    },
    {
      platform: "Gmail",
      url: "mailto:kinshuk25jan04@gmail.com",
      icon: SiGmail,
      handle: "kinshuk25jan04@gmail.com",
    },
    {
      platform: "WhatsApp",
      url: "#",
      icon: FaWhatsapp,
      handle: "+91 9172702501",
      action: "whatsapp",
    },
  ],
  certifications: [
    {
      title: "AWS Cloud Practitioner",
      organization: "AWS",
      status: "In Progress",
      year: "2025",
      progress: "679/1000 (Recent attempt: Jan 24, 2025)",
      description: "Foundational AWS certification covering cloud concepts, security, and core services",
      skills: ["Cloud Computing", "AWS Services", "Security", "Pricing Models"],
    },
    {
      title: "AWS Serverless Badge",
      organization: "AWS",
      status: "Completed",
      year: "2024",
      url: "https://www.credly.com/badges/0bcd1190-2d68-45ff-91d9-32b65aa93ed8/public_url",
      description: "Digital badge demonstrating serverless architecture knowledge and implementation",
      skills: ["Lambda", "API Gateway", "DynamoDB", "Serverless Framework"],
    },
    {
      title: "AWS Machine Learning Badge",
      organization: "AWS",
      status: "Completed",
      year: "2025",
      url: "https://www.credly.com/badges/a0042ec2-cc6e-4a99-84de-a1516ee5775a/public_url",
      description: "Digital badge covering machine learning concepts and AWS ML services",
      skills: ["SageMaker", "ML Algorithms", "Data Processing", "Model Deployment"],
    },
  ],
  skills: {
    Deployement: [
      { name: "AWS", icon: FaAws },
      { name: "Amplify", icon: SiAwsamplify },
      { name: "Amazon EC2", icon: SiAmazonec2 },
      { name: "Amazon IAM", icon: SiAmazoniam },
      { name: "Amazon S3", icon: SiAmazons3 },
      { name: "Amazon Route 53", icon: SiAmazonroute53 },
      { name: "Amazon Lambda", icon: SiAwslambda },
      { name: "Docker", icon: FaDocker },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "Terraform", icon: SiTerraform },
    ],
    Stack: [
      { name: "Vite", icon: SiVite },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
    "CI/CD": [
      { name: "Github Actions", icon: FaGithub },
      { name: "Git", icon: FaGit },
    ],
    Tools: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Postman", icon: SiPostman },
      { name: "VS Code", icon: VscVscodeInsiders },
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
        blog: null,
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
        repo: null,
      },
      highlights: [
        "Cryptographically secure random password generation",
        "Customizable password parameters and complexity",
        "Real-time password strength analysis",
        "Secure clipboard integration",
      ],
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

export default function CloudPortfolio() {
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

  interface SocialConfig {
    platform: string
    url: string
    icon: React.ElementType
    handle: string
    action?: string
  }

  const handleSocialClick = (social: SocialConfig) => {
    if (social.action === "whatsapp") {
      handleWhatsAppClick()
    } else {
      window.open(social.url, "_blank")
    }
  }

  return (
    <div className="min-h-screen bg-black text-neutral-100">
      <div className="pt-20 px-2 sm:px-4 lg:px-6">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Hero Section */}
          <section className="pt-4">
            <div className=" backdrop-blur-sm p-4 sm:p-6 lg:p-8">
              <div className="mb-6">
                <div className="text-yellow-400 text-lg sm:text-lg mb-3 font-mono  p-1">
                  {typedText}
                  <span className="animate-pulse">|</span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                <div className="lg:col-span-2 space-y-4">
                  <div>
                    <h1 className="heading-kinshuk text-6xl sm:text-4xl lg:text-6xl font-mono font-semibold mb-3 text-green-400 animate-pulse">
                      {CONFIG.personal.name}
                    </h1>
                    <h2 className="text-lg lg:text-xl text-neutral-100 mb-4 font-light">{CONFIG.personal.title}</h2>
                  </div>

                  <div className="flex items-center gap-2 text-yellow-500 text-sm">
                    <FaMapMarkerAlt className="w-3 h-3" />
                    <span>{CONFIG.personal.location}</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-800 text-white text-sm font-semibold border border-blue-300 rounded-md">
                      ● {CONFIG.personal.availability}
                    </span>
                    <span className="px-3 py-1 bg-neutral-800 text-gray-300 text-sm font-bold border border-neutral-600 rounded-md">
                      ● {CONFIG.personal.status}
                    </span>
                  </div>
                </div>

                <div className="flex justify-center lg:justify-end">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-md border-2 border-neutral-600 bg-neutral-800">
                    <img
                      src={profileimg}
                      alt={CONFIG.personal.name}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-3 text-white leading-relaxed bg-[#212121] p-3 rounded-md">
                {CONFIG.personal.bio.map((paragraph, index) => (
                  <p key={index} className="text-md sm:text-base">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </section>

          {/* Social Links */}
          <section>
            <div className="mb-4">
              <h3 className="text-2xl sm:text-3xl font-mono font-bold flex items-center gap-2 text-neutral-100  p-3 ">
                <FaWhatsapp className="w-5 h-5 text-emerald-400" />
                Connect with Me
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {CONFIG.social.map((social, index) => {
                const Icon = social.icon
                return (
                  <button
                    key={index}
                    onClick={() => handleSocialClick(social)}
                    className="group bg-neutral-800/50 rounded-md backdrop-blur-sm border border-neutral-700 p-3 hover:bg-neutral-900/50 hover:border-neutral-500 transition-all cursor-pointer duration-200"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-2 bg-neutral-900 rounded-md border border-neutral-600">
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-bold text-teal-400 font-mono text-lg">{social.platform}</span>
                    </div>
                    <div className="text-md text-neutral-100 text-left mb-2">{social.handle}</div>
                    <FaExternalLinkAlt className="w-4 h-4 text-white" />
                  </button>
                )
              })}
            </div>
          </section>

          {/* Certifications */}
          <section>
            <div className="mb-4">
              <h3 className="text-2xl sm:text-3xl font-mono font-bold flex items-center gap-2 text-neutral-100  p-3">
                <FaAward className="w-5 h-5 text-amber-400" />
                Certifications
              </h3>
            </div>
            <div className="space-y-4">
              {CONFIG.certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-neutral-800/30 border border-neutral-700 rounded-md p-4 hover:bg-neutral-800/50 transition-colors duration-200"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1 space-y-3">
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className="text-lg font-bold text-neutral-100">{cert.title}</h4>
                        <span
                          className={`px-2 py-1 text-xs rounded-md font-bold border ${
                            cert.status === "Completed"
                              ? "bg-[#252525] text-white border-neutral-600"
                              : "bg-blue-100 text-black border-blue-200"
                          }`}
                        >
                          {cert.status}
                        </span>
                      </div>
                      <p className="text-neutral-100 text-sm font-semibold">
                        {cert.organization} || {cert.year}
                      </p>
                      <p className="text-neutral-300 text-md leading-relaxed">{cert.description}</p>
                      {cert.progress && (
                        <p className="text-neutral-500 text-xs bg-neutral-900 p-1 border  rounded-md w-max border-neutral-600">
                          Progress: {cert.progress}
                        </p>
                      )}
                      <div className="flex flex-wrap gap-1">
                        {cert.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-[#222222] border border-neutral-600 text-neutral-100 text-sm font-bold rounded-md"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    {cert.url && (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-2 text-neutral-100 bg-neutral-800 hover:bg-neutral-700 border rounded-md w-max border-neutral-600 hover:border-neutral-500 transition-all duration-200 text-sm font-bold"
                      >
                        View
                        <FaExternalLinkAlt className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section>
            <div className="mb-4">
              <h3 className="text-2xl sm:text-3xl font-mono font-bold flex items-center gap-2 text-neutral-100  p-3 ">
                <FaCode className="w-5 h-5 text-teal-400" />
                Skills
              </h3>
            </div>
            <div className="space-y-6">
              {Object.entries(CONFIG.skills).map(([category, skills]) => (
                <div key={category} className="space-y-3">
                  <h4 className="text-lg font-bold underline text-neutral-100   ">
                    {category} 
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2">
                    {skills.map((skill, skillIndex) => {
                      const Icon = skill.icon
                      return (
                        <div
                          key={skillIndex}
                          className="flex items-center rounded-md gap-2 p-2 bg-neutral-800/30 border  border-neutral-700 hover:bg-neutral-800/50 transition-colors duration-200"
                        >
                          <div className="p-2 bg-black rounded">
                            <Icon className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-md sm:text-sm text-white font-bold truncate">{skill.name}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section>
            <div className="mb-4">
              <h3 className="text-2xl sm:text-3xl font-mono font-bold flex items-center gap-2 text-neutral-100 p-3 ">
                <FaCode className="w-5 h-5 text-emerald-400" />
                Projects
              </h3>
            </div>
            <div className="space-y-6">
              {CONFIG.projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-neutral-800/30 border border-neutral-700 p-4 hover:bg-neutral-800/50 transition-colors duration-200 rounded-md"
                >
                  <div className="space-y-4">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3">
                      <div className="space-y-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <h4 className="text-lg font-bold text-neutral-100">{project.title}</h4>
                          <span
                            className={`px-2 py-1 text-xs rounded-md font-bold border ${
                              project.status === "Live"
                                ? "bg-emerald-500 text-neutral-900 border-emerald-400"
                                : "bg-teal-500/20 text-teal-400 border-teal-400"
                            }`}
                          >
                            {project.status}
                          </span>
                        </div>
                        <p className="text-neutral-100 text-xs">
                          {project.type} | {project.year}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {project.description.map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-neutral-300 text-md leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    <div className="space-y-2">
                      <h5 className="text-xs font-bold text-neutral-300  p-1 rounded-md w-max ">
                        TECHNOLOGIES
                      </h5>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-[#1e1e1e] text-neutral-100 text-xs font-bold border rounded-md border-neutral-600"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.links.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-3 py-2 bg-neutral-800 border rounded-md border-neutral-600 text-neutral-100 hover:bg-neutral-700 hover:border-neutral-500 transition-all duration-200 text-sm font-bold"
                        >
                          <FaGlobe className="w-3 h-3" />
                          Live Demo
                        </a>
                      )}
                      {project.links.repo && (
                        <a
                          href={project.links.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-3 py-1 bg-neutral-800 border border-neutral-600 text-neutral-100 hover:bg-neutral-700 hover:border-neutral-500 transition-all duration-200 text-xs font-bold"
                        >
                          <FaGithub className="w-3 h-3" />
                          Source Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <div className="mb-4">
              <h3 className="text-2xl sm:text-3xl font-mono font-bold flex items-center gap-2 text-neutral-100  p-3">
                <FaGraduationCap className="w-5 h-5 text-emerald-400" />
                Education
              </h3>
            </div>
            <div className="bg-neutral-800/50 border rounded-md border-neutral-700 p-4">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                <div className="space-y-2">
                  <h4 className="text-lg font-bold text-neutral-100">{CONFIG.education.degree}</h4>
                  <p className="text-white font-bold text-lg">{CONFIG.education.field}</p>
                  <p className="text-neutral-100 text-md">{CONFIG.education.institution}</p>
                  <p className="text-neutral-300 text-md">{CONFIG.education.location}</p>
                </div>
                <div className="text-left lg:text-right space-y-2">
                  <div className="flex items-center gap-1 lg:justify-end">
                    <FaCalendarAlt className="w-3 h-3 text-neutral-400" />
                    <span className="text-xs text-neutral-400">{CONFIG.education.period}</span>
                  </div>
                  <span className="inline-block px-2 py-1 bg-neutral-800 border border-neutral-600 rounded text-white text-xs font-bold">
                    {CONFIG.education.status}
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                {CONFIG.education.description.map((paragraph, index) => (
                  <p key={index} className="text-neutral-300 text-md leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
