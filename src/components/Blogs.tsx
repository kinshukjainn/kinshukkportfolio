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
  originalDate: Date;
}

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

interface HashnodeResponse {
  data?: {
    publication?: {
      posts?: {
        edges: BlogEdge[];
        pageInfo?: {
          hasNextPage: boolean;
          endCursor: string;
        };
      };
    };
  };
  errors?: Array<{ message: string }>;
}

const Blogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState<'newest' | 'oldest' | 'readTime'>('newest');
  const [filtersOpen, setFiltersOpen] = useState(false);
  
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    blogs.forEach(blog => {
      blog.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, [blogs]);

  const formatBlogData = (edges: BlogEdge[], blogDomain: string): Blog[] => {
    return edges.map((edge) => {
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
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const HASHNODE_TOKEN = import.meta.env.VITE_HASHNODE_APIKEY;
        const blogDomain = "blog.cloudkinshuk.in";
        let allBlogEdges: BlogEdge[] = [];
        let hasNextPage = true;
        let endCursor = null;
        let retryCount = 0;
        const MAX_RETRIES = 3;
        const POSTS_PER_PAGE = 20;
        const MAX_POSTS = 500;

        const fetchBlogPage = async (cursor: string | null) => {
          const response = await fetch("https://gql.hashnode.com", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              ...(HASHNODE_TOKEN ? { "Authorization": HASHNODE_TOKEN } : {}),
            },
            body: JSON.stringify({
              query: `
                query Publication($host: String!, $first: Int!, $after: String) {
                  publication(host: $host) {
                    posts(first: $first, after: $after) {
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
                      pageInfo {
                        hasNextPage
                        endCursor
                      }
                    }
                  }
                }
              `,
              variables: { 
                host: blogDomain,
                first: POSTS_PER_PAGE,
                after: cursor
              },
            }),
          });

          if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.status}`);
          }

          return await response.json() as HashnodeResponse;
        };

        while (hasNextPage && allBlogEdges.length < MAX_POSTS) {
          try {
            const data = await fetchBlogPage(endCursor);
            
            if (data?.errors) {
              console.error("GraphQL errors:", data.errors);
              throw new Error(data.errors[0]?.message || "GraphQL error occurred");
            }
            
            if (!data?.data?.publication?.posts?.edges) {
              throw new Error("No blog data found in response");
            }
            
            const edges = data.data.publication.posts.edges;
            allBlogEdges = [...allBlogEdges, ...edges];
            
            hasNextPage = !!data.data.publication.posts.pageInfo?.hasNextPage;
            endCursor = data.data.publication.posts.pageInfo?.endCursor || null;
            
            if (edges.length === 0) break;
            
            retryCount = 0;
            
            await new Promise(resolve => setTimeout(resolve, 300));
          } catch (err) {
            retryCount++;
            console.error(`Fetch attempt ${retryCount} failed:`, err);
            
            if (retryCount >= MAX_RETRIES) {
              throw new Error(`Failed after ${MAX_RETRIES} attempts: ${err instanceof Error ? err.message : 'Unknown error'}`);
            }
            
            const delay = Math.min(1000 * (2 ** retryCount), 10000);
            await new Promise(resolve => setTimeout(resolve, delay));
          }
        }

        if (allBlogEdges.length > 0) {
          const formattedBlogs = formatBlogData(allBlogEdges, blogDomain);
          setBlogs(formattedBlogs);
          setFilteredBlogs(formattedBlogs);
          console.log(`Successfully fetched ${formattedBlogs.length} blogs`);
        } else {
          setError("No blogs found in API response");
        }
      } catch (err) {
        setError(`Failed to fetch blogs: ${err instanceof Error ? err.message : 'Unknown error'}`);
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  useEffect(() => {
    let result = [...blogs];
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(blog => 
        blog.title.toLowerCase().includes(query) || 
        blog.brief.toLowerCase().includes(query) ||
        blog.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    if (selectedTags.length > 0) {
      result = result.filter(blog => 
        selectedTags.every(tag => blog.tags.includes(tag))
      );
    }
    
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
    <div className="min-h-screen font-sans bg-white text-black py-8 px-3 sm:px-4">
      <div className="max-w-5xl mx-auto">
        <div className="mb-6">
          <h1 className="text-4xl flex justify-center text-purple-900 mb-2">
            Blogs on Hashnode Platform 
          </h1>
          <p className="text-gray-900 text-sm">
            These are my working notes and reflections—on cloud infrastructure, building systems that scale, deploying and debugging web apps, and navigating both the elegant and messy sides of development. Some of it's technical, some of it's opinionated, but all of it comes from hands-on learning.
          </p>
        </div>

        <div className="mb-4  rounded-md p-3">
          <div className="flex items-center justify-between mb-2">
            <div className="relative w-full max-w-xl">
              <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                <Search size={14} className="text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="w-full py-1 pl-7 pr-2 bg-blue-200  rounded-md text-black text-sm"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-2 flex items-center"
                  title="Clear search"
                  aria-label="Clear search"
                >
                  <X size={14} className="text-gray-900 hover:text-black" />
                </button>
              )}
            </div>
            
            <button 
              className="ml-2 flex items-center text-white rounded-md text-sm bg-black border border-gray-800 px-2 py-1"
              onClick={() => setFiltersOpen(!filtersOpen)}
            >
              <Filter size={14} className="mr-1" />
              Filters
              {filtersOpen ? (
                <ChevronUp size={14} className="ml-1" />
              ) : (
                <ChevronDown size={14} className="ml-1" />
              )}
            </button>
          </div>

          {filtersOpen && (
            <div className="mt-2 pt-2 p-5 bg-gray-300  rounded-xl ">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div>
                  <h3 className="text-black mb-1 text-xs font-medium">Sort by</h3>
                  <div className="space-y-1">
                    <button 
                      className={`px-2 py-1 text-xs w-full text-left ${sortOption === 'newest' ? 'bg-gray-900 text-white' : 'text-gray-900 hover:bg-gray-900 hover:text-white'}`}
                      onClick={() => setSortOption('newest')}
                    >
                      Newest first
                    </button>
                    <button 
                      className={`px-2 py-1 text-xs w-full text-left ${sortOption === 'oldest' ? 'bg-gray-900 text-white' : 'text-gray-900 hover:bg-gray-900 hover:text-white'}`}
                      onClick={() => setSortOption('oldest')}
                    >
                      Oldest first
                    </button>
                    <button 
                      className={`px-2 py-1 text-xs w-full text-left ${sortOption === 'readTime' ? 'bg-gray-900 text-white' : 'text-gray-900 hover:bg-gray-900 hover:text-white'}`}
                      onClick={() => setSortOption('readTime')}
                    >
                      Reading time
                    </button>
                  </div>
                </div>
                
                <div className="md:col-span-2">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="text-black text-sm font-medium">Filter by tags</h3>
                    {selectedTags.length > 0 && (
                      <button 
                        onClick={clearFilters}
                        className="text-sm text-black hover:text-black flex items-center"
                      >
                        Clear all <X size={12} className="ml-1" />
                      </button>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {allTags.map(tag => (
                      <button
                        key={tag}
                        onClick={() => toggleTag(tag)}
                        className={`px-2 py-0.5 text-xs flex items-center ${
                          selectedTags.includes(tag) 
                            ? 'bg-gray-900 text-white' 
                            : 'bg-grey-800 text-black hover:bg-gray-900 hover:text-white'
                        }`}
                      >
                        <Tag size={10} className="mr-1" />
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mb-2 flex justify-between items-center text-xs">
          <p className="text-gray-400">
            {filteredBlogs.length} {filteredBlogs.length === 1 ? 'article' : 'articles'} {searchQuery || selectedTags.length > 0 ? 'found' : 'total'}
          </p>
          
          {(searchQuery || selectedTags.length > 0) && (
            <button 
              onClick={clearFilters}
              className="text-xs text-gray-900 hover:text-black flex items-center"
            >
              Clear filters <X size={12} className="ml-1" />
            </button>
          )}
        </div>

        {loading ? (
          <div className="flex flex-col justify-center items-center py-10">
            <div className="w-10 h-10 border-2 border-t-black border-r-black border-b-black border-l-transparent rounded-full animate-spin"></div>
            <p className="mt-2 text-xs text-gray-400">Fetching articles please wait ... </p>
          </div>
        ) : error ? (
          <div className="mb-4 p-3 bg-grey-300 text-xl">
            <h3 className="text-black font-medium">Sorry For this , Articles coudnt fetched please try again later</h3>
            <p className="text-gray-400 text-xs mt-1">{error}</p>
          </div>
        ) : filteredBlogs.length === 0 ? (
          <div className="text-center py-8">
            <Search size={24} className="text-gray-900 mx-auto mb-2" />
            <p className="text-sm text-gray-900 ">No result found from your searches </p>
            <p className="text-sm text-gray-900">Try adjusting your search or tags criteria</p>
          </div>
        ) : (
          <div className="grid gap-3">
            {filteredBlogs.map((blog) => (
              <article 
                key={blog.id} 
                className="bg-blue-200 rounded-md border-3 border-black "
              >
                <a
                  href={blog.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3"
                >
                  <div className="flex flex-col space-y-2">
                    <div className="flex justify-between items-start">
                      <h2 className="text-base font-medium text-black hover:text-gray-800">
                        {blog.title}
                      </h2>
                      <div className="flex items-center space-x-1 text-xs p-1 bg-yellow-500 border-3 border-black rounded-full font-bold text-gray-900 whitespace-nowrap ml-2">
                        <Clock size={12} />
                        <span>{blog.readTime}</span>
                      </div>
                    </div>

                    <p className="text-gray-900 text-xs line-clamp-2">
                      {blog.brief}
                    </p>

                    <div className="flex flex-wrap gap-1">
                      {blog.tags.map((tag, index) => (
                        <span
                          key={index}
                          className={`flex items-center text-xs px-1.5 py-0.5 border ${
                            selectedTags.includes(tag) ? 'text-black rounded-md bg-yellow-500 border-black border-2' : 'text-black font-semibold border-gray-800 border-2 rounded-md'
                          }`}
                        >
                          <Tag size={8} className="mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex justify-between items-center pt-1 text-xs">
                      <div className="flex items-center text-xs p-1 bg-yellow-500 border-3 border-black rounded-full font-bold text-gray-900 ">
                        <Calendar size={12} className="mr-1" />
                        <span>{blog.dateAdded}</span>
                      </div>
                      <div className="flex items-center text-gray-300 hover:underline">
                        <span>Read</span>
                        <ExternalLink size={12} className="ml-1" />
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