import { FaAws, FaDocker, FaGithub, FaLinux, FaPython, FaReact } from "react-icons/fa";
import { SiKubernetes, SiTerraform, SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";
import { useState, useEffect, ReactNode } from "react";

// Define types for technology items
type TechItem = {
  icon: ReactNode;
  name: string;
};

// Define types for project items
type certification = {
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
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  // Tech stack items
  const techStack: TechItem[] = [
    { icon: <FaAws className="text-lg" />, name: "AWS cloud" },
    { icon: <FaReact className="text-lg" />, name: "React 19" },
    { icon: <FaPython className="text-lg" />, name: "Python / Boto3" },
    { icon: <SiTailwindcss className="text-lg" />, name: "TailwindCSS" },
    { icon: <FaDocker className="text-lg" />, name: "Docker" },
    { icon: <SiKubernetes className="text-lg" />, name: "Kubernetes" },
    { icon: <SiTerraform className="text-lg" />, name: "Terraform " },
    { icon: <FaGithub className="text-lg" />, name: "GitHub Actions" },
    { icon: <FaLinux className="text-lg" />, name: "Linux, Bash" }
  ];

  // Projects data
  const certification: certification[] = [
    {
      title: "AWS Certified Cloud Practitioner",
      description: "This is my first AWS certification, which will be comming soon  till 2025 may.",
      link: "https://github.com/kinshukjainn/"
    },
    {
      title: "AWS Serverless cloud Badge",
      description: "This is my first badge from AWS Educate and i earned it by completing some amazing modules available on aws aducate / emerging talent programmes . These programmes not only teaches you about aws but also gives you some amazing small-small badges and certificates.",
      link: "https://www.credly.com/badges/0bcd1190-2d68-45ff-91d9-32b65aa93ed8/public_url"
    },
    {
      title: "AWS Machine Learning Badge",
      description: "AWS Machine Learning Badge is a recognition for completing training and assessments related to AWS machine learning services and concepts.",
      link: "https://www.credly.com/badges/a0042ec2-cc6e-4a99-84de-a1516ee5775a/public_url"
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
    <div className="bg-[#1E1E1E] text-[#F8F8F2] font-mono min-h-screen flex flex-col justify-between p-4 sm:p-6">
      <motion.div
        className="max-w-4xl mx-auto space-y-6 md:space-y-8 flex-grow w-full px-2 sm:px-4 md:px-6 lg:px-8"
        initial="hidden"
        animate={contentLoaded ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Introduction Section */}
        <motion.section
          className=" p-4 sm:p-6  shadow-lg  text-center sm:text-left overflow-hidden"
          variants={itemVariants}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#A6E22E] tracking-tight">
            Hey Folks ! Myself kinshuk here ,
          </h1>
          <p className="text-[#F92672] text-base sm:text-lg mt-2 md:mt-3">
            A cloud learner and enthusiast !
          </p>
          <div className="mt-4 flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
            <motion.a
              href="/resume.pdf"
              className="border border-[#A6E22E] px-4 py-2  font-bold shadow-md hover:bg-[#A6E22E] hover:text-black text-center transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.a>
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section
          className=" p-4 sm:p-6  shadow-lg "
          variants={itemVariants}
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-[#66D9EF]">Who am I?</h2>
          <p className="text-[#E6DB74] mt-2 text-sm sm:text-base">
            I am a cloud enthusiast with a strong foundation in AWS and cloud-native technologies. Really interested in building scalable infrastructure and cost-effective solutions for cloud native applications. I have a passion for learning and sharing knowledge, and I enjoy collaborating with teams to solve complex problems.
          </p>
        </motion.section>

        {/* Education Section */}
        <motion.section
          className=" p-4 sm:p-6  shadow-lg"
          variants={itemVariants}
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-[#66D9EF]">Education</h2>
          <p className="text-[#E6DB74] mt-2 text-sm sm:text-base">
            B.Tech at JSS Academy of Technical Education(2022-2026), Noida , Uttar Pradesh.
          </p>
        </motion.section>

        {/* Tech Stack Section with Icons */}
        <motion.section
          className=" p-4 sm:p-6  shadow-lg "
          variants={itemVariants}
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-[#66D9EF]">Tech Stack</h2>
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mt-3 text-[#E6DB74] text-sm sm:text-base">
            {techStack.map((tech, index) => (
              <motion.span
                key={index}
                className="flex items-center space-x-2   p-3 "
                whileHover={{ scale: 1.03, cursor: "pointer" }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {tech.icon} <span>{tech.name}</span>
              </motion.span>
            ))}
          </div>
        </motion.section>

        <motion.section
          className=" p-4 sm:p-6  shadow-lg"
          variants={itemVariants}
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-[#66D9EF]">Certifications</h2>
          <div className="mt-3 space-y-3 text-sm sm:text-base">
            {certification.map((certificate, index) => (
              <motion.div
                key={index}
                className=" p-3 "
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <a href={certificate.link} className="text-[#A6E22E] hover:underline font-semibold">
                  {certificate.title}
                </a>
                <p className="text-[#E6DB74] mt-1">
                  {certificate.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* project Section */}
        <motion.section
          className=" p-4 sm:p-6 shadow-lg "
          variants={itemVariants}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-[#66D9EF] mb-4">
            Projects
          </h2>
          <p className="text-[#E6DB74] mb-4 text-sm sm:text-base">These Projects are into building stage right now when they are live it will be updated here </p>
          {/* Project 1 */}
          <div className="mb-4">
            <a href="#" className="text-lg sm:text-xl font-semibold text-white hover:text-[#66D9EF] transition-colors">
              URL Shortener
            </a>
            <p className="text-[#E6DB74] mt-1 text-sm sm:text-base">
              A simple and efficient URL shortener that generates well-formatted short links.
              Built using React 19, TypeScript, and TailwindCSS.
            </p>
          </div>

          {/* Project 2 */}
          <div className="mb-4">
            <a href="#" className="text-lg sm:text-xl font-semibold text-white hover:text-[#66D9EF] transition-colors">
              PDF Converter
            </a>
            <p className="text-[#E6DB74] mt-1 text-sm sm:text-base">
              A drag-and-drop tool to convert Google Docs or Word files into PDFs and vice versa.
              Built with modern web technologies for seamless file handling.
            </p>
          </div>

          {/* Project 3 */}
          <div>
            <a href="#" className="text-lg sm:text-xl font-semibold text-white hover:text-[#66D9EF] transition-colors">
              PDF Compressor
            </a>
            <p className="text-[#E6DB74] mt-1 text-sm sm:text-base">
              A lightweight PDF compression tool that reduces file size without losing quality.
              Ideal for cloud storage optimization.
            </p>
          </div>
        </motion.section>
      </motion.div>

      <motion.footer
        className="bg-[#252526] font-semibold border-t border-[#3E3D32] p-3 sm:p-4 text-center text-[#A6E22E] mt-6 sm:mt-8 shadow-lg text-xs sm:text-sm md:text-base w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <p>Want to explore my learning journey? Check out the <strong>Resources</strong> tab in the header!</p>
      </motion.footer>

    </div>
  );
};

export default MainContent;