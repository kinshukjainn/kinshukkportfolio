import { 
  FaGraduationCap, FaCloud, FaLock, FaUniversity, 
  FaTools, FaCertificate, FaBookOpen, FaServer
} from "react-icons/fa";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const RightContent = ({ className = "" }) => {
  return (
    <div className={`bg-black border border-gray-700 font-poppins shadow-lg p-4 md:p-6 rounded-2xl w-full lg:w-1/2 flex-shrink-0 max-w-3xl mx-auto lg:mx-0 ${className}`}>
      
      {/* 🚀 Introduction Section */}
      <h2 className="text-3xl font-bold mb-3 text-yellow-500 flex items-center gap-3">
        Hey Folks!! 🚀
      </h2>
      <p className="text-gray-300 leading-relaxed text-base md:text-lg">
        My name is <span className="font-bold text-yellow-500">Kinshuk Jain</span>. 
        I am passionate about <span className="text-yellow-400 font-medium">Cloud Computing, Infrastructure as Code, and Cybersecurity.</span>  
        I specialize in designing scalable cloud architectures and secure infrastructures. 
        I believe cloud is not just about tools—it's about <span className="font-semibold">mindset, optimization, and automation</span>.
      </p>
      <div className="my-4 border-t border-gray-600"></div>
      
      {/* 🎓 Education Section */}
      <h2 className="text-2xl font-semibold mb-3 text-yellow-500 flex items-center gap-3">
        <FaGraduationCap className="text-4xl text-white" />
        <MdOutlineKeyboardDoubleArrowRight className="text-white text-4xl" /> Education
      </h2>
      <ul className="space-y-3 text-gray-300 text-base md:text-lg">
        <li className="flex items-center gap-3">
          <FaUniversity className="text-3xl text-gray-300" /> 
          Pursuing B.Tech in Electrical Engineering at JSS Academy of Technical Education, Noida.
        </li>
        <li className="flex items-center gap-3">
          <FaBookOpen className="text-3xl text-gray-300" /> 
          Actively expanding expertise in <span className="font-semibold">Cloud Computing and DevOps Automation</span>.
        </li>
      </ul>
      <div className="my-4 border-t border-gray-600"></div>
      
      {/* 🛠️ Skills & Expertise */}
      <h2 className="text-2xl font-semibold mb-3 text-yellow-500 flex items-center gap-3">
        <FaTools className="text-4xl text-green-500" />
        <MdOutlineKeyboardDoubleArrowRight className="text-white text-4xl" /> Skills & Expertise
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-300 text-base md:text-lg">
        <li className="flex items-center gap-3">
          <FaCloud className="text-4xl text-yellow-400" /> 
          Cloud Computing & Infrastructure as Code
        </li>
        <li className="flex items-center gap-3">
          <FaServer className="text-4xl text-yellow-400" /> 
          Scalable and Efficient Cloud Infrastructure
        </li>
        <li className="flex items-center gap-3">
          <FaTools className="text-4xl text-yellow-400" /> 
          DevOps & CI/CD Automation
        </li>
      </ul>
      <div className="my-4 border-t border-gray-600"></div>
      
      {/* 🏆 Certifications */}
      <h2 className="text-2xl font-semibold mb-3 text-yellow-500 flex items-center gap-3">
        <FaCertificate className="text-4xl text-yellow-500" />
        <MdOutlineKeyboardDoubleArrowRight className="text-white text-4xl" /> Certifications
      </h2>
      <ul className="space-y-3 text-gray-300 text-base md:text-lg">
        <li className="flex items-center gap-3">
          <FaLock className="text-4xl text-yellow-300" /> 
          AWS Certified Cloud Practitioner (Attempted, Preparing for Retake)
        </li>
      </ul>
    </div>
  );
};

export default RightContent;
