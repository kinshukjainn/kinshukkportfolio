"use client"

import type React from "react"
import { SiTerraform , SiKubernetes, SiPostgresql, SiPostman, SiVite, SiTypescript, SiAwslambda, SiAmazonec2, SiAwsamplify, SiAmazoniam, SiAmazonroute53, SiAmazons3, SiTailwindcss, SiGmail } from "react-icons/si"

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
import {  VscVscodeInsiders } from "react-icons/vsc";

import profileimage from "../assets/mainweb.jpg"

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
    "Deployement": [
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
    "Stack": [
      { name: "Vite", icon: SiVite },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
    "CI/CD": [
      { name: "Github Actions", icon: FaGithub },
      { name: "Git", icon: FaGit },
    ],
    "Tools": [
      { name: "PostgreSQL", icon:  SiPostgresql },
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
    <div className="min-h-screen bg-gradient-to-br from-neutral-900 via-neutral-950 to-stone-900 text-neutral-100">
      <div className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Hero Section */}

          <section className="pt-8">
            <div className="relative overflow-hidden rounded-md backdrop-blur-sm p-8 lg:p-12">
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-stone-900 to-neutral-800"></div>
              <div className="relative">
                <div className="mb-8">
                  <div className="text-neutral-400 text-sm mb-4 font-mono">
                    {typedText}
                    <span className="animate-pulse">|</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <h1 className="text-5xl sm:text-5xl font-mono lg:text-7xl font-bold mb-4 text-white ">
                        {CONFIG.personal.name}
                      </h1>
                      <h2 className="text-xl lg:text-2xl text-neutral-100 mb-6 font-light">{CONFIG.personal.title}</h2>
                    </div>

                    <div className="flex items-center gap-3 text-yellow-500">
                      <FaMapMarkerAlt className="w-4 h-4" />
                      <span>{CONFIG.personal.location}</span>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <span className="px-4 py-2 bg-red-400 rounded-md text-sm font-medium">
                        ● {CONFIG.personal.availability}
                      </span>
                      <span className="px-4 py-2 bg-[#212121] rounded-md text-sm text-gray-300 font-bold">
                        ● {CONFIG.personal.status}
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-center lg:justify-end">
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-900 via-[#ff9100] via-green-700 via-red-800 to-white rounded-4xl group-hover:rounded-full blur group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                      <div className="relative w-48 h-48 rounded-4xl group-hover:rounded-full overflow-hidden">
                        <img
                          src={profileimage || "/placeholder.svg"}
                          alt={CONFIG.personal.name}
                          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 space-y-4 text-neutral-300 leading-relaxed">
                  {CONFIG.personal.bio.map((paragraph, index) => (
                    <p key={index} className="text-lg lg:text-base">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Social Links */}
          <section>
            <div className="mb-8">
              <h3 className="text-4xl font-mono font-bold flex items-center gap-3 text-neutral-100">
                <FaWhatsapp className="w-6 h-6 text-emerald-400" />
                Connect
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {CONFIG.social.map((social, index) => {
                const Icon = social.icon
                return (
                  <button
                    key={index}
                    onClick={() => handleSocialClick(social)}
                    className="group relative overflow-hidden rounded-md bg-neutral-800/50 backdrop-blur-sm p-3 hover:bg-neutral-900/50"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-600/10 to-emerald-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-4 group-hover:rounded-xl">
                          <Icon className="w-5 h-5 text-white transition-colors" />
                        </div>
                        <span className="font-semibold text-teal-400 font-mono">{social.platform}</span>
                      </div>
                      <div className="text-lg text-neutral-100  text-left">{social.handle}</div>
                      <FaExternalLinkAlt className="w-4 h-4 mt-3 text-white   transition-colors" />
                    </div>
                  </button>
                )
              })}
            </div>
          </section>

          {/* Certifications */}
          <section>
            <div className="mb-8">
              <h3 className="text-4xl font-mono font-bold flex items-center gap-3 text-neutral-100">
                <FaAward className="w-6 h-6 text-amber-400" />
                Certifications
              </h3>
            </div>
            <div className="space-y-6">
              {CONFIG.certifications.map((cert, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-md bg-neutral-800/30  p-4 transition-all duration-300"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="flex-1 space-y-4">
                      <div className="flex flex-wrap items-center gap-3">
                        <h4 className="text-lg font-semibold text-neutral-100">{cert.title}</h4>
                        <span
                          className={`px-3 py-1 text-xs rounded-sm font-medium ${
                            cert.status === "Completed"
                              ? "bg-yellow-200 text-black font-semibold"
                              : "bg-blue-300 text-black font-semibold"
                          }`}
                        >
                          {cert.status}
                        </span>
                      </div>
                      <p className="text-neutral-400 text-sm">
                        {cert.organization} • {cert.year}
                      </p>
                      <p className="text-neutral-300 text-sm leading-relaxed">{cert.description}</p>
                      {cert.progress && <p className="text-neutral-500 text-xs">Progress: {cert.progress}</p>}
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-blue-300 text-neutral-900 text-sm font-semibold rounded"
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
                        className="inline-flex w-max items-center gap-2 px-2 py-1  text-neutral-100 bg-[#242424] hover:text-neutral-100 rounded transition-all duration-300 text-sm font-semibold hover:scale-105 "
                      >
                        View
                        <FaExternalLinkAlt className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section>
            <div className="mb-8">
              <h3 className="text-4xl font-mono font-bold flex items-center gap-3 text-neutral-100">
                <FaCode className="w-6 h-6 text-teal-400" />
                Skills
              </h3>
            </div>
            <div className="space-y-8">
              {Object.entries(CONFIG.skills).map(([category, skills]) => (
                <div key={category} className="space-y-4">
                  <h4 className="text-xl font-semibold text-neutral-100">{category}</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
                    {skills.map((skill, skillIndex) => {
                      const Icon = skill.icon
                      return (
                        <div
                          key={skillIndex}
                          className="group flex items-center gap-3 p-2 bg-neutral-800/30 rounded-md"
                        >
                          <div className="p-3 ">
                            <Icon className="w-5 h-5 text-white transition-colors" />
                          </div>
                          <span className="text-lg text-neutral-300 group-hover:text-neutral-100 transition-colors">
                            {skill.name}
                          </span>
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
            <div className="mb-8">
              <h3 className="text-4xl font-mono font-bold flex items-center gap-3 text-neutral-100">
                <FaCode className="w-6 h-6 text-emerald-400" />
                Projects
              </h3>
            </div>
            <div className="space-y-8">
              {CONFIG.projects.map((project, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-md bg-neutral-800/30  p-6"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/5 to-teal-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative space-y-6">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      <div className="space-y-2">
                        <div className="flex flex-wrap items-center gap-3">
                          <h4 className="text-xl font-semibold text-neutral-100">{project.title}</h4>
                          <span
                            className={`px-4 py-1 text-sm rounded font-medium ${
                              project.status === "Live"
                                ? "bg-emerald-500 text-neutral-900 font-semibold"
                                : "bg-teal-500/20 text-teal-400"
                            }`}
                          >
                            {project.status}
                          </span>
                        </div>
                        <p className="text-neutral-100 text-sm">
                          {project.type} | {project.year}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {project.description.map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-neutral-300 text-lg  leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    <div className="space-y-3">
                      <h5 className="text-sm font-semibold text-neutral-300">Technologies</h5>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-yellow-200 text-neutral-900 text-sm font-semibold rounded-md transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3 pt-2">
                      {project.links.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-1 bg-[#242424] font-semibold text-neutral-100  rounded text-md font-medium"
                        >
                          <FaGlobe className="w-4 h-4" />
                          Live Demo
                        </a>
                      )}
                      {project.links.repo && (
                        <a
                          href={project.links.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-700/50 hover:bg-neutral-600/50 text-neutral-100 rounded transition-all duration-300 text-sm font-medium hover:scale-105"
                        >
                          <FaGithub className="w-4 h-4" />
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
            <div className="mb-8">
              <h3 className="text-3xl font-mono font-bold flex items-center gap-3 text-neutral-100">
                <FaGraduationCap className="w-6 h-6 text-emerald-400" />
                Education
              </h3>
            </div>
            <div className="relative overflow-hidden rounded-md bg-neutral-800/50 p-5 ">
              <div className="absolute inset-0"></div>
              <div className="relative">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                  <div className="space-y-3">
                    <h4 className="text-xl font-semibold text-neutral-100">{CONFIG.education.degree}</h4>
                    <p className="text-white font-semibold text-lg">{CONFIG.education.field}</p>
                    <p className="text-neutral-100 text-sm">{CONFIG.education.institution}</p>
                    <p className="text-neutral-300 text-sm">{CONFIG.education.location}</p>
                  </div>
                  <div className="text-right space-y-3">
                    <div className="flex items-center gap-2 lg:justify-end">
                      <FaCalendarAlt className="w-4 h-4 text-neutral-400" />
                      <span className="text-sm text-neutral-400">{CONFIG.education.period}</span>
                    </div>
                    <span className="inline-block px-3 py-1 bg-[#242424] text-white text-lg rounded font-semibold">
                      {CONFIG.education.status}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  {CONFIG.education.description.map((paragraph, index) => (
                    <p key={index} className="text-neutral-300 text-lg leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
