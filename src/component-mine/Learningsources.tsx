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
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiDocker,
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
    title: "React",
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
        url: "https://react.dev/learn",
        type: "tutorial",
      },
      {
        title: "React Course - freeCodeCamp",
        url: "https://www.freecodecamp.org/learn/front-end-development-libraries/",
        type: "course",
      },
      {
        title: "React Challenges",
        url: "https://reactjs.org/community/examples.html",
        type: "practice",
      },
    ],
  },
  {
    id: "typescript",
    title: "TypeScript",
    category: "Language",
    difficulty: "Intermediate",
    description:
      "Typed superset of JavaScript that compiles to plain JavaScript",
    icon: <SiTypescript className="text-2xl" />,
    tags: ["javascript", "types", "language", "microsoft"],
    links: [
      {
        title: "TypeScript Handbook",
        url: "https://www.typescriptlang.org/docs/",
        type: "documentation",
      },
      {
        title: "TypeScript Tutorial",
        url: "https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html",
        type: "tutorial",
      },
      {
        title: "TypeScript Course",
        url: "https://www.udemy.com/course/understanding-typescript/",
        type: "course",
      },
      {
        title: "Type Challenges",
        url: "https://github.com/type-challenges/type-challenges",
        type: "practice",
      },
    ],
  },
  {
    id: "nextjs",
    title: "Next.js",
    category: "Framework",
    difficulty: "Intermediate",
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
        url: "https://nextjs.org/learn",
        type: "tutorial",
      },
      {
        title: "Next.js Course",
        url: "https://www.udemy.com/course/nextjs-react-the-complete-guide/",
        type: "course",
      },
      {
        title: "Next.js Examples",
        url: "https://github.com/vercel/next.js/tree/canary/examples",
        type: "practice",
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
      {
        title: "Tailwind Course",
        url: "https://www.youtube.com/watch?v=UBOj6rqRUME",
        type: "course",
      },
      {
        title: "Tailwind Components",
        url: "https://tailwindui.com/components",
        type: "practice",
      },
    ],
  },
  {
    id: "nodejs",
    title: "Node.js",
    category: "Backend",
    difficulty: "Intermediate",
    description:
      "JavaScript runtime built on Chrome's V8 JavaScript engine for server-side development",
    icon: <FaNodeJs className="text-2xl" />,
    tags: ["javascript", "backend", "server", "runtime"],
    links: [
      {
        title: "Node.js Documentation",
        url: "https://nodejs.org/en/docs/",
        type: "documentation",
      },
      {
        title: "Node.js Tutorial",
        url: "https://nodejs.org/en/docs/guides/getting-started-guide/",
        type: "tutorial",
      },
      {
        title: "Node.js Course",
        url: "https://www.freecodecamp.org/learn/back-end-development-and-apis/",
        type: "course",
      },
      {
        title: "Node.js Exercises",
        url: "https://nodeschool.io/",
        type: "practice",
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
        title: "Python Tutorial",
        url: "https://docs.python.org/3/tutorial/",
        type: "tutorial",
      },
      {
        title: "Python Course",
        url: "https://www.freecodecamp.org/learn/scientific-computing-with-python/",
        type: "course",
      },
      {
        title: "Python Challenges",
        url: "https://www.hackerrank.com/domains/python",
        type: "practice",
      },
    ],
  },
  {
    id: "mongodb",
    title: "MongoDB",
    category: "Database",
    difficulty: "Intermediate",
    description:
      "NoSQL document database with flexible schema and horizontal scaling",
    icon: <SiMongodb className="text-2xl" />,
    tags: ["database", "nosql", "document", "scaling"],
    links: [
      {
        title: "MongoDB Documentation",
        url: "https://docs.mongodb.com/",
        type: "documentation",
      },
      {
        title: "MongoDB Tutorial",
        url: "https://docs.mongodb.com/manual/tutorial/",
        type: "tutorial",
      },
      {
        title: "MongoDB Course",
        url: "https://university.mongodb.com/",
        type: "course",
      },
      {
        title: "MongoDB Practice",
        url: "https://www.mongodb.com/try",
        type: "practice",
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
        url: "https://docs.docker.com/get-started/",
        type: "tutorial",
      },
      {
        title: "Docker Course",
        url: "https://www.docker.com/101-tutorial",
        type: "course",
      },
      {
        title: "Docker Labs",
        url: "https://labs.play-with-docker.com/",
        type: "practice",
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
    <div className="min-h-screen pt-28 bg-black text-white ">
      {/* Terminal Header */}
      <div className=" p-4">
        <div className="flex items-center space-x-2 text-yellow-400">
          <FaTerminal className="text-lg" />
          <span className="text-xl">learning-hub:~$</span>
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
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-yellow-400" />
            <input
              type="text"
              placeholder="search your resources...technology...."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border-b-2 border-white  pl-12 pr-4 py-3 text-white placeholder-gray-400 outline-none"
            />
          </div>

          {/* Filter Toggle */}
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 px-4 py-2 bg-[#141414] rounded-xl  transition-colors outline-none"
            >
              <FaFilter className="text-yellow-400" />
              <span>Filters</span>
            </button>

            <div className="text-lg text-gray-100">
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
                className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 p-4 bg-[#141414] rounded-3xl"
              >
                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Category
                  </label>
                  <select
                    title="Category"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full bg-[#070707]  rounded-xl  px-3 py-2 text-white focus:border-yellow-400 focus:outline-none"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Difficulty
                  </label>
                  <select
                    title="Difficulty"
                    value={selectedDifficulty}
                    onChange={(e) => setSelectedDifficulty(e.target.value)}
                    className="w-full bg-[#070707] rounded-xl px-3 py-2 text-white focus:border-yellow-400 focus:outline-none"
                  >
                    {difficulties.map((difficulty) => (
                      <option key={difficulty} value={difficulty}>
                        {difficulty}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Sort By
                  </label>
                  <select
                    title="Sort By"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full bg-[#070707] rounded-xl px-3 py-2 text-white focus:border-yellow-400 focus:outline-none"
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
                className="bg-[#070707]  rounded-xl p-6  outline-none transition-colors group"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-yellow-400">{resource.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {resource.title}
                      </h3>
                      <div className="flex items-center space-x-2 text-sm">
                        <span className="text-gray-100">
                          {resource.category}
                        </span>
                        <span className="text-gray-100">|</span>
                        <span
                          className={`px-2 py-1 rounded text-xs ${
                            resource.difficulty === "Beginner"
                              ? "text-white font-semibold"
                              : resource.difficulty === "Intermediate"
                              ? " font-semibold text-yellow-300"
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
                <p className="text-gray-100 text-md mb-4 leading-relaxed">
                  {resource.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {resource.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1  text-gray-100 text-sm text-orange-300"
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
                      className="flex items-center justify-between p-2 underline   transition-colors group/link"
                    >
                      <div className="flex items-center space-x-2">
                        <span className="text-yellow-400 text-sm">
                          {link.type === "documentation" && <FaCode />}
                          {link.type === "tutorial" && <FaTerminal />}
                          {link.type === "course" && <FaShare />}
                          {link.type === "practice" && <FaGitAlt />}
                        </span>
                        <span className="text-white underline hover:text-blue-400 text-sm">{link.title}</span>
                      </div>
                      <FaExternalLinkAlt className="text-yellow-200 text-xs opacity-0 group-hover/link:opacity-100 transition-opacity" />
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
            <FaTerminal className="text-4xl text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl text-gray-400 mb-2">No resources found</h3>
            <p className="text-gray-500">
              Try adjusting your search or filters
            </p>
          </motion.div>
        )}
      </div>

      {/* Terminal Footer */}
      <div className="border-t border-gray-800 p-4 mt-12">
        <div className="text-center text-gray-500 text-sm">
          <span className="text-yellow-400">learning-hub@terminal</span> - Your
          gateway to tech mastery
        </div>
      </div>
    </div>
  );
}
