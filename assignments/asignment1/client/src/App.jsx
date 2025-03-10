import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home.jsx";
import Resume from "./Resume.jsx";
import Projects from "./Projects.jsx";
import Contact from "./contact.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
  
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
     
        <Route path="/projects" element={<Projects />} />

        <Route path="/contact" element={<Contact />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
