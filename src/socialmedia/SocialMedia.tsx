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
    <div className="bg-black border border-gray-700 font-inter shadow-lg p-6 mt-6 rounded-2xl w-full md:w-1/2 flex-grow">
      
      {/* Heading */}
      <h2 className="text-2xl font-semibold mb-4 text-blue-500 flex items-center gap-2">
        <FaConnectdevelop className="text-blue-500" /> Connect With Me
      </h2>

      {/* Message */}
      <p className="text-white leading-relaxed mb-4">
        Feel free to reach out to me via email, phone, or support me using UPI.(I know you will)
      </p>

      {/* Contact Details */}
      <div className="flex flex-col space-y-4 text-white text-lg">
        
        {/* Email */}
        <div className="flex items-center gap-3">
          <MdAlternateEmail className="text-blue-500 text-2xl" />
          <a href={`mailto:${email}`} className="hover:text-blue-400 transition-all">
            {email}
          </a>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-3">
          <FaPhoneAlt className="text-blue-500 text-2xl" />
          <a href={`tel:${phone}`} className="hover:text-green-400 transition-all">
            {phone}
          </a>
        </div>

        {/* UPI ID */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => copyToClipboard(upiId)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-gray-900 transition-all shadow-md"
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
