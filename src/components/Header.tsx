import { FaDiscord, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-black border border-gray-700 rounded-xl mt-2 mx-2 p-4 flex flex-wrap justify-between items-center shadow-lg font-poppins">
      
      {/* Portfolio Name */}
      <h1 className="text-2xl font-bold text-white tracking-wide">
        kinshukjain / Profile
      </h1>

      {/* Social Links Section */}
      <div className="flex gap-4 mt-2 md:mt-0">
        
        {/* Discord */}
        <a 
          href="https://discord.gg/vA92jrVC" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-white bg-gray-800 
                     hover:bg-purple-600 transition-all duration-300 shadow-md 
                     animate-pulse hover:animate-none"
        >
          <FaDiscord className="text-xl text-purple-400 hover:text-white transition-all duration-300" />
          <span className="font-semibold hidden sm:inline">Join the Commune!</span>
        </a>

        {/* Instagram */}
        <a 
          href="https://instagram.com/kinshukjain._" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-white bg-gray-800 
                     hover:bg-pink-500 transition-all duration-300 shadow-md"
        >
          <FaInstagram className="text-xl text-pink-400 hover:text-white transition-all duration-300" />
          <span className="font-semibold hidden sm:inline">Instagram</span>
        </a>

        {/* LinkedIn */}
        <a 
          href="https://linkedin.com/kinshukjainn" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-white bg-gray-800 
                     hover:bg-blue-600 transition-all duration-300 shadow-md"
        >
          <FaLinkedin className="text-xl text-blue-400 hover:text-white transition-all duration-300" />
          <span className="font-semibold hidden sm:inline">LinkedIn</span>
        </a>

        {/* GitHub */}
        <a 
          href="https://github.com/kinshukjainn" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-white bg-gray-800 
                     hover:bg-gray-900 transition-all duration-300 shadow-md"
        >
          <FaGithub className="text-xl text-gray-400 hover:text-white transition-all duration-300" />
          <span className="font-semibold hidden sm:inline">GitHub</span>
        </a>

      </div>
    </header>
  );
};

export default Header;
