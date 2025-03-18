import { motion } from 'framer-motion';
import { Images, Upload } from 'lucide-react';

interface NoPostsViewProps {
  onUploadClick: () => void;
}

const NoPostsView = ({ onUploadClick }: NoPostsViewProps) => {
  return (
    <div className="text-center py-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <Images className="text-gray-400 text-6xl mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-700 mb-2">No Blog Posts Yet</h2>
        <p className="text-gray-500 mb-6">Be the first to create content on this platform!</p>
        <motion.button
          className="bg-blue-600 text-white py-3 px-6 rounded-md font-medium"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onUploadClick}
        >
          <Upload className="inline mr-2" />
          Upload New Post
        </motion.button>
      </motion.div>
    </div>
  );
};

export default NoPostsView;