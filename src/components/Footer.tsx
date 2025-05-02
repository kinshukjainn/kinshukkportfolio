"use client";

import { motion } from "framer-motion";
import SocialMedia from "../socialmedia/SocialMedia";
import { FaCloud, FaCloudRain, FaCloudMeatball } from "react-icons/fa";

const Footer = () => {
  // Cloud animations
  const cloudVariants: Record<string, (custom: number) => { y: number[]; transition: { duration: number; repeat: number; repeatType: "reverse"; ease: string; }; }> = {
    floating: (custom) => ({
      y: [0, custom, 0],
      transition: {
        duration: 3 + custom / 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    })
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-[#121212] font-poppins text-gray-300 shadow-xl py-10 relative overflow-hidden border-t border-gray-800 mt-8"
    >
      {/* Decorative Cloud Elements */}
      <motion.div 
        custom={-10}
        variants={cloudVariants}
        animate="floating"
        className="absolute left-10 top-10 text-gray-600 opacity-10 text-6xl"
      >
        <FaCloud />
      </motion.div>
      
      <motion.div 
        custom={-8}
        variants={cloudVariants}
        animate="floating"
        className="absolute right-16 bottom-20 text-gray-600 opacity-10 text-5xl"
      >
        <FaCloudRain />
      </motion.div>
      
      <motion.div 
        custom={-12}
        variants={cloudVariants}
        animate="floating"
        className="absolute left-1/4 bottom-10 text-gray-600 opacity-10 text-4xl"
      >
        <FaCloudMeatball />
      </motion.div>

      {/* Top Border with Animation */}
      <div className="absolute top-0 left-0 right-0">
        <svg className="w-full h-3" preserveAspectRatio="none" viewBox="0 0 1200 12">
          <motion.path
            d="M0,12 Q300,0 600,8 T1200,2 L1200,0 L0,0 Z"
            fill="url(#gradient)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <animate
              attributeName="d"
              values="
                M0,12 Q300,0 600,8 T1200,2 L1200,0 L0,0 Z;
                M0,8 Q300,12 600,2 T1200,8 L1200,0 L0,0 Z;
                M0,12 Q300,0 600,8 T1200,2 L1200,0 L0,0 Z
              "
              dur="15s"
              repeatCount="indefinite"
            />
          </motion.path>
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#121212" />
              <stop offset="50%" stopColor="#4299E1" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#121212" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-6 flex flex-col items-center text-center relative z-10">
        {/* Name & Tagline */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="flex items-center gap-3"
        >
          <motion.div
            animate={{ 
              rotate: [0, 5, -5, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-blue-400 text-3xl"
          >
            <FaCloud />
          </motion.div>
          <h2 className="text-2xl font-bold text-gray-100">
            CloudKinshuk / Personal Info 
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-3 max-w-lg text-gray-400"
        >
          <span className="relative">
            Aspiring and self-taught cloud engineer with a passion for building scalable and secure cloud solutions.
            <motion.span 
              className="absolute -bottom-1 left-0 h-0.5 bg-blue-500"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1.2, duration: 1 }}
            />
          </span>
        </motion.p>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="flex space-x-6 mt-6"
        >
          <SocialMedia />
        </motion.div>

        {/* Cloud Services Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl"
        >
          {["AWS", "Azure", "GCP", "Kubernetes"].map((service, index) => (
            <motion.div
              key={service}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(66, 153, 225, 0.1)",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 0.8 + index * 0.1,
                duration: 0.5,
                type: "spring"
              }}
              className="bg-[#1A1A1A] px-3 py-2 rounded-md border border-gray-800 shadow-md"
            >
              <span className="text-blue-300 text-sm font-medium">{service}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Call-to-Action */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="text-sm font-medium text-gray-300 mt-8 p-4 bg-[#1A1A1A] backdrop-blur-sm rounded-md border border-gray-800 max-w-xl shadow-md"
        >
          <p>
            Open to opportunities in cloud engineering, DevOps, and security.{" "}
            <motion.span 
              animate={{ 
                color: ["#63B3ED", "#4299E1", "#63B3ED"],
                textShadow: [
                  "0 0 5px rgba(66, 153, 225, 0)",
                  "0 0 8px rgba(66, 153, 225, 0.3)",
                  "0 0 5px rgba(66, 153, 225, 0)"
                ]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="font-bold"
            >
              Let's build something amazing together in the cloud!
            </motion.span>
          </p>
        </motion.div>

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.7 }}
          className="text-xs font-medium text-gray-500 mt-8 flex items-center gap-2"
        >
          © {new Date().getFullYear()} Kinshuk Jain.{" "}
          <motion.span
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="inline-block"
          >
            ☁️
          </motion.span>
          {" "}All rights reserved.
        </motion.p>
      </div>
    </motion.footer>
  );
};

export default Footer;