import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = () => {
    setError("");
    axios.post("http://localhost:8081/api/auth/register", { username, password })
      .then(() => setSuccess(true))
      .catch(() => setError("Registration failed. Please try again."));
  };

  return (
    <div className="page-container py-8">
      <div className="auth-grid">
        <div className="auth-hero" style={{
          background: "#1a0a04",
          borderRadius: "var(--border-radius-lg)",
          padding: "2.5rem",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          overflow: "hidden"
        }}>
          <span style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            fontSize: 11, fontWeight: 500, letterSpacing: "0.12em",
            textTransform: "uppercase", color: "#FAC775",
            border: "0.5px solid #412402", borderRadius: 99,
            padding: "4px 12px", width: "fit-content", marginBottom: "1.5rem"
          }}>Start publishing</span>

          <h1 style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "2.4rem", fontWeight: 400, lineHeight: 1.15,
            color: "#FAEEDA", margin: "0 0 1rem", maxWidth: "18ch"
          }}>
            Build a blog that feels <em style={{ color: "#FAC775" }}>worth reading.</em>
          </h1>
          <p style={{ fontSize: 14, lineHeight: 1.7, color: "#FAC775", fontWeight: 300, maxWidth: "36ch", margin: "0 0 2rem" }}>
            Create your account and step into a workspace designed for thoughtful publishing and a better first impression.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: "auto" }}>
            {["Personal posts tied to your account", "Simple editing and clean reading layout", "A polished interface from day one"].map(item => (
              <div key={item} style={{
                border: "0.5px solid #412402", borderRadius: "var(--border-radius-md)",
                background: "rgba(255,255,255,0.04)", padding: "10px 14px",
                fontSize: 13, color: "#FAC775", fontWeight: 300
              }}>{item}</div>
            ))}
          </div>
        </div>

        <div className="auth-card" style={{
          background: "var(--color-background-primary)",
          border: "0.5px solid var(--color-border-tertiary)",
          borderRadius: "var(--border-radius-lg)",
          padding: "2.5rem"
        }}>
          <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "#854F0B" }}>Create account</span>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "2rem", fontWeight: 400, margin: "0.5rem 0 0.75rem", color: "var(--color-text-primary)" }}>
            Join Blogscape
          </h2>
          <p style={{ fontSize: 13.5, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 2rem", fontWeight: 300 }}>
            Set up your account and start sharing articles in a cleaner, more professional writing space.
          </p>

          {success ? (
            <div style={{
              textAlign: "center", padding: "2rem 0"
            }}>
              <p style={{ fontSize: 24, fontFamily: "'DM Serif Display', serif", color: "var(--color-text-primary)", margin: "0 0 0.5rem" }}>You're in.</p>
              <p style={{ fontSize: 13.5, color: "var(--color-text-secondary)", margin: "0 0 1.5rem" }}>Account created successfully.</p>
              <Link to="/login" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "#633806", color: "#FAEEDA", borderRadius: "var(--border-radius-md)",
                padding: "10px 20px", fontSize: 13.5, fontWeight: 500, textDecoration: "none"
              }}>Sign in →</Link>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {error && (
                <div style={{
                  fontSize: 13, color: "var(--color-text-danger)",
                  background: "var(--color-background-danger)",
                  border: "0.5px solid var(--color-border-danger)",
                  borderRadius: "var(--border-radius-md)",
                  padding: "8px 12px"
                }}>{error}</div>
              )}
              <div>
                <label style={{ display: "block", fontSize: 11, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-text-secondary)", marginBottom: 6 }}>Username</label>
                <input
                  placeholder="Choose a username"
                  onChange={e => setUsername(e.target.value)}
                  style={{ width: "100%", boxSizing: "border-box" }}
                />
              </div>
              <div>
                <label style={{ display: "block", fontSize: 11, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-text-secondary)", marginBottom: 6 }}>Password</label>
                <input
                  type="password"
                  placeholder="Choose a password"
                  onChange={e => setPassword(e.target.value)}
                  style={{ width: "100%", boxSizing: "border-box" }}
                />
              </div>
              <button onClick={handleRegister} style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                background: "#633806", color: "#FAEEDA", border: "none",
                borderRadius: "var(--border-radius-md)", padding: "10px 20px",
                fontSize: 13.5, fontWeight: 500, cursor: "pointer", marginTop: 4,
                width: "100%", fontFamily: "inherit"
              }}>
                Create account →
              </button>
            </div>
          )}

          {!success && (
            <p style={{ marginTop: "1.5rem", fontSize: 13, color: "var(--color-text-secondary)" }}>
              Already have an account?{" "}
              <Link to="/login" style={{ color: "#854F0B", fontWeight: 500, textDecoration: "none" }}>
                Sign in
              </Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Register;