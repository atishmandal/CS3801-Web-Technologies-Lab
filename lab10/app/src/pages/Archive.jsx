import { useEffect, useState } from "react";
import PostSummary from "../components/PostSummary.jsx";
import { API_URL } from "../api.js";

export default function Archive() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error("Failed to load posts");
        setPosts(await res.json());
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  async function handleDelete(id) {
    if (!window.confirm("Delete this post?")) return;
    try {
      const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Delete failed");
      setPosts(posts.filter((p) => p._id !== id));
    } catch (err) {
      setError(err.message);
    }
  }

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Archive ({posts.length})</h1>
      {error && <p className="error">{error}</p>}
      {posts.map((p) => (
        <PostSummary key={p._id} post={p} onDelete={handleDelete} />
      ))}
    </div>
  );
}
