import "../loadEnvironment.mjs";
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI, {
  serverSelectionTimeoutMS: 5000,
});

try {
  await client.connect();
  console.log("Connected to MongoDB");
} catch (err) {
  console.error("MongoDB connection failed:", err.message);
  process.exit(1);
}

const db = client.db("blog");
export default db;
