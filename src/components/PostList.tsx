// PostList.tsx
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import type { BlogPost } from '../types/blog';

interface PostListProps {
  posts: BlogPost[];
  selectedCategory: string;
  onPostSelect: (post: BlogPost) => void;
}

const PostList = ({ posts, selectedCategory, onPostSelect }: PostListProps) => {
  return (
    <>
      <h1 className="text-2xl font-bold mb-6">
        {selectedCategory === 'all' ? 'All Blog Posts' : `${selectedCategory} Posts`}
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post, index) => (
          <motion.div
            key={post.id}
            className="bg-white p-5 shadow-md border border-gray-200 rounded-lg cursor-pointer"
            onClick={() => onPostSelect(post)}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="flex items-start mb-3">
              <img 
                src={post.author.avatar} 
                alt={post.author.name} 
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <h3 className="text-xl font-semibold">{post.title}</h3>
                <div className="text-sm text-gray-600 mt-1">
                  {post.author.name} • {new Date(post.date).toLocaleDateString()}
                </div>
              </div>
            </div>
            
            <p className="text-gray-700 mb-3">{post.summary}</p>
            
            <div className="flex justify-between items-center">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                {post.category}
              </span>
              <span className="text-blue-600 font-medium flex items-center">
                Read more <ChevronRight className="ml-1" size={16} />
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default PostList;