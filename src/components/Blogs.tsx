import React, { useState, useEffect } from 'react';

interface Blog {
  id: string;
  title: string;
  brief: string;
  dateAdded: string;
  url: string;
  readTime: string;
  tags: string[];
}

const Blogs: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
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
          const formattedBlogs: Blog[] = data.data.publication.posts.edges.map((edge: any) => ({
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
            tags: edge.node.tags?.map((tag: any) => tag.name) || [],
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-3">
            My Blog / Articles
          </h1>
          <p className="text-gray-300">
            My thoughts, opinion, take, and some guides on  cloud, building scalable infrastructure , deploying apps ,  web development , and many other technical and non-technical fields 
          </p>
        </header>

        {loading ? (
          <div className="flex justify-center items-center py-10">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-purple-500"></div>
          </div>
        ) : error ? (
          <div className="mb-6 p-4 bg-red-900 bg-opacity-30 rounded-lg border border-red-700">
            <p className="text-red-400">{error}</p>
            <p className="mt-2 text-gray-400 text-sm">If this persists, check your domain or API key.</p>
          </div>
        ) : (
          <ul className="space-y-6 divide-y divide-gray-700">
            {blogs.map((blog) => (
              <li key={blog.id} className="pt-6 first:pt-0">
                <article className="group">
                  <a
                    href={blog.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group-hover:opacity-90 transition-opacity"
                  >
                    <div className="flex justify-between items-start mb-1">
                      <h2 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {blog.title}
                      </h2>
                      <span className="text-xs text-gray-400 whitespace-nowrap ml-4 mt-1">
                        {blog.readTime}
                      </span>
                    </div>

                    <p className="text-gray-300 text-sm mb-2 line-clamp-2">
                      {blog.brief}
                    </p>

                    <div className="flex flex-wrap items-center justify-between mt-2">
                      <div className="flex flex-wrap gap-2">
                        {blog.tags.slice(0, 3).map((tag, index) => (
                          <span
                            key={index}
                            className="text-xs px-2 py-1 rounded-full bg-gray-800 text-gray-300"
                          >
                            {tag}
                          </span>
                        ))}
                        {blog.tags.length > 3 && (
                          <span className="text-xs px-2 py-1 rounded-full bg-gray-800 text-gray-300">
                            +{blog.tags.length - 3} more
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-purple-400">{blog.dateAdded}</span>
                    </div>
                  </a>
                </article>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Blogs;
