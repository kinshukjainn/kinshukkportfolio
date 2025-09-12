import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { SignedOut } from "@clerk/clerk-react";

import Header from "./component-mine/Header";
import Footer from "./component-mine/Footer";
import MainContent from "./component-mine/MainContent";
import Aboutme from "./component-mine/Aboutme";
import Blog from "./component-mine/Blog";
import Learningsources from "./component-mine/Learningsources";
import Newsignin from "./component-mine/Newsigin";
import ProtectedRoute from "./Protectedroute";


const App: React.FC = () => {
  return (
    <>
      <Header />
      
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<MainContent />} />
        <Route path="/gears" element={<Aboutme />} />
        
        {/* Custom Sign-In/Sign-Up Routes */}
        <Route 
          path="/sign-in" 
          element={
            <SignedOut>
              <Newsignin />
            </SignedOut>
          } 
        />
        <Route 
          path="/sign-up" 
          element={
            <SignedOut>
              <Newsignin />
            </SignedOut>
          } 
        />

        {/* Protected Routes */}
        <Route
          path="/blog"
          element={
            <ProtectedRoute>
              <Blog />
            </ProtectedRoute>
          }
        />

        <Route
          path="/sources"
          element={
            <ProtectedRoute>
              <Learningsources />
            </ProtectedRoute>
          }
        />

        {/* Catch all route - redirect to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      
      <Footer />
    </>
  );
};

export default App;
