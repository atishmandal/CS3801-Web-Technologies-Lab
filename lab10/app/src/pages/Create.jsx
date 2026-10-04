import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../api.js";

export default function Create() {
  const [form, setForm] = useState({ title: "", author: "", body: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to create post");
      navigate(`/post/${data._id}`);
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create a Post</h1>
      {error && <p className="error">{error}</p>}
      <input name="title" placeholder="Title" value={form.title} onChange={handleChange} required />
      <input name="author" placeholder="Author" value={form.author} onChange={handleChange} required />
      <textarea name="body" rows="8" placeholder="Write your post..." value={form.body} onChange={handleChange} required />
      <button type="submit">Publish</button>
    </form>
  );
}
