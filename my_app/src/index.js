import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Project from "./Project";
import Resume from './Resume';
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/project" element={<Project />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
    <App />
  </BrowserRouter>
);
