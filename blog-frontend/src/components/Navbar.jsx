import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const token = localStorage.getItem("token");
  const username = token ? JSON.parse(atob(token.split(".")[1])).sub : null;

  const logout = () => {
    if (window.confirm("Logout?")) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
  };

  return (
    <div className="floating-nav">
      <div className="page-container">
        <div style={{
          display: "flex", flexWrap: "wrap", alignItems: "center",
          justifyContent: "space-between", gap: 12,
          background: "var(--color-background-primary)",
          border: "0.5px solid var(--color-border-tertiary)",
          borderRadius: 26, padding: "12px 20px"
        }}>
          <Link to="/" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
            <div style={{
              width: 40, height: 40, borderRadius: 12,
              background: "#04342C",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: "'DM Serif Display', serif", fontSize: 18,
              color: "#9FE1CB", fontWeight: 400, flexShrink: 0
            }}>B</div>
            <div>
              <p style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.25rem", fontWeight: 400, color: "var(--color-text-primary)", margin: 0, lineHeight: 1.2 }}>Blogscape</p>
              <p style={{ fontSize: 11.5, color: "var(--color-text-secondary)", margin: 0, fontWeight: 300 }}>Write clearly. Publish beautifully.</p>
            </div>
          </Link>

          <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
            {token && (
              <span style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                fontSize: 12, color: "var(--color-text-secondary)",
                border: "0.5px solid var(--color-border-secondary)",
                borderRadius: 99, padding: "4px 12px"
              }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#1D9E75", display: "inline-block" }} />
                {username}
              </span>
            )}

            <Link to="/" style={{ fontSize: 13.5, color: "var(--color-text-secondary)", textDecoration: "none", padding: "4px 10px" }}>Home</Link>

            {!token ? (
              <>
                <Link to="/login" style={{ fontSize: 13.5, color: "var(--color-text-secondary)", textDecoration: "none", padding: "4px 10px" }}>Login</Link>
                <Link to="/register" style={{
                  fontSize: 13.5, fontWeight: 500, color: "#E1F5EE",
                  background: "#085041", borderRadius: "var(--border-radius-md)",
                  padding: "7px 16px", textDecoration: "none"
                }}>Create account</Link>
              </>
            ) : (
              <button onClick={logout} style={{
                fontSize: 13.5, color: "var(--color-text-secondary)",
                background: "transparent",
                border: "0.5px solid var(--color-border-secondary)",
                borderRadius: "var(--border-radius-md)",
                padding: "7px 16px", cursor: "pointer", fontFamily: "inherit"
              }}>Logout</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;