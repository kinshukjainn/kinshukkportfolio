import { FaAws, FaDocker, FaGithub, FaLinux, FaReact } from "react-icons/fa";
import { SiKubernetes, SiTerraform, SiTailwindcss, SiTypescript } from "react-icons/si";
import { motion } from "framer-motion";
import { useState, useEffect, ReactNode } from "react";

// Define types for technology items
type TechItem = {
  icon: ReactNode;
  name: string;
};

// Define types for project items
type ProjectItem = {
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
    { icon: <FaAws className="text-lg" />, name: "AWS" },
    { icon: <FaReact className="text-lg" />, name: "React 19, Next.js" },
    { icon: <SiTypescript className="text-lg" />, name: "TypeScript" },
    { icon: <SiTailwindcss className="text-lg" />, name: "TailwindCSS" },
    { icon: <FaDocker className="text-lg" />, name: "Docker" },
    { icon: <SiKubernetes className="text-lg" />, name: "Kubernetes" },
    { icon: <SiTerraform className="text-lg" />, name: "Terraform, CI/CD" },
    { icon: <FaGithub className="text-lg" />, name: "GitHub Actions" },
    { icon: <FaLinux className="text-lg" />, name: "Linux, Bash" }
  ];

  // Projects data
  const projects: ProjectItem[] = [
    {
      title: "AWS Serverless Portfolio",
      description: "A serverless app deployed on AWS.",
      link: "#"
    },
    {
      title: "Kubernetes CI/CD Pipeline",
      description: "Automated deployment using ArgoCD.",
      link: "#"
    },
    {
      title: "Penetration Testing Toolkit",
      description: "Security tools for cloud environments.",
      link: "#"
    }
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
          className="bg-[#252526] p-4 sm:p-6 rounded-lg shadow-lg border border-[#3E3D32] text-center sm:text-left overflow-hidden"
          variants={itemVariants}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#A6E22E] tracking-tight">
            Hello, I'm Kinshuk Jain
          </h1>
          <p className="text-[#F92672] text-base sm:text-lg mt-2 md:mt-3">
            A passionate AWS enthusiast, cloud architect, and full-stack developer.
          </p>
          <div className="mt-4 flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
            <motion.a 
              href="#contact" 
              className="bg-[#A6E22E] text-black px-4 py-2 rounded-lg font-semibold shadow-md hover:bg-[#B6F53E] text-center transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Hire Me
            </motion.a>
            <motion.a 
              href="/resume.pdf" 
              className="border border-[#A6E22E] px-4 py-2 rounded-lg font-semibold shadow-md hover:bg-[#A6E22E] hover:text-black text-center transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.a>
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section 
          className="bg-[#252526] p-4 sm:p-6 rounded-lg shadow-lg border border-[#3E3D32]"
          variants={itemVariants}
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-[#66D9EF]">Who am I?</h2>
          <p className="text-[#E6DB74] mt-2 text-sm sm:text-base">
            I specialize in cloud computing, cybersecurity, and scalable web application development.
            With a strong background in AWS solutions, I architect and implement robust infrastructures
            ensuring performance, security, and cost efficiency.
          </p>
        </motion.section>

        {/* Education Section */}
        <motion.section 
          className="bg-[#252526] p-4 sm:p-6 rounded-lg shadow-lg border border-[#3E3D32]"
          variants={itemVariants}
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-[#66D9EF]">Education</h2>
          <p className="text-[#E6DB74] mt-2 text-sm sm:text-base">
            B.Tech in Electrical Engineering at JSS Academy of Technical Education, Noida.
          </p>
        </motion.section>

        {/* Tech Stack Section with Icons */}
        <motion.section 
          className="bg-[#252526] p-4 sm:p-6 rounded-lg shadow-lg border border-[#3E3D32]"
          variants={itemVariants}
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-[#66D9EF]">Tech Stack</h2>
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mt-3 text-[#E6DB74] text-sm sm:text-base">
            {techStack.map((tech, index) => (
              <motion.span 
                key={index} 
                className="flex items-center space-x-2 bg-[#2A2A2A] p-2 rounded-md"
                whileHover={{ scale: 1.03, backgroundColor: "#303030" }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {tech.icon} <span>{tech.name}</span>
              </motion.span>
            ))}
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section 
          className="bg-[#252526] p-4 sm:p-6 rounded-lg shadow-lg border border-[#3E3D32]"
          variants={itemVariants}
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-[#66D9EF]">Projects</h2>
          <div className="mt-3 space-y-3 text-sm sm:text-base">
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                className="bg-[#2A2A2A] p-3 rounded-md"
                whileHover={{ scale: 1.02, backgroundColor: "#303030" }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <a href={project.link} className="text-[#A6E22E] hover:underline font-semibold">
                  {project.title}
                </a>
                <p className="text-[#E6DB74] mt-1">
                  {project.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section 
          className="bg-[#252526] p-4 sm:p-6 rounded-lg shadow-lg border border-[#3E3D32]"
          variants={itemVariants}
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-[#66D9EF]">Experience</h2>
          <p className="text-[#E6DB74] mt-2 text-sm sm:text-base">
            I have hands-on experience in deploying and managing cloud-native applications,
            automating infrastructure with Infrastructure as Code (IaC), and ensuring application security.
            I actively contribute to open-source projects and enjoy mentoring developers.
          </p>
        </motion.section>
      </motion.div>

      {/* Footer */}
      <motion.footer 
        className="bg-[#252526] border-t border-[#3E3D32] p-3 sm:p-4 text-center text-[#A6E22E] mt-6 sm:mt-8 rounded-lg shadow-lg text-xs sm:text-sm md:text-base w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <p>&copy; 2025 Kinshuk Jain. All rights reserved.</p>
      </motion.footer>
    </div>
  );
};

export default MainContent;