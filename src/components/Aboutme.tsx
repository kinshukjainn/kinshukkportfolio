import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaFilm,
  FaGamepad,
} from "react-icons/fa";
import { SiMyanimelist } from "react-icons/si";

interface Interest {
  id: number;
  icon: React.ReactNode;            
  title: string;
  description: string;
}

const AboutMe = () => {
  const [activeSection, setActiveSection] = useState<string>("about");

  const interests: Interest[] = [
    {
      id: 1,
      icon: <FaFilm className="text-2xl text-purple-500" />,
      title: "Movies",
      description:
        "I'm a huge fan of sci-fi and psychological thrillers. Marvel and DC are among my favorite Genre of movies . I enjoy films that make me think and leave me contemplating long after they end.",
    },
    {
      id: 2,
      icon: <SiMyanimelist className="text-2xl text-red-500" />,
      title: "Anime",
      description:
        "I love anime with deep storylines and unique art styles. Some of my favorites include 'Attack on Titan', 'One Punch Man', and 'Demon Slayer'. I appreciate how anime can explore complex themes in creative ways.",
    },
    {
      id: 3,
      icon: <FaGamepad className="text-2xl text-blue-500" />,
      title: "Gaming",
      description:
        "I enjoy both indie and AAA titles, especially RPGs and strategy games. Games with compelling narratives and innovative mechanics always catch my attention. For ex : Call of Duty Mobile, Valorant, and Warzone.",
    },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen  font-poppins bg-[#171717] text-black py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto"
      >
        {/* Header with Navigation */}
        <nav className="mb-12">
          <ul className="flex space-x-6 justify-center">
            <li>
              <button
                onClick={() => setActiveSection("about")}
                className={`px-4 py-2 rounded-md transition-all ${
                  activeSection === "about"
                    ? "text-yellow-500"
                    : "text-white "
                }`}
              >
                About Me
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection("interests")}
                className={`px-4 py-2 rounded-md transition-all ${
                  activeSection === "interests"
                     ?  "text-yellow-500 "
                    : "text-white "
                }`}
              >
                My Interests
              </button>
            </li>
          </ul>
        </nav>

        {/* Content */}
        <div className="bg-[#202124] rounded-2xl p-8 shadow-xl">
          {/* About Me Section */}
          {activeSection === "about" && (
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              <div className="flex flex-col lg:flex-row items-center gap-8">

                <div className="lg:text-left text-center">
                  <motion.h1
                    className="text-4xl  text-yellow-500"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{
                      backgroundSize: "300% 300%",
                    }}
                  >
                    Hi, I'm Kinshuk Jain
                  </motion.h1>
                  <p className="text-green-400 text-lg mt-2">
                    Aspiring Cloud Engineer & DevOps Enthusiast
                  </p>
                  <motion.div
                    className="mt-4 h-1 w-24 bg-black mx-auto lg:mx-0"
                    animate={{
                      width: ["24px", "150px", "24px"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  />
                </div>
              </div>

              <motion.div variants={fadeIn} className="space-y-6 text-white">
                <p className="text-lg leading-relaxed">
                  I’m Kinshuk, a third-year Electrical Engineering student from
                  a tier-3 college in India, but my passion lies in solving
                  real-world problems through modern cloud and automation
                  technologies. I’m an INTJ — someone who thrives on strategic
                  thinking, deep focus, and building systems that work in the
                  background to make things faster, smarter, and more scalable.
                </p>

                <p className="text-lg leading-relaxed">
                  Coming from a non-CS background, I’ve self-learned DevOps,
                  AWS, and cloud-native tools through hands-on projects and
                  consistent upskilling. I believe skills are built through
                  action, not credentials.
                </p>

                <p className="text-lg leading-relaxed">
                  Outside tech, I’m a tactical FPS gamer (CODM/Warzone) — a
                  hobby that sharpened my decision-making, patience, and
                  adaptability. I value team building , collaboration, learning by doing, and
                  staying consistent all time. I’m currently
                  looking to apply my skills in cloud and DevOps-focused
                  environments where ownership, creativity, and real-world
                  impact matter more than titles.
                </p>
              </motion.div>
            </motion.div>
          )}

          {/* Interests Section */}
          {activeSection === "interests" && (
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              <motion.h2
                variants={fadeIn}
                className="text-2xl  text-4xl text-center mb-8 text-orange-500"
              >
                What I Love & How I Spend My Free Time
              </motion.h2>

              <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {interests.map((interest) => (
                  <motion.div
                    key={interest.id}
                    variants={fadeIn}
                    whileHover={{
                      scale: 1.03,
                    }}
                    className=" transition-all"
                  >
                    <div className="flex items-center mb-4">
                      {interest.icon}
                      <h3 className="text-xl  ml-3 text-white">
                        {interest.title}
                      </h3>
                    </div>
                    <p className="text-gray-100">{interest.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </div>

        <motion.footer
          className="mt-12 text-center text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p>Created with React, TypeScript, Tailwind CSS & Framer Motion</p>
          <p className="mt-2">
            © {new Date().getFullYear()} - Feel free to connect!
          </p>
        </motion.footer>
      </motion.div>
    </div>
  );
};

export default AboutMe;
