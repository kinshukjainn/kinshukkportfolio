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
  FaHistory,
  FaKeyboard,
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
  sortBy: "publishedAt" | "views" | "reactions" | "title" | "readTime" | "relevance"
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

interface SearchSuggestion {
  type: "post" | "tag" | "author" | "recent"
  value: string
  label: string
  count?: number
  post?: BlogPost
}

// Advanced search utilities
class SearchEngine {
  private posts: BlogPost[] = []
  private searchIndex: Map<string, Set<string>> = new Map()
  private recentSearches: string[] = []

  constructor(posts: BlogPost[]) {
    this.posts = posts
    this.buildSearchIndex()
    this.loadRecentSearches()
  }

  private buildSearchIndex() {
    this.searchIndex.clear()

    this.posts.forEach((post) => {
      const searchableText = [post.title, post.brief, post.author.name, ...post.tags.map((tag) => tag.name)]
        .join(" ")
        .toLowerCase()

      // Create n-grams for better fuzzy search
      const words = searchableText.split(/\s+/)
      words.forEach((word) => {
        if (word.length > 2) {
          for (let i = 0; i <= word.length - 2; i++) {
            const ngram = word.substring(i, i + 3)
            if (!this.searchIndex.has(ngram)) {
              this.searchIndex.set(ngram, new Set())
            }
            this.searchIndex.get(ngram)!.add(post.id)
          }
        }
      })
    })
  }

  private loadRecentSearches() {
    try {
      const stored = localStorage.getItem("blog-recent-searches")
      if (stored) {
        this.recentSearches = JSON.parse(stored)
      }
    } catch (error) {
      console.warn("Failed to load recent searches:", error)
    }
  }

  private saveRecentSearches() {
    try {
      localStorage.setItem("blog-recent-searches", JSON.stringify(this.recentSearches))
    } catch (error) {
      console.warn("Failed to save recent searches:", error)
    }
  }

  addRecentSearch(query: string) {
    if (query.trim().length < 2) return

    const trimmedQuery = query.trim().toLowerCase()
    this.recentSearches = [trimmedQuery, ...this.recentSearches.filter((s) => s !== trimmedQuery)].slice(0, 10)

    this.saveRecentSearches()
  }

  getRecentSearches(): string[] {
    return this.recentSearches
  }

  // Advanced fuzzy search with scoring
  search(query: string, limit = 50): BlogPost[] {
    if (!query.trim()) return this.posts

    const queryLower = query.toLowerCase()
    const queryWords = queryLower.split(/\s+/).filter((w) => w.length > 0)

    const scores = new Map<string, number>()

    // Initialize scores
    this.posts.forEach((post) => scores.set(post.id, 0))

    // Score based on n-gram matches
    queryWords.forEach((word) => {
      if (word.length >= 2) {
        for (let i = 0; i <= word.length - 2; i++) {
          const ngram = word.substring(i, i + 3)
          const matchingPosts = this.searchIndex.get(ngram)
          if (matchingPosts) {
            matchingPosts.forEach((postId) => {
              scores.set(postId, (scores.get(postId) || 0) + 1)
            })
          }
        }
      }
    })

    // Boost scores for exact matches and title matches
    this.posts.forEach((post) => {
      const titleLower = post.title.toLowerCase()
      const briefLower = post.brief.toLowerCase()
      const authorLower = post.author.name.toLowerCase()
      const tagsLower = post.tags.map((t) => t.name.toLowerCase()).join(" ")

      let currentScore = scores.get(post.id) || 0

      // Exact phrase match in title (highest priority)
      if (titleLower.includes(queryLower)) {
        currentScore += 100
      }

      // Exact phrase match in brief
      if (briefLower.includes(queryLower)) {
        currentScore += 50
      }

      // Author match
      if (authorLower.includes(queryLower)) {
        currentScore += 30
      }

      // Tag match
      if (tagsLower.includes(queryLower)) {
        currentScore += 20
      }

      // Word-level matches with position bonus
      queryWords.forEach((word) => {
        const titleIndex = titleLower.indexOf(word)
        const briefIndex = briefLower.indexOf(word)

        if (titleIndex !== -1) {
          currentScore += 10 + (titleIndex === 0 ? 5 : 0) // Bonus for starting with query
        }
        if (briefIndex !== -1) {
          currentScore += 5
        }
      })

      scores.set(post.id, currentScore)
    })

    // Filter and sort by score
    return this.posts
      .filter((post) => (scores.get(post.id) || 0) > 0)
      .sort((a, b) => (scores.get(b.id) || 0) - (scores.get(a.id) || 0))
      .slice(0, limit)
  }

  getSuggestions(query: string): SearchSuggestion[] {
    if (!query.trim()) {
      return this.recentSearches.map((search) => ({
        type: "recent",
        value: search,
        label: search,
      }))
    }

    const suggestions: SearchSuggestion[] = []
    const queryLower = query.toLowerCase()
    const seen = new Set<string>()

    // Post title suggestions
    this.posts.forEach((post) => {
      if (post.title.toLowerCase().includes(queryLower) && !seen.has(post.title)) {
        suggestions.push({
          type: "post",
          value: post.title,
          label: post.title,
          post,
        })
        seen.add(post.title)
      }
    })

    // Tag suggestions
    const tagCounts = new Map<string, number>()
    this.posts.forEach((post) => {
      post.tags.forEach((tag) => {
        if (tag.name.toLowerCase().includes(queryLower)) {
          tagCounts.set(tag.name, (tagCounts.get(tag.name) || 0) + 1)
        }
      })
    })

    Array.from(tagCounts.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .forEach(([tag, count]) => {
        suggestions.push({
          type: "tag",
          value: tag,
          label: tag,
          count,
        })
      })

    // Author suggestions
    const authors = new Set<string>()
    this.posts.forEach((post) => {
      if (post.author.name.toLowerCase().includes(queryLower) && !authors.has(post.author.name)) {
        suggestions.push({
          type: "author",
          value: post.author.name,
          label: post.author.name,
        })
        authors.add(post.author.name)
      }
    })

    return suggestions.slice(0, 8)
  }
}

// Optimized API with better error handling and caching
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

    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(`HTTP error! status: ${response.status} - ${errorText}`)
    }

    const data = await response.json()

    if (data.errors) {
      throw new Error(data.errors[0]?.message || "GraphQL error")
    }

    if (!data.data?.publication?.posts?.edges) {
      throw new Error("No blog posts found")
    }

    type Edge = { node: BlogPost }
    const posts = (data.data.publication.posts.edges as Edge[]).map((edge) => ({
      ...edge.node,
      url: `https://blog.cloudkinshuk.in/${edge.node.slug}`,
    }))

    return posts
  } catch (error) {
    console.error("Detailed error in fetchBlogPosts:", error)
    throw error
  }
}

// Enhanced Blog Card with Bugzilla-style design
interface BlogCardProps {
  post: BlogPost
  index: number
  searchQuery?: string
}

const BlogCard: React.FC<BlogCardProps> = React.memo(({ post, index, searchQuery }) => {
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

  // Highlight search terms
  const highlightText = useCallback((text: string, query?: string) => {
    if (!query || !query.trim()) return text

    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi")
    const parts = text.split(regex)

    return parts.map((part, i) =>
      regex.test(part) ? (
        <mark key={i} className="bg-yellow-200 text-black px-1 rounded-md">
          {part}
        </mark>
      ) : (
        part
      ),
    )
  }, [])

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="group relative bg-neutral-800/50  rounded-lg hover:border-neutral-500 transition-all duration-300 hover:bg-neutral-800/70"
    >
      {/* Cover Image */}
      <div className="relative rounded-lg h-48 sm:h-56 lg:h-64 overflow-hidden bg-neutral-900 border-b border-neutral-700">
        {post.coverImage && !imageError ? (
          <>
            <img
              src={post.coverImage.url || "/placeholder.svg"}
              alt={post.title}
              className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
              loading="lazy"
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
            />
            {!imageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <FaSpinner className="animate-spin text-yellow-500 text-2xl" />
              </div>
            )}
          </>
        ) : (
          <div className="w-full h-full flex items-center rounded-md justify-center bg-neutral-900">
            <FaBookmark className="text-yellow-500 text-4xl opacity-50" />
          </div>
        )}

        {/* Quick Actions */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button
            title="Bookmark"
            className="p-2 bg-neutral-900/80 border border-neutral-600 rounded-md text-white hover:bg-yellow-500 hover:text-black transition-colors duration-200"
          >
            <FaBookmark className="w-3 h-3" />
          </button>
          <button
            title="Share"
            className="p-2 bg-neutral-900/80 border border-neutral-600 text-white hover:bg-yellow-500 hover:text-black rounded-md transition-colors duration-200"
          >
            <FaShare className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8">
        {/* Author & Date */}
        <div className="flex items-center gap-3 mb-4 pb-3  border-b border-neutral-700">
          <div className="flex items-center gap-2">
            {post.author.profilePicture ? (
              <img
                src={post.author.profilePicture || "/placeholder.svg"}
                alt={post.author.name}
                className="w-8 h-8 border border-neutral-600 object-cover"
              />
            ) : (
              <div className="w-8 h-8 bg-neutral-700 border border-neutral-600 flex items-center justify-center">
                <FaUser className="w-4 h-4 text-neutral-300" />
              </div>
            )}
            <span className="text-sm font-medium text-neutral-100">{highlightText(post.author.name, searchQuery)}</span>
          </div>
          <span className="text-neutral-500 text-sm">|</span>
          <span className="text-sm text-neutral-400 flex items-center gap-1">
            <FaCalendarAlt className="w-3 h-3 text-yellow-500" />
            {formatDate(post.publishedAt)}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-neutral-100 leading-tight mb-4 group-hover:text-yellow-500 transition-colors duration-300">
          {highlightText(post.title, searchQuery)}
        </h2>

        {/* Brief */}
        <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6 line-clamp-3">
          {highlightText(post.brief, searchQuery)}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag.id}
              className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium rounded-md bg-neutral-700 text-neutral-200 border border-neutral-600 hover:bg-neutral-600 transition-colors duration-200"
            >
              <FaTag className="w-2 h-2" />
              {highlightText(tag.name, searchQuery)}
            </span>
          ))}
          {post.tags.length > 3 && (
            <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-neutral-800 text-neutral-400 border border-neutral-600">
              +{post.tags.length - 3} more
            </span>
          )}
        </div>

        {/* Meta Info & CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-neutral-700">
          <div className="flex items-center gap-4 text-xs sm:text-sm text-neutral-400">
            {post.readTimeInMinutes && (
              <span className="flex items-center gap-1">
                <FaClock className="w-3 h-3 text-yellow-500" />
                {post.readTimeInMinutes}m
              </span>
            )}
            {post.views && (
              <span className="flex items-center gap-1">
                <FaEye className="w-3 h-3 text-yellow-500" />
                {formatNumber(post.views)}
              </span>
            )}
            {post.reactionCount && post.reactionCount > 0 && (
              <span className="flex items-center gap-1">
                <FaHeart className="w-3 h-3 text-yellow-500" />
                {formatNumber(post.reactionCount)}
              </span>
            )}
          </div>
          <a
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500 text-black font-semibold border rounded-md border-yellow-400 hover:bg-yellow-400 hover:scale-105 active:scale-95 transition-all duration-200 text-sm"
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

// Advanced Search Component with suggestions
interface SearchBarProps {
  searchInput: string
  setSearchInput: (value: string) => void
  resultsCount: number
  totalCount: number
  searchEngine: SearchEngine | null
  onSuggestionSelect: (suggestion: SearchSuggestion) => void
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchInput,
  setSearchInput,
  resultsCount,
  totalCount,
  searchEngine,
  onSuggestionSelect,
}) => {
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([])
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const suggestionsRef = useRef<HTMLDivElement>(null)

  // Update suggestions when input changes
  useEffect(() => {
    if (searchEngine) {
      const newSuggestions = searchEngine.getSuggestions(searchInput)
      setSuggestions(newSuggestions)
      setSelectedIndex(-1)
    }
  }, [searchInput, searchEngine])

  const handleSearch = useCallback(() => {
    if (searchInput.trim() && searchEngine) {
      searchEngine.addRecentSearch(searchInput)
      setShowSuggestions(false)
    }
  }, [searchInput, searchEngine])

  const handleSuggestionClick = useCallback(
    (suggestion: SearchSuggestion) => {
      setSearchInput(suggestion.value)
      onSuggestionSelect(suggestion)
      setShowSuggestions(false)
      if (searchEngine) {
        searchEngine.addRecentSearch(suggestion.value)
      }
    },
    [setSearchInput, onSuggestionSelect, searchEngine]
  )

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        inputRef.current?.focus()
        setShowSuggestions(true)
      }

      if (showSuggestions && suggestions.length > 0) {
        switch (e.key) {
          case "ArrowDown":
            e.preventDefault()
            setSelectedIndex((prev) => Math.min(prev + 1, suggestions.length - 1))
            break
          case "ArrowUp":
            e.preventDefault()
            setSelectedIndex((prev) => Math.max(prev - 1, -1))
            break
          case "Enter":
            e.preventDefault()
            if (selectedIndex >= 0 && suggestions[selectedIndex]) {
              handleSuggestionClick(suggestions[selectedIndex])
            } else if (searchInput.trim()) {
              handleSearch()
            }
            break
          case "Escape":
            setShowSuggestions(false)
            setSelectedIndex(-1)
            break
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [showSuggestions, suggestions, selectedIndex, searchInput, handleSearch, handleSuggestionClick])

  const getSuggestionIcon = (type: SearchSuggestion["type"]) => {
    switch (type) {
      case "post":
        return <FaSearch className="w-3 h-3" />
      case "tag":
        return <FaTag className="w-3 h-3" />
      case "author":
        return <FaUser className="w-3 h-3" />
      case "recent":
        return <FaHistory className="w-3 h-3" />
      default:
        return <FaSearch className="w-3 h-3" />
    }
  }

  return (
    <div className="relative">
      <div className="relative">
        <FaSearch className="absolute  left-4 top-1/2 transform -translate-y-1/2 text-yellow-500 text-lg" />
        <input
          ref={inputRef}
          type="text"
          placeholder="Search articles, insights, and thoughts... (⌘K)"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          className="w-full pl-12 pr-12 py-4 bg-neutral-800 border-2 rounded-md border-neutral-700 text-neutral-100 placeholder-neutral-400 text-md focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300"
        />
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
          {searchInput && (
            <button
              title="Clear search"
              onClick={() => {
                setSearchInput("")
                setShowSuggestions(false)
              }}
              className="text-neutral-400 hover:text-yellow-500 transition-colors duration-200"
            >
              <FaTimes />
            </button>
          )}
          <div className="hidden sm:flex items-center gap-1 text-xs text-neutral-400 rounded-md bg-neutral-900 px-2 py-1 border border-neutral-600">
            <FaKeyboard className="w-3 h-3" />
            ⌘K
          </div>
        </div>
      </div>

      {/* Search Suggestions */}
      <AnimatePresence>
        {showSuggestions && suggestions.length > 0 && (
          <motion.div
            ref={suggestionsRef}
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 right-0 mt-2 bg-neutral-800 border rounded-md border-neutral-700 shadow-2xl z-50 max-h-80 overflow-y-auto"
          >
            {suggestions.map((suggestion, index) => (
              <button
                key={`${suggestion.type}-${suggestion.value}`}
                onClick={() => handleSuggestionClick(suggestion)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-neutral-700 transition-colors duration-150 ${
                  index === selectedIndex ? "bg-neutral-700" : ""
                } border-b border-neutral-700 last:border-b-0`}
              >
                <div
                  className={`p-2 border ${
                    suggestion.type === "post"
                      ? "bg-yellow-500/20 text-yellow-500 border-yellow-500/30"
                      : suggestion.type === "tag"
                        ? "bg-blue-500/20 text-blue-400 border-blue-500/30"
                        : suggestion.type === "author"
                          ? "bg-green-500/20 text-green-400 border-green-500/30"
                          : "bg-neutral-600/20 text-neutral-400 border-neutral-600/30"
                  }`}
                >
                  {getSuggestionIcon(suggestion.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-neutral-100 font-medium truncate">{suggestion.label}</div>
                  <div className="text-xs text-neutral-400 capitalize">
                    {suggestion.type === "recent" ? "Recent search" : suggestion.type}
                    {suggestion.count && ` • ${suggestion.count} posts`}
                  </div>
                </div>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Results indicator */}
      <div className="absolute -bottom-6 left-0 text-sm text-neutral-400">
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
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="bg-neutral-800/50 border border-neutral-700 rounded-md p-6 sm:p-8 mt-6 overflow-hidden"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Sort Options */}
          <div className="space-y-3">
            <label className="block text-sm font-semibold text-neutral-100">Sort By</label>
            <select
              title="Sort by"
              value={filters.sortBy}
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  sortBy: e.target.value as FilterOptions["sortBy"],
                }))
              }
              className="w-full p-3 text-sm bg-neutral-900 border-2 border-neutral-700 text-neutral-100 rounded-md focus:border-yellow-500 focus:outline-none transition-colors duration-300"
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
          <div className="space-y-3">
            <label className="block text-sm font-semibold text-neutral-100">Author</label>
            <select
              title="Author filter"
              value={filters.author}
              onChange={(e) => setFilters((prev) => ({ ...prev, author: e.target.value }))}
              className="w-full p-3 text-sm bg-neutral-900 border-2 border-neutral-700 text-neutral-100 rounded-md focus:border-yellow-500 focus:outline-none transition-colors duration-300"
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
            <label className="block text-sm font-semibold text-neutral-100">Date Range</label>
            <div className="space-y-2">
              <input
                title="Start date"
                type="date"
                value={filters.dateRange.start}
                onChange={(e) =>
                  setFilters((prev) => ({ ...prev, dateRange: { ...prev.dateRange, start: e.target.value } }))
                }
                className="w-full p-3 text-sm bg-neutral-900 border-2 border-neutral-700 text-neutral-100 rounded-md focus:border-yellow-500 focus:outline-none transition-colors duration-300"
              />
              <input
                title="End date"
                type="date"
                value={filters.dateRange.end}
                onChange={(e) =>
                  setFilters((prev) => ({ ...prev, dateRange: { ...prev.dateRange, end: e.target.value } }))
                }
                className="w-full p-3 text-sm bg-neutral-900 border-2 border-neutral-700 rounded-md text-neutral-100 focus:border-yellow-500 focus:outline-none transition-colors duration-300"
              />
            </div>
          </div>

          {/* Read Time Range */}
          <div className="space-y-3">
            <label className="block text-sm font-semibold  text-neutral-100">
              Read Time: {filters.minReadTime}-{filters.maxReadTime}m
            </label>
            <div className="space-y-3">
              <input
                title="Min read time"
                type="range"
                min="0"
                max="60"
                value={filters.minReadTime}
                onChange={(e) => setFilters((prev) => ({ ...prev, minReadTime: Number(e.target.value) }))}
                className="w-full accent-yellow-500"
              />
              <input
                title="Max read time"
                type="range"
                min="0"
                max="60"
                value={filters.maxReadTime}
                onChange={(e) => setFilters((prev) => ({ ...prev, maxReadTime: Number(e.target.value) }))}
                className="w-full accent-yellow-500"
              />
            </div>
          </div>
        </div>

        {/* Tags Section */}
        <div className="mt-8 space-y-4">
          <label className="block text-sm font-semibold text-neutral-100">Tags ({filters.tags.length} selected)</label>
          <div className="max-h-40 overflow-y-auto">
            <div className="flex flex-wrap gap-2">
              {availableTags.slice(0, 20).map((tag) => (
                <button
                  key={tag}
                  onClick={() => handleTagToggle(tag)}
                  className={`inline-flex items-center gap-1 px-3 py-2 text-xs rounded-md font-medium transition-all duration-200 ${
                    filters.tags.includes(tag)
                      ? "bg-yellow-500 text-black rounded-md border border-yellow-400"
                      : "bg-neutral-900 text-neutral-300 hover:bg-neutral-700 border rounded-md border-neutral-700"
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
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mt-8 pt-6 border-t border-neutral-700">
          <button
            onClick={clearFilters}
            className="flex items-center justify-center gap-2 px-6 py-3 text-sm text-neutral-300 hover:text-neutral-100 border border-neutral-700  rounded-md hover:border-yellow-500 transition-all duration-300"
          >
            <FaTimes />
            Clear Filters
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="px-6 py-3 text-sm bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition-all rounded-md duration-300"
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
          className="fixed bottom-8 right-8 z-50 p-3 bg-black text-white rounded-xl hover:bg-yellow-400 hover:scale-110 transition-all duration-300"
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
  const [searchEngine, setSearchEngine] = useState<SearchEngine | null>(null)

  // Ultra-fast debounced search (50ms)
  useEffect(() => {
    const timer = setTimeout(() => {
      setFilters((prev) => ({ ...prev, searchTerm: searchInput }))
    }, 50)
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
    staleTime: 10 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
    refetchOnWindowFocus: false,
    retry: 3,
  })

  // Initialize search engine when posts are loaded
  useEffect(() => {
    if (posts) {
      setSearchEngine(new SearchEngine(posts))
    }
  }, [posts])

  // Ultra-optimized filtering with search engine
  const filteredPosts = useMemo(() => {
    if (!posts || !searchEngine) return []

    let result = posts

    // Use advanced search if there's a search term
    if (filters.searchTerm.trim()) {
      if (filters.sortBy === "relevance") {
        result = searchEngine.search(filters.searchTerm)
      } else {
        result = searchEngine.search(filters.searchTerm, posts.length)
      }
    }

    // Apply other filters
    result = result.filter((post) => {
      const matchesTags =
        filters.tags.length === 0 ||
        filters.tags.some((tag) => post.tags.some((postTag) => postTag.name.toLowerCase().includes(tag.toLowerCase())))

      const matchesAuthor = !filters.author || post.author.name.toLowerCase().includes(filters.author.toLowerCase())

      const matchesDateRange =
        (!filters.dateRange.start || new Date(post.publishedAt) >= new Date(filters.dateRange.start)) &&
        (!filters.dateRange.end || new Date(post.publishedAt) <= new Date(filters.dateRange.end))

      const matchesReadTime =
        !post.readTimeInMinutes ||
        (post.readTimeInMinutes >= filters.minReadTime && post.readTimeInMinutes <= filters.maxReadTime)

      return matchesTags && matchesAuthor && matchesDateRange && matchesReadTime
    })

    // Sort if not using relevance-based search
    if (!filters.searchTerm.trim() || filters.sortBy !== "relevance") {
      result = result.sort((a, b) => {
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
    }

    return result
  }, [posts, filters, searchEngine])

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

  const handleSuggestionSelect = useCallback((suggestion: SearchSuggestion) => {
    if (suggestion.type === "tag") {
      setFilters((prev) => ({
        ...prev,
        tags: prev.tags.includes(suggestion.value) ? prev.tags : [...prev.tags, suggestion.value],
      }))
    } else if (suggestion.type === "author") {
      setFilters((prev) => ({ ...prev, author: suggestion.value }))
    }
  }, [])

  if (error) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <FaExclamationTriangle className="text-yellow-500 text-6xl mx-auto mb-6" />
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-100 mb-4">Failed to Load Blog Posts</h2>
          <p className="text-neutral-300 text-lg mb-6">
            {error instanceof Error ? error.message : "Unknown error occurred"}
          </p>
          <button
            onClick={() => refetch()}
            className="px-6 py-3 bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition-all duration-300"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#101010] text-neutral-100 pt-20">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-[#101010] via-neutral-900 to-neutral-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl font-mono sm:text-6xl lg:text-7xl heading-kinshuk font-bold text-neutral-100 mb-6 leading-tight"
            >
              Minimal{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r animate-pulse from-green-500 via-blue-400 to-red-500">Minds</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl lg:text-2xl text-neutral-300 leading-relaxed max-w-3xl mx-auto"
            >
              Exploring cloud computing, DevOps, and the craft of building with React — through the lens of curiosity, learning, and real-world trials. Occasionally, I pause to share reflections from my engineering journey — technical and otherwise.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Search & Filters */}
      <div className="sticky top-0 z-40 bg-[#101010]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row gap-4 lg:items-center">
            {/* Search */}
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

            {/* Filter Controls */}
            <div className="flex gap-3 lg:flex-shrink-0">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`flex items-center gap-2 px-4 py-3 rounded-md font-medium transition-all duration-300 ${
                  showFilters
                    ? "bg-yellow-500 text-black border border-yellow-400"
                    : "bg-neutral-800 text-neutral-100 border border-neutral-700 hover:border-yellow-500"
                }`}
              >
                <FaFilter className={showFilters ? "text-black" : "text-yellow-500"} />
                Filters
                {showFilters ? (
                  <FaChevronUp className={showFilters ? "text-black" : "text-yellow-500"} />
                ) : (
                  <FaChevronDown className={showFilters ? "text-black" : "text-yellow-500"} />
                )}
              </button>
              <button
                onClick={() =>
                  setFilters((prev) => ({ ...prev, sortOrder: prev.sortOrder === "asc" ? "desc" : "asc" }))
                }
                className="flex items-center gap-2 px-4 py-3 rounded-md bg-neutral-800 border border-neutral-700 text-neutral-100 hover:border-yellow-500 transition-all duration-300 font-medium"
              >
                <FaSort className="text-yellow-500" />
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
            <FaSpinner className="animate-spin text-yellow-500 text-5xl mb-6" />
            <h3 className="text-xl text-neutral-100 mb-2">Loading articles...</h3>
            <p className="text-neutral-400">Fetching the latest insights</p>
          </div>
        ) : filteredPosts.length === 0 ? (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-20">
            <FaSearch className="text-yellow-500 text-6xl mx-auto mb-6" />
            <h3 className="text-2xl sm:text-3xl font-bold text-neutral-100 mb-4">No articles found</h3>
            <p className="text-lg text-neutral-400 mb-8 max-w-md mx-auto">
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
              className="px-6 py-3 bg-yellow-500 text-black font-semibold hover:bg-yellow-400 hover:scale-105 transition-all duration-300"
            >
              Clear All Filters
            </button>
          </motion.div>
        ) : (
          <div className="space-y-8 sm:space-y-12 lg:space-y-16">
            {filteredPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} searchQuery={filters.searchTerm} />
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-700 bg-neutral-900 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-neutral-400 text-lg mb-4">
            © 2025 Kinshuk Jain. Engineering the future, one post at a time.
          </p>
          <a
            href="https://blog.cloudkinshuk.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-yellow-500 hover:text-yellow-400 text-lg transition-colors duration-300 font-medium"
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
      staleTime: 10 * 60 * 1000,
      gcTime: 30 * 60 * 1000,
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
