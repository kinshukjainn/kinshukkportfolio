import { useState, useEffect } from "react"
import {
  Github,
  Mail,
  MessageCircle,
  MapPin,
  Linkedin,
  Globe,
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

import profileimage from "../assets/mainweb.jpg";


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
      year: "2024",
      url: "https://www.credly.com/badges/a0042ec2-cc6e-4a99-84de-a1516ee5775a/public_url",
      description: "Digital badge covering machine learning concepts and AWS ML services",
      skills: ["SageMaker", "ML Algorithms", "Data Processing", "Model Deployment"],
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
  const [currentTime, setCurrentTime] = useState("")
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

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      )
    }
    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi Kinshuk, I saw your portfolio and wanted to connect.")
    window.open(`https://wa.me/${CONFIG.personal.whatsappNumber}?text=${message}`, "_blank")
  }

  interface SocialConfig {
    platform: string;
    url: string;
    icon: React.ElementType;
    handle: string;
    action?: string;
  }
  
  const handleSocialClick = (social: SocialConfig) => {
    if (social.action === "whatsapp") {
      handleWhatsAppClick()
    } else {
      window.open(social.url, "_blank")
    }
  }

  return (
    <div className="min-h-screen bg-black text-white ">
      {/* Terminal Header */}
      <div className=" pt-30 top-0 z-50 bg-black border-b border-white/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-white"></div>
                <div className="w-3 h-3 rounded-full border border-white"></div>
                <div className="w-3 h-3 rounded-full border border-white"></div>
              </div>
              <span className="text-sm">cloud-portfolio.sh</span>
            </div>
            <div className="text-sm">{currentTime}</div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* 1. INTRO SECTION */}
        <section className="mb-16">
          <div className="border border-white/20 rounded-lg p-8 bg-black/50">
            <div className="mb-6">
              <div className="text-white/60 text-sm mb-2">
                {typedText}
                <span className="animate-pulse">|</span>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-2">
                  <h1 className="text-4xl lg:text-6xl font-bold mb-4 tracking-tight">{CONFIG.personal.name}</h1>
                  <h2 className="text-xl lg:text-2xl text-white/80 mb-4">{CONFIG.personal.title}</h2>
                  <div className="flex items-center gap-2 text-white/60 mb-6">
                    <MapPin className="w-4 h-4" />
                    <span>{CONFIG.personal.location}</span>
                  </div>
                  <div className="flex flex-wrap gap-3 mb-6">
                    <span className="px-3 py-1 border border-white text-white text-sm">
                      ● {CONFIG.personal.availability}
                    </span>
                    <span className="px-3 py-1 border border-white text-white text-sm">● {CONFIG.personal.status}</span>
                  </div>
                </div>
                <div className="flex justify-center lg:justify-end">
                  <div className="relative">
                    <div className="w-48 h-48 border-2 border-white/20 rounded-lg overflow-hidden">
                      <img
                        src={profileimage}
                        alt={CONFIG.personal.name}
                        className="w-full h-full object-cover filter grayscale"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-white rounded-full border-2 border-black"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4 text-white/80 leading-relaxed">
              {CONFIG.personal.bio.map((paragraph, index) => (
                <p key={index} className="text-sm lg:text-base">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* 2. SOCIAL MEDIA LINKS */}
        <section className="mb-16">
          <div className="border border-white/20 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <MessageCircle className="w-6 h-6" />$ connect --social
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {CONFIG.social.map((social, index) => {
                const Icon = social.icon
                return (
                  <button
                    key={index}
                    onClick={() => handleSocialClick(social)}
                    className="group border border-white/20 rounded-lg p-4 hover:border-white hover:bg-white/5 transition-all duration-200"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Icon className="w-5 h-5" />
                      <span className="font-semibold">{social.platform}</span>
                    </div>
                    <div className="text-sm text-white/60 text-left">{social.handle}</div>
                    <ExternalLink className="w-4 h-4 mt-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                )
              })}
            </div>
          </div>
        </section>

        {/* 3. CERTIFICATIONS */}
        <section className="mb-16">
          <div className="border border-white/20 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Award className="w-6 h-6" />$ list --certifications
            </h3>
            <div className="space-y-6">
              {CONFIG.certifications.map((cert, index) => (
                <div key={index} className="border border-white/10 rounded-lg p-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="text-lg font-semibold">{cert.title}</h4>
                        <span
                          className={`px-2 py-1 text-xs border ${
                            cert.status === "Completed" ? "border-white text-white" : "border-white/60 text-white/60"
                          }`}
                        >
                          {cert.status}
                        </span>
                      </div>
                      <p className="text-white/60 text-sm mb-2">
                        {cert.organization} • {cert.year}
                      </p>
                      <p className="text-white/80 text-sm mb-3">{cert.description}</p>
                      {cert.progress && <p className="text-white/60 text-xs mb-3">Progress: {cert.progress}</p>}
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, skillIndex) => (
                          <span key={skillIndex} className="px-2 py-1 border border-white/20 text-xs">
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
                        className="inline-flex items-center gap-2 px-4 py-2 border border-white hover:bg-white hover:text-black transition-colors text-sm"
                      >
                        View Certificate
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. SKILLS */}
        <section className="mb-16">
          <div className="border border-white/20 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Code className="w-6 h-6" />$ cat skills.json
            </h3>
            <div className="space-y-8">
              {Object.entries(CONFIG.skills).map(([category, skills]) => (
                <div key={category}>
                  <h4 className="text-lg font-semibold mb-4 text-white/90">"{category}": [</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 ml-4">
                    {skills.map((skill, skillIndex) => {
                      const Icon = skill.icon
                      return (
                        <div
                          key={skillIndex}
                          className="flex items-center gap-2 p-3 border border-white/10 rounded hover:border-white/30 transition-colors"
                        >
                          <Icon className="w-4 h-4" />
                          <span className="text-sm">"{skill.name}"</span>
                        </div>
                      )
                    })}
                  </div>
                  <div className="text-white/60 ml-4 mt-2">]</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. PROJECTS */}
        <section className="mb-16">
          <div className="border border-white/20 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Code className="w-6 h-6" />$ ls -la projects/
            </h3>
            <div className="space-y-8">
              {CONFIG.projects.map((project, index) => (
                <div key={index} className="border border-white/10 rounded-lg p-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="text-xl font-semibold">{project.title}</h4>
                        <span
                          className={`px-2 py-1 text-xs border ${
                            project.status === "Live" ? "border-white text-white" : "border-white/60 text-white/60"
                          }`}
                        >
                          {project.status}
                        </span>
                      </div>
                      <p className="text-white/60 text-sm">
                        {project.type} • {project.year}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    {project.description.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-white/80 text-sm leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  <div className="mb-6">
                    <h5 className="text-sm font-semibold mb-3 text-white/90">Technologies:</h5>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 border border-white/20 text-xs hover:border-white/40 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 border border-white hover:bg-white hover:text-black transition-colors text-sm"
                      >
                        <Globe className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                    {project.links.repo && (
                      <a
                        href={project.links.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 border border-white hover:bg-white hover:text-black transition-colors text-sm"
                      >
                        <Github className="w-4 h-4" />
                        Source Code
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. EDUCATION */}
        <section className="mb-16">
          <div className="border border-white/20 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <GraduationCap className="w-6 h-6" />$ cat education.txt
            </h3>
            <div className="border border-white/10 rounded-lg p-6">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                <div>
                  <h4 className="text-xl font-semibold mb-2">{CONFIG.education.degree}</h4>
                  <p className="text-white/80 mb-1">{CONFIG.education.field}</p>
                  <p className="text-white/60 text-sm mb-2">{CONFIG.education.institution}</p>
                  <p className="text-white/60 text-sm">{CONFIG.education.location}</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{CONFIG.education.period}</span>
                  </div>
                  <span className="px-2 py-1 border border-white text-xs">{CONFIG.education.status}</span>
                </div>
              </div>

              <div className="space-y-3">
                {CONFIG.education.description.map((paragraph, index) => (
                  <p key={index} className="text-white/80 text-sm leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © 2025 {CONFIG.personal.name} • Built with passion for clean code and great experiences
          </p>
          <p className="text-white/40 text-xs mt-2">$ exit 0</p>
        </footer>
      </div>
    </div>
  )
}
