import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import { AwsDocs } from "./components/AwsDocs";
import Blogs from "./components/Blogs";
import { useAuth } from "react-oidc-context";

const App: React.FC = () => {
  const auth = useAuth();

  const signOutRedirect = () => {
    const clientId = import.meta.env.VITE_COGNITO_CLIENT_ID;
    const logoutUri = import.meta.env.VITE_COGNITO_REDIRECT_URI;
    const cognitoDomain = `${import.meta.env.VITE_COGNITO_AUTHORITY}/logout`;
    window.location.href = `${cognitoDomain}?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
  };

  // Example usage of signOutRedirect
  // Replace the existing sign-out button logic with this function
  <button onClick={signOutRedirect}>Sign out</button>

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (auth.error) {
    return <div>Encountering error... {auth.error.message}</div>;
  }

  if (!auth.isAuthenticated) {
    return (
      <div>
        <button onClick={() => auth.signinRedirect()}>Sign in</button>
      </div>
    );
  }

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/docs" element={<AwsDocs />} />
      </Routes>
      <Footer />
      <div>
        {/* User information and Sign out button */}
        <pre>Hello: {auth.user?.profile.email}</pre>
        <button onClick={() => auth.removeUser()}>Sign out</button>
      </div>
    </Router>
  );
};

export default App;
