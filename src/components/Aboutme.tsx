"use client"

import type React from "react"

import { useState } from "react"
import { FaFilm, FaGamepad, FaHashtag } from "react-icons/fa"
import { SiMyanimelist } from "react-icons/si"

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
      icon: <FaFilm className="text-purple-500" />,
      title: "Movies",
      description:
        "I'm a huge fan of sci-fi and psychological thrillers. Marvel and DC are among my favorite Genre of movies. I enjoy films that make me think and leave me contemplating long after they end.",
    },
    {
      id: 2,
      icon: <SiMyanimelist className="text-red-500" />,
      title: "Anime",
      description:
        "I love anime with deep storylines and unique art styles. Some of my favorites include 'Attack on Titan', 'One Punch Man', and 'Demon Slayer'. I appreciate how anime can explore complex themes in creative ways.",
    },
    {
      id: 3,
      icon: <FaGamepad className="text-blue-500" />,
      title: "Gaming",
      description:
        "I enjoy both indie and AAA titles, especially RPGs and strategy games. Games with compelling narratives and innovative mechanics always catch my attention. For ex: Call of Duty Mobile, Valorant, and Warzone.",
    },
  ]

  return (
    <div className="bg-black font-mono text-white min-h-screen p-4 md:p-8 max-w-4xl mx-auto">
      {/* Header */}
      <header className="py-8 border-b border-gray-800">
        <h1 className="text-3xl md:text-4xl mb-4 text-white">
          <span className="text-yellow-400">Kinshuk Jain</span>
        </h1>
        <p className="text-lg text-gray-300">Aspiring Cloud Engineer & DevOps Enthusiast</p>
      </header>

      {/* Navigation */}
      <nav className="py-6 border-b border-gray-800 mb-8">
        <ul className="flex space-x-8">
          <li>
            <button
              onClick={() => setActiveSection("about")}
              className={`${
                activeSection === "about" ? "text-yellow-400 font-bold" : "text-gray-400 hover:text-gray-200"
              }`}
            >
              About Me
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveSection("interests")}
              className={`${
                activeSection === "interests" ? "text-yellow-400 font-bold" : "text-gray-400 hover:text-gray-200"
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
              <span className="mr-2 text-yellow-400">
                <FaHashtag />
              </span>
              About Me
            </h2>

            <div className="border-l-4 border-gray-800 pl-4 mb-6">
              <p className="text-gray-300 mb-4">
                I'm Kinshuk, a third-year Electrical Engineering student from a tier-3 college in India, but my passion
                lies in solving real-world problems through modern cloud and automation technologies. I'm an INTJ —
                someone who thrives on strategic thinking, deep focus, and building systems that work in the background
                to make things faster, smarter, and more scalable.
              </p>
            </div>

            <div className="border-l-4 border-gray-800 pl-4 mb-6">
              <p className="text-gray-300 mb-4">
                Coming from a non-CS background, I've self-learned DevOps, AWS, and cloud-native tools through hands-on
                projects and consistent upskilling. I believe skills are built through action, not credentials.
              </p>
            </div>

            <div className="border-l-4 border-gray-800 pl-4">
              <p className="text-gray-300">
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
              <span className="mr-2 text-yellow-400">
                <FaHashtag />
              </span>
              What I Love & How I Spend My Free Time
            </h2>

            <div className="space-y-8">
              {interests.map((interest) => (
                <div key={interest.id} className="border-l-4 border-gray-800 pl-4">
                  <div className="flex items-center mb-2">
                    <span className="mr-2 text-xl">{interest.icon}</span>
                    <h3 className="text-lg font-medium text-yellow-400">{interest.title}</h3>
                  </div>
                  <p className="text-gray-300">{interest.description}</p>
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
