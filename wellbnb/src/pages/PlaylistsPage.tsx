import React, { useState } from "react";
import { FaHeadphones } from "react-icons/fa";

// Example playlist data
interface Playlist {
  id: number;
  title: string;
  category: string;
  image: string;
  url: string;
}
const playlists: Playlist[] = [
  // ... your data unchanged ...
  {
    id: 1,
    title: "Morning Flow",
    category: "ZEN",
    image: "https://i.scdn.co/image/ab67616d0000b273b2cf3e9c8e4ebc7a67c6e5b8",
    url: "https://open.spotify.com/playlist/37i9dQZF1DX3PIPIT6lEg5",
  },
  {
    id: 2,
    title: "HIIT Energy",
    category: "WORKOUT",
    image: "https://i.scdn.co/image/ab67616d0000b2737a5d47b70b2a6d4f8c6b3d2f",
    url: "https://open.spotify.com/playlist/37i9dQZF1DX70RN3TfWWJh",
  },
  {
    id: 3,
    title: "Binaural Beats",
    category: "HZ",
    image: "https://i.scdn.co/image/ab67616d0000b273b1d1e3b3d5efb6e9d2a1e8f8",
    url: "https://open.spotify.com/playlist/37i9dQZF1DX9p24w9b6sD9",
  },
  {
    id: 4,
    title: "Deep House Party",
    category: "DEEP HOUSE",
    image: "https://i.scdn.co/image/ab67616d0000b273e7e7e7e7e7e7e7e7e7e7e7e7",
    url: "https://open.spotify.com/playlist/37i9dQZF1DX4dyzvuaRJ0n",
  },
  {
    id: 5,
    title: "Today's Top Hits",
    category: "POP",
    image: "https://i.scdn.co/image/ab67616d0000b27323b9b1c9b1e8f1e8a5a5a5a5",
    url: "https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M",
  },
  {
    id: 6,
    title: "80's Throwback",
    category: "80's",
    image: "https://i.scdn.co/image/ab67616d0000b2739a9b1a9b1c9b1e8f1e8a5a5a5",
    url: "https://open.spotify.com/playlist/37i9dQZF1DX4UtSsGT1Sbe",
  },
  {
    id: 7,
    title: "90's Hip Hop",
    category: "90's",
    image: "https://i.scdn.co/image/ab67616d0000b273b1c9b1e8f1e8a5a5a5a5a5a5",
    url: "https://open.spotify.com/playlist/37i9dQZF1DX186v583rmzp",
  },
  {
    id: 8,
    title: "Classic Hip Hop",
    category: "HIP HOP",
    image: "https://i.scdn.co/image/ab67616d0000b2736e6e6e6e6e6e6e6e6e6e6e6e",
    url: "https://open.spotify.com/playlist/37i9dQZF1DX48TTZL62Yht",
  },
  {
    id: 9,
    title: "Smooth R&B",
    category: "R&B",
    image: "https://i.scdn.co/image/ab67616d0000b273e4e4e4e4e4e4e4e4e4e4e4e4",
    url: "https://open.spotify.com/playlist/37i9dQZF1DX4SBhb3fqCJd",
  },
  {
    id: 10,
    title: "Country Gold",
    category: "COUNTRY",
    image: "https://i.scdn.co/image/ab67616d0000b273c7c7c7c7c7c7c7c7c7c7c7c7",
    url: "https://open.spotify.com/playlist/37i9dQZF1DX1lVhptIYRda",
  },
  {
    id: 11,
    title: "Motivation Mix",
    category: "INSPIRATIONAL",
    image: "https://i.scdn.co/image/ab67616d0000b273d5d5d5d5d5d5d5d5d5d5d5d5",
    url: "https://open.spotify.com/playlist/37i9dQZF1DWZuaBZEM9yww",
  },
];

const categories = [
  "WORKOUT",
  "ZEN",
  "HZ",
  "DEEP HOUSE",
  "POP",
  "80's",
  "90's",
  "HIP HOP",
  "R&B",
  "COUNTRY",
  "INSPIRATIONAL",
];

const accent = "#a86fd6";
const accentSecondary = "#e0b3ff";
const bgColor = "#faf7fc";
const sidebarColor = "#fff";

export default function PlaylistsPage() {
  const [search, setSearch] = useState<string>("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  // --- Fix for array .includes() errors: ensure correct types and compatibility ---
  // (If you still get errors, check your tsconfig.json "lib" option--should include ["es2016", "dom"])
  const filtered = playlists.filter(
    (p) =>
      (selectedCategories.length === 0 ||
        selectedCategories.indexOf(p.category) > -1) && // <-- use indexOf for maximum compatibility
      (p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.category.toLowerCase().includes(search.toLowerCase()))
  );

  function toggleCategory(cat: string) {
    setSelectedCategories((cats) =>
      cats.indexOf(cat) > -1 ? cats.filter((c) => c !== cat) : [...cats, cat]
    );
  }

  return (
    <div
      style={{
        background: bgColor,
        minHeight: "100vh",
        fontFamily: "Inter, sans-serif",
        padding: 0,
      }}
    >
      <div
        style={{
          maxWidth: 1000,
          margin: "0 auto",
          padding: 32,
        }}
      >
        <h1 style={{ display: "flex", alignItems: "center", gap: 10 }}>
          {/* FaHeadphones works as a JSX component with react-icons >= 4 and React >= 16.8 */}
          <FaHeadphones /> Playlists
        </h1>
        <p
          style={{
            color: "#666",
            fontSize: 18,
            textAlign: "center",
            marginBottom: 36,
          }}
        >
          Browse and discover WellBnb's curated playlists for any mood. Search
          or filter by category, and listen directly on Spotify!
        </p>
        {/* Search bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: 28,
          }}
        >
          <input
            type="text"
            value={search}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearch(e.target.value)
            }
            placeholder="Search playlists or categories..."
            style={{
              width: 360,
              padding: "13px 18px",
              borderRadius: 16,
              border: `1.5px solid ${accent}`,
              fontSize: 16,
              outline: "none",
              fontFamily: "inherit",
              background: "#fff",
              color: "#24162c",
              boxShadow: "0 2px 8px #a86fd610",
            }}
          />
        </div>
        {/* Category filters */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 14,
            marginBottom: 36,
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => toggleCategory(cat)}
              style={{
                background:
                  selectedCategories.indexOf(cat) > -1
                    ? `linear-gradient(90deg, ${accent} 0%, ${accentSecondary} 100%)`
                    : "#ece1f7",
                color: selectedCategories.indexOf(cat) > -1 ? "#fff" : accent,
                border: "none",
                borderRadius: 12,
                padding: "9px 22px",
                fontWeight: 700,
                fontSize: 15,
                fontFamily: "inherit",
                cursor: "pointer",
                transition: "background 0.15s",
                boxShadow:
                  selectedCategories.indexOf(cat) > -1
                    ? "0 2px 8px #a86fd630"
                    : "0 2px 8px #ece1f710",
                letterSpacing: 0.5,
              }}
            >
              {cat}
            </button>
          ))}
        </div>
        {/* Playlist grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 28,
          }}
        >
          {filtered.map((pl) => (
            <div
              key={pl.id}
              style={{
                background: sidebarColor,
                borderRadius: 18,
                boxShadow: "0 4px 32px #a86fd610",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                paddingBottom: 22,
                border: "1px solid #f3e7fa",
                transition: "box-shadow 0.2s",
              }}
            >
              <img
                src={pl.image}
                alt={pl.title}
                style={{
                  width: "100%",
                  height: 150,
                  objectFit: "cover",
                  borderTopLeftRadius: 18,
                  borderTopRightRadius: 18,
                  marginBottom: 16,
                }}
              />
              <div
                style={{
                  fontWeight: 700,
                  fontSize: 18,
                  textAlign: "center",
                  marginBottom: 7,
                  color: accent,
                  fontFamily: "inherit",
                  letterSpacing: 0.1,
                }}
              >
                {pl.title}
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: "#7a6a88",
                  marginBottom: 18,
                  fontWeight: 600,
                  letterSpacing: 0.8,
                  textTransform: "uppercase",
                }}
              >
                {pl.category}
              </div>
              <a
                href={pl.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: `linear-gradient(90deg, ${accent} 0%, ${accentSecondary} 100%)`,
                  color: "#fff",
                  border: "none",
                  borderRadius: 10,
                  padding: "9px 22px",
                  fontWeight: 700,
                  fontFamily: "inherit",
                  fontSize: 15,
                  textDecoration: "none",
                  boxShadow: "0 2px 8px #a86fd620",
                  display: "flex",
                  alignItems: "center",
                  gap: 7,
                  transition: "background 0.15s",
                }}
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 72 72"
                  style={{ marginRight: 4 }}
                >
                  <circle cx="36" cy="36" r="36" fill="#1DB954" />
                  <path
                    d="M52 49c-11-6-29-6-38 0"
                    stroke="#fff"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path
                    d="M49 42c-9-5-23-5-31 0"
                    stroke="#fff"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path
                    d="M46 35c-7-4-18-4-25 0"
                    stroke="#fff"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
                Open in Spotify
              </a>
            </div>
          ))}
          {filtered.length === 0 && (
            <div
              style={{
                gridColumn: "1 / -1",
                textAlign: "center",
                color: accent,
                fontWeight: 600,
                fontSize: 20,
                opacity: 0.8,
                marginTop: 60,
              }}
            >
              No playlists found for your search or filters.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
