import React, { useState, useMemo } from "react";
import { Search, ExternalLink, X, Star, Clock, Filter } from "lucide-react";

interface Resource {
  id: number;
  title: string;
  link: string;
  description: string;
  tags: string[];
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  type: "Video" | "Article" | "Course" | "Documentation" | "Tutorial";
  duration: string;
  rating: number;
  author: string;
  category: string;
}

const LearningHub: React.FC = () => {
  const resources: Resource[] = useMemo(
    () => [
      {
        id: 1,
        title: "Python Tutorial : One shot part-1 Hitesh Chaudhary",
        link: "https://youtu.be/v9bOWjwdTlg?si=ZUQk3quntrvz4Gs6",
        description:
          "Comprehensive Python tutorial covering fundamentals to advanced concepts in one comprehensive session.",
        tags: ["python", "programming", "beginners", "tutorial", "coding"],
        difficulty: "Beginner",
        type: "Video",
        duration: "4h 30m",
        rating: 4.8,
        author: "Hitesh Chaudhary",
        category: "Programming",
      },
      {
        id: 2,
        title: "Advanced React Patterns and Performance",
        link: "https://example.com/react-advanced",
        description:
          "Deep dive into React optimization techniques, advanced patterns, and performance best practices.",
        tags: [
          "react",
          "javascript",
          "performance",
          "optimization",
          "frontend",
        ],
        difficulty: "Advanced",
        type: "Course",
        duration: "6h 15m",
        rating: 4.9,
        author: "Sarah Johnson",
        category: "Frontend",
      },
      {
        id: 3,
        title: "Machine Learning Fundamentals",
        link: "https://example.com/ml-basics",
        description:
          "Introduction to machine learning concepts, algorithms, and practical applications.",
        tags: [
          "machine-learning",
          "ai",
          "data-science",
          "python",
          "algorithms",
        ],
        difficulty: "Intermediate",
        type: "Course",
        duration: "8h 45m",
        rating: 4.7,
        author: "Dr. Alex Chen",
        category: "Data Science",
      },
      {
        id: 4,
        title: "TypeScript Complete Guide",
        link: "https://example.com/typescript-guide",
        description:
          "Master TypeScript from basics to advanced features including generics, decorators, and more.",
        tags: ["typescript", "javascript", "programming", "web-development"],
        difficulty: "Intermediate",
        type: "Tutorial",
        duration: "3h 20m",
        rating: 4.6,
        author: "Mike Rodriguez",
        category: "Programming",
      },
      {
        id: 5,
        title: "Docker & Kubernetes Deployment",
        link: "https://example.com/docker-k8s",
        description:
          "Learn containerization and orchestration with Docker and Kubernetes for modern applications.",
        tags: ["docker", "kubernetes", "devops", "containers", "deployment"],
        difficulty: "Advanced",
        type: "Course",
        duration: "5h 10m",
        rating: 4.8,
        author: "Lisa Wang",
        category: "DevOps",
      },
      {
        id: 6,
        title: "CSS Grid & Flexbox Mastery",
        link: "https://example.com/css-layout",
        description:
          "Modern CSS layout techniques with Grid and Flexbox for responsive web design.",
        tags: ["css", "layout", "responsive", "web-design", "frontend"],
        difficulty: "Beginner",
        type: "Tutorial",
        duration: "2h 45m",
        rating: 4.5,
        author: "Emma Thompson",
        category: "Frontend",
      },
    ],
    []
  );

  const [search, setSearch] = useState<string>("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [difficulty, setDifficulty] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [showFilters, setShowFilters] = useState<boolean>(false);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    resources.forEach((r) => r.tags.forEach((tag) => tags.add(tag)));
    return Array.from(tags).sort();
  }, [resources]);

  const filtered = useMemo(() => {
    return resources
      .filter((r) => {
        const matchesSearch =
          !search ||
          r.title.toLowerCase().includes(search.toLowerCase()) ||
          r.description.toLowerCase().includes(search.toLowerCase()) ||
          r.author.toLowerCase().includes(search.toLowerCase()) ||
          r.tags.some((tag) =>
            tag.toLowerCase().includes(search.toLowerCase())
          );

        const matchesTags =
          selectedTags.length === 0 ||
          selectedTags.every((tag) => r.tags.includes(tag));

        const matchesDifficulty = !difficulty || r.difficulty === difficulty;
        const matchesType = !type || r.type === type;

        return matchesSearch && matchesTags && matchesDifficulty && matchesType;
      })
      .sort((a, b) => b.rating - a.rating);
  }, [search, selectedTags, difficulty, type, resources]);

  const toggleTag = (tag: string): void => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const clearFilters = (): void => {
    setSearch("");
    setSelectedTags([]);
    setDifficulty("");
    setType("");
    setShowFilters(false);
  };

  const getDifficultyColor = (diff: string): string => {
    switch (diff) {
      case "Beginner":
        return "bg-green-500 text-white";
      case "Intermediate":
        return "bg-yellow-500 text-black";
      case "Advanced":
        return "bg-red-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  const hasActiveFilters = selectedTags.length > 0 || difficulty || type;

  return (
    <div className="min-h-screen bg-gradient-to-tr from-black to-gray-900 text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-3 sm:py-4">
          {/* Top row with title and count */}
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white truncate">
              Learning.Hub
            </h1>
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="text-xs sm:text-sm text-gray-300 font-medium whitespace-nowrap">
                {filtered.length} / {resources.length}
              </div>
              {/* Mobile filter toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="sm:hidden p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                aria-label="Toggle filters"
              >
                <Filter className="w-4 h-4" />
                {hasActiveFilters && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full"></div>
                )}
              </button>
            </div>
          </div>

          {/* Search bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search resources, authors, tags..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-10 py-2.5 sm:py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all text-sm sm:text-base"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300 transition-colors"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
        <p className="max-w-xs sm:max-w-sm md:max-w-md mx-auto my-1 sm:my-2 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2.5  shadow-lg shadow-white  text-white rounded text-xs sm:text-sm md:text-base leading-snug sm:leading-normal shadow-sm transition-all duration-200 break-words">
          Please understand that this page is currently in the development
          phase. The data you are seeing is placeholder content.
        </p>
      </header>

      <div className="max-w-7xl bg-gradient-to-tr from-black to-gray-900 mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6">
        {/* Filters Section */}
        <div
          className={`mb-4 sm:mb-6 transition-all duration-300 ${
            showFilters ? "block" : "hidden sm:block"
          }`}
        >
          <div className="bg-gray-800/30 rounded-lg p-3 sm:p-4 space-y-3 sm:space-y-4">
            {/* Filter controls */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 flex-1">
                <select
                  aria-label="Select difficulty level"
                  value={difficulty}
                  onChange={(e) => setDifficulty(e.target.value)}
                  className="px-3 py-2 text-white bg-gray-700 border border-gray-600 rounded-lg text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all"
                >
                  <option value="">All Levels</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>

                <select
                  aria-label="Select resource type"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="px-3 py-2 text-white bg-gray-700 border border-gray-600 rounded-lg text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all"
                >
                  <option value="">All Types</option>
                  <option value="Video">Video</option>
                  <option value="Course">Course</option>
                  <option value="Tutorial">Tutorial</option>
                  <option value="Article">Article</option>
                  <option value="Documentation">Documentation</option>
                </select>
              </div>

              <button
                onClick={clearFilters}
                className="px-4 py-2 text-sm text-gray-300 hover:text-white bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors border border-gray-600 whitespace-nowrap"
              >
                Clear All
              </button>
            </div>

            {/* Tags */}
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-gray-300">Tags</h3>
              <div className="flex flex-wrap gap-1.5 sm:gap-2 max-h-32 sm:max-h-40 overflow-y-auto">
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={`px-2.5 py-1.5 text-xs rounded-full transition-all font-medium ${
                      selectedTags.includes(tag)
                        ? "bg-blue-500 text-white shadow-md"
                        : "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Active filters */}
            {hasActiveFilters && (
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-300">
                  Active Filters
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedTags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2.5 py-1 bg-blue-500 text-white text-xs rounded-full font-medium"
                    >
                      {tag}
                      <button
                        onClick={() => toggleTag(tag)}
                        className="ml-1.5 hover:text-blue-200 transition-colors"
                        aria-label={`Remove ${tag} filter`}
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  ))}
                  {difficulty && (
                    <span className="inline-flex items-center px-2.5 py-1 bg-yellow-500 text-black text-xs rounded-full font-medium">
                      {difficulty}
                      <button
                        onClick={() => setDifficulty("")}
                        className="ml-1.5 hover:text-yellow-700 transition-colors"
                        aria-label="Remove difficulty filter"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  )}
                  {type && (
                    <span className="inline-flex items-center px-2.5 py-1 bg-purple-500 text-white text-xs rounded-full font-medium">
                      {type}
                      <button
                        onClick={() => setType("")}
                        className="ml-1.5 hover:text-purple-200 transition-colors"
                        aria-label="Remove type filter"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Results */}
        {filtered.length === 0 ? (
          <div className="text-center py-8 sm:py-12">
            <div className="text-gray-400 mb-4 text-sm sm:text-base">
              No resources found matching your criteria
            </div>
            <button
              onClick={clearFilters}
              className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className="grid gap-3 sm:gap-4 lg:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((resource) => (
              <div
                key={resource.id}
                className="bg-[#171717] p-4 sm:p-5 rounded-lg border border-gray-700 hover:border-gray-600 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 group"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs font-bold bg-yellow-500 text-black px-2 py-1 rounded-full border border-yellow-400 shadow-sm">
                    {resource.type}
                  </span>
                  <div className="flex items-center text-yellow-500">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span className="text-xs ml-1 text-gray-300 font-medium">
                      {resource.rating}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-semibold text-base sm:text-lg text-white mb-2 leading-tight line-clamp-2 group-hover:text-blue-300 transition-colors">
                  {resource.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-400 mb-3 leading-relaxed line-clamp-2">
                  {resource.description}
                </p>

                {/* Author and Duration */}
                <div className="flex items-center justify-between text-xs text-blue-400 mb-3">
                  <span className="truncate mr-2">by {resource.author}</span>
                  <div className="flex items-center shrink-0">
                    <Clock className="w-3 h-3 mr-1" />
                    <span className="font-medium">{resource.duration}</span>
                  </div>
                </div>

                {/* Difficulty and Category */}
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className={`px-2 py-1 text-xs font-bold rounded-md ${getDifficultyColor(
                      resource.difficulty
                    )}`}
                  >
                    {resource.difficulty}
                  </span>
                  <span className="px-2 py-1 text-xs text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-md font-medium">
                    {resource.category}
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4 min-h-[20px]">
                  {resource.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-blue-400 font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                  {resource.tags.length > 3 && (
                    <span className="text-xs text-gray-500 font-medium">
                      +{resource.tags.length - 3} more
                    </span>
                  )}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-2 border-t border-gray-700">
                  <code className="text-xs text-gray-500 truncate flex-1 mr-3 bg-gray-900/50 px-2 py-1 rounded">
                    {resource.link.length > 25
                      ? resource.link.substring(0, 25) + "..."
                      : resource.link}
                  </code>
                  <a
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-1.5 bg-blue-600 text-white text-xs font-medium rounded hover:bg-blue-700 transition-colors shrink-0 group-hover:shadow-md"
                  >
                    View
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LearningHub;
