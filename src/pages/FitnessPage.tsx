import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import { FaSearch } from "react-icons/fa";

// TODO: Replace with your actual Fitness Google Sheet CSV export URL
const GOOGLE_SHEET_CSV_URL =
  "https://docs.google.com/spreadsheets/d/YOUR_FITNESS_SHEET_ID/export?format=csv";

const FITNESS_TYPES = [
  "Run/Walk",
  "Sculpt",
  "Pilates",
  "HIIT",
  "Dance",
  "Strength",
];

type FitnessVideo = {
  id: string;
  title: string;
  url: string;
  type: string;
  duration: string;
  level: string;
  thumbnail: string;
};

export default function FitnessPage() {
  const [videos, setVideos] = useState<FitnessVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    Papa.parse(GOOGLE_SHEET_CSV_URL, {
      download: true,
      header: true,
      complete: (results) => {
        setVideos(results.data as FitnessVideo[]);
        setLoading(false);
      },
      error: () => setLoading(false),
    });
  }, []);

  const filteredVideos = videos.filter((video) => {
    const matchesSearch =
      video.title?.toLowerCase().includes(search.toLowerCase()) ||
      video.type?.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = !filter || video.type === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: "24px 8px 32px 8px",
      }}
    >
      {/* Search and Filters */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          marginBottom: 24,
        }}
      >
        <div style={{ flex: "0 0 65%", minWidth: 180, position: "relative" }}>
          <input
            type="text"
            placeholder="Search fitness videos..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: "100%",
              padding: "10px 40px 10px 14px",
              borderRadius: 8,
              border: "1px solid #dadada",
              fontSize: 17,
              boxShadow: "0 1px 4px #0001",
              outline: "none",
            }}
          />
          <FaSearch
            style={{
              position: "absolute",
              right: 14,
              top: 13,
              color: "#aaa",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            gap: 7,
            marginLeft: 16,
            marginTop: 8,
            flexWrap: "wrap",
          }}
        >
          {FITNESS_TYPES.map((type) => (
            <button
              key={type}
              onClick={() => setFilter(filter === type ? null : type)}
              style={{
                padding: "7px 18px",
                borderRadius: 24,
                border:
                  filter === type ? "2px solid #6f62f7" : "1px solid #ccc",
                background: filter === type ? "#edeaff" : "#f8f8f8",
                color: "#444",
                fontWeight: filter === type ? "bold" : "normal",
                cursor: "pointer",
                fontSize: 15.5,
                boxShadow: filter === type ? "0 2px 8px #6f62f71a" : undefined,
                transition: "all 0.18s",
              }}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Video Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 28,
        }}
      >
        {loading && (
          <div
            style={{
              gridColumn: "1/-1",
              textAlign: "center",
              color: "#aaa",
              fontSize: 20,
            }}
          >
            Loading...
          </div>
        )}
        {!loading && filteredVideos.length === 0 && (
          <div
            style={{
              gridColumn: "1/-1",
              textAlign: "center",
              color: "#aaa",
              fontSize: 18,
            }}
          >
            No videos found.
          </div>
        )}
        {filteredVideos.map((video) => (
          <div
            key={video.id}
            style={{
              background: "#fff",
              borderRadius: 14,
              boxShadow: "0 2px 10px 0 #0001",
              padding: 14,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              minHeight: 270,
              position: "relative",
              transition: "box-shadow 0.18s",
            }}
          >
            {/* Video Thumbnail or Video */}
            {expandedId === video.id ? (
              <div
                style={{
                  width: "100%",
                  aspectRatio: "16/9",
                  position: "relative",
                  marginBottom: 14,
                }}
              >
                <video
                  src={video.url}
                  controls
                  autoPlay
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    borderRadius: 8,
                    background: "#000",
                  }}
                />
              </div>
            ) : (
              <div
                style={{
                  width: "100%",
                  aspectRatio: "16/9",
                  background: "#f2f2f2",
                  borderRadius: 8,
                  overflow: "hidden",
                  marginBottom: 14,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  cursor: "pointer",
                }}
                onClick={() => setExpandedId(video.id)}
                title="Click to open video"
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                  onError={(e) =>
                    (e.currentTarget.src = "/default-thumbnail.png")
                  }
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: "rgba(60,60,60,0.13)",
                    color: "#fff",
                    fontSize: 13,
                    padding: "2px 10px",
                    textAlign: "right",
                    fontWeight: 500,
                    textShadow: "0 1px 4px #0005",
                  }}
                >
                  {video.duration}
                </div>
              </div>
            )}

            {/* Video Title */}
            <div
              style={{
                fontWeight: 600,
                fontSize: 17,
                textAlign: "center",
                marginBottom: 7,
                color: "#202040",
                minHeight: 22,
              }}
            >
              {video.title}
            </div>

            {/* Video info */}
            <div
              style={{
                fontSize: 14,
                color: "#5a5a6c",
                textAlign: "center",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <span>
                <b>Type:</b> {video.type}
              </span>
              <span>
                <b>Duration:</b> {video.duration}
              </span>
              <span>
                <b>Level:</b> {video.level}
              </span>
            </div>

            {/* Close button for expanded video */}
            {expandedId === video.id && (
              <button
                onClick={() => setExpandedId(null)}
                style={{
                  marginTop: 14,
                  padding: "7px 22px",
                  borderRadius: 7,
                  border: "none",
                  background: "#edeaff",
                  color: "#6f62f7",
                  fontWeight: "bold",
                  cursor: "pointer",
                  fontSize: 15,
                  boxShadow: "0 1px 2px #bcbcf51a",
                }}
              >
                Close
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
