import { 
  FaAws, FaSlack, FaDocker, FaPython, FaGitAlt, FaDiscord, FaGithub 
} from "react-icons/fa";
import {  SiKubernetes, SiGithubactions
} from "react-icons/si";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const LeftContent = ({ className = "" }) => {
  return (
    <div className={`bg-gray-200 border border-gray-800 font-inter hover:shadow-lg p-4 md:p-6  w-full max-w-3xl mx-auto lg:mx-0 ${className}`}>
      
      {/* About Me Section */}
      <h2 className="text-xl font-bold mb-3 pb-2 border-b border-gray-600 text-blue-500 flex items-center gap-2">
        <MdOutlineKeyboardDoubleArrowRight className="text-black text-3xl" /> About Me
      </h2>
      <p className="text-black leading-relaxed text-base md:text-lg">
        Hey there! I'm <span className="font-semibold text-blue-500">Kinshuk Jain</span>, 
        passionate about building scalable cloud architectures and securing cloud infrastructure.
        My expertise lies in AWS, infrastructure automation, and cybersecurity.
        I thrive on optimizing cloud environments, automating deployments, and implementing security best practices.
      </p>
      
      <div className="my-4 border-t border-gray-600"></div>
      
      {/* Tech Stack Section */}
      <h2 className="text-xl font-bold mb-3 pb-2 border-b border-gray-600 text-blue-500 flex items-center gap-2">
        <MdOutlineKeyboardDoubleArrowRight className="text-black text-3xl" /> Tech Stack
      </h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-black text-lg md:text-xl">
        <li className="flex items-center gap-3"><FaAws className="text-black text-3xl" /> AWS Cloud</li>
        <li className="flex items-center gap-3"><FaDocker className="text-black text-3xl" /> Docker</li>
        <li className="flex items-center gap-3"><SiKubernetes className="text-black text-3xl" /> Kubernetes</li>
        <li className="flex items-center gap-3"><SiGithubactions className="text-black text-3xl" /> DevOps</li>
        <li className="flex items-center gap-3"><FaPython className="text-black text-3xl" /> Python (Boto3 / Automation)</li>
      </ul>
      
      <div className="my-4 border-t border-gray-600"></div>
      
      {/* Tools & Collaboration Section */}
      <h2 className="text-xl font-bold mb-3 pb-2 border-b border-gray-600 text-blue-500 flex items-center gap-2">
        <MdOutlineKeyboardDoubleArrowRight className="text-black text-3xl" /> Tools & Collaboration
      </h2>
      <ul className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-black text-lg md:text-xl">
        <li className="flex items-center gap-3"><FaGitAlt className="text-black text-3xl" /> Git</li>
        <li className="flex items-center gap-3"><FaGithub className="text-black text-3xl" /> GitHub</li>
        <li className="flex items-center gap-3"><FaSlack className="text-black text-3xl" /> Slack</li>
        <li className="flex items-center gap-3"><FaDiscord className="text-black text-3xl" /> Discord</li>
      </ul>
    </div>
  );
};

export default LeftContent;
