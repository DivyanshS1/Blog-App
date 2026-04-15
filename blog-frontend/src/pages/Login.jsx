import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    setError("");
    axios.post("http://localhost:8081/api/auth/login", { username, password })
      .then(res => {
        if (res.data !== "Invalid credentials") {
          localStorage.setItem("token", res.data);
          window.location.href = "/";
        } else {
          setError("Invalid username or password.");
        }
      })
      .catch(() => setError("Something went wrong. Please try again."));
  };

  return (
    <div className="page-container py-8">
      <div className="auth-grid">
        <div className="auth-hero" style={{
          background: "#04342C",
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
            textTransform: "uppercase", color: "#9FE1CB",
            border: "0.5px solid #085041", borderRadius: 99,
            padding: "4px 12px", width: "fit-content", marginBottom: "1.5rem"
          }}>Editorial workspace</span>

          <h1 style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "2.4rem", fontWeight: 400, lineHeight: 1.15,
            color: "#E1F5EE", margin: "0 0 1rem", maxWidth: "18ch"
          }}>
            Sign in to your <em style={{ color: "#9FE1CB" }}>writing studio.</em>
          </h1>
          <p style={{ fontSize: 14, lineHeight: 1.7, color: "#9FE1CB", fontWeight: 300, maxWidth: "36ch", margin: "0 0 2rem" }}>
            Pick up your drafts, manage published stories, and keep your blog polished from one calm dashboard.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: "auto" }}>
            {[["Fast", "Access posts and edit content without a cluttered UI."],
              ["Clean", "A focused experience that gives your writing room to breathe."]
            ].map(([title, desc]) => (
              <div key={title} style={{
                border: "0.5px solid #085041", borderRadius: "var(--border-radius-lg)",
                background: "rgba(255,255,255,0.04)", padding: "1rem"
              }}>
                <p style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.6rem", color: "#E1F5EE", margin: "0 0 6px" }}>{title}</p>
                <p style={{ fontSize: 12.5, color: "#9FE1CB", margin: 0, lineHeight: 1.6, fontWeight: 300 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="auth-card" style={{
          background: "var(--color-background-primary)",
          border: "0.5px solid var(--color-border-tertiary)",
          borderRadius: "var(--border-radius-lg)",
          padding: "2.5rem"
        }}>
          <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0F6E56" }}>Welcome back</span>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "2rem", fontWeight: 400, margin: "0.5rem 0 0.75rem", color: "var(--color-text-primary)" }}>
            Login to continue
          </h2>
          <p style={{ fontSize: 13.5, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 2rem", fontWeight: 300 }}>
            Use your account credentials to access your personal posts and publishing tools.
          </p>

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
                placeholder="Enter your username"
                onChange={e => setUsername(e.target.value)}
                style={{ width: "100%", boxSizing: "border-box" }}
              />
            </div>
            <div>
              <label style={{ display: "block", fontSize: 11, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-text-secondary)", marginBottom: 6 }}>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                onChange={e => setPassword(e.target.value)}
                style={{ width: "100%", boxSizing: "border-box" }}
              />
            </div>
            <button onClick={handleLogin} style={{
              display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
              background: "#085041", color: "#E1F5EE", border: "none",
              borderRadius: "var(--border-radius-md)", padding: "10px 20px",
              fontSize: 13.5, fontWeight: 500, cursor: "pointer", marginTop: 4,
              width: "100%", fontFamily: "inherit"
            }}>
              Sign in →
            </button>
          </div>

          <p style={{ marginTop: "1.5rem", fontSize: 13, color: "var(--color-text-secondary)" }}>
            New here?{" "}
            <Link to="/register" style={{ color: "#0F6E56", fontWeight: 500, textDecoration: "none" }}>
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;