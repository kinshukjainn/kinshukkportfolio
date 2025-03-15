import { 
    FaAws, FaSlack, FaDocker, FaPython, FaGitAlt, FaDiscord, FaGithub, FaServer, FaLock
  } from "react-icons/fa";
  import { 
    SiTerraform, SiKubernetes, SiGithubactions, SiNumpy, SiPandas, SiLinux, SiAnsible
  } from "react-icons/si";
  import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
  
  const LeftContent = () => {
    return (
      <div className="bg-black border border-gray-800 font-inter shadow-lg p-6 md:p-8 rounded-2xl w-full md:w-1/2 flex-grow">
        
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
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-white text-base md:text-lg">
          <li className="flex items-center gap-2"><FaAws className="text-yellow-500" /> AWS Cloud</li>
          <li className="flex items-center gap-2"><SiTerraform className="text-purple-500" /> Infrastructure as Code</li>
          <li className="flex items-center gap-2"><FaDocker className="text-blue-500" /> Docker</li>
          <li className="flex items-center gap-2"><SiKubernetes className="text-blue-600" /> Kubernetes</li>
          <li className="flex items-center gap-2"><SiGithubactions className="text-green-600" />DevOps</li>
          <li className="flex items-center gap-2"><SiAnsible className="text-red-500" /> Configuration Management</li>
          <li className="flex items-center gap-2"><SiLinux className="text-gray-400" /> Linux</li>
          <li className="flex items-center gap-2"><FaLock className="text-yellow-300" />Security& IAM</li>
          <li className="flex items-center gap-2"><FaServer className="text-yellow-600" /> Scalable Architecture Design</li>
          <li className="flex items-center gap-2"><FaPython className="text-yellow-400" /> Python (Boto3 / Automation)</li>
          <li className="flex items-center gap-2"><SiNumpy className="text-blue-400" /> NumPy</li>
          <li className="flex items-center gap-2"><SiPandas className="text-blue-600" /> Pandas</li>
        </ul>
  
        <div className="my-6 border-t border-gray-600"></div>
  
        {/* Tools & Collaboration Section */}
        <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-gray-600 text-yellow-600 flex items-center gap-2">
          <MdOutlineKeyboardDoubleArrowRight className="text-white" /> Tools & Collaboration
        </h2>
        <ul className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-white text-base md:text-lg">
          <li className="flex items-center gap-2"><FaGitAlt className="text-orange-500" /> Git</li>
          <li className="flex items-center gap-2"><FaGithub className="text-gray-400" /> GitHub</li>
          <li className="flex items-center gap-2"><FaSlack className="text-yellow-200" /> Slack</li>
          <li className="flex items-center gap-2"><FaDiscord className="text-green-700" /> Discord</li>
        </ul>
      </div>
    );
  };
  
  export default LeftContent;
  