import { useState } from 'react';
import type { FormData } from '../types/blog';

interface BlogFormProps {
  initialData: FormData;
  onSubmit: (data: FormData) => void;
  onCancel: () => void;
}

const BlogForm = ({ initialData, onSubmit, onCancel }: BlogFormProps) => {
  const [formData, setFormData] = useState<FormData>(initialData);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleContentBlockChange = (
    index: number,
    field: string,
    value: string
  ) => {
    setFormData(prev => {
      const blocks = [...prev.contentBlocks];
      blocks[index] = { ...blocks[index], [field]: value };
      return { ...prev, contentBlocks: blocks };
    });
  };

  const addContentBlock = (type: 'text' | 'code' | 'image') => {
    setFormData(prev => ({
      ...prev,
      contentBlocks: [
        ...prev.contentBlocks,
        { type, content: '', ...(type === 'code' ? { language: 'javascript' } : {}) }
      ]
    }));
  };

  const removeContentBlock = (index: number) => {
    if (formData.contentBlocks.length > 1) {
      setFormData(prev => ({
        ...prev,
        contentBlocks: prev.contentBlocks.filter((_, i) => i !== index)
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700 mb-2">Blog Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="w-full py-2 px-4 border border-gray-300 rounded-md"
            required
          />
        </div>
        
        <div>
          <label className="block text-gray-700 mb-2">Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            className="w-full py-2 px-4 border border-gray-300 rounded-md"
            required
          />
        </div>
      </div>
      
      <div>
        <label className="block text-gray-700 mb-2">Summary</label>
        <textarea
          name="summary"
          value={formData.summary}
          onChange={handleInputChange}
          className="w-full py-2 px-4 border border-gray-300 rounded-md"
          rows={2}
          required
        ></textarea>
      </div>
      
      <div className="border-t border-gray-200 pt-4">
        <h3 className="text-lg font-medium mb-4">Content Blocks</h3>
        
        {formData.contentBlocks.map((block, index) => (
          <div key={index} className="mb-4 p-4 border border-gray-200 rounded-md">
            <div className="flex justify-between items-center mb-3">
              <span className="font-medium">Block {index + 1}: {block.type}</span>
              <button
                type="button"
                onClick={() => removeContentBlock(index)}
                className="text-red-500"
                disabled={formData.contentBlocks.length <= 1}
              >
                Remove
              </button>
            </div>
            
            {renderContentBlockFields(block, index, handleContentBlockChange)}
          </div>
        ))}
        
        <div className="flex flex-wrap gap-2 mt-4">
          <button
            type="button"
            onClick={() => addContentBlock('text')}
            className="bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded"
          >
            Add Text
          </button>
          <button
            type="button"
            onClick={() => addContentBlock('code')}
            className="bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded"
          >
            Add Code
          </button>
          <button
            type="button"
            onClick={() => addContentBlock('image')}
            className="bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded"
          >
            Add Image
          </button>
        </div>
      </div>
      
      <div className="flex justify-end space-x-3 mt-6">
        <button
          type="button"
          onClick={onCancel}
          className="py-2 px-4 border border-gray-300 rounded-md"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-6 rounded-md"
        >
          Publish Post
        </button>
      </div>
    </form>
  );
};

// Helper function to render content block fields based on type
const renderContentBlockFields = (
  block: any,
  index: number,
  onChange: (index: number, field: string, value: string) => void
) => {
  switch (block.type) {
    case 'text':
      return (
        <textarea
          value={block.content}
          onChange={(e) => onChange(index, 'content', e.target.value)}
          className="w-full py-2 px-4 border border-gray-300 rounded-md"
          rows={4}
          required
        ></textarea>
      );
      
    case 'code':
      return (
        <>
          <div className="mb-2">
            <label className="block text-gray-700 mb-1">Language</label>
            <input
              type="text"
              value={block.language || ''}
              onChange={(e) => onChange(index, 'language', e.target.value)}
              className="w-full py-2 px-4 border border-gray-300 rounded-md"
              placeholder="javascript"
              required
            />
          </div>
          <textarea
            value={block.content}
            onChange={(e) => onChange(index, 'content', e.target.value)}
            className="w-full py-2 px-4 border border-gray-300 rounded-md font-mono bg-gray-50"
            rows={6}
            required
          ></textarea>
        </>
      );
      
    case 'image':
      return (
        <>
          <div className="mb-2">
            <label className="block text-gray-700 mb-1">Image URL</label>
            <input
              type="text"
              value={block.src || ''}
              onChange={(e) => onChange(index, 'src', e.target.value)}
              className="w-full py-2 px-4 border border-gray-300 rounded-md"
              placeholder="Enter image URL"
              required
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700 mb-1">Alt Text</label>
            <input
              type="text"
              value={block.alt || ''}
              onChange={(e) => onChange(index, 'alt', e.target.value)}
              className="w-full py-2 px-4 border border-gray-300 rounded-md"
              placeholder="Describe the image"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Caption (Optional)</label>
            <input
              type="text"
              value={block.caption || ''}
              onChange={(e) => onChange(index, 'caption', e.target.value)}
              className="w-full py-2 px-4 border border-gray-300 rounded-md"
              placeholder="Add caption for the image"
            />
          </div>
        </>
      );
      
    default:
      return null;
  }
};

export default BlogForm;