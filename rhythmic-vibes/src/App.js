import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Library from "./screens/Library";
import Feed from "./screens/Feed";
import Trending from "./screens/Trending";
import Favorites from "./screens/Favorites";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<Library />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Router>
  );
}
