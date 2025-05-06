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
import {
  SiKubernetes,
  SiCanva,
  SiTerraform,
  SiTailwindcss,
} from "react-icons/si";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FaDiscord } from "react-icons/fa6";
import { Link } from "react-router-dom";

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
    { icon: <FaDiscord />, name: "Discord" },
    { icon: <SiCanva />, name: "Canva : Graphic Designing" },
    { icon: <FaGithub />, name: "Github / Git / Github Actions" },
    { icon: <FaLinux />, name: "Linux / Linux CLI Commands" },
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
    <div className=" bg-black text-gray-100 min-h-screen">
      {/* Hero section with custom dark theme */}
      <header className="relative bg-black  overflow-hidden">
        <div className="absolute inset-0 bg-black"></div>

        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 relative z-10">
          <div className="relative">
            <h1 className="text-4xl md:text-6xl font-light text-gray-100 mb-4">
              Hi, I'm{" "}
              <span className="font-semibold">
                Kinshuk Jain
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-8">
              I build cost-effective, secure, and scalable cloud solutions,
              solving real-world problems that make a meaningful impact.
            </p>

            <div>
              <Link
                to="/blogs"
                className="inline-flex items-center justify-center  bg-white px-2 py-2 underline text-black font-bold rounded-md"
              >
                View My blogs
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Education Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-100 mb-6 flex items-center">
            <span className="w-8 h-3 rounded-2xl bg-white mr-3"></span>
            Education
          </h2>

          <div className=" rounded-4xl  p-6 mb-6">
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
                <span className="inline-block bg-blue-700 text-white px-3 py-1 rounded-full text-sm font-medium">
                  2022 - 2026
                </span>
              </div>
            </div>
          </div>

          <div className=" rounded-4xl shadow-md p-6">
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
                <span className="inline-block bg-blue-700 text-white px-3 py-1 rounded-full text-sm font-medium">
                  2020 - 2022
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-100 mb-6 flex items-center">
            <span className="w-8 h-3 rounded-full bg-white mr-3"></span>
            Tech Stack
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="  rounded-2xl p-4 hover:shadow-lg transition-shadow flex items-center space-x-3"
              >
                <span className="text-purple-400 text-xl">{tech.icon}</span>
                <span className="text-gray-200">{tech.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-100 mb-6 flex items-center">
            <span className="w-8 h-3 rounded-full bg-white mr-3"></span>
            Tools :
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {ToolsStack.map((tech, index) => (
              <div
                key={index}
                className=" p-4 hover:shadow-lg transition-shadow flex items-center space-x-3"
              >
                <span className="text-purple-400 text-xl">{tech.icon}</span>
                <span className="text-gray-200">{tech.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold font-light text-gray-100 mb-6 flex items-center">
            <span className="w-8 h-3 rounded-full bg-white mr-3"></span>
            Cloud Certifications
          </h2>

          {/* AWS Journey Banner */}
          <div className="p-6 rounded-4xl mb-8">
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
                className=" overflow-hidden flex flex-col h-full transition-colors"
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
                <div className="px-6 py-3 mb-2 mt-2 mr-2 ml-2 rounded-full w-max  font-semibold ">
                  <a
                    href={cert.link}
                    className="text-blue-500 font-semibold font-medium inline-flex items-center"
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
          <h2 className="text-3xl font-semibold text-gray-100 mb-6 flex items-center">
            <span className="w-8 h-3 rounded-full bg-purple-500 mr-3"></span>
            Projects / Work
          </h2>

          {/* Project 1 */}
          <div className="  rounded-4xl shadow-md mb-8 overflow-hidden">
            <div className="p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <h3 className="text-2xl font-semibold text-gray-100 mb-2 md:mb-0">
                  Portfolio Website
                </h3>
                <a
                  href="https://cloudkinshuk.in"
                  className="inline-flex items-center justify-center px-2 w-max py-2 font-bold bg-purple-700 text-white text-sm rounded-full hover:bg-purple-600 transition-colors "
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
                  <span className="px-3 py-1 bg-blue-800 text-white text-sm rounded-full">
                    React 19
                  </span>
                  <span className="px-3 py-1 bg-blue-800 text-white text-sm rounded-full">
                    TypeScript
                  </span>
                  <span className="px-3 py-1 bg-blue-800 text-white text-sm rounded-full">
                    Tailwind CSS
                  </span>
                  <span className="px-3 py-1 bg-blue-800 text-white text-sm rounded-full">
                    Framer Motion
                  </span>
                  <span className="px-3 py-1 bg-blue-800 text-white text-sm rounded-full">
                    AWS Amplify
                  </span>
                  <span className="px-3 py-1 bg-blue-800 text-white text-sm rounded-full">
                    Route 53
                  </span>
                  <span className="px-3 py-1 bg-blue-800 text-white text-sm rounded-full">
                    Hostinger
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="  shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <h3 className="text-2xl font-semibold text-gray-100 mb-2 md:mb-0">
                  Cloud Architecture Blog
                </h3>
                <a
                  href="https://blog.cloudkinshuk.in"
                  className="inline-flex items-center justify-center px-2 w-max py-2 font-bold bg-purple-700 text-white text-sm rounded-full hover:bg-purple-600 transition-colors"
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
                  <span className="px-3 py-1 bg-blue-800 text-white text-sm rounded-full ">
                    Hashnode
                  </span>
                  <span className="px-3 py-1 bg-blue-800 text-white text-sm rounded-full ">
                    Amazon Route 53
                  </span>
                  <span className="px-3 py-1 bg-blue-800 text-white text-sm rounded-full ">
                    Hostinger
                  </span>
                  <span className="px-3 py-1 bg-blue-800 text-white text-sm rounded-full ">
                    DNS Management
                  </span>
                  <span className="px-3 py-1 bg-blue-800 text-white text-sm rounded-full ">
                    Custom Domain
                  </span>
                  <span className="px-3 py-1 bg-blue-800 text-white text-sm rounded-full ">
                    CDN
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className=" mb-4 mr-4 ml-4  text-white py-8 px-6 sm:px-10 rounded-2xl shadow-xl ">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            {/* Left Content */}
            <div className="space-y-5 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <FaCode className="text-blue-400 text-2xl" />
                <h3
                  className="text-2xl sm:text-3xl font-extrabold text-white 
             transition-all duration-300"
                >
                  <span
                    className="text0-white"
                  >
                    Fork it. Star it. Make it yours.
                  </span>
                </h3>
              </div>

              <p className="text-base  font-mono sm:text-lg text-gray-400 max-w-3xl mx-auto lg:mx-0">
              This portfolio is fully open-source and free to fork. Found the design helpful? Feel free to use or modify it for your own site. If it saved you time or gave you a good starting point, a ⭐ would mean a lot. Contributions, feedback, and improvements are always welcome
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <div className="flex items-center font-semibold text-base sm:text-sm text-gray-300 hover:text-yellow-400 transition">
                  <FaStar className="text-yellow-400 mr-2" />
                  <span>Star to show love</span>
                </div>
                <div className="flex items-center font-semibold text-base sm:text-sm text-gray-300 transition">
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
              className="group relative inline-flex items-center gap-2 text-white font-semibold py-2 px-2 rounded-xl bg-blue-900 "
            >
              <FaGithub className="text-2xl text-white" />
              <span className="text-sm text-white">View Repository</span>
              <HiOutlineExternalLink className="text-lg text-white  group-hover:opacity-100 transition" />

              {/* Hover shine effect */}
              <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/10 via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 blur-sm pointer-events-none" />
            </a>
          </div>
        </div>
      </div>

      {/* Custom dark theme footer with gradient accent */}
      <footer className="bg-black py-6 ">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-300">
            Want to explore my learning journey? Check out the{" "}
            <Link to="/docs" className="text-purple-400 font-bold">
              Resources
            </Link>{" "}
            tab in the header!
          </p>
        </div>
      </footer>
    </div>
  );
};

export default MainContent;
