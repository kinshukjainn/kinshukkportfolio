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

const MainContent = () => {
  // Tech stack data
  const techStack = [
    { icon: <FaAws />, name: "AWS Cloud" },
    { icon: <FaReact />, name: "React 19" },
    { icon: <FaPython />, name: "Python / Boto3" },
    { icon: <SiTailwindcss />, name: "TailwindCSS" },
    { icon: <FaDocker />, name: "Docker" },
    { icon: <SiKubernetes />, name: "Kubernetes" },
    { icon: <SiTerraform />, name: "Terraform" },
  ];

  // tools stack
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
    <div className="bg-black text-gray-100 min-h-screen">
      {/* Hero section - with improved spacing */}
      <header className="bg-black border-b border-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl md:text-5xl font-light mb-4">
            Hi, I'm <span className="font-semibold">Kinshuk Jain</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
            I build cost-effective, secure, and scalable cloud solutions,
            solving real-world problems that make a meaningful impact.
          </p>
          <Link
            to="/blogs"
            className="inline-flex items-center rounded-md bg-white px-4 py-2 text-black font-medium text-sm"
          >
            View My blogs
          </Link>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Education Section - with improved spacing */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <span className="w-6 h-1 bg-white mr-3"></span>
            Education
          </h2>

          <div className="mb-6 border-l-2 border-gray-800 pl-6">
            <div className="flex flex-col md:flex-row md:justify-between">
              <div>
                <h3 className="text-lg font-medium">
                  Bachelor of Technology, Electrical Engineering
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  JSS Academy of Technical Education
                </p>
                <p className="text-gray-500 text-xs mt-1">Noida, Uttar Pradesh</p>
              </div>
              <div className="mt-2 md:mt-0">
                <span className="text-gray-400 text-sm">2022 - 2026</span>
              </div>
            </div>
          </div>

          <div className="border-l-2 border-gray-800 pl-6">
            <div className="flex flex-col md:flex-row md:justify-between">
              <div>
                <h3 className="text-lg font-medium">
                  Higher Secondary Education (XII)
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  Sri Chaitnya Junior College
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  Pune, Maharashtra, India
                </p>
              </div>
              <div className="mt-2 md:mt-0">
                <span className="text-gray-400 text-sm">2020 - 2022</span>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Section - with improved spacing */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <span className="w-6 h-1 bg-white mr-3"></span>
            Tech Stack
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 py-2"
              >
                <span className="text-gray-400 text-lg">{tech.icon}</span>
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <span className="w-6 h-1 bg-white mr-3"></span>
            Tools
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {ToolsStack.map((tech, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 py-2"
              >
                <span className="text-gray-400 text-lg">{tech.icon}</span>
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications Section - with improved spacing */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <span className="w-6 h-1 bg-white mr-3"></span>
            Cloud Certifications
          </h2>

          {/* AWS Journey Banner */}
          <div className="mb-8 border-l-2 border-gray-800 pl-6 py-2">
            <h3 className="text-lg font-medium flex items-center mb-3">
              <FaAws className="mr-3 text-gray-100" /> My AWS Certification Journey
            </h3>
            <p className="text-sm text-gray-200 leading-relaxed">
              I recently scored 679/1000 on the AWS Certified Cloud Practitioner
              exam (CLF-C02). While just shy of passing, this experience has
              <span className="font-medium text-white"> strengthened my resolve </span>
              to master cloud fundamentals and accelerated my preparation for
              the more advanced Solutions Architect Associate certification by
              Q3 2025.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="border-l border-gray-800 pl-4 py-2">
                <div className="flex items-start">
                  <FaAws className="text-white text-sm mr-2 mt-1" />
                  <h3 className="text-base text-white font-medium">
                    {cert.title}
                  </h3>
                </div>
                <p className="mt-3 text-gray-200 text-xs leading-relaxed">
                  {cert.description}
                </p>
                <a
                  href={cert.link}
                  className="text-yellow-500 text-xs inline-flex items-center mt-3 hover:text-white"
                >
                  View Certificate
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 ml-1"
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
            ))}
          </div>
        </section>

        {/* Projects Section - with improved spacing */}
        <section id="projects" className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <span className="w-6 h-1 bg-white mr-3"></span>
            Projects / Work
          </h2>

          {/* Project 1 */}
          <div className="mb-10 border-l-2 border-gray-800 pl-6 py-3">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
              <h3 className="text-xl font-medium mb-2 md:mb-0">
                Portfolio Website
              </h3>
              <a
                href="https://cloudkinshuk.in"
                className="inline-flex rounded-md items-center justify-center px-3 py-1 text-xs font-medium text-black bg-white"
              >
                View Live
              </a>
            </div>

            <p className="text-sm text-gray-200 mb-4 leading-relaxed">
              Built and deployed a personal portfolio website using React 19,
              TypeScript, Tailwind CSS with live blog integration and full cloud-backed deployment.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-4">
              <div>
                <h4 className="text-sm font-medium mb-3">
                  Key Features
                </h4>
                <ul className="space-y-2 text-xs text-gray-200">
                  <li className="flex items-start">
                    <span className="text-gray-200 mr-2">•</span>
                    Implemented responsive UI
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-200 mr-2">•</span>
                    Integrated Hashnode API for dynamic blog posts
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-200 mr-2">•</span>
                    Migrated from Netlify to AWS Amplify
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-3">
                  Technical Details
                </h4>
                <ul className="space-y-2 text-xs text-gray-200">
                  <li className="flex items-start">
                    <span className="text-gray-200 mr-2">•</span>
                    Configured Route 53 for SSL and DNS management
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-200 mr-2">•</span>
                    Used AI tools to boost development efficiency
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-200 mr-2">•</span>
                    Implemented dark mode and accessibility features
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-900">
              <h4 className="text-xs font-medium text-gray-200 mb-2">
                Technologies:
              </h4>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-3 py-1 text-xs text-gray-200 border border-gray-800">React 19</span>
                <span className="px-3 py-1 text-xs text-gray-200 border border-gray-800">TypeScript</span>
                <span className="px-3 py-1 text-xs text-gray-200 border border-gray-800">Tailwind CSS</span>
                <span className="px-3 py-1 text-xs text-gray-200 border border-gray-800">AWS Amplify</span>
                <span className="px-3 py-1 text-xs text-gray-200 border border-gray-800">Route 53</span>
                <span className="px-3 py-1 text-xs text-gray-200 border border-gray-800">Hostinger</span>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="border-l-2 border-gray-800 pl-6 py-3">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
              <h3 className="text-xl font-medium mb-2 md:mb-0">
                Blog Page : Custom Domain || Hashnode 
              </h3>
              <a
                href="https://blog.cloudkinshuk.in"
                className="inline-flex rounded-md items-center justify-center px-3 py-1 text-xs font-medium text-black bg-white"
              >
                View Blog
              </a>
            </div>

            <p className="text-sm text-gray-200 mb-4 leading-relaxed">
              Created and deployed a fully functional tech blog using Hashnode
              as the content platform, with custom domain integration and
              professional DNS configuration.
            </p>

            <ul className="space-y-2 text-xs text-gray-200 mb-4">
              <li className="flex items-start">
                <span className="text-gray-200 mr-2">•</span>
                Set up a developer blog with a custom domain
                (blog.cloudkinshuk.in)
              </li>
              <li className="flex items-start">
                <span className="text-gray-200 mr-2">•</span>
                Configured DNS records (A, CNAME, TXT) in Route 53 for domain
                verification and HTTPS
              </li>
              <li className="flex items-start">
                <span className="text-gray-200 mr-2">•</span>
                Published technical articles covering AWS, serverless
                architecture, and React development
              </li>
            </ul>

            <div className="mt-4 pt-4 border-t border-gray-900">
              <h4 className="text-xs font-medium text-gray-500 mb-2">
                Technologies:
              </h4>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-3 py-1 text-xs text-gray-300 border border-gray-800">Hashnode</span>
                <span className="px-3 py-1 text-xs text-gray-300 border border-gray-800">Amazon Route 53</span>
                <span className="px-3 py-1 text-xs text-gray-300 border border-gray-800">Hostinger</span>
                <span className="px-3 py-1 text-xs text-gray-300 border border-gray-800">DNS Management</span>
                <span className="px-3 py-1 text-xs text-gray-300 border border-gray-800">Custom Domain</span>
                <span className="px-3 py-1 text-xs text-gray-300 border border-gray-800">CDN</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="border-t border-gray-900 mt-8 py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            {/* Left Content */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FaCode className="text-gray-400 text-lg" />
                <h3 className="text-lg font-medium">
                  Fork it. Star it. Make it yours.
                </h3>
              </div>

              <p className="text-xs text-gray-200 max-w-2xl leading-relaxed">
                This portfolio is fully open-source and free to fork. Found the design helpful? 
                Feel free to use or modify it for your own site. If it saved you time or gave you 
                a good starting point, a ⭐ would mean a lot. Contributions, feedback, and 
                improvements are always welcome.
              </p>

              <div className="flex gap-6">
                <div className="flex items-center text-xs text-gray-400">
                  <FaStar className="text-gray-400 mr-2" />
                  <span>Star to show love</span>
                </div>
                <div className="flex items-center text-xs text-gray-400">
                  <FaCodeBranch className="text-gray-400 mr-2" />
                  <span>Fork and remix</span>
                </div>
              </div>
            </div>

            {/* Right Button */}
            <a
              href="https://github.com/kinshukjain01/kinshukkportfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white font-medium py-2 px-4 border border-gray-700 text-sm"
            >
              <FaGithub className="text-lg" />
              <span>View Repository</span>
              <HiOutlineExternalLink className="text-sm" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-900 py-6">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gray-400 text-sm">
            Want to explore my Thinking? Check out the{" "}
            <Link to="/blogs" className="text-white font-medium">
              Blogs
            </Link>{" "}
            tab in the header!
          </p>
        </div>
      </footer>
    </div>
  );
};

export default MainContent;