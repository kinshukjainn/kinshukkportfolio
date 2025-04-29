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

  // Enhanced floating dots animation effect
  const [particles, setParticles] = useState<
    {
      x: number;
      y: number;
      size: number;
      vx: number;
      vy: number;
      color: string;
    }[]
  >([]);

  useEffect(() => {
    // Enhanced color palette with blue and yellow/orange tones
    const colors = [
      "#3B82F6",
      "#1E40AF",
      "#FFCA28",
      "#FF8F00",
      "#F59E0B",
      "#0EA5E9",
    ];
    const createParticles = () => {
      const newParticles = [];
      // Increased number of particles for better visual effect
      for (let i = 0; i < 60; i++) {
        newParticles.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 5 + 1,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          color: colors[Math.floor(Math.random() * colors.length)] || "#FFFFFF",
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

    // Handle window resize
    const handleResize = () => {
      createParticles();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      clearInterval(updateParticles);
      window.removeEventListener("resize", handleResize);
    };
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
        "Validation of skills in AWS ML services including SageMaker, Comprehend, and Rekognition. This badge showcases my understanding of machine learning concepts and AWS tools. Earned through AWS Educate emerging talent program.",
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
    <div className="bg-gradient-to-br font-poppins from-grey-950 to-gray-950 text-gray-100 min-h-screen w-full flex flex-col justify-between relative overflow-hidden">
      {/* Enhanced animated particles background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-20"
            style={{
              width: particle.size,
              height: particle.size,
              left: particle.x,
              top: particle.y,
              backgroundColor: particle.color,
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

      {/* Header with full width splash */}
      <motion.header
        className="w-full bg-gradient-to-r from-grey-900 to-black/90 backdrop-blur-lg shadow-2xl py-16 px-4 sm:px-8 md:px-12 lg:px-16 mb-6 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-l from-red-100 to-orange-500 bg-clip-text text-transparent tracking-tight text-center sm:text-left"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
          >
            Hi everyone! Myself Kinshuk Jain
          </motion.h1>
          <motion.p
            className="text-xl sm:text-2xl mt-4 md:mt-6 text-yellow-400 font-semibold text-center sm:text-left"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
          >
           Love building cost effective , secure and scalable cloud solutions. I enjoy solving real-world problems that make a meaningful impact and add value to society
          </motion.p>
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mt-6 mx-auto sm:mx-0"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
        </div>
      </motion.header>

      <motion.div
        className="max-w-7xl mx-auto space-y-8 md:space-y-10 flex-grow w-full px-4 sm:px-8 md:px-12 lg:px-16 pb-16 relative z-10"
        initial="hidden"
        animate={contentLoaded ? "visible" : "hidden"}
        variants={containerVariants}
      >

        {/* Education Section */}
        <motion.section
          className="backdrop-blur-lg bg-gradient-to-br from-grey-900 to-black/90 p-6 sm:p-8 rounded-xl shadow-2xl"
          variants={itemVariants}
        >
          <h2 className="text-2xl sm:text-3xl font-mono font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-6">
            Education
          </h2>

          {/* Main Degree */}
          <div className="mb-8 pl-6 border-l-2 border-yellow-400/60">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2">
              <h3 className="text-xl font-medium text-white">
                Bachelor of Technology, Electrical Engineering
              </h3>
              <span className="text-yellow-400 text-sm font-semibold bg-blue-900/50 px-3 py-1 rounded-full self-start sm:self-auto">
                2022 - 2026
              </span>
            </div>
            <p className="text-gray-300 mt-2">
              JSS Academy of Technical Education
            </p>
            <p className="text-gray-400 text-sm italic">Noida, Uttar Pradesh</p>
          </div>

          {/* Secondary Education */}
          <div className="pl-6 border-l-2 border-blue-300/60">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2">
              <h3 className="text-lg font-medium text-white">
                Higher Secondary Education (XII)
              </h3>
              <span className="text-blue-300 text-sm font-semibold bg-blue-900/50 px-3 py-1 rounded-full self-start sm:self-auto">
                2020 - 2022
              </span>
            </div>
            <p className="text-gray-300 mt-2">Sri Chaitnya Junior College</p>
            <p className="text-gray-400 text-sm italic">
              Pune Maharashtra, India
            </p>
          </div>
        </motion.section>

        {/* Tech Stack Section with Icons - Enhanced with larger grid layout */}
        <motion.section
          className="backdrop-blur-lg bg-gradient-to-br from-grey-900 to-black/90 p-6 sm:p-8 rounded-xl shadow-2xl mt-8"
          variants={itemVariants}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold font-mono bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-6">
            Tech Stack
          </h2>
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mt-6 text-gray-300 text-sm sm:text-base">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                className="flex items-center font-mono space-x-3 p-4 rounded-lg bg-gradient-to-r from-black via-grey-800 to-slate-900 backdrop-blur-xl border border-gray-800/30 hover:border-yellow-500/30 transition-all"
                whileHover={{
                  scale: 1.03,
                  backgroundColor: "rgba(245, 158, 11, 0.1)",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className="text-yellow-500 text-lg">{tech.icon}</span>
                <span>{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Certifications Section */}
        <motion.section
          className="backdrop-blur-lg from-grey-900 to-black/90 p-6 sm:p-8 rounded-xl shadow-2xl "
          variants={itemVariants}
        >
          <h2 className="text-2xl font-mono sm:text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-6">
            Cloud Certifications
          </h2>

          {/* AWS Journey Banner - Enhanced */}
          <div className="p-6 rounded-4xl bg-gradient-to-r from-black via-grey-800 to-slate-900 backdrop-blur-xl  mb-8">
            <h3 className="text-yellow-400 font-medium flex items-center mb-3 text-lg">
              <FaAws className="mr-3 text-xl" /> My AWS Certification Journey
            </h3>
            <p className="text-gray-300 text-sm sm:text-base italic  pl-4">
              I recently scored 679/1000 on the AWS Certified Cloud Practitioner
              exam (CLF-C02). While just shy of passing, this experience has{" "}
              <span className="text-yellow-300 font-medium">
                strengthened my resolve
              </span>{" "}
              to master cloud fundamentals and accelerated my preparation for
              the more advanced Solutions Architect Associate certification by
              Q3 2025.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm sm:text-base">
            {certifications.map((certificate, index) => (
              <motion.div
                key={index}
                className="p-5 rounded-4xl bg-gradient-to-r from-black via-grey-800 to-slate-900 backdrop-blur-xl transition-all h-full flex flex-col"
                whileHover={{
                  scale: 1.02,
                  backgroundColor: "rgba(4, 4, 4, 0.3)",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <a
                  href={certificate.link}
                  className="text-yellow-400 hover:text-yellow-300  font-semibold flex items-center text-lg mb-3"
                >
                  <FaAws className="mr-2" /> {certificate.title}
                </a>
                <p className="text-gray-300 flex-grow">
                  {certificate.description}
                </p>
                <div className="mt-3 pt-3 ">
                  <a
                    href={certificate.link}
                    className="text-white hover:text-blue-200 p-2 bg-blue-500 w-max rounded-4xl text-lg flex items-center"
                    title={`View details for ${certificate.title}`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Projects Section - Redesigned with full-width cards */}
        <motion.section
          className="bg-grey-900 backdrop-blur-lg   p-6 sm:p-8 rounded-xl shadow-2xl"
          variants={itemVariants}
        >
          <h2 className="text-2xl sm:text-3xl font-mono font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-3">
            Cloud Projects
          </h2>
          <p className="text-gray-400 mb-8 text-sm sm:text-base">
            Current projects are completed and deployed using AWS ( Amazon Web Services)
          </p>

          {/* Project 1 - Enhanced with better visual hierarchy */}
          <div className="p-6 rounded-4xl bg-gradient-to-r from-black via-grey-800 to-slate-900 backdrop-blur-xl transition-all mb-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
              <a
                href="https://cloudkinshuk.in"
                className="text-xl sm:text-2xl font-semibold text-yellow-400 hover:text-yellow-300 transition-colors flex items-center"
              >
                <span className="w-2 h-10 bg-gradient-to-b from-yellow-400 to-orange-500 rounded mr-3"></span>
                Portfolio Website
              </a>

              <a
                href="https://cloudkinshuk.in"
                className="mt-3 sm:mt-0 px-4 py-2 bg-blue-700/50 hover:bg-blue-600/50 text-white rounded-md text-sm flex items-center transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                View Live
              </a>
            </div>

            <div className="text-gray-300 space-y-4 text-sm sm:text-base">
              <p className="text-lg text-white">
                Built and deployed a personal portfolio website using React 19,
                TypeScript, Tailwind CSS, and Framer Motion with live blog
                integration and full cloud-backed deployment.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mt-6">
                <ul className="space-y-3 pl-5 list-disc text-gray-300">
                  <li>
                    Implemented smooth animations and responsive UI using Framer
                    Motion and Tailwind CSS
                  </li>
                  <li>
                    Integrated Hashnode API to dynamically fetch and display
                    blog posts, enabling real-time updates
                  </li>
                  <li>
                    Migrated from Netlify to AWS Amplify for faster build times,
                    better scalability and improved CI/CD
                  </li>
                </ul>
                <ul className="space-y-3 pl-5 list-disc text-gray-300">
                  <li>
                    Configured custom domain with Route 53 for SSL certificates
                    and robust DNS management
                  </li>
                  <li>
                    Leveraged AI tools like Claude and ChatGPT to boost
                    development efficiency
                  </li>
                  <li>
                    Implemented dark mode and accessibility features for
                    improved user experience
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white">
              <h4 className="text-sm font-medium text-gray-400 mb-3">
                Technologies Used:
              </h4>
              <div className="flex flex-wrap font-mono font-semibold gap-2">
                <span className="px-3 py-1 text-xs rounded-4xl  bg-black  text-yellow-300 ">
                  React 19
                </span>
                <span className="px-3 py-1 text-xs rounded-4xl  bg-black  text-yellow-300">
                  TypeScript
                </span>
                <span className="px-3 py-1 text-xs rounded-4xl  bg-black  text-yellow-300 ">
                  Tailwind CSS
                </span>
                <span className="px-3 py-1 text-xs rounded-4xl bg-black text-yellow-300 ">
                  Framer Motion
                </span>
                <span className="px-3 py-1 text-xs rounded-4xl bg-black text-yellow-300 ">
                  AWS Amplify
                </span>
                <span className="px-3 py-1 text-xs rounded-4xl bg-black text-yellow-300 ">
                  Route 53
                </span>
                <span className="px-3 py-1 text-xs rounded-4xl bg-black text-yellow-300 ">
                  Hostinger
                </span>
              </div>
            </div>
          </div>

          {/* Project 2 - Enhanced with better visual hierarchy */}
          <div className="p-6 rounded-4xl bg-gradient-to-r from-black via-grey-800 to-slate-900 backdrop-blur-xl transition-all">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
              <a
                href="https://blog.cloudkinshuk.in"
                className="text-xl sm:text-2xl font-semibold text-yellow-400 hover:text-yellow-300 transition-colors flex items-center"
              >
                <span className="w-2 h-10 bg-gradient-to-b from-yellow-400 to-orange-500 rounded mr-3"></span>
                Cloud Architecture Blog
              </a>

              <a
                href="https://blog.cloudkinshuk.in"
                className="mt-3 sm:mt-0 px-4 py-2 bg-blue-700/50 hover:bg-blue-600/50 text-white rounded-md text-sm flex items-center transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                View Blog
              </a>
            </div>

            <div className="text-gray-300 space-y-4 text-sm sm:text-base">
              <p className="text-lg text-white">
                Created and deployed a fully functional tech blog using Hashnode
                as the content platform, with custom domain integration and
                professional DNS configuration.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mt-6">
                <ul className="space-y-3 pl-5 list-disc text-gray-300">
                  <li>
                    Set up a developer blog with a custom domain
                    (blog.cloudkinshuk.in)
                  </li>
                  <li>
                    Configured DNS records (A, CNAME, TXT) in Route 53 for
                    domain verification and HTTPS
                  </li>
                  <li>
                    Integrated domain management across different providers
                    (Hostinger + AWS)
                  </li>
                  <li>
                    Published technical articles covering AWS, serverless
                    architecture, and React development
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-blue-800/50">
              <h4 className="text-sm font-medium text-gray-400 mb-3">
                Technologies Used:
              </h4>
              <div className="flex flex-wrap font-mono font-semibold gap-2">
                <span className="px-3 py-1 text-xs rounded-4xl bg-black text-yellow-300 ">
                  Hashnode
                </span>
                <span className="px-3 py-1 text-xs rounded-4xl bg-black text-yellow-300 ">
                  Amazon Route 53
                </span>
                <span className="px-3 py-1 text-xs rounded-4xl bg-black text-yellow-300 ">
                  Hostinger
                </span>
                <span className="px-3 py-1 text-xs rounded-4xl bg-black text-yellow-300 ">
                  DNS Management
                </span>
                <span className="px-3 py-1 text-xs rounded-4xl bg-black text-yellow-300 ">
                  Custom Domain
                </span>
                <span className="px-3 py-1 text-xs rounded-4xl bg-black text-yellow-300 ">
                  CDN
                </span>
              </div>
            </div>
          </div>
        </motion.section>
      </motion.div>

      <motion.footer
        className="backdrop-blur-lg bg-gradient-to-r from-blue-900/80 to-black/90 border-t border-blue-800/50 py-6 px-4 sm:px-8 md:px-12 lg:px-16 text-center text-yellow-400 mt-6 sm:mt-8 shadow-lg text-sm sm:text-base w-full relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <div className="max-w-7xl mx-auto">
          <p className="font-medium">
            Want to explore my learning journey? Check out the{" "}
            <strong className="text-yellow-300 underline">Resources</strong> tab
            in the header!
          </p>
          <div className="mt-3 text-blue-300 text-sm">
            © 2025 Kinshuk Jain | Cloud Architect & DevOps Engineer
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default MainContent;
