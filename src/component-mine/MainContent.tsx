"use client"
import { motion } from "framer-motion"
import {
  FaAws,
  FaDocker,
  FaGithub,
  FaLinux,
  FaPython,
  FaReact,
  FaStar,
  FaCodeBranch,
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
  FaLockOpen,
} from "react-icons/fa"
import { SiKubernetes, SiCanva, SiTerraform, SiTailwindcss } from "react-icons/si"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const scaleOnHover = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
  transition: { type: "spring", stiffness: 400, damping: 25 },
}

export default function MetaPortfolio() {
  const personalInfo = {
    name: "Kinshuk Jain",
    title: "Exploring in cloud !",
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
        { name: "AWS Cloud", icon: <FaAws className="text-[#FF9900]" />, level: "Intermediate", years: "2+" },
        { name: "Route 53", icon: <FaAws className="text-[#FF9900]" />, level: "Beginner", years: "1+" },
        { name: "AWS Amplify", icon: <FaAws className="text-[#FF9900]" />, level: "Beginner", years: "1+" },
      ],
    },
    {
      category: "Frontend Development",
      items: [
        { name: "React", icon: <FaReact className="text-[#61DAFB]" />, level: "Intermediate", years: "2+" },
        { name: "TypeScript", icon: <FaCode className="text-[#3178C6]" />, level: "Intermediate", years: "1+" },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" />, level: "Advanced", years: "2+" },
      ],
    },
    {
      category: "Backend & DevOps",
      items: [
        { name: "Python/Boto3", icon: <FaPython className="text-[#3776AB]" />},
        { name: "Docker", icon: <FaDocker className="text-[#2496ED]" />},
        { name: "Kubernetes", icon: <SiKubernetes className="text-[#326CE5]" />},
        { name: "Terraform", icon: <SiTerraform className="text-[#7B42BC]" />},
      ],
    },
    {
      category: "Tools & Platforms",
      items: [
        { name: "Git/GitHub", icon: <FaGithub className="text-[#181717]" />, level: "Advanced", years: "3+" },
        { name: "Linux", icon: <FaLinux className="text-[#FCC624]" />, level: "Intermediate", years: "2+" },
        { name: "Discord", icon: <FaDiscord className="text-[#5865F2]" />, level: "Advanced", years: "3+" },
        { name: "Canva", icon: <SiCanva className="text-[#00C4CC]" />, level: "Advanced", years: "2+" },
      ],
    },
  ]

  const projects = [
    {
      title: "Portfolio Website",
      description:
        "Built and deployed a personal portfolio website using React 19, TypeScript, Tailwind CSS with live blog integration and full cloud-backed deployment.",
      liveUrl: "https://cloudkinshuk.in",
      repoUrl: "https://github.com/kinshukjainn/kinshukkportfolio",
      technologies: ["React 19", "TypeScript", "Tailwind CSS", "AWS Amplify", "Route 53", "Hostinger"],
      status: "Live",
      featured: true,
      challenges: [
        "Deploying my website on a cloud platform like AWS was a completely new experience for me. AWS is a vast platform with numerous complexities, and navigating through its features felt overwhelming at times.",
        "I was unfamiliar with the best practices for optimizing SEO (Search Engine Optimization) while building the website. Despite several attempts, I struggled to implement the right methods to enhance my website's SEO performance and overall user experience.",
        "As a beginner, I constantly worried about the potential high costs associated with deploying the website on AWS. The thought of exceeding the free-tier traffic limits and accumulating an unexpected, hefty bill added to my stress.",
        "When I purchased my own domain from Hostinger, I had no idea how to link it to my website. I faced several challenges in correctly redirecting my custom URL to the site and encountered failures multiple times before getting it right.",
      ],
      learnings: [
        "Gained hands-on experience with AWS services and understood how to deploy static and dynamic websites using cost-effective practices. I also learned how to monitor resources to avoid unexpected charges.",
        "Understood the importance of SEO and gradually adopted key best practices such as setting up proper meta tags, improving load speed, using semantic HTML, and ensuring mobile responsiveness.",
        "Learned how to stay calm and analytical under pressure. I developed the habit of reading official documentation and community threads to troubleshoot issues instead of panicking.",
        "Mastered the process of linking a custom domain to a hosted website. I now understand DNS records, domain pointing, and the importance of patience and debugging while working with hosting and domain providers.",
      ],
      keyFeatures: [
        "Implemented responsive and dynamic design using Tailwind CSS and React 19, ensuring a seamless experience across devices",
        "Migrated from Netlify to AWS Amplify, to make it more cost-effective and scalable",
      ],
      technicalDetails: [
        "Configured Amazon Route 53 for SSL and DNS management. Route 53 Hosted zones manages my DNS and SSL Certificates",
        "Used AI tools like chat gpt and claude to write code and to boost development efficiency",
      ],
    },
    {
      title: "Website Performance Optimization",
      description:
        "Comprehensive SEO and performance optimization of my portfolio website, achieving excellent scores across all key metrics through strategic improvements and best practices implementation.",
      liveUrl: "https://pagespeed.web.dev/",
      technologies: ["Lighthouse", "Core Web Vitals", "SEO Optimization", "Performance Monitoring"],
      status: "Optimized",
      isPerformanceProject: true,
      performanceScores: [
        {
          score: 97,
          label: "Desktop Performance",
          color: "text-green-600",
          description: "Excellent loading speed and optimization",
        },
        {
          score: 71,
          label: "Mobile Performance",
          color: "text-orange-600",
          description: "Good mobile experience with room for improvement",
        },
        {
          score: 89,
          label: "Accessibility",
          color: "text-orange-600",
          description: "Strong accessibility compliance",
        },
        {
          score: 100,
          label: "SEO Score",
          color: "text-green-600",
          description: "Perfect search engine optimization",
        },
      ],
      scoreRanges: [
        { color: "bg-red-500", range: "0-49", label: "Poor" },
        { color: "bg-orange-500", range: "50-89", label: "Needs Improvement" },
        { color: "bg-green-500", range: "90-100", label: "Good" },
      ],
    },
    {
      title: "Tech Blog Platform",
      description:
        "Created and deployed a fully functional tech blog using Hashnode as the content platform, with custom domain integration and DNS configuration for professional content delivery.",
      liveUrl: "https://blog.cloudkinshuk.in",
      technologies: ["Hashnode", "Amazon Route 53", "Hostinger", "DNS Management", "Custom Domain", "CDN"],
      status: "Active",
      learnings: [
        "Developed a personal blog page using a custom domain (e.g., blog.yourname.com) to showcase technical knowledge and writing skills.",
        "Published blog posts regularly to demonstrate expertise in cloud computing, DevOps, and emerging technologies. Shared links on LinkedIn, GitHub, and resume to strengthen my personal brand.",
        "Created the blog to bridge the gap between learning and understanding new skills by documenting insights, challenges, and solutions in a structured format.",
        "Gained hands-on experience with Hashnode, a developer-friendly blogging platform, for content management, custom domain integration, and SEO optimization.",
      ],
      keyFeatures: [
        "Set up a developer blog with a custom domain (blog.cloudkinshuk.in)",
        "Configured DNS records (A, CNAME, TXT) in Route 53 for domain verification and HTTPS",
        "Publishing technical articles covering AWS, serverless architecture, and React development",
      ],
    },
    {
      title: "PassGentoo - Secure Password Generator",
      description:
        "Built a secure, customizable password generator using React, TypeScript, and Tailwind CSS, with cryptographic randomness powered by the Web Crypto API. Designed to generate high-entropy passwords resistant to brute-force attacks.",
      liveUrl: "https://passgentoo.cloudkinshuk.in",
      repoUrl: "https://github.com/kinshukjainn/encrypted-password-project",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Vite",
        "Web Crypto API",
        "Shannon Entropy",
        "Amazon Route 53",
        "DNS Management",
        "Custom Domain",
        "HTTPS",
      ],
      status: "Live",
      featured: true,
      learnings: [
        "Developed a cryptographically secure password generator using Web Crypto API with an entropy pool of 1024 random values for enhanced security.",
        "Implemented features like password strength analysis using Shannon entropy and estimated crack time calculations for real-time feedback.",
        "Explored modern frontend practices with React, TypeScript, Vite, and Tailwind CSS to build a responsive and performant user interface.",
        "Learned to optimize usability through customizable character sets and password lengths, while maintaining strong security standards.",
        "Documented the process, challenges, and technical insights in a blog post and shared it on LinkedIn, GitHub, and resume to enhance my professional brand.",
      ],
      keyFeatures: [
        "Generates secure, high-entropy passwords using Web Crypto API and client-side processing",
        "Customizable length and character sets, with options to generate pronounceable passwords",
        "Real-time strength analysis using Shannon entropy and estimated crack time visualization",
        "Excludes visually confusing characters to improve usability and reduce user error",
        "Built with React + TypeScript and styled with Tailwind CSS, optimized with Vite",
        "Deployed on custom domain (passgentoo.cloudkinshuk.in) with DNS and HTTPS via Route 53",
      ],
    },
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
    {
      degree: "Higher Secondary Education (XII)",
      field: "Science (PCM)",
      institution: "Sri Chaitnya Junior College",
      location: "Pune, Maharashtra",
      period: "2020 - 2022",
      status: "Completed",
    },
  ]

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi Kinshuk, I saw your website and wanted to connect.")
    window.open(`https://wa.me/${personalInfo.whatsappNumber}?text=${message}`, "_blank")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-3 sm:px-4 lg:px-6 py-6 sm:py-8 lg:py-12">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.div
            className="inline-block p-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6 sm:mb-8"
            variants={fadeInUp}
          >
            <div className="bg-white rounded-full p-4 sm:p-6 lg:p-8 shadow-lg">
              <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl sm:text-3xl lg:text-4xl font-bold shadow-xl">
                KJ
              </div>
            </div>
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-900 via-blue-900 via-blue-700 via-green-800 to-green-800  bg-clip-text text-transparent mb-4 sm:mb-6 tracking-tight leading-tight"
            variants={fadeInUp}
          >
            {personalInfo.name}
          </motion.h1>

          <motion.div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 px-2" variants={fadeInUp}>
            <span className="text-sm sm:text-base lg:text-lg px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-3 bg-blue-50 text-blue-700 rounded-full font-medium border border-blue-200">
              {personalInfo.title}
            </span>
            <span className="text-sm sm:text-base lg:text-lg px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-3 bg-white border border-gray-300 text-gray-700 rounded-full font-medium">
              {personalInfo.subtitle}
            </span>
            <span className="text-sm sm:text-base lg:text-lg px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-3 bg-green-50 border border-green-300 text-green-700 rounded-full font-medium">
              {personalInfo.availability}
            </span>
          </motion.div>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8 text-gray-600 text-sm sm:text-base"
            variants={fadeInUp}
          >
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-600 flex-shrink-0" />
              <span className="break-words">{personalInfo.location}</span>
            </div>
          </motion.div>

          <motion.p
            className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed px-2"
            variants={fadeInUp}
          >
            Currently exploring:{" "}
            <span className="font-mono  px-3 sm:px-4 py-2  text-blue-600 inline-block mt-2 sm:mt-0">
              {personalInfo.currentlyExploring}
            </span>
          </motion.p>

          {/* Social Links */}
          <motion.div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4" variants={fadeInUp}>
            {socialLinks.map((social, index) => (
              <motion.div key={index} {...scaleOnHover}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 sm:px-4 lg:px-5 py-2 sm:py-2.5 bg-white border border-gray-300 rounded-2xl text-gray-700 font-medium shadow-sm hover:bg-gray-100 hover:border-blue-300 transition-all text-sm sm:text-base"
                >
                  <span className="text-base sm:text-lg">{social.icon}</span>
                  <span className="hidden sm:inline">{social.username}</span>
                  <span className="sm:hidden">{social.label}</span>
                </a>
              </motion.div>
            ))}
            <motion.div {...scaleOnHover}>
              <button
                onClick={handleWhatsAppClick}
                className="inline-flex items-center gap-2 px-3 sm:px-4 lg:px-5 py-2 sm:py-2.5 bg-white border border-gray-300 rounded-lg text-gray-700 font-medium shadow-sm hover:bg-gray-50 hover:border-green-300 transition-all text-sm sm:text-base"
              >
                <FaWhatsapp className="text-green-600 text-base sm:text-lg" />
                <span>WhatsApp</span>
              </button>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.section className="mb-12 sm:mb-16" variants={fadeInUp}>
          <div className="bg-white border border-gray-200 rounded-2xl sm:rounded-2xl shadow-sm overflow-hidden">
            <div className="p-4 sm:p-6 border-b border-gray-100">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-red-50 rounded-lg">
                  <FaLockOpen className="text-red-600 text-lg sm:text-xl" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Open Source Contributions</h2>
              </div>
              <p className="text-gray-600 text-base sm:text-lg">
                Fork it. Star it. Make it your own — if it serves your purpose.
              </p>
            </div>
            <div className="p-4 sm:p-6">
              <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg leading-relaxed">
                This portfolio project is open-source and available to fork. If the design or structure helped accelerate your workflow or served as a useful starting point, feel free to build on it. Giving the repo a star is appreciated, but entirely optional. Feedback, contributions, and practical enhancements are always welcome
              </p>

              <div className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8">
                <motion.div {...scaleOnHover}>
                  <a
                    href="https://github.com/kinshukjainn/kinshukkportfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 sm:px-4 lg:px-5 py-2 sm:py-2.5 bg-gray-900 border border-gray-300 rounded-2xl text-gray-100 font-medium shadow-sm hover:bg-gray-800 hover:border-gray-400 transition-all text-xs sm:text-sm"
                  >
                    <FaGithub className="text-base sm:text-lg" />
                    Portfolio Repository
                  </a>
                </motion.div>
                <motion.div {...scaleOnHover}>
                  <a
                    href="https://github.com/kinshukjainn/encrypted-password-project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 sm:px-4 lg:px-5 py-2 sm:py-2.5 bg-gray-900 border border-gray-300 rounded-2xl text-gray-100 font-medium shadow-sm hover:bg-gray-800 hover:border-gray-400 transition-all text-xs sm:text-sm"
                  >
                    <FaGithub className="text-base sm:text-lg" />
                    PassGentoo Repository
                  </a>
                </motion.div>
              </div>

              <div className="h-px bg-gray-200 my-6 sm:my-8"></div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-gray-500">
                <div className="flex items-center bg-gray-900 p-3 rounded-2xl gap-3">
                  <FaStar className="text-yellow-500 text-lg sm:text-xl" />
                  <span className="text-sm text-white sm:text-base lg:text-lg">Star to show appreciation</span>
                </div>
                <div className="flex items-center bg-gray-900 rounded-2xl p-3  gap-3">
                  <FaCodeBranch className="text-blue-500 text-lg sm:text-xl" />
                  <span className="text-sm text-white sm:text-base lg:text-lg">Fork and customize</span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section className="mb-12 sm:mb-16" variants={fadeInUp}>
          <div className="bg-white border border-gray-200 rounded-2xl sm:rounded-2xl shadow-sm overflow-hidden">
            <div className="p-4 sm:p-6 border-b border-gray-100">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <FaEnvelope className="text-blue-600 text-lg sm:text-xl" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Get In Touch</h2>
              </div>
              <p className="text-gray-600 text-base sm:text-lg">
                Always open to connecting with peers, engineers, developers, or anyone curious about tech and cloud
                computing.
              </p>
            </div>
            <div className="p-4 sm:p-6">
              <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
                <motion.div
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-50 border border-gray-100 rounded-2xl"
                  {...scaleOnHover}
                >
                  <div className="p-2 sm:p-3 bg-blue-50 rounded-lg flex-shrink-0">
                    <FaEnvelope className="text-blue-600 text-lg sm:text-xl" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-gray-800 text-sm sm:text-base">Primary Email</p>
                    <p className="text-xs sm:text-sm text-gray-600 font-mono break-all">{personalInfo.email}</p>
                  </div>
                </motion.div>
                <motion.div
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-50 border border-gray-100 rounded-2xl"
                  {...scaleOnHover}
                >
                  <div className="p-2 sm:p-3 bg-purple-50 rounded-lg flex-shrink-0">
                    <FaEnvelope className="text-purple-600 text-lg sm:text-xl" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-gray-800 text-sm sm:text-base">Alternate Email</p>
                    <p className="text-xs sm:text-sm text-gray-600 font-mono break-all">
                      {personalInfo.alternateEmail}
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Tech Stack Section */}
        <motion.section className="mb-12 sm:mb-16" variants={fadeInUp}>
          <div className="bg-white border border-gray-200 rounded-2xl sm:rounded-2xl shadow-sm overflow-hidden">
            <div className="p-4 sm:p-6 border-b border-gray-100">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-green-50 rounded-lg">
                  <FaCode className="text-green-600 text-lg sm:text-xl" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Technical Skills</h2>
              </div>
              <p className="text-gray-600 text-base sm:text-lg">Technologies and tools I work with professionally</p>
            </div>
            <div className="p-4 sm:p-6">
              <div className="space-y-8 sm:space-y-10">
                {techStack.map((category, categoryIndex) => (
                  <div key={categoryIndex}>
                    <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-gray-800 flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                      {category.category}
                    </h3>
                    <div className="overflow-x-auto">
                      <div className="min-w-full">
                        {/* Mobile Card Layout */}
                        <div className="block sm:hidden space-y-3">
                          {category.items.map((tech, techIndex) => (
                            <motion.div
                              key={techIndex}
                              className="bg-gray-50 border border-gray-200 p-4 rounded-lg"
                              {...scaleOnHover}
                            >
                              <div className="flex items-center gap-3 mb-2">
                                <span className="text-xl">{tech.icon}</span>
                                <span className="font-medium text-gray-800">{tech.name}</span>
                              </div>
                            </motion.div>
                          ))}
                        </div>

                        {/* Desktop Table Layout */}
                        <table className="hidden sm:table w-full">
                          <thead>
                            <tr className="border-b border-gray-200">
                              <th className="text-left py-3 sm:py-4 px-3 sm:px-6 font-semibold text-gray-600 text-sm sm:text-base">
                                Technology
                              </th>
                        
                            </tr>
                          </thead>
                          <tbody>
                            {category.items.map((tech, techIndex) => (
                              <motion.tr
                                key={techIndex}
                                className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                                whileHover={{ x: 4 }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                              >
                                <td className="py-3 sm:py-4 px-3 sm:px-6">
                                  <div className="flex items-center gap-3 sm:gap-4">
                                    <span className="text-xl sm:text-2xl">{tech.icon}</span>
                                    <span className="font-medium text-gray-800 text-sm sm:text-lg">{tech.name}</span>
                                  </div>
                                </td>
                              </motion.tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section className="mb-12 sm:mb-16" variants={fadeInUp}>
          <div className="bg-white border border-gray-200 rounded-2xl sm:rounded-2xl shadow-sm overflow-hidden">
            <div className="p-4 sm:p-6 border-b border-gray-100">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-orange-50 rounded-lg">
                  <FaRocket className="text-orange-600 text-lg sm:text-xl" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Featured Projects</h2>
              </div>
              <p className="text-gray-600 text-base sm:text-lg">
                Recent work and contributions showcasing my technical expertise
              </p>
            </div>
            <div className="p-4 sm:p-6">
              <div className="space-y-8 sm:space-y-10">
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    className="border border-gray-200 bg-white rounded-2xl p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-all"
                    {...scaleOnHover}
                  >
                    <div className="flex flex-col gap-4 sm:gap-6 mb-4 sm:mb-6">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3">
                          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800">{project.title}</h3>
                          {project.featured && (
                            <span className="inline-block px-2 sm:px-3 py-1 text-xs font-medium text-white bg-gradient-to-r from-blue-900 to-purple-900 rounded-full">
                              Featured
                            </span>
                          )}
                          <span className="inline-block px-2 sm:px-3 py-1 text-xs font-semibold bg-yellow-500 text-black border-3 border-black rounded-full">
                            {project.status}
                          </span>
                        </div>
                        <p className="text-gray-900 text-sm sm:text-base lg:text-lg leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2 sm:gap-3">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-gray-900 border border-gray-300 rounded-2xl text-gray-100 font-medium shadow-sm hover:bg-gray-800 hover:border-blue-300 transition-all text-xs sm:text-sm"
                        >
                          <FaLink className="w-3 h-3 sm:w-4 sm:h-4" />
                          {project.isPerformanceProject ? "Check Score" : "Check Live Demo"}
                        </a>
                        {project.repoUrl && (
                          <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-gray-900 border border-gray-300 rounded-2xl text-gray-100 font-medium shadow-sm hover:bg-gray-800 hover:border-gray-400 transition-all text-xs sm:text-sm"
                          >
                            <FaGithub className="w-3 h-3 sm:w-4 sm:h-4" />
                            Source Code
                          </a>
                        )}
                      </div>
                    </div>

                    {project.isPerformanceProject ? (
                      <div className="space-y-6 sm:space-y-8">
                        <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">Performance Metrics</h4>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
                          {project.performanceScores?.map((score, idx) => (
                            <div
                              key={idx}
                              className="bg-blue-100 border-3 border-gray-900 p-2 sm:p-4 lg:p-6 rounded-3xl text-center shadow-lg shadow-green-200"
                            >
                              <div className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 ${score.color}`}>
                                {score.score}
                              </div>
                              <p className="text-gray-800 font-medium mb-1 sm:mb-2 text-xs sm:text-sm lg:text-base">
                                {score.label}
                              </p>
                              <p className="text-sm text-gray-900">{score.description}</p>
                            </div>
                          ))}
                        </div>
                        <div className="flex flex-wrap gap-3 sm:gap-6 text-xs sm:text-sm">
                          <p className="text-gray-500 mb-4 w-full">
                            Performance scores are calculated using Google Lighthouse and may vary based on network
                            conditions.
                          </p>
                          {project.scoreRanges?.map((range, idx) => (
                            <div key={idx} className="flex items-center gap-2 sm:gap-3">
                              <div className={`w-3 h-3 sm:w-4 sm:h-4 ${range.color} rounded`}></div>
                              <span className="text-gray-600">
                                {range.range} - {range.label}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-6 sm:space-y-8">
                        {project.challenges && project.challenges.length > 0 && (
                          <div>
                            <h4 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
                              <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                              Challenges Faced
                            </h4>
                            <ul className="space-y-3 sm:space-y-4 text-gray-900">
                              {project.challenges.map((challenge, idx) => (
                                <li
                                  key={idx}
                                  className="flex gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-50 rounded-lg border border-gray-100"
                                >
                                  <span className="text-blue-900 mt-1 text-base sm:text-lg flex-shrink-0">•</span>
                                  <span className="leading-relaxed text-sm sm:text-base">{challenge}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {project.learnings && project.learnings.length > 0 && (
                          <div>
                            <h4 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                              Key Learnings
                            </h4>
                            <ul className="space-y-3 sm:space-y-4 text-gray-900">
                              {project.learnings.map((learning, idx) => (
                                <li
                                  key={idx}
                                  className="flex gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-50 rounded-lg border border-gray-100"
                                >
                                  <span className="text-green-600 mt-1 text-base sm:text-lg flex-shrink-0">•</span>
                                  <span className="leading-relaxed text-sm sm:text-base">{learning}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {(project.keyFeatures || project.technicalDetails) && (
                          <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
                            {project.keyFeatures && project.keyFeatures.length > 0 && (
                              <div>
                                <h4 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
                                  <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                                  Key Features
                                </h4>
                                <ul className="space-y-3 text-gray-900">
                                  {project.keyFeatures.map((feature, idx) => (
                                    <li
                                      key={idx}
                                      className="flex gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100"
                                    >
                                      <span className="text-blue-600 mt-1 flex-shrink-0">•</span>
                                      <span className="leading-relaxed text-sm sm:text-base">{feature}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            {project.technicalDetails && project.technicalDetails.length > 0 && (
                              <div>
                                <h4 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
                                  <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></div>
                                  Technical Implementation
                                </h4>
                                <ul className="space-y-3 text-gray-900">
                                  {project.technicalDetails.map((detail, idx) => (
                                    <li
                                      key={idx}
                                      className="flex gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100"
                                    >
                                      <span className="text-purple-600 mt-1 flex-shrink-0">•</span>
                                      <span className="leading-relaxed text-sm sm:text-base">{detail}</span>
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
                      <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200">
                        <h4 className="font-semibold mb-3 sm:mb-4 text-gray-800 text-sm sm:text-base">
                          Technology Stack:
                        </h4>
                        <div className="flex flex-wrap gap-2 sm:gap-3">
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="inline-block px-2 sm:px-3 py-1 text-xs sm:text-sm text-white bg-blue-900 font-semibold border-3 border-black rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Certifications Section */}
        <motion.section className="mb-12 sm:mb-16" variants={fadeInUp}>
          <div className="bg-white border border-gray-200 rounded-2xl sm:rounded-2xl shadow-sm overflow-hidden">
            <div className="p-4 sm:p-6 border-b border-gray-100">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-yellow-50 rounded-lg">
                  <FaCertificate className="text-yellow-600 text-lg sm:text-xl" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Certifications & Learning Journey</h2>
              </div>
              <p className="text-gray-600 text-base sm:text-lg">
                AWS certifications and continuous professional development
              </p>
            </div>
            <div className="p-4 sm:p-6">
              <div className="mb-6 sm:mb-8 p-4 sm:p-6 bg-gradient-to-r from-blue-50 to-purple-50 border-3 border-black rounded-3xl">
                <h3 className="font-bold text-blue-700 mb-3 text-base sm:text-lg">🎯 AWS Certification Journey</h3>
                <p className="text-black leading-relaxed text-sm sm:text-base">
                  Recently scored 679/1000 on AWS Cloud Practitioner (CLF-C02) On January 24 2025. While just shy of passing, this
                  experience has strengthened my resolve to master cloud fundamentals and accelerated my preparation for
                  Solutions Architect Associate by Q3 2025.
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 sm:p-6 border border-gray-200 bg-white rounded-2xl shadow-sm"
                    {...scaleOnHover}
                  >
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                        <h3 className="font-bold text-gray-800 text-base sm:text-lg">{cert.title}</h3>
                        <span
                          className={`inline-block px-2 sm:px-3 py-1 text-xs font-medium rounded-full ${
                            cert.status === "Completed" ? "bg-yellow-500 text-black border-3 border-black " : "bg-blue-500 border-black border-3 text-black"
                          }`}
                        >
                          {cert.status}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-2 text-sm sm:text-base">{cert.description}</p>
                      <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-500">
                        <span>Issued by: {cert.issuer}</span>
                        <span className="hidden sm:inline">•</span>
                        <span>
                          {cert.status === "Completed"
                            ? `Completed: ${cert.completedDate}`
                            : `Expected: ${cert.expectedDate}`}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      {cert.status === "Completed" && (
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-gray-900 border border-gray-300 rounded-2xl text-gray-100 font-medium shadow-sm hover:bg-blue-900 hover:border-blue-300 transition-all text-xs sm:text-sm"
                        >
                          <FaExternalLinkAlt className="w-3 h-3" />
                          View Certificate
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section className="mb-12 sm:mb-16" variants={fadeInUp}>
          <div className="bg-white border border-gray-200 rounded-2xl sm:rounded-2xl shadow-sm overflow-hidden">
            <div className="p-4 sm:p-6 border-b border-gray-100">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-purple-50 rounded-lg">
                  <FaGraduationCap className="text-purple-600 text-lg sm:text-xl" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Education</h2>
              </div>
              <p className="text-gray-600 text-base sm:text-lg">Academic background and qualifications</p>
            </div>
            <div className="p-4 sm:p-6">
              <div className="space-y-6 sm:space-y-8">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    className="border-l-4 border-blue-500 pl-4 sm:pl-6 lg:pl-8 pb-6 sm:pb-8 relative"
                    {...scaleOnHover}
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                    <div className="flex flex-col gap-3 sm:gap-4 mb-4">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4">
                        <div className="flex-1">
                          <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">{edu.degree}</h3>
                          <p className="text-gray-700 font-semibold text-base sm:text-lg">{edu.field}</p>
                        </div>
                        <span
                          className={`inline-block px-2 sm:px-3 py-1 text-xs font-medium rounded-full self-start ${
                            edu.status === "Completed" ? "bg-yellow-500 text-black border-black border-3 font-semibold" : "bg-blue-500 font-semibold text-black border-3 border-black"
                          }`}
                        >
                          {edu.status}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-900 font-medium mb-2 text-sm sm:text-base">{edu.institution}</p>
                    <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-gray-500 text-xs sm:text-sm">
                      <div className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-blue-600 flex-shrink-0" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaCalendarAlt className="text-blue-600 flex-shrink-0" />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
        
        {/* Footer */}
        <motion.footer className="text-center py-8 sm:py-12" variants={fadeInUp}>
          <div className="max-w-2xl mx-auto px-4">
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6">
              Want to explore my thinking process and learning journey? Check out my comprehensive{" "}
              <a
                href="/my-personal-learning-resources"
                className="text-blue-600 hover:text-blue-700 font-semibold underline decoration-blue-200 underline-offset-4 transition-colors"
              >
                Learning Resources
              </a>{" "}
              page where I document insights, challenges, and solutions.
            </p>
            <div className="flex items-center justify-center gap-2 text-gray-500 text-sm sm:text-base">
              <span>Built with</span>
              <FaHeart className="text-red-500" />
              <span>and lots of ☕</span>
            </div>
          </div>
        </motion.footer>
      </div>
    </div>
  )
}
