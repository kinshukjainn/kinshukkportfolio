"use client"
import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { FaBlog, FaPodcast, FaUser, FaHeart } from "react-icons/fa"

interface Interest {
  id: number
  icon: React.ReactNode
  title: string
  description: string
}

export default function AboutMe() {
  const [activeSection, setActiveSection] = useState<string>("about")

  const interests: Interest[] = [
    {
      id: 1,
      icon: <FaPodcast className="text-yellow-200" />,
      title: "Listening to People understanding their vision and mentality, thought process, and processing knowledge",
      description:
        "I really like to listen to people and understand their vision and mentality, thought process, and processing knowledge. I am a big fan of podcasts and I really like to listen to podcasts on various topics like technology, personal development, and other things.",
    },
    {
      id: 2,
      icon: <FaBlog className="text-yellow-200" />,
      title: "Writing Blogs and Keep scrolling through the developers portfolio",
      description:
        "Alright so whenever I get time I just keep scrolling through the developers portfolio and try to understand how they are building their portfolio and what are the things they are doing to make it look good and also I try to write blogs on various topics mostly related to cloud computing and DevOps, web development and other things non-technical in nature too.",
    },
  ]

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemFade = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  }

  return (
    <div className="min-h-screen select-none bg-black text-gray-300 pt-28">
      <div className="max-w-5xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-12">
        {/* Main Heading */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">About Me</h1>
          <div className="w-20 h-1 bg-yellow-200 mx-auto"></div>
        </motion.div>

        {/* Navigation */}
        <motion.nav
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="py-4 sm:py-6 border border-gray-800 rounded-md mb-6 sm:mb-8 px-4"
        >
          <ul className="flex space-x-4 sm:space-x-8">
            <li>
              <button
                onClick={() => setActiveSection("about")}
                className={`px-3 py-2 rounded-md cursor-pointer transition-all duration-300 text-sm sm:text-base ${
                  activeSection === "about"
                    ? "border-2 border-yellow-200 text-yellow-200 font-medium"
                    : "text-gray-300 hover:bg-[#1e1e1e]"
                }`}
              >
                <span className="flex items-center gap-2">
                  <FaUser />
                  About Me
                </span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection("interests")}
                className={`px-3 py-2 rounded-md cursor-pointer transition-all duration-300 text-sm sm:text-base ${
                  activeSection === "interests"
                    ? "border-2 border-yellow-200 text-yellow-200 font-medium"
                    : "text-gray-300 hover:bg-[#1e1e1e]"
                }`}
              >
                <span className="flex items-center gap-2">
                  <FaHeart />
                  My Interests
                </span>
              </button>
            </li>
          </ul>
        </motion.nav>

        {/* Content Area */}
        <main>
          {activeSection === "about" && (
            <motion.section initial="hidden" animate="visible" variants={fadeIn} className="py-4">
              <div className="bg-black border border-gray-800 rounded-md p-4 sm:p-6 md:p-8 shadow-xl mb-6 sm:mb-8">
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  className="space-y-4 sm:space-y-6"
                >
                  <motion.div variants={itemFade} className="pl-0 sm:pl-4">
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                      I'm Kinshuk, a third-year Electrical Engineering student from a tier-3 college in India, but my
                      passion lies in solving real-world problems through modern cloud and automation technologies. I'm
                      an INTJ — someone who thrives on strategic thinking, deep focus, and building systems that work in
                      the background to make things faster, smarter, and more scalable.
                    </p>
                  </motion.div>
                  <motion.div variants={itemFade} className="pl-0 sm:pl-4">
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                      Coming from a non-CS background, I've self-learned DevOps, AWS, and cloud-native tools through
                      hands-on projects and consistent upskilling. I believe skills are built through action, not
                      credentials.
                    </p>
                  </motion.div>
                  <motion.div variants={itemFade} className="pl-0 sm:pl-4">
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                      Outside tech, I'm a tactical FPS gamer (CODM/Warzone) — a hobby that sharpened my decision-making,
                      patience, and adaptability. I value team building, collaboration, learning by doing, and staying
                      consistent all time. I'm currently looking to apply my skills in cloud and DevOps-focused
                      environments where ownership, creativity, and real-world impact matter more than titles.
                    </p>
                  </motion.div>
                </motion.div>
              </div>
            </motion.section>
          )}

          {activeSection === "interests" && (
            <motion.section initial="hidden" animate="visible" variants={fadeIn} className="py-4">
              <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-gray-800 rounded-md p-4 sm:p-6 md:p-8 shadow-xl mb-6 sm:mb-8">
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  className="space-y-6 sm:space-y-8"
                >
                  {interests.map((interest) => (
                    <motion.div
                      key={interest.id}
                      variants={itemFade}
                      className="p-4 bg-[#1e1e1e] border border-gray-700 rounded-md"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3">
                        <span className="p-3 bg-[#252525] border border-gray-600 rounded-md text-xl w-fit">
                          {interest.icon}
                        </span>
                        <h3 className="text-base sm:text-lg font-medium text-white">{interest.title}</h3>
                      </div>
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed pl-0 sm:pl-4">
                        {interest.description}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.section>
          )}
        </main>

        {/* Footer */}
        <motion.footer
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mt-8 sm:mt-12 pt-4 sm:pt-6 border-t border-gray-800 rounded-md text-gray-400 text-xs sm:text-sm"
        >
          <div className="border border-gray-800 rounded-md p-4">
            <p>Created with React, TypeScript & Tailwind CSS</p>
            <p className="mt-2">© {new Date().getFullYear()} - Feel free to connect!</p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="flex items-center gap-2 text-gray-400 mt-4 text-xs sm:text-sm"
            >
              <span>Built with</span>
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  duration: 1.5,
                }}
              >
                <FaHeart className="text-red-500" />
              </motion.div>
              <span>and lots of chai</span>
            </motion.div>
          </div>
        </motion.footer>
      </div>
    </div>
  )
}
