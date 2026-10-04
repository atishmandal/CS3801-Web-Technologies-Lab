import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { API_URL } from "../api.js";

export default function Post() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({ title: "", author: "", body: "" });
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`${API_URL}/${id}`);
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Failed to load post");
        setPost(data);
        setForm({ title: data.title, author: data.author, body: data.body });
      } catch (err) {
        setError(err.message);
      }
    }
    load();
  }, [id]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  async function handleUpdate(e) {
    e.preventDefault();
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Update failed");
      setPost({ ...post, ...form });
      setEditing(false);
      setError("");
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleDelete() {
    if (!window.confirm("Delete this post?")) return;
    try {
      const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Delete failed");
      navigate("/archive");
    } catch (err) {
      setError(err.message);
    }
  }

  if (error && !post) return <p className="error">{error}</p>;
  if (!post) return <p>Loading...</p>;

  if (editing) {
    return (
      <form onSubmit={handleUpdate}>
        <h1>Edit Post</h1>
        {error && <p className="error">{error}</p>}
        <input name="title" value={form.title} onChange={handleChange} required />
        <input name="author" value={form.author} onChange={handleChange} required />
        <textarea name="body" rows="8" value={form.body} onChange={handleChange} required />
        <button type="submit">Save</button>
        <button type="button" onClick={() => setEditing(false)}>Cancel</button>
      </form>
    );
  }

  return (
    <article>
      <h1>{post.title}</h1>
      <small>
        By {post.author} · {new Date(post.date).toLocaleString()}
      </small>
      <p className="body">{post.body}</p>
      {error && <p className="error">{error}</p>}
      <button onClick={() => setEditing(true)}>Edit</button>
      <button className="danger" onClick={handleDelete}>Delete</button>
    </article>
  );
}
