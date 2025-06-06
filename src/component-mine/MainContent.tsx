"use client"

import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import {
  FaAws,
  FaDocker,
  FaGithub,
  FaLinux,
  FaReact,
  FaCode,
  FaInstagram,
  FaWhatsapp,
  FaDiscord,
  FaLinkedin,
  FaTwitter,
  FaExternalLinkAlt,
  FaEnvelope,
  FaGraduationCap,
  FaCertificate,
  FaRocket,
  FaHeart,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaLink,
} from "react-icons/fa"
import { SiKubernetes, SiCanva, SiTerraform } from "react-icons/si"

export default function MetaPortfolio() {
  const personalInfo = {
    name: "Kinshuk Jain",
    title: "Crafting Cloud-Native Solutions with AWS",
    subtitle: "Open to Collaborations",
    currentlyExploring: "AWS || Blogging || React",
    email: "kinshuk25jan04@gmail.com",
    alternateEmail: "socialofficialkinshuk@gmail.com",
    whatsappNumber: "919172702501",
    location: "Ghaziabad, Uttar Pradesh, India",
    availability: "Available for opportunities",
  }

  const socialLinks = [
    { icon: <FaGithub />, label: "GitHub", url: "https://github.com/kinshukjainn", username: "@kinshukjainn" },
    { icon: <FaLinkedin />, label: "LinkedIn", url: "https://linkedin.com/in/kinshukjainn/", username: "kinshukjainn" },
    { icon: <FaTwitter />, label: "Twitter", url: "https://x.com/realkinshuk04", username: "@realkinshuk04" },
    {
      icon: <FaInstagram />,
      label: "Instagram",
      url: "https://instagram.com/kinshukjain._/",
      username: "kinshukjain._",
    },
  ]

  const techStack = [
    {
      category: "Cloud & Infrastructure",
      items: [
        { name: "AWS", icon: <FaAws />, level: "Intermediate", years: "2+" },
      ],
    },
    {
      category: "Frontend Development",
      items: [
        { name: "React", icon: <FaReact />, level: "Intermediate", years: "2+" },
      ],
    },
    {
      category: "Backend & DevOps",
      items: [
        { name: "Docker", icon: <FaDocker /> },
        { name: "Kubernetes", icon: <SiKubernetes /> },
        { name: "Terraform", icon: <SiTerraform /> },
      ],
    },
    {
      category: "Tools & Platforms",
      items: [
        { name: "Git/GitHub", icon: <FaGithub />, level: "Advanced", years: "3+" },
        { name: "Linux", icon: <FaLinux />, level: "Intermediate", years: "2+" },
        { name: "Discord", icon: <FaDiscord />, level: "Advanced", years: "3+" },
        { name: "Canva", icon: <SiCanva />, level: "Advanced", years: "2+" },
      ],
    },
  ]

  const projects = [
  {
    title: "Website Performance Optimization",
    description:
      "Optimized portfolio for SEO and speed using Lighthouse and Core Web Vitals, achieving top scores across all metrics.",
    liveUrl: "https://pagespeed.web.dev/",
    technologies: [
      "Lighthouse",
      "Core Web Vitals",
      "SEO Optimization",
      "Performance Monitoring"
    ],
    status: "Optimized",
    isPerformanceProject: true,
    performanceScores: [
      {
        score: 97,
        label: "Desktop Performance",
        color: "text-green-600",
        description: "Excellent loading speed and optimization"
      },
      {
        score: 71,
        label: "Mobile Performance",
        color: "text-orange-600",
        description: "Good mobile experience with room for improvement"
      },
      {
        score: 89,
        label: "Accessibility",
        color: "text-orange-600",
        description: "Strong accessibility compliance"
      },
      {
        score: 100,
        label: "SEO Score",
        color: "text-green-600",
        description: "Perfect search engine optimization"
      }
    ],
    scoreRanges: [
      { color: "bg-red-500", range: "0-49", label: "Poor" },
      { color: "bg-orange-500", range: "50-89", label: "Needs Improvement" },
      { color: "bg-green-500", range: "90-100", label: "Good" }
    ]
  },
  {
    title: "Tech Blog Platform",
    description:
      "Built a custom-domain tech blog using Hashnode to share cloud, DevOps, and React insights, optimized for SEO and brand visibility.",
    liveUrl: "https://blog.cloudkinshuk.in",
    technologies: [
      "Hashnode",
      "Amazon Route 53",
      "Hostinger",
      "DNS Management",
      "Custom Domain",
      "CDN"
    ],
    status: "Active",
    learnings: [
      "Set up developer blog with custom domain and HTTPS",
      "Documented real-world learnings in cloud and DevOps",
      "Used Hashnode's SEO and CDN features effectively"
    ],
    keyFeatures: [
      "Developer blog at blog.cloudkinshuk.in",
      "Custom DNS setup using Route 53",
      "Published blogs on AWS, React, and architecture"
    ]
  },
  {
    title: "PassGentool ( Comming Soon )",
    description:
      "This Project is in pre-building stage.",
    liveUrl: "#",
    repoUrl: "#",
    technologies: [
      "Would be using React",
      "Would be using TypeScript",
      "Would be using Tailwind CSS",
      "Would be using Vite",
      "Would be using Amazon Route 53",
    ],
    status: "Building stage",
    featured: false,
    learnings: [
      "None / Comming soon Please check back later",
    ],
    keyFeatures: [
      "None / Comming soon Please check back later",
    ]
  }
]


  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      status: "In Progress",
      description: "Currently preparing for Q3 2025",
      link: "#",
      issuer: "Amazon Web Services",
      expectedDate: "Q3 2025",
    },
    {
      title: "AWS Serverless Cloud Badge",
      status: "Completed",
      description: "Earned digital badge for serverless architecture",
      link: "https://www.credly.com/badges/0bcd1190-2d68-45ff-91d9-32b65aa93ed8/public_url",
      issuer: "Amazon Web Services",
      completedDate: "2024",
    },
    {
      title: "AWS Machine Learning Badge",
      status: "Completed",
      description: "Earned digital badge for ML fundamentals",
      link: "https://www.credly.com/badges/a0042ec2-cc6e-4a99-84de-a1516ee5775a/public_url",
      issuer: "Amazon Web Services",
      completedDate: "2024",
    },
  ]

  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Electrical Engineering",
      institution: "JSS Academy of Technical Education",
      location: "Noida, Uttar Pradesh",
      period: "2022 - 2026",
      status: "Ongoing",
    },
  ]

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi Kinshuk, I saw your website and wanted to connect.")
    window.open(`https://wa.me/${personalInfo.whatsappNumber}?text=${message}`, "_blank")
  }

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemFade = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  }

  const scaleIn = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <div className="min-h-screen  bg-[#121212] text-white">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-12">
        {/* Header */}
        <motion.header initial="hidden" animate="visible" variants={fadeIn} className="mb-12 sm:mb-16 md:mb-20">
          <div className="relative overflow-hidden rounded-md sm:rounded-md bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] p-4 sm:p-6 md:p-8 shadow-2xl">

            <motion.div variants={fadeIn} className="text-center mb-6 sm:mb-8">
              <h1 className="personal-name text-7xl sm:text-7xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-400 tracking-tight leading-tight mb-4 sm:mb-6">
                {personalInfo.name}
              </h1>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-white mb-3 sm:mb-4 px-2">
                {personalInfo.title}
              </p>

              

              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-white mb-4 sm:mb-6 px-2">
                <span className="flex items-center gap-2 bg-[#1e1e1e] px-3 py-2 rounded-md">
                  <FaMapMarkerAlt className="text-white text-sm" />
                </span>
                <span className="text-sm sm:text-base text-center">{personalInfo.location}</span>
              </div>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  variants={itemFade}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-[#1e1e1e] hover:rounded-full rounded-md hover:border-red-500 hover:bg-[#252525] transition-all duration-300 min-h-[44px] touch-manipulation"
                >
                  <span className="text-red-500 text-sm sm:text-base">{social.icon}</span>
                  <span className="hidden sm:inline text-xs sm:text-sm">{social.username}</span>
                  <span className="sm:hidden text-xs">{social.label}</span>
                </motion.a>
              ))}
              <motion.button
                variants={itemFade}
                onClick={handleWhatsAppClick}
                className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-[#1e1e1e] rounded-md hover:rounded-full hover:border-green-500 hover:bg-[#252525] transition-all duration-300 min-h-[44px] touch-manipulation"
              >
                <FaWhatsapp className="text-green-500 text-sm sm:text-base" />
                <span className="text-xs sm:text-sm">WhatsApp</span>
              </motion.button>
            </motion.div>
          </div>
        </motion.header>

        {/* Open Source Section */}
        

        {/* Contact Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="mb-12 sm:mb-16 md:mb-20"
        >
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-md sm:rounded-md p-4 sm:p-6 md:p-8 shadow-xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4 sm:mb-6">
              <div className="p-2 bg-[#252525] rounded-md">
                <FaEnvelope className="text-red-500 text-lg sm:text-xl" />
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">Get In Touch</h2>
            </div>

            <p className="text-base sm:text-lg text-white mb-6 sm:mb-8">
              Always open to connecting with peers, engineers, developers, or anyone curious about tech and cloud
              computing.
            </p>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4 sm:space-y-6"
            >
              <motion.div
                variants={itemFade}
                className="flex flex-col sm:flex-row items-start gap-4 p-4 rounded-md sm:rounded-md transition-all duration-300"
              >
                <div className="p-3 bg-[#252525] rounded-md">
                  <FaEnvelope className="text-red-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-white mb-1 text-sm sm:text-base">Primary Email</p>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-white hover:text-red-400 font-mono text-xs sm:text-sm transition-colors duration-300 break-all"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </motion.div>

              <motion.div
                variants={itemFade}
                className="flex flex-col sm:flex-row items-start gap-4 p-4  rounded-md sm:rounded-md"
              >
                <div className="p-3 bg-[#252525] rounded-md">
                  <FaEnvelope className="text-purple-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-white mb-1 text-sm sm:text-base">Alternate Email</p>
                  <a
                    href={`mailto:${personalInfo.alternateEmail}`}
                    className="text-white hover:text-purple-400 font-mono text-xs sm:text-sm transition-colors duration-300 break-all"
                  >
                    {personalInfo.alternateEmail}
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Tech Stack Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="mb-12 sm:mb-16 md:mb-20"
        >
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-md sm:rounded-md p-4 sm:p-6 md:p-8 shadow-xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4 sm:mb-6">
              <div className="p-2 bg-[#252525] rounded-md">
                <FaCode className="text-red-500 text-lg sm:text-xl" />
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">Technical Skills</h2>
            </div>

            <p className="text-base sm:text-lg text-white mb-6 sm:mb-8">Technologies and tools I work with</p>

            <div className="space-y-8 sm:space-y-12">
              {techStack.map((category, categoryIndex) => (
                <motion.div
                  key={categoryIndex}
                  variants={scaleIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 pb-2 border-b border-gray-800">
                    {category.category}
                  </h3>
                  <div className="grid gap-3 sm:gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {category.items.map((tech, techIndex) => (
                      <motion.div
                        key={techIndex}
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-3 sm:gap-3 p-2 sm:p-3 bg-[#1e1e1e] rounded-md sm:rounded-md hover:border-red-500 transition-all duration-300"
                      >
                        <div className="p-2 bg-[#252525] rounded-md text-red-500 text-lg sm:text-xl flex-shrink-0">
                          {tech.icon}
                        </div>
                        <span className="font-medium text-white text-sm sm:text-base">{tech.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="mb-12 sm:mb-16 md:mb-20"
        >
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-md sm:rounded-md md:rounded-md p-4 sm:p-6 md:p-8 shadow-xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4 sm:mb-6">
              <div className="p-2 bg-[#252525] rounded-md">
                <FaRocket className="text-red-500 text-lg sm:text-xl" />
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">Featured Projects</h2>
            </div>

            <p className="text-base sm:text-lg text-white mb-6 sm:mb-8">
              Recent work and contributions showcasing my technical expertise
            </p>

            <div className="space-y-12 sm:space-y-16">
              {projects.map((project, index) => (
                <motion.article
                  key={index}
                  variants={scaleIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="border-b border-gray-800 pb-8 sm:pb-12 last:border-b-0"
                >
                  <header className="mb-4 sm:mb-6">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">{project.title}</h3>
                      {project.featured && (
                        <span className="text-xs font-bold bg-gradient-to-r from-red-600 to-red-700 text-white px-2 sm:px-3 py-1 rounded-full">
                          FEATURED
                        </span>
                      )}
                      <span className="text-xs font-bold bg-[#252525] text-white px-2 sm:px-3 py-1 rounded-full">
                        {project.status}
                      </span>
                    </div>

                    <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
                      {project.description}
                    </p>

                    <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                      <motion.a
                        whileHover={{ scale: 1.02 }}
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2  px-2 py-2 bg-white hover:bg-red-100 text-black rounded-md sm:rounded-md transition-all duration-300 min-h-[44px] touch-manipulation text-xs sm:text-base"
                      >
                        <FaLink />
                        {project.isPerformanceProject ? "Check Score" : "Live Demo"}
                      </motion.a>
                      {project.repoUrl && (
                        <motion.a
                          whileHover={{ scale: 1.02 }}
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#252525] hover:bg-[#303030] text-white rounded-md sm:rounded-md transition-all duration-300 min-h-[44px] touch-manipulation text-sm sm:text-base"
                        >
                          <FaGithub />
                          Source Code
                        </motion.a>
                      )}
                      <motion.a
                        whileHover={{ scale: 1.02 }}
                        href="https://blog.cloudkinshuk.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-2 py-2 bg-[#252525] hover:bg-[#303030] text-white rounded-md sm:rounded-md transition-all duration-300 min-h-[44px] touch-manipulation text-sm sm:text-base"
                      >
                        <FaGithub />
                        Read Blog  
                      </motion.a>
                    </div>
                  </header>

                  {project.isPerformanceProject ? (
                    <div className="space-y-6 sm:space-y-8">
                      <h4 className="text-base sm:text-lg font-bold text-white border-b border-gray-800 pb-2">
                        Performance Metrics
                      </h4>
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                        {project.performanceScores?.map((score, idx) => (
                          <motion.div
                            key={idx}
                            whileHover={{ y: -5 }}
                            className="text-center p-3 sm:p-4 bg-[#1e1e1e] rounded-md"
                          >
                            <div className="text-2xl sm:text-3xl md:text-4xl font-black mb-2 text-red-500">
                              {score.score}
                            </div>
                            <p className="font-semibold text-white mb-1 text-xs sm:text-sm">{score.label}</p>
                            <p className="text-xs text-white">{score.description}</p>
                          </motion.div>
                        ))}
                      </div>
                      <div className="text-xs sm:text-sm text-white space-y-2 p-3 sm:p-4 bg-[#1e1e1e] rounded-md">
                        <p>
                          Performance scores are calculated using Google Lighthouse and may vary based on network
                          conditions.
                        </p>
                        <div className="flex flex-wrap gap-3 sm:gap-4">
                          {project.scoreRanges?.map((range, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <div className={`w-3 h-3 ${range.color} rounded`}></div>
                              <span className="text-xs sm:text-sm">
                                {range.range} - {range.label}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-6 sm:space-y-8">

                      {project.learnings && project.learnings.length > 0 && (
                        <div>
                          <h4 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4 border-b border-green-900/30 pb-2">
                            Key Learnings
                          </h4>
                          <ul className="space-y-3">
                            {project.learnings.map((learning, idx) => (
                              <li key={idx} className="flex gap-2 p-2 sm:p-2 rounded-md sm:rounded-md">
                                <span className="text-green-500 font-bold mt-1 flex-shrink-0">•</span>
                                <span className="text-white text-sm sm:text-base">{learning}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {(project.keyFeatures) && (
                        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
                          {project.keyFeatures && project.keyFeatures.length > 0 && (
                            <div>
                              <h4 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4 border-b border-blue-900/30 pb-2">
                                Key Features
                              </h4>
                              <ul className="space-y-3">
                                {project.keyFeatures.map((feature, idx) => (
                                  <li
                                    key={idx}
                                    className="flex gap-2 p-2 sm:p-2  rounded-md sm:rounded-md"
                                  >
                                    <span className="text-blue-400 font-bold mt-1 flex-shrink-0">•</span>
                                    <span className="text-white text-sm sm:text-base">{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                        </div>
                      )}
                    </div>
                  )}

                  {project.technologies && project.technologies.length > 0 && (
                    <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-800">
                      <h4 className="font-bold mb-3 sm:mb-4 text-white text-sm sm:text-base">Technology Stack:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="text-xs font-semibold bg-[#252525] text-white px-2 sm:px-3 py-1 rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.article>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Certifications Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="mb-12 sm:mb-16 md:mb-20"
        >
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-md sm:rounded-md p-4 sm:p-6 md:p-8 shadow-xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4 sm:mb-6">
              <div className="p-2 bg-[#252525] rounded-md">
                <FaCertificate className="text-red-500 text-lg sm:text-xl" />
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                Certifications & Learning Journey
              </h2>
            </div>

            <p className="text-base sm:text-lg text-white mb-6 sm:mb-8">
              AWS certifications and continuous professional development
            </p>

            <div className="mb-6 sm:mb-8 p-4 sm:p-6 rounded-md sm:rounded-md">
              <h3 className="font-bold text-white mb-3 text-base sm:text-lg">🎯 AWS Certification :</h3>
              <p className="text-white leading-relaxed text-sm sm:text-base">
                Recently scored 679/1000 on AWS Cloud Practitioner (CLF-C02) On January 24 2025
              </p>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4 sm:space-y-6"
            >
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={itemFade}
                  className="border-b border-gray-800 pb-4 sm:pb-6 last:border-b-0"
                >
                  <div className="flex flex-col gap-4 p-4 sm:p-6 rounded-md sm:rounded-md">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                        <h3 className="font-bold text-white text-base sm:text-lg">{cert.title}</h3>
                        <span
                          className={`text-xs font-bold px-2 sm:px-3 py-1 rounded-full ${
                            cert.status === "Completed"
                              ? "bg-green-900/50 text-green-400"
                              : "bg-blue-900/50 text-blue-400"
                          }`}
                        >
                          {cert.status}
                        </span>
                      </div>
                      <p className="text-white mb-2 text-sm sm:text-base">{cert.description}</p>
                      <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-white">
                        <span>Issued by: {cert.issuer}</span>
                        <span className="hidden sm:inline">•</span>
                        <span>
                          {cert.status === "Completed"
                            ? `Completed: ${cert.completedDate}`
                            : `Expected: ${cert.expectedDate}`}
                        </span>
                      </div>
                    </div>
                    {cert.status === "Completed" && (
                      <motion.a
                        whileHover={{ scale: 1.02 }}
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-max sm:w-max items-center justify-center gap-2 px-2 py-2 bg-white hover:bg-red-100 text-black rounded-md sm:rounded-md transition-all duration-300 min-h-[44px] touch-manipulation text-sm sm:text-base"
                      >
                        <FaExternalLinkAlt />
                        View Certificate
                      </motion.a>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="mb-12 sm:mb-16 md:mb-20"
        >
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-md sm:rounded-md p-4 sm:p-6 md:p-8 shadow-xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4 sm:mb-6">
              <div className="p-2 bg-[#252525] rounded-md">
                <FaGraduationCap className="text-red-500 text-lg sm:text-xl" />
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">Education</h2>
            </div>

            <p className="text-base sm:text-lg text-white mb-6 sm:mb-8">Academic background and qualifications</p>

            <div className="space-y-6 sm:space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="p-4 sm:p-6  rounded-md"
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3 sm:mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{edu.degree}</h3>
                      <p className="text-white font-semibold text-base sm:text-lg">{edu.field}</p>
                    </div>
                    <span
                      className={`text-sm font-bold px-2 sm:px-3 py-1 rounded-full self-start ${
                        edu.status === "Completed" ? "bg-green-900/50 text-green-400" : "bg-blue-900/50 text-blue-400"
                      }`}
                    >
                      {edu.status}
                    </span>
                  </div>
                  <p className="text-white font-medium mb-3 sm:mb-4 text-sm sm:text-base">{edu.institution}</p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-white text-xs sm:text-sm">
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-red-500" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt className="text-red-500" />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center py-8 sm:py-12 border-t border-gray-800"
        >
          <div className="max-w-2xl mx-auto px-4">
            <p className="text-white leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
              Want to explore my thinking process and learning journey? Check out my comprehensive{" "}
              <Link to="/blog" className="text-red-500 hover:text-red-400 font-semibold transition-colors duration-300">
                Blogs
              </Link>{" "}
              page where I document insights, challenges, and solutions.
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="flex items-center justify-center gap-2 text-white text-sm sm:text-base"
            >
              <span>Built with</span>
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  duration: 1.5,
                }}
              >
                <FaHeart className="text-red-500" />
              </motion.div>
              <span>and lots of chai</span>
            </motion.div>
          </div>
        </motion.footer>
      </div>
    </div>
  )
}
