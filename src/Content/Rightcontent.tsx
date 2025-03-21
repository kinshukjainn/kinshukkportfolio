import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FaAws,
  FaDocker,
  FaPython,
  FaGitAlt,
} from "react-icons/fa";
import { SiKubernetes, SiTerraform } from "react-icons/si";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { FiExternalLink } from "react-icons/fi";
import { CiGrid32 } from "react-icons/ci";


interface RightContentProps {
  className?: string;
}

const RightContent: React.FC<RightContentProps> = ({ className="" }) => {
  const [loading, setLoading] = useState(true);
  const [githubData, setGithubData] = useState<{
    login: string;
    public_repos: number;
    following: number;
  } | null>(null);
  const [repos, setRepos] = useState<
    { id: number; name: string; html_url: string }[]
  >([]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);

    const fetchGitHubData = async () => {
      try {
        const userResponse = await fetch("https://api.github.com/users/kinshukjainn");
        const userData = await userResponse.json();
        setGithubData(userData);

        const repoResponse = await fetch("https://api.github.com/users/kinshukjainn/repos");
        const repoData = await repoResponse.json();
        setRepos(Array.isArray(repoData) ? repoData : []);
      } catch (error) {
        console.error("Failed to fetch GitHub data:", error);
        setGithubData(null);
        setRepos([]);
      }
    };

    fetchGitHubData();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`bg-gradient-to-br from-gray-900 via-gray-800 to-black border border-gray-700 rounded-3xl shadow-xl shadow-blue-500/20 p-6 w-full lg:w-1/2 max-w-3xl mx-auto lg:mx-0 ${className}`}
    >
      {loading ? (
        <div className="animate-pulse">
          <div className="h-6 w-32 bg-gray-300 rounded mb-3"></div>
          <div className="h-4 w-full bg-gray-300 rounded mb-3"></div>
        </div>
      ) : (
        <>
          {/* Tech Stack Section */}
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-semibold mb-3 pb-2 border-b border-gray-600 text-white flex items-center gap-2"
          >
            <MdOutlineKeyboardDoubleArrowRight className="text-white text-3xl" /> Tech Stack
          </motion.h2>
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-white text-lg md:text-xl"
          >
            <li className="flex items-center gap-3">
              <FaAws className="text-orange-500 text-3xl" /> AWS Cloud
            </li>
            <li className="flex items-center gap-3">
              <FaDocker className="text-purple-400 text-3xl" /> Docker
            </li>
            <li className="flex items-center gap-3">
              <SiKubernetes className="text-blue-500 text-3xl" /> Kubernetes
            </li>
            <li className="flex items-center gap-3">
              <SiTerraform className="text-blue-600 text-3xl" /> Terraform
            </li>
            <li className="flex items-center gap-3">
              <FaPython className="text-yellow-500 text-3xl" /> Python
            </li>
            <li className="flex items-center gap-3">
              <FaGitAlt className="text-white text-3xl" /> Git
            </li>
          </motion.ul>

          {/* GitHub Profile Section */}
          <motion.h2
            className="text-xl font-semibold mt-6 mb-3 pb-2 border-b border-gray-600 text-white flex items-center gap-2"
          >
            <MdOutlineKeyboardDoubleArrowRight className="text-white text-3xl" /> GitHub Profile
          </motion.h2>
          {githubData ? (
            <div className="text-lg text-white">
              <p>
                <strong>User:</strong> {githubData?.login ?? "N/A"}
              </p>
              <p>
                <strong>Public Repos:</strong> {githubData?.public_repos ?? "N/A"}
              </p>
              <p>
                <strong>Following:</strong> {githubData?.following ?? "N/A"}
              </p>
              <a
                href={`https://github.com/${githubData?.login}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-gradient-to-r from-purple-500 to-pink-500 w-max p-2 rounded-full text-sm flex items-center gap-1 mt-2 shadow-lg transition-all duration-300 hover:scale-105"
              >
                View my github Profile <FiExternalLink />
              </a>

            </div>
          ) : (
            <p className="text-yellow-600">Failed to fetch GitHub profile data.</p>
          )}
          {/* GitHub Repositories Section */}
          <motion.h2
            className="text-xl font-semibold mt-6 mb-3 pb-2 border-b border-gray-600 text-white flex items-center gap-2"
          >
            <MdOutlineKeyboardDoubleArrowRight className="text-white text-3xl" /> GitHub Repositories
          </motion.h2>
          {repos.length > 0 ? (
            <ul className="space-y-2 text-white">
              {repos.slice(0, 5).map((repo) => (
                <li key={repo.id} className="flex text-white items-center gap-2">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white flex items-center gap-1"
                  >
                    {repo.name} <FiExternalLink className="text-yellow-400" />
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-red-600">No repositories found.</p>
          )}

          {/* Open Source Portfolio Section */}
          <div className="mt-6 p-4 bg-gradient-to-r from-gray-800 to-black shadow-lg transition-all duration-300 hover:shadow-white rounded-3xl border border-gray-600 ">
            <h3 className="text-lg text-white font-semibold text-"> <CiGrid32 className="text-2xl" />  Build Your Own Portfolio 🚀</h3>
            <p className="text-white mt-2">
              I made my portfolio open-source, so if you like it, feel free to use it as a template for your own site.
              No need to reinvent the wheel—just tweak it to match your vibe.
            </p>
            <a
              href="https://github.com/kinshukjainn/kinshukkportfolio" // Replace with the actual repo link
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-800 to-blue-500 rounded-full text-white font-semibold shadow-md transition hover:scale-105"
            >
              Get the Source Code <FiExternalLink className="text-white text-semibold" />
            </a>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default RightContent;
