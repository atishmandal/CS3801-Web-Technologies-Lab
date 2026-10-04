import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Create from "./pages/Create.jsx";
import Post from "./pages/Post.jsx";
import Archive from "./pages/Archive.jsx";

export default function App() {
  return (
    <div className="container">
      <nav className="navbar">
        <h2>My Blog</h2>
        <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/archive">Archive</NavLink>
          <NavLink to="/create">New Post</NavLink>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/create" element={<Create />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="*" element={<p>Page not found.</p>} />
      </Routes>
    </div>
  );
}
