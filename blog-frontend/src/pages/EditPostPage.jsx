import { useEffect, useState } from "react";


import {Link,useNavigate, useParams } from "react-router-dom";
import { getPostById, updatePost } from "../api/api";

const EditPostPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    try {
      const data = await getPostById(id);
      setTitle(data.title);
      setContent(data.content);
    } catch (error) {
      console.error("Error fetching post:", error);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    await updatePost(id, { title, content });
    navigate("/");
  };

  return (
    <div className="container mt-5 bg-light p-4 rounded shadow-lg">
      <h1 className="text-center mb-4">Edit Post</h1>
      <form onSubmit={handleUpdate}>
        <div className="mb-4">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control form-control-lg"
            placeholder="Post Title"
            required
          />
        </div>
        <div className="mb-4">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="form-control form-control-lg"
            rows="6"
            placeholder="Post Content"
            required
          />
        </div>
        <button type="submit" className="btn btn-warning w-100">Update Post</button>
      </form>
      <div className="text-center mt-4">
        <Link to="/">
          <button className="btn btn-secondary">Back to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default EditPostPage;
