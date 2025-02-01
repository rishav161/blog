// src/pages/RegisterPage.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/register", { username, password });
      navigate("/login"); // Redirect to login after successful registration
    } catch (error) {
      console.error("Error registering", error);
      alert("User already exists or invalid data");
    }
  };

  return (
    <div className="container mt-5 bg-light p-5 rounded shadow-lg">
      <h1 className="text-center mb-4">Register</h1>
      <form onSubmit={handleRegister}>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-success w-100">Register</button>
      </form>
      <div className="text-center mt-4">
        <p>Already have an account? <a href="/login">Login here</a></p>
      </div>
    </div>
  );
};

export default RegisterPage;
