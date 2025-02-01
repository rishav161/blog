import  { useState } from "react";
import { createPost } from "../api/api";


import { useNavigate,Link } from "react-router-dom";

const CreatePostPage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createPost({ title, content });
    navigate("/");
  };

  return (
    <div className="container mt-5 bg-white p-4 rounded shadow-lg">
      <h1 className="text-center mb-4">Create New Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="form-control"
            rows="5"
            required
          />
        </div>
        <button type="submit" className="btn btn-success w-100">Create Post</button>
      </form>
      <div className="text-center mt-4">
        <Link to="/">
          <button className="btn btn-secondary">Back to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default CreatePostPage;
