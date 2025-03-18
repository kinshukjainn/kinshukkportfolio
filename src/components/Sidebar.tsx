// Sidebar.tsx
import { motion } from 'framer-motion';
import { Upload, Tag } from 'lucide-react';

interface SidebarProps {
  categories: string[];
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
  onUploadClick: () => void;
}

const Sidebar = ({ 
  categories, 
  selectedCategory, 
  onCategorySelect, 
  onUploadClick 
}: SidebarProps) => {
  return (
    <motion.aside 
      className="md:w-1/4 bg-white p-6 rounded-lg shadow-lg"
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
    >
      <motion.button
        className="w-full bg-blue-600 text-white p-3 rounded-lg mb-6 flex items-center justify-center"
        onClick={onUploadClick}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Upload className="mr-2" />
        Upload New Post
      </motion.button>
      
      <h2 className="text-xl font-bold mb-4">Categories</h2>
      
      <ul className="space-y-2">
        <motion.li
          className={`cursor-pointer p-3 rounded-md transition ${
            selectedCategory === 'all' ? 'bg-blue-600 text-white' : 'hover:bg-blue-50'
          }`}
          onClick={() => onCategorySelect('all')}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Tag className="inline mr-2" />
          All Posts
        </motion.li>
        
        {categories.map(category => (
          <motion.li
            key={category}
            className={`cursor-pointer p-3 rounded-md transition ${
              selectedCategory === category ? 'bg-blue-600 text-white' : 'hover:bg-blue-50'
            }`}
            onClick={() => onCategorySelect(category)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Tag className="inline mr-2" />
            {category}
          </motion.li>
        ))}
        
        {categories.length === 0 && (
          <li className="text-gray-500 italic p-3">
            No categories available yet
          </li>
        )}
      </ul>
    </motion.aside>
  );
};

export default Sidebar;