import { useState } from 'react';
import { motion } from 'framer-motion';

interface AuthFormProps {
  onAuthenticated: (email: string, secretCode: string, authorName: string) => void;
}

const AuthForm = ({ onAuthenticated }: AuthFormProps) => {
  const [email, setEmail] = useState('');
  const [secretCode, setSecretCode] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [authError, setAuthError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');
    
    try {
      if (email === import.meta.env.VITE_ADMIN_EMAIL && 
          secretCode === import.meta.env.VITE_SECRET_CODE) {
        onAuthenticated(email, secretCode, authorName);
      } else {
        setAuthError('Invalid credentials');
      }
    } catch (error) {
      setAuthError('Authentication failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {authError && (
        <div className="bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded">
          {authError}
        </div>
      )}
      
      <div>
        <label className="block text-gray-700 mb-2">Admin Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full py-2 px-4 border border-gray-300 rounded-md"
          required
        />
      </div>
      
      <div>
        <label className="block text-gray-700 mb-2">Secret Code</label>
        <input
          type="password"
          value={secretCode}
          onChange={(e) => setSecretCode(e.target.value)}
          className="w-full py-2 px-4 border border-gray-300 rounded-md"
          required
        />
      </div>
      
      <div>
        <label className="block text-gray-700 mb-2">Author Name</label>
        <input
          type="text"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          className="w-full py-2 px-4 border border-gray-300 rounded-md"
          required
        />
      </div>
      
      <div className="flex justify-end">
        <motion.button
          type="submit"
          className="bg-blue-600 text-white py-2 px-6 rounded-md"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Authenticate & Continue
        </motion.button>
      </div>
    </form>
  );
};

export default AuthForm;
