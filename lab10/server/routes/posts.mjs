import express from "express";
import { ObjectId } from "mongodb";
import db from "../db/conn.mjs";

const router = express.Router();
const collection = db.collection("posts");

const isValidId = (id) => ObjectId.isValid(id);

router.get("/", async (req, res) => {
  try {
    const posts = await collection.find({}).sort({ date: -1 }).toArray();
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch posts" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    if (!isValidId(req.params.id)) {
      return res.status(400).json({ error: "Invalid post id" });
    }
    const post = await collection.findOne({ _id: new ObjectId(req.params.id) });
    if (!post) return res.status(404).json({ error: "Post not found" });
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch post" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { title, author, body } = req.body;
    if (!title?.trim() || !author?.trim() || !body?.trim()) {
      return res.status(400).json({ error: "title, author and body are required" });
    }
    const newPost = {
      title: title.trim(),
      author: author.trim(),
      body: body.trim(),
      date: new Date(),
    };
    const result = await collection.insertOne(newPost);
    res.status(201).json({ ...newPost, _id: result.insertedId });
  } catch (err) {
    res.status(500).json({ error: "Failed to create post" });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    if (!isValidId(req.params.id)) {
      return res.status(400).json({ error: "Invalid post id" });
    }
    const { title, author, body } = req.body;
    const updates = {};
    if (title?.trim()) updates.title = title.trim();
    if (author?.trim()) updates.author = author.trim();
    if (body?.trim()) updates.body = body.trim();

    if (Object.keys(updates).length === 0) {
      return res.status(400).json({ error: "No valid fields to update" });
    }

    const result = await collection.updateOne(
      { _id: new ObjectId(req.params.id) },
      { $set: updates }
    );
    if (result.matchedCount === 0) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.status(200).json({ message: "Post updated" });
  } catch (err) {
    res.status(500).json({ error: "Failed to update post" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    if (!isValidId(req.params.id)) {
      return res.status(400).json({ error: "Invalid post id" });
    }
    const result = await collection.deleteOne({ _id: new ObjectId(req.params.id) });
    if (result.deletedCount === 0) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.status(200).json({ message: "Post deleted" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete post" });
  }
});

export default router;
