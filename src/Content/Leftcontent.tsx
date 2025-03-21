"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FaGraduationCap, FaLock, FaUniversity,
  FaCertificate, FaBookOpen
} from "react-icons/fa";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const LeftContent = ({ className = "" }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`bg-gradient-to-br from-gray-900 via-gray-800 to-black border border-gray-700 rounded-3xl shadow-xl shadow-blue-500/20 p-6 w-full lg:w-1/2 max-w-3xl mx-auto lg:mx-0 ${className}`}
    >
      {loading ? (
        <div className="animate-pulse">
          <div className="h-6 w-32 bg-gray-600 rounded mb-3"></div>
          <div className="h-4 w-full bg-gray-600 rounded mb-3"></div>
          <div className="h-4 w-2/3 bg-gray-600 rounded mb-6"></div>
        </div>
      ) : (
        <>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-3 text-transparent bg-gradient-to-r from-blue-500 via-red-500 to-green-400 bg-clip-text tracking-wide flex items-center gap-3"
          >
            Hey Folks!! 🚀
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-gray-300 leading-relaxed text-lg"
          >
            My name is <span className="font-bold text-white">Kinshuk Jain</span>.
            I am passionate about <span className="text-blue-400 font-medium">Cloud Computing, Infrastructure as Code, and Cybersecurity.</span>
            I specialize in designing scalable cloud architectures and secure infrastructures.
            Cloud is not just about tools—it’s about <span className="font-semibold text-purple-400">mindset, optimization, and automation</span>.
          </motion.p>

          <div className="my-4 border-t border-gray-600"></div>

          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl font-semibold mb-3 text-white flex items-center gap-3 hover:text-blue-400 transition duration-300"
          >
            <FaGraduationCap className="text-4xl text-yellow-500 hover:scale-105 transition duration-300" />
            <MdOutlineKeyboardDoubleArrowRight className="text-blue-400 text-4xl" /> Education
          </motion.h2>

          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-3 text-gray-300 text-lg"
          >
            <li className="flex items-center gap-3">
              <FaUniversity className="text-3xl text-red-400 hover:scale-110 transition duration-300" />
              <span>Pursuing B.Tech in Electrical Engineering at JSS Academy of Technical Education, Noida.</span>
            </li>
            <li className="flex items-center gap-3">
              <FaBookOpen className="text-3xl text-green-400 hover:scale-110 transition duration-300" />
              <span>Expanding expertise in <span className="font-semibold text-white">Cloud Computing and DevOps Automation</span>.</span>
            </li>
          </motion.ul>

          <div className="my-4 border-t border-gray-600"></div>

          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-2xl font-semibold mb-3 text-white flex items-center gap-3 hover:text-purple-400 transition duration-300"
          >
            <FaCertificate className="text-3xl text-yellow-400 hover:scale-105 transition duration-300" />
            <MdOutlineKeyboardDoubleArrowRight className="text-purple-400 text-4xl" /> Certifications
          </motion.h2>

          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="space-y-3 text-gray-300 text-lg"
          >
            <li className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <FaLock className="text-2xl text-red-400 hover:scale-110 transition duration-300" />
                <span>AWS Certified Cloud Practitioner (CLF-C02) – Preparing for Retake</span>
              </div>
              <div className="pl-9 text-sm text-gray-400">
                <p><span className="font-semibold text-white">First Attempt:</span> January 24, 2025</p>
                <p><span className="font-semibold text-white">Score:</span> 679/1000 (Passing: 700)</p>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <FaLock className="text-2xl text-blue-400 hover:scale-110 transition duration-300" />
              <span>AWS Certified Solutions Architect – Associate (Upcoming)</span>
            </li>
            <li className="flex items-center gap-3">
              <FaLock className="text-2xl text-green-400 hover:scale-110 transition duration-300" />
              <span>AWS Certified Solutions Architect – Professional (Upcoming)</span>
            </li>
          </motion.ul>
        </>
      )}
    </motion.div>
  );
};

export default LeftContent;
