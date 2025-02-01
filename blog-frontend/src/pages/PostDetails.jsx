// src/pages/PostDetails.js
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getPostById } from "../api/api";

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    try {
      const data = await getPostById(id);
      setPost(data);
    } catch (error) {
      console.error("Error fetching post:", error);
    }
  };

  if (!post) return <h2 className="text-center">Loading...</h2>;

  return (
    <div className="container mt-5 bg-white p-5 rounded shadow-lg">
      <h1 className="text-center text-primary mb-4">{post.title}</h1>
      <p className="text-muted text-center mb-4">{`Created on: ${new Date(post.createdAt).toLocaleDateString()}`}</p>
      <div className="mb-4">
        <p>{post.content}</p>
      </div>
      <div className="text-center">
        <Link to="/">
          <button className="btn btn-primary">Back to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default PostDetails;
