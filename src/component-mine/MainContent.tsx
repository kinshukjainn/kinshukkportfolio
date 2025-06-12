import { useState, useEffect } from "react"
import { 
  FaAws,
  FaDocker,
  FaGithub,
  FaLinux,
  FaReact,
  FaCode,
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
  FaTwitter,
  FaExternalLinkAlt,
  FaCertificate,
  FaMapMarkerAlt,
  FaTerminal,
  FaUser,
  FaBriefcase,
  FaBookOpen,
  FaGoogle
} from "react-icons/fa"
import { SiKubernetes, SiTerraform } from "react-icons/si"

const MainContent = () => {
  const [activeSection, setActiveSection] = useState("about")
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

  const personalInfo = {
    name: "Kinshuk Jain",
    title: "Cloud-Native Solutions Engineer",
    email: "kinshuk25jan04@gmail.com",
    whatsappNumber: "919172702501",
    location: "Ghaziabad, UP, India",
  }

  const socialLinks = [
    { icon: <FaGithub />, label: "GitHub", url: "https://github.com/kinshukjainn" },
    { icon: <FaLinkedin />, label: "LinkedIn", url: "https://linkedin.com/in/kinshukjainn/" },
    { icon: <FaTwitter />, label: "Twitter", url: "https://x.com/realkinshuk04" },
    { icon: <FaInstagram />, label: "Instagram", url: "https://instagram.com/kinshukjain._/" },
  ]

  const techStack = [
    { name: "AWS", icon: <FaAws />  },
    { name: "React", icon: <FaReact />  },
    { name: "Docker", icon: <FaDocker /> },
    { name: "Kubernetes", icon: <SiKubernetes /> },
    { name: "Terraform", icon: <SiTerraform /> },
    { name: "Linux", icon: <FaLinux /> },
    { name: "Git", icon: <FaGithub />},
  ]

  const projects = [
    {
      title: "Tech Blog Platform",
      description: "Custom-domain tech blog using Hashnode for cloud, DevOps, and React insights",
      url: "https://blog.cloudkinshuk.in",
      tech: ["Hashnode", "Route53", "DNS", "CDN"],
      status: "LIVE"
    },
    {
      title: "PassGentool",
      description: "Password generation tool - currently in development phase",
      url: "#",
      tech: ["React", "TypeScript", "Tailwind", "Vite"],
      status: "BUILDING"
    }
  ]

  const certifications = [
    {
      title: "AWS Cloud Practitioner",
      status: "IN_PROGRESS",
      progress: "679/1000 (Recent attempt: Jan 24, 2025)",
      expected: "Q3 2025"
    },
    {
      title: "AWS Serverless Badge",
      status: "COMPLETED",
      url: "https://www.credly.com/badges/0bcd1190-2d68-45ff-91d9-32b65aa93ed8/public_url",
      year: "2024"
    },
    {
      title: "AWS Machine Learning Badge", 
      status: "COMPLETED",
      url: "https://www.credly.com/badges/a0042ec2-cc6e-4a99-84de-a1516ee5775a/public_url",
      year: "2024"
    }
  ]

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi Kinshuk, I saw your portfolio and wanted to connect.")
    window.open(`https://wa.me/${personalInfo.whatsappNumber}?text=${message}`, "_blank")
  }

  const menuItems = [
    { id: "about", label: "About", icon: <FaUser /> },
    { id: "projects", label: "Projects", icon: <FaBriefcase /> },
    { id: "skills", label: "Skills", icon: <FaCode /> },
    { id: "education", label: "Education", icon: <FaBookOpen /> }
  ]

  return (
    <div className="min-h-screen bg-[#101010] select-none text-gray-100 ">
      {/* Terminal Header */}
      <div>
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <div className="flex items-center space-x-3">
              <div className="flex space-x-1">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex items-center space-x-2 text-gray-100 font-meduim  text-lg">
                <FaTerminal />
                <span>kinshuk/profile:~</span>
                <span className="text-green-400">{typedText}</span>
                <span className="animate-pulse">|</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Profile Header */}
        <div className="bg-gray-[#121212]  rounded-lg p-6 mb-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-xl font-meduim shrink-0">
              KJ
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-2xl sm:text-3xl font-meduim text-white mb-1">{personalInfo.name}</h1>
              <p className="text-gray-200 mb-2">{personalInfo.title}</p>
              <div className="flex items-center space-x-1 text-sm text-gray-100 mb-3">
                <FaMapMarkerAlt />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={handleWhatsAppClick}
                  className="px-3 py-2 bg-green-700 cursor-pointer hover:bg-green-800 text-white rounded-xl text-sm transition-colors"
                >
                  <FaWhatsapp className="inline mr-1" />
                  WhatsApp
                </button>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm transition-colors"
                >
                  <FaGoogle className="inline mr-1" />
                  Gmail
                </a>
              </div>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-800">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 px-2 py-1 rounded-lg text-gray-100 hover:underline transition-colors text-lg"
              >
                {social.icon}
                <span className="hidden sm:inline">@{social.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap gap-1 mb-6 bg-[#171717] shadow-lg shadow-black rounded-2xl p-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`flex items-center space-x-2 px-3 py-2 rounded-2xl text-lg transition-colors ${
                activeSection === item.id
                  ? 'bg-blue-800 text-white'
                  : 'text-gray-400 cursor-pointer hover:text-white'
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className=" bg-[#171717] rounded-3xl shadow-lg shadow-black">
          <div className="border-b border-gray-800 px-4 py-3">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span className="text-green-400">$</span>
              <span>cat {activeSection}.md</span>
            </div>
          </div>

          <div className="p-4 sm:p-6">
            {activeSection === "about" && (
              <div className="space-y-4">
                <h2 className="text-3xl p-3 font-meduim text-white mb-4">About Me</h2>
                <p className="text-gray-100 leading-relaxed">
                  I'm a passionate Cloud-Native Solutions Engineer with a strong focus on AWS technologies, 
                  React development, and DevOps practices. Currently pursuing my Bachelor's in Electrical Engineering 
                  while actively learning and building cloud solutions.
                </p>
                <p className="text-gray-100 leading-relaxed">
                  Always open to connecting with fellow developers, engineers, and anyone curious about technology 
                  and cloud computing. Let's build something amazing together!
                </p>
                
                <div className="bg-[#212121] rounded-3xl p-4  mt-4">
                  <h3 className="text-green-400 font-meduim mb-2">Current Status</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-lg">
                    <div><span className="text-yellow-200">Location:</span> <span className="text-white ml-1">{personalInfo.location}</span></div>
                    <div><span className="text-yellow-200">Status:</span> <span className="text-green-100 ml-1">Available</span></div>
                    <div><span className="text-yellow-200">Focus:</span> <span className="text-blue-200 ml-1">AWS • React • DevOps</span></div>
                    <div><span className="text-yellow-200">Email:</span> <a href={`mailto:${personalInfo.email}`} className="text-blue-500 ml-1 hover:underline">{personalInfo.email}</a></div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === "projects" && (
              <div className="space-y-6">
                <h2 className="text-3xl p-4 font-meduim text-white mb-4">Featured Projects</h2>
                {projects.map((project, index) => (
                  <div key={index} className="bg-[#212121]  rounded-3xl p-4">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <h3 className="text-lg font-meduim text-white">{project.title}</h3>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        project.status === 'LIVE' 
                          ? 'bg-yellow-200 text-black' 
                          : 'bg-yellow-500 text-black'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    
                    <p className="text-gray-100 mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="px-2 py-1 bg-gray-700 text-white text-xs rounded-lg">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3 py-1 bg-yellow-200 hover:bg-yellow-100 text-black font-meduim rounded-full text-sm transition-colors"
                    >
                      <FaExternalLinkAlt className="mr-2" />
                      View Project
                    </a>
                  </div>
                ))}

                {/* Certifications */}
                <div className="mt-8">
                  <h3 className="text-3xl p-4 font-meduim text-white mb-4 flex items-center">
                    <FaCertificate className="mr-2 text-yellow-400" />
                    Certifications
                  </h3>
                  
                  <div className="bg-black rounded-2xl p-4 mb-4">
                    <h4 className="text-yellow-200 font-meduim mb-2">Current Focus</h4>
                    <p className="text-gray-100 text-sm">
                      AWS Cloud Practitioner - Recent score: 679/1000 (Jan 24, 2025)
                    </p>
                  </div>

                  <div className="space-y-3">
                    {certifications.map((cert, index) => (
                      <div key={index} className="bg-[#212121] border border-gray-700 rounded-3xl p-6">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                          <div>
                            <h4 className="text-white font-medium">{cert.title}</h4>
                            <p className="text-yellow-500 text-lg">
                              {cert.progress || `Status: ${cert.status.replace('_', ' ')}`}
                            </p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className={`px-2 py-1 text-xs rounded ${
                              cert.status === 'COMPLETED' 
                                ? 'bg-green-900 text-green-300'
                                : 'bg-blue-900 text-blue-300'
                            }`}>
                              {cert.status.replace('_', ' ')}
                            </span>
                            {cert.url && (
                              <a
                                title="link"
                                href={cert.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-blue-300"
                              >
                                <FaExternalLinkAlt className="text-sm" />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeSection === "skills" && (
              <div className="space-y-6">
                <h2 className="text-3xl p-4 font-meduim text-white mb-4">Technical Stack</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {techStack.map((tech, index) => (
                    <div key={index} className="bg-[#222222] rounded-4xl p-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="text-2xl text-white p-2 ">{tech.icon}</div>
                        <div>
                          <h3 className="font-meduim text-white text-xl">{tech.name}</h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-black  rounded-3xl p-4">
                  <h3 className="text-lg font-meduim text-white mb-3">Learning:</h3>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    I believe in continuous learning and hands-on experience. Currently focusing on deepening 
                    my AWS expertise while exploring modern DevOps practices and cloud-native architectures.
                  </p>
                </div>
              </div>
            )}

            {activeSection === "education" && (
              <div className="space-y-6">
                <h2 className="text-xl font-meduim text-white mb-4">Education & Background</h2>
                
                <div className="bg-[#121212] rounded-3xl p-4">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-xl font-meduim text-white mb-1">Bachelor of Technology</h3>
                      <p className="text-yellow-200 font-medium mb-1">Electrical Engineering</p>
                      <p className="text-gray-100 mb-2">JSS Academy of Technical Education</p>
                      <div className="flex flex-col sm:flex-row gap-2 text-sm text-gray-200">
                        <div className="flex items-center space-x-1">
                          <FaMapMarkerAlt />
                          <span>Noida, Uttar Pradesh</span>
                        </div>
                        <div>2022 - 2026</div>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-yellow-200 text-black text-sm rounded-xl font-medium self-start">
                      Active
                    </span>
                  </div>
                  
                  <div className="bg-[#161616]  rounded-3xl p-4">
                    <h4 className="text-green-400 font-meduim text-xl mb-2">Self-Directed Learning</h4>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      While pursuing my degree in Electrical Engineering, I've been actively self-learning 
                      cloud technologies, web development, and DevOps practices through hands-on projects 
                      and real-world applications.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainContent;
