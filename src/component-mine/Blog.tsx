"use client"

import type React from "react"
import { useState, useMemo, useCallback, useEffect } from "react"
import { useQuery, QueryClient, QueryClientProvider } from "@tanstack/react-query"
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

// Compact Blog Card
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
    <article className=" pb-4 select-none hover:bg-[#212121] bg-[#181818] p-4  transition-colors duration-200 p-3 rounded-2xl">
      <div className="flex flex-col sm:flex-row gap-3">
        {/* Cover Image - Mobile: full width, Desktop: fixed width */}
        {post.coverImage && (
          <div className="w-full sm:w-24 h-16 sm:h-16 flex-shrink-0">
            <img
              src={post.coverImage.url || "/placeholder.svg"}
              alt={post.title}
              className="w-full h-full object-cover rounded-2xl"
              loading="lazy"
            />
          </div>
        )}

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Title */}
          <h3 className="text-base sm:text-lg font-semibold text-white mb-1 line-clamp-2 hover:text-blue-400 transition-colors">
            {post.title}
          </h3>

          {/* Brief */}
          <p className="text-sm text-gray-400 mb-2 line-clamp-2">{post.brief}</p>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 mb-2">
            <span className="flex items-center gap-1">
              <FaCalendarAlt />
              {formatDate(post.publishedAt)}
            </span>
            {post.readTimeInMinutes && (
              <span className="flex items-center gap-1">
                <FaClock />
                {post.readTimeInMinutes}m
              </span>
            )}
            {post.views && (
              <span className="flex items-center gap-1">
                <FaEye />
                {post.views.toLocaleString()}
              </span>
            )}
            {post.reactionCount && post.reactionCount > 0 && (
              <span className="flex items-center gap-1">
                <FaHeart />
                {post.reactionCount}
              </span>
            )}
          </div>

          {/* Tags and Action */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            {/* Tags */}
            <div className="flex flex-wrap gap-1">
              {post.tags.slice(0, 3).map((tag) => (
                <span key={tag.id} className="text-xs bg-[#181818] text-gray-300 px-2 py-0.5 rounded-2xl">
                  {tag.name}
                </span>
              ))}
              {post.tags.length > 3 && <span className="text-xs text-gray-500">+{post.tags.length - 3}</span>}
            </div>

            {/* Read Button */}
            <a
              href={`https://blog.cloudkinshuk.in/${post.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-lg bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-3xl transition-colors self-start sm:self-auto"
            >
              Read
              <FaExternalLinkAlt />
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}

// Advanced Filters
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
    <div className="bg-[#121212] select-none p-4 rounded-2xl-b border-t border-gray-700">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Sort */}
        <div>
          <label className="block text-xs font-medium text-gray-300 mb-1">Sort By</label>
          <select
            value={filters.sortBy}
            onChange={(e) => setFilters((prev) => ({ ...prev, sortBy: e.target.value as "publishedAt" | "views" | "reactions" | "title" }))}
            className="w-full p-2 text-sm bg-black border border-gray-600 rounded-2xl text-white focus:border-blue-500 focus:outline-none"
            aria-label="Sort posts by"
          >
            <option value="publishedAt">Date</option>
            <option value="title">Title</option>
            <option value="views">Views</option>
            <option value="reactions">Reactions</option>
          </select>
        </div>

        {/* Date Range */}
        <div>
          <label className="block text-xs font-medium text-gray-300 mb-1">Date Range</label>
          <div className="space-y-1">
            <input
              type="date"
              value={filters.dateRange.start}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, dateRange: { ...prev.dateRange, start: e.target.value } }))
              }
              className="w-full p-1 text-xs bg-black border border-gray-600 rounded-2xl text-white focus:border-blue-500 focus:outline-none"
              placeholder="Start date"
              title="Start date"
              aria-label="Start date"
            />
            <input
              type="date"
              value={filters.dateRange.end}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, dateRange: { ...prev.dateRange, end: e.target.value } }))
              }
              className="w-full p-1 text-xs bg-black border border-gray-600 rounded-2xl text-white focus:border-blue-500 focus:outline-none"
              placeholder="End date"
              title="End date"
              aria-label="End date"
            />
          </div>
        </div>

        {/* Read Time */}
        <div>
          <label className="block text-xs font-medium text-gray-300 mb-1">
            Read Time: {filters.minReadTime}-{filters.maxReadTime}m
          </label>
          <div className="space-y-1">
            <input
              type="range"
              min="0"
              max="60"
              value={filters.minReadTime}
              onChange={(e) => setFilters((prev) => ({ ...prev, minReadTime: Number(e.target.value) }))}
              className="w-full"
              title="Minimum read time in minutes"
              placeholder="Select minimum read time"
              aria-label="Minimum read time in minutes"
            />
            <input
              type="range"
              min="0"
              max="60"
              value={filters.maxReadTime}
              onChange={(e) => setFilters((prev) => ({ ...prev, maxReadTime: Number(e.target.value) }))}
              className="w-full"
              title="Maximum read time in minutes"
              placeholder="Select maximum read time"
              aria-label="Maximum read time in minutes"
            />
          </div>
        </div>

        {/* Tags */}
        <div>
          <label className="block text-xs font-medium text-gray-300 mb-1">Tags ({filters.tags.length})</label>
          <div className="max-h-20 overflow-y-auto">
            <div className="flex flex-wrap gap-1">
              {availableTags.slice(0, 10).map((tag) => (
                <button
                  key={tag}
                  onClick={() => handleTagToggle(tag)}
                  className={`text-xs px-2 py-0.5 rounded-2xl transition-colors ${
                    filters.tags.includes(tag)
                      ? "bg-gray-900 text-white"
                      : "bg-black text-gray-300 hover:bg-gray-600"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-700">
        <button
          onClick={clearFilters}
          className="flex items-center gap-1 text-xs text-gray-400 hover:text-white transition-colors"
        >
          <FaTimes />
          Clear
        </button>
        <button
          onClick={() => setIsOpen(false)}
          className="text-xs text-blue-400 hover:text-blue-300 transition-colors"
        >
          Close Filters
        </button>
      </div>
    </div>
  )
}

// Main Component
const BlogPageContent: React.FC = () => {
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
    }, 150)
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
      <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
        <div className="text-center">
          <FaExclamationTriangle className="text-red-500 text-4xl mx-auto mb-4" />
          <h2 className="text-xl font-bold text-white mb-2">Failed to Load</h2>
          <p className="text-gray-400 text-sm">{error instanceof Error ? error.message : "Unknown error"}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#121212] text-white pt-6">
      {/* Header */}
      <header className="bg-[#121212]">
        <div className="max-w-4xl mx-auto px-3 py-4">
          <h1 className="text-3xl md:text-4xl personal-name p-4 font-bold text-white mb-2">Blogs </h1>
          <p className="text-xl text-gray-100">My thoughts on cloud, DevOps, React, and technical insights , and also some non-technical stuff included in this blog.</p>
        </div>
      </header>

      {/* Search & Filters */}
      <div className="sticky top-0 z-10 bg-[#121212] ">
        <div className="max-w-4xl mx-auto px-3 py-3">
          <div className="flex gap-2">
            {/* Search */}
            <div className="relative flex-1">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
              <input
                type="text"
                placeholder="Search thoughts, opinions, views , insights"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-[#181818] border border-gray-600 rounded-2xl text-white placeholder-gray-300 text-lg"
              />
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-1 px-3 py-2 bg-[#181818]  border border-gray-600 rounded-2xl hover:border-blue-500 transition-colors text-sm"
            >
              <FaFilter />
              {showFilters ? <FaChevronUp /> : <FaChevronDown />}
            </button>

            {/* Sort Toggle */}
            <button
              onClick={() => setFilters((prev) => ({ ...prev, sortOrder: prev.sortOrder === "asc" ? "desc" : "asc" }))}
              className="flex items-center gap-1 px-3 py-2 bg-[#181818]  border border-gray-600 rounded-2xl hover:border-blue-500 transition-colors text-sm"
            >
              <FaSort />
              {filters.sortOrder === "asc" ? "↑" : "↓"}
            </button>
          </div>

          {/* Results Count */}
          {posts && (
            <div className="mt-2 text-xs text-gray-400">
              {filteredPosts.length} of {posts.length} posts
              {filters.tags.length > 0 && ` • ${filters.tags.length} tag${filters.tags.length > 1 ? "s" : ""} selected`}
            </div>
          )}
        </div>

        <AdvancedFilters
          filters={filters}
          setFilters={setFilters}
          availableTags={allTags}
          isOpen={showFilters}
          setIsOpen={setShowFilters}
        />
      </div>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-3 py-4">
        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <FaSpinner className="animate-spin text-blue-500 text-2xl mr-3" />
            <span className="text-gray-400">Loading posts...</span>
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="text-center py-12">
            <FaSearch className="text-gray-600 text-4xl mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">No posts found</h3>
            <p className="text-gray-400 text-sm">Try adjusting your search or filters</p>
          </div>
        ) : (
          <div className="space-y-1">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-6 mt-8">
        <div className="max-w-4xl mx-auto px-3 text-center">
          <p className="text-gray-400 text-sm mb-2">© 2025 Cloud Kinshuk. All rights reserved.</p>
          <a
            href="https://blog.cloudkinshuk.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 text-sm transition-colors"
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

const BlogPage: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BlogPageContent />
    </QueryClientProvider>
  )
}

export default BlogPage
