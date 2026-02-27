import { useState } from "react";

function StudentDashboard() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [complaints, setComplaints] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newComplaint = {
      id: Date.now(),
      title,
      description,
      status: "Pending",
    };

    setComplaints([newComplaint, ...complaints]);
    setTitle("");
    setDescription("");
  };

  return (
    <div style={styles.container}>
      <aside style={styles.sidebar}>
        <h2>HostelOps</h2>
        <ul style={styles.nav}>
          <li>Dashboard</li>
          <li>My Complaints</li>
          <li>New Complaint</li>
        </ul>
      </aside>

      <main style={styles.main}>
        <h1>Student Dashboard</h1>

        <div style={styles.card}>
          <h3>Submit New Complaint</h3>

          <form onSubmit={handleSubmit} style={styles.form}>
            <input
              type="text"
              placeholder="Complaint Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={styles.input}
            />

            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              style={styles.textarea}
            />

            <button type="submit" style={styles.button}>
              Submit
            </button>
          </form>
        </div>

        <div style={styles.card}>
          <h3>My Complaints</h3>

          {complaints.length === 0 ? (
            <p>No complaints yet.</p>
          ) : (
            complaints.map((c) => (
              <div key={c.id} style={styles.complaintItem}>
                <h4>{c.title}</h4>
                <p>{c.description}</p>
                <span style={styles.status}>{c.status}</span>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
}

const styles = {
  container: { display: "flex", height: "100vh" },
  sidebar: {
    width: "220px",
    background: "#1e293b",
    color: "white",
    padding: "20px",
  },
  nav: { listStyle: "none", padding: 0, marginTop: "20px" },
  main: {
    flex: 1,
    padding: "40px",
    background: "#f1f5f9",
  },
  card: {
    marginTop: "20px",
    padding: "20px",
    background: "white",
    borderRadius: "8px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
  },
  form: { display: "flex", flexDirection: "column", gap: "10px" },
  input: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ddd",
  },
  textarea: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ddd",
    minHeight: "80px",
  },
  button: {
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    background: "#667eea",
    color: "white",
    cursor: "pointer",
  },
  complaintItem: {
    marginTop: "10px",
    padding: "10px",
    border: "1px solid #eee",
    borderRadius: "6px",
  },
  status: {
    fontSize: "12px",
    color: "#667eea",
    fontWeight: "bold",
  },
};

export default StudentDashboard;