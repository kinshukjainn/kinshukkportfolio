import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component-mine/Header";
import MainContent from "./component-mine/MainContent";
import Footer from "./component-mine/Footer";
import Aboutme from "./component-mine/Aboutme";
import Blog from "./component-mine/Blog";
import Learningsources from "./component-mine/Learningsources";
function App() {
  return ( 
    <Router>  
      <Header /> 
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/gears" element={<Aboutme/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/sources" element={<Learningsources/>} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

