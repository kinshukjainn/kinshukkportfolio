// BlogPost.tsx
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import type { BlogPost as BlogPostType, BlogContent } from '../types/blog';

interface BlogPostProps {
  post: BlogPostType;
  onBack: () => void;
}

export const BlogPost = ({ post, onBack }: BlogPostProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <motion.button 
        onClick={onBack}
        className="mb-4 flex items-center text-blue-600 hover:underline"
        whileHover={{ x: -5 }}
      >
        <ChevronLeft className="mr-1" /> 
        Back to posts
      </motion.button>
      
      <article>
        <motion.h1 
          className="text-3xl font-bold mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {post.title}
        </motion.h1>
        
        <motion.div 
          className="flex items-center mb-6 bg-gray-50 p-4 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <img 
            src={post.author.avatar} 
            alt={post.author.name}
            className="w-12 h-12 rounded-full border-2 border-gray-300" 
          />
          <div className="ml-3">
            <div className="font-medium">{post.author.name}</div>
            <div className="text-sm text-gray-600">{post.author.email}</div>
            <div className="text-sm text-gray-600">
              {new Date(post.date).toLocaleDateString()}
            </div>
          </div>
        </motion.div>
        
        <div className="prose max-w-none">
          {post.content.map((block, index) => (
            <div key={index}>{renderContent(block)}</div>
          ))}
        </div>
      </article>
    </div>
  );
};

// Render different content types
const renderContent = (content: BlogContent) => {
  switch (content.type) {
    case 'text':
      return (
        <motion.p 
          className="mb-4 text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {content.content}
        </motion.p>
      );
      
    case 'code':
      return (
        <motion.div 
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="bg-gray-800 text-white px-4 py-2 text-sm font-mono rounded-t-md">
            {content.language}
          </div>
          <pre className="bg-gray-900 text-gray-100 p-4 overflow-x-auto rounded-b-md">
            <code>{content.content}</code>
          </pre>
        </motion.div>
      );
      
    case 'image':
      return (
        <motion.figure 
          className="mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <img 
            src={content.src} 
            alt={content.alt} 
            className="w-full rounded-md shadow-md" 
          />
          {content.caption && (
            <figcaption className="text-center text-sm text-gray-600 mt-2">
              {content.caption}
            </figcaption>
          )}
        </motion.figure>
      );
      
    default:
      return null;
  }
};

export default BlogPost;