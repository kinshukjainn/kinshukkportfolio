"use client"

import type React from "react"

import { useState } from "react"
import { FaBlog, FaHashtag, FaPodcast } from "react-icons/fa"

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
      icon: <FaPodcast className="text-white " />,
      title: "Listining to People understanding their vision and mentality , thought process , and ya processing knowledge",
      description:
        "I really like to listen to people and understand their vision and mentality, thought process, and ya processing knowledge. I am a big fan of podcasts and I really like to listen to podcasts on various topics like technology, personal development, and other things.",
    },
    {
      id: 2,
      icon: <FaBlog className="text-white " />,
      title: "Writing Blogs and Keep scrolling through the developers portfolio",
      description:
        "Alright so whenever I get time I just keep scrolling through the developers portfolio and try to understand how they are building thier portfolio and what are the things they are doing to make it look good and also I try to write blogs on various topics mostly related to cloud computing and DevOps , web development and other things non-technical in nature too.",
    },
  ]

  return (
    <div className="bg-gradient-to-tr from-black to-[#171717]  text-white min-h-screen p-4 md:p-8 mx-auto">
      {/* Header */}
      <header className="py-8 border-b border-gray-800">
        <h1 className="text-5xl md:text-5xl mb-4 text-white">
          <span className="text-white font-bold">Kinshuk Jain</span>
        </h1>
        <p className="text-lg text-green-300">Aspiring Cloud Engineer & DevOps Enthusiast</p>
      </header>

      {/* Navigation */}
      <nav className="py-6 border-b-3 border-gray-400 mb-8">
        <ul className="flex space-x-8">
          <li>
            <button
              onClick={() => setActiveSection("about")}
              className={`${
                activeSection === "about" ? "text-blue-200 font-bold" : "text-gray-200 hover:text-gray-200"
              }`}
            >
              About Me
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveSection("interests")}
              className={`${
                activeSection === "interests" ? "text-blue-200 font-bold" : "text-gray-200 hover:text-gray-200"
              }`}
            >
              My Interests
            </button>
          </li>
        </ul>
      </nav>

      {/* Content Area */}
      <main>
        {activeSection === "about" && (
          <section className="py-4">
            <h2 className="text-2xl mb-6 flex items-center text-white">
              <span className="mr-2 text-blue-500">
                <FaHashtag />
              </span>
              About Me
            </h2>

            <div className=" pl-4 mb-6">
              <p className="text-gray-100 mb-4">
                I'm Kinshuk, a third-year Electrical Engineering student from a tier-3 college in India, but my passion
                lies in solving real-world problems through modern cloud and automation technologies. I'm an INTJ —
                someone who thrives on strategic thinking, deep focus, and building systems that work in the background
                to make things faster, smarter, and more scalable.
              </p>
            </div>

            <div className=" pl-4 mb-6">
              <p className="text-gray-100 mb-4">
                Coming from a non-CS background, I've self-learned DevOps, AWS, and cloud-native tools through hands-on
                projects and consistent upskilling. I believe skills are built through action, not credentials.
              </p>
            </div>

            <div className=" pl-4">
              <p className="text-gray-100">
                Outside tech, I'm a tactical FPS gamer (CODM/Warzone) — a hobby that sharpened my decision-making,
                patience, and adaptability. I value team building, collaboration, learning by doing, and staying
                consistent all time. I'm currently looking to apply my skills in cloud and DevOps-focused environments
                where ownership, creativity, and real-world impact matter more than titles.
              </p>
            </div>
          </section>
        )}

        {activeSection === "interests" && (
          <section className="py-4">
            <h2 className="text-2xl mb-6 flex items-center text-white">
              <span className="mr-2 text-blue-500">
                <FaHashtag />
              </span>
              What I Love & How I Spend My Free Time
            </h2>

            <div className="space-y-8">
              {interests.map((interest) => (
                <div key={interest.id} className=" pl-4">
                  <div className="flex items-center mb-2">
                    <span className="mr-2 bg-blue-900 p-2 rounded-lg text-xl">{interest.icon}</span>
                    <h3 className="text-lg font-medium text-blue-300">{interest.title}</h3>
                  </div>
                  <p className="text-gray-100">{interest.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-12 pt-6 border-t border-gray-800 text-gray-400 text-sm">
        <p>Created with React, TypeScript & Tailwind CSS</p>
        <p className="mt-2">© {new Date().getFullYear()} - Feel free to connect!</p>
      </footer>
    </div>
  )
}
