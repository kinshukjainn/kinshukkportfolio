"use client"

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
        { name: "AWS Cloud", icon: <FaAws className="text-black" />, level: "Intermediate", years: "2+" },
        { name: "Route 53", icon: <FaAws className="text-black" />, level: "Beginner", years: "1+" },
        { name: "AWS Amplify", icon: <FaAws className="text-black" />, level: "Beginner", years: "1+" },
      ],
    },
    {
      category: "Frontend Development",
      items: [
        { name: "React", icon: <FaReact className="text-black" />, level: "Intermediate", years: "2+" },
        { name: "TypeScript", icon: <FaCode className="text-black" />, level: "Intermediate", years: "1+" },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-black" />, level: "Advanced", years: "2+" },
      ],
    },
    {
      category: "Backend & DevOps",
      items: [
        { name: "Python/Boto3", icon: <FaPython className="text-black" /> },
        { name: "Docker", icon: <FaDocker className="text-black" /> },
        { name: "Kubernetes", icon: <SiKubernetes className="text-black" /> },
        { name: "Terraform", icon: <SiTerraform className="text-black" /> },
      ],
    },
    {
      category: "Tools & Platforms",
      items: [
        { name: "Git/GitHub", icon: <FaGithub className="text-black" />, level: "Advanced", years: "3+" },
        { name: "Linux", icon: <FaLinux className="text-black" />, level: "Intermediate", years: "2+" },
        { name: "Discord", icon: <FaDiscord className="text-black" />, level: "Advanced", years: "3+" },
        { name: "Canva", icon: <SiCanva className="text-black" />, level: "Advanced", years: "2+" },
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
    <div className="min-h-screen bg-white text-gray-900 font-poppins antialiased">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Header */}
        <header className="text-center mb-16 sm:mb-20 lg:mb-24">
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none mb-6">
              {personalInfo.name}
            </h1>

            <div className="space-y-3 mb-8">
              <p className="text-xl sm:text-2xl lg:text-3xl font-semibold font-black">{personalInfo.title}</p>
              <p className="text-lg sm:text-xl text-gray-900 font-medium">{personalInfo.subtitle}</p>
              <p className="text-base sm:text-lg text-green-900 font-semibold">{personalInfo.availability}</p>
            </div>

            <div className="flex items-center justify-center gap-2 text-gray-500 mb-8">
              <FaMapMarkerAlt className="text-black" />
              <span className="text-sm sm:text-base">{personalInfo.location}</span>
            </div>

            <div className="mb-8">
              <code className="text-base sm:text-lg font-mono bg-gray-100 px-4 py-2 rounded text-black font-bold">
                {personalInfo.currentlyExploring}
              </code>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-black hover:text-blue-600 transition-colors duration-200 text-sm sm:text-base font-medium underline decoration-gray-300 hover:decoration-blue-500 p-3  underline-offset-4"
              >
                <span className="text-lg">{social.icon}</span>
                <span className="hidden sm:inline">{social.username}</span>
                <span className="sm:hidden">{social.label}</span>
              </a>
            ))}
            <button
              onClick={handleWhatsAppClick}
              className="inline-flex items-center gap-2 text-black hover:text-green-600 transition-colors duration-200 text-sm sm:text-base font-medium underline decoration-gray-300 hover:decoration-green-500 underline-offset-4"
            >
              <FaWhatsapp className="text-lg" />
              <span>WhatsApp</span>
            </button>
          </div>
        </header>

        {/* Open Source Section */}
        <section className="mb-16 sm:mb-20">
          <div className="pl-6 mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2 flex items-center gap-3">
              <FaLockOpen className="text-black" />
              Open Source Contributions
            </h2>
            <p className="text-lg text-black font-medium">
              Fork it. Star it. Make it your own — if it serves your purpose.
            </p>
          </div>

          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-black leading-relaxed">
              This portfolio project is open-source and available to fork. If the design or structure helped accelerate
              your workflow or served as a useful starting point, feel free to build on it. Giving the repo a star is
              appreciated, but entirely optional. Feedback, contributions, and practical enhancements are always
              welcome.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="https://github.com/kinshukjainn/kinshukkportfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-900 hover:text-blue-600 transition-colors duration-200 font-semibold underline decoration-gray-400 hover:decoration-blue-500 underline-offset-4"
            >
              <FaGithub className="text-xl" />
              Portfolio Repository
            </a>
            <a
              href="https://github.com/kinshukjainn/encrypted-password-project"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-900 hover:text-blue-600 transition-colors duration-200 font-semibold underline decoration-gray-400 hover:decoration-blue-500 underline-offset-4"
            >
              <FaGithub className="text-xl" />
              PassGentoo Repository
            </a>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-black">
              <div className="flex items-center gap-2">
                <FaStar className="text-yellow-500 text-xl" />
                <span className="font-medium">Star to show appreciation</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCodeBranch className="text-black text-xl" />
                <span className="font-medium">Fork and customize</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-16 sm:mb-20">
          <div className="border-l-4 border-blue-500 pl-6 mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2 flex items-center gap-3">
              <FaEnvelope className="text-black" />
              Get In Touch
            </h2>
            <p className="text-lg text-black font-medium">
              Always open to connecting with peers, engineers, developers, or anyone curious about tech and cloud
              computing.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-black text-xl flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-900">Primary Email</p>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-blue-600 hover:text-black font-mono text-sm sm:text-base underline decoration-blue-300 hover:decoration-blue-500 underline-offset-2"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-purple-500 text-xl flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-900">Alternate Email</p>
                <a
                  href={`mailto:${personalInfo.alternateEmail}`}
                  className="text-purple-600 hover:text-purple-700 font-mono text-sm sm:text-base underline decoration-purple-300 hover:decoration-purple-500 underline-offset-2"
                >
                  {personalInfo.alternateEmail}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="mb-16 sm:mb-20">
          <div className=" pl-6 mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2 flex items-center gap-3">
              <FaCode className="text-black" />
              Technical Skills
            </h2>
            <p className="text-lg text-black font-medium">Technologies and tools I work with </p>
          </div>

          <div className="space-y-12">
            {techStack.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-xl sm:text-2xl font-bold text-black mb-6  pb-2">
                  {category.category}
                </h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {category.items.map((tech, techIndex) => (
                    <div key={techIndex} className="flex items-center gap-3 group">
                      <span className="text-2xl group-hover:scale-110 transition-transform duration-200">
                        {tech.icon}
                      </span>
                      <span className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-200">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-16 sm:mb-20">
          <div className="pl-6 mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2 flex items-center gap-3">
              <FaRocket className="text-black" />
              Featured Projects
            </h2>
            <p className="text-lg text-black font-medium">
              Recent work and contributions showcasing my technical expertise
            </p>
          </div>

          <div className="space-y-16">
            {projects.map((project, index) => (
              <article key={index} className="border-b border-gray-200 pb-12 last:border-b-0">
                <header className="mb-6">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="text-xl sm:text-2xl font-black text-gray-900">{project.title}</h3>
                    {project.featured && (
                      <span className="text-xs font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full">
                        FEATURED
                      </span>
                    )}
                    <span className="text-xs font-bold bg-yellow-400 text-black px-3 py-1 rounded-full">
                      {project.status}
                    </span>
                  </div>

                  <p className="text-black text-lg leading-relaxed mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-black font-semibold underline decoration-blue-300 hover:decoration-blue-500 underline-offset-4 transition-colors duration-200"
                    >
                      <FaLink />
                      {project.isPerformanceProject ? "Check Score" : "Live Demo"}
                    </a>
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-black hover:text-gray-900 font-semibold underline decoration-gray-400 hover:decoration-gray-600 underline-offset-4 transition-colors duration-200"
                      >
                        <FaGithub />
                        Source Code
                      </a>
                    )}
                  </div>
                </header>

                {project.isPerformanceProject ? (
                  <div className="space-y-8">
                    <h4 className="text-lg font-bold text-gray-800 border-b border-gray-200 pb-2">
                      Performance Metrics
                    </h4>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                      {project.performanceScores?.map((score, idx) => (
                        <div key={idx} className="text-center">
                          <div className={`text-4xl font-black mb-2 ${score.color}`}>{score.score}</div>
                          <p className="font-semibold text-gray-800 mb-1">{score.label}</p>
                          <p className="text-sm text-black">{score.description}</p>
                        </div>
                      ))}
                    </div>
                    <div className="text-sm text-gray-500 space-y-2">
                      <p>
                        Performance scores are calculated using Google Lighthouse and may vary based on network
                        conditions.
                      </p>
                      <div className="flex flex-wrap gap-4">
                        {project.scoreRanges?.map((range, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className={`w-3 h-3 ${range.color} rounded`}></div>
                            <span>
                              {range.range} - {range.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-8">
                    {project.challenges && project.challenges.length > 0 && (
                      <div>
                        <h4 className="text-lg font-bold text-gray-800 mb-4 border-b border-red-200 pb-2">
                          Challenges Faced
                        </h4>
                        <ul className="space-y-3">
                          {project.challenges.map((challenge, idx) => (
                            <li key={idx} className="flex gap-3">
                              <span className="text-red-500 font-bold mt-1 flex-shrink-0">•</span>
                              <span className="text-black leading-relaxed">{challenge}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {project.learnings && project.learnings.length > 0 && (
                      <div>
                        <h4 className="text-lg font-bold text-gray-800 mb-4 border-b border-green-200 pb-2">
                          Key Learnings
                        </h4>
                        <ul className="space-y-3">
                          {project.learnings.map((learning, idx) => (
                            <li key={idx} className="flex gap-3">
                              <span className="text-green-500 font-bold mt-1 flex-shrink-0">•</span>
                              <span className="text-black leading-relaxed">{learning}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {(project.keyFeatures || project.technicalDetails) && (
                      <div className="grid gap-8 lg:grid-cols-2">
                        {project.keyFeatures && project.keyFeatures.length > 0 && (
                          <div>
                            <h4 className="text-lg font-bold text-gray-800 mb-4 border-b border-blue-200 pb-2">
                              Key Features
                            </h4>
                            <ul className="space-y-3">
                              {project.keyFeatures.map((feature, idx) => (
                                <li key={idx} className="flex gap-3">
                                  <span className="text-black font-bold mt-1 flex-shrink-0">•</span>
                                  <span className="text-black leading-relaxed">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {project.technicalDetails && project.technicalDetails.length > 0 && (
                          <div>
                            <h4 className="text-lg font-bold text-gray-800 mb-4 border-b border-purple-200 pb-2">
                              Technical Implementation
                            </h4>
                            <ul className="space-y-3">
                              {project.technicalDetails.map((detail, idx) => (
                                <li key={idx} className="flex gap-3">
                                  <span className="text-purple-500 font-bold mt-1 flex-shrink-0">•</span>
                                  <span className="text-black leading-relaxed">{detail}</span>
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
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h4 className="font-bold mb-3 text-gray-800">Technology Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs font-semibold bg-blue-100 text-blue-800 px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section className="mb-16 sm:mb-20">
          <div className="border-l-4 border-yellow-500 pl-6 mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2 flex items-center gap-3">
              <FaCertificate className="text-black" />
              Certifications & Learning Journey
            </h2>
            <p className="text-lg text-black font-medium">
              AWS certifications and continuous professional development
            </p>
          </div>

          <div className="mb-8 p-6 ">
            <h3 className="font-bold text-black mb-3 text-lg">🎯 AWS Certification Journey</h3>
            <p className="text-gray-800 leading-relaxed">
              Recently scored 679/1000 on AWS Cloud Practitioner (CLF-C02) On January 24 2025. While just shy of
              passing, this experience has strengthened my resolve to master cloud fundamentals and accelerated my
              preparation for Solutions Architect Associate by Q3 2025.
            </p>
          </div>

          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="font-bold text-gray-800 text-lg">{cert.title}</h3>
                      <span
                        className={`text-xs font-bold px-3 py-1 rounded-full ${
                          cert.status === "Completed" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {cert.status}
                      </span>
                    </div>
                    <p className="text-black mb-2">{cert.description}</p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
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
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-black font-semibold underline decoration-blue-300 hover:decoration-blue-500 underline-offset-4 transition-colors duration-200"
                    >
                      <FaExternalLinkAlt />
                      View Certificate
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-16 sm:mb-20">
          <div className=" pl-6 mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2 flex items-center gap-3">
              <FaGraduationCap className="text-black" />
              Education
            </h2>
            <p className="text-lg text-black font-medium">Academic background and qualifications</p>
          </div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className=" pl-6 relative">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{edu.degree}</h3>
                    <p className="text-black font-semibold text-lg">{edu.field}</p>
                  </div>
                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-full self-start ${
                      edu.status === "Completed" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {edu.status}
                  </span>
                </div>
                <p className="text-gray-800 font-medium mb-2">{edu.institution}</p>
                <div className="flex flex-wrap items-center gap-4 text-gray-500 text-sm">
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-black" />
                    <span>{edu.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt className="text-black" />
                    <span>{edu.period}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-12 border-t border-gray-200">
          <div className="max-w-2xl mx-auto">
            <p className="text-black leading-relaxed mb-6">
              Want to explore my thinking process and learning journey? Check out my comprehensive{" "}
              <a
                href="/my-personal-learning-resources"
                className="text-blue-600 hover:text-black font-semibold underline decoration-blue-300 hover:decoration-blue-500 underline-offset-4 transition-colors duration-200"
              >
                Learning Resources
              </a>{" "}
              page where I document insights, challenges, and solutions.
            </p>
            <div className="flex items-center justify-center gap-2 text-gray-500">
              <span>Built with</span>
              <FaHeart className="text-red-500" />
              <span>and lots of ☕</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
