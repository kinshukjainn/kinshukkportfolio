// AwsDocs.tsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import type { BlogPost} from '../types/blog';
import Sidebar from './Sidebar';
import PostList from './PostList';
import BlogPostComponent from './BlogPost';
import UploadModal from './UploadModal';
import NoPostsView from './NoPostsView';
import LoadingSpinner from './LoadingSpinner';

export const AwsDocs = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [showUploadForm, setShowUploadForm] = useState(false);
  
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // In a real app, this would be an API call
        setPosts([]);
        setIsLoading(false);
      } catch (error) {
        console.error('Failed to fetch posts:', error);
        setIsLoading(false);
      }
    };
    
    fetchPosts();
  }, []);

  const categories = Array.from(new Set(posts.map(post => post.category)));
  const filteredPosts = selectedCategory === 'all' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  const handlePostCreate = (newPost: BlogPost) => {
    setPosts(prev => [newPost, ...prev]);
    setShowUploadForm(false);
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (selectedPost) {
    return (
      <BlogPostComponent 
        post={selectedPost} 
        onBack={() => setSelectedPost(null)} 
      />
    );
  }

  return (
    <div className="flex flex-col md:flex-row gap-6">
      <Sidebar 
        categories={categories}
        selectedCategory={selectedCategory}
        onCategorySelect={setSelectedCategory}
        onUploadClick={() => setShowUploadForm(true)}
      />
      
      <motion.main 
        className="md:w-3/4 bg-white p-6 rounded-lg shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {posts.length > 0 ? (
          <PostList
            posts={filteredPosts}
            selectedCategory={selectedCategory}
            onPostSelect={setSelectedPost}
          />
        ) : (
          <NoPostsView onUploadClick={() => setShowUploadForm(true)} />
        )}
      </motion.main>

      {showUploadForm && (
        <UploadModal
          onClose={() => setShowUploadForm(false)}
          onPostCreate={handlePostCreate}
        />
      )}
    </div>
  );
};

export default AwsDocs;