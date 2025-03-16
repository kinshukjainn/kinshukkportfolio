import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import { AwsDocs } from "./components/AwsDocs";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/awsdocs" element={<AwsDocs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
