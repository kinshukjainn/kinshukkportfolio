import { useState, useEffect, useRef } from "react";
import {
  FaBook,
  FaVideo,
  FaServer,
  FaExternalLinkAlt,
  FaCode,
  FaCloud,
  FaHistory,
  FaDatabase,
} from "react-icons/fa";
import { BiSearch, BiFilter, BiX, BiChevronDown, BiSort } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";
import { GrResources } from "react-icons/gr";
import { AiOutlineBranches } from "react-icons/ai";

// Resource type definition
type Category = "docs" | "videos" | "services" | "programming" | "aws" | string;

interface Resource {
  title: string;
  description: string;
  urls: string[];
  categories: Category[];
}

// Resources data - expanded with multiple entries
const resources: Resource[] = [
  {
    title: "AWS Official Documentation",
    description: "Comprehensive documentation for all AWS services.",
    urls: ["https://docs.aws.amazon.com/"],
    categories: ["docs", "aws"],
  },
  {
    title: "AWS Well-Architected Framework",
    description:
      "Best practices for designing and operating reliable, secure, efficient, and cost-effective systems in the cloud.",
    urls: ["https://aws.amazon.com/architecture/well-architected/"],
    categories: ["docs", "aws"],
  },
  {
    title: "AWS re:Invent Videos",
    description:
      "Conference sessions from AWS re:Invent covering the latest services and features.",
    urls: ["https://aws.amazon.com/events/reinvent/"],
    categories: ["videos", "aws"],
  },
  {
    title: "AWS Console",
    description: "Web interface for accessing and managing AWS services.",
    urls: ["https://console.aws.amazon.com/"],
    categories: ["services", "aws"],
  },
  {
    title: "AWS CloudFormation",
    description:
      "Infrastructure as code service that allows you to model, provision, and manage AWS resources.",
    urls: ["https://aws.amazon.com/cloudformation/"],
    categories: ["services", "aws", "programming"],
  },
  {
    title: "AWS Lambda Documentation",
    description:
      "Learn how to run code without provisioning or managing servers.",
    urls: ["https://docs.aws.amazon.com/lambda/"],
    categories: ["docs", "aws","services"],
  },
  {
    title: "AWS SDK for JavaScript",
    description:
      "Official SDK for building applications with JavaScript and TypeScript.",
    urls: ["https://aws.amazon.com/sdk-for-javascript/"],
    categories: ["programming", "aws"],
  },
  {
    title: "AWS Builders Online Series",
    description:
      "Free technical learning series focused on building solutions on AWS.",
    urls: ["https://aws.amazon.com/events/builders-online-series/"],
    categories: ["videos", "aws"],
  },
  {
    title: "Python : One shot : Part -1 ",
    description: "Free python learning oneshot part -1  resource from youtube",
    urls: ["https://youtu.be/v9bOWjwdTlg?si=C9KF_ePHqsM3tG6R"],
    categories: ["videos", "Programming"],
  },
  {
    title: "Python : One shot : Part -2 ",
    description: "Free python learning oneshot part -2  resource from youtube",
    urls: ["https://youtu.be/Cri8__uGk-g?si=TzzbwK4CuM3Aq8Ho"],
    categories: ["videos", "Programming"],
  },
  {
    title: "Python : Playlist : Youtube",
    description: "Free python learning resource from youtube",
    urls: [
      "https://youtube.com/playlist?list=PLu71SKxNbfoBsMugTFALhdLlZ5VOqCg2s&si=9rM_n1W16zzdrjYh",
    ],
    categories: ["videos", "Programming"],
  },
  {
    title: "Javascript : playlist : Youtube",
    description: "Free javascript playlist learning resource from youtube",
    urls: [
      "https://youtube.com/playlist?list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&si=LImeM9_7TOueGT5T",
    ],
    categories: ["videos", "Programming"],
  },
  {
    title: "Javascript : One shot : Part -1",
    description:
      "Free javascript oneshot part -1 learning resource from youtube",
    urls: ["https://youtu.be/sscX432bMZo?si=pdS3QtaU4zZcRP7d"],
    categories: ["videos", "Programming"],
  },
  {
    title: "Javascript : One shot : Part -2",
    description:
      "Free javascript one shot part -2  learning resource from youtube",
    urls: ["https://youtu.be/_TjtAyMkiTI?si=-T0DZ85wMd861x4n"],
    categories: ["videos", "aws"],
  },
  {
    title: "Typescript Video tutorial",
    description: "Free typescript learning resource from youtube",
    urls: ["https://youtu.be/30LWjhZzg50?si=NZy1N0tWvN12uNVV"],
    categories: ["videos", "Programming"],
  },
  {
    title: "Typescript From thier Own Documentation",
    description: "Free typescript learning resource from youtube",
    urls: ["https://www.typescriptlang.org/docs/"],
    categories: ["Documentation", "Programming"],
  },
  {
    title: "Python from thier own Documentation",
    description: "Free python learning resource from thier own documentation",
    urls: ["hhttps://docs.python.org/3/"],
    categories: ["videos", "Programming"],
  },
  {
    title: "Python + Boto3 Tutorial from videos Playlist",
    description: "Free python + boto3 learning resource from youtube",
    urls: [
      "https://youtube.com/playlist?list=PLjl2dJMjkDjlcI3SQErSq4UMX3okzafvO&si=AfdEIZZ0fmViggiN/",
    ],
    categories: ["videos", "Programming", "aws"],
  },
  {
    title: "React Course one shot - part - 1 ",
    description:
      "React course from youtube one shot part - 1  learning resource",
    urls: ["https://youtu.be/FxgM9k1rg0Q?si=OKxTCYNTKlPpQu0x"],
    categories: ["videos", "Programming"],
  },
  {
    title: "React course one shot - part - 2",
    description:
      "React course from youtube one shot part - 2  learning resource",
    urls: ["https://youtu.be/IdlF1zsUN3M?si=kntKouZuSj7f5_Wu"],
    categories: ["videos", "Programming"],
  },
  {
    title: "React course playlist",
    description: "React course playlist on youtube",
    urls: [
      "https://youtube.com/playlist?list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige&si=icukzrf_Jgz-srtW",
    ],
    categories: ["videos", "Programming"],
  },
  {
    title:
      "Complete Backend course playlist (MERN): MongoDB : Expressjs : React(Vite) : Nodejs ",
    description: "complete backend in mern stack course from youtube",
    urls: [
      "https://youtube.com/playlist?list=PLu71SKxNbfoBGh_8p_NS-ZAh6v7HhYqHW&si=jJGTvKkOe-9PJrsa",
    ],
    categories: ["videos", "Programming"],
  },
  {
    title: "Complete , backend tutorial one shot part -1 ",
    description: "Complete backend in mern one shot part - 1",
    urls: ["https://youtu.be/7fjOw8ApZ1I?si=ij1L0IOdDy14ZYb8"],
    categories: ["videos", "aws"],
  },
  {
    title: "Complete backend tutorial one shot part -2 ",
    description: "Complete backend in mern one shot part - 2 learning resource",
    urls: ["https://youtu.be/8k-kK3tsJFY?si=tZixNUsY23t96SwW"],
    categories: ["videos", "aws"],
  },
  {
    title: "Next Js 15 Complete course ",
    description: "Next js 15 Complete course from youtube",
    urls: ["https://youtu.be/Zq5fmkH0T78?si=rQ3WFNkFWuD45bNc"],
    categories: ["videos", "Programming"],
  },
  {
    title: "Next Js 15 Complete course - (1) ",
    description:
      "Next js complete course for begineers with project based learning from youtube",
    urls: [
      "https://youtube.com/playlist?list=PLu71SKxNbfoBAaWGtn9GA2PTw0HO0tXzq&si=JxXh4xR0_kX6PIUl",
    ],
    categories: ["videos", "Programming"],
  },
  {
    title: "Clerk Auth + Nextjs Tutorial",
    description:
      "Clerk authentication with nextjs integration on youtube for free check out the playlist",
    urls: [
      "https://youtube.com/playlist?list=PLRAV69dS1uWRH0QDzQaKLQEYD26YCQ5eS&si=WgY_bysKj1pJKL0r",
    ],
    categories: ["videos", "Programming"],
  },
  {
    title: "Angular Js Complete course video tutorials",
    description:
      "Angular js a web framework for building web applications complete tutorials from youtube",
    urls: ["https://youtu.be/f7BJFTEbc10?si=pSCHll8WJ5bmJCqP"],
    categories: ["videos", "Programming"],
  },
  {
    title: "AWS Simple storage Services course complete from aws educate ",
    description:
      "This is a badge which you can earn by registering and making account aws educate programme which has multiple free courses and modules to complete and also helps you prepare for aws certification.",
    urls: ["https://aws.amazon.com/education/awseducate/"],
    categories: ["videos", "services" , "aws"],
  },
  {
    title: "AWS Getting started with Serverless services with aws educate ",
    description:
      "This is a badge which you can earn by registering and making account aws educate programme which has multiple free courses and modules to complete and also helps you prepare for aws certification",
    urls: ["https://aws.amazon.com/education/awseducate/"],
    categories: ["videos","services" , "aws"],
  },
  {
    title:
      "AWS Getting started with Machine learning services with aws educate",
    description:
      "This is a badge which you can earn by registering and making account aws educate programme which has multiple free courses and modules to complete and also helps you prepare for aws certification",
    urls: ["https://aws.amazon.com/education/awseducate/"],
    categories: ["videos", "services" , "aws"],
  },
  {
    title: "AWS Amplify Documentation",
    description: "Framework for building full-stack applications on AWS.",
    urls: ["https://docs.amplify.aws/"],
    categories: ["docs", "services"  ,"aws"],
  },
];

// Define category metadata
interface CategoryMetadata {
  id: string;
  label: string;
  color: string;
  bgColor: string;
  hoverColor: string;
  textColor: string;
}

const categoryMetadata: CategoryMetadata[] = [
  {
    id: "docs",
    label: "Documentation",
    color: "bg-yellow-500",
    bgColor: "bg-yellow-100",
    hoverColor: "hover:bg-yellow-200",
    textColor: "text-yellow-800",
  },
  {
    id: "videos",
    label: "Videos",
    color: "bg-green-500",
    bgColor: "bg-green-100",
    hoverColor: "hover:bg-green-200",
    textColor: "text-green-800",
  },
  {
    id: "services",
    label: "Services",
    color: "bg-red-500",
    bgColor: "bg-red-100",
    hoverColor: "hover:bg-red-200",
    textColor: "text-red-800",
  },
  {
    id: "programming",
    label: "Programming",
    color: "bg-purple-500",
    bgColor: "bg-purple-100",
    hoverColor: "hover:bg-purple-200",
    textColor: "text-purple-800",
  },
  {
    id: "aws",
    label: "AWS",
    color: "bg-orange-500",
    bgColor: "bg-orange-100",
    hoverColor: "hover:bg-orange-200",
    textColor: "text-orange-800",
  },
  {
    id: "gcp",
    label: "Google Cloud Platform (comming soon)",
    color: "bg-green-800",
    bgColor: "bg-blue-700",
    hoverColor: "hover:bg-blue-800",
    textColor: "text-black",
  },
];

export const AwsDocs = () => {
  // State management
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [showSearchHistory, setShowSearchHistory] = useState(false);
  const [searchHistory, setSearchHistory] = useState<string[]>([
    "lambda functions",
    "s3 storage",
    "dynamodb",
    "cloud formation",
  ]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState<"az" | "za" | "none">("none");
  const [filtersExpanded, setFiltersExpanded] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // Generate search suggestions based on query
  useEffect(() => {
    if (searchQuery.length > 1) {
      const allTitles = resources.map((r) => r.title);
      const matchingSuggestions = allTitles
        .filter(
          (title) =>
            title.toLowerCase().includes(searchQuery.toLowerCase()) &&
            title.toLowerCase() !== searchQuery.toLowerCase()
        )
        .slice(0, 5);
      setSuggestions(matchingSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [searchQuery]);

  // Filter resources based on search query and selected categories
  const filteredResources = resources.filter((resource) => {
    const matchesSearch =
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategories.length === 0 ||
      resource.categories.some((cat) => selectedCategories.includes(cat));

    return matchesSearch && matchesCategory;
  });

  // Sort filtered resources based on current sort order
  const sortedResources = [...filteredResources].sort((a, b) => {
    if (sortOrder === "az") {
      return a.title.localeCompare(b.title);
    } else if (sortOrder === "za") {
      return b.title.localeCompare(a.title);
    }
    return 0;
  });

  // Handle search submission
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query && !searchHistory.includes(query)) {
      setSearchHistory((prev) => [query, ...prev.slice(0, 4)]);
    }
    setShowSearchHistory(false);
  };

  // Clear search query
  const clearSearch = () => {
    setSearchQuery("");
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  // Toggle category filter
  const toggleCategory = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  // Clear all filters
  const clearAllFilters = () => {
    setSearchQuery("");
    setSelectedCategories([]);
    setSortOrder("none");
  };

  // Get icon component for a specific category
  const getIcon = (category: Category) => {
    switch (category) {
      case "docs":
        return <FaBook className="text-white" />;
      case "videos":
        return <FaVideo className="text-white" />;
      case "services":
        return <FaServer className="text-white" />;
      case "programming":
        return <FaCode className="text-white" />;
      case "aws":
        return <FaCloud className="text-white" />;
      case "gcp":
        return <FaCloud className="text-white" />;
      default:
        return <FaDatabase className="text-white" />;
    }
  };

  // Get color for a specific category
  const getCategoryColor = (category: string): string => {
    const cat = categoryMetadata.find((c) => c.id === category);
    return cat ? cat.color : "bg-blue-500";
  };

  // Get background color for a category pill
  const getCategoryBgColor = (category: string): string => {
    const cat = categoryMetadata.find((c) => c.id === category);
    return cat ? cat.bgColor : "bg-blue-100";
  };

  // Get text color for a category pill
  const getCategoryTextColor = (category: string): string => {
    const cat = categoryMetadata.find((c) => c.id === category);
    return cat ? cat.textColor : "text-blue-800";
  };

  // Get category label
  const getCategoryLabel = (categoryId: string): string => {
    const cat = categoryMetadata.find((c) => c.id === categoryId);
    return cat ? cat.label : categoryId;
  };

  // Variants for animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-900 to-gray-800 text-white">
      {/* Header with gradient */}
      <motion.div
        className="bg-gradient-to-r from-gray-900 via-gray-900 to-gray-800 text-white shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <motion.h1
            className="text-4xl font-bold tracking-tight"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="bg-clip-text font-mono text-transparent bg-gradient-to-r from-yellow-300 via-yellow-200 to-white">
              Learning.Hub
            </span>
          </motion.h1>

          <motion.p
            className="mt-2 text-blue-100 text-lg whitespace-pre-line"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {`🚀 The Ultimate Free Learning Hub – Verified. Curated. Trusted.

Welcome to a handpicked collection of the most dependable and completely free resources to master:

🌐 Web Development  
📊 Data Handling  
⚙️ Practical Tech Skills  
💡 And much more...

Each resource has been thoroughly reviewed—no paywalls, no hidden costs, no gimmicks. Just clean, high-impact learning content built to help you grow faster.

🔒 Why You Can Trust This:
✅ Personally tested—zero AI noise, no clickbait  
🔍 100% open access—searchable, cross-verifiable, credible  
🎯 Action-oriented—focused on practical results, not fluff  
🧠 Beginner-friendly, yet deep enough for serious learners  
🛡️ No ads. No sponsors. No biases. Just pure value.

This is the resource hub we wish existed when we started. Now it's yours.

Stop guessing what to learn next.  
Start here. Learn smart. Grow faster. Build with confidence.`}
          </motion.p>
          <motion.div
            className="mt-6 flex flex-wrap items-center gap-3"
            initial={{ y: -5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-700/40 backdrop-blur-md px-5 py-2 shadow-md transition hover:bg-blue-700/60">
              <GrResources className="text-yellow-400 text-xl" />
              <span className="text-blue-100 text-base font-semibold">
                {resources.length} Resources
              </span>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full bg-blue-700/40 backdrop-blur-md px-5 py-2 shadow-md transition hover:bg-blue-700/60">
              <AiOutlineBranches className="text-yellow-400 text-xl" />
              <span className="text-blue-100 text-base font-semibold">
                {new Set(resources.flatMap((r) => r.categories)).size}{" "}
                Categories
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="max-w-7xl bg-gradient-to-r from-gray-900 via-gray-900 to-gray-800 mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Enhanced Search Bar */}
        <motion.div
          className="mb-8 relative"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div
            className={`backdrop-blur-lg bg-gradient-to-r from-blue-900/80 to-black/90 border-t border-blue-800/50 rounded-4xl shadow-md transition-all duration-300 ${
              isSearchFocused ? "ring-2 ring-blue-500 shadow-lg" : ""
            }`}
          >
            <div className="flex items-center p-4">
              <BiSearch
                className={`text-xl transition-colors duration-300 ${
                  isSearchFocused ? "text-blue-500" : "text-gray-400"
                }`}
              />
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search your  resources like : videos , documentation , programming ...."
                className="flex-1 ml-3 outline-none text-gray-100 placeholder-gray-100"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => {
                  setIsSearchFocused(true);
                  if (searchHistory.length > 0) {
                    setShowSearchHistory(true);
                  }
                }}
                onBlur={() => {
                  setIsSearchFocused(false);
                  setTimeout(() => {
                    setShowSearchHistory(false);
                  }, 200);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && searchQuery) {
                    handleSearch(searchQuery);
                  }
                }}
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="p-1 rounded-full hover:bg-gray-800 transition-colors duration-200"
                  title="Clear search"
                  aria-label="Clear search"
                >
                  <BiX className="text-gray-400 text-xl" />
                </button>
              )}
            </div>
          </div>

          {/* Search history dropdown */}
          <AnimatePresence>
            {showSearchHistory && searchHistory.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute z-10 mt-1 w-full backdrop-blur-lg bg-gradient-to-r from-blue-900/80 to-black/90 border-t border-blue-800/50 rounded-lg shadow-lg border border-gray-200 py-1"
              >
                <div className="px-4 py-2 text-xs font-medium text-yellow-500 border-b border-gray-100 flex items-center">
                  <FaHistory className="mr-2" />
                  Recent Searches
                </div>
                {searchHistory.map((query, index) => (
                  <motion.div
                    key={index}
                    className="px-4 py-2 hover:bg-gray-900 text-white cursor-pointer flex items-center"
                    onClick={() => handleSearch(query)}
                    whileHover={{
                      backgroundColor: "#161013",
                      color: "#ffffff",
                    }}
                  >
                    <BiSearch className="text-gray-100 mr-2" />
                    <span>{query}</span>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Search suggestions */}
          <AnimatePresence>
            {isSearchFocused && suggestions.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute z-10 mt-1 w-full bg-black rounded-lg shadow-lg border border-gray-200 py-1"
              >
                <div className="px-4 py-2 text-xs font-medium text-gray-100 border-b border-gray-100 flex items-center">
                  <BiSearch className="mr-2" />
                  Suggestions
                </div>
                {suggestions.map((suggestion, index) => (
                  <motion.div
                    key={index}
                    className="px-4 py-2 hover:bg-gray-900 text-white cursor-pointer flex items-center"
                    onClick={() => handleSearch(suggestion)}
                    whileHover={{
                      backgroundColor: "#161013",
                      color: "#ffffff",
                    }}
                  >
                    <span>{suggestion}</span>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Filters Section */}
        <motion.div
          className="mb-8"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center">
              <BiFilter className="text-yellow-500 mr-2" />
              <h2 className="text-lg font-medium font-semibold text-yellow-500">
                Filters
              </h2>
            </div>

            <div className="flex items-center space-x-2">
              {/* Sorting control */}
              <div className="relative">
                <button
                  className="px-3 py-1 bg-black text-white rounded-full text-lg flex items-center space-x-1 hover:bg-gray-900 transition-colors text-white duration-200"
                  onClick={() =>
                    setSortOrder(
                      sortOrder === "az"
                        ? "za"
                        : sortOrder === "za"
                        ? "none"
                        : "az"
                    )
                  }
                >
                  <BiSort className="text-blue-500" />
                  <span>
                    {sortOrder === "az"
                      ? "A-Z"
                      : sortOrder === "za"
                      ? "Z-A"
                      : "Sort"}
                  </span>
                </button>
              </div>

              {/* Expand/collapse filters button for mobile */}
              <button
                className="md:hidden px-3 py-1 bg-black text-white rounded-full text-lg flex items-center space-x-1 hover:bg-gray-50 transition-colors duration-200"
                onClick={() => setFiltersExpanded(!filtersExpanded)}
              >
                <span>Filters</span>
                <BiChevronDown
                  className={`transition-transform duration-200 ${
                    filtersExpanded ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Clear filters button */}
              {(selectedCategories.length > 0 ||
                searchQuery ||
                sortOrder !== "none") && (
                <button
                  onClick={clearAllFilters}
                  className="px-3 py-1 bg-grey-900 text-blue-400 rounded-full text-sm hover:bg-blue-100 transition-colors duration-200"
                >
                  Clear All
                </button>
              )}
            </div>
          </div>

          {/* Category filter buttons */}
          <motion.div
            className={`flex flex-wrap gap-2 ${
              !filtersExpanded && "hidden md:flex"
            }`}
            animate={{ height: filtersExpanded ? "auto" : "auto" }}
          >
            <button
              onClick={() => setSelectedCategories([])}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategories.length === 0
                  ? `bg-blue-500 text-white shadow-md`
                  : "bg-blue-600 text-gray-100  hover:shadow-sm"
              }`}
            >
              All
            </button>

            {categoryMetadata.map((category) => (
              <button
                key={category.id}
                onClick={() => toggleCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center space-x-2 ${
                  selectedCategories.includes(category.id)
                    ? `${category.color} text-white shadow-md`
                    : "bg-slate-700 text-white  hover:shadow-sm"
                }`}
              >
                <span>{getIcon(category.id as Category)}</span>
                <span>{category.label}</span>
              </button>
            ))}
          </motion.div>

          {/* Active filters display */}
          {selectedCategories.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2 items-center">
              <span className="text-sm text-gray-500">Active filters:</span>
              {selectedCategories.map((category) => {
                const cat = categoryMetadata.find((c) => c.id === category);
                return (
                  <div
                    key={category}
                    className={`${getCategoryBgColor(
                      category
                    )} ${getCategoryTextColor(
                      category
                    )} text-xs rounded-full px-3 py-1 flex items-center`}
                  >
                    {cat?.label}
                    <button
                      onClick={() => toggleCategory(category)}
                      className="ml-2 hover:bg-white/20 rounded-full p-1"
                      title={`Remove ${cat?.label} filter`}
                      aria-label={`Remove ${cat?.label} filter`}
                    >
                      <BiX />
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </motion.div>

        {/* Loading State */}
        {isLoading ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-gray-800 rounded-lg shadow-md overflow-hidden  animate-pulse"
              >
                <div className="h-2 bg-gray-700"></div>
                <div className="p-5">
                  <div className="flex items-start">
                    <div className="rounded-full bg-gray-700 p-3 mr-4 h-12 w-12"></div>
                    <div className="flex-1">
                      <div className="h-5 bg-gray-700 rounded w-3/4 mb-3"></div>
                      <div className="h-4 bg-gray-700 rounded w-full mb-2"></div>
                      <div className="h-4 bg-gray-700 rounded w-5/6"></div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4  flex items-center justify-between">
                    <div className="flex space-x-1">
                      <div className="h-6 bg-gray-700 rounded-full w-16"></div>
                      <div className="h-6 bg-gray-700 rounded-full w-20"></div>
                    </div>
                    <div className="h-6 bg-gray-700 rounded-full w-8"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            {/* Resources Grid */}
            <motion.div
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {sortedResources.map((resource, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="bg-slate-900 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden hover:border-blue-200"
                  whileHover={{ y: -5, transition: { duration: 0.1 } }}
                >
                  <div
                    className={`h-2 ${getCategoryColor(
                      resource.categories[0] || "default"
                    )}`}
                  ></div>
                  <div className="p-5">
                    <div className="flex items-start">
                      <div className="rounded-full bg-blue-900 p-3 mr-4">
                        {getIcon(resource.categories[0] || "default")}
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-yellow-400 font-mono">
                          {resource.title}
                        </h3>
                        <p className="text-sm  text-gray-100 mt-1">
                          {resource.description}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {resource.categories.map((category, idx) => (
                          <span
                            key={idx}
                            className={`text-xs rounded-full px-2 py-1 font-medium ${getCategoryBgColor(
                              category
                            )} ${getCategoryTextColor(category)}`}
                          >
                            {getCategoryLabel(category)}
                          </span>
                        ))}
                      </div>
                      <div className="space-x-2">
                        {resource.urls.map((url, idx) => (
                          <a
                            key={idx}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={`Open ${resource.title} in a new tab`}
                            className="inline-block text-blue-600 hover:text-blue-800 p-1 hover:bg-blue-50 rounded-full transition-colors"
                          >
                            <FaExternalLinkAlt />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Empty State */}
            {sortedResources.length === 0 && (
              <motion.div
                className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-2xl text-center py-16 px-6 shadow-xl border border-slate-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <motion.div
                  className="inline-flex items-center justify-center p-5 bg-blue-900/50 rounded-full mb-6 border-2 border-blue-700"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.4, type: "spring" }}
                >
                  <BiSearch className="text-4xl text-blue-400" />
                </motion.div>

                <h3 className="text-xl font-semibold text-yellow-400 mb-3">
                  No resources found
                </h3>

                <div className="text-gray-300 max-w-md mx-auto mb-6 leading-relaxed">
                  <p>We couldn't find any resources matching</p>
                  <div className="flex items-center justify-center gap-2 my-2 px-4 py-2 bg-slate-800/60 rounded-lg font-medium text-yellow-300 border border-slate-700">
                    <BiSearch className="text-lg" />
                    <span>{searchQuery}</span>
                  </div>
                  {selectedCategories.length > 0 && (
                    <p className="text-gray-400 italic mt-1">
                      in the selected categories
                    </p>
                  )}
                  <p className="mt-2">Try adjusting your search or filters.</p>
                </div>

                <motion.button
                  onClick={clearAllFilters}
                  className="mt-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500 transition-all duration-300 font-semibold flex items-center gap-2 mx-auto shadow-lg hover:shadow-blue-500/30"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <BiFilter className="text-xl" />
                  <span>Clear filters</span>
                </motion.button>
              </motion.div>
            )}
          </>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 p-6 text-center text-gray-100 mt-12">
        <p className="font-medium ">
          Want to explore my learning journey? Check out the{" "}
          <strong className="text-yellow-300 font-bold underline">Blogs</strong> tab in
          the header!
        </p>
      </footer>
    </div>
  );
};
