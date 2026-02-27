import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../services/api";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await API.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", response.data.token);

      // Redirect after login
      if (response.data.user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/student");
      }

    } catch (error) {
      console.error(
        "Login failed:",
        error.response?.data || error.message
      );
      alert("Login failed");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Welcome Back</h2>

        <form onSubmit={handleLogin}>
          <input
            className="input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            className="input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="button" type="submit">
            Login
          </button>
        </form>

        <p style={{ marginTop: "15px" }}>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;