import React from "react";
import { NavLink } from "react-router-dom";

const tabs = [
  { label: "FITNESS", path: "/fitness" },
  { label: "YOGA", path: "/yoga" },
  { label: "VIBE", path: "/vibe" },
  { label: "WELL", path: "/well" },
  { label: "SUPPORT", path: "/support" },
];

export default function TabBar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "center",
        background: "#f2f2f2",
        borderBottom: "1px solid #ccc",
      }}
    >
      {tabs.map((tab) => (
        <NavLink
          key={tab.path}
          to={tab.path}
          style={({ isActive }) => ({
            padding: "16px 24px",
            textDecoration: "none",
            color: isActive ? "#0057b7" : "#333",
            fontWeight: isActive ? "bold" : "normal",
          })}
        >
          {tab.label}
        </NavLink>
      ))}
    </nav>
  );
}
