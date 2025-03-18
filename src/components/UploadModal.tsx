// UploadModal.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { BlogPost, FormData } from '../types/blog';
import AuthForm from './AuthForm';
import BlogForm from './BlogForm';

interface UploadModalProps {
  onClose: () => void;
  onPostCreate: (post: BlogPost) => void;
}

const UploadModal = ({ onClose, onPostCreate }: UploadModalProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    email: '',
    secretCode: '',
    title: '',
    category: '',
    summary: '',
    authorName: '',
    contentBlocks: [{ type: 'text', content: '' }]
  });

  const handleAuthenticated = (email: string, secretCode: string, authorName: string) => {
    setIsAuthenticated(true);
    setFormData(prev => ({
      ...prev,
      email,
      secretCode,
      authorName
    }));
  };

  const handleSubmit = (data: FormData) => {
    const newPost: BlogPost = {
      id: Date.now().toString(),
      title: data.title,
      date: new Date().toISOString(),
      author: {
        name: data.authorName,
        email: data.email,
        avatar: `https://api.dicebear.com/7.x/avatars/svg?seed=${data.email}`
      },
      category: data.category,
      summary: data.summary,
      content: data.contentBlocks
    };
    
    onPostCreate(newPost);
  };

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div 
          className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          onClick={e => e.stopPropagation()}
        >
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">
                {isAuthenticated ? "Create New Blog Post" : "Authentication Required"}
              </h2>
              <button 
                onClick={onClose}
                className="text-gray-500 hover:text-gray-800"
              >
                &times;
              </button>
            </div>

            {!isAuthenticated ? (
              <AuthForm onAuthenticated={handleAuthenticated} />
            ) : (
              <BlogForm 
                initialData={formData} 
                onSubmit={handleSubmit}
                onCancel={onClose}
              />
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default UploadModal;