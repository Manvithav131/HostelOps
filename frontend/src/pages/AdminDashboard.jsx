import { useState, useEffect } from "react";
import API from "../services/api";

function AdminDashboard() {
  const [complaints, setComplaints] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchComplaints();
  }, []);

  const fetchComplaints = async () => {
    try {
      const res = await API.get("/admin/complaints", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setComplaints(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const updateStatus = async (id, newStatus) => {
  try {
    await API.put(
      `/admin/complaints/${id}`,
      { status: newStatus },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    fetchComplaints(); // refresh list
  } catch (err) {
    console.error(err);
  }
};

  return (
    <div className="admin-container">
      <aside className="admin-sidebar">
        <h2>HostelOps</h2>
        <ul>
          <li className="active">All Complaints</li>
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

      <main className="admin-main">
        <h1>Admin Dashboard</h1>

        <div className="admin-grid">
          {complaints.length === 0 ? (
            <p>No complaints found.</p>
          ) : (
            complaints.map((c) => (
              <div key={c._id} className="admin-card">
                <h3>{c.title}</h3>
                <p>{c.description}</p>

                <div className="admin-meta">
  <select
    value={c.status}
    onChange={(e) => updateStatus(c._id, e.target.value)}
  >
    <option value="pending">Pending</option>
    <option value="in-progress">In Progress</option>
    <option value="resolved">Resolved</option>
  </select>

  <span className="student">
    {c.student?.name}
  </span>
</div>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
}

export default AdminDashboard;