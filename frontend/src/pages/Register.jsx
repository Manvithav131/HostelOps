import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../services/api";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/register", form);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      navigate("/student");
    } catch (err) {
      alert("Registration failed");
      console.error(err.response?.data || err.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Create Account</h2>

        <form onSubmit={handleSubmit}>
          <input
            className="input"
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            className="input"
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            className="input"
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <button className="button" type="submit">
            Register
          </button>
        </form>

        <p style={{ marginTop: "15px" }}>
          Already have an account? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;