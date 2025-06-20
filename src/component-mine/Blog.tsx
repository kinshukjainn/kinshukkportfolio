"use client"

import React, { useState, useMemo, useCallback, useEffect, useRef } from "react"
import { useQuery, QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { motion, AnimatePresence } from "framer-motion"
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
  FaBookmark,
  FaShare,
  FaArrowUp,
} from "react-icons/fa"

// Enhanced Types with better performance optimization
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
  url?: string
}

interface FilterOptions {
  searchTerm: string
  sortBy: "publishedAt" | "views" | "reactions" | "title" | "readTime"
  sortOrder: "asc" | "desc"
  tags: string[]
  dateRange: {
    start: string
    end: string
  }
  minReadTime: number
  maxReadTime: number
  author: string
}

// Optimized API with better error handling and caching
const HASHNODE_API_URL = "https://gql.hashnode.com/"

// Simplified and working API query
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
  try {
    console.log("Fetching blog posts from Hashnode...")

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
    })

    console.log("Response status:", response.status)

    if (!response.ok) {
      const errorText = await response.text()
      console.error("Response error:", errorText)
      throw new Error(`HTTP error! status: ${response.status} - ${errorText}`)
    }

    const data = await response.json()
    console.log("Response data:", data)

    if (data.errors) {
      console.error("GraphQL errors:", data.errors)
      throw new Error(data.errors[0]?.message || "GraphQL error")
    }

    if (!data.data?.publication?.posts?.edges) {
      console.error("No posts found in response:", data.data)
      throw new Error("No blog posts found")
    }

    type Edge = { node: BlogPost }
    const posts = (data.data.publication.posts.edges as Edge[]).map((edge) => ({
      ...edge.node,
      url: `https://blog.cloudkinshuk.in/${edge.node.slug}`,
    }))

    console.log(`Successfully fetched ${posts.length} posts`)
    return posts
  } catch (error) {
    console.error("Detailed error in fetchBlogPosts:", error)
    throw error
  }
}

// Enhanced Blog Card with Meta-style design
interface BlogCardProps {
  post: BlogPost
  index: number
}

const BlogCard: React.FC<BlogCardProps> = React.memo(({ post, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  const formatDate = useCallback((dateString: string): string => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  }, [])

  const formatNumber = useCallback((num: number): string => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`
    return num.toString()
  }, [])

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="group relative bg-[#1c1e21] rounded-2xl overflow-hidden border border-[#3a3b3c] hover:border-[#ff6b35] transition-all duration-500 hover:shadow-2xl hover:shadow-[#ff6b35]/10 hover:-translate-y-2"
    >
      {/* Cover Image */}
      <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden bg-[#242526]">
        {post.coverImage && !imageError ? (
          <>
            <img
              src={post.coverImage.url || "/placeholder.svg"}
              alt={post.title}
              className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
              loading="lazy"
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
            />
            {!imageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <FaSpinner className="animate-spin text-[#ff6b35] text-2xl" />
              </div>
            )}
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#ff6b35]/20 to-[#ff6b35]/5">
            <FaBookmark className="text-[#ff6b35] text-4xl opacity-50" />
          </div>
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Quick Actions */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <button title="nnn" className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-[#ff6b35] transition-colors duration-200">
            <FaBookmark className="w-3 h-3" />
          </button>
          <button title="nnn" className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-[#ff6b35] transition-colors duration-200">
            <FaShare className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8">
        {/* Author & Date */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center gap-2">
            {post.author.profilePicture ? (
              <img
                src={post.author.profilePicture || "/placeholder.svg"}
                alt={post.author.name}
                className="w-8 h-8 rounded-full object-cover border-2 border-[#ff6b35]"
              />
            ) : (
              <div className="w-8 h-8 rounded-full bg-[#ff6b35] flex items-center justify-center">
                <FaUser className="w-4 h-4 text-white" />
              </div>
            )}
            <span className="text-sm font-medium text-[#e4e6ea]">{post.author.name}</span>
          </div>
          <span className="text-[#b0b3b8] text-sm">•</span>
          <span className="text-sm text-[#b0b3b8] flex items-center gap-1">
            <FaCalendarAlt className="w-3 h-3 text-[#ff6b35]" />
            {formatDate(post.publishedAt)}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#e4e6ea] leading-tight mb-4 group-hover:text-[#ff6b35] transition-colors duration-300 line-clamp-2">
          {post.title}
        </h2>

        {/* Brief */}
        <p className="text-[#b0b3b8] text-sm sm:text-base leading-relaxed mb-6 line-clamp-3">{post.brief}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag.id}
              className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium bg-[#ff6b35]/10 text-[#ff6b35] rounded-full border border-[#ff6b35]/20 hover:bg-[#ff6b35]/20 transition-colors duration-200"
            >
              <FaTag className="w-2 h-2" />
              {tag.name}
            </span>
          ))}
          {post.tags.length > 3 && (
            <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-[#3a3b3c] text-[#b0b3b8] rounded-full">
              +{post.tags.length - 3} more
            </span>
          )}
        </div>

        {/* Meta Info & CTA */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-xs sm:text-sm text-[#b0b3b8]">
            {post.readTimeInMinutes && (
              <span className="flex items-center gap-1">
                <FaClock className="w-3 h-3 text-[#ff6b35]" />
                {post.readTimeInMinutes}m
              </span>
            )}
            {post.views && (
              <span className="flex items-center gap-1">
                <FaEye className="w-3 h-3 text-[#ff6b35]" />
                {formatNumber(post.views)}
              </span>
            )}
            {post.reactionCount && post.reactionCount > 0 && (
              <span className="flex items-center gap-1">
                <FaHeart className="w-3 h-3 text-[#ff6b35]" />
                {formatNumber(post.reactionCount)}
              </span>
            )}
          </div>

          <a
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#ff6b35] text-white font-semibold rounded-lg hover:bg-[#ff6b35]/90 hover:scale-105 active:scale-95 transition-all duration-200 text-sm"
          >
            Read
            <FaExternalLinkAlt className="w-3 h-3" />
          </a>
        </div>
      </div>
    </motion.article>
  )
})

BlogCard.displayName = "BlogCard"

// Advanced Search Component
interface SearchBarProps {
  searchInput: string
  setSearchInput: (value: string) => void
  resultsCount: number
  totalCount: number
}

const SearchBar: React.FC<SearchBarProps> = ({ searchInput, setSearchInput, resultsCount, totalCount }) => {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        inputRef.current?.focus()
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <div className="relative">
      <div className="relative">
        <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#ff6b35] text-lg" />
        <input
          ref={inputRef}
          type="text"
          placeholder="Search articles, insights, and thoughts... (⌘K)"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="w-full pl-12 pr-6 py-4 bg-[#242526] border-2 border-[#3a3b3c] rounded-full text-[#e4e6ea] placeholder-[#b0b3b8] text-md focus:border-[#ff6b35] focus:outline-none focus:ring-2 focus:ring-[#ff6b35]/20 transition-all duration-300"
        />
        {searchInput && (
          <button
          title="clear search"
            onClick={() => setSearchInput("")}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#b0b3b8] hover:text-[#ff6b35] transition-colors duration-200"
          >
            <FaTimes />
          </button>
        )}
      </div>

      {/* Results indicator */}
      <div className="absolute -bottom-6 left-0 text-sm text-[#b0b3b8]">
        {searchInput && (
          <span>
            {resultsCount} of {totalCount} articles
          </span>
        )}
      </div>
    </div>
  )
}

// Enhanced Filters Component
interface FiltersProps {
  filters: FilterOptions
  setFilters: React.Dispatch<React.SetStateAction<FilterOptions>>
  availableTags: string[]
  availableAuthors: string[]
  isOpen: boolean
  setIsOpen: (open: boolean) => void
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
      author: "",
    }))
  }, [setFilters])

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="bg-[#242526] border border-[#3a3b3c] rounded-xl p-6 sm:p-8 mt-6 overflow-hidden"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Sort Options */}
          <div className="space-y-3">
            <label className="block text-sm font-semibold text-[#e4e6ea]">Sort By</label>
            <select
            title="sort by"
              value={filters.sortBy}
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  sortBy: e.target.value as FilterOptions["sortBy"],
                }))
              }
              className="w-full p-3 text-sm bg-[#1c1e21] border-2 border-[#3a3b3c] rounded-lg text-[#e4e6ea] focus:border-[#ff6b35] focus:outline-none transition-colors duration-300"
            >
              <option value="publishedAt">Date Published</option>
              <option value="title">Title</option>
              <option value="views">Views</option>
              <option value="reactions">Reactions</option>
              <option value="readTime">Read Time</option>
            </select>
          </div>

          {/* Author Filter */}
          <div className="space-y-3">
            <label className="block text-sm font-semibold text-[#e4e6ea]">Author</label>
            <select
            title="author filter"
              value={filters.author}
              onChange={(e) => setFilters((prev) => ({ ...prev, author: e.target.value }))}
              className="w-full p-3 text-sm bg-[#1c1e21] border-2 border-[#3a3b3c] rounded-lg text-[#e4e6ea] focus:border-[#ff6b35] focus:outline-none transition-colors duration-300"
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
          <div className="space-y-3">
            <label className="block text-sm font-semibold text-[#e4e6ea]">Date Range</label>
            <div className="space-y-2">
              <input
              title="start date"
                type="date"
                value={filters.dateRange.start}
                onChange={(e) =>
                  setFilters((prev) => ({ ...prev, dateRange: { ...prev.dateRange, start: e.target.value } }))
                }
                className="w-full p-3 text-sm bg-[#1c1e21] border-2 border-[#3a3b3c] rounded-lg text-[#e4e6ea] focus:border-[#ff6b35] focus:outline-none transition-colors duration-300"
              />
              <input
              title="end date"
                type="date"
                value={filters.dateRange.end}
                onChange={(e) =>
                  setFilters((prev) => ({ ...prev, dateRange: { ...prev.dateRange, end: e.target.value } }))
                }
                className="w-full p-3 text-sm bg-[#1c1e21] border-2 border-[#3a3b3c] rounded-lg text-[#e4e6ea] focus:border-[#ff6b35] focus:outline-none transition-colors duration-300"
              />
            </div>
          </div>

          {/* Read Time Range */}
          <div className="space-y-3">
            <label className="block text-sm font-semibold text-[#e4e6ea]">
              Read Time: {filters.minReadTime}-{filters.maxReadTime}m
            </label>
            <div className="space-y-3">
              <input
              title="min read time"
                type="range"
                min="0"
                max="60"
                value={filters.minReadTime}
                onChange={(e) => setFilters((prev) => ({ ...prev, minReadTime: Number(e.target.value) }))}
                className="w-full accent-[#ff6b35]"
              />
              <input
              title="max read time"
                type="range"
                min="0"
                max="60"
                value={filters.maxReadTime}
                onChange={(e) => setFilters((prev) => ({ ...prev, maxReadTime: Number(e.target.value) }))}
                className="w-full accent-[#ff6b35]"
              />
            </div>
          </div>
        </div>

        {/* Tags Section */}
        <div className="mt-8 space-y-4">
          <label className="block text-sm font-semibold text-[#e4e6ea]">Tags ({filters.tags.length} selected)</label>
          <div className="max-h-40 overflow-y-auto">
            <div className="flex flex-wrap gap-2">
              {availableTags.slice(0, 20).map((tag) => (
                <button
                  key={tag}
                  onClick={() => handleTagToggle(tag)}
                  className={`inline-flex items-center gap-1 px-3 py-2 text-xs font-medium rounded-lg transition-all duration-200 ${
                    filters.tags.includes(tag)
                      ? "bg-[#ff6b35] text-white"
                      : "bg-[#1c1e21] text-[#b0b3b8] hover:bg-[#3a3b3c] border border-[#3a3b3c]"
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
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mt-8 pt-6 border-t border-[#3a3b3c]">
          <button
            onClick={clearFilters}
            className="flex items-center justify-center gap-2 px-6 py-3 text-sm text-[#b0b3b8] hover:text-[#e4e6ea] border border-[#3a3b3c] rounded-lg hover:border-[#ff6b35] transition-all duration-300"
          >
            <FaTimes />
            Clear Filters
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="px-6 py-3 text-sm bg-[#ff6b35] text-white font-semibold rounded-lg hover:bg-[#ff6b35]/90 transition-all duration-300"
          >
            Apply Filters
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

// Scroll to Top Button
const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-[#ff6b35] text-white rounded-full shadow-lg hover:bg-[#ff6b35]/90 hover:scale-110 transition-all duration-300"
        >
          <FaArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

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
  })
  const [showFilters, setShowFilters] = useState(false)
  const [searchInput, setSearchInput] = useState("")

  // Optimized debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      setFilters((prev) => ({ ...prev, searchTerm: searchInput }))
    }, 200) // Reduced debounce time for faster response
    return () => clearTimeout(timer)
  }, [searchInput])

  const {
    data: posts,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["blogPosts"],
    queryFn: fetchBlogPosts,
    staleTime: 10 * 60 * 1000, // 10 minutes
    gcTime: 30 * 60 * 1000, // 30 minutes
    refetchOnWindowFocus: false,
    retry: 3,
  })

  // Optimized filtering with useMemo
  const filteredPosts = useMemo(() => {
    if (!posts) return []

    return posts
      .filter((post) => {
        const matchesSearch =
          !filters.searchTerm ||
          post.title.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
          post.brief.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
          post.tags.some((tag) => tag.name.toLowerCase().includes(filters.searchTerm.toLowerCase())) ||
          post.author.name.toLowerCase().includes(filters.searchTerm.toLowerCase())

        const matchesTags =
          filters.tags.length === 0 ||
          filters.tags.some((tag) =>
            post.tags.some((postTag) => postTag.name.toLowerCase().includes(tag.toLowerCase())),
          )

        const matchesAuthor = !filters.author || post.author.name.toLowerCase().includes(filters.author.toLowerCase())

        const matchesDateRange =
          (!filters.dateRange.start || new Date(post.publishedAt) >= new Date(filters.dateRange.start)) &&
          (!filters.dateRange.end || new Date(post.publishedAt) <= new Date(filters.dateRange.end))

        const matchesReadTime =
          !post.readTimeInMinutes ||
          (post.readTimeInMinutes >= filters.minReadTime && post.readTimeInMinutes <= filters.maxReadTime)

        return matchesSearch && matchesTags && matchesAuthor && matchesDateRange && matchesReadTime
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
          case "readTime":
            aValue = a.readTimeInMinutes || 0
            bValue = b.readTimeInMinutes || 0
            break
          default:
            aValue = new Date(a.publishedAt).getTime()
            bValue = new Date(b.publishedAt).getTime()
        }

        if (typeof aValue === "string") {
          return filters.sortOrder === "asc"
            ? aValue.localeCompare(String(bValue))
            : String(bValue).localeCompare(aValue)
        }
        return filters.sortOrder === "asc" ? Number(aValue) - Number(bValue) : Number(bValue) - Number(aValue)
      })
  }, [posts, filters])

  // Memoized computed values
  const { allTags, allAuthors } = useMemo(() => {
    if (!posts) return { allTags: [], allAuthors: [] }

    const tagSet = new Set<string>()
    const authorSet = new Set<string>()

    posts.forEach((post) => {
      post.tags.forEach((tag) => tagSet.add(tag.name))
      authorSet.add(post.author.name)
    })

    return {
      allTags: Array.from(tagSet).sort(),
      allAuthors: Array.from(authorSet).sort(),
    }
  }, [posts])

  if (error) {
    return (
      <div className="min-h-screen bg-[#18191a] flex items-center justify-center p-4 ">
        <div className="text-center max-w-md">
          <FaExclamationTriangle className="text-[#ff6b35] text-6xl mx-auto mb-6" />
          <h2 className="text-2xl sm:text-3xl font-bold text-[#e4e6ea] mb-4">Failed to Load Blog Posts</h2>
          <p className="text-[#b0b3b8] text-lg mb-6">
            {error instanceof Error ? error.message : "Unknown error occurred"}
          </p>
          <button
            onClick={() => refetch()}
            className="px-6 py-3 bg-[#ff6b35] text-white font-semibold rounded-lg hover:bg-[#ff6b35]/90 transition-all duration-300"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#18191a] text-[#e4e6ea] pt-20">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-gradient-to-br from-[#18191a] via-[#1c1e21] to-[#242526] border-b border-[#3a3b3c]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold text-[#e4e6ea] mb-6 leading-tight"
            >
              Minimal{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b35] to-[#ff8c42]">
                Mind
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl lg:text-2xl text-[#b0b3b8] leading-relaxed max-w-3xl mx-auto"
            >
              Deep dives into cloud computing, DevOps practices, React development, and technical insights. Plus some
              non-technical perspectives from my engineering journey.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Search & Filters */}
      <div className="sticky top-0 z-40 bg-[#18191a]/95 backdrop-blur-xl border-b border-[#3a3b3c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row gap-4 lg:items-center">
            {/* Search */}
            <div className="flex-1">
              <SearchBar
                searchInput={searchInput}
                setSearchInput={setSearchInput}
                resultsCount={filteredPosts.length}
                totalCount={posts?.length || 0}
              />
            </div>

            {/* Filter Controls */}
            <div className="flex gap-3 lg:flex-shrink-0">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`flex items-center gap-2 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                  showFilters
                    ? "bg-[#ff6b35] text-white"
                    : "bg-[#242526] text-[#e4e6ea] border border-[#3a3b3c] hover:border-[#ff6b35]"
                }`}
              >
                <FaFilter className={showFilters ? "text-white" : "text-[#ff6b35]"} />
                Filters
                {showFilters ? (
                  <FaChevronUp className={showFilters ? "text-white" : "text-[#ff6b35]"} />
                ) : (
                  <FaChevronDown className={showFilters ? "text-white" : "text-[#ff6b35]"} />
                )}
              </button>

              <button
                onClick={() =>
                  setFilters((prev) => ({ ...prev, sortOrder: prev.sortOrder === "asc" ? "desc" : "asc" }))
                }
                className="flex items-center gap-2 px-4 py-3 bg-[#242526] border border-[#3a3b3c] rounded-lg text-[#e4e6ea] hover:border-[#ff6b35] transition-all duration-300 font-medium"
              >
                <FaSort className="text-[#ff6b35]" />
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
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <FaSpinner className="animate-spin text-[#ff6b35] text-5xl mb-6" />
            <h3 className="text-xl text-[#e4e6ea] mb-2">Loading articles...</h3>
            <p className="text-[#b0b3b8]">Fetching the latest insights</p>
          </div>
        ) : filteredPosts.length === 0 ? (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-20">
            <FaSearch className="text-[#ff6b35] text-6xl mx-auto mb-6" />
            <h3 className="text-2xl sm:text-3xl font-bold text-[#e4e6ea] mb-4">No articles found</h3>
            <p className="text-lg text-[#b0b3b8] mb-8 max-w-md mx-auto">
              Try adjusting your search terms or filters to discover more content
            </p>
            <button
              onClick={() => {
                setSearchInput("")
                setFilters((prev) => ({
                  ...prev,
                  searchTerm: "",
                  tags: [],
                  dateRange: { start: "", end: "" },
                  author: "",
                }))
              }}
              className="px-6 py-3 bg-[#ff6b35] text-white font-semibold rounded-lg hover:bg-[#ff6b35]/90 hover:scale-105 transition-all duration-300"
            >
              Clear All Filters
            </button>
          </motion.div>
        ) : (
          <div className="space-y-8 sm:space-y-12 lg:space-y-16">
            {filteredPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-[#3a3b3c] bg-[#1c1e21] py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#b0b3b8] text-lg mb-4">
            © 2025 Kinshuk Jain. Engineering the future, one post at a time.
          </p>
          <a
            href="https://blog.cloudkinshuk.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#ff6b35] hover:text-[#ff6b35]/80 text-lg transition-colors duration-300 font-medium"
          >
            <FaExternalLinkAlt />
            Visit Original Blog
          </a>
        </div>
      </footer>

      <ScrollToTop />
    </div>
  )
}

// Query Client with optimized settings
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10 * 60 * 1000, // 10 minutes
      gcTime: 30 * 60 * 1000, // 30 minutes
      retry: 3,
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
      refetchOnWindowFocus: false,
    },
  },
})

const Blog: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BlogPageContent />
    </QueryClientProvider>
  )
}

export default Blog
