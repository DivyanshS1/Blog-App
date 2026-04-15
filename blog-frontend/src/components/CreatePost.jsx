import React, { useState } from "react";
import axios from "axios";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = () => {
    if (!title.trim() || !content.trim()) {
      setStatus("empty");
      return;
    }
    axios.post(
      "http://localhost:8081/api/posts",
      { title, content },
      { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }
    )
    .then(() => {
      setStatus("success");
      setTitle("");
      setContent("");
      setTimeout(() => {
        setStatus(null);
        window.location.reload();
      }, 1000);
    })
    .catch(() => setStatus("error"));
  };

  return (
    <div style={{
      background: "var(--color-background-primary)",
      border: "0.5px solid var(--color-border-tertiary)",
      borderRadius: "var(--border-radius-lg)",
      padding: "1.75rem"
    }}>
      <div style={{ marginBottom: "1.5rem", paddingBottom: "1rem", borderBottom: "0.5px solid var(--color-border-tertiary)" }}>
        <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0F6E56" }}>Compose</span>
        <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.6rem", fontWeight: 400, margin: "0.4rem 0 0.5rem", color: "var(--color-text-primary)" }}>
          Create a new post
        </h2>
        <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: 0, fontWeight: 300 }}>
          Publish a new idea with a title that hooks attention and content that is easy to revisit.
        </p>
      </div>

      {status === "empty" && (
        <div style={{ fontSize: 13, color: "var(--color-text-warning)", background: "var(--color-background-warning)", border: "0.5px solid var(--color-border-warning)", borderRadius: "var(--border-radius-md)", padding: "8px 12px", marginBottom: 14 }}>
          Please fill in both title and content.
        </div>
      )}
      {status === "error" && (
        <div style={{ fontSize: 13, color: "var(--color-text-danger)", background: "var(--color-background-danger)", border: "0.5px solid var(--color-border-danger)", borderRadius: "var(--border-radius-md)", padding: "8px 12px", marginBottom: 14 }}>
          Failed to publish. Please try again.
        </div>
      )}
      {status === "success" && (
        <div style={{ fontSize: 13, color: "var(--color-text-success)", background: "var(--color-background-success)", border: "0.5px solid var(--color-border-success)", borderRadius: "var(--border-radius-md)", padding: "8px 12px", marginBottom: 14 }}>
          Post published successfully.
        </div>
      )}

      <div style={{ marginBottom: 12 }}>
        <label style={{ display: "block", fontSize: 11, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-text-secondary)", marginBottom: 6 }}>Title</label>
        <input
          placeholder="Give your post a title…"
          value={title}
          onChange={e => setTitle(e.target.value)}
          style={{ width: "100%", boxSizing: "border-box" }}
        />
      </div>

      <div style={{ marginBottom: 16 }}>
        <label style={{ display: "block", fontSize: 11, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-text-secondary)", marginBottom: 6 }}>Content</label>
        <textarea
          placeholder="Start writing…"
          rows={6}
          value={content}
          onChange={e => setContent(e.target.value)}
          style={{ width: "100%", boxSizing: "border-box", resize: "vertical", minHeight: 160, fontFamily: "inherit" }}
        />
      </div>

      <button onClick={handleSubmit} style={{
        display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
        background: "#085041", color: "#E1F5EE", border: "none",
        borderRadius: "var(--border-radius-md)", padding: "10px 20px",
        fontSize: 13.5, fontWeight: 500, cursor: "pointer",
        width: "100%", fontFamily: "inherit"
      }}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Publish post
      </button>
    </div>
  );
}

export default CreatePost;