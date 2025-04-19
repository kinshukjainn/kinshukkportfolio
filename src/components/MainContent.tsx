import { FaAws, FaDocker, FaGithub, FaLinux, FaPython, FaReact } from "react-icons/fa";
import { SiKubernetes, SiTerraform, SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";
import { useState, useEffect, ReactNode } from "react";
import kinshuk from "../assets/kinshukjain_resume.pdf"; 

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

  // Particles animation effect for background
  const [particles, setParticles] = useState<{ x: number; y: number; size: number; vx: number; vy: number }[]>([]);
  
  useEffect(() => {
    const createParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 30; i++) {
        newParticles.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 3 + 1,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5
        });
      }
      setParticles(newParticles);
    };

    createParticles();
    
    const updateParticles = setInterval(() => {
      setParticles(prevParticles => 
        prevParticles.map(particle => ({
          ...particle,
          x: (particle.x + particle.vx + window.innerWidth) % window.innerWidth,
          y: (particle.y + particle.vy + window.innerHeight) % window.innerHeight
        }))
      );
    }, 50);
    
    return () => clearInterval(updateParticles);
  }, []);

  // Tech stack items
  const techStack: TechItem[] = [
    { icon: <FaAws className="text-2xl" />, name: "AWS cloud" },
    { icon: <FaReact className="text-2xl" />, name: "React 19" },
    { icon: <FaPython className="text-2xl" />, name: "Python / Boto3" },
    { icon: <SiTailwindcss className="text-2xl" />, name: "TailwindCSS" },
    { icon: <FaDocker className="text-2xl" />, name: "Docker" },
    { icon: <SiKubernetes className="text-2xl" />, name: "Kubernetes" },
    { icon: <SiTerraform className="text-2xl" />, name: "Terraform " },
    { icon: <FaGithub className="text-2xl" />, name: "GitHub Actions" },
    { icon: <FaLinux className="text-2xl" />, name: "Linux, Bash" }
  ];

  // Certifications data
  const certifications: Certification[] = [
    {
      title: "AWS Certified Cloud Practitioner",
      description: "Foundation-level certification validating my cloud fluency and basic AWS knowledge. Will be completed by May 2025 as part of my professional cloud journey roadmap.",
      link: "https://github.com/kinshukjainn/"
    },
    {
      title: "AWS Serverless Cloud Badge",
      description: "Specialized recognition for proficiency in serverless architecture patterns, Lambda functions, API Gateway, and DynamoDB. Earned through AWS Educate emerging talent program.",
      link: "https://www.credly.com/badges/0bcd1190-2d68-45ff-91d9-32b65aa93ed8/public_url"
    },
    {
      title: "AWS Machine Learning Badge",
      description: "Validation of skills in AWS ML services including SageMaker, Comprehend, and Rekognition. Demonstrates ability to implement cloud-based machine learning solutions.",
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
              transition: { repeat: Infinity, duration: 2, ease: "linear" }
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
            Hey Folks ! Myself kinshuk here ,
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl mt-2 md:mt-3 text-cyan-400 font-semibold"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
          >
            A cloud architect and DevOps enthusiast !
          </motion.p>
          <div className="mt-6 flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
            <motion.a
              href={kinshuk}
              className="group relative px-6 py-3 font-bold overflow-hidden rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg transition-all duration-300 hover:scale-105"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Download Resume</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </motion.a>
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section
          className="backdrop-blur-sm bg-gray-900/70 p-6 sm:p-8 rounded-xl shadow-2xl border border-gray-800"
          variants={itemVariants}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">Who am I?</h2>
          <p className="text-gray-300 mt-4 text-sm sm:text-base leading-relaxed">
            I am a cloud enthusiast with a strong foundation in AWS and cloud-native technologies. Really interested in building scalable infrastructure and cost-effective solutions for cloud native applications. I have a passion for learning and sharing knowledge, and I enjoy collaborating with teams to solve complex problems. You know i am really excited to handle complex problems and build scalable solutions for cloud native applications. I am also a big fan of open-source projects as they are free and open to all. I am always looking for opportunities to learn and grow in the field of cloud computing and DevOps. 

            As i am exploring aws and different tools of deveops it not only making me eager to design as cost effective and simple but complex archietecture to scale the application and make it more reliable and usefull to the community and the across the world. As we are moving forwards towards AI ( Artificial Intelligence) and ML (Machine Learning) , my vision or purpose is to make deployment and CI/CD more automated and reliable to all the systems . This can make huge impact as we will be able to deploy the apps and features more fast and reliable to the end users and the customers.
          </p>
        </motion.section>

        {/* Education Section */}
        <motion.section
          className="backdrop-blur-sm bg-gray-900/70 p-6 sm:p-8 rounded-xl shadow-2xl border border-gray-800"
          variants={itemVariants}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">Education</h2>
          <div className="flex items-center mt-4">
            <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></div>
            <p className="text-gray-300 text-sm sm:text-base">
              B.Tech at JSS Academy of Technical Education (2022-2026), Noida, Uttar Pradesh
            </p>
          </div>
        </motion.section>

        {/* Tech Stack Section with Icons */}
        <motion.section
          className="backdrop-blur-sm bg-gray-900/70 p-6 sm:p-8 rounded-xl shadow-2xl border border-gray-800"
          variants={itemVariants}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent mb-4">Tech Stack</h2>
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 mt-4 text-gray-300 text-sm sm:text-base">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-3 p-4 rounded-lg bg-gray-800/60 backdrop-blur-sm border border-gray-700 hover:border-cyan-500/50 transition-all"
                whileHover={{ scale: 1.03, backgroundColor: "rgba(8, 145, 178, 0.1)" }}
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
          <h2 className="text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent mb-4">Cloud Certifications</h2>
          <div className="mt-4 space-y-4 text-sm sm:text-base">
            {certifications.map((certificate, index) => (
              <motion.div
                key={index}
                className="p-4 rounded-lg bg-gray-800/60 backdrop-blur-sm border border-gray-700 hover:border-cyan-500/50 transition-all"
                whileHover={{ scale: 1.02, backgroundColor: "rgba(8, 145, 178, 0.1)" }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <a href={certificate.link} className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center">
                  <FaAws className="mr-2" /> {certificate.title}
                </a>
                <p className="text-gray-300 mt-2">
                  {certificate.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          className="backdrop-blur-sm bg-gray-900/70 p-6 sm:p-8 rounded-xl shadow-2xl border border-gray-800"
          variants={itemVariants}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent mb-4">
            Cloud Projects
          </h2>
          <p className="text-gray-400 mb-6 text-sm sm:text-base">Current projects in development - updates coming soon</p>
          
          {/* Project 1 */}
          <div className="p-4 rounded-lg bg-gray-800/60 backdrop-blur-sm border border-gray-700 hover:border-cyan-500/50 transition-all">
            <a href="https://blog.cloudkinshuk.in" className="text-lg sm:text-xl font-semibold text-cyan-400 hover:text-cyan-300 transition-colors flex items-center">
              <span className="w-2 h-10 bg-gradient-to-b from-cyan-400 to-blue-500 rounded mr-3"></span>
              Cloud Architecture Blog
            </a>
            <p className="text-gray-300 mt-3 text-sm sm:text-base">
              A specialized technical blog featuring deep-dives into serverless architectures, AWS cloud patterns, and infrastructure-as-code best practices. Designed with a cloud engineer focus, it includes migration case studies, cost optimization techniques, and DevOps automation workflows. Deployed on a globally distributed CDN with Hashnode's platform for optimal performance.
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="px-2 py-1 text-xs rounded-full bg-blue-900/60 text-blue-300 border border-blue-700">AWS</span>
              <span className="px-2 py-1 text-xs rounded-full bg-blue-900/60 text-blue-300 border border-blue-700">CDN</span>
              <span className="px-2 py-1 text-xs rounded-full bg-blue-900/60 text-blue-300 border border-blue-700">Hashnode</span>
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
        <p>Want to explore my learning journey? Check out the <strong className="text-cyan-300">Resources</strong> tab in the header!</p>
      </motion.footer>
    </div>
  );
};

export default MainContent;