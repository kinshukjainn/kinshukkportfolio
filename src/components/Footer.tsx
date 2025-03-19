"use client";

import { motion } from "framer-motion";
import SocialMedia from "../socialmedia/SocialMedia";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="bg-gray-200 text-black border-t border-gray-200 shadow-lg font-poppins py-8"
    >
      <div className="container mx-auto px-6 flex flex-col items-center text-center">
        {/* Name & Tagline */}
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-2xl font-semibold"
        >
          Kinshuk Jain / Cloud
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-2 max-w-lg font-semibold text-gray-900"
        >
          Cloud Engineer / DevOps & Infrastructure Automation
        </motion.p>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex space-x-6 mt-4"
        >
          <SocialMedia />
        </motion.div>

        {/* Call-to-Action */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-sm font-semibold text-gray-900 mt-6"
        >
          Open to opportunities in cloud engineering, DevOps, and security. {" "}
          <span className="text-black font-semibold font-medium">Let's build something amazing together!</span>
        </motion.p>

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="text-xs font-semibold text-gray-900 mt-4"
        >
          © {new Date().getFullYear()} Kinshuk Jain. All rights reserved.
        </motion.p>
      </div>
    </motion.footer>
  );
};

export default Footer;
