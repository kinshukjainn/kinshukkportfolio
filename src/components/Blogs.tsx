import  { useState, useEffect } from 'react';
import { Calendar, Clock, ExternalLink, Tag } from 'lucide-react';

interface Blog {
  id: string;
  title: string;
  brief: string;
  dateAdded: string;
  url: string;
  readTime: string;
  tags: string[];
}

const Blogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
                  posts(first: 20) {
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

            const formattedBlogs = (data as BlogResponse).data.publication.posts.edges.map((edge) => ({
            id: edge.node.id,
            title: edge.node.title,
            brief: edge.node.brief,
            dateAdded: new Date(edge.node.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            }),
            url: `https://${blogDomain}/${edge.node.slug}`,
            readTime: `${edge.node.readTimeInMinutes} min read`,
            tags: edge.node.tags?.map((tag) => tag.name) || [],
            }));
          setBlogs(formattedBlogs);
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="relative mb-16">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg opacity-75 blur"></div>
          <div className="relative bg-gray-900 font-mono rounded-lg p-8 border border-gray-800 shadow-lg">
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-green-500 mb-4">
              Blogs !! 
            </h1>
            <p className="text-white-900 font-poppins text-lg max-w-3xl">
              My thoughts, opinion, take, and some guides on cloud, building scalable infrastructure,
              deploying apps, web development, and many other technical and non-technical fields
            </p>
          </div>
        </div>

        {loading ? (
          <div className="flex flex-col justify-center items-center py-20">
            <div className="relative w-20 h-20">
              <div className="absolute inset-0 rounded-full border-4 border-t-purple-500 border-r-blue-500 border-b-pink-500 border-l-indigo-500 animate-spin"></div>
              <div className="absolute inset-2 rounded-full bg-gray-900"></div>
            </div>
            <p className="mt-4 text-gray-400">Loading articles...</p>
          </div>
        ) : error ? (
          <div className="mb-10 p-6 bg-gray-900 rounded-lg border border-red-700">
            <div className="flex items-center mb-3">
              <div className="w-2 h-2 rounded-full bg-red-500 mr-2 animate-pulse"></div>
              <h3 className="text-red-400 font-medium">Error Loading Articles</h3>
            </div>
            <p className="text-gray-300">{error}</p>
            <p className="mt-3 text-gray-400 text-sm">If this persists, check your domain or API key.</p>
          </div>
        ) : (
          <div className="grid gap-8">
            {blogs.map((blog) => (
              <article 
                key={blog.id} 
                className="group bg-gray-900 bg-opacity-50 rounded-xl overflow-hidden border border-gray-800 transition-all duration-300 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-900/20"
              >
                <a
                  href={blog.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6"
                >
                  <div className="flex flex-col space-y-3">
                    <div className="flex justify-between items-start">
                      <h2 className="text-2xl font-bold text-yellow-500 font-mono group-hover:text-yellow-200 transition-colors">
                        {blog.title}
                      </h2>
                      <div className="flex items-center space-x-1 text-xs text-gray-400 whitespace-nowrap ml-4">
                        <Clock size={14} className="text-purple-400" />
                        <span>{blog.readTime}</span>
                      </div>
                    </div>

                    <p className="text-gray-300 line-clamp-2">
                      {blog.brief}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-1">
                      {blog.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="flex items-center text-xs px-3 py-1 rounded-full bg-gray-800 text-purple-300 border border-gray-700"
                        >
                          <Tag size={10} className="mr-1" />
                          {tag}
                        </span>
                      ))}
                      {blog.tags.length > 3 && (
                        <span className="text-xs px-3 py-1 rounded-full bg-gray-800 text-purple-300 border border-gray-700">
                          +{blog.tags.length - 3} more
                        </span>
                      )}
                    </div>

                    <div className="flex justify-between items-center pt-3 mt-2 border-t border-gray-800">
                      <div className="flex items-center text-xs text-gray-400">
                        <Calendar size={14} className="mr-1 text-blue-400" />
                        <span>{blog.dateAdded}</span>
                      </div>
                      <div className="flex items-center text-xs text-purple-400 font-medium">
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