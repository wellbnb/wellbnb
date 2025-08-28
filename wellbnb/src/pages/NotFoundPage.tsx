import React from "react";

export default function NotFoundPage() {
  return (
    <div
      style={{
        background: "#251529",
        minHeight: "100vh",
        color: "white",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div
        style={{
          padding: 32,
          maxWidth: 900,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h1>404 – Page Not Found</h1>
        <p>Sorry, the page you’re looking for doesn’t exist.</p>
        <p>Please check the URL or navigate back to the home page.</p>
      </div>
    </div>
  );
}
