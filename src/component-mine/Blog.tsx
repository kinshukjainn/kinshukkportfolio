"use client"

import type React from "react"
import { useState, useMemo, useCallback, useEffect } from "react"
import { useQuery, QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { motion } from "framer-motion"
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
} from "react-icons/fa"

// Types
interface BlogPost {
  id: string
  title: string
  brief: string
  slug: string
  publishedAt: string
  updatedAt: string
  readTimeInMinutes?: number
  views?: number
  reactionCount?: number
  coverImage?: {
    url: string
  }
  tags: Array<{
    id: string
    name: string
    slug: string
  }>
  author: {
    name: string
    profilePicture?: string
  }
}

interface FilterOptions {
  searchTerm: string
  sortBy: "publishedAt" | "views" | "reactions" | "title"
  sortOrder: "asc" | "desc"
  tags: string[]
  dateRange: {
    start: string
    end: string
  }
  minReadTime: number
  maxReadTime: number
}

interface BlogPageProps {
  onBack: () => void
}

// API
const HASHNODE_API_URL = "https://gql.hashnode.com/"

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
`

const fetchBlogPosts = async (): Promise<BlogPost[]> => {
  const response = await fetch(HASHNODE_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: BLOG_POSTS_QUERY,
      variables: { host: "blog.cloudkinshuk.in" },
    }),
  })

  if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)

  const data = await response.json()
  if (data.errors) throw new Error(data.errors[0]?.message || "GraphQL error")
  if (!data.data?.publication?.posts?.edges) throw new Error("No blog posts found")

  interface Edge {
    node: BlogPost
  }

  return data.data.publication.posts.edges.map((edge: Edge) => edge.node)
}

// Professional Blog Card matching landing page design
interface BlogCardProps {
  post: BlogPost
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-[#171717] rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:shadow-lg hover:shadow-black/20"
    >
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Cover Image */}
        {post.coverImage && (
          <div className="w-full lg:w-48 h-32 lg:h-32 flex-shrink-0">
            <img
              src={post.coverImage.url || "/placeholder.svg"}
              alt={post.title}
              className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
              loading="lazy"
            />
          </div>
        )}

        {/* Content */}
        <div className="flex-1 min-w-0 space-y-4">
          {/* Title */}
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-tight hover:text-[#ff9100] transition-colors duration-300 cursor-pointer">
            {post.title}
          </h3>

          {/* Brief */}
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed line-clamp-3">
            {post.brief}
          </p>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <FaCalendarAlt className="text-[#ff9100]" />
              {formatDate(post.publishedAt)}
            </span>
            {post.readTimeInMinutes && (
              <span className="flex items-center gap-2">
                <FaClock className="text-[#ff9100]" />
                {post.readTimeInMinutes}m read
              </span>
            )}
            {post.views && (
              <span className="flex items-center gap-2">
                <FaEye className="text-[#ff9100]" />
                {post.views.toLocaleString()} views
              </span>
            )}
            {post.reactionCount && post.reactionCount > 0 && (
              <span className="flex items-center gap-2">
                <FaHeart className="text-[#ff9100]" />
                {post.reactionCount} reactions
              </span>
            )}
          </div>

          {/* Tags and Action */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {post.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag.id}
                  className="px-3 py-1 text-xs sm:text-sm bg-[#ff9100] text-black font-semibold rounded-xl"
                >
                  {tag.name}
                </span>
              ))}
              {post.tags.length > 4 && (
                <span className="px-3 py-1 text-xs sm:text-sm bg-gray-800 text-gray-300 rounded-xl">
                  +{post.tags.length - 4} more
                </span>
              )}
            </div>

            {/* Read Button */}
            <a
              href={`https://blog.cloudkinshuk.in/${post.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-[#ff9100] text-black font-semibold rounded-full hover:bg-[#ff9100]/90 hover:scale-105 active:scale-95 transition-all duration-300 text-sm sm:text-base w-fit"
            >
              Read Article
              <FaExternalLinkAlt className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  )
}

// Advanced Filters matching landing page design
interface FiltersProps {
  filters: FilterOptions
  setFilters: React.Dispatch<React.SetStateAction<FilterOptions>>
  availableTags: string[]
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

const AdvancedFilters: React.FC<FiltersProps> = ({ filters, setFilters, availableTags, isOpen, setIsOpen }) => {
  const handleTagToggle = useCallback(
    (tag: string) => {
      setFilters((prev) => ({
        ...prev,
        tags: prev.tags.includes(tag) ? prev.tags.filter((t) => t !== tag) : [...prev.tags, tag],
      }))
    },
    [setFilters],
  )

  const clearFilters = useCallback(() => {
    setFilters((prev) => ({
      searchTerm: prev.searchTerm,
      sortBy: "publishedAt",
      sortOrder: "desc",
      tags: [],
      dateRange: { start: "", end: "" },
      minReadTime: 0,
      maxReadTime: 60,
    }))
  }, [setFilters])

  if (!isOpen) return null

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      className="bg-[#171717] border border-gray-800 rounded-2xl p-6 sm:p-8 mt-4"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Sort */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">Sort By</label>
          <select
          title="sorting"
            value={filters.sortBy}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                sortBy: e.target.value as "publishedAt" | "views" | "reactions" | "title",
              }))
            }
            className="w-full p-3 text-sm bg-[#121212] border-2 border-gray-700 rounded-xl text-white focus:border-[#ff9100] focus:outline-none transition-colors duration-300"
          >
            <option value="publishedAt">Date Published</option>
            <option value="title">Title</option>
            <option value="views">Views</option>
            <option value="reactions">Reactions</option>
          </select>
        </div>

        {/* Date Range */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">Date Range</label>
          <div className="space-y-2">
            <input
            title="labels"
              type="date"
              value={filters.dateRange.start}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, dateRange: { ...prev.dateRange, start: e.target.value } }))
              }
              className="w-full p-3 text-sm bg-[#121212] border-2 border-gray-700 rounded-xl text-white focus:border-[#ff9100] focus:outline-none transition-colors duration-300"
            />
            <input
            title="dates"
              type="date"
              value={filters.dateRange.end}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, dateRange: { ...prev.dateRange, end: e.target.value } }))
              }
              className="w-full p-3 text-sm bg-[#121212] border-2 border-gray-700 rounded-xl text-white focus:border-[#ff9100] focus:outline-none transition-colors duration-300"
            />
          </div>
        </div>

        {/* Read Time */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">
            Read Time: {filters.minReadTime}-{filters.maxReadTime}m
          </label>
          <div className="space-y-3">
            <input
            title="range"
              type="range"
              min="0"
              max="60"
              value={filters.minReadTime}
              onChange={(e) => setFilters((prev) => ({ ...prev, minReadTime: Number(e.target.value) }))}
              className="w-full accent-[#ff9100]"
            />
            <input
            title="time"
              type="range"
              min="0"
              max="60"
              value={filters.maxReadTime}
              onChange={(e) => setFilters((prev) => ({ ...prev, maxReadTime: Number(e.target.value) }))}
              className="w-full accent-[#ff9100]"
            />
          </div>
        </div>

        {/* Tags */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">
            Tags ({filters.tags.length} selected)
          </label>
          <div className="max-h-32 overflow-y-auto">
            <div className="flex flex-wrap gap-2">
              {availableTags.slice(0, 12).map((tag) => (
                <button
                  key={tag}
                  onClick={() => handleTagToggle(tag)}
                  className={`px-3 py-1 text-xs rounded-xl transition-all duration-300 ${
                    filters.tags.includes(tag)
                      ? "bg-[#ff9100] text-black font-semibold"
                      : "bg-[#121212] text-gray-300 hover:bg-gray-700 border border-gray-600"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mt-6 pt-6 border-t border-gray-700">
        <button
          onClick={clearFilters}
          className="flex items-center gap-2 px-4 py-2 text-sm text-gray-400 hover:text-white border border-gray-600 rounded-xl hover:border-gray-500 transition-all duration-300"
        >
          <FaTimes />
          Clear Filters
        </button>
        <button
          onClick={() => setIsOpen(false)}
          className="px-4 py-2 text-sm bg-[#ff9100] text-black font-semibold rounded-xl hover:bg-[#ff9100]/90 transition-all duration-300"
        >
          Close Filters
        </button>
      </div>
    </motion.div>
  )
}

// Main Blog Component
const BlogPageContent: React.FC<BlogPageProps> = () => {
  const [filters, setFilters] = useState<FilterOptions>({
    searchTerm: "",
    sortBy: "publishedAt",
    sortOrder: "desc",
    tags: [],
    dateRange: { start: "", end: "" },
    minReadTime: 0,
    maxReadTime: 60,
  })
  const [showFilters, setShowFilters] = useState(false)
  const [searchInput, setSearchInput] = useState("")

  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      setFilters((prev) => ({ ...prev, searchTerm: searchInput }))
    }, 300)
    return () => clearTimeout(timer)
  }, [searchInput])

  const {
    data: posts,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["blogPosts"],
    queryFn: fetchBlogPosts,
    staleTime: 5 * 60 * 1000,
  })

  const filteredPosts = useMemo(() => {
    if (!posts) return []

    return posts
      .filter((post) => {
        const matchesSearch =
          !filters.searchTerm ||
          post.title.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
          post.brief.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
          post.tags.some((tag) => tag.name.toLowerCase().includes(filters.searchTerm.toLowerCase()))

        const matchesTags =
          filters.tags.length === 0 ||
          filters.tags.some((tag) =>
            post.tags.some((postTag) => postTag.name.toLowerCase().includes(tag.toLowerCase())),
          )

        const matchesDateRange =
          (!filters.dateRange.start || new Date(post.publishedAt) >= new Date(filters.dateRange.start)) &&
          (!filters.dateRange.end || new Date(post.publishedAt) <= new Date(filters.dateRange.end))

        const matchesReadTime =
          !post.readTimeInMinutes ||
          (post.readTimeInMinutes >= filters.minReadTime && post.readTimeInMinutes <= filters.maxReadTime)

        return matchesSearch && matchesTags && matchesDateRange && matchesReadTime
      })
      .sort((a, b) => {
        let aValue: string | number, bValue: string | number

        switch (filters.sortBy) {
          case "publishedAt":
            aValue = new Date(a.publishedAt).getTime()
            bValue = new Date(b.publishedAt).getTime()
            break
          case "title":
            aValue = a.title.toLowerCase()
            bValue = b.title.toLowerCase()
            break
          case "views":
            aValue = a.views || 0
            bValue = b.views || 0
            break
          case "reactions":
            aValue = a.reactionCount || 0
            bValue = b.reactionCount || 0
            break
          default:
            aValue = new Date(a.publishedAt).getTime()
            bValue = new Date(b.publishedAt).getTime()
        }

        if (typeof aValue === "string") {
          return filters.sortOrder === "asc" ? aValue.localeCompare(String(bValue)) : String(bValue).localeCompare(aValue)
        }
        return filters.sortOrder === "asc" ? Number(aValue) - Number(bValue) : Number(bValue) - Number(aValue)
      })
  }, [posts, filters])

  const allTags = useMemo(() => {
    if (!posts) return []
    const tagSet = new Set<string>()
    posts.forEach((post) => post.tags.forEach((tag) => tagSet.add(tag.name)))
    return Array.from(tagSet).sort()
  }, [posts])

  if (error) {
    return (
      <div className="min-h-screen bg-[#121212] flex items-center justify-center p-4">
        <div className="text-center">
          <FaExclamationTriangle className="text-red-500 text-6xl mx-auto mb-6" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Failed to Load Blog Posts</h2>
          <p className="text-gray-400 text-lg mb-6">{error instanceof Error ? error.message : "Unknown error occurred"}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-12 bg-[#121212] text-white">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-[#0d0d0d] border-b border-gray-800"
      >
        <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          
          <h1 className="personal-name p-4 mb-6">Blog</h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-4xl">
            My thoughts on cloud computing, DevOps practices, React development, and technical insights. 
            Also includes some non-technical perspectives and experiences from my journey.
          </p>
        </div>
      </motion.header>

      {/* Search & Filters */}
      <div className="sticky top-0 z-10 bg-[#121212]/95 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#ff9100] text-lg" />
              <input
                type="text"
                placeholder="Search articles, insights, and thoughts..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="w-full pl-12 pr-6 py-4 bg-[#171717] border-2 border-gray-700 rounded-2xl text-white placeholder-gray-400 text-lg focus:border-[#ff9100] focus:outline-none transition-all duration-300"
              />
            </div>

            {/* Filter Controls */}
            <div className="flex gap-3">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-6 py-4 bg-[#171717] border-2 border-gray-700 rounded-2xl hover:border-[#ff9100] transition-all duration-300 text-lg"
              >
                <FaFilter className="text-[#ff9100]" />
                Filters
                {showFilters ? <FaChevronUp className="text-[#ff9100]" /> : <FaChevronDown className="text-[#ff9100]" />}
              </button>

              <button
                onClick={() => setFilters((prev) => ({ ...prev, sortOrder: prev.sortOrder === "asc" ? "desc" : "asc" }))}
                className="flex items-center gap-2 px-6 py-4 bg-[#171717] border-2 border-gray-700 rounded-2xl hover:border-[#ff9100] transition-all duration-300 text-lg"
              >
                <FaSort className="text-[#ff9100]" />
                {filters.sortOrder === "desc" ? "Newest" : "Oldest"}
              </button>
            </div>
          </div>

          {/* Results Count */}
          {posts && (
            <div className="mt-4 text-sm text-gray-400">
              Showing {filteredPosts.length} of {posts.length} articles
              {filters.tags.length > 0 && ` • ${filters.tags.length} tag${filters.tags.length > 1 ? "s" : ""} selected`}
            </div>
          )}

          <AdvancedFilters
            filters={filters}
            setFilters={setFilters}
            availableTags={allTags}
            isOpen={showFilters}
            setIsOpen={setShowFilters}
          />
        </div>
      </div>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <FaSpinner className="animate-spin text-[#ff9100] text-4xl mr-4" />
            <span className="text-xl text-gray-300">Loading articles...</span>
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="text-center py-20">
            <FaSearch className="text-[#ff9100] text-6xl mx-auto mb-6" />
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">No articles found</h3>
            <p className="text-lg text-gray-300 mb-8">Try adjusting your search terms or filters</p>
            <button
              onClick={() => {
                setSearchInput("")
                setFilters((prev) => ({
                  ...prev,
                  searchTerm: "",
                  tags: [],
                  dateRange: { start: "", end: "" },
                }))
              }}
              className="px-6 py-3 bg-[#ff9100] text-black font-semibold rounded-full hover:bg-[#ff9100]/90 transition-all duration-300"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className="space-y-8 sm:space-y-12">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 text-lg mb-4">© 2025 Kinshuk Jain. Available for opportunities.</p>
          <a
            href="https://blog.cloudkinshuk.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#ff9100] hover:text-[#ff9100]/80 text-lg transition-colors duration-300"
          >
            <FaExternalLinkAlt />
            Visit Original Blog
          </a>
        </div>
      </footer>
    </div>
  )
}

// Query Client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      retry: 2,
    },
  },
})

const BlogPage: React.FC<BlogPageProps> = ({ onBack }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <BlogPageContent onBack={onBack} />
    </QueryClientProvider>
  )
}

export default BlogPage