"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  FaGraduationCap, FaLock, FaUniversity, 
  FaCertificate, FaBookOpen
} from "react-icons/fa";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const RightContent = ({ className = "" }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`bg-gray-200 border border-gray-70 rounded-lg 0 font-poppins shadow-lg p-4 md:p-6  w-full lg:w-1/2 flex-shrink-0 max-w-3xl mx-auto lg:mx-0 ${className}`}
    >
      {loading ? (
        <div className="animate-pulse">
          <div className="h-6 w-32 bg-gray-300 rounded mb-3"></div>
          <div className="h-4 w-full bg-gray-300 rounded mb-3"></div>
          <div className="h-4 w-2/3 bg-gray-300 rounded mb-6"></div>
          <div className="h-6 w-32 bg-gray-300 rounded mb-3"></div>
          <div className="h-4 w-full bg-gray-300 rounded mb-3"></div>
          <div className="h-4 w-2/3 bg-gray-300 rounded"></div>
        </div>
      ) : (
        <>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.5 }}
            className="text-3xl font-semibold mb-3 text-purple-800 flex items-center gap-3"
          >
            Hey Folks!! 🚀
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-black leading-relaxed text-base md:text-lg"
          >
            My name is <span className="font-bold text-gray-800">Kinshuk Jain</span>. 
            I am passionate about <span className="text-gray-800 font-medium">Cloud Computing, Infrastructure as Code, and Cybersecurity.</span>  
            I specialize in designing scalable cloud architectures and secure infrastructures. 
            I believe cloud is not just about tools—it's about <span className="font-semibold text-gray-800">mindset, optimization, and automation</span>.
          </motion.p>
          <div className="my-4 border-t border-gray-600"></div>

          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl font-semibold mb-3 text-purple-800 flex items-center gap-3"
          >
            <FaGraduationCap className="text-4xl text-black" />
            <MdOutlineKeyboardDoubleArrowRight className="text-purple-800 text-4xl" /> Education
          </motion.h2>
          <motion.ul 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-3 text-black text-base md:text-lg"
          >
            <li className="flex items-center gap-3">
              <FaUniversity className="text-3xl text-black" /> 
              Pursuing B.Tech in Electrical Engineering at JSS Academy of Technical Education, Noida.
            </li>
            <li className="flex items-center gap-3">
              <FaBookOpen className="text-3xl text-black" /> 
              Actively expanding expertise in <span className="font-semibold">Cloud Computing and DevOps Automation</span>.
            </li>
          </motion.ul>
          <div className="my-4 border-t border-gray-600"></div>
          <motion.h2 
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.5, delay: 0.4 }}
  className="text-2xl font-semibold mb-3 text-purple-800 flex items-center gap-3"
>
  <FaCertificate className="text-2xl text-black" />
  <MdOutlineKeyboardDoubleArrowRight className="text-black text-4xl" /> Certifications
</motion.h2>
<motion.ul 
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.5 }}
  className="space-y-3 text-black text-base md:text-lg"
>
  <li className="flex flex-col gap-2">
    <div className="flex items-center gap-3">
      <FaLock className="text-2xl text-black" /> 
      <span>AWS Certified Cloud Practitioner (CLF-C02) – Attempted, Preparing for Retake</span>
    </div>
    <div className="pl-9 text-sm text-gray-800">
      <p><span className="font-semibold">First Attempt:</span> January 24 2025</p>
      <p><span className="font-semibold">Score:</span> 679/1000 (Passing: 700)</p>
    </div>
  </li>
  <li className="flex items-center gap-3">
    <FaLock className="text-2xl text-black" /> 
    AWS Certified Solutions Architect – Associate (Upcoming)
  </li>
  <li className="flex items-center gap-3">
    <FaLock className="text-2xl text-black" /> 
    AWS Certified Solutions Architect – Professional (Upcoming)
  </li>
</motion.ul>

        </>
      )}
    </motion.div>
  );
};

export default RightContent;