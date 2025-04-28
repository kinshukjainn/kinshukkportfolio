import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useAuth } from "react-oidc-context";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import { AwsDocs } from "./components/AwsDocs";
import Blogs from "./components/Blogs";

const App: React.FC = () => {
  const auth = useAuth();

  const signOutRedirect = () => {
    const clientId = import.meta.env.VITE_COGNITO_CLIENT_ID;
    const logoutUri = import.meta.env.VITE_COGNITO_REDIRECT_URI;
    const cognitoDomain = `${import.meta.env.VITE_COGNITO_AUTHORITY}/logout`;
    window.location.href = `${cognitoDomain}?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
  };

  if (auth.isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900">
        <div className="text-center">
          <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 border-t-blue-500 border-r-transparent border-b-blue-500 border-l-transparent rounded-full" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <p className="mt-4 text-lg text-gray-300">Loading CloudKinshuk...</p>
        </div>
      </div>
    );
  }

  if (auth.error) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900">
        <div className="bg-red-800 bg-opacity-20 border border-red-700 rounded-lg p-6 max-w-md text-center">
          <h2 className="text-xl font-bold text-red-400 mb-2">Authentication Error</h2>
          <p className="text-gray-300 mb-4">{auth.error.message}</p>
          <button 
            onClick={() => auth.signinRedirect()} 
            className="bg-blue-700 hover:bg-blue-800 text-white font-medium px-4 py-2 rounded-md transition duration-300"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (!auth.isAuthenticated) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-b from-gray-900 to-slate-900">
        <div className="bg-slate-800 bg-opacity-50 border border-slate-700 rounded-lg p-8 max-w-md text-center shadow-xl">
          <h1 className="text-2xl font-bold text-slate-200 mb-6">Welcome to CloudKinshuk</h1>
          <p className="text-gray-300 mb-6">Please sign in to access your cloud resources and portfolio.</p>
          <button 
            onClick={() => auth.signinRedirect()} 
            className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-medium px-6 py-3 rounded-md transition duration-300 shadow-lg"
          >
            Sign in with AWS Cognito
          </button>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-900">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/docs" element={<AwsDocs />} />
          </Routes>
        </main>
        <Footer />
        
        {/* User information and Sign out */}
        <div className="bg-slate-800 bg-opacity-50 p-2 fixed bottom-4 right-4 rounded-lg shadow-lg border border-slate-700 text-white text-sm">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              {auth.user?.profile.email?.charAt(0).toUpperCase() || "U"}
            </div>
            <span className="hidden sm:inline">{auth.user?.profile.email}</span>
            <button 
              onClick={signOutRedirect} 
              className="bg-red-700 hover:bg-red-800 px-2 py-1 rounded text-xs font-medium transition-colors duration-200"
            >
              Sign out
            </button>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;