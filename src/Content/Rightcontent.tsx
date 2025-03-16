import { 
  FaGraduationCap, FaLock, FaUniversity, 
   FaCertificate, FaBookOpen
} from "react-icons/fa";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const RightContent = ({ className = "" }) => {
  return (
    <div className={`bg-gray-200 border border-gray-700 font-poppins shadow-lg p-4 md:p-6  w-full lg:w-1/2 flex-shrink-0 max-w-3xl mx-auto lg:mx-0 ${className}`}>
      
      {/* 🚀 Introduction Section */}
      <h2 className="text-3xl font-semibold mb-3 text-purple-800 flex items-center gap-3">
        Hey Folks!! 🚀
      </h2>
      <p className="text-black leading-relaxed text-base md:text-lg">
        My name is <span className="font-bold text-gray-800">Kinshuk Jain</span>. 
        I am passionate about <span className="text-gary-800 font-medium">Cloud Computing, Infrastructure as Code, and Cybersecurity.</span>  
        I specialize in designing scalable cloud architectures and secure infrastructures. 
        I believe cloud is not just about tools—it's about <span className="font-semibold text-gray-800">mindset, optimization, and automation</span>.
      </p>
      <div className="my-4 border-t border-gray-600"></div>
      
      {/* 🎓 Education Section */}
      <h2 className="text-2xl font-semibold mb-3 text-purple-800 flex items-center gap-3">
        <FaGraduationCap className="text-4xl text-black" />
        <MdOutlineKeyboardDoubleArrowRight className="text-purple-800 text-4xl" /> Education
      </h2>
      <ul className="space-y-3 text-black text-base md:text-lg">
        <li className="flex items-center gap-3">
          <FaUniversity className="text-3xl text-black" /> 
          Pursuing B.Tech in Electrical Engineering at JSS Academy of Technical Education, Noida.
        </li>
        <li className="flex items-center gap-3">
          <FaBookOpen className="text-3xl text-black" /> 
          Actively expanding expertise in <span className="font-semibold">Cloud Computing and DevOps Automation</span>.
        </li>
      </ul>
      <div className="my-4 border-t border-gray-600"></div>
      
      
      {/* 🏆 Certifications */}
      <h2 className="text-2xl font-semibold mb-3 text-purple-800 flex items-center gap-3">
        <FaCertificate className="text-2xl text-black" />
        <MdOutlineKeyboardDoubleArrowRight className="text-black text-4xl" /> Certifications
      </h2>
      <ul className="space-y-3 text-black text-base md:text-lg">
        <li className="flex items-center gap-3">
          <FaLock className="text-2xl text-black" /> 
          AWS Certified Cloud Practitioner (Attempted, Preparing for Retake)
        </li>
      </ul>
    </div>
  );
};

export default RightContent;
