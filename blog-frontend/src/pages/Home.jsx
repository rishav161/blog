import { useEffect, useState } from "react";
import { getPosts, deletePost } from "../api/api";
import { Link } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const data = await getPosts();
      setPosts(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      await deletePost(id);
      setPosts(posts.filter((post) => post._id !== id)); // Remove from state
    }
  };

  return (
    <div className="container mt-5 bg-white p-4 rounded shadow-sm">
      <h1 className="text-center mb-4">Blog Posts</h1>
      <Link to="/create">
        <button className="btn btn-primary mb-4 w-100">Create New Post</button>
      </Link>
      <ul className="list-group">
        {posts.map((post) => (
          <li key={post._id} className="list-group-item d-flex justify-content-between align-items-center">
            <Link to={`/post/${post._id}`} className="text-decoration-none">
              <h4>{post.title}</h4>
            </Link>
            <p>{post.content.substring(0, 100)}...</p>
            <div className="btn-group" role="group">
              <Link to={`/edit/${post._id}`} className="btn btn-warning">Edit</Link>
              <button onClick={() => handleDelete(post._id)} className="btn btn-danger">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
