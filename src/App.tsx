import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component-mine/Header";
import MainContent from "./component-mine/MainContent";
import Footer from "./component-mine/Footer";
import Aboutme from "./component-mine/Aboutme";
import Learningresources from "./component-mine/Learningresources";
import Blog from "./component-mine/Blog";
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
