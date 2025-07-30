"use client";

import React, {
  useState,
  useMemo,
  useCallback,
  useEffect,
  useRef,
} from "react";
import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import {
  FaSearch,
  FaFilter,
  FaExternalLinkAlt,
  FaSpinner,
  FaExclamationTriangle,
  FaCalendarAlt,
  FaEye,
  FaHeart,
  FaClock,
  FaTimes,
  FaSort,
  FaChevronDown,
  FaChevronUp,
  FaTag,
  FaUser,
  FaHistory,
  FaKeyboard,
} from "react-icons/fa";

// Types
interface BlogPost {
  id: string;
  title: string;
  brief: string;
  slug: string;
  publishedAt: string;
  updatedAt: string;
  readTimeInMinutes?: number;
  views?: number;
  reactionCount?: number;
  coverImage?: {
    url: string;
  };
  tags: Array<{
    id: string;
    name: string;
    slug: string;
  }>;
  author: {
    name: string;
    profilePicture?: string;
  };
  url?: string;
}

interface FilterOptions {
  searchTerm: string;
  sortBy:
    | "publishedAt"
    | "views"
    | "reactions"
    | "title"
    | "readTime"
    | "relevance";
  sortOrder: "asc" | "desc";
  tags: string[];
  dateRange: {
    start: string;
    end: string;
  };
  minReadTime: number;
  maxReadTime: number;
  author: string;
}

interface SearchSuggestion {
  type: "post" | "tag" | "author" | "recent";
  value: string;
  label: string;
  count?: number;
  post?: BlogPost;
}

// Search Engine
class SearchEngine {
  private posts: BlogPost[] = [];
  private searchIndex: Map<string, Set<string>> = new Map();
  private recentSearches: string[] = [];

  constructor(posts: BlogPost[]) {
    this.posts = posts;
    this.buildSearchIndex();
    this.loadRecentSearches();
  }

  private buildSearchIndex() {
    this.searchIndex.clear();
    this.posts.forEach((post) => {
      const searchableText = [
        post.title,
        post.brief,
        post.author.name,
        ...post.tags.map((tag) => tag.name),
      ]
        .join(" ")
        .toLowerCase();

      const words = searchableText.split(/\s+/);
      words.forEach((word) => {
        if (word.length > 2) {
          for (let i = 0; i <= word.length - 2; i++) {
            const ngram = word.substring(i, i + 3);
            if (!this.searchIndex.has(ngram)) {
              this.searchIndex.set(ngram, new Set());
            }
            this.searchIndex.get(ngram)!.add(post.id);
          }
        }
      });
    });
  }

  private loadRecentSearches() {
    try {
      const stored = localStorage.getItem("blog-recent-searches");
      if (stored) {
        this.recentSearches = JSON.parse(stored);
      }
    } catch (error) {
      console.warn("Failed to load recent searches:", error);
    }
  }

  private saveRecentSearches() {
    try {
      localStorage.setItem(
        "blog-recent-searches",
        JSON.stringify(this.recentSearches)
      );
    } catch (error) {
      console.warn("Failed to save recent searches:", error);
    }
  }

  addRecentSearch(query: string) {
    if (query.trim().length < 2) return;
    const trimmedQuery = query.trim().toLowerCase();
    this.recentSearches = [
      trimmedQuery,
      ...this.recentSearches.filter((s) => s !== trimmedQuery),
    ].slice(0, 10);
    this.saveRecentSearches();
  }

  getRecentSearches(): string[] {
    return this.recentSearches;
  }

  search(query: string, limit = 50): BlogPost[] {
    if (!query.trim()) return this.posts;
    const queryLower = query.toLowerCase();
    const queryWords = queryLower.split(/\s+/).filter((w) => w.length > 0);
    const scores = new Map<string, number>();

    this.posts.forEach((post) => scores.set(post.id, 0));

    queryWords.forEach((word) => {
      if (word.length >= 2) {
        for (let i = 0; i <= word.length - 2; i++) {
          const ngram = word.substring(i, i + 3);
          const matchingPosts = this.searchIndex.get(ngram);
          if (matchingPosts) {
            matchingPosts.forEach((postId) => {
              scores.set(postId, (scores.get(postId) || 0) + 1);
            });
          }
        }
      }
    });

    this.posts.forEach((post) => {
      const titleLower = post.title.toLowerCase();
      const briefLower = post.brief.toLowerCase();
      const authorLower = post.author.name.toLowerCase();
      const tagsLower = post.tags.map((t) => t.name.toLowerCase()).join(" ");
      let currentScore = scores.get(post.id) || 0;

      if (titleLower.includes(queryLower)) {
        currentScore += 100;
      }
      if (briefLower.includes(queryLower)) {
        currentScore += 50;
      }
      if (authorLower.includes(queryLower)) {
        currentScore += 30;
      }
      if (tagsLower.includes(queryLower)) {
        currentScore += 20;
      }

      queryWords.forEach((word) => {
        const titleIndex = titleLower.indexOf(word);
        const briefIndex = briefLower.indexOf(word);
        if (titleIndex !== -1) {
          currentScore += 10 + (titleIndex === 0 ? 5 : 0);
        }
        if (briefIndex !== -1) {
          currentScore += 5;
        }
      });

      scores.set(post.id, currentScore);
    });

    return this.posts
      .filter((post) => (scores.get(post.id) || 0) > 0)
      .sort((a, b) => (scores.get(b.id) || 0) - (scores.get(a.id) || 0))
      .slice(0, limit);
  }

  getSuggestions(query: string): SearchSuggestion[] {
    if (!query.trim()) {
      return this.recentSearches.map((search) => ({
        type: "recent",
        value: search,
        label: search,
      }));
    }

    const suggestions: SearchSuggestion[] = [];
    const queryLower = query.toLowerCase();
    const seen = new Set<string>();

    this.posts.forEach((post) => {
      if (
        post.title.toLowerCase().includes(queryLower) &&
        !seen.has(post.title)
      ) {
        suggestions.push({
          type: "post",
          value: post.title,
          label: post.title,
          post,
        });
        seen.add(post.title);
      }
    });

    const tagCounts = new Map<string, number>();
    this.posts.forEach((post) => {
      post.tags.forEach((tag) => {
        if (tag.name.toLowerCase().includes(queryLower)) {
          tagCounts.set(tag.name, (tagCounts.get(tag.name) || 0) + 1);
        }
      });
    });

    Array.from(tagCounts.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .forEach(([tag, count]) => {
        suggestions.push({
          type: "tag",
          value: tag,
          label: tag,
          count,
        });
      });

    const authors = new Set<string>();
    this.posts.forEach((post) => {
      if (
        post.author.name.toLowerCase().includes(queryLower) &&
        !authors.has(post.author.name)
      ) {
        suggestions.push({
          type: "author",
          value: post.author.name,
          label: post.author.name,
        });
        authors.add(post.author.name);
      }
    });

    return suggestions.slice(0, 8);
  }
}

// API
const HASHNODE_API_URL = "https://gql.hashnode.com/";
const BLOG_POSTS_QUERY = `
  query GetUserPosts($host: String!) {
    publication(host: $host) {
      id
      title
      posts(first: 50) {
        edges {
          node {
            id
            title
            brief
            slug
            publishedAt
            updatedAt
            readTimeInMinutes
            views
            reactionCount
            coverImage {
              url
            }
            tags {
              id
              name
              slug
            }
            author {
              name
              profilePicture
            }
          }
        }
      }
    }
  }
`;

const fetchBlogPosts = async (): Promise<BlogPost[]> => {
  try {
    const response = await fetch(HASHNODE_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: BLOG_POSTS_QUERY,
        variables: {
          host: "blog.cloudkinshuk.in",
        },
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP error! status: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    if (data.errors) {
      throw new Error(data.errors[0]?.message || "GraphQL error");
    }

    if (!data.data?.publication?.posts?.edges) {
      throw new Error("No blog posts found");
    }

    type Edge = { node: BlogPost };
    const posts = (data.data.publication.posts.edges as Edge[]).map((edge) => ({
      ...edge.node,
      url: `https://blog.cloudkinshuk.in/${edge.node.slug}`,
    }));

    return posts;
  } catch (error) {
    console.error("Detailed error in fetchBlogPosts:", error);
    throw error;
  }
};

// Blog Card Component
interface BlogCardProps {
  post: BlogPost;
  searchQuery?: string;
}

const BlogCard: React.FC<BlogCardProps> = React.memo(
  ({ post, searchQuery }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);

    const formatDate = useCallback((dateString: string): string => {
      return new Date(dateString).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    }, []);

    const formatNumber = useCallback((num: number): string => {
      if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
      if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
      return num.toString();
    }, []);

    const highlightText = useCallback((text: string, query?: string) => {
      if (!query || !query.trim()) return text;
      const regex = new RegExp(
        `(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`,
        "gi"
      );
      const parts = text.split(regex);
      return parts.map((part, i) =>
        regex.test(part) ? (
          <mark key={i} className="bg-yellow-400 text-black px-1 rounded-md">
            {part}
          </mark>
        ) : (
          part
        )
      );
    }, []);

    return (
      <article className="group bg-black border border-neutral-800 rounded-md hover:border-neutral-700 transition-all duration-200">
        {/* Cover Image */}
        <div className="relative h-32 sm:h-36 overflow-hidden bg-neutral-900 rounded-md">
          {post.coverImage && !imageError ? (
            <>
              <img
                src={
                  post.coverImage.url || "/placeholder.svg?height=144&width=256"
                }
                alt={post.title}
                className={`w-full h-full object-cover transition-opacity duration-300 ${
                  imageLoaded ? "opacity-100" : "opacity-0"
                }`}
                loading="lazy"
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
              />
              {!imageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <FaSpinner className="animate-spin text-white text-lg" />
                </div>
              )}
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-neutral-900">
              <FaExternalLinkAlt className="text-white text-2xl opacity-50" />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-3">
          {/* Title */}
          <h2 className="text-sm sm:text-base font-bold text-white leading-tight mb-2 line-clamp-2 group-hover:text-yellow-400 transition-colors duration-200">
            {highlightText(post.title, searchQuery)}
          </h2>

          {/* Author & Date */}
          <div className="flex items-center gap-2 mb-2 text-xs text-neutral-400">
            <span className="font-medium text-white">
              {highlightText(post.author.name, searchQuery)}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <FaCalendarAlt className="w-2 h-2" />
              {formatDate(post.publishedAt)}
            </span>
          </div>

          {/* Meta Info */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-xs text-neutral-400">
              {post.readTimeInMinutes && (
                <span className="flex items-center gap-1">
                  <FaClock className="w-2 h-2" />
                  {post.readTimeInMinutes}m
                </span>
              )}
              {post.views && (
                <span className="flex items-center gap-1">
                  <FaEye className="w-2 h-2" />
                  {formatNumber(post.views)}
                </span>
              )}
              {post.reactionCount && post.reactionCount > 0 && (
                <span className="flex items-center gap-1">
                  <FaHeart className="w-2 h-2" />
                  {formatNumber(post.reactionCount)}
                </span>
              )}
            </div>
            <a
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2 py-2 bg-neutral-900 border border-neutral-800 text-white text-sm font-medium rounded hover:bg-neutral-800 transition-all duration-200"
            >
              Read
              <FaExternalLinkAlt className="w-3 h-3" />
            </a>
          </div>
        </div>
      </article>
    );
  }
);

BlogCard.displayName = "BlogCard";

// Search Bar Component
interface SearchBarProps {
  searchInput: string;
  setSearchInput: (value: string) => void;
  resultsCount: number;
  totalCount: number;
  searchEngine: SearchEngine | null;
  onSuggestionSelect: (suggestion: SearchSuggestion) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchInput,
  setSearchInput,
  resultsCount,
  totalCount,
  searchEngine,
  onSuggestionSelect,
}) => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchEngine) {
      const newSuggestions = searchEngine.getSuggestions(searchInput);
      setSuggestions(newSuggestions);
      setSelectedIndex(-1);
    }
  }, [searchInput, searchEngine]);

  const handleSearch = useCallback(() => {
    if (searchInput.trim() && searchEngine) {
      searchEngine.addRecentSearch(searchInput);
      setShowSuggestions(false);
    }
  }, [searchInput, searchEngine]);

  const handleSuggestionClick = useCallback(
    (suggestion: SearchSuggestion) => {
      setSearchInput(suggestion.value);
      onSuggestionSelect(suggestion);
      setShowSuggestions(false);
      if (searchEngine) {
        searchEngine.addRecentSearch(suggestion.value);
      }
    },
    [setSearchInput, onSuggestionSelect, searchEngine]
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        inputRef.current?.focus();
        setShowSuggestions(true);
      }
      if (showSuggestions && suggestions.length > 0) {
        switch (e.key) {
          case "ArrowDown":
            e.preventDefault();
            setSelectedIndex((prev) =>
              Math.min(prev + 1, suggestions.length - 1)
            );
            break;
          case "ArrowUp":
            e.preventDefault();
            setSelectedIndex((prev) => Math.max(prev - 1, -1));
            break;
          case "Enter":
            e.preventDefault();
            if (selectedIndex >= 0 && suggestions[selectedIndex]) {
              handleSuggestionClick(suggestions[selectedIndex]);
            } else if (searchInput.trim()) {
              handleSearch();
            }
            break;
          case "Escape":
            setShowSuggestions(false);
            setSelectedIndex(-1);
            break;
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [
    showSuggestions,
    suggestions,
    selectedIndex,
    searchInput,
    handleSearch,
    handleSuggestionClick,
  ]);

  const getSuggestionIcon = (type: SearchSuggestion["type"]) => {
    switch (type) {
      case "post":
        return <FaSearch className="w-3 h-3" />;
      case "tag":
        return <FaTag className="w-3 h-3" />;
      case "author":
        return <FaUser className="w-3 h-3" />;
      case "recent":
        return <FaHistory className="w-3 h-3" />;
      default:
        return <FaSearch className="w-3 h-3" />;
    }
  };

  return (
    <div className="relative">
      <div className="relative ">
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 text-sm" />
        <input
          ref={inputRef}
          type="text"
          placeholder="Search articles... (⌘K)"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          className="w-full pl-10 pr-10 py-2 bg-black  text-white  placeholder-neutral-500 border-b-2 border-yellow-400 text-lg"
        />
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
          {searchInput && (
            <button
              title="none click"
              onClick={() => {
                setSearchInput("");
                setShowSuggestions(false);
              }}
              className="text-neutral-500 hover:text-white transition-colors duration-200"
            >
              <FaTimes className="w-3 h-3" />
            </button>
          )}
          <div className="hidden sm:flex items-center gap-1 text-xs text-neutral-500 bg-neutral-900 px-2 py-1 rounded-md ">
            <FaKeyboard className="w-2 h-2" />
            ⌘K
          </div>
        </div>
      </div>

      {/* Suggestions */}
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-[#121212] border border-neutral-800 rounded-md shadow-2xl z-50 max-h-60 overflow-y-auto">
          {suggestions.map((suggestion, index) => (
            <button
              key={`${suggestion.type}-${suggestion.value}`}
              onClick={() => handleSuggestionClick(suggestion)}
              className={`w-full flex items-center gap-2 px-3 py-2 text-left hover:bg-neutral-900 transition-colors duration-150 ${
                index === selectedIndex ? "bg-neutral-900" : ""
              } border-b border-neutral-800 last:border-b-0`}
            >
              <div className="p-1 bg-neutral-900 rounded-md text-white">
                {getSuggestionIcon(suggestion.type)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-white text-sm font-medium truncate">
                  {suggestion.label}
                </div>
                <div className="text-xs text-neutral-500 capitalize">
                  {suggestion.type === "recent"
                    ? "Recent search"
                    : suggestion.type}
                  {suggestion.count && ` • ${suggestion.count} posts`}
                </div>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Results indicator */}
      {searchInput && (
        <div className="absolute -bottom-5 left-0 text-xs text-neutral-500">
          {resultsCount} of {totalCount} articles
        </div>
      )}
    </div>
  );
};

// Filters Component
interface FiltersProps {
  filters: FilterOptions;
  setFilters: React.Dispatch<React.SetStateAction<FilterOptions>>;
  availableTags: string[];
  availableAuthors: string[];
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const AdvancedFilters: React.FC<FiltersProps> = ({
  filters,
  setFilters,
  availableTags,
  availableAuthors,
  isOpen,
  setIsOpen,
}) => {
  const handleTagToggle = useCallback(
    (tag: string) => {
      setFilters((prev) => ({
        ...prev,
        tags: prev.tags.includes(tag)
          ? prev.tags.filter((t) => t !== tag)
          : [...prev.tags, tag],
      }));
    },
    [setFilters]
  );

  const clearFilters = useCallback(() => {
    setFilters((prev) => ({
      searchTerm: prev.searchTerm,
      sortBy: "publishedAt",
      sortOrder: "desc",
      tags: [],
      dateRange: { start: "", end: "" },
      minReadTime: 0,
      maxReadTime: 60,
      author: "",
    }));
  }, [setFilters]);

  if (!isOpen) return null;

  return (
    <div className="bg-black border border-neutral-800 rounded-md p-4 mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Sort Options */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-white">
            Sort By
          </label>
          <select
            title="your select"
            value={filters.sortBy}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                sortBy: e.target.value as FilterOptions["sortBy"],
              }))
            }
            className="w-full p-2 text-sm bg-neutral-900 border border-neutral-800 text-white rounded-md focus:border-neutral-700 focus:outline-none"
          >
            <option value="publishedAt">Date Published</option>
            <option value="relevance">Relevance</option>
            <option value="title">Title</option>
            <option value="views">Views</option>
            <option value="reactions">Reactions</option>
            <option value="readTime">Read Time</option>
          </select>
        </div>

        {/* Author Filter */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-white">Author</label>
          <select
            title="my"
            value={filters.author}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, author: e.target.value }))
            }
            className="w-full p-2 text-sm bg-neutral-900 border border-neutral-800 text-white rounded-md focus:border-neutral-700 focus:outline-none"
          >
            <option value="">All Authors</option>
            {availableAuthors.map((author) => (
              <option key={author} value={author}>
                {author}
              </option>
            ))}
          </select>
        </div>

        {/* Date Range */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-white">
            Date Range
          </label>
          <div className="space-y-1">
            <input
              title="formsdata"
              type="date"
              value={filters.dateRange.start}
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  dateRange: { ...prev.dateRange, start: e.target.value },
                }))
              }
              className="w-full p-2 text-sm bg-neutral-900 border border-neutral-800 text-white rounded-md focus:border-neutral-700 focus:outline-none"
            />
            <input
              title="new data"
              type="date"
              value={filters.dateRange.end}
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  dateRange: { ...prev.dateRange, end: e.target.value },
                }))
              }
              className="w-full p-2 text-sm bg-neutral-900 border border-neutral-800 text-white rounded-md focus:border-neutral-700 focus:outline-none"
            />
          </div>
        </div>

        {/* Read Time Range */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-white">
            Read Time: {filters.minReadTime}-{filters.maxReadTime}m
          </label>
          <div className="space-y-2">
            <input
              title="from"
              type="range"
              min="0"
              max="60"
              value={filters.minReadTime}
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  minReadTime: Number(e.target.value),
                }))
              }
              className="w-full accent-white"
            />
            <input
              title="new trick"
              type="range"
              min="0"
              max="60"
              value={filters.maxReadTime}
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  maxReadTime: Number(e.target.value),
                }))
              }
              className="w-full accent-white"
            />
          </div>
        </div>
      </div>

      {/* Tags Section */}
      <div className="mt-4 space-y-2">
        <label className="block text-sm font-medium text-white">
          Tags ({filters.tags.length} selected)
        </label>
        <div className="max-h-32 overflow-y-auto">
          <div className="flex flex-wrap gap-1">
            {availableTags.slice(0, 20).map((tag) => (
              <button
                key={tag}
                onClick={() => handleTagToggle(tag)}
                className={`inline-flex items-center gap-1 px-2 py-1 text-xs rounded-md font-medium transition-colors duration-200 ${
                  filters.tags.includes(tag)
                    ? "bg-white text-black"
                    : "bg-neutral-900 text-neutral-300 hover:bg-neutral-800 border border-neutral-800"
                }`}
              >
                <FaTag className="w-2 h-2" />
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Filter Actions */}
      <div className="flex justify-between items-center gap-4 mt-4 pt-4 border-t border-neutral-800">
        <button
          onClick={clearFilters}
          className="flex items-center gap-2 px-4 py-2 text-sm text-neutral-400 hover:text-white border border-neutral-800 rounded-md hover:border-neutral-700 transition-colors duration-200"
        >
          <FaTimes className="w-3 h-3" />
          Clear Filters
        </button>
        <button
          onClick={() => setIsOpen(false)}
          className="px-4 py-2 text-sm bg-white text-black font-medium hover:bg-neutral-200 transition-colors duration-200 rounded-md"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
};

// Main Blog Component
const BlogPageContent: React.FC = () => {
  const [filters, setFilters] = useState<FilterOptions>({
    searchTerm: "",
    sortBy: "publishedAt",
    sortOrder: "desc",
    tags: [],
    dateRange: { start: "", end: "" },
    minReadTime: 0,
    maxReadTime: 60,
    author: "",
  });
  const [showFilters, setShowFilters] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [searchEngine, setSearchEngine] = useState<SearchEngine | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFilters((prev) => ({ ...prev, searchTerm: searchInput }));
    }, 50);
    return () => clearTimeout(timer);
  }, [searchInput]);

  const {
    data: posts,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["blogPosts"],
    queryFn: fetchBlogPosts,
    staleTime: 10 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
    refetchOnWindowFocus: false,
    retry: 3,
  });

  useEffect(() => {
    if (posts) {
      setSearchEngine(new SearchEngine(posts));
    }
  }, [posts]);

  const filteredPosts = useMemo(() => {
    if (!posts || !searchEngine) return [];
    let result = posts;

    if (filters.searchTerm.trim()) {
      if (filters.sortBy === "relevance") {
        result = searchEngine.search(filters.searchTerm);
      } else {
        result = searchEngine.search(filters.searchTerm, posts.length);
      }
    }

    result = result.filter((post) => {
      const matchesTags =
        filters.tags.length === 0 ||
        filters.tags.some((tag) =>
          post.tags.some((postTag) =>
            postTag.name.toLowerCase().includes(tag.toLowerCase())
          )
        );
      const matchesAuthor =
        !filters.author ||
        post.author.name.toLowerCase().includes(filters.author.toLowerCase());
      const matchesDateRange =
        (!filters.dateRange.start ||
          new Date(post.publishedAt) >= new Date(filters.dateRange.start)) &&
        (!filters.dateRange.end ||
          new Date(post.publishedAt) <= new Date(filters.dateRange.end));
      const matchesReadTime =
        !post.readTimeInMinutes ||
        (post.readTimeInMinutes >= filters.minReadTime &&
          post.readTimeInMinutes <= filters.maxReadTime);

      return (
        matchesTags && matchesAuthor && matchesDateRange && matchesReadTime
      );
    });

    if (!filters.searchTerm.trim() || filters.sortBy !== "relevance") {
      result = result.sort((a, b) => {
        let aValue: string | number, bValue: string | number;
        switch (filters.sortBy) {
          case "publishedAt":
            aValue = new Date(a.publishedAt).getTime();
            bValue = new Date(b.publishedAt).getTime();
            break;
          case "title":
            aValue = a.title.toLowerCase();
            bValue = b.title.toLowerCase();
            break;
          case "views":
            aValue = a.views || 0;
            bValue = b.views || 0;
            break;
          case "reactions":
            aValue = a.reactionCount || 0;
            bValue = b.reactionCount || 0;
            break;
          case "readTime":
            aValue = a.readTimeInMinutes || 0;
            bValue = b.readTimeInMinutes || 0;
            break;
          default:
            aValue = new Date(a.publishedAt).getTime();
            bValue = new Date(b.publishedAt).getTime();
        }
        if (typeof aValue === "string") {
          return filters.sortOrder === "asc"
            ? aValue.localeCompare(String(bValue))
            : String(bValue).localeCompare(aValue);
        }
        return filters.sortOrder === "asc"
          ? Number(aValue) - Number(bValue)
          : Number(bValue) - Number(aValue);
      });
    }

    return result;
  }, [posts, filters, searchEngine]);

  const { allTags, allAuthors } = useMemo(() => {
    if (!posts) return { allTags: [], allAuthors: [] };
    const tagSet = new Set<string>();
    const authorSet = new Set<string>();
    posts.forEach((post) => {
      post.tags.forEach((tag) => tagSet.add(tag.name));
      authorSet.add(post.author.name);
    });
    return {
      allTags: Array.from(tagSet).sort(),
      allAuthors: Array.from(authorSet).sort(),
    };
  }, [posts]);

  const handleSuggestionSelect = useCallback((suggestion: SearchSuggestion) => {
    if (suggestion.type === "tag") {
      setFilters((prev) => ({
        ...prev,
        tags: prev.tags.includes(suggestion.value)
          ? prev.tags
          : [...prev.tags, suggestion.value],
      }));
    } else if (suggestion.type === "author") {
      setFilters((prev) => ({ ...prev, author: suggestion.value }));
    }
  }, []);

  if (error) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <FaExclamationTriangle className="text-white text-4xl mx-auto mb-4" />
          <h2 className="text-xl font-bold text-white mb-2">
            Failed to Load Blog Posts
          </h2>
          <p className="text-neutral-400 text-sm mb-4">
            {error instanceof Error ? error.message : "Unknown error occurred"}
          </p>
          <button
            onClick={() => refetch()}
            className="px-4 py-2 bg-white text-black font-medium hover:bg-neutral-200 transition-colors duration-200 rounded-md"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-mono font-bold text-yellow-200 mb-4 leading-tight">
              Minimal{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-300 to-neutral-500">
                Minds
              </span>
            </h1>
            <p className="text-base sm:text-lg text-neutral-400 leading-relaxed max-w-2xl mx-auto">
              Exploring cloud computing, DevOps, and React development through
              curiosity and real-world experience.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filters */}
      <div className="sticky top-0 z-40 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row gap-3 lg:items-center">
            <div className="flex-1">
              <SearchBar
                searchInput={searchInput}
                setSearchInput={setSearchInput}
                resultsCount={filteredPosts.length}
                totalCount={posts?.length || 0}
                searchEngine={searchEngine}
                onSuggestionSelect={handleSuggestionSelect}
              />
            </div>
            <div className="flex gap-2 lg:flex-shrink-0">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`flex items-center gap-2 px-2 py-1 rounded font-small transition-colors duration-200 ${
                  showFilters
                    ? "bg-[#121212] text-white border-2 border-[#090909]"
                    : "bg-[#101010] text-neutral-100 border-2 border-[#090909]"
                }`}
              >
                <FaFilter className="w-3 h-3" />
                Filters
                {showFilters ? (
                  <FaChevronUp className="w-3 h-3" />
                ) : (
                  <FaChevronDown className="w-3 h-3" />
                )}
              </button>
              <button
                onClick={() =>
                  setFilters((prev) => ({
                    ...prev,
                    sortOrder: prev.sortOrder === "asc" ? "desc" : "asc",
                  }))
                }
                className="flex items-center gap-2 px-3 py-2 rounded bg-[#121212] border-2 border-[#090909] text-white transition-colors duration-200 font-medium"
              >
                <FaSort className="w-3 h-3" />
                {filters.sortOrder === "desc" ? "Newest" : "Oldest"}
              </button>
            </div>
          </div>
          <AdvancedFilters
            filters={filters}
            setFilters={setFilters}
            availableTags={allTags}
            availableAuthors={allAuthors}
            isOpen={showFilters}
            setIsOpen={setShowFilters}
          />
        </div>
      </div>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-16">
            <FaSpinner className="animate-spin text-white text-3xl mb-4" />
            <h3 className="text-lg text-white mb-2">Loading articles...</h3>
            <p className="text-neutral-400 text-sm">
              Fetching the latest insights
            </p>
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="text-center py-16">
            <FaSearch className="text-white text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">
              No articles found
            </h3>
            <p className="text-neutral-400 mb-6 max-w-md mx-auto">
              Try adjusting your search terms or filters to discover more
              content
            </p>
            <button
              onClick={() => {
                setSearchInput("");
                setFilters((prev) => ({
                  ...prev,
                  searchTerm: "",
                  tags: [],
                  dateRange: { start: "", end: "" },
                  author: "",
                }));
              }}
              className="px-4 py-2 bg-white text-black font-medium hover:bg-neutral-200 transition-colors duration-200 rounded-md"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredPosts.map((post) => (
              <BlogCard
                key={post.id}
                post={post}
                searchQuery={filters.searchTerm}
              />
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-800 bg-black py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-neutral-400 text-sm mb-2">
            © 2025 Kinshuk Jain. Engineering the future, one post at a time.
          </p>
          <a
            href="https://blog.cloudkinshuk.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-white hover:text-neutral-300 text-sm transition-colors duration-200"
          >
            <FaExternalLinkAlt className="w-3 h-3" />
            Visit Original Blog
          </a>
        </div>
      </footer>
    </div>
  );
};

// Query Client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10 * 60 * 1000,
      gcTime: 30 * 60 * 1000,
      retry: 3,
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
      refetchOnWindowFocus: false,
    },
  },
});

const Blog: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BlogPageContent />
    </QueryClientProvider>
  );
};

export default Blog;
