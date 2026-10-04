import { Link } from "react-router-dom";

export default function PostSummary({ post, onDelete }) {
  const preview =
    post.body.length > 120 ? post.body.slice(0, 120) + "..." : post.body;

  return (
    <div className="card">
      <h3>
        <Link to={`/post/${post._id}`}>{post.title}</Link>
      </h3>
      <small>
        By {post.author} · {new Date(post.date).toLocaleDateString()}
      </small>
      <p>{preview}</p>
      <Link to={`/post/${post._id}`}>Read more</Link>
      {onDelete && (
        <button className="danger" onClick={() => onDelete(post._id)}>
          Delete
        </button>
      )}
    </div>
  );
}
