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
  FaExternalLinkAlt,
  FaSpinner,
  FaExclamationTriangle,
  FaCalendarAlt,
  FaEye,
  FaHeart,
  FaClock,
  FaTimes,
  FaKeyboard,
  FaHistory,
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

interface SearchSuggestion {
  type: "post" | "recent";
  value: string;
  label: string;
  post?: BlogPost;
}

// Simplified Search Engine
class SimpleSearchEngine {
  private posts: BlogPost[] = [];
  private recentSearches: string[] = [];

  constructor(posts: BlogPost[]) {
    this.posts = posts;
    this.loadRecentSearches();
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
    ].slice(0, 5);
    this.saveRecentSearches();
  }

  getRecentSearches(): string[] {
    return this.recentSearches;
  }

  search(query: string): BlogPost[] {
    if (!query.trim()) return this.posts;
    
    const queryLower = query.toLowerCase();
    const queryWords = queryLower.split(/\s+/).filter((w) => w.length > 0);
    
    return this.posts
      .map((post) => {
        let score = 0;
        const titleLower = post.title.toLowerCase();
        const briefLower = post.brief.toLowerCase();
        const authorLower = post.author.name.toLowerCase();
        const tagsLower = post.tags.map((t) => t.name.toLowerCase()).join(" ");

        // Exact phrase matches get highest score
        if (titleLower.includes(queryLower)) score += 100;
        if (briefLower.includes(queryLower)) score += 50;
        if (authorLower.includes(queryLower)) score += 30;
        if (tagsLower.includes(queryLower)) score += 20;

        // Individual word matches
        queryWords.forEach((word) => {
          if (titleLower.includes(word)) score += 10;
          if (briefLower.includes(word)) score += 5;
          if (authorLower.includes(word)) score += 3;
          if (tagsLower.includes(word)) score += 2;
        });

        return { post, score };
      })
      .filter(({ score }) => score > 0)
      .sort((a, b) => b.score - a.score)
      .map(({ post }) => post);
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

    // Add matching post titles
    this.posts
      .filter((post) => post.title.toLowerCase().includes(queryLower))
      .slice(0, 5)
      .forEach((post) => {
        suggestions.push({
          type: "post",
          value: post.title,
          label: post.title,
          post,
        });
      });

    return suggestions;
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
      <article className="group bg-white text-neutral-900  border border-gray-300 shadow-xl shadow-gray-300 rounded-xl  transition-all duration-200">
        {/* Cover Image */}
        <div className="relative h-32 sm:h-36 overflow-hidden bg-neutral-900 rounded-xl">
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
                  <FaSpinner className="animate-spin text-black text-lg" />
                </div>
              )}
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-neutral-900">
              <FaExternalLinkAlt className="text-black text-2xl opacity-50" />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-3">
          {/* Title */}
          <h2 className="text-lg lg:text-base font-medium text-black leading-tight mb-2 line-clamp-2 group-hover:text-blue-900 transition-colors duration-200">
            {highlightText(post.title, searchQuery)}
          </h2>

          {/* Author & Date */}
          <div className="flex items-center gap-2 mb-2 text-xs text-neutral-400">
            <span className="font-medium  text-black">
              {highlightText(post.author.name, searchQuery)}
            </span>
            <span>•</span>
            <span className="flex text-black font-medium items-center gap-1">
              <FaCalendarAlt className="w-2 h-2 text-black" />
              {formatDate(post.publishedAt)}
            </span>
          </div>

          {/* Meta Info */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-sm font-medium text-neutral-900">
              {post.readTimeInMinutes && (
                <span className="flex items-center gap-1">
                  <FaClock className="w-2 h-2 text-black" />
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
              className="inline-flex items-center gap-1 px-3 py-2 bg-blue-500 border border-gray-200 text-gray-100 text-lg font-semibold rounded-lg hover:text-gray-900 transition-all duration-200"
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

// Simplified Search Bar Component
interface SearchBarProps {
  searchInput: string;
  setSearchInput: (value: string) => void;
  resultsCount: number;
  totalCount: number;
  searchEngine: SimpleSearchEngine | null;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchInput,
  setSearchInput,
  resultsCount,
  totalCount,
  searchEngine,
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
      setShowSuggestions(false);
      if (searchEngine) {
        searchEngine.addRecentSearch(suggestion.value);
      }
    },
    [setSearchInput, searchEngine]
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
      case "recent":
        return <FaHistory className="w-3 h-3" />;
      default:
        return <FaSearch className="w-3 h-3" />;
    }
  };

  return (
    <div className="relative">
      <div className="relative">
        <FaSearch className="absolute  left-3 top-1/2 transform -translate-y-1/2 text-neutral-900 text-lg" />
        <input
          ref={inputRef}
          type="text"
          placeholder="Search articles... (⌘K)"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          className="w-full pl-10 pr-10 py-4 border border-gray-200 shadow-xl shadow-gray-300 rounded-2xl bg-white text-black outline-none placeholder-neutral-900 text-lg"
        />
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
          {searchInput && (
            <button
            title="newbtn"
              onClick={() => {
                setSearchInput("");
                setShowSuggestions(false);
              }}
              className="text-neutral-900 hover:text-black transition-colors duration-200"
            >
              <FaTimes className="w-3 h-3" />
            </button>
          )}
          <div className="hidden sm:flex items-center gap-1 text-md text-black font-medium bg-blue-50 px-3 py-2 rounded-xl shadow-lg shadow-gray-300 focus:animate-pulse border border-gray-200">
            <FaKeyboard className="w-3 h-3" />
            ⌘K
          </div>
        </div>
      </div>

      {/* Suggestions */}
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-xl shadow-2xl shadow-gray-300 z-50 max-h-60 overflow-y-auto">
          {suggestions.map((suggestion, index) => (
            <button
              key={`${suggestion.type}-${suggestion.value}`}
              onClick={() => handleSuggestionClick(suggestion)}
              className={`w-full flex items-center gap-2 px-3 py-2 text-left hover:bg-gray-100 transition-colors duration-150 ${
                index === selectedIndex ? "bg-neutral-200" : ""
              } border-b border-neutral-300 last:border-b-0`}
            >
              <div className="p-2 bg-neutral-200 rounded-md text-black">
                {getSuggestionIcon(suggestion.type)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-black text-sm font-medium truncate">
                  {suggestion.label}
                </div>
                <div className="text-xs text-neutral-500 capitalize">
                  {suggestion.type === "recent" ? "Recent search" : "Article"}
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

// Main Blog Component
const BlogPageContent: React.FC = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchEngine, setSearchEngine] = useState<SimpleSearchEngine | null>(null);

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
      setSearchEngine(new SimpleSearchEngine(posts));
    }
  }, [posts]);

  const filteredPosts = useMemo(() => {
    if (!posts || !searchEngine) return [];
    
    if (!searchInput.trim()) {
      // Return all posts sorted by date when no search
      return [...posts].sort((a, b) => 
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      );
    }
    
    return searchEngine.search(searchInput);
  }, [posts, searchInput, searchEngine]);

  if (error) {
    return (
      <div className="min-h-screen bg-white text-neutral-900 flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <FaExclamationTriangle className="text-neutral-900 text-4xl mx-auto mb-4" />
          <h2 className="text-xl font-bold text-neutral-900 mb-2">
            Failed to Load Blog Posts
          </h2>
          <p className="text-neutral-500 text-sm mb-4">
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
    <div className="min-h-screen bg-gray-50 text-black pt-20">
      {/* Hero Section */}
      <section className="bg-gray-100 text-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl heading-kinshuk font-bold text-blue-900 mb-4 leading-tight">
              Minimal{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-neutral-900 to-neutral-900">
                Minds
              </span>
            </h1>
            <p className="text-base sm:text-lg text-neutral-900 leading-relaxed max-w-2xl font-medium mx-auto">
              Exploring cloud computing, DevOps, and React development through
              curiosity and real-world experience.
            </p>
          </div>
        </div>
      </section>

      {/* Search */}
      <div className="sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <SearchBar
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            resultsCount={filteredPosts.length}
            totalCount={posts?.length || 0}
            searchEngine={searchEngine}
          />
        </div>
      </div>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-16">
            <FaSpinner className="animate-spin text-black text-3xl mb-4" />
            <h3 className="text-lg text-black mb-2">Loading articles...</h3>
            <p className="text-neutral-900 text-sm">
              Fetching the latest insights
            </p>
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="text-center py-16">
            <FaSearch className="text-black text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-bold text-black mb-2">
              No articles found
            </h3>
            <p className="text-neutral-900 mb-6 max-w-md mx-auto">
              Try different search terms to discover more content
            </p>
            <button
              onClick={() => setSearchInput("")}
              className="px-4 py-2 bg-white text-black font-medium hover:bg-neutral-200 transition-colors duration-200 rounded-md"
            >
              Clear Search
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredPosts.map((post) => (
              <BlogCard
                key={post.id}
                post={post}
                searchQuery={searchInput}
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
