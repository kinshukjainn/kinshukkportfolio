import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { motion } from "framer-motion";

interface ProtectedRouteProps {
  children: React.ReactNode;
  redirectTo?: string;
}



const LoadingSpinner: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
    <div className="text-center space-y-6">
      {/* Loading Spinner */}
      <motion.div
        className="w-12 h-12 mx-auto"
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-full h-full border-4 border-emerald-500/30 border-t-emerald-400 rounded-full"></div>
      </motion.div>
      
      {/* Loading Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-2"
      >
        <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-300 to-white bg-clip-text text-transparent">
          Loading...
        </h2>
        <p className="text-gray-400">Checking authentication status</p>
      </motion.div>

      {/* Loading Dots */}
      <div className="flex justify-center gap-2">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-2 h-2 bg-emerald-400 rounded-full"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  </div>
);

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children, 
  redirectTo = "/sign-in" 
}) => {
  const { isSignedIn, isLoaded } = useUser();
  const location = useLocation();

  // Show beautiful loading component while Clerk is initializing
  if (!isLoaded) {
    return <LoadingSpinner />;
  }

  // If not signed in, redirect to custom sign-in page with current location
  if (!isSignedIn) {
    // Create redirect URL with query parameter as backup
    const signInPath = `${redirectTo}?redirect_to=${encodeURIComponent(location.pathname)}`;
    
    return (
      <Navigate 
        to={signInPath}
        state={{ from: location.pathname }}
        replace 
      />
    );
  }

  // User is authenticated, render the protected component
  return <>{children}</>;
};

export default ProtectedRoute;