import type React from "react"
import { useState, useEffect, useRef } from "react"
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
import {
  FaGithub,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGlobe,
  FaExternalLinkAlt,
  FaAward,
  FaGraduationCap,
  FaCode,
  FaGit,
  FaDocker,
  FaAws,
  FaCopy,
  FaCheck,
} from "react-icons/fa"
import { VscVscodeInsiders } from "react-icons/vsc"

import profileimg from "../assets/mainweb.jpg"

// --- CONFIGURATION DATA ---
// This object holds all the personal data, making it easy to update.
const CONFIG = {
  personal: {
    name: "KJ { KINSHUK JAIN }",
    title: "Just Building and Learning adequate Infrastructures ! ",
    email: "kinshuk25jan04@gmail.com",
    whatsappNumber: "919172702501",
    location: "Ghaziabad, UP, India",
    bio: [
      "I'm a passionate Cloud-Native Solutions Engineer with a strong focus on AWS technologies, React development, and DevOps practices.",
      "Currently pursuing my Bachelor's in Electrical Engineering while actively learning and building cloud solutions.",
      "Always open to connecting with fellow developers, engineers, and anyone curious about technology and cloud computing.",
    ],
    availability: "Available for opportunities",
    status: "Currently Intern at UPPCL (Uttar Pradesh Power Corporation Limited)",
  },
  social: [
    { platform: "GitHub", url: "https://github.com/kinshukjainn", icon: FaGithub, handle: "@kinshukjainn" },
    { platform: "LinkedIn", url: "https://linkedin.com/in/kinshukjainn/", icon: FaLinkedin, handle: "@kinshukjainn" },
    { platform: "Gmail", url: "mailto:kinshuk25jan04@gmail.com", icon: SiGmail, handle: "kinshuk25jan04@gmail.com" },
    { platform: "WhatsApp", url: "#", icon: FaWhatsapp, handle: "@kinshukjain", action: "whatsapp" },
    { platform: "Credly", url: "https://www.credly.com/users/kinshuk004", icon: FaAward, handle: "@kinshuk004", action: "Credly" },
  ],
  certifications: [
    {
      title: "AWS Getting started with storage services",
      organization: "AWS",
      status: "Completed",
      year: "2025 July",
      url: "https://www.credly.com/badges/a4406a81-77da-4003-b153-9e36582f7877/public_url",
      description: "Digital badge covering storage services concepts and AWS storage solutions",
      skills: ["S3", "EBS", "EFS", "Storage Gateway"],
    },
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
    "Cloud & DevOps": [
      { name: "AWS", icon: FaAws }, { name: "Amplify", icon: SiAwsamplify }, { name: "Amazon EC2", icon: SiAmazonec2 }, { name: "Amazon S3", icon: SiAmazons3 }, { name: "Lambda", icon: SiAwslambda }, { name: "Route 53", icon: SiAmazonroute53 }, { name: "IAM", icon: SiAmazoniam }, { name: "Docker", icon: FaDocker }, { name: "Kubernetes", icon: SiKubernetes }, { name: "Terraform", icon: SiTerraform },
    ],
    "Frontend & Build": [
      { name: "Vite", icon: SiVite }, { name: "TypeScript", icon: SiTypescript }, { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
    "Version Control": [
      { name: "Git", icon: FaGit }, { name: "GitHub Actions", icon: FaGithub },
    ],
    "Developer Tools": [
      { name: "PostgreSQL", icon: SiPostgresql }, { name: "Postman", icon: SiPostman }, { name: "VS Code", icon: VscVscodeInsiders },
    ],
  },
  projects: [
    {
      title: "Tech Blog Platform",
      year: "2024",
      status: "Live",
      type: "Web Platform",
      description: ["A content-focused blogging platform showcasing my technical writing and cloud engineering insights, built using Hashnode's CMS with custom domain configuration via AWS.", "The platform serves as a hub for sharing knowledge on cloud tech, DevOps, and software engineering with the developer community."],
      technologies: ["Hashnode CMS", "AWS Route 53", "DNS Management", "CDN", "SSL/TLS"],
      links: { live: "https://blog.cloudkinshuk.in", repo: null },
      dockerCommand: "docker command doesnt exist for this project",
    },
    {
      title: "Zeroleaks",
      year: "2024",
      status: "Live",
      type: "Security Tool",
      description: ["A modern, secure password generation tool built with React and TypeScript, focusing on creating cryptographically secure passwords with customizable parameters.", "Features include multiple generation algorithms, strength analysis, and secure clipboard integration."],
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Web Crypto API"],
      links: { live: "https://zeroleaks.cloudkinshuk.in", repo: "https://github.com/kinshukjainn/zeroleaks" },
      dockerCommand: "docker pull kinshukdev/zeroleaksproduct:latest",
    },
  ],
  education: {
    degree: "Bachelor of Technology",
    field: "Electrical Engineering",
    institution: "JSS Academy of Technical Education",
    location: "Noida, Uttar Pradesh",
    period: "2022 - 2026",
    status: "Active",
    description: "Pursuing electrical engineering while self-learning cloud technologies and software development. Focusing on the intersection of traditional engineering and modern cloud computing.",
  },
}

interface SocialConfig {
  platform: string
  url: string
  icon: React.ElementType
  handle: string
  action?: string
}

// Animated section where the animations are defined 
const AnimatedSection: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry && entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )
    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])
  return (
    <section ref={ref} className={`${className} transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      {children}
    </section>
  )
}

// Copy Button Component
const CopyButton: React.FC<{ text: string }> = ({ text }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-2 px-3 py-1.5 text-sm cursor-pointer font-semibold text-black bg-blue-500   rounded-full transition-all duration-200"
      title="Copy Docker command"
    >
      {copied ? (
        <>
          <FaCheck className="w-3 h-3 text-white" />
          Copied!
        </>
      ) : (
        <>
          <FaCopy className="w-3 h-3" />
          Copy
        </>
      )}
    </button>
  )
}

// --- MAIN PORTFOLIO COMPONENT ---
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
    }, 120)

    return () => clearInterval(typingTimer)
  }, [])

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi Kinshuk, I saw your portfolio and wanted to connect.")
    window.open(`https://wa.me/${CONFIG.personal.whatsappNumber}?text=${message}`, "_blank")
  }

  const handleSocialClick = (social: SocialConfig) => {
    if (social.action === "whatsapp") {
      handleWhatsAppClick()
    } else {
      window.open(social.url, "_blank")
    }
  }

  // A small reusable component for section headers
  const SectionHeader: React.FC<{ icon: React.ElementType, title: string }> = ({ icon: Icon, title }) => (
    <h3 className="text-2xl sm:text-3xl font-semibold flex items-center gap-3 text-white mb-8">
      <Icon className="w-7 h-7 text-blue-500 " />
      {title}
    </h3>
  );

  // A small reusable component for tech tags
  const TechTag: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <span className="inline-block py-1 px-2  rounded-full  text-white font-mono    text-xs font-semibold ">{children}</span>
  );

  return (
    <div className="min-h-screen bg-black text-neutral-100
">
      <main className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="space-y-24 md:space-y-32">

          {/* --- Hero Section --- */}
          <AnimatedSection className="pt-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              <div className="lg:col-span-2 space-y-6">
                <div className=" text-lg text-red-500">
                  {typedText}
                  <span className="animate-pulse">_</span>
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl  heading-kinshuk font-bold tracking-tighter text-blue-600 ">
                  {CONFIG.personal.name}
                </h1>
                <h2 className="text-xl lg:text-2xl text-white max-w-2xl">
                  {CONFIG.personal.title}
                </h2>
                <div className="flex items-center gap-2 p-2 bg-gradient-to-br from-black via-black via-zinc-900 to-zinc-900  hover:border hover:border-blue-500  shadow-lg shadow-black w-max rounded-full  text-white">
                  <FaMapMarkerAlt />
                  <span>{CONFIG.personal.location}</span>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="w-48 h-48 lg:w-56 lg:h-56 rounded-full hover:shadow-xl hover:shadow-[#121212] overflow-hidden -2  bg-neutral-900 shadow-lg">
                  <img src={profileimg} alt={CONFIG.personal.name} className="w-full h-full object-cover transition-all duration-500 hover:scale-105" />
                </div>
              </div>
            </div>
            <div className="mt-12  text-white space-y-4 text-base md:text-lg max-w-4xl -l-2  pl-6">
              {CONFIG.personal.bio.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </AnimatedSection>

          {/* --- Social Links Section --- */}
          <AnimatedSection>
            <SectionHeader  icon={FaGlobe} title="Digital Presence" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {CONFIG.social.map((social) => {
                const Icon = social.icon
                return (
                  <button key={social.platform} onClick={() => handleSocialClick(social)} className="group relative flex   text-neutral-100 border-l-2 border-white shadow-xl items-center gap-4  p-2 cursor-pointer transition-all duration-300 ">
                    <div className="p-2 bg-blue-500 rounded-full  ">
                      <Icon className="w-6 h-6 text-black transition-colors" />
                    </div>
                    <div className="text-left">
                      <p className=" text-xl hover:text-blue-500 cursor-pointer text-white ">{social.platform}</p>
                      <p className="text-sm font-mono cursor-pointer  text-yellow-100">{social.handle}</p>
                    </div>
                  </button>
                )
              })}
            </div>
          </AnimatedSection>

          {/* --- Certifications Section --- */}
          <AnimatedSection>
            <SectionHeader icon={FaAward} title="Certifications & Badges" />
            <div className="space-y-3">
              {CONFIG.certifications.map((cert) => (
                <div key={cert.title} className="p-4 transition-all  rounded-3xl  bg-[#151515] duration-300 ">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-4">
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h4 className="text-lg font-medium  text-white">{cert.title}</h4>
                        <span className={`px-2 py-0.5 text-xs rounded-xl font-semibold  ${cert.status === "Completed" ? "bg-blue-900 text-white " : "bg-blue-900/50 text-blue-100  -blue-800"}`}>{cert.status}</span>
                      </div>
                      <p className="text-sm text-yellow-200 p-1 ">{cert.organization} • {cert.year}</p>
                      <p className="text-neutral-100 text-md">{cert.description}</p>
                      {cert.progress && <p className="text-sm text-blue-200">Progress: {cert.progress}</p>}
                      <div className="flex flex-wrap   gap-3 pt-2">
                        {cert.skills.map(skill  => <TechTag  key={skill}>{skill}</TechTag>)}
                      </div>
                    </div>
                    {cert.url && (
                      <a href={cert.url} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 inline-flex bg-blue-500 items-center border border-neutral-700      text-black  gap-2 px-2 py-2 text-sm font-semibold rounded-full w-max   transition-colors">
                        View Credential <FaExternalLinkAlt className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* --- Skills Section --- */}
          <AnimatedSection>
            <SectionHeader icon={FaCode} title="Technical Skills" />
            <div className="space-y-8">
              {Object.entries(CONFIG.skills).map(([category, skills]) => (
                <div key={category}>
                  <h4 className="text-xl font-semibold underline   text-white mb-4">{category}</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                    {skills.map((skill) => {
                      const Icon = skill.icon
                      return (
                        <div key={skill.name} className="flex items-center   rounded-2xl  bg-[#151515]  gap-3 p-3 ">
                          <Icon className="w-6 h-6 text-white flex-shrink-0" />
                          <span className="text-sm font-medium text-white truncate">{skill.name}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* --- Projects Section --- */}
          <AnimatedSection>
            <SectionHeader icon={FaCode} title="Featured Projects" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {CONFIG.projects.map((project) => (
                <div key={project.title} className="flex flex-col p-4  rounded-3xl bg-[#151515] transition-all duration-300">
                  <div className="flex-grow space-y-4">
                    <div className="flex justify-between items-start">
                      <h4 className="text-2xl   text-white">{project.title}</h4>
                      <span className={`px-3 py-1 text-sm  rounded  ${project.status === "Live" ? "bg-blue-500 text-black rounded-full  " : "bg-neutral-800 text-neutral-300  -neutral-700"}`}>{project.status}</span>
                    </div>
                    <p className="text-sm text-yellow-200">{project.type} • {project.year}</p>
                    <div className="space-y-2 text-sm text-neutral-100">
                      {project.description.map((p, i) => <p key={i}>{p}</p>)}
                    </div>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.technologies.map(tech => <TechTag key={tech}>{tech}</TechTag>)}
                    </div>
                    
                    {/* Docker Command Section */}
                    <div className="mt-4 p-3 bg-neutral-900 border-2 border-black rounded-3xl">
                      <div className="flex items-center gap-2 mb-2">
                        <FaDocker className="w-4 h-4 text-blue-400" />
                        <span className="text-sm font-mono  font-semibold text-blue-500">Docker Command</span>
                      </div>
                      <div className="flex items-center justify-between gap-3">
                        <code className="text-sm text-white font-semibold  bg-[#212121] px-2 py-2 rounded-xl border border-black flex-1 overflow-x-auto">
                          {project.dockerCommand}
                        </code>
                        <CopyButton text={project.dockerCommand} />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mt-6 pt-4 -t ">
                    {project.links.live && (
                      <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-full hover:bg-blue-500 border-2 border-blue-500 hover:text-black  p-2  gap-2 text-sm font-semibold text-neutral-100  transition-colors">
                        <FaGlobe /> Live Demo
                      </a>
                    )}
                    {project.links.repo && (
                      <a href={project.links.repo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2  p-2 rounded-full text-black text-sm font-semibold  bg-blue-500  hover:text-black transition-colors">
                        <FaGithub /> Source Code
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* --- Education Section --- */}
          <AnimatedSection>
            <SectionHeader icon={FaGraduationCap} title="Education" />
            <div className=" p-3 rounded-3xl bg-[#151515] shadow-md shadow-black  ">
              <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-4">
                <div className="space-y-1">
                  <h4 className="text-2xl   text-white">{CONFIG.education.degree} in {CONFIG.education.field}</h4>
                  <p className="text-neutral-200">{CONFIG.education.institution}</p>
                  <p className="text-md text-neutral-200">{CONFIG.education.location}</p>
                </div>
                <div className="text-left sm:text-right space-y-2 flex-shrink-0">
                  <p className="text-sm font-medium  text-yellow-200">{CONFIG.education.period}</p>
                  <p className="inline-block px-2.5 py-1 text-xs font-semibold rounded  text-neutral-100  ">{CONFIG.education.status}</p>
                </div>
              </div>
              <p className="mt-4 pt-4 -t  text-neutral-300">{CONFIG.education.description}</p>
            </div>
          </AnimatedSection>
        </div>
      </main>
    </div>
  )
}
