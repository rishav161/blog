import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/login", { username, password });
      localStorage.setItem("token", response.data.token); 
      navigate("/"); // Redirect to homepage
    } catch (error) {
      console.error("Error logging in", error);
      alert("Invalid credentials");
    }
  };

  return (
    <div className="container mt-5 bg-light p-5 rounded shadow-lg">
      <h1 className="text-center mb-4">Login</h1>
      <form onSubmit={handleLogin}>
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
        <button type="submit" className="btn btn-primary w-100">Login</button>
      </form>
      <div className="text-center mt-4">
        <p>Do not have an account? <a href="/register">Register here</a></p>
      </div>
    </div>
  );
};

export default LoginPage;
