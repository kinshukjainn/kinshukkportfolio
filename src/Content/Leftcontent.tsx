"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  FaAws, FaSlack, FaDocker, FaPython, FaGitAlt, FaDiscord, FaGithub 
} from "react-icons/fa";
import { SiKubernetes, SiTerraform } from "react-icons/si";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { TbAutomation } from "react-icons/tb";

const LeftContent = ({ className = "" }) => {
  const [loading, setLoading] = useState(true);

  // Simulating content loading
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000); // Simulating a delay
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`bg-gray-200 border border-gray-800 font-inter hover:shadow-lg p-4 md:p-6 w-full max-w-3xl mx-auto lg:mx-0 ${className}`}
    >
      {loading ? (
        // **Skeleton Loader**
        <div className="animate-pulse">
          <div className="h-6 w-32 bg-gray-300 rounded mb-3"></div>
          <div className="h-4 w-full bg-gray-300 rounded mb-3"></div>
          <div className="h-4 w-full bg-gray-300 rounded mb-3"></div>
          <div className="h-4 w-2/3 bg-gray-300 rounded mb-6"></div>
          <div className="h-6 w-32 bg-gray-300 rounded mb-3"></div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-10 bg-gray-300 rounded"></div>
            ))}
          </div>
        </div>
      ) : (
        <>
          {/* About Me Section */}
          <motion.h2 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.5 }}
            className="text-xl font-semibold mb-3 pb-2 border-b border-gray-600 text-purple-800 flex items-center gap-2"
          >
            <MdOutlineKeyboardDoubleArrowRight className="text-black text-3xl" /> About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.7 }}
            className="text-black leading-relaxed text-base md:text-lg"
          >
            Hey there! I'm <span className="font-semibold text-blue-500">Kinshuk Jain</span>, 
            passionate about building scalable cloud architectures and securing cloud infrastructure.
            My expertise lies in AWS, infrastructure automation, and cybersecurity.
            I thrive on optimizing cloud environments, automating deployments, and implementing security best practices.
          </motion.p>

          <div className="my-4 border-t border-gray-600"></div>

          {/* Tech Stack Section */}
          <motion.h2 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl font-semibold mb-3 pb-2 border-b border-gray-600 text-purple-800 flex items-center gap-2"
          >
            <MdOutlineKeyboardDoubleArrowRight className="text-black text-3xl" /> Tech Stack
          </motion.h2>
          <motion.ul 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-black text-lg md:text-xl"
          >
            <li className="flex items-center gap-3"><FaAws className="text-black text-3xl" /> AWS Cloud</li>
            <li className="flex items-center gap-3"><FaDocker className="text-black text-3xl" /> Docker</li>
            <li className="flex items-center gap-3"><SiKubernetes className="text-black text-3xl" /> Kubernetes</li>
            <li className="flex items-center gap-3"><SiTerraform className="text-black text-3xl" /> Terraform</li>
            <li className="flex items-center gap-3"><FaPython className="text-black text-3xl" /> Python</li>
            <li className="flex items-center gap-3"><TbAutomation className="text-black text-3xl" /> Boto3</li>
          </motion.ul>

          <div className="my-4 border-t border-gray-600"></div>

          {/* Tools & Collaboration Section */}
          <motion.h2 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl font-semibold mb-3 pb-2 border-b border-gray-600 text-purple-800 flex items-center gap-2"
          >
            <MdOutlineKeyboardDoubleArrowRight className="text-black text-3xl" /> Tools & Collaboration
          </motion.h2>
          <motion.ul 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-black text-lg md:text-xl"
          >
            <li className="flex items-center gap-3"><FaGitAlt className="text-black text-3xl" /> Git</li>
            <li className="flex items-center gap-3"><FaGithub className="text-black text-3xl" /> GitHub</li>
            <li className="flex items-center gap-3"><FaSlack className="text-black text-3xl" /> Slack</li>
            <li className="flex items-center gap-3"><FaDiscord className="text-black text-3xl" /> Discord</li>
          </motion.ul>
        </>
      )}
    </motion.div>
  );
};

export default LeftContent;
