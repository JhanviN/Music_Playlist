import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Welcome to Rhythmic Vibes 🎵</h1>
      <nav>
        <ul>
          <li><Link to="/library">Library</Link></li>
          <li><Link to="/feed">Feed</Link></li>
          <li><Link to="/trending">Trending</Link></li>
          <li><Link to="/favorites">Favorites</Link></li>
        </ul>
      </nav>
    </div>
  );
}
