import React from "react";
import NavBar from "../components/NavBar";

export default function HelpPage() {
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
        <h1>Help</h1>
        <p>
          Need assistance? You’re in the right place! Browse our FAQs, reach out
          to support, or find helpful resources below.
        </p>
        {/* Add FAQ, contact form, or support information here */}
      </div>
    </div>
  );
}
