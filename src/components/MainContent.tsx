// Icons
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
} from "react-icons/fa";
import { SiKubernetes,SiCanva  , SiTerraform, SiTailwindcss } from "react-icons/si";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FaDiscord } from "react-icons/fa6";


// Define types 
const MainContent = () => {
  // Tech stack data : 
  const techStack = [
    { icon: <FaAws />, name: "AWS Cloud" },
    { icon: <FaReact />, name: "React 19" },
    { icon: <FaPython />, name: "Python / Boto3" },
    { icon: <SiTailwindcss />, name: "TailwindCSS" },
    { icon: <FaDocker />, name: "Docker" },
    { icon: <SiKubernetes />, name: "Kubernetes" },
    { icon: <SiTerraform />, name: "Terraform" },
  ];

  // tools stack : 
  const ToolsStack = [
    { icon: < FaDiscord/>, name: "Discord" },
    { icon: < SiCanva/>, name: "Canva : Graphic Designing" },
    { icon: < FaGithub/>, name: "Github / Git / Github Actions" },
    { icon: < FaLinux />, name: "Linux / Linux CLI Commands" },
  ];

  // Certifications data
  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      description:
        "Foundation-level certification validating my cloud fluency and basic AWS knowledge. Will be completed by May 2025 as part of my professional cloud journey roadmap.",
      link: "https://github.com/kinshukjainn/",
    },
    {
      title: "AWS Serverless Cloud Badge",
      description:
        "Specialized recognition for proficiency in serverless architecture patterns, Lambda functions, API Gateway, and DynamoDB. Earned through AWS Educate emerging talent program.",
      link: "https://www.credly.com/badges/0bcd1190-2d68-45ff-91d9-32b65aa93ed8/public_url",
    },
    {
      title: "AWS Machine Learning Badge",
      description:
        "Validation of skills in AWS ML services including SageMaker, Comprehend, and Rekognition. This badge showcases my understanding of machine learning concepts and AWS tools. Earned through AWS Educate emerging talent program.",
      link: "https://www.credly.com/badges/a0042ec2-cc6e-4a99-84de-a1516ee5775a/public_url",
    },
  ];

  return (
    <div className="font-sans bg-[#121212] text-gray-100 min-h-screen">
      {/* Hero section with custom dark theme */}
      <header className="relative bg-[#121212]  overflow-hidden">
        <div className="absolute inset-0 bg-[#121212]"></div>

        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 relative z-10">
          <div className="relative">
            <h1 className="text-4xl md:text-6xl font-light text-gray-100 mb-4">
              Hi, I'm{" "}
              <span className="font-semibold text-purple-400">
                Kinshuk Jain
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-8">
              I build cost-effective, secure, and scalable cloud solutions,
              solving real-world problems that make a meaningful impact.
            </p>

            <div>
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3 bg-purple-700 text-white rounded hover:bg-purple-600 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black"
              >
                View My Work
              </a>
            </div>
          </div>
        </div>

        {/* Geometric background */}
        <div className="absolute top-0 right-0 h-full w-1/2 opacity-10">
          <div className="absolute top-0 right-0 w-full h-full">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 500 500"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#C084FC" />
                </linearGradient>
              </defs>
              <circle cx="350" cy="150" r="200" fill="url(#grad1)" />
              <rect
                x="100"
                y="250"
                width="300"
                height="300"
                rx="20"
                fill="url(#grad1)"
              />
            </svg>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Education Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-light text-gray-100 mb-6 flex items-center">
            <span className="w-8 h-1 bg-purple-500 mr-3"></span>
            Education
          </h2>

          <div className="bg-[#232323] rounded-lg shadow-md border border-gray-800 p-6 mb-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <div>
                <h3 className="text-xl font-semibold text-gray-100">
                  Bachelor of Technology, Electrical Engineering
                </h3>
                <p className="text-gray-300 mt-1">
                  JSS Academy of Technical Education
                </p>
                <p className="text-gray-400 text-sm">Noida, Uttar Pradesh</p>
              </div>
              <div className="mt-2 md:mt-0">
                <span className="inline-block bg-purple-900 text-purple-200 px-3 py-1 rounded text-sm font-medium">
                  2022 - 2026
                </span>
              </div>
            </div>
          </div>

          <div className="bg-[#232323] rounded-lg shadow-md border border-gray-800 p-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <div>
                <h3 className="text-xl font-semibold text-gray-100">
                  Higher Secondary Education (XII)
                </h3>
                <p className="text-gray-300 mt-1">
                  Sri Chaitnya Junior College
                </p>
                <p className="text-gray-400 text-sm">
                  Pune, Maharashtra, India
                </p>
              </div>
              <div className="mt-2 md:mt-0">
                <span className="inline-block bg-purple-900 text-purple-200 px-3 py-1 rounded text-sm font-medium">
                  2020 - 2022
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-light text-gray-100 mb-6 flex items-center">
            <span className="w-8 h-1 bg-purple-500 mr-3"></span>
            Tech Stack
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="bg-[#232323] border border-gray-800 rounded-lg p-4 hover:shadow-lg transition-shadow flex items-center space-x-3 hover:border-purple-500"
              >
                <span className="text-purple-400 text-xl">{tech.icon}</span>
                <span className="text-gray-200">{tech.name}</span>
              </div>
            ))}
          </div>
        </section>
        <section className="mb-16">
          <h2 className="text-3xl font-light text-gray-100 mb-6 flex items-center">
            <span className="w-8 h-1 bg-purple-500 mr-3"></span>
            Tools : 
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {ToolsStack.map((tech, index) => (
              <div
                key={index}
                className="bg-[#232323] border border-gray-800 rounded-lg p-4 hover:shadow-lg transition-shadow flex items-center space-x-3 hover:border-purple-500"
              >
                <span className="text-purple-400 text-xl">{tech.icon}</span>
                <span className="text-gray-200">{tech.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-light text-gray-100 mb-6 flex items-center">
            <span className="w-8 h-1 bg-purple-500 mr-3"></span>
            Cloud Certifications
          </h2>

          {/* AWS Journey Banner */}
          <div className="bg-[#232323] bg-opacity-20 border-l-4 border-purple-500 p-6 rounded mb-8">
            <h3 className="text-xl font-semibold text-gray-100 flex items-center mb-3">
              <FaAws className="mr-2 text-purple-400" /> My AWS Certification
              Journey
            </h3>
            <p className="text-gray-300">
              I recently scored 679/1000 on the AWS Certified Cloud Practitioner
              exam (CLF-C02). While just shy of passing, this experience has
              <span className="font-medium text-purple-300">
                {" "}
                strengthened my resolve{" "}
              </span>
              to master cloud fundamentals and accelerated my preparation for
              the more advanced Solutions Architect Associate certification by
              Q3 2025.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-[#232323] border border-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col h-full hover:border-purple-500 transition-colors"
              >
                <div className="p-6 flex-grow">
                  <div className="flex items-start">
                    <FaAws className="text-purple-400 text-xl mr-2 mt-1" />
                    <h3 className="text-lg font-semibold text-gray-100">
                      {cert.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-gray-300 text-sm">
                    {cert.description}
                  </p>
                </div>
                <div className="px-6 py-3 bg-black border-t border-gray-800">
                  <a
                    href={cert.link}
                    className="text-purple-400 hover:text-purple-300 text-sm font-medium inline-flex items-center"
                  >
                    View Certificate
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-16">
          <h2 className="text-3xl font-light text-gray-100 mb-6 flex items-center">
            <span className="w-8 h-1 bg-purple-500 mr-3"></span>
            Projects / Work
          </h2>

          {/* Project 1 */}
          <div className="bg-[#232323] border border-gray-800 rounded-lg shadow-md mb-8 overflow-hidden">
            <div className="p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <h3 className="text-2xl font-semibold text-gray-100 mb-2 md:mb-0">
                  Portfolio Website
                </h3>
                <a
                  href="https://cloudkinshuk.in"
                  className="inline-flex items-center justify-center px-4 py-2 bg-purple-700 text-white text-sm rounded hover:bg-purple-600 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  View Live
                </a>
              </div>

              <p className="text-gray-300 mb-4">
                Built and deployed a personal portfolio website using React 19,
                TypeScript, Tailwind CSS, and Framer Motion with live blog
                integration and full cloud-backed deployment.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h4 className="text-lg font-medium text-gray-100 mb-3">
                    Key Features
                  </h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-purple-400 mr-2 mt-0.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Implemented smooth animations and responsive UI
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-purple-400 mr-2 mt-0.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Integrated Hashnode API for dynamic blog posts
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-purple-400 mr-2 mt-0.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Migrated from Netlify to AWS Amplify
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-100 mb-3">
                    Technical Details
                  </h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-purple-400 mr-2 mt-0.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Configured Route 53 for SSL and DNS management
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-purple-400 mr-2 mt-0.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Used AI tools to boost development efficiency
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-purple-400 mr-2 mt-0.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Implemented dark mode and accessibility features
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-800">
                <h4 className="text-sm font-medium text-gray-400 mb-3">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-black text-gray-200 text-xs rounded-full border border-gray-700">
                    React 19
                  </span>
                  <span className="px-3 py-1 bg-black text-gray-200 text-xs rounded-full border border-gray-700">
                    TypeScript
                  </span>
                  <span className="px-3 py-1 bg-black text-gray-200 text-xs rounded-full border border-gray-700">
                    Tailwind CSS
                  </span>
                  <span className="px-3 py-1 bg-black text-gray-200 text-xs rounded-full border border-gray-700">
                    Framer Motion
                  </span>
                  <span className="px-3 py-1 bg-black text-gray-200 text-xs rounded-full border border-gray-700">
                    AWS Amplify
                  </span>
                  <span className="px-3 py-1 bg-black text-gray-200 text-xs rounded-full border border-gray-700">
                    Route 53
                  </span>
                  <span className="px-3 py-1 bg-black text-gray-200 text-xs rounded-full border border-gray-700">
                    Hostinger
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-[#232323] border border-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <h3 className="text-2xl font-semibold text-gray-100 mb-2 md:mb-0">
                  Cloud Architecture Blog
                </h3>
                <a
                  href="https://blog.cloudkinshuk.in"
                  className="inline-flex items-center justify-center px-4 py-2 bg-purple-700 text-white text-sm rounded hover:bg-purple-600 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  View Blog
                </a>
              </div>

              <p className="text-gray-300 mb-4">
                Created and deployed a fully functional tech blog using Hashnode
                as the content platform, with custom domain integration and
                professional DNS configuration.
              </p>

              <ul className="mt-4 space-y-2 text-gray-300">
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-purple-400 mr-2 mt-0.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Set up a developer blog with a custom domain
                  (blog.cloudkinshuk.in)
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-purple-400 mr-2 mt-0.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Configured DNS records (A, CNAME, TXT) in Route 53 for domain
                  verification and HTTPS
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-purple-400 mr-2 mt-0.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Published technical articles covering AWS, serverless
                  architecture, and React development
                </li>
              </ul>

              <div className="mt-6 pt-6 border-t border-gray-800">
                <h4 className="text-sm font-medium text-gray-400 mb-3">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-black text-gray-200 text-xs rounded-full border border-gray-700">
                    Hashnode
                  </span>
                  <span className="px-3 py-1 bg-black text-gray-200 text-xs rounded-full border border-gray-700">
                    Amazon Route 53
                  </span>
                  <span className="px-3 py-1 bg-black text-gray-200 text-xs rounded-full border border-gray-700">
                    Hostinger
                  </span>
                  <span className="px-3 py-1 bg-black text-gray-200 text-xs rounded-full border border-gray-700">
                    DNS Management
                  </span>
                  <span className="px-3 py-1 bg-black text-gray-200 text-xs rounded-full border border-gray-700">
                    Custom Domain
                  </span>
                  <span className="px-3 py-1 bg-black text-gray-200 text-xs rounded-full border border-gray-700">
                    CDN
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="bg-[#121212] mb-4 mr-4 ml-4  text-white py-8 px-6 sm:px-10 rounded-2xl shadow-xl ">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            {/* Left Content */}
            <div className="space-y-5 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <FaCode className="text-green-400 text-2xl" />
                <h3
                  className="text-2xl sm:text-3xl font-extrabold 
             bg-gradient-to-r from-[#00F260] via-[#0575E6] to-[#FF6FD8] 
             bg-clip-text text-transparent 
             transition-all duration-300 hover:scale-105 hover:brightness-125"
                >
                  <span
                    className="bg-gradient-to-r from-[#00F260] via-[#0575E6] to-[#FF6FD8] 
               bg-clip-text text-transparent 
               animate-gradient bg-[length:200%_200%] text-shadow-neon"
                  >
                    Fork it. Star it. Make it yours.
                  </span>
                </h3>
              </div>

              <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto lg:mx-0">
                This portfolio is now fully open-source and unapologetically
                forkable. Like the design? Steal it. Want to tweak the branding?
                Clone away. Just don’t forget to ⭐ if it saves you hours of
                debugging and styling! Contributions, issues, and witty pull
                requests are always welcome.
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <div className="flex items-center font-semibold text-base sm:text-lg text-gray-300 hover:text-yellow-400 transition">
                  <FaStar className="text-yellow-400 mr-2" />
                  <span>Star to show love</span>
                </div>
                <div className="flex items-center font-semibold text-base sm:text-lg text-gray-300 hover:text-blue-400 transition">
                  <FaCodeBranch className="text-blue-400 mr-2" />
                  <span>Fork and remix</span>
                </div>
              </div>
            </div>

            {/* Right Button */}
            <a
              href="https://github.com/kinshukjain01/kinshukkportfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 text-white font-semibold py-3 px-6 rounded-xl 
             transition-all duration-300 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 
             shadow-[0_10px_25px_rgba(255,215,0,0.4)] hover:shadow-[0_15px_35px_rgba(255,105,180,0.6)] 
             hover:scale-105 hover:brightness-110 animate-pulse"
            >
              <FaGithub className="text-2xl text-black" />
              <span className="text-lg text-black">View Repository</span>
              <HiOutlineExternalLink className="text-lg text-black opacity-70 group-hover:opacity-100 transition" />

              {/* Hover shine effect */}
              <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/10 via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 blur-sm pointer-events-none" />
            </a>
          </div>
        </div>
      </div>

      {/* Custom dark theme footer with gradient accent */}
      <footer className="bg-black border-t border-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-300">
            Want to explore my learning journey? Check out the{" "}
            <span className="text-purple-400 font-medium">Resources</span> tab
            in the header!
          </p>
        </div>
      </footer>
    </div>
  );
};

export default MainContent;
