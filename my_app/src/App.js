import './App.css';
import React from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Project from "./Project";
import Resume from './Resume';
import Footer from './config';

function App() {
  return (
    <HashRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/project" element={<Project />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
    <Footer />
  </HashRouter>
  );
}

export default App;
