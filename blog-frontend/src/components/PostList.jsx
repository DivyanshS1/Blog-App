import React, { useEffect, useState } from "react";
import axios from "axios";

function PostList() {
  const [posts, setPosts] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");

  const fetchPosts = () => {
    axios.get("http://localhost:8081/api/posts", {
      headers: { Authorization: "Bearer " + localStorage.getItem("token") }
    })
    .then(res => setPosts(res.data))
    .catch(err => console.error("GET ERROR:", err));
  };

  const deletePost = (id) => {
    if (!window.confirm("Delete this post?")) return;
    axios.delete(`http://localhost:8081/api/posts/${id}`, {
      headers: { Authorization: "Bearer " + localStorage.getItem("token") }
    })
    .then(() => fetchPosts())
    .catch(err => console.error("DELETE ERROR:", err));
  };

  const startEdit = (post) => {
    setEditingId(post.id);
    setEditTitle(post.title);
    setEditContent(post.content);
  };

  const saveEdit = (id) => {
    axios.put(
      `http://localhost:8081/api/posts/${id}`,
      { title: editTitle, content: editContent },
      { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }
    )
    .then(() => { setEditingId(null); fetchPosts(); })
    .catch(err => console.error("PUT ERROR:", err));
  };

  useEffect(() => { fetchPosts(); }, []);

  const cardStyle = {
    background: "var(--color-background-primary)",
    border: "0.5px solid var(--color-border-tertiary)",
    borderRadius: "var(--border-radius-lg)",
    padding: "1.25rem 1.5rem",
    marginBottom: 12,
    transition: "border-color 0.15s"
  };

  return (
    <div>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 12, marginBottom: "1.25rem", paddingBottom: "1rem", borderBottom: "0.5px solid var(--color-border-tertiary)" }}>
        <div>
          <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "#854F0B" }}>Library</span>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.6rem", fontWeight: 400, margin: "0.4rem 0 0", color: "var(--color-text-primary)" }}>
            Your published posts
          </h2>
        </div>
        <span style={{
          fontSize: 12, color: "var(--color-text-secondary)",
          background: "var(--color-background-secondary)",
          border: "0.5px solid var(--color-border-tertiary)",
          borderRadius: 99, padding: "3px 12px", whiteSpace: "nowrap"
        }}>{posts.length} total</span>
      </div>

      {posts.length === 0 && (
        <div style={{ ...cardStyle, textAlign: "center", padding: "3rem 1.5rem" }}>
          <p style={{ fontSize: "1.5rem", fontFamily: "'DM Serif Display', serif", color: "var(--color-text-primary)", margin: "0 0 0.5rem" }}>No posts yet</p>
          <p style={{ fontSize: 13.5, color: "var(--color-text-secondary)", margin: 0, fontWeight: 300 }}>
            Your published stories will appear here after you create the first one.
          </p>
        </div>
      )}

      {posts.map(post => (
        <div key={post.id} style={cardStyle}>
          {editingId === post.id ? (
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <div>
                <label style={{ display: "block", fontSize: 11, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-text-secondary)", marginBottom: 6 }}>Title</label>
                <input
                  value={editTitle}
                  onChange={e => setEditTitle(e.target.value)}
                  style={{ width: "100%", boxSizing: "border-box" }}
                />
              </div>
              <div>
                <label style={{ display: "block", fontSize: 11, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-text-secondary)", marginBottom: 6 }}>Content</label>
                <textarea
                  value={editContent}
                  onChange={e => setEditContent(e.target.value)}
                  rows={5}
                  style={{ width: "100%", boxSizing: "border-box", resize: "vertical", fontFamily: "inherit" }}
                />
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                <button onClick={() => saveEdit(post.id)} style={{
                  fontSize: 13, fontWeight: 500, color: "#E1F5EE",
                  background: "#085041", border: "none",
                  borderRadius: "var(--border-radius-md)", padding: "7px 16px",
                  cursor: "pointer", fontFamily: "inherit"
                }}>Save</button>
                <button onClick={() => setEditingId(null)} style={{
                  fontSize: 13, color: "var(--color-text-secondary)",
                  background: "transparent",
                  border: "0.5px solid var(--color-border-secondary)",
                  borderRadius: "var(--border-radius-md)", padding: "7px 16px",
                  cursor: "pointer", fontFamily: "inherit"
                }}>Cancel</button>
              </div>
            </div>
          ) : (
            <>
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, marginBottom: 8 }}>
                <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.25rem", fontWeight: 400, margin: 0, color: "var(--color-text-primary)", lineHeight: 1.3 }}>{post.title}</h3>
                <div style={{ display: "flex", gap: 6, flexShrink: 0 }}>
                  <button onClick={() => startEdit(post)} style={{
                    width: 30, height: 30, borderRadius: "var(--border-radius-md)",
                    border: "0.5px solid var(--color-border-tertiary)", background: "transparent",
                    cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
                    color: "var(--color-text-secondary)"
                  }} title="Edit">
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                      <path d="M9 2l2 2-7 7H2v-2l7-7z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <button onClick={() => deletePost(post.id)} style={{
                    width: 30, height: 30, borderRadius: "var(--border-radius-md)",
                    border: "0.5px solid var(--color-border-tertiary)", background: "transparent",
                    cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
                    color: "var(--color-text-secondary)"
                  }} title="Delete">
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                      <path d="M2 3.5h9M5 3.5V2h3v1.5M5.5 6v4M7.5 6v4M3 3.5l.5 7h6l.5-7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
              <p style={{ fontSize: 13.5, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: 0, whiteSpace: "pre-wrap", fontWeight: 300 }}>{post.content}</p>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default PostList;