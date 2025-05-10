"use client";

import { FaCloud } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black font-sans text-gray-300 py-6 border-t border-gray-800 mt-4">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        {/* Name & Tagline */}
        <div className="flex items-center gap-2">
          <span className="text-blue-400 text-2xl">
            <FaCloud />
          </span>
          <h2 className="text-xl  text-gray-100">
            CloudKinshuk / Personal Info 
          </h2>
        </div>

        {/* Copyright */}
        <p className="text-xs font-medium text-gray-500 mt-4 flex items-center gap-1">
          © {new Date().getFullYear()} Kinshuk Jain.{" "}
          <span className="inline-block">☁️</span>
          {" "}All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;