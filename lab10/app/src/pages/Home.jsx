import { useEffect, useState } from "react";
import PostSummary from "../components/PostSummary.jsx";
import { API_URL } from "../api.js";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error("Failed to load posts");
        const data = await res.json();
        setPosts(data.slice(0, 5));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div>
      <h1>Latest Posts</h1>
      {posts.length === 0 && <p>No posts yet. Create one!</p>}
      {posts.map((p) => (
        <PostSummary key={p._id} post={p} />
      ))}
    </div>
  );
}
