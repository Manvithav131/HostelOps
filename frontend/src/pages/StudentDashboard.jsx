import { useState, useEffect } from "react";
import API from "../services/api";

function StudentDashboard() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [complaints, setComplaints] = useState([]);
const [activeTab, setActiveTab] = useState("new");
const [category, setCategory] = useState("");
const [priority, setPriority] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      fetchComplaints();
    }
  }, [token]);

  const fetchComplaints = async () => {
    try {
      const res = await API.get("/complaints/my", {
  headers: {
    Authorization: `Bearer ${token}`,
    "Cache-Control": "no-cache",
  },
});

      console.log("Fetched complaints:", res.data);
      setComplaints(res.data);
    } catch (err) {
      console.error("Fetch error:", err.response?.data || err.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
console.log("Submitting:", { title, description });
    try {
      await API.post(
        "/complaints",
        { title, description ,category, priority },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setTitle("");
      setDescription("");
      fetchComplaints();
    } catch (err) {
      console.error("Submit error:", err.response?.data || err.message);
    }
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>HostelOps</h2>
        <ul>
  <li onClick={() => setActiveTab("new")}>New Complaint</li>
  <li onClick={() => setActiveTab("list")}>My Complaints</li>
  <li
    onClick={() => {
      localStorage.removeItem("token");
      window.location.href = "/";
    }}
  >
    Logout
  </li>
</ul>
      </aside>

      <main className="main">
        <h1>Student Dashboard</h1>

       {activeTab === "new" && (
  <div className="card">
    <h3>Submit New Complaint</h3>

    <form onSubmit={handleSubmit}>
      <input
        className="input"
        type="text"
        placeholder="Complaint Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <textarea
        className="textarea"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      <select
  className="input"
  value={category}
  onChange={(e) => setCategory(e.target.value)}
>
  <option value="">Select Category</option>
  <option value="electrical">Electrical</option>
  <option value="plumbing">Plumbing</option>
  <option value="cleaning">Cleaning</option>
  <option value="other">Other</option>
</select>

<select
  className="input"
  value={priority}
  onChange={(e) => setPriority(e.target.value)}
>
  <option value="">Select Priority</option>
  <option value="low">Low</option>
  <option value="medium">Medium</option>
  <option value="high">High</option>
</select>

      <button className="button" type="submit">
        Submit
      </button>
    </form>
  </div>
)}

        {activeTab === "list" && (
  <div className="card">
    <h3>My Complaints</h3>

    {complaints.length === 0 ? (
      <p>No complaints yet.</p>
    ) : (
      complaints.map((c) => (
        <div key={c._id} className="complaint-item">
          <h4>{c.title}</h4>
          <p>{c.description}</p>
          <span className="status">{c.status}</span>
        </div>
      ))
    )}
  </div>
)}
      </main>
    </div>
  );
}

export default StudentDashboard;