import React from "react";
import { useNavigate } from "react-router-dom";

// Import your images here (replace with real paths)
import fitnessImg from "../assets/fitness_running_headphones.jpg";
import yogaImg from "../assets/yoga_hotel_room.jpg";
import meditationImg from "../assets/meditation_bed.jpg";
import soundHealingImg from "../assets/sound_bath.jpg";

const navButtons = [
  {
    label: "FITNESS",
    path: "/fitness",
    img: fitnessImg,
    imgAlt: "Woman running and listening to headphones",
  },
  {
    label: "YOGA",
    path: "/yoga",
    img: yogaImg,
    imgAlt: "Man practicing yoga in a hotel room",
  },
  {
    label: "MEDITATION",
    path: "/vibe",
    img: meditationImg,
    imgAlt: "Woman meditating on hotel bed",
  },
  {
    label: "SOUND HEALING",
    path: "/vibe",
    img: soundHealingImg,
    imgAlt: "Sound bath ceremony",
  },
];

export default function PracticePage() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        background: "#251529",
        minHeight: "100vh",
        color: "white",
        fontFamily: "Inter, sans-serif",
        padding: "0 0 40px 0",
      }}
    >
      <div style={{ maxWidth: 900, margin: "0 auto", paddingTop: 32 }}>
        {/* Centered header and paragraph */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            margin: "5px 0 32px 0",
          }}
        >
          <h2>Wellness in Motion: Stay Active Anywhere!</h2>
          <p style={{ maxWidth: 600 }}>
            Enjoy both live and archived video sessions across all your favorite
            wellness activities—anytime, anywhere! Explore workouts and
            experiences in fitness (including walks, runs, pilates, sculpt,
            strenght training, HIIT, and dance), yoga, meditation, and sound or
            energy healing. Whether you want to join a session in real-time or
            catch up at your own pace, we’ve got something for every journey.
          </p>
          <p style={{ maxWidth: 600 }}>
            Select a category below and let's flow on the go!
          </p>
        </div>
        {/* Navigation buttons with circle images */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 33,
            marginBottom: 36,
            flexWrap: "wrap",
          }}
        >
          {navButtons.map((btn) => (
            <div
              key={btn.label}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                cursor: "pointer",
                width: 144,
              }}
              onClick={() => navigate(btn.path)}
              tabIndex={0}
              role="button"
              onKeyPress={(e) => {
                if (e.key === "Enter" || e.key === " ") navigate(btn.path);
              }}
              aria-label={btn.label}
            >
              <img
                src={btn.img}
                alt={btn.imgAlt}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: "50%",
                  objectFit: "cover",
                  marginBottom: 14,
                  boxShadow: "0 2px 12px rgba(0,0,0,0.14)",
                  border: "3px solid #5b3f75",
                  transition: "transform 0.15s",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = "scale(1.06)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
              <button
                style={{
                  background: "#5b3f75",
                  color: "#fff",
                  border: "none",
                  borderRadius: 8,
                  padding: "18px 18px",
                  fontSize: 18,
                  fontFamily: "inherit",
                  cursor: "pointer",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.13)",
                  transition: "background 0.2s, transform 0.1s",
                  letterSpacing: 1,
                  fontWeight: 500,
                  width: "100%",
                  marginTop: 0,
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(btn.path);
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.background = "#764f96")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.background = "#5b3f75")
                }
              >
                {btn.label}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
