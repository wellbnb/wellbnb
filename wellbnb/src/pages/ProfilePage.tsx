import React, { useState } from "react";

export default function ProfilePage() {
  // Simulating backend-provided profile data (including isConcierge)
  const [profile, setProfile] = useState({
    name: "Your Name",
    email: "you@email.com",
    phone: "",
    bio: "",
    avatar: "",
    emailVerified: false,
    phoneVerified: false,
    isConcierge: true, // <-- Assigned by Wellbnb, not editable by the user
  });
  const [editing, setEditing] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const url = URL.createObjectURL(e.target.files[0]);
      setProfile((prev) => ({ ...prev, avatar: url }));
    }
  };

  return (
    <div
      style={{
        maxWidth: 500,
        margin: "40px auto",
        background: "#fff",
        borderRadius: 16,
        boxShadow: "0 4px 32px #0002",
        padding: 32,
        fontFamily: "Inter, sans-serif",
      }}
    >
      <h1
        style={{ textAlign: "center", marginBottom: 24, fontFamily: "inherit" }}
      >
        Profile
      </h1>

      {/* Profile Photo and Concierge Badge */}
      <div
        style={{ textAlign: "center", marginBottom: 24, position: "relative" }}
      >
        <img
          src={profile.avatar || "https://www.gravatar.com/avatar/?d=mp"}
          alt="Profile"
          style={{
            width: 96,
            height: 96,
            borderRadius: "50%",
            objectFit: "cover",
            border: "2px solid #eee",
            marginBottom: 8,
          }}
        />
        {/* Concierge Badge - display only, not editable */}
        {profile.isConcierge && (
          <div
            style={{
              display: "inline-block",
              background: "linear-gradient(90deg, #a86fd6 0%, #e0b3ff 100%)",
              color: "white",
              borderRadius: 12,
              padding: "4px 12px",
              fontWeight: 700,
              fontSize: 14,
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              top: 82,
              boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
              fontFamily: "inherit",
              letterSpacing: 0.5,
              zIndex: 1,
            }}
          >
            Concierge
            <span
              style={{ marginLeft: 7, verticalAlign: "middle" }}
              role="img"
              aria-label="Star"
            >
              ⭐
            </span>
          </div>
        )}
        {editing && (
          <div>
            <input type="file" accept="image/*" onChange={handleAvatarChange} />
          </div>
        )}
      </div>

      {/* Profile Fields */}
      <div style={{ marginBottom: 16 }}>
        <label style={{ fontFamily: "inherit" }}>Name:</label>
        <input
          style={{
            width: "100%",
            margin: "4px 0 12px 0",
            fontFamily: "inherit",
          }}
          name="name"
          value={profile.name}
          disabled={!editing}
          onChange={handleChange}
        />
        <label style={{ fontFamily: "inherit" }}>Email:</label>
        <input
          style={{
            width: "100%",
            margin: "4px 0 12px 0",
            fontFamily: "inherit",
          }}
          name="email"
          value={profile.email}
          disabled={!editing}
          onChange={handleChange}
        />
        <label style={{ fontFamily: "inherit" }}>Phone:</label>
        <input
          style={{
            width: "100%",
            margin: "4px 0 12px 0",
            fontFamily: "inherit",
          }}
          name="phone"
          value={profile.phone}
          disabled={!editing}
          onChange={handleChange}
        />
        <label style={{ fontFamily: "inherit" }}>Bio/About:</label>
        <textarea
          style={{
            width: "100%",
            margin: "4px 0 12px 0",
            resize: "vertical",
            fontFamily: "inherit",
          }}
          name="bio"
          value={profile.bio}
          disabled={!editing}
          onChange={handleChange}
        />
      </div>

      {/* Verification/Linking */}
      <div style={{ marginBottom: 24 }}>
        <div>
          <strong style={{ fontFamily: "inherit" }}>Email:</strong>{" "}
          {profile.emailVerified ? "Verified" : "Not verified"}
          {!profile.emailVerified && editing && (
            <button style={{ marginLeft: 12, fontFamily: "inherit" }}>
              Verify
            </button>
          )}
        </div>
        <div>
          <strong style={{ fontFamily: "inherit" }}>Phone:</strong>{" "}
          {profile.phoneVerified ? "Verified" : "Not verified"}
          {!profile.phoneVerified && editing && (
            <button style={{ marginLeft: 12, fontFamily: "inherit" }}>
              Verify
            </button>
          )}
        </div>
      </div>

      {/* Social Account Linking */}
      <div style={{ marginBottom: 24 }}>
        <label style={{ fontFamily: "inherit" }}>Link Accounts:</label>
        <div>
          <button style={{ marginRight: 8, fontFamily: "inherit" }}>
            Link Google
          </button>
          <button style={{ marginRight: 8, fontFamily: "inherit" }}>
            Link Facebook
          </button>
          <button style={{ fontFamily: "inherit" }}>Link Apple</button>
        </div>
      </div>

      {/* Edit/Save Button */}
      <div style={{ textAlign: "center" }}>
        {editing ? (
          <button
            style={{ fontFamily: "inherit" }}
            onClick={() => setEditing(false)}
          >
            Save
          </button>
        ) : (
          <button
            style={{ fontFamily: "inherit" }}
            onClick={() => setEditing(true)}
          >
            Edit Profile
          </button>
        )}
      </div>
    </div>
  );
}
