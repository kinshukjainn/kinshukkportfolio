import { 
  FaAws, FaSlack, FaDocker, FaPython, FaGitAlt, FaDiscord, FaGithub, FaServer, FaLock 
} from "react-icons/fa";
import { 
  SiTerraform, SiKubernetes, SiGithubactions, SiNumpy, SiPandas, SiLinux, SiAnsible 
} from "react-icons/si";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const LeftContent = () => {
  return (
    <div className="bg-black border border-gray-800 font-inter shadow-lg p-6 md:p-8 rounded-2xl w-full md:w-2/3 lg:w-1/2 flex-grow">
      
      {/* About Me Section */}
      <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-gray-600 text-yellow-600 flex items-center gap-2">
        <MdOutlineKeyboardDoubleArrowRight className="text-white" /> About Me
      </h2>
      <p className="text-white leading-relaxed text-base md:text-lg">
        Hey there! I'm <span className="font-semibold text-yellow-600">Kinshuk Jain</span>,  
        passionate about building scalable cloud architectures and securing cloud infrastructure.  
        My expertise lies in AWS, infrastructure automation, and cybersecurity.  
        I thrive on optimizing cloud environments, automating deployments, and implementing security best practices.
      </p>

      <div className="my-6 border-t border-gray-600"></div>

      {/* Tech Stack Section */}
      <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-gray-600 text-yellow-600 flex items-center gap-2">
        <MdOutlineKeyboardDoubleArrowRight className="text-white" /> Tech Stack
      </h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-white text-lg md:text-xl">
        <li className="flex items-center gap-3"><FaAws className="text-yellow-500 text-3xl" /> AWS Cloud</li>
        <li className="flex items-center gap-3"><SiTerraform className="text-purple-500 text-3xl" /> Infrastructure as Code</li>
        <li className="flex items-center gap-3"><FaDocker className="text-blue-500 text-3xl" /> Docker</li>
        <li className="flex items-center gap-3"><SiKubernetes className="text-blue-600 text-3xl" /> Kubernetes</li>
        <li className="flex items-center gap-3"><SiGithubactions className="text-green-600 text-3xl" /> DevOps</li>
        <li className="flex items-center gap-3"><SiAnsible className="text-red-500 text-3xl" /> Configuration Management</li>
        <li className="flex items-center gap-3"><SiLinux className="text-gray-400 text-3xl" /> Linux</li>
        <li className="flex items-center gap-3"><FaLock className="text-yellow-300 text-3xl" /> Security & IAM</li>
        <li className="flex items-center gap-3"><FaServer className="text-yellow-600 text-3xl" /> Scalable Architecture</li>
        <li className="flex items-center gap-3"><FaPython className="text-yellow-400 text-3xl" /> Python (Boto3 / Automation)</li>
        <li className="flex items-center gap-3"><SiNumpy className="text-blue-400 text-3xl" /> NumPy</li>
        <li className="flex items-center gap-3"><SiPandas className="text-blue-600 text-3xl" /> Pandas</li>
      </ul>

      <div className="my-6 border-t border-gray-600"></div>

      {/* Tools & Collaboration Section */}
      <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-gray-600 text-yellow-600 flex items-center gap-2">
        <MdOutlineKeyboardDoubleArrowRight className="text-white" /> Tools & Collaboration
      </h2>
      <ul className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-white text-lg md:text-xl">
        <li className="flex items-center gap-3"><FaGitAlt className="text-orange-500 text-3xl" /> Git</li>
        <li className="flex items-center gap-3"><FaGithub className="text-gray-400 text-3xl" /> GitHub</li>
        <li className="flex items-center gap-3"><FaSlack className="text-yellow-200 text-3xl" /> Slack</li>
        <li className="flex items-center gap-3"><FaDiscord className="text-green-700 text-3xl" /> Discord</li>
      </ul>
    </div>
  );
};

export default LeftContent;