import { useState, useEffect, useMemo } from 'react';
import { Calendar, Clock, ExternalLink, Tag, Search, Filter, X, ChevronDown, ChevronUp } from 'lucide-react';

interface Blog {
  id: string;
  title: string;
  brief: string;
  dateAdded: string;
  url: string;
  readTime: string;
  tags: string[];
  // Store original date for sorting
  originalDate: Date;
}

const Blogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Search and filter states
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState<'newest' | 'oldest' | 'readTime'>('newest');
  const [filtersOpen, setFiltersOpen] = useState(false);
  
  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    blogs.forEach(blog => {
      blog.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, [blogs]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const HASHNODE_TOKEN = import.meta.env.VITE_HASHNODE_APIKEY;
        const blogDomain = "blog.cloudkinshuk.in";

        const response = await fetch("https://gql.hashnode.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...(HASHNODE_TOKEN ? { "Authorization": HASHNODE_TOKEN } : {}),
          },
          body: JSON.stringify({
            query: `
              query Publication($host: String!) {
                publication(host: $host) {
                  posts(first: 100) {
                    edges {
                      node {
                        id
                        title
                        brief
                        publishedAt
                        slug
                        readTimeInMinutes
                        tags {
                          name
                        }
                      }
                    }
                  }
                }
              }
            `,
            variables: { host: blogDomain },
          }),
        });

        const data = await response.json();

        if (data?.data?.publication?.posts?.edges) {
          interface BlogEdge {
            node: {
              id: string;
              title: string;
              brief: string;
              publishedAt: string;
              slug: string;
              readTimeInMinutes: number;
              tags: { name: string }[];
            };
          }

          interface BlogResponse {
            data: {
              publication: {
                posts: {
                  edges: BlogEdge[];
                };
              };
            };
          }

          const formattedBlogs = (data as BlogResponse).data.publication.posts.edges.map((edge) => {
            const originalDate = new Date(edge.node.publishedAt);
            return {
              id: edge.node.id,
              title: edge.node.title,
              brief: edge.node.brief,
              dateAdded: originalDate.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              }),
              originalDate: originalDate,
              url: `https://${blogDomain}/${edge.node.slug}`,
              readTime: `${edge.node.readTimeInMinutes} min read`,
              tags: edge.node.tags?.map((tag) => tag.name) || [],
            };
          });
          setBlogs(formattedBlogs);
          setFilteredBlogs(formattedBlogs);
        } else {
          setError("No blogs found or error in API response");
          console.error("Hashnode response error:", data);
        }
      } catch (err) {
        setError("Failed to fetch blogs");
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Apply filters when any filtering criteria changes
  useEffect(() => {
    let result = [...blogs];
    
    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(blog => 
        blog.title.toLowerCase().includes(query) || 
        blog.brief.toLowerCase().includes(query) ||
        blog.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    // Apply tag filters
    if (selectedTags.length > 0) {
      result = result.filter(blog => 
        selectedTags.every(tag => blog.tags.includes(tag))
      );
    }
    
    // Apply sorting
    if (sortOption === 'newest') {
      result.sort((a, b) => b.originalDate.getTime() - a.originalDate.getTime());
    } else if (sortOption === 'oldest') {
      result.sort((a, b) => a.originalDate.getTime() - b.originalDate.getTime());
    } else if (sortOption === 'readTime') {
      result.sort((a, b) => parseInt(a.readTime) - parseInt(b.readTime));
    }
    
    setFilteredBlogs(result);
  }, [blogs, searchQuery, selectedTags, sortOption]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag) 
        : [...prev, tag]
    );
  };
  
  const clearFilters = () => {
    setSearchQuery('');
    setSelectedTags([]);
    setSortOption('newest');
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="relative mb-16">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-violet-500 rounded-lg opacity-75 blur"></div>
          <div className="relative bg-[#1a1a1a] rounded-lg p-8 border border-[#333] shadow-lg">
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-violet-500 mb-4">
              My Blog
            </h1>
            <p className="text-gray-300 text-lg max-w-3xl">
              My thoughts, opinion, take, and some guides on cloud, building scalable infrastructure,
              deploying apps, web development, and many other technical and non-technical fields
            </p>
          </div>
        </div>

        {/* Search and filter section */}
        <div className="mb-8 bg-[#1a1a1a] rounded-lg border border-[#333] p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="relative w-full max-w-xl">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by title, content, or tags..."
                className="w-full py-2 pl-10 pr-4 bg-[#232323] border border-[#444] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  title="Clear search"
                  aria-label="Clear search"
                >
                  <X size={16} className="text-gray-400 hover:text-white" />
                </button>
              )}
            </div>
            
            <button 
              className="ml-4 flex items-center text-blue-400 hover:text-blue-300 bg-[#232323] border border-[#444] rounded-md px-4 py-2"
              onClick={() => setFiltersOpen(!filtersOpen)}
            >
              <Filter size={16} className="mr-2" />
              Filters
              {filtersOpen ? (
                <ChevronUp size={16} className="ml-2" />
              ) : (
                <ChevronDown size={16} className="ml-2" />
              )}
            </button>
          </div>

          {filtersOpen && (
            <div className="mt-4 pt-4 border-t border-[#333] animate-fadeIn">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-gray-300 mb-2 font-medium">Sort by</h3>
                  <div className="space-y-2">
                    <button 
                      className={`px-3 py-1.5 rounded-md w-full text-left ${sortOption === 'newest' ? 'bg-blue-600 text-white' : 'bg-[#232323] text-gray-300 hover:bg-[#2a2a2a]'}`}
                      onClick={() => setSortOption('newest')}
                    >
                      Newest first
                    </button>
                    <button 
                      className={`px-3 py-1.5 rounded-md w-full text-left ${sortOption === 'oldest' ? 'bg-blue-600 text-white' : 'bg-[#232323] text-gray-300 hover:bg-[#2a2a2a]'}`}
                      onClick={() => setSortOption('oldest')}
                    >
                      Oldest first
                    </button>
                    <button 
                      className={`px-3 py-1.5 rounded-md w-full text-left ${sortOption === 'readTime' ? 'bg-blue-600 text-white' : 'bg-[#232323] text-gray-300 hover:bg-[#2a2a2a]'}`}
                      onClick={() => setSortOption('readTime')}
                    >
                      Reading time
                    </button>
                  </div>
                </div>
                
                <div className="md:col-span-2">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-gray-300 font-medium">Filter by tags</h3>
                    {selectedTags.length > 0 && (
                      <button 
                        onClick={clearFilters}
                        className="text-sm text-blue-400 hover:text-blue-300 flex items-center"
                      >
                        Clear all filters <X size={14} className="ml-1" />
                      </button>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {allTags.map(tag => (
                      <button
                        key={tag}
                        onClick={() => toggleTag(tag)}
                        className={`px-3 py-1 rounded-full text-sm flex items-center ${
                          selectedTags.includes(tag) 
                            ? 'bg-blue-600 text-white' 
                            : 'bg-[#232323] text-gray-300 hover:bg-[#2a2a2a]'
                        }`}
                      >
                        <Tag size={12} className="mr-1" />
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results section */}
        <div className="mb-4 flex justify-between items-center">
          <p className="text-gray-400">
            {filteredBlogs.length} {filteredBlogs.length === 1 ? 'article' : 'articles'} {searchQuery || selectedTags.length > 0 ? 'found' : 'total'}
          </p>
          
          {(searchQuery || selectedTags.length > 0) && (
            <button 
              onClick={clearFilters}
              className="text-sm text-blue-400 hover:text-blue-300 flex items-center"
            >
              Clear filters <X size={14} className="ml-1" />
            </button>
          )}
        </div>

        {loading ? (
          <div className="flex flex-col justify-center items-center py-20">
            <div className="relative w-20 h-20">
              <div className="absolute inset-0 rounded-full border-4 border-t-blue-500 border-r-blue-500 border-b-blue-500 border-l-transparent animate-spin"></div>
              <div className="absolute inset-2 rounded-full bg-[#1a1a1a]"></div>
            </div>
            <p className="mt-4 text-gray-400">Loading articles...</p>
          </div>
        ) : error ? (
          <div className="mb-10 p-6 bg-[#1a1a1a] rounded-lg border border-red-700">
            <div className="flex items-center mb-3">
              <div className="w-2 h-2 rounded-full bg-red-500 mr-2 animate-pulse"></div>
              <h3 className="text-red-400 font-medium">Error Loading Articles</h3>
            </div>
            <p className="text-gray-300">{error}</p>
            <p className="mt-3 text-gray-400 text-sm">If this persists, check your domain or API key.</p>
          </div>
        ) : filteredBlogs.length === 0 ? (
          <div className="text-center py-16">
            <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-[#232323] mb-4">
              <Search size={32} className="text-gray-400" />
            </div>
            <h3 className="text-xl font-medium text-gray-300 mb-2">No articles found</h3>
            <p className="text-gray-400">Try adjusting your search or filter criteria</p>
          </div>
        ) : (
          <div className="grid gap-6">
            {filteredBlogs.map((blog) => (
              <article 
                key={blog.id} 
                className="group bg-[#1a1a1a] rounded-lg overflow-hidden border border-[#333] transition-all duration-300 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-900/10"
              >
                <a
                  href={blog.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6"
                >
                  <div className="flex flex-col space-y-3">
                    <div className="flex justify-between items-start">
                      <h2 className="text-2xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                        {blog.title}
                      </h2>
                      <div className="flex items-center space-x-1 text-xs text-gray-400 whitespace-nowrap ml-4">
                        <Clock size={14} className="text-blue-400" />
                        <span>{blog.readTime}</span>
                      </div>
                    </div>

                    <p className="text-gray-300 line-clamp-2">
                      {blog.brief}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-1">
                      {blog.tags.map((tag, index) => (
                        <span
                          key={index}
                          className={`flex items-center text-xs px-3 py-1 rounded-full bg-[#232323] border border-[#444] ${
                            selectedTags.includes(tag) ? 'text-blue-300 border-blue-500' : 'text-gray-300'
                          }`}
                        >
                          <Tag size={10} className="mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex justify-between items-center pt-3 mt-2 border-t border-[#333]">
                      <div className="flex items-center text-xs text-gray-400">
                        <Calendar size={14} className="mr-1 text-blue-400" />
                        <span>{blog.dateAdded}</span>
                      </div>
                      <div className="flex items-center text-xs text-blue-400 font-medium group-hover:underline">
                        <span>Read article</span>
                        <ExternalLink size={14} className="ml-1" />
                      </div>
                    </div>
                  </div>
                </a>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs;