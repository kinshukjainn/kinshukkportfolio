"use client"
import React from "react"

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

export default function Portfolio() {
  // All portfolio data in a single component
  const personalInfo = {
    name: "Kinshuk Jain",
    title: "Cloud Engineer | Tech Enthusiast | Open to Collaborate",
    currentlyExploring: "AWS | Docker | Terraform | Blogging | React | AWS SDK",
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
      icon: <FaGithub size={30} />,
      label: "GitHub",
      url: "https://github.com/kinshukjainn",
    },
    {
      icon: <FaLinkedin size={30} />,
      label: "LinkedIn",
      url: "https://linkedin.com/in/kinshukjainn/",
    },
    {
      icon: <FaTwitter size={30} />,
      label: "Twitter",
      url: "https://x.com/realkinshuk04",
    },
    {
      icon: <FaInstagram size={30} />,
      label: "Instagram",
      url: "https://instagram.com/kinshukjain._/",
    },
  ]

  const techStack: TechItem[] = [
    { icon: <FaAws className="text-gray-900" />, name: "AWS Cloud" },
    { icon: <FaReact className="text-gray-900" />, name: "React" },
    { icon: <FaPython className="text-gray-900" />, name: "Python / Boto3" },
    { icon: <SiTailwindcss className="text-gray-900" />, name: "TailwindCSS" },
    { icon: <FaDocker className="text-gray-900" />, name: "Docker" },
    { icon: <SiKubernetes className="text-gray-900" />, name: "Kubernetes" },
    { icon: <SiTerraform className="text-gray-900" />, name: "Terraform" },
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
          color: "text-green-900",
        },
        {
          score: 71,
          label: "Mobile Performance",
          color: "text-yellow-900",
        },
        {
          score: 89,
          label: "Accessibility",
          color: "text-yellow-900",
        },
        {
          score: 100,
          label: "SEO Score",
          color: "text-green-900",
        },
      ],
      scoreRanges: [
        { color: "bg-red-900", range: "0-49" },
        { color: "bg-yellow-900", range: "50-89" },
        { color: "bg-green-900", range: "90-100" },
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
    "Documented the process, challenges, and technical insights in a blog post and shared it on LinkedIn, GitHub, and resume to enhance my professional brand."
  ],
  keyFeatures: [
    "Generates secure, high-entropy passwords using Web Crypto API and client-side processing",
    "Customizable length and character sets, with options to generate pronounceable passwords",
    "Real-time strength analysis using Shannon entropy and estimated crack time visualization",
    "Excludes visually confusing characters to improve usability and reduce user error",
    "Built with React + TypeScript and styled with Tailwind CSS, optimized with Vite",
    "Deployed on custom domain (passgentoo.cloudkinshuk.in) with DNS and HTTPS via Route 53"
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
    "HTTPS"
  ]
}
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
    <div className="bg-white text-black min-h-screen p-4 md:p-8 max-w-6xl mx-auto">
      {/* Hero section */}
      <header className="py-8 md:py-12 border-b border-gray-800">
        <h1 className="text-4xl font-semibold md:text-4xl mb-4 text-blue-900">
          Aspiring <span className="text-gray-900">{personalInfo.title}</span>
        </h1>
        <p className="text-lg md:text-xl text-black mb-6">Currently exploring: {personalInfo.currentlyExploring}</p>
      </header>

      {/* Contact section */}
      <section id="contact" className="py-8 border-b border-gray-800">
        <h2 className="text-3xl font-bold md:text-3xl mb-6 flex items-center text-black">
          <span className="mr-2 text-black">
            <FaHashtag />
          </span>
          Open to Collaborate / Work
        </h2>

        <div className="mb-6">
          <p className="text-black mb-4">{personalInfo.contactMessage}</p>

          <div className="space-y-2 mb-6">
            <p>
              <span className="text-gray-800 font-bold">Email: </span>
              <span className="underline text-blue-900">{personalInfo.email}</span>
            </p>
            <p>
              <span className="text-gray-800 font-bold">Alternate Email: </span>
              <span className="underline text-blue-900">{personalInfo.alternateEmail}</span>
            </p>
          </div>

          <div className="flex flex-wrap gap-4 py-4 border-t border-gray-800">
            {socialLinks.map((item, index) => (
              <a
                key={index}
                href={item.url}
                className="flex items-center gap-2 text-gray-900 hover:text-blue-900 transition-colors"
                aria-label={item.label}
              >
                {item.icon}
                <span>{item.label}</span>
              </a>
            ))}
            <button
              onClick={handleWhatsAppClick}
              className="flex items-center gap-2 text-gray-900 hover:text-blue-900 transition-colors cursor-pointer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={30} />
              <span>WhatsApp</span>
            </button>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-8 border-b border-gray-800">
        <h2 className="text-3xl font-bold md:text-3xl mb-6 flex items-center text-black">
          <span className="mr-2 text-gray-900">
            <FaHashtag />
          </span>
          Tech Stack
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1">
          {techStack.map((tech, index) => (
            <div key={index} className="flex items-center gap-3 p-2">
              <span className="text-3xl">{tech.icon}</span>
              <span className="text-lg text-gray-900">{tech.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="py-8 border-b border-gray-800">
        <h2 className="text-3xl md:text-3xl mb-6 flex items-center font-bold text-black">
          <span className="mr-2 text-gray-900">
            <FaHashtag />
          </span>
          Tools
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1">
          {toolsStack.map((tech, index) => (
            <div key={index} className="flex items-center gap-2 p-2">
              <span className="text-3xl text-black">{tech.icon}</span>
              <span className="text-lg text-gray-900">{tech.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-8 border-b border-gray-800">
        <h2 className="text-3xl font-bold md:text-3xl mb-6 flex items-center text-black">
          <span className="mr-2 text-black">
            <FaHashtag />
          </span>
          Cloud Certifications
        </h2>

        {/* AWS Journey Banner */}
        <div className="mb-8 border-l-4 border-blue-800 pl-4">
          <h3 className="text-xl flex items-center mb-3 text-black font-medium">
            <FaAws className="mr-2 text-2xl" /> {awsJourney.title}
          </h3>
          <p className="text-gray-900 mb-4">
            {awsJourney.description.split("strengthened my resolve").map((part, i) =>
              i === 0 ? (
                <React.Fragment key={i}>
                  {part}
                  <span className="text-blue-900 font-medium">strengthened my resolve</span>
                </React.Fragment>
              ) : (
                part
              ),
            )}
          </p>
        </div>

        <div className="space-y-6">
          {certifications.map((cert, index) => (
            <div key={index} className="border-l-4 border-blue-800 pl-4">
              <div className="flex items-start">
                <FaAws className="text-black text-2xl mr-2 mt-1" />
                <h3 className="text-lg text-black font-medium">{cert.title}</h3>
              </div>
              <a
                href={cert.link}
                className="inline-flex items-center mt-2 text-white bg-blue-700 p-1 px-2 border-black border-2 rounded-full hover:text-blue-100 transition-colors"
              >
                Verify through Credly
                <TbExternalLink className="ml-1" />
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="py-8 border-b border-gray-800">
        <h2 className="text-3xl font-bold md:text-3xl mb-6 flex items-center text-black">
          <span className="mr-2 text-gray-900">
            <FaHashtag />
          </span>
          Education
        </h2>

        <div className="space-y-8">
          {educationHistory.map((edu, index) => (
            <div key={index} className="border-l-4 border-blue-800 pl-4">
              <div>
                <h3 className="text-xl text-black font-medium">{edu.degree}</h3>
                <p className="text-gray-900 mt-2">{edu.institution}</p>
                <p className="text-gray-800 text-sm">{edu.location}</p>
                <p className="mt-2 text-gray-800 font-mono">{edu.period}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-8 border-b border-gray-900">
        <h2 className="text-3xl font-bold md:text-3xl mb-6 flex items-center text-black">
          <span className="mr-2 text-gray-900">
            <FaHashtag />
          </span>
          Projects / Work
        </h2>

        {/* Projects List */}
        {projects.map((project) => (
          <div key={project.id} className="mb-12 border-l-4 border-blue-800 pl-4">
            {/* Project Header */}
            <div className="flex flex-wrap justify-between items-start mb-4 gap-4">
              <h3 className="text-2xl font-medium text-blue-900">{project.title}</h3>
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  className="inline-flex items-center text-white bg-blue-700 p-1 px-2 border-black border-2 rounded-full hover:text-blue-100 transition-colors"
                >
                  View {project.isPerformanceProject ? "Here" : "Live"} <BiLinkExternal className="ml-1" />
                </a>
              )}
            </div>

            {/* Project Content */}
            <p className="text-gray-900 mb-6">{project.description}</p>

            {project.isPerformanceProject ? (
              <div className="mb-6">
                <h4 className="text-xl font-medium text-blue-900 mb-4">Performance Scores</h4>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  {project.performanceScores?.map((item, idx) => (
                    <div key={idx} className="p-3 border-2 border-gray-900">
                      <div className={`text-2xl font-bold ${item.color}`}>{item.score}</div>
                      <p className="text-sm text-gray-900 mt-1">{item.label}</p>
                    </div>
                  ))}
                </div>

                <p className="text-xs text-yellow-900 mb-2">
                  Values are estimated and may vary. The performance score is calculated directly from these metrics.
                </p>

                <div className="flex flex-wrap gap-4 text-xs">
                  {project.scoreRanges?.map((item, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className={`w-3 h-3 ${item.color} mr-1`}></div>
                      <span className="text-gray-900">{item.range}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <>
                {project.challenges && project.challenges.length > 0 && (
                  <>
                    <h3 className="text-xl font-medium mb-2 text-gray-800">Challenges:</h3>
                    <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-900">
                      {project.challenges.map((challenge, idx) => (
                        <li key={idx}>{challenge}</li>
                      ))}
                    </ul>
                  </>
                )}

                {project.learnings && project.learnings.length > 0 && (
                  <>
                    <h3 className="text-xl font-medium mt-6 mb-2 text-grays-900">Learnings:</h3>
                    <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-900">
                      {project.learnings.map((learning, idx) => (
                        <li key={idx}>{learning}</li>
                      ))}
                    </ul>
                  </>
                )}

                {(project.keyFeatures || project.technicalDetails) && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    {project.keyFeatures && project.keyFeatures.length > 0 && (
                      <div>
                        <h4 className="text-lg font-medium mb-2 text-gray-800">Key Features</h4>
                        <ul className="list-disc pl-5 space-y-2 text-gray-900">
                          {project.keyFeatures.map((feature, idx) => (
                            <li key={idx}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {project.technicalDetails && project.technicalDetails.length > 0 && (
                      <div>
                        <h4 className="text-lg font-medium mb-2 text-gray-900">Technical Details</h4>
                        <ul className="list-disc pl-5 space-y-2 text-gray-900">
                          {project.technicalDetails.map((detail, idx) => (
                            <li key={idx}>{detail}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </>
            )}

            {project.technologies && project.technologies.length > 0 && (
              <div className="mt-6 pt-4 border-t border-gray-800">
                <h4 className="text-base font-medium text-gray-900 mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="inline-block text-sm bg-yellow-500 px-3 border-3 border-black py-1 rounded-full text-gray-900"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </section>

      <div className="py-8 border-b border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6">
          {/* Left Content */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <FaCode className="text-black" />
              <h3 className="text-3xl font-medium text-black">{openSourceInfo.message}</h3>
            </div>

            <p className="text-gray-900">{openSourceInfo.description}</p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center text-yellow-900">
                <FaStar className="text-yellow-900 mr-1" />
                <span>Star to show love</span>
              </div>
              <div className="flex items-center text-yellow-900">
                <FaCodeBranch className="text-blue-900 mr-1" />
                <span>Fork and remix</span>
              </div>
            </div>
          </div>

          {/* Right Button */}
          <a
            href={openSourceInfo.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-black bg-blue-400 p-2 rounded-full border-2 border-black font-semibold hover:bg-blue-700 transition-colors"
          >
            <FaGithub />
            <span>@kinshukkportfolio</span>
            <HiOutlineExternalLink />
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 mt-8">
        <div className="text-center">
          <p className="text-gray-900">
            {footerInfo.message.split("Learning journey").map((part, i) =>
              i === 0 ? (
                <React.Fragment key={i}>
                  {part}
                  <a
                    href={footerInfo.learningJourneyUrl}
                    className="text-blue-900 hover:text-blue-800 transition-colors"
                  >
                    Learning Journey
                  </a>
                </React.Fragment>
              ) : (
                part
              ),
            )}
          </p>
        </div>
      </footer>
    </div>
  )
}
