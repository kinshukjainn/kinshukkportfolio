import {
  FaAws,
  FaDocker,
  FaGithub,
  FaLinux,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { SiKubernetes, SiTerraform, SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";
import { useState, useEffect, ReactNode } from "react";

// Define types for technology items
type TechItem = {
  icon: ReactNode;
  name: string;
};

// Define types for certifications
type Certification = {
  title: string;
  description: string;
  link: string;
};

const MainContent: React.FC = () => {
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  // Particles animation effect for background
  const [particles, setParticles] = useState<
    { x: number; y: number; size: number; vx: number; vy: number }[]
  >([]);

  useEffect(() => {
    const createParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 30; i++) {
        newParticles.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 3 + 1,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
        });
      }
      setParticles(newParticles);
    };

    createParticles();

    const updateParticles = setInterval(() => {
      setParticles((prevParticles) =>
        prevParticles.map((particle) => ({
          ...particle,
          x: (particle.x + particle.vx + window.innerWidth) % window.innerWidth,
          y:
            (particle.y + particle.vy + window.innerHeight) %
            window.innerHeight,
        }))
      );
    }, 50);

    return () => clearInterval(updateParticles);
  }, []);

  // Tech stack items
  const techStack: TechItem[] = [
    { icon: <FaAws className="text-3xl" />, name: "AWS cloud" },
    { icon: <FaReact className="text-3xl" />, name: "React 19" },
    { icon: <FaPython className="text-3xl" />, name: "Python / Boto3" },
    { icon: <SiTailwindcss className="text-3xl" />, name: "TailwindCSS" },
    { icon: <FaDocker className="text-3xl" />, name: "Docker" },
    { icon: <SiKubernetes className="text-3xl" />, name: "Kubernetes" },
    { icon: <SiTerraform className="text-3xl" />, name: "Terraform " },
    { icon: <FaGithub className="text-3xl" />, name: "GitHub Actions" },
    { icon: <FaLinux className="text-3xl" />, name: "Linux, Bash" },
  ];

  // Certifications data
  const certifications: Certification[] = [
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
        "Validation of skills in AWS ML services including SageMaker, Comprehend, and Rekognition. Demonstrates ability to implement cloud-based machine learning solutions.",
      link: "https://www.credly.com/badges/a0042ec2-cc6e-4a99-84de-a1516ee5775a/public_url",
    },
  ];

  // State to track if content is fully loaded
  const [contentLoaded, setContentLoaded] = useState(false);

  // Set content loaded after a small delay to ensure smooth animations
  useEffect(() => {
    const timer = setTimeout(() => setContentLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gradient-to-br font-poppins from-gray-900 to-black text-gray-100 min-h-screen flex flex-col justify-between p-4 sm:p-6 relative overflow-hidden">
      {/* Animated particles background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500 opacity-20"
            style={{
              width: particle.size,
              height: particle.size,
              left: particle.x,
              top: particle.y,
            }}
            initial={false}
            animate={{
              x: particle.vx * 10,
              y: particle.vy * 10,
              transition: { repeat: Infinity, duration: 2, ease: "linear" },
            }}
          />
        ))}
      </div>

      {/* Glowing cloud effect */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-10 animate-pulse z-0"></div>
      <div className="absolute -bottom-32 -left-20 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-10 animate-pulse z-0"></div>

      <motion.div
        className="max-w-4xl mx-auto space-y-6 md:space-y-8 flex-grow w-full px-2 sm:px-4 md:px-6 lg:px-8 relative z-10"
        initial="hidden"
        animate={contentLoaded ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Introduction Section */}
        <motion.section
          className="backdrop-blur-sm bg-gray-900/70 p-6 sm:p-8 rounded-xl shadow-2xl border border-gray-800 text-center sm:text-left overflow-hidden"
          variants={itemVariants}
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent tracking-tight"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
          >
            Hi everyone! I am kinshuk
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl mt-2 md:mt-3 text-cyan-400 font-semibold"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
          >
            A cloud architect and DevOps enthusiast !
          </motion.p>
        </motion.section>

        {/* About Section */}
        <motion.section
          className="backdrop-blur-sm bg-gray-900/70 p-6 sm:p-8 rounded-xl shadow-2xl border border-gray-800"
          variants={itemVariants}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
            Who am I?
          </h2>
          <p className="text-white mt-4 text-sm sm:text-base leading-relaxed">
            I'm really excited about cloud computing and have built a solid
            foundation in AWS and cloud-native technologies. I love solving
            complex problems and designing scalable, cost-effective solutions
            for cloud applications. I'm always eager to learn and share
            knowledge with others, and I enjoy collaborating with teams to
            tackle challenges. As I explore tools in DevOps and AWS, I focus on
            building systems that are simple, cost-effective, and can scale
            easily. I'm also passionate about open-source projects because they
            are accessible to everyone and foster collaboration. With AI and
            machine learning advancing rapidly, my goal is to make deployment
            and CI/CD processes faster and more reliable. By automating these
            systems, we can deliver updates and features to users quickly and
            efficiently, making a positive impact on both the development
            community and users worldwide.
          </p>
        </motion.section>

        {/* Education Section */}
        <motion.section
          className="backdrop-blur-sm bg-gray-900/70 p-6 sm:p-8 rounded-xl shadow-2xl border border-gray-800"
          variants={itemVariants}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent mb-4">
            Education
          </h2>

          {/* Main Degree */}
          <div className="mb-6 border-l-2 border-cyan-400 pl-4">
            <div className="flex justify-between items-baseline">
              <h3 className="text-xl font-medium text-white">
                Bachelor of Technology, Electrical Engineering
              </h3>
              <span className="text-cyan-400 text-sm">2022 - 2026</span>
            </div>
            <p className="text-gray-300 mt-1">
              JSS Academy of Technical Education
            </p>
            <p className="text-gray-400 text-sm italic">Noida, Uttar Pradesh</p>
            <div className="mt-3 space-y-2"></div>
          </div>

          {/* Secondary Education */}
          <div className="border-l-2 border-gray-600 pl-4">
            <div className="flex justify-between items-baseline">
              <h3 className="text-lg font-medium text-white">
                Higher Secondary Education (XII)
              </h3>
              <span className="text-gray-400 text-sm">2020 - 2022</span>
            </div>
            <p className="text-gray-300 mt-1">Sri Chaitnya Junior College</p>
            <p className="text-gray-400 text-sm italic">
              Pune Maharashtra, India
            </p>
          </div>
        </motion.section>

        {/* Tech Stack Section with Icons */}
        <motion.section
          className="backdrop-blur-sm bg-gray-900/70 p-6 sm:p-8 rounded-xl shadow-2xl border border-gray-800"
          variants={itemVariants}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent mb-4">
            Tech Stack
          </h2>
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 mt-4 text-gray-300 text-sm sm:text-base">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-3 p-4 rounded-lg bg-gray-800/60 backdrop-blur-sm border border-gray-700 hover:border-cyan-500/50 transition-all"
                whileHover={{
                  scale: 1.03,
                  backgroundColor: "rgba(8, 145, 178, 0.1)",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className="text-cyan-400">{tech.icon}</span>
                <span>{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>
        {/* Certifications Section */}
        <motion.section
          className="backdrop-blur-sm bg-gray-900/70 p-6 sm:p-8 rounded-xl shadow-2xl border border-gray-800"
          variants={itemVariants}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent mb-4">
            Cloud Certifications
          </h2>

          {/* AWS Journey Banner */}
          <div className="p-4 rounded-lg bg-gray-800/80 backdrop-blur-sm border border-cyan-700/40 mb-6">
            <h3 className="text-cyan-400 font-medium flex items-center mb-2">
              <FaAws className="mr-2" /> My AWS Certification Journey
            </h3>
            <p className="text-gray-300 text-sm sm:text-base italic border-l-2 border-cyan-500/50 pl-3">
              I recently scored 679/1000 on the AWS Certified Cloud Practitioner
              exam (CLF-C02). While just shy of passing, this experience has{" "}
              <span className="text-cyan-300">strengthened my resolve</span> to
              master cloud fundamentals and accelerated my preparation for the
              more advanced Solutions Architect Associate certification by Q3
              2025.
            </p>
          </div>

          <div className="mt-4 space-y-4 text-sm sm:text-base">
            {certifications.map((certificate, index) => (
              <motion.div
                key={index}
                className="p-4 rounded-lg bg-gray-800/60 backdrop-blur-sm border border-gray-700 hover:border-cyan-500/50 transition-all"
                whileHover={{
                  scale: 1.02,
                  backgroundColor: "rgba(8, 145, 178, 0.1)",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <a
                  href={certificate.link}
                  className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center"
                >
                  <FaAws className="mr-2" /> {certificate.title}
                </a>
                <p className="text-gray-300 mt-2">{certificate.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Projects Section */}
        {/* Projects Section */}
        <motion.section
          className="backdrop-blur-sm bg-gray-900/70 p-6 sm:p-8 rounded-xl shadow-2xl border border-gray-800"
          variants={itemVariants}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent mb-4">
            Cloud Projects
          </h2>
          <p className="text-gray-400 mb-8 text-sm sm:text-base">
            Current projects in development - updates coming soon
          </p>

          {/* Project 1 */}
          <div className="p-5 rounded-lg bg-gray-800/60 backdrop-blur-sm border border-gray-700 hover:border-cyan-500/50 transition-all mb-6">
            <a
              href="https://cloudkinshuk.in"
              className="text-lg sm:text-xl font-semibold text-cyan-400 hover:text-cyan-300 transition-colors flex items-center mb-4"
            >
              <span className="w-2 h-10 bg-gradient-to-b from-cyan-400 to-blue-500 rounded mr-3"></span>
              Portfolio Website
            </a>

            <div className="text-gray-300 space-y-4 text-sm sm:text-base">
              <p>
                Built and deployed a personal portfolio website using React 19,
                TypeScript, Tailwind CSS, and Framer Motion with live blog
                integration and full cloud-backed deployment.
              </p>

              <ul className="space-y-2 pl-5 list-disc text-gray-300">
                <li>
                  Implemented smooth animations and responsive UI using Framer
                  Motion and Tailwind CSS
                </li>
                <li>
                  Integrated Hashnode API to dynamically fetch and display blog
                  posts, enabling real-time updates
                </li>
                <li>
                  Migrated from Netlify to AWS Amplify for faster build times,
                  better scalability and improved CI/CD
                </li>
                <li>
                  Configured custom domain with Route 53 for SSL certificates
                  and robust DNS management
                </li>
                <li>
                  Leveraged AI tools like Claude and ChatGPT to boost
                  development efficiency
                </li>
              </ul>
            </div>

            <div className="mt-5 pt-4 border-t border-gray-700">
              <h4 className="text-sm font-medium text-gray-400 mb-2">
                Technologies Used:
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-xs rounded-full bg-blue-900/60 text-blue-300 border border-blue-700">
                  React 19
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-blue-900/60 text-blue-300 border border-blue-700">
                  TypeScript
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-blue-900/60 text-blue-300 border border-blue-700">
                  Tailwind CSS
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-blue-900/60 text-blue-300 border border-blue-700">
                  Framer Motion
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-blue-900/60 text-blue-300 border border-blue-700">
                  AWS Amplify
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-blue-900/60 text-blue-300 border border-blue-700">
                  Route 53
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-blue-900/60 text-blue-300 border border-blue-700">
                  Hostinger
                </span>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="p-5 rounded-lg bg-gray-800/60 backdrop-blur-sm border border-gray-700 hover:border-cyan-500/50 transition-all">
            <a
              href="https://blog.cloudkinshuk.in"
              className="text-lg sm:text-xl font-semibold text-cyan-400 hover:text-cyan-300 transition-colors flex items-center mb-4"
            >
              <span className="w-2 h-10 bg-gradient-to-b from-cyan-400 to-blue-500 rounded mr-3"></span>
              Cloud Architecture Blog
            </a>

            <div className="text-gray-300 space-y-4 text-sm sm:text-base">
              <p>
                Created and deployed a fully functional tech blog using Hashnode
                as the content platform, with custom domain integration and
                professional DNS configuration.
              </p>

              <ul className="space-y-2 pl-5 list-disc text-gray-300">
                <li>
                  Set up a developer blog with a custom domain
                  (blog.cloudkinshuk.in)
                </li>
                <li>
                  Configured DNS records (A, CNAME, TXT) in Route 53 for domain
                  verification and HTTPS
                </li>
                <li>
                  Integrated domain management across different providers
                  (Hostinger + AWS)
                </li>
                <li>
                  Leveraged Hashnode's developer tools to sync content and
                  metadata efficiently
                </li>
                <li>
                  Published technical articles covering AWS, serverless
                  architecture, and React development
                </li>
              </ul>

              <p className="flex items-center mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-2 text-cyan-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </svg>
                <a
                  href="https://blog.cloudkinshuk.in"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Live Project: blog.cloudkinshuk.in
                </a>
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-gray-700">
              <h4 className="text-sm font-medium text-gray-400 mb-2">
                Technologies Used:
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-xs rounded-full bg-blue-900/60 text-blue-300 border border-blue-700">
                  Hashnode
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-blue-900/60 text-blue-300 border border-blue-700">
                  Amazon Route 53
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-blue-900/60 text-blue-300 border border-blue-700">
                  Hostinger
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-blue-900/60 text-blue-300 border border-blue-700">
                  DNS Management
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-blue-900/60 text-blue-300 border border-blue-700">
                  Custom Domain
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-blue-900/60 text-blue-300 border border-blue-700">
                  CDN
                </span>
              </div>
            </div>
          </div>
        </motion.section>
      </motion.div>

      <motion.footer
        className="backdrop-blur-sm bg-gray-900/70 border-t border-gray-800 p-4 sm:p-5 text-center text-cyan-400 mt-6 sm:mt-8 shadow-lg text-xs sm:text-sm md:text-base w-full relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <p>
          Want to explore my learning journey? Check out the{" "}
          <strong className="text-cyan-300">Resources</strong> tab in the
          header!
        </p>
      </motion.footer>
    </div>
  );
};

export default MainContent;
