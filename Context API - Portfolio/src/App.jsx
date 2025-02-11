import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Skills from "./pages/Skills";
import Navbar from "./components/Navbar";

import { useContext } from "react";
import "./index.css";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: theme === "light" ? "#f5f5f5" : "#333", // Theme-based background
        color: theme === "light" ? "#333" : "#fff", // Theme-based text color
        transition: "background 0.3s ease-in-out", // Smooth transition effect
      }}
    >
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
