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
    <div className="bg-[#272822] shadow-lg border border-[#3E3D32] rounded-xl p-6 mt-6 w-full md:w-1/2 flex-grow">
      {/* Heading */}
      <h2 className="text-xl font-semibold mb-4 text-[#A6E22E] flex items-center gap-2">
        <FaConnectdevelop className="text-[#F92672]" /> Connect With Me
      </h2>

      {/* Message */}
      <p className="text-[#F8F8F2] leading-relaxed mb-4">
        Feel free to reach out to me via email, phone, or support me using UPI. (I know you will)
      </p>

      {/* Contact Details */}
      <div className="flex flex-col space-y-4 text-lg">
        {/* Email */}
        <div className="flex items-center gap-3">
          <MdAlternateEmail className="text-[#66D9EF] text-2xl" />
          <a href={`mailto:${email}`} className="text-[#E6DB74] hover:text-[#F92672] transition-all">
            {email}
          </a>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-3">
          <FaPhoneAlt className="text-[#AE81FF] text-2xl" />
          <a href={`tel:${phone}`} className="text-[#E6DB74] hover:text-[#F92672] transition-all">
            {phone}
          </a>
        </div>

        {/* UPI ID */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => copyToClipboard(upiId)}
            className="flex rounded-lg items-center cursor-pointer text-sm gap-2 px-3 py-1 bg-[#3E3D32] shadow-sm border border-[#75715E] hover:border-[#F92672] text-[#F8F8F2] transition-all"
          >
            <FaCopy className="text-[#F92672]" />
            {copied ? "UPI ID Copied!" : "Copy UPI ID"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;