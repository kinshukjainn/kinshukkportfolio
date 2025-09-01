"use client";

import type React from "react";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaSearch,
  FaReact,
  FaPython,
  FaNodeJs,
  FaGitAlt,
  FaCode,
  FaExternalLinkAlt,
  FaFilter,
  FaTerminal,
  FaShare,
  FaJava,
  FaRust,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiDocker,
  SiJavascript,
  SiCplusplus,
} from "react-icons/si";

interface LearningResource {
  id: string;
  title: string;
  category: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  description: string;
  links: {
    title: string;
    url: string;
    type: "documentation" | "tutorial" | "course" | "practice";
  }[];
  icon: React.ReactNode;
  tags: string[];
}

const learningResources: LearningResource[] = [
  {
    id: "react",
    title: "React (vite bundler is recommended to learn react for beginners)",
    category: "Frontend",
    difficulty: "Intermediate",
    description:
      "A JavaScript library for building user interfaces with component-based architecture",
    icon: <FaReact className="text-2xl" />,
    tags: ["javascript", "frontend", "ui", "components"],
    links: [
      {
        title: "Official Documentation",
        url: "https://react.dev",
        type: "documentation",
      },
      {
        title: "React Tutorial",
        url: "https://youtu.be/CgkZ7MvWUAA?si=1B7NUnJM49J9xmqD",
        type: "tutorial",
      },
      {
        title: "React Course - youtube",
        url: "https://youtu.be/Xe8CkYZvCig?si=9Sai_PrMw33aJo87",
        type: "course",
      },
    ],
  },
  {
    id: "Javascript",
    title: "Javascript",
   category: "Language",
    difficulty: "Intermediate",
    description:
      "Typed superset of JavaScript that compiles to plain JavaScript",
    icon: <SiJavascript className="text-2xl" />,
    tags: ["javascript", "types", "language", "microsoft"],
    links: [
      {
        title: "Javascript Handbook",
        url: "https://www.typescriptlang.org/docs/",
        type: "documentation",
      },
      {
        title: "Javascript Tutorial",
        url: "https://youtu.be/PkZNo7MFNFg?si=4otCi1WT9ZEMc6cO",
        type: "tutorial",
      },
      {
        title: "Javascript Course",
        url: "https://youtu.be/lfmg-EJ8gm4?si=lV5dfCjaL22PqKOP",
        type: "course",
      }
    ],
  },
  {
    id: "nextjs",
    title: "Next.js (Learn after react and backend dev course for better understanding)",
    category: "Framework",
    difficulty: "Advanced",
    description:
      "React framework with server-side rendering and static site generation",
    icon: <SiNextdotjs className="text-2xl" />,
    tags: ["react", "ssr", "framework", "vercel"],
    links: [
      {
        title: "Next.js Documentation",
        url: "https://nextjs.org/docs",
        type: "documentation",
      },
      {
        title: "Next.js Tutorial",
        url: "https://youtu.be/Zq5fmkH0T78?si=IcYKtPor1wq1dUkl",
        type: "tutorial",
      },
      {
        title: "Next.js Course",
        url: "https://youtu.be/zLJoVRleOuc?si=EmUxtg1n0D6lKrTL",
        type: "course",
      },
    ],
  },
  {
    id: "CPP",
    title: "C++",
   category: "Language",
    difficulty: "Intermediate",
    description:
      "A high-performance programming language widely used for system/software development and game programming.",
    icon: <SiCplusplus className="text-2xl" />,
    tags: ["cpp", "programming", "language", "system", "software"],
    links: [
      {
        title: "C++ Documentation",
        url: "https://en.cppreference.com/w/",
        type: "documentation",
      },
      {
        title: "C++ Tutorial",
        url: "https://youtu.be/-TkoO8Z07hI?si=0gcZNSlAQFXkDlMs",
        type: "tutorial",
      },
      {
        title: "C++ Course",
        url: "https://youtu.be/8jLOx1hD3_o?si=mmqSTqh8iJEK2KHf",
        type: "course",
      },
    ],
  },
  {
    id: "Java",
    title: "Java",
   category: "Language",
    difficulty: "Intermediate",
    description:
      "A high-performance programming language widely used for system/software development and game programming.",
    icon: <FaJava className="text-2xl" />,
    tags: ["java", "programming", "language", "system", "software"],
    links: [
      {
        title: "Java Documentation",
        url: "https://docs.oracle.com/en/java/",
        type: "documentation",
      },
      {
        title: "Java Tutorial",
        url: "https://youtu.be/xTtL8E4LzTQ?si=nlAvPTcjPFPKA1cz",
        type: "tutorial",
      },
      {
        title: "Java Course",
        url: "",
        type: "course",
      },
    ],
  },
  {
    id: "Rust",
    title: "Rust (Not for beginners or freshers in college)",
   category: "Language",
    difficulty: "Advanced",
    description:
      "A systems programming language focused on safety, speed, and concurrency.",
    icon: <FaRust className="text-2xl" />,
    tags: ["rust", "programming", "language", "system", "software"],
    links: [
      {
        title: "Rust Documentation",
        url: "https://doc.rust-lang.org/book/",
        type: "documentation",
      },
      {
        title: "Rust Tutorial",
        url: "https://youtu.be/qP7LzZqGh30?si=MLEsIlci99iwZuc5",
        type: "tutorial",
      },
      {
        title: "Rust Course",
        url: "https://youtube.com/playlist?list=PLinedj3B30sA_M0oxCRgFzPzEMX3CSfT5&si=TMmrL8OyJYkBQZ15",
        type: "course",
      },
    ],
  },
  {
    id: "tailwindcss",
    title: "Tailwind CSS",
    category: "Styling",
    difficulty: "Beginner",
    description:
      "Utility-first CSS framework for rapidly building custom user interfaces",
    icon: <SiTailwindcss className="text-2xl" />,
    tags: ["css", "styling", "utility", "responsive"],
    links: [
      {
        title: "Tailwind Documentation",
        url: "https://tailwindcss.com/docs",
        type: "documentation",
      },
      {
        title: "Tailwind Tutorial",
        url: "https://tailwindcss.com/docs/installation",
        type: "tutorial",
      },
    ],
  },
  {
    id: "Backend",
    title: "Backend Development (Node.js)",
    category: "Backend",
    difficulty: "Intermediate",
    description:
      "JavaScript runtime built on Chrome's V8 JavaScript engine for server-side development",
    icon: <FaNodeJs className="text-2xl" />,
    tags: ["javascript", "backend", "Mongodb" , "zod" , "React" ,  "Express" , "server", "runtime"],
    links: [
      {
        title: "Backend Dev Tutorial",
        url: "https://youtube.com/playlist?list=PLu71SKxNbfoBGh_8p_NS-ZAh6v7HhYqHW&si=6v8eY-Hua7gLHLoh",
        type: "tutorial",
      },
    ],
  },
  {
    id: "python",
    title: "Python",
    category: "Language",
    difficulty: "Beginner",
    description:
      "High-level programming language with simple syntax and powerful libraries",
    icon: <FaPython className="text-2xl" />,
    tags: ["programming", "language", "data-science", "web"],
    links: [
      {
        title: "Python Documentation",
        url: "https://docs.python.org/3/",
        type: "documentation",
      },
      {
        title: "Python Tutorial -1",
        url: "https://youtu.be/ix9cRaBkVe0?si=A07zDuUaLk0G3k8q",
        type: "tutorial",
      },
      {
        title: "Python Tutorial -2",
        url: "https://youtube.com/playlist?list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg&si=2a5f5cn3MSMK2TNv",
        type: "tutorial",
      },
      {
        title: "Python Tutorial -3",
        url: "https://youtube.com/playlist?list=PLu71SKxNbfoBsMugTFALhdLlZ5VOqCg2s&si=Pz8DQez6PgPdK4Ta",
        type: "tutorial",
      },
    ],
  },
  {
    id: "docker",
    title: "Docker",
    category: "DevOps",
    difficulty: "Intermediate",
    description:
      "Platform for developing, shipping, and running applications in containers",
    icon: <SiDocker className="text-2xl" />,
    tags: ["containers", "devops", "deployment", "virtualization"],
    links: [
      {
        title: "Docker Documentation",
        url: "https://docs.docker.com/",
        type: "documentation",
      },
      {
        title: "Docker Tutorial",
        url: "https://youtu.be/exmSJpJvIPs?si=bJVKo6RvzhfmiXhP",
        type: "tutorial",
      },
      {
        title: "Docker Course",
        url: "https://youtu.be/31k6AtW-b3Y?si=SblqKJ6ZVBSVSwnq",
        type: "course",
      },
    ],
  },
];

const categories = [
  "All",
  "Frontend",
  "Backend",
  "Language",
  "Framework",
  "Styling",
  "Database",
  "DevOps",
];
const difficulties = ["All", "Beginner", "Intermediate", "Advanced"];
const sortOptions = ["Name", "Difficulty", "Category"];

export default function TerminalLearningHub() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [sortBy, setSortBy] = useState("Name");
  const [showFilters, setShowFilters] = useState(false);

  const filteredAndSortedResources = useMemo(() => {
    const filtered = learningResources.filter((resource) => {
      const matchesSearch =
        resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        );

      const matchesCategory =
        selectedCategory === "All" || resource.category === selectedCategory;
      const matchesDifficulty =
        selectedDifficulty === "All" ||
        resource.difficulty === selectedDifficulty;

      return matchesSearch && matchesCategory && matchesDifficulty;
    });

    // Sort resources
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "Name":
          return a.title.localeCompare(b.title);
        case "Difficulty": {
          const difficultyOrder = { Beginner: 1, Intermediate: 2, Advanced: 3 };
          return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
        }
        case "Category":
          return a.category.localeCompare(b.category);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, selectedDifficulty, sortBy]);

  return (
    <div className="min-h-screen pt-28 bg-gray-50 text-neutral-900">
      {/* Terminal Header */}
      <div className=" p-4">
        <div className="flex items-center space-x-2 text-black font-medium">
          <span className="text-4xl ">Learning-hub</span>
          <span className="animate-pulse">_</span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Search Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="relative mb-4">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-900" />
            <input
              type="text"
              placeholder="search your resources...technology...."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white border border-gray-300 shadow-gray-200 shadow-xl pl-12 pr-4 rounded-xl py-4 text-black placeholder-gray-900 outline-none"
            />
          </div>

          {/* Filter Toggle */}
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 px-5 py-3 bg-white rounded-xl border text-lg border-gray-300 shadow-xl shadow-gray-200  transition-colors outline-none"
            >
              <FaFilter className="text-black" />
              <span>Filters</span>
            </button>

            <div className="text-lg text-gray-900">
              {filteredAndSortedResources.length} resources found
            </div>
          </div>

          {/* Filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 p-4 bg-white shadow-xl shadow-gray-200 border border-gray-300 rounded-3xl"
              >
                <div>
                  <label className="block text-lg text-gray-900 mb-2">
                    Category
                  </label>
                  <select
                    title="Category"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full bg-gray-100  rounded-full  px-3 py-3 text-black font-medium focus:border-yellow-400 focus:outline-none"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-lg text-gray-900 mb-2">
                    Difficulty
                  </label>
                  <select
                    title="Difficulty"
                    value={selectedDifficulty}
                    onChange={(e) => setSelectedDifficulty(e.target.value)}
                    className="w-full bg-gray-100  rounded-full  px-3 py-3 text-black font-medium focus:border-yellow-400 focus:outline-none"
                  >
                    {difficulties.map((difficulty) => (
                      <option key={difficulty} value={difficulty}>
                        {difficulty}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-lg text-gray-900 mb-2">
                    Sort By
                  </label>
                  <select
                    title="Sort By"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full bg-gray-100  rounded-lg  px-3 py-3 text-black font-medium focus:border-yellow-400 focus:outline-none"
                  >
                    {sortOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Resources Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredAndSortedResources.map((resource, index) => (
              <motion.div
                key={resource.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white  text-neutral-900 rounded-2xl border-2 border-gray-200 shadow-xl shadow-gray-300 p-6  outline-none transition-colors group"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-yellow-400">{resource.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-black">
                        {resource.title}
                      </h3>
                      <div className="flex items-center space-x-2 text-sm">
                        <span className="text-gray-900">
                          {resource.category}
                        </span>
                        <span className="text-gray-900">|</span>
                        <span
                          className={`px-2 py-1 rounded text-sm ${
                            resource.difficulty === "Beginner"
                              ? "text-white font-semibold"
                              : resource.difficulty === "Intermediate"
                              ? " font-semibold text-blue-900"
                              : "font-semibold text-red-300"
                          }`}
                        >
                          {resource.difficulty}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-900 font-medium text-md mb-4 leading-relaxed">
                  {resource.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {resource.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1  text-sm text-blue-900"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="space-y-2">
                  {resource.links.map((link, linkIndex) => (
                    <motion.a
                      key={linkIndex}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 4 }}
                      className="flex items-center justify-between p-2    transition-colors group/link"
                    >
                      <div className="flex items-center space-x-2">
                        <span className="text-black  text-sm">
                          {link.type === "documentation" && <FaCode />}
                          {link.type === "tutorial" && <FaTerminal />}
                          {link.type === "course" && <FaShare />}
                          {link.type === "practice" && <FaGitAlt />}
                        </span>
                        <span className="text-black bg-white p-2 rounded-md border-gray-300 border shadow-xl shadow-gray-300 text-md">{link.title}</span>
                      </div>
                      <FaExternalLinkAlt className="text-black text-md opacity-0 group-hover/link:opacity-100 transition-opacity" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Results */}
        {filteredAndSortedResources.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="p-4 bg-gray-300 rounded-md w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <FaTerminal className="text-4xl text-black mx-auto mb-4" />
            </div>
            <h3 className="text-xl text-gray-900  mb-2">No resources found ,Please adjust your query</h3>
          </motion.div>
        )}
      </div>

      {/* Terminal Footer */}
      <div className="border-t border-gray-800 p-4 mt-12">
        <div className="text-center text-gray-500 text-sm">
          <span className=" text-white  font-bold">learning-hub@terminal</span> - Your
          gateway to tech mastery
        </div>
      </div>
    </div>
  );
}
