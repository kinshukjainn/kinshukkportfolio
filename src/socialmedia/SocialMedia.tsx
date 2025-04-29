"use client";

import { useState } from "react";
import { FaConnectdevelop, FaPhoneAlt, FaCopy } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

const SocialMedia = () => {
  const email = "kinshuk25jan04@gmail.com";
  const phone = "+91 9172702501";
  
  const [copiedItem, setCopiedItem] = useState("");

  interface CopyToClipboardParams {
    text: string;
    item: "email" | "phone";
  }

  const copyToClipboard = (text: CopyToClipboardParams["text"], item: CopyToClipboardParams["item"]): void => {
    navigator.clipboard.writeText(text);
    setCopiedItem(item);
    setTimeout(() => setCopiedItem(""), 2000);
  };

  return (
    <div className="bg-gradient-to-t from-black via-grey-800 to-slate-900 backdrop-blur-lg border border-blue-800 hover:border-yellow-500/50  font-poppins p-6 rounded-lg shadow-xl border border-gray-800">
      {/* Heading */}
      <div className="flex items-center gap-2 mb-4">
        <FaConnectdevelop className="text-yellow-500 text-2xl" />
        <h2 className="text-2xl font-bold text-yellow-500">Connect With Me</h2>
      </div>

      {/* Message */}
      <p className="text-gray-400 mb-6 text-sm">
        Feel free to reach out to me via email, phone, or support me using UPI.
      </p>

      {/* Contact Details */}
      <div className="space-y-4">
        {/* Email */}
        <div className="group flex items-center justify-between bg-gradient-to-t from-black via-grey-800 to-slate-900 backdrop-blur-lg border border-blue-800 hover:border-yellow-500/50   p-3 rounded-lg transition-all  ">
          <div className="flex items-center gap-3">
            <div className="bg-gray-700 p-2 rounded-md">
              <MdAlternateEmail className="text-purple-400 text-xl" />
            </div>
            <div>
              <p className="text-gray-400 text-xs">Email</p>
              <p className="text-white">{email}</p>
            </div>
          </div>
          <button 
            onClick={() => copyToClipboard(email, "email")}
            className="bg-gray-700 hover:bg-purple-600 text-white p-2 rounded-md transition-colors"
          >
            {copiedItem === "email" ? (
              <span className="text-xs text-yellow-500">Copied!</span>
            ) : (
              <FaCopy className="text-yellow-500" />
            )}
          </button>
        </div>

        {/* Phone */}
        <div className="group flex items-center justify-between bg-gradient-to-t from-black via-grey-800 to-slate-900 backdrop-blur-lg border border-blue-800 hover:border-yellow-500/50   p-3 rounded-lg transition-all ">
          <div className="flex items-center gap-3">
            <div className="bg-gray-700 p-2 rounded-md">
              <FaPhoneAlt className="text-purple-400 text-xl" />
            </div>
            <div>
              <p className="text-gray-400 text-xs">Phone</p>
              <p className="text-white">{phone}</p>
            </div>
          </div>
          <button 
            onClick={() => copyToClipboard(phone, "phone")}
            className="bg-gray-700 hover:bg-purple-600 text-white p-2 rounded-md transition-colors"
          >
            {copiedItem === "phone" ? (
              <span className="text-xs">Copied!</span>
            ) : (
              <FaCopy className="text-yellow-500" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;