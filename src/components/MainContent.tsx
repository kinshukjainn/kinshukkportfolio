"use client"
import React from "react"
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
  FaHashtag,
  FaGit,
} from "react-icons/fa"
import { BiLinkExternal } from "react-icons/bi"
import { SiKubernetes, SiCanva, SiTerraform, SiTailwindcss } from "react-icons/si"
import { TbExternalLink } from "react-icons/tb"
import { HiOutlineExternalLink } from "react-icons/hi"

// Define types for our data structures
type SocialLink = {
  icon: React.ReactNode
  label: string
  url: string
}

type TechItem = {
  icon: React.ReactNode
  name: string
}

type Certification = {
  title: string
  link: string
}

type Education = {
  degree: string
  institution: string
  location: string
  period: string
}

type PerformanceScore = {
  score: number
  label: string
  color: string
}

type ScoreRange = {
  color: string
  range: string
}

type Project = {
  id: string
  title: string
  liveLink?: string
  description: string
  challenges?: string[]
  learnings?: string[]
  keyFeatures?: string[]
  technicalDetails?: string[]
  technologies: string[]
  isPerformanceProject?: boolean
  performanceScores?: PerformanceScore[]
  scoreRanges?: ScoreRange[]
}

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
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
  transition: { type: "spring", stiffness: 400, damping: 17 },
}

export default function Portfolio() {
  // All portfolio data in a single component
  const personalInfo = {
    name: "Kinshuk Jain",
    title: "Cloud Engineer , Open to Collaborate",
    currentlyExploring: "AWS || Blogging || React",
    contactMessage:
      "Hey there! I'm always open to connecting with peers, engineers, developers, or anyone curious about tech, cloud, or simply building cool things together.",
    email: "kinshuk25jan04@gmail.com",
    alternateEmail: "jkinshuk@outlook.com",
    whatsappNumber: "919172702501",
    whatsappMessage: "Hi Kinshuk, I saw your website and wanted to connect.",
    apiEndpoint: "https://your-api-endpoint.com/log-whatsapp-click",
  }

  const socialLinks: SocialLink[] = [
    {
      icon: <FaGithub size={24} />,
      label: "GitHub",
      url: "https://github.com/kinshukjainn",
    },
    {
      icon: <FaLinkedin size={24} />,
      label: "LinkedIn",
      url: "https://linkedin.com/in/kinshukjainn/",
    },
    {
      icon: <FaTwitter size={24} />,
      label: "Twitter",
      url: "https://x.com/realkinshuk04",
    },
    {
      icon: <FaInstagram size={24} />,
      label: "Instagram",
      url: "https://instagram.com/kinshukjain._/",
    },
  ]

  const techStack: TechItem[] = [
    { icon: <FaAws className="text-zinc-400" />, name: "AWS Cloud" },
    { icon: <FaReact className="text-zinc-400" />, name: "React" },
    { icon: <FaPython className="text-zinc-400" />, name: "Python / Boto3" },
    { icon: <SiTailwindcss className="text-zinc-400" />, name: "TailwindCSS" },
    { icon: <FaDocker className="text-zinc-400" />, name: "Docker" },
    { icon: <SiKubernetes className="text-zinc-400" />, name: "Kubernetes" },
    { icon: <SiTerraform className="text-zinc-400" />, name: "Terraform" },
  ]

  const toolsStack: TechItem[] = [
    { icon: <FaDiscord />, name: "Discord" },
    { icon: <SiCanva />, name: "Canva" },
    { icon: <FaGithub />, name: "Github" },
    { icon: <FaLinux />, name: "Linux" },
  ]

  const certifications: Certification[] = [
    {
      title: "AWS Certified Cloud Practitioner (Upcoming)",
      link: "https://github.com/kinshukjainn/",
    },
    {
      title: "AWS Serverless Cloud Badge",
      link: "https://www.credly.com/badges/0bcd1190-2d68-45ff-91d9-32b65aa93ed8/public_url",
    },
    {
      title: "AWS Machine Learning Badge",
      link: "https://www.credly.com/badges/a0042ec2-cc6e-4a99-84de-a1516ee5775a/public_url",
    },
  ]

  const awsJourney = {
    title: "My AWS Certification Journey",
    description:
      "I recently scored 679/1000 on the AWS Certified Cloud Practitioner exam (CLF-C02). While just shy of passing, this experience has strengthened my resolve to master cloud fundamentals and accelerated my preparation for the more advanced Solutions Architect Associate certification by Q3 2025.",
  }

  const educationHistory: Education[] = [
    {
      degree: "Bachelor of Technology, Electrical Engineering",
      institution: "JSS Academy of Technical Education",
      location: "Noida, Uttar Pradesh",
      period: "2022 - 2026",
    },
    {
      degree: "Higher Secondary Education (XII)",
      institution: "Sri Chaitnya Junior College",
      location: "Pune, Maharashtra, India",
      period: "2020 - 2022",
    },
  ]

  // ===== PROJECTS SECTION =====
  // To add a new project, simply add a new object to this array
  // To remove a project, delete its object from this array
  // To edit a project, modify its properties directly
  const projects: Project[] = [
    {
      id: "portfolio",
      title: "Portfolio Website",
      liveLink: "https://cloudkinshuk.in",
      description:
        "Built and deployed a personal portfolio website using React 19, TypeScript, Tailwind CSS with live blog integration and full cloud-backed deployment.",
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
      technologies: ["React 19", "TypeScript", "Tailwind CSS", "AWS Amplify", "Route 53", "Hostinger"],
    },
    {
      id: "seo",
      title: "SEO of my website",
      liveLink: "https://pagespeed.web.dev/",
      description:
        "Built and deployed a personal portfolio website using React 19, TypeScript, Tailwind CSS with live blog integration link and full cloud-backed deployment.",
      isPerformanceProject: true,
      performanceScores: [
        {
          score: 97,
          label: "Desktop Performance",
          color: "text-emerald-400",
        },
        {
          score: 71,
          label: "Mobile Performance",
          color: "text-amber-400",
        },
        {
          score: 89,
          label: "Accessibility",
          color: "text-amber-400",
        },
        {
          score: 100,
          label: "SEO Score",
          color: "text-emerald-400",
        },
      ],
      scoreRanges: [
        { color: "bg-red-500", range: "0-49" },
        { color: "bg-amber-500", range: "50-89" },
        { color: "bg-emerald-500", range: "90-100" },
      ],
      technologies: [],
    },
    {
      id: "blog",
      title: "Blog Page: Custom Domain || Hashnode",
      liveLink: "https://blog.cloudkinshuk.in",
      description:
        "Created and deployed a fully functional tech blog using Hashnode as the content platform, with custom domain integration and DNS configuration.",
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
      technologies: ["Hashnode", "Amazon Route 53", "Hostinger", "DNS Management", "Custom Domain", "CDN"],
    },
    {
      id: "passgentoo",
      title: "PassGentoo: Your Open Source Password Generator",
      liveLink: "https://passgentoo.cloudkinshuk.in",
      description:
        "Built a secure, customizable password generator using React, TypeScript, and Tailwind CSS, with cryptographic randomness powered by the Web Crypto API. Designed to generate high-entropy passwords resistant to brute-force attacks, the app emphasizes client-side security, modern architecture, and usability. Deployed on a custom domain with full DNS configuration and HTTPS support.",
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
    },
  ]

  const openSourceInfo = {
    message: "Fork it. Star it. Make it your own — if it serves your purpose.",
    description:
      "This portfolio project is open-source and available for forking. If the design or structure proved useful in your work, you're free to adapt or extend it as needed. A star is appreciated if it saved you time or provided a solid foundation — but not required. Feedback, contributions, and practical improvements are welcome. Keep it efficient. Keep it clean.",
    repoUrl: "https://github.com/kinshukjain01/kinshukkportfolio",
  }

  const footerInfo = {
    message: 'Want to explore my Thinking? click on "Learning journey" to Check out the Learning Journey Page',
    learningJourneyUrl: "/my-personal-learning-resources",
  }

  // WhatsApp click handler
  const handleWhatsAppClick = async () => {
    const phoneNumber = personalInfo.whatsappNumber
    const message = personalInfo.whatsappMessage
    const encodedMessage = encodeURIComponent(message)
    const waUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    try {
      // Optional: API call to your server or webhook
      await fetch(personalInfo.apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          contactType: "WhatsApp",
        }),
      })

      // Redirect to WhatsApp link
      window.open(waUrl, "_blank")
    } catch (error) {
      console.error("Error logging WhatsApp click:", error)
      window.open(waUrl, "_blank") // Still open WhatsApp even if API fails
    }
  }

  return (
    <div className="bg-zinc-950 text-zinc-300 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero section */}
        <motion.header
          className="py-16 lg:py-24 border-b border-zinc-900"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <div className="space-y-8">
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-7xl font-extralight text-zinc-100 leading-tight tracking-tight"
              variants={fadeInUp}
            >
              Aspiring <span className="text-zinc-50 font-light">{personalInfo.title}</span>
            </motion.h1>
            <motion.div
              className="inline-block bg-zinc-900/50 border border-zinc-800 px-6 py-3 rounded-xl backdrop-blur-sm"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <p className="text-xl text-zinc-300 font-mono tracking-wide">{personalInfo.currentlyExploring}</p>
            </motion.div>
          </div>
        </motion.header>

        {/* Contact section */}
        <motion.section
          id="contact"
          className="py-16 lg:py-24 border-b border-zinc-900"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.h2
            className="text-3xl sm:text-4xl font-extralight mb-12 flex items-center text-zinc-100"
            variants={fadeInUp}
          >
            <FaHashtag className="mr-4 text-zinc-500" />
            Open to Collaborate / Work
          </motion.h2>

          <div className="space-y-12">
            <motion.p className="text-zinc-300 text-xl leading-relaxed max-w-5xl" variants={fadeInUp}>
              {personalInfo.contactMessage}
            </motion.p>

            <motion.div
              className="bg-zinc-900/30 border border-zinc-800 p-8 rounded-2xl backdrop-blur-sm"
              variants={fadeInUp}
              {...scaleOnHover}
            >
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <span className="text-zinc-500 font-medium min-w-fit text-lg">Email:</span>
                  <span className="text-zinc-200 font-mono break-all text-lg">{personalInfo.email}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <span className="text-zinc-500 font-medium min-w-fit text-lg">Alternate Email:</span>
                  <span className="text-zinc-200 font-mono break-all text-lg">{personalInfo.alternateEmail}</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-zinc-900/30 border border-zinc-800 p-8 rounded-2xl backdrop-blur-sm"
              variants={fadeInUp}
            >
              <motion.div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6" variants={staggerContainer}>
                {socialLinks.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.url}
                    className="flex items-center gap-4 text-zinc-300 hover:text-zinc-100 transition-all duration-300 p-3 rounded-xl hover:bg-zinc-800/50"
                    aria-label={item.label}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.icon}
                    <span className="text-base font-medium">{item.label}</span>
                  </motion.a>
                ))}
                <motion.button
                  onClick={handleWhatsAppClick}
                  className="flex items-center gap-4 text-zinc-300 hover:text-zinc-100 transition-all duration-300 p-3 rounded-xl hover:bg-zinc-800/50"
                  aria-label="WhatsApp"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaWhatsapp size={24} />
                  <span className="text-base font-medium">WhatsApp</span>
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Open Source Section */}
        <motion.section
          className="py-16 lg:py-24 border-b border-zinc-900"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <motion.div className="lg:col-span-2 space-y-8" variants={fadeInUp}>
              <div className="flex items-center gap-4">
                <FaCode className="text-zinc-500 text-2xl" />
                <h3 className="text-3xl font-extralight text-zinc-100">{openSourceInfo.message}</h3>
              </div>

              <p className="text-zinc-300 leading-relaxed text-lg">{openSourceInfo.description}</p>

              <div className="flex flex-wrap gap-6">
                <motion.div className="flex items-center gap-3 text-zinc-400" whileHover={{ scale: 1.05 }}>
                  <FaStar className="text-amber-500" />
                  <span>Star to show love</span>
                </motion.div>
                <motion.div className="flex items-center gap-3 text-zinc-400" whileHover={{ scale: 1.05 }}>
                  <FaCodeBranch className="text-zinc-400" />
                  <span>Fork and remix</span>
                </motion.div>
              </div>
            </motion.div>

            <motion.div className="lg:justify-self-end" variants={fadeInUp}>
              <motion.a
                href={openSourceInfo.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 bg-zinc-900/50 border border-zinc-800 text-zinc-200 px-6 py-4 rounded-xl hover:bg-zinc-800/50 transition-all duration-300 backdrop-blur-sm"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub />
                <span className="font-mono">@kinshukkportfolio</span>
                <HiOutlineExternalLink />
              </motion.a>
            </motion.div>
          </div>
        </motion.section>

        {/* Projects Repository */}
        <motion.section
          className="py-16 lg:py-24 border-b border-zinc-900"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.h2
            className="text-3xl sm:text-4xl font-extralight mb-12 flex items-center text-zinc-100"
            variants={fadeInUp}
          >
            <FaHashtag className="mr-4 text-zinc-500" />
            Projects Repository , for contribution , fork
          </motion.h2>

          <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-6" variants={staggerContainer}>
            <motion.div
              className="flex items-center gap-4 bg-zinc-900/30 border border-zinc-800 px-6 py-4 rounded-xl shadow-lg shadow-black backdrop-blur-sm"
              variants={fadeInUp}
              whileHover={{ scale: 1.02, y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
             <div className="p-3 bg-black rounded-xl">
              <FaGit className=" text-xl text-white" />
              </div>
              <a
                href="https://github.com/kinshukjainn/encrypted-password-project"
                className="text-zinc-200 font-medium hover:text-zinc-100 transition-colors text-lg"
              >
                Passgentoo
              </a>
            </motion.div>
            <motion.div
              className="flex items-center gap-4 bg-zinc-900/30 border border-zinc-800 px-6 py-4 shadow-black shadow-lg rounded-xl backdrop-blur-sm"
              variants={fadeInUp}
              whileHover={{ scale: 1.02, y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div className="p-3 bg-black rounded-xl">
              <FaGit className=" text-xl text-white" />
              </div>
              <a
                href="https://github.com/kinshukjainn/kinshukkportfolio"
                className="text-zinc-200 font-medium hover:text-zinc-100 transition-colors text-lg"
              >
                Portfolio
              </a>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Tech Stack Section */}
        <motion.section
          className="py-16 lg:py-24 border-b border-zinc-900"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.h2
            className="text-3xl sm:text-4xl font-extralight mb-12 flex items-center text-zinc-100"
            variants={fadeInUp}
          >
            <FaHashtag className="mr-4 text-zinc-500" />
            Tech Stack
          </motion.h2>

          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" variants={staggerContainer}>
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-5 bg-zinc-900/30 border border-zinc-800 p-6 rounded-xl backdrop-blur-sm"
                variants={fadeInUp}
                whileHover={{ scale: 1.03, y: -3 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <span className="text-3xl">{tech.icon}</span>
                <span className="text-zinc-200 font-medium text-lg">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Tools Section */}
        <motion.section
          className="py-16 lg:py-24 border-b border-zinc-900"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.h2
            className="text-3xl sm:text-4xl font-extralight mb-12 flex items-center text-zinc-100"
            variants={fadeInUp}
          >
            <FaHashtag className="mr-4 text-zinc-500" />
            Tools
          </motion.h2>

          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" variants={staggerContainer}>
            {toolsStack.map((tech, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-5 bg-zinc-900/30 border border-zinc-800 p-6 rounded-xl backdrop-blur-sm"
                variants={fadeInUp}
                whileHover={{ scale: 1.03, y: -3 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <span className="text-3xl text-zinc-400">{tech.icon}</span>
                <span className="text-zinc-200 font-medium text-lg">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Certifications Section */}
        <motion.section
          className="py-16 lg:py-24 border-b border-zinc-900"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.h2
            className="text-3xl sm:text-4xl font-extralight mb-12 flex items-center text-zinc-100"
            variants={fadeInUp}
          >
            <FaHashtag className="mr-4 text-zinc-500" />
            Cloud Certifications
          </motion.h2>

          {/* AWS Journey Banner */}
          <motion.div
            className="bg-zinc-900/30 border border-zinc-800 p-8 rounded-2xl mb-12 backdrop-blur-sm"
            variants={fadeInUp}
            {...scaleOnHover}
          >
            <h3 className="text-2xl font-extralight mb-6 flex items-center text-zinc-100">
              <FaAws className="mr-4 text-3xl text-zinc-500" />
              {awsJourney.title}
            </h3>
            <p className="text-zinc-300 leading-relaxed text-lg">
              {awsJourney.description.split("strengthened my resolve").map((part, i) =>
                i === 0 ? (
                  <React.Fragment key={i}>
                    {part}
                    <span className="text-zinc-200 font-medium">strengthened my resolve</span>
                  </React.Fragment>
                ) : (
                  part
                ),
              )}
            </p>
          </motion.div>

          <motion.div className="space-y-8" variants={staggerContainer}>
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="bg-zinc-900/30 border border-zinc-800 p-8 rounded-2xl backdrop-blur-sm"
                variants={fadeInUp}
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <FaAws className="text-zinc-500 text-3xl mt-1" />
                  <h3 className="text-xl text-zinc-200 font-medium">{cert.title}</h3>
                </div>
                <motion.a
                  target="_blank"
                  href={cert.link}
                  className="inline-flex items-center gap-3 bg-zinc-950 border border-zinc-700 hover:shadow-white hover:shadow-md text-zinc-200 px-6 py-3 rounded-xl hover:bg-zinc-800 transition-all duration-300"
                  rel="noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Certificate
                  <TbExternalLink />
                </motion.a>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          className="py-16 lg:py-24 border-b border-zinc-900"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.h2
            className="text-3xl sm:text-4xl font-extralight mb-12 flex items-center text-zinc-100"
            variants={fadeInUp}
          >
            <FaHashtag className="mr-4 text-zinc-500" />
            Projects / Work
          </motion.h2>

          <motion.div className="space-y-16" variants={staggerContainer}>
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className="bg-zinc-900/20 border border-zinc-800 p-8 lg:p-12 rounded-3xl backdrop-blur-sm"
                variants={fadeInUp}
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {/* Project Header */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-6 mb-8">
                  <h3 className="text-2xl lg:text-3xl font-extralight text-zinc-100">{project.title}</h3>
                  {project.liveLink && (
                    <motion.a
                      href={project.liveLink}
                      className="inline-flex items-center gap-3 bg-zinc-950 border border-zinc-700 text-zinc-200 px-6 py-3 rounded-xl hover:bg-zinc-800 transition-all duration-300 whitespace-nowrap"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View {project.isPerformanceProject ? "Here" : "Live"}
                      <BiLinkExternal />
                    </motion.a>
                  )}
                </div>

                {/* Project Content */}
                <p className="text-zinc-300 mb-12 leading-relaxed text-lg">{project.description}</p>

                {project.isPerformanceProject ? (
                  <div className="space-y-8">
                    <h4 className="text-xl font-extralight text-zinc-200">Performance Scores</h4>

                    <motion.div className="grid grid-cols-2 lg:grid-cols-4 gap-6" variants={staggerContainer}>
                      {project.performanceScores?.map((item, idx) => (
                        <motion.div
                          key={idx}
                          className="bg-zinc-950 border border-zinc-800 p-6 rounded-2xl text-center backdrop-blur-sm"
                          variants={fadeInUp}
                          whileHover={{ scale: 1.05, y: -3 }}
                        >
                          <div className={`text-4xl font-bold ${item.color} mb-3`}>{item.score}</div>
                          <p className="text-sm text-zinc-500">{item.label}</p>
                        </motion.div>
                      ))}
                    </motion.div>

                    <p className="text-xs text-zinc-500">
                      Values are estimated and may vary. The performance score is calculated directly from these
                      metrics.
                    </p>

                    <div className="flex flex-wrap gap-6 text-sm">
                      {project.scoreRanges?.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className={`w-4 h-4 ${item.color} rounded`}></div>
                          <span className="text-zinc-500">{item.range}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="space-y-12">
                    {project.challenges && project.challenges.length > 0 && (
                      <div>
                        <h4 className="text-xl font-extralight mb-6 text-zinc-200">Challenges:</h4>
                        <ul className="space-y-4 text-zinc-300">
                          {project.challenges.map((challenge, idx) => (
                            <motion.li
                              key={idx}
                              className="flex gap-4"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                            >
                              <li className="text-zinc-600 mt-2">•</li>
                              <li className="leading-relaxed text-lg">{challenge}</li>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {project.learnings && project.learnings.length > 0 && (
                      <div>
                        <h4 className="text-xl font-extralight mb-6 text-zinc-200">Learnings:</h4>
                        <ul className="space-y-4 text-zinc-300">
                          {project.learnings.map((learning, idx) => (
                            <motion.li
                              key={idx}
                              className="flex gap-4"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                            >
                              <li className="text-zinc-600 mt-2">•</li>
                              <li className="leading-relaxed text-lg">{learning}</li>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {(project.keyFeatures || project.technicalDetails) && (
                      <div className="grid lg:grid-cols-2 gap-12">
                        {project.keyFeatures && project.keyFeatures.length > 0 && (
                          <div>
                            <h4 className="text-xl font-extralight mb-6 text-zinc-200">Key Features</h4>
                            <ul className="space-y-4 text-zinc-300">
                              {project.keyFeatures.map((feature, idx) => (
                                <motion.li
                                  key={idx}
                                  className="flex gap-4"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: idx * 0.1 }}
                                >
                                  <li className="text-zinc-600 mt-2">•</li>
                                  <li className="leading-relaxed text-lg">{feature}</li>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {project.technicalDetails && project.technicalDetails.length > 0 && (
                          <div>
                            <h4 className="text-xl font-extralight mb-6 text-zinc-200">Technical Details</h4>
                            <ul className="space-y-4 text-zinc-300">
                              {project.technicalDetails.map((detail, idx) => (
                                <motion.li
                                  key={idx}
                                  className="flex gap-4"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: idx * 0.1 }}
                                >
                                  <li className="text-zinc-600 mt-2">•</li>
                                  <li className="leading-relaxed text-lg">{detail}</li>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}

                {project.technologies && project.technologies.length > 0 && (
                  <div className="mt-12 pt-8 border-t border-zinc-800">
                    <h4 className="text-lg font-extralight text-zinc-200 mb-6">Technologies:</h4>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech, idx) => (
                        <motion.span
                          key={idx}
                          className="bg-zinc-950 shadow-blue-200 shadow-lg border border-zinc-700 px-4 py-2 rounded-xl text-sm text-zinc-300"
                          whileHover={{ scale: 1.05 }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Education Section */}
        <motion.section
          className="py-16 lg:py-24 border-b border-zinc-900"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.h2
            className="text-3xl sm:text-4xl font-extralight mb-12 flex items-center text-zinc-100"
            variants={fadeInUp}
          >
            <FaHashtag className="mr-4 text-zinc-500" />
            Education
          </motion.h2>

          <motion.div className="space-y-8" variants={staggerContainer}>
            {educationHistory.map((edu, index) => (
              <motion.div
                key={index}
                className="bg-zinc-900/30 border border-zinc-800 p-8 rounded-2xl backdrop-blur-sm"
                variants={fadeInUp}
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <h3 className="text-xl font-extralight text-zinc-200 mb-4">{edu.degree}</h3>
                <p className="text-zinc-300 mb-3 text-lg">{edu.institution}</p>
                <p className="text-zinc-500 text-base mb-4">{edu.location}</p>
                <p className="text-zinc-500 font-mono text-base">{edu.period}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Footer */}
        <motion.footer className="py-16 lg:py-24" initial="initial" animate="animate" variants={fadeInUp}>
          <div className="text-center">
            <p className="text-zinc-300 leading-relaxed text-lg">
              {footerInfo.message.split("Learning journey").map((part, i) =>
                i === 0 ? (
                  <React.Fragment key={i}>
                    {part}
                    <motion.a
                      href={footerInfo.learningJourneyUrl}
                      className="text-zinc-200 hover:text-zinc-100 transition-colors font-medium"
                      whileHover={{ scale: 1.05 }}
                    >
                      Learning Journey
                    </motion.a>
                  </React.Fragment>
                ) : (
                  part
                ),
              )}
            </p>
          </div>
        </motion.footer>
      </div>
    </div>
  )
}
