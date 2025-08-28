import React from "react";
import NavBar from "../components/NavBar";

export default function SettingsPage() {
  return (
    <div
      style={{
        background: "#251529",
        minHeight: "100vh",
        color: "white",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <NavBar />
      <div style={{ padding: 32, maxWidth: 900, margin: "0 auto" }}>
        <h1>Settings</h1>
        <p>
          Manage your account settings, notification preferences, and privacy
          options here.
        </p>
        {/* Add settings controls and forms here */}
      </div>
    </div>
  );
}
