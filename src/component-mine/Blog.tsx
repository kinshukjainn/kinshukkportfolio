"use client";

import type React from "react";
import {
  useState,
  useMemo,
  Component,
  type ErrorInfo,
  type ReactNode,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  FaSearch,
  FaFilter,
  FaExternalLinkAlt,
  FaSpinner,
  FaExclamationTriangle,
  FaSortAmountDown,
  FaSortAmountUp,
  FaCalendarAlt,
  FaEye,
  FaHeart,
  FaTags,
  FaClock,
  FaTimes,
  FaRedo,
} from "react-icons/fa";

// Types and Interfaces
export interface BlogPost {
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
}

export interface FilterOptions {
  searchTerm: string;
  sortBy: "publishedAt" | "views" | "reactions";
  sortOrder: "asc" | "desc";
  tags: string[];
  dateRange: {
    start: string;
    end: string;
  };
}

interface HashnodeResponse {
  data?: {
    publication?: {
      id: string;
      title: string;
      posts?: {
        edges: Array<{
          node: BlogPost;
        }>;
      };
    };
  };
  errors?: Array<{
    message: string;
  }>;
}

// API Service
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
      },
      body: JSON.stringify({
        query: BLOG_POSTS_QUERY,
        variables: {
          host: "blog.cloudkinshuk.in",
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: HashnodeResponse = await response.json();

    if (data.errors) {
      throw new Error(data.errors[0]?.message || "GraphQL error occurred");
    }

    if (!data.data?.publication?.posts?.edges) {
      throw new Error("No blog posts found or invalid response structure");
    }

    return data.data.publication.posts.edges.map((edge) => edge.node);
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    throw error instanceof Error
      ? error
      : new Error("Failed to fetch blog posts");
  }
};

// Error Boundary Component
interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  private handleRetry = (): void => {
    this.setState({ hasError: false, error: undefined });
  };

  public render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#121212] flex items-center justify-center p-4">
          <div className="text-center max-w-md">
            <FaExclamationTriangle className="text-red-500 text-6xl mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-white mb-4">
              Something went wrong
            </h2>
            <p className="text-gray-400 mb-6">
              {this.state.error?.message || "An unexpected error occurred"}
            </p>
            <button
              onClick={this.handleRetry}
              className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md transition-colors"
            >
              <FaRedo />
              Try Again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Blog Card Component
interface BlogCardProps {
  post: BlogPost;
  index: number;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, index }) => {
  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatReadTime = (readTime: number): string => {
    return `${readTime} min read`;
  };

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        layout: { duration: 0.3 },
      }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <div className=" rounded-md p-6 sm:p-8 lg:p-10">
        {/* Header with meta info */}
        <div className="flex flex-wrap gap-4 sm:gap-6 text-sm text-gray-400 mb-6">
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 bg-red-500 rounded-full" />
            <FaCalendarAlt className="text-xs text-white" />
            <span>{formatDate(post.publishedAt)}</span>
          </div>

          {post.readTimeInMinutes && (
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-blue-500 rounded-full" />
              <FaClock className="text-xs" />
              <span>{formatReadTime(post.readTimeInMinutes)}</span>
            </div>
          )}

          {post.views && (
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-green-500 rounded-full" />
              <FaEye className="text-xs" />
              <span>{post.views.toLocaleString()} views</span>
            </div>
          )}

          {post.reactionCount && post.reactionCount > 0 && (
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-pink-500 rounded-full" />
              <FaHeart className="text-xs" />
              <span>{post.reactionCount} reactions</span>
            </div>
          )}
        </div>

        {/* Cover Image */}
        {post.coverImage && (
          <motion.div
            className="mb-6 overflow-hidden rounded-md"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={
                post.coverImage.url || "/placeholder.svg?height=256&width=512"
              }
              alt={post.title}
              className="w-full h-48 sm:h-64 object-cover"
              loading="lazy"
            />
          </motion.div>
        )}

        {/* Title */}
        <motion.h2
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors duration-300"
          layoutId={`title-${post.id}`}
        >
          {post.title}
        </motion.h2>

        {/* Brief/Excerpt */}
        <motion.p
          className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6"
          layoutId={`brief-${post.id}`}
        >
          {post.brief}
        </motion.p>

        {/* Tags */}
        {post.tags.length > 0 && (
          <motion.div
            className="flex flex-wrap gap-2 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <FaTags className="text-gray-400 mt-1" />
            {post.tags.slice(0, 5).map((tag, tagIndex) => (
              <motion.span
                key={tag.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + tagIndex * 0.1 }}
                className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full hover:bg-red-500/20 hover:text-red-400 transition-colors cursor-pointer"
              >
                {tag.name}
              </motion.span>
            ))}
            {post.tags.length > 5 && (
              <span className="px-3 py-1 bg-gray-800 text-gray-400 text-sm rounded-full">
                +{post.tags.length - 5} more
              </span>
            )}
          </motion.div>
        )}

        {/* CTA Button */}
        <div className="pt-6">
          <motion.a
            href={`https://blog.cloudkinshuk.in/${post.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-black px-3 py-3 rounded-md text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Read Article</span>
            <FaExternalLinkAlt className="group-hover:translate-x-1 transition-transform duration-300" />
          </motion.a>
        </div>
      </div>
    </motion.article>
  );
};

// Search Filters Component
interface SearchFiltersProps {
  filters: FilterOptions;
  setFilters: React.Dispatch<React.SetStateAction<FilterOptions>>;
  availableTags: string[];
}

const SearchFilters: React.FC<SearchFiltersProps> = ({
  filters,
  setFilters,
  availableTags,
}) => {
  const handleTagToggle = (tag: string): void => {
    setFilters((prev) => ({
      ...prev,
      tags: prev.tags.includes(tag)
        ? prev.tags.filter((t) => t !== tag)
        : [...prev.tags, tag],
    }));
  };

  const clearFilters = (): void => {
    setFilters({
      searchTerm: filters.searchTerm, // Keep search term
      sortBy: "publishedAt",
      sortOrder: "desc",
      tags: [],
      dateRange: { start: "", end: "" },
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-6 border-t border-gray-700"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Sort Options */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-3">
            <FaSortAmountDown />
            Sort By
          </label>
          <select
            aria-label="Sort blog posts by"
            value={filters.sortBy}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                sortBy: e.target.value as FilterOptions["sortBy"],
              }))
            }
            className="w-full p-2 bg-[#171717] border border-gray-700 rounded-md text-white focus:outline-none focus:border-red-500"
          >
            <option value="publishedAt">Date Published</option>
            <option value="views">Views</option>
            <option value="reactions">Reactions</option>
          </select>
        </div>

        {/* Date Range */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-3">
            <FaCalendarAlt className="text-white" />
            Date Range
          </label>
          <div className="space-y-2 text-white">
            <input
              type="date"
              title="Start Date"
              value={filters.dateRange.start}
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  dateRange: { ...prev.dateRange, start: e.target.value },
                }))
              }
              className="w-full p-2 bg-[#171717] border border-gray-700 rounded-md text-white focus:outline-none focus:border-red-500"
            />
            <input
              type="date"
              title="End Date"
              value={filters.dateRange.end}
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  dateRange: { ...prev.dateRange, end: e.target.value },
                }))
              }
              className="w-full p-2 bg-[#171717] border border-gray-700 rounded-md text-white focus:outline-none focus:border-red-500"
            />
          </div>
        </div>

        {/* Tags */}
        <div className="md:col-span-2">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-3">
            <FaTags />
            Tags ({filters.tags.length} selected)
          </label>
          <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto">
            {availableTags.map((tag) => (
              <button
                key={tag}
                onClick={() => handleTagToggle(tag)}
                className={`px-3 py-1 text-sm rounded-md  transition-colors ${
                  filters.tags.includes(tag)
                    ? "bg-red-500 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Clear Filters */}
      <div className="flex justify-end mt-4">
        <button
          onClick={clearFilters}
          className="flex items-center gap-2  px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors"
        >
          <FaTimes />
          Clear Filters
        </button>
      </div>
    </motion.div>
  );
};

// Main Blog Page Component
const BlogPageContent: React.FC = () => {
  const [filters, setFilters] = useState<FilterOptions>({
    searchTerm: "",
    sortBy: "publishedAt",
    sortOrder: "desc",
    tags: [],
    dateRange: { start: "", end: "" },
  });
  const [showFilters, setShowFilters] = useState<boolean>(false);

  const {
    data: posts,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["blogPosts"],
    queryFn: fetchBlogPosts,
    staleTime: 5 * 60 * 1000,
  });

  const filteredAndSortedPosts = useMemo(() => {
    if (!posts) return [];

    const filtered = posts.filter((post: BlogPost) => {
      const matchesSearch =
        post.title.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        post.brief.toLowerCase().includes(filters.searchTerm.toLowerCase());

      const matchesTags =
        filters.tags.length === 0 ||
        filters.tags.some((tag) =>
          post.tags.some((postTag) =>
            postTag.name.toLowerCase().includes(tag.toLowerCase())
          )
        );

      const matchesDateRange =
        (!filters.dateRange.start ||
          new Date(post.publishedAt) >= new Date(filters.dateRange.start)) &&
        (!filters.dateRange.end ||
          new Date(post.publishedAt) <= new Date(filters.dateRange.end));

      return matchesSearch && matchesTags && matchesDateRange;
    });

    // Sort posts
    filtered.sort((a: BlogPost, b: BlogPost) => {
      let aValue: number, bValue: number;

      switch (filters.sortBy) {
        case "publishedAt":
          aValue = new Date(a.publishedAt).getTime();
          bValue = new Date(b.publishedAt).getTime();
          break;
        case "views":
          aValue = a.views || 0;
          bValue = b.views || 0;
          break;
        case "reactions":
          aValue = a.reactionCount || 0;
          bValue = b.reactionCount || 0;
          break;
        default:
          aValue = new Date(a.publishedAt).getTime();
          bValue = new Date(b.publishedAt).getTime();
      }

      return filters.sortOrder === "asc" ? aValue - bValue : bValue - aValue;
    });

    return filtered;
  }, [posts, filters]);

  const allTags = useMemo(() => {
    if (!posts) return [];
    const tagSet = new Set<string>();
    posts.forEach((post: BlogPost) => {
      post.tags.forEach((tag) => tagSet.add(tag.name));
    });
    return Array.from(tagSet);
  }, [posts]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center p-8"
        >
          <FaExclamationTriangle className="text-red-500 text-6xl mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-4">
            Failed to Load Blog Posts
          </h2>
          <p className="text-gray-400 mb-6">
            {error instanceof Error
              ? error.message
              : "An unexpected error occurred"}
          </p>
          <button
            onClick={() => refetch()}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md transition-colors"
          >
            Try Again
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-[#121212] text-white">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-transparent to-blue-900/20" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 relative">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-5xl personal-name p-4 sm:text-5xl lg:text-7xl font-bold text-red-500 mb-6">
                My thinking , opinion, and some other stuff 
              </h1>
              <div className="w-32 h-2 bg-red-500 rounded-full mx-auto mb-8" />
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                My thoughts, opinion, take, and some guides on cloud, building
                scalable infrastructure, deploying apps, web development, and
                many other technical and non-technical fields.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Search and Filter Section */}
        <section className="sticky top-0 z-40 bg-[#121212]/95 backdrop-blur-lg border-b border-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-xl">
                <FaSearch className="absolute left-3  top-1/2 transform -translate-y-1/2 text-white" />
                <input
                  type="text"
                  placeholder="Search blog posts..."
                  value={filters.searchTerm}
                  onChange={(e) =>
                    setFilters((prev) => ({
                      ...prev,
                      searchTerm: e.target.value,
                    }))
                  }
                  className="w-full pl-10 pr-4 py-3 bg-[#171717] border border-red-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-transparent transition-all duration-300
    hover:shadow-lg shadow-red-500
    focus:shadow-[0_0_12px_4px_rgba(255,0,150,0.6),0_0_20px_8px_rgba(0,229,255,0.3)]"
                />
              </div>

              {/* Filter Controls */}
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 px-4 py-2 bg-[#171717] border border-gray-700 rounded-md hover:border-red-500 transition-colors"
                >
                  <FaFilter />
                  Filters
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      setFilters((prev) => ({
                        ...prev,
                        sortOrder: prev.sortOrder === "asc" ? "desc" : "asc",
                      }))
                    }
                    className="p-2 bg-[#171717] border border-gray-700 rounded-md hover:border-red-500 transition-colors"
                  >
                    {filters.sortOrder === "asc" ? (
                      <FaSortAmountUp />
                    ) : (
                      <FaSortAmountDown />
                    )}
                  </button>
                </div>

                {posts && (
                  <span className="text-sm text-gray-400">
                    {filteredAndSortedPosts.length} of {posts.length} posts
                  </span>
                )}
              </div>
            </div>

            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <SearchFilters
                    filters={filters}
                    setFilters={setFilters}
                    availableTags={allTags}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Blog Posts Section */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {isLoading ? (
              <div className="flex items-center justify-center py-20">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 1,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                >
                  <FaSpinner className="text-red-500 text-4xl" />
                </motion.div>
                <span className="ml-4 text-xl text-gray-300">
                  Loading blog posts...
                </span>
              </div>
            ) : filteredAndSortedPosts.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-20"
              >
                <FaSearch className="text-gray-500 text-6xl mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">
                  No posts found
                </h3>
                <p className="text-gray-400">
                  Try adjusting your search terms or filters
                </p>
              </motion.div>
            ) : (
              <motion.div layout className="grid gap-8 md:gap-12">
                <AnimatePresence mode="popLayout">
                  {filteredAndSortedPosts.map(
                    (post: BlogPost, index: number) => (
                      <BlogCard key={post.id} post={post} index={index} />
                    )
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-800 py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-gray-400">
                © 2025 Cloud Kinshuk. All rights reserved.
              </p>
              <a
                href="https://blog.cloudkinshuk.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-red-500 hover:text-red-400 transition-colors"
              >
                <FaExternalLinkAlt />
                Visit Original Blog
              </a>
            </div>
          </div>
        </footer>
      </div>
    </ErrorBoundary>
  );
};

// Query Client Setup
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 3,
      retryDelay: (attemptIndex: number) =>
        Math.min(1000 * 2 ** attemptIndex, 30000),
    },
  },
});

// Main App Component
const BlogPage: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-[#121212]">
        <BlogPageContent />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default BlogPage;
