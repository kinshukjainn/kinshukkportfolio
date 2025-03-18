import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  FaAws, FaSlack, FaDocker, FaPython, FaGitAlt, FaDiscord, FaGithub 
} from "react-icons/fa";
import { SiKubernetes, SiTerraform } from "react-icons/si";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { TbAutomation } from "react-icons/tb";
import { FiExternalLink } from "react-icons/fi";

const LeftContent = ({ className = "" }) => {
  const [loading, setLoading] = useState(true);
  const [githubData, setGithubData] = useState(null);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
    fetch("https://api.github.com/users/kinshukjainn")
      .then((response) => response.json())
      .then((data) => setGithubData(data));
    
    fetch("https://api.github.com/users/kinshukjainn/repos")
      .then((response) => response.json())
      .then((data) => setRepos(data));
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`bg-gray-200 border border-gray-800 font-inter hover:shadow-lg p-4 md:p-6 w-full max-w-3xl mx-auto lg:mx-0 ${className}`}
    >
      {loading ? (
        <div className="animate-pulse">
          <div className="h-6 w-32 bg-gray-300 rounded mb-3"></div>
          <div className="h-4 w-full bg-gray-300 rounded mb-3"></div>
          <div className="h-4 w-3/4 bg-gray-300 rounded mb-3"></div>
          <div className="h-4 w-1/2 bg-gray-300 rounded mb-3"></div>
          <div className="border-t border-gray-300 my-4"></div>
          <div className="h-6 w-40 bg-gray-300 rounded mb-3"></div>
          <div className="grid grid-cols-2 gap-2">
            <div className="h-4 w-full bg-gray-300 rounded mb-2"></div>
            <div className="h-4 w-full bg-gray-300 rounded mb-2"></div>
            <div className="h-4 w-full bg-gray-300 rounded mb-2"></div>
            <div className="h-4 w-full bg-gray-300 rounded mb-2"></div>
          </div>
        </div>
      ) : (
        <>
          {/* Tech Stack Section */}
          <motion.h2 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.5 }}
            className="text-xl font-semibold mb-3 pb-2 border-b border-gray-600 text-purple-800 flex items-center gap-2"
          >
            <MdOutlineKeyboardDoubleArrowRight className="text-black text-3xl" /> Tech Stack
          </motion.h2>
          <motion.ul 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-black text-lg md:text-xl"
          >
            <li className="flex items-center gap-3"><FaAws className="text-black text-3xl" /> AWS Cloud</li>
            <li className="flex items-center gap-3"><FaDocker className="text-black text-3xl" /> Docker</li>
            <li className="flex items-center gap-3"><SiKubernetes className="text-black text-3xl" /> Kubernetes</li>
            <li className="flex items-center gap-3"><SiTerraform className="text-black text-3xl" /> Terraform</li>
            <li className="flex items-center gap-3"><FaPython className="text-black text-3xl" /> Python</li>
            <li className="flex items-center gap-3"><TbAutomation className="text-black text-3xl" /> Boto3</li>
          </motion.ul>

          <div className="my-4 border-t border-gray-600"></div>

          {/* GitHub Profile Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-semibold mb-3 pb-2 border-b border-gray-600 text-purple-800 flex items-center gap-2">
              <MdOutlineKeyboardDoubleArrowRight className="text-black text-3xl" /> GitHub Profile
            </h2>
            {githubData ? (
              <motion.ul 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-black text-lg"
              >
                <li className="flex items-center gap-3">
                  <FaGithub className="text-black text-3xl" /> 
                  <span className="font-semibold">{githubData.login}</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="font-semibold">Repos:</span> {githubData.public_repos}
                </li>
                <li className="flex items-center gap-3">
                  <span className="font-semibold">Following:</span> {githubData.following}
                </li>
              </motion.ul>
            ) : (
              <div className="animate-pulse">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="h-8 bg-gray-300 rounded"></div>
                  <div className="h-8 bg-gray-300 rounded"></div>
                  <div className="h-8 bg-gray-300 rounded"></div>
                </div>
              </div>
            )}
          </motion.div>

          <div className="my-4 border-t border-gray-600"></div>

          {/* GitHub Repositories Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-semibold mb-3 pb-2 border-b border-gray-600 text-purple-800 flex items-center gap-2">
              <MdOutlineKeyboardDoubleArrowRight className="text-black text-3xl" /> GitHub Repositories
            </h2>
            {repos.length > 0 ? (
              <motion.ul 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6 }}
                className="text-black text-lg"
              >
                {repos.map((repo) => (
                  <li key={repo.id} className="mb-2 flex items-center gap-2">
                    <FaGithub className="text-black text-xl" />
                    {repo.name === "kinshukkportfolio" && (
                      <span className="bg-yellow-400 text-black px-2 py-1 rounded text-sm">Original</span>
                    )}
                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline flex items-center gap-1">
                      {repo.name} <FiExternalLink className="text-sm" />
                    </a>
                  </li>
                ))}
              </motion.ul>
            ) : (
              <div className="animate-pulse">
                <div className="space-y-2">
                  <div className="h-8 bg-gray-300 rounded mb-2"></div>
                  <div className="h-8 bg-gray-300 rounded mb-2"></div>
                  <div className="h-8 bg-gray-300 rounded mb-2"></div>
                  <div className="h-8 bg-gray-300 rounded mb-2"></div>
                </div>
              </div>
            )}
          </motion.div>

          <div className="my-4 border-t border-gray-600"></div>

          {/* Tools & Collaboration Section */}
          <motion.h2 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.5 }}
            className="text-xl font-semibold mb-3 pb-2 border-b border-gray-600 text-purple-800 flex items-center gap-2"
          >
            <MdOutlineKeyboardDoubleArrowRight className="text-black text-3xl" /> Tools & Collaboration
          </motion.h2>
          <motion.ul 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-black text-lg md:text-xl"
          >
            <li className="flex items-center gap-3"><FaGitAlt className="text-black text-3xl" /> Git</li>
            <li className="flex items-center gap-3"><FaGithub className="text-black text-3xl" /> GitHub</li>
            <li className="flex items-center gap-3"><FaSlack className="text-black text-3xl" /> Slack</li>
            <li className="flex items-center gap-3"><FaDiscord className="text-black text-3xl" /> Discord</li>
          </motion.ul>
        </>
      )}
    </motion.div>
  );
};

export default LeftContent;