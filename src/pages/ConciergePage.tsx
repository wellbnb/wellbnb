import React from "react";
import NavBar from "../components/NavBar";

export default function ConciergePage() {
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
        <h1>Concierge</h1>
        <p>
          Welcome to the Concierge page! Discover personalized wellness
          journeys, access local experts, and let us help you elevate your stay
          with WellBnB.
        </p>
        {/* Add additional concierge-related content here */}
      </div>
    </div>
  );
}
