import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import  Blogs  from "./components/Blogs";
import Aboutme from "./components/Aboutme";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/aboutme" element={<Aboutme/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
