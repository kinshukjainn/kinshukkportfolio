import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import Aboutme from "./components/Aboutme";
import Learningresources from "./components/Learningresources";
import Blog from "./components/Blog";
function App() {
  return ( 
    <Router>
      <Header /> 
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/my-personal-learning-resources" element={<Learningresources />} />
        <Route path="/aboutme" element={<Aboutme/>} />
        <Route path="/blog" element={<Blog/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
