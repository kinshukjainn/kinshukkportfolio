"use client";

import { FaConnectdevelop, FaPhoneAlt, FaCopy } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { useState } from "react";

const SocialMedia = () => {
  const email = "kinshuk25jan04@gmail.com";
  const phone = "+91 9172702501"; 
  const upiId = "kinshuk25jan04@oksbi";

  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-gray-100 rounded-lg border border-gray-700 font-inter shadow-lg p-6 mt-6  w-full md:w-1/2 flex-grow">
      
      {/* Heading */}
      <h2 className="text-2xl font-semibold mb-4 text-black flex items-center gap-2">
        <FaConnectdevelop className="text-black" /> Connect With Me
      </h2>

      {/* Message */}
      <p className="text-black leading-relaxed mb-4">
        Feel free to reach out to me via email, phone, or support me using UPI.(I know you will)
      </p>

      {/* Contact Details */}
      <div className="flex flex-col space-y-4 text-black text-lg">
        
        {/* Email */}
        <div className="flex items-center gap-3">
          <MdAlternateEmail className="text-black text-2xl" />
          <a href={`mailto:${email}`} className="hover:text-black transition-all">
            {email}
          </a>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-3">
          <FaPhoneAlt className="text-black text-2xl" />
          <a href={`tel:${phone}`} className="hover:text-blue-800 transition-all">
            {phone}
          </a>
        </div>

        {/* UPI ID */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => copyToClipboard(upiId)}
            className="flex rounded-lg items-center cursor-pointer text-sm gap-2 px-2 py-1 bg-black text-white  hover:bg-gray-900 transition-all shadow-md"
          >
            <FaCopy className="text-white" />
            {copied ? "UPI ID Copied!" : "Copy UPI ID"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
