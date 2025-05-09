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
import { BiLinkExternal } from "react-icons/bi";
import { BsPhone, BsLaptop } from "react-icons/bs";
import {
  SiKubernetes,
  SiCanva,
  SiTerraform,
  SiTailwindcss,
} from "react-icons/si";
import { MdOutlineViewInAr } from "react-icons/md";
import { TbExternalLink } from "react-icons/tb";
import { useState } from "react";

import { HiOutlineExternalLink } from "react-icons/hi";
import { FaDiscord } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MainContent = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemFade = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  const subtleHover = {
    rest: { scale: 1 },
    hover: {
      scale: 1.02,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
  };

  const linkHover = {
    rest: { x: 0 },
    hover: {
      x: 3,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
  };

  // Tech stack data
  const techStack = [
    { icon: <FaAws />, name: "AWS Cloud" },
    { icon: <FaReact />, name: "React" },
    { icon: <FaPython />, name: "Python / Boto3" },
    { icon: <SiTailwindcss />, name: "TailwindCSS" },
    { icon: <FaDocker />, name: "Docker" },
    { icon: <SiKubernetes />, name: "Kubernetes" },
    { icon: <SiTerraform />, name: "Terraform" },
  ];

  // tools stack
  const toolsStack = [
    { icon: <FaDiscord />, name: "Discord" },
    { icon: <SiCanva />, name: "Canva : Graphic Designing" },
    { icon: <FaGithub />, name: "Github / Git / Github Actions" },
    { icon: <FaLinux />, name: "Linux" },
  ];
  const [activeDevice, setActiveDevice] = useState<"desktop" | "mobile">(
    "desktop"
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const performanceData = {
    desktop: {
      scores: {
        performance: 97,
        accessibility: 89,
        bestPractices: 100,
        seo: 100,
      },
      color: "bg-green-500",
    },
    mobile: {
      scores: {
        performance: 71,
        accessibility: 88,
        bestPractices: 100,
        seo: 100,
      },
      color: "bg-yellow-500",
    },
  };

  const getCircleColor = (score: number): string => {
    if (score >= 90) return "border-green-500";
    if (score >= 50) return "border-yellow-500";
    return "border-red-500";
  };

  interface CircleFillProps {
    score: number;
  }

  const getCircleFill = (score: CircleFillProps["score"]): string => {
    if (score >= 90) return "border-green-500 text-green-500 bg-green-50";
    if (score >= 50) return "border-yellow-500 text-yellow-500 bg-yellow-50";
    return "border-red-500 text-red-500 bg-red-50";
  };

  const activeScores = performanceData[activeDevice].scores;

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
    <div className="bg-[#f3ecec] text-gray-800 min-h-screen font-sans">
      {/* Hero section with subtle animation */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 md:py-28 border-b border-gray-100"
      >
        <div className="max-w-4xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-3xl md:text-5xl font-light tracking-tight mb-4"
          >
            Hi, I'm{" "}
            <span className="font-medium text-gray-900">Kinshuk Jain</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed"
          >
            I design and deploy scalable, secure, and cost-efficient cloud
            infrastructure using modern DevOps tools — solving real-world
            problems with automation, performance, and purpose.
          </motion.p>
          <motion.div
            initial="rest"
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            whileHover="hover"
            variants={linkHover}
          >
            <Link
              to="/blogs"
              className="inline-flex items-center  p-2 bg-black rounded-md text-gray-100 font-medium transition-all duration-200 hover:border-gray-400"
            >
              <MdOutlineViewInAr className="text-lg mr-2" />
              View My blogs
            </Link>
          </motion.div>
        </div>
      </motion.header>

      <div className="max-w-4xl mx-auto px-6 py-4">
        {/* Education Section */}
        <motion.section
          className="mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl font-medium mb-12 flex items-center text-gray-900">
            <span className="w-6 h-px bg-gray-400 mr-3"></span>
            Education
          </h2>

          <motion.div className="space-y-12" variants={staggerChildren}>
            <motion.div
              variants={itemFade}
              className="relative pl-6 bg-white p-5 shadow-sm rounded-sm"
            >
              <span className="absolute left-0 top-0 w-px h-full bg-gray-200"></span>
              <span className="absolute left-0 top-0 w-1 h-1 rounded-full bg-gray-400 transform -translate-x-1/2"></span>
              <div className="flex flex-col md:flex-row md:justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    Bachelor of Technology, Electrical Engineering
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    JSS Academy of Technical Education
                  </p>
                  <p className="text-gray-500 text-xs mt-1">
                    Noida, Uttar Pradesh
                  </p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="text-gray-500 text-sm">2022 - 2026</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemFade}
              className="relative pl-6 bg-white p-5 shadow-sm rounded-sm"
            >
              <span className="absolute left-0 top-0 w-px h-full bg-gray-200"></span>
              <span className="absolute left-0 top-0 w-1 h-1 rounded-full bg-gray-400 transform -translate-x-1/2"></span>
              <div className="flex flex-col md:flex-row md:justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    Higher Secondary Education (XII)
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Sri Chaitnya Junior College
                  </p>
                  <p className="text-gray-500 text-xs mt-1">
                    Pune, Maharashtra, India
                  </p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="text-gray-500 text-sm">2020 - 2022</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Tech Stack Section */}
        <motion.section
          className="mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl font-medium mb-12 flex items-center text-gray-900">
            <span className="w-6 h-px bg-gray-400 mr-3"></span>
            Tech Stack
          </h2>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            variants={staggerChildren}
          >
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                variants={itemFade}
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="flex items-center space-x-3 py-2 px-3 bg-white rounded-sm shadow-sm"
              >
                <span className="text-gray-600 text-lg">{tech.icon}</span>
                <span className="text-sm tracking-wide text-gray-800">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          className="mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl font-medium mb-12 flex items-center text-gray-900">
            <span className="w-6 h-px bg-gray-400 mr-3"></span>
            Tools
          </h2>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            variants={staggerChildren}
          >
            {toolsStack.map((tech, index) => (
              <motion.div
                key={index}
                variants={itemFade}
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="flex items-center space-x-3 py-2 px-3 bg-white rounded-sm shadow-sm"
              >
                <span className="text-gray-600 text-lg">{tech.icon}</span>
                <span className="text-sm tracking-wide text-gray-800">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Certifications Section */}
        <motion.section
          className="mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl font-medium mb-12 flex items-center text-gray-900">
            <span className="w-6 h-px bg-gray-400 mr-3"></span>
            Cloud Certifications
          </h2>

          {/* AWS Journey Banner */}
          <motion.div
            className="mb-12 relative pl-6 py-4 bg-white rounded-sm shadow-sm"
            variants={itemFade}
          >
            <span className="absolute left-0 top-0 w-px h-full bg-gray-200"></span>
            <h3 className="text-lg font-medium flex items-center mb-3 text-gray-900">
              <FaAws className="mr-3 text-gray-700" /> My AWS Certification
              Journey
            </h3>
            <p className="text-sm text-gray-900 leading-relaxed">
              I recently scored 679/1000 on the AWS Certified Cloud Practitioner
              exam (CLF-C02). While just shy of passing, this experience has
              <span className="font-medium text-gray-900">
                {" "}
                strengthened my resolve{" "}
              </span>
              to master cloud fundamentals and accelerated my preparation for
              the more advanced Solutions Architect Associate certification by
              Q3 2025.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={staggerChildren}
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="relative pl-4 py-4 bg-white rounded-sm shadow-sm"
                variants={subtleHover}
                whileHover="hover"
                initial="rest"
              >
                <span className="absolute left-0 top-0 w-px h-full bg-gray-200"></span>
                <div className="flex items-start">
                  <FaAws className="text-gray-700 text-sm mr-2 mt-1" />
                  <h3 className="text-base text-black text-3xl font-medium">
                    {cert.title}
                  </h3>
                </div>
                <p className="mt-3 text-gray-900 font-semibold text-xs leading-relaxed">
                  {cert.description}
                </p>
                <motion.a
                  href={cert.link}
                  initial="rest"
                  whileHover="hover"
                  variants={linkHover}
                  className="text-white p-2 rounded-md bg-black  text-xs inline-flex items-center mt-3 transition-colors duration-200"
                >
                  View Certificate
                  <TbExternalLink className="ml-1 text-sm" />
                </motion.a>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          className="mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl font-medium mb-12 flex items-center text-gray-900">
            <span className="w-6 h-px bg-gray-400 mr-3"></span>
            Projects / Work
          </h2>

          {/* Project 1 */}
          <motion.div
            className="mb-16 relative pl-6 py-6 bg-white rounded-sm shadow-sm"
            variants={subtleHover}
            whileHover="hover"
            initial="rest"
          >
            <span className="absolute left-0 top-0 w-px h-full bg-gray-200"></span>
            <span className="absolute left-0 top-6 w-1 h-1 rounded-full bg-gray-400 transform -translate-x-1/2"></span>

            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-5">
              <h3 className="text-3xl font-medium mb-2 md:mb-0 text-gray-900">
                Portfolio Website
              </h3>
              <motion.a
                href="https://cloudkinshuk.in"
                whileHover={{ y: -2 }}
                className="inline-flex items-center mr-3 text-xs font-medium text-white transition-all bg-black p-2 w-max rounded-md hover:text-gray-200 "
              >
                View Live
              </motion.a>
            </div>

            <p className="text-sm text-black mb-6 leading-relaxed">
              Built and deployed a personal portfolio website using React 19,
              TypeScript, Tailwind CSS with live blog integration and full
              cloud-backed deployment.
            </p>

            <div className="md:grid md:grid-cols-2 gap-8 mt-6">
              <div>
                <h4 className="text-sm font-semibold mb-3 text-black">
                  Key Features
                </h4>
                <ul className="space-y-2 font-semibold text-xs text-gray-900">
                  <li className="flex items-start">
                    <span className="text-black mr-2">→</span>
                    Implemented responsive and dynamicsal design using Tailwind
                    CSS and React 19, ensuring a seamless experience across
                    devices
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">→</span>
                    Integrated Hashnode API for dynamic blog posts updates and
                    everyone can checkout my latest blogs from my portfolio
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">→</span>
                    Migrated from Netlify to AWS Amplify , to make it more
                    cost-effective and scalable
                  </li>
                </ul>
              </div>
              <div className="mt-6 md:mt-0">
                <h4 className="text-sm font-medium mb-3 text-black">
                  Technical Details
                </h4>
                <ul className="space-y-2 text-xs font-semibold text-black">
                  <li className="flex items-start">
                    <span className="text-black font-semibold mr-2">→</span>
                    Configured Amazon Route 53 for SSL and DNS management .
                    Route 53 Hosted zones manages my DNS and SSL Certificates
                  </li>
                  <li className="flex items-start">
                    <span className="text-black font-semibold mr-2">→</span>
                    Used AI tools like chat gpt and claude to write code and to
                    boost development efficiency
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <h4 className="text-sm font-bold text-gray-900 mb-3">
                Technologies:
              </h4>
              <div className="flex flex-wrap gap-2 mt-2">
                {[
                  "React 19",
                  "TypeScript",
                  "Tailwind CSS",
                  "AWS Amplify",
                  "Route 53",
                  "Hostinger",
                ].map((tech, index) => (
                  <motion.span
                    key={index}
                    whileHover={{ y: -2 }}
                    className="inline-block text-xs bg-yellow-100 border border-black font-bold px-3 py-1 text-gray-700 rounded-sm"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div
            className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 mb-10"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div
              className="flex flex-col md:flex-row md:justify-between md:items-start mb-5"
              variants={itemVariants}
            >
              <h3 className="text-3xl font-medium mb-2 md:mb-0 text-gray-900">
                Search Engine Optimization of My Portfolio Website
              </h3>
              <motion.a
                href="https://pagespeed.web.dev/"
                whileHover={{ y: -2 }}
                className="inline-flex items-center gap-1 text-sm font-medium text-white transition-all bg-black p-2 w-max rounded-md hover:text-gray-200"
              >
                Check Here <BiLinkExternal />
              </motion.a>
            </motion.div>

            <motion.p
              className="text-sm text-black mb-6 leading-relaxed"
              variants={itemVariants}
            >
              Built and deployed a personal portfolio website using React 19,
              TypeScript, Tailwind CSS with live blog integration and full
              cloud-backed deployment.
            </motion.p>

            <motion.div className="mb-8" variants={itemVariants}>
              <div className="flex justify-center mb-4 space-x-2">
                <button
                  onClick={() => setActiveDevice("mobile")}
                  className={`flex items-center gap-1 px-4 py-2  ${
                    activeDevice === "mobile"
                      ? "border-b-3 border-black"
                      : "text-gray-900"
                  }`}
                >
                  <BsPhone /> Mobile
                </button>
                <button
                  onClick={() => setActiveDevice("desktop")}
                  className={`flex items-center gap-1 px-4 py-2  ${
                    activeDevice === "desktop"
                      ? "border-b-3 border-black"
                      : " text-gray-900"
                  }`}
                >
                  <BsLaptop /> Desktop
                </button>
              </div>

              <div className="text-center mb-4">
                <h4 className="text-lg text-gray-700 mb-4">
                  Diagnose performance issues
                </h4>
              </div>

              <div className="flex justify-center mb-8 flex-wrap gap-8">
                <div className="text-center">
                  <div
                    className={`w-24 h-24 flex items-center justify-center rounded-full border-4 ${getCircleColor(
                      activeScores.performance
                    )}`}
                  >
                    <span className="text-2xl font-bold">
                      {activeScores.performance}
                    </span>
                  </div>
                  <p className="mt-2">Performance</p>
                </div>
                <div className="text-center">
                  <div
                    className={`w-24 h-24 flex items-center justify-center rounded-full border-4 ${getCircleColor(
                      activeScores.accessibility
                    )}`}
                  >
                    <span className="text-2xl font-bold">
                      {activeScores.accessibility}
                    </span>
                  </div>
                  <p className="mt-2">Accessibility</p>
                </div>
                <div className="text-center">
                  <div
                    className={`w-24 h-24 flex items-center justify-center rounded-full border-4 ${getCircleColor(
                      activeScores.bestPractices
                    )}`}
                  >
                    <span className="text-2xl font-bold">
                      {activeScores.bestPractices}
                    </span>
                  </div>
                  <p className="mt-2">Best Practices</p>
                </div>
                <div className="text-center">
                  <div
                    className={`w-24 h-24 flex items-center justify-center rounded-full border-4 ${getCircleColor(
                      activeScores.seo
                    )}`}
                  >
                    <span className="text-2xl font-bold">
                      {activeScores.seo}
                    </span>
                  </div>
                  <p className="mt-2">SEO</p>
                </div>
              </div>

              <div className="flex flex-col items-center mt-8">
                <div
                  className={`w-48 h-48 flex items-center justify-center rounded-full border-8 ${getCircleFill(
                    activeScores.performance
                  )}`}
                >
                  <span className="text-5xl font-bold">
                    {activeScores.performance}
                  </span>
                </div>
                <h3 className="text-2xl mt-4 mb-2">Performance</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Values are estimated and may vary. The{" "}
                  <a
                    href="https://pagespeed.web.dev/"
                    className="text-blue-500"
                  >
                    performance score is calculated
                  </a>{" "}
                  directly from these metrics.{" "}
                  <a
                    href="https://pagespeed.web.dev/"
                    className="text-blue-500"
                  >
                    See calculator
                  </a>
                  .
                </p>

                <div className="flex justify-center gap-6 mt-4">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-red-500 rounded mr-2"></div>
                    <span className="text-sm">0-49</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-yellow-500 rounded mr-2"></div>
                    <span className="text-sm">50-89</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-green-500 rounded mr-2"></div>
                    <span className="text-sm">90-100</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Project 2 */}
          <motion.div
            className="relative pl-6 py-6 bg-white rounded-sm shadow-sm"
            variants={subtleHover}
            whileHover="hover"
            initial="rest"
          >
            <span className="absolute left-0 top-0 w-px h-full bg-gray-200"></span>
            <span className="absolute left-0 top-6 w-1 h-1 rounded-full bg-gray-400 transform -translate-x-1/2"></span>

            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-5">
              <h3 className="text-3xl font-medium mb-2 md:mb-0 text-gray-900">
                Blog Page : Custom Domain || Hashnode
              </h3>
              <motion.a
                href="https://blog.cloudkinshuk.in"
                whileHover={{ y: -2 }}
                className="inline-flex items-center mr-3 text-xs font-medium text-white transition-all bg-black p-2 w-max rounded-md hover:text-gray-200 "
              >
                View Blog
              </motion.a>
            </div>

            <p className="text-sm text-black  mb-6 leading-relaxed">
              Created and deployed a fully functional tech blog using Hashnode
              as the content platform, with custom domain integration and
              professional DNS configuration.
            </p>

            <ul className="space-y-2 text-xs text-black font-semibold mb-6">
              <li className="flex items-start">
                <span className="text-black mr-2">→</span>
                Set up a developer blog with a custom domain
                (blog.cloudkinshuk.in)
              </li>
              <li className="flex items-start">
                <span className="text-black mr-2">→</span>
                Configured DNS records (A, CNAME, TXT) in Route 53 for domain
                verification and HTTPS
              </li>
              <li className="flex items-start">
                <span className="text-black mr-2">→</span>
                Publishing technical articles covering AWS, serverless
                architecture, and React development
              </li>
            </ul>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <h4 className="text-sm font-bold text-gray-900 mb-3">
                Technologies:
              </h4>
              <div className="flex flex-wrap gap-2 mt-2">
                {[
                  "Hashnode",
                  "Amazon Route 53",
                  "Hostinger",
                  "DNS Management",
                  "Custom Domain",
                  "CDN",
                ].map((tech, index) => (
                  <motion.span
                    key={index}
                    whileHover={{ y: -2 }}
                    className="inline-block text-xs bg-yellow-100 border border-black font-bold px-3 py-1 text-gray-700 rounded-sm"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.section>
      </div>


      <div className="max-w-4xl mx-auto px-6 py-8">
        {" "}
        {/* reduced py-16 to py-8 */}
        <motion.section
          id="projects"
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl font-medium mb-10 flex items-center text-gray-900">
            <span className="w-6 h-px bg-gray-400 mr-3"></span>
            Open to Collaborate / Work : 
          </h2>

          <motion.div
            className="relative pl-6 mt-4 py-6 text-lg rounded-sm shadow-sm"
            variants={subtleHover}
            whileHover="hover"
            initial="rest"
          >
            <span className="absolute left-0 top-0 w-px h-full "></span>
            <span className="absolute left-0 top-6 w-1 h-1"></span>
            <p className="text-lg text-black mb-6 leading-relaxed">
              I'm always up for connecting with learners, developers, or anyone curious about cloud, DevOps, or tech in general. Whether you're just starting or switching paths, feel free to reach out — we can learn and build together.
            </p>
          </motion.div>
        </motion.section>
      </div>

      <motion.div
        className="border-t border-gray-200 mt-12 py-16 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            {/* Left Content */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FaCode className="text-gray-800 text-lg" />
                <h3 className="text-4xl font-medium text-gray-900">
                  Fork it. Star it. Make it yours.
                </h3>
              </div>

              <p className="text-xs text-gray-600 max-w-2xl leading-relaxed">
                This portfolio is fully open-source and free to fork. Found the
                design helpful? Feel free to use or modify it for your own site.
                If it saved you time or gave you a good starting point, a ⭐
                would mean a lot. Contributions, feedback, and improvements are
                always welcome.
              </p>

              <div className="flex gap-6">
                <motion.div
                  className="flex items-center text-xs text-gray-500"
                  whileHover={{ x: 5, color: "#000" }}
                >
                  <FaStar className="text-yellow-600 mr-2" />
                  <span>Star to show love</span>
                </motion.div>
                <motion.div
                  className="flex items-center text-xs text-gray-500"
                  whileHover={{ x: 5, color: "#000" }}
                >
                  <FaCodeBranch className="text-gray-500 mr-2" />
                  <span>Fork and remix</span>
                </motion.div>
              </div>
            </div>

            {/* Right Button */}
            <motion.a
              href="https://github.com/kinshukjain01/kinshukkportfolio"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 text-gray-800 font-medium py-2 px-4 border border-gray-300 rounded-sm bg-gray-50 text-sm transition-all duration-200 hover:border-gray-800 hover:bg-gray-100"
            >
              <FaGithub className="text-lg" />
              <span>View Repository</span>
              <HiOutlineExternalLink className="text-sm" />
            </motion.a>
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-gray-50 border-t border-gray-200 py-12"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gray-600 text-sm">
            Want to explore my Thinking? Check out the{" "}
            <Link
              to="/blogs"
              className="text-gray-900 border-b border-gray-900 pb-px hover:text-gray-600 hover:border-gray-500 transition-colors duration-200"
            >
              Blogs
            </Link>{" "}
            tab in the header!
          </p>
        </div>
      </motion.footer>
    </div>
  );
};

export default MainContent;
