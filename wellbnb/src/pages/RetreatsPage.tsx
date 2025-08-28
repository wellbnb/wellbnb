import React from "react";
import { useNavigate } from "react-router-dom";

// Full example data with all categories from previous replies
export const retreatCategories = [
  {
    name: "Detox Retreats",
    id: "detox",
    retreats: [
      {
        id: "detox1",
        title: "Bali Cleanse & Yoga",
        dates: "Oct 10–17, 2025",
        location: "Ubud, Bali",
        cover:
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
        highlight: "Detox, Yoga, Nutrition",
        price: "$2,500",
      },
      {
        id: "detox2",
        title: "Andes Detox Retreat",
        dates: "Jul 1–7, 2026",
        location: "Sacred Valley, Peru",
        cover:
          "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80",
        highlight: "Mountain, Cleanse, Hiking",
        price: "$3,000",
      },
      {
        id: "detox3",
        title: "Ibiza Juice & Yoga",
        dates: "Sep 8–14, 2026",
        location: "Ibiza, Spain",
        cover:
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
        highlight: "Juice, Yoga, Beach",
        price: "$2,800",
      },
    ],
  },
  {
    name: "Silent Retreats",
    id: "silent",
    retreats: [
      {
        id: "silent1",
        title: "Silence in the Sierra",
        dates: "Nov 5–12, 2025",
        location: "California, USA",
        cover:
          "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
        highlight: "Meditation, Mindfulness, Silence",
        price: "$1,200",
      },
      {
        id: "silent2",
        title: "Zen Mountain Silence",
        dates: "Jan 15–22, 2026",
        location: "Nagano, Japan",
        cover:
          "https://images.unsplash.com/photo-1465101178521-c1a9136a3fd7?auto=format&fit=crop&w=600&q=80",
        highlight: "Zen, Silence, Nature",
        price: "$2,100",
      },
      {
        id: "silent3",
        title: "Silent Forest Meditation",
        dates: "May 10–17, 2026",
        location: "Black Forest, Germany",
        cover:
          "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=600&q=80",
        highlight: "Forest, Meditation, Silence",
        price: "$1,600",
      },
    ],
  },
  {
    name: "Luxury Retreats",
    id: "luxury",
    retreats: [
      {
        id: "luxury1",
        title: "Maldives Mindful Escape",
        dates: "Feb 14–21, 2026",
        location: "Maldives",
        cover:
          "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80",
        highlight: "Luxury, Spa, Ocean",
        price: "$7,800",
      },
      {
        id: "luxury2",
        title: "Santorini Wellness Oasis",
        dates: "Jun 3–10, 2026",
        location: "Santorini, Greece",
        cover:
          "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=600&q=80",
        highlight: "Luxury, Sea, Yoga",
        price: "$6,500",
      },
      {
        id: "luxury3",
        title: "Swiss Alps Luxury Reset",
        dates: "Dec 1–8, 2025",
        location: "Zermatt, Switzerland",
        cover:
          "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
        highlight: "Detox, Alps, Spa",
        price: "$9,200",
      },
    ],
  },
  {
    name: "Writing Retreats",
    id: "writing",
    retreats: [
      {
        id: "writing1",
        title: "Writers' Haven Tuscany",
        dates: "May 1–7, 2026",
        location: "Tuscany, Italy",
        cover:
          "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=600&q=80",
        highlight: "Writing, Coaching, Inspiration",
        price: "$2,900",
      },
      {
        id: "writing2",
        title: "Celtic Words Retreat",
        dates: "Mar 10–17, 2026",
        location: "County Kerry, Ireland",
        cover:
          "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
        highlight: "Writing, History, Nature",
        price: "$2,600",
      },
      {
        id: "writing3",
        title: "Provence Creative Writing",
        dates: "Sep 10–17, 2026",
        location: "Provence, France",
        cover:
          "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
        highlight: "Writing, Lavender, Retreat",
        price: "$3,200",
      },
    ],
  },
  {
    name: "Women's Retreats",
    id: "women",
    retreats: [
      {
        id: "women1",
        title: "Goddess Gathering Sedona",
        dates: "Mar 8–14, 2026",
        location: "Sedona, AZ",
        cover:
          "https://images.unsplash.com/photo-1444065381814-865dc9da92c0?auto=format&fit=crop&w=600&q=80",
        highlight: "Empowerment, Sisterhood, Healing",
        price: "$2,200",
      },
      {
        id: "women2",
        title: "Sacred Feminine Bali",
        dates: "Apr 15–22, 2026",
        location: "Ubud, Bali",
        cover:
          "https://images.unsplash.com/photo-1465101178521-c1a9136a3fd7?auto=format&fit=crop&w=600&q=80",
        highlight: "Yoga, Sisterhood, Nature",
        price: "$2,700",
      },
      {
        id: "women3",
        title: "Wild Woman Retreat",
        dates: "Aug 1–7, 2026",
        location: "Rocky Mountains, USA",
        cover:
          "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=600&q=80",
        highlight: "Wilderness, Empowerment, Nature",
        price: "$2,300",
      },
    ],
  },
  {
    name: "Men's Retreats",
    id: "men",
    retreats: [
      {
        id: "men1",
        title: "Mountain Men Renewal",
        dates: "Apr 12–18, 2026",
        location: "Rocky Mountains, USA",
        cover:
          "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80",
        highlight: "Brotherhood, Strength, Nature",
        price: "$1,800",
      },
      {
        id: "men2",
        title: "Wild Roots Brotherhood",
        dates: "Sep 1–7, 2026",
        location: "British Columbia, Canada",
        cover:
          "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
        highlight: "Breathwork, Forest, Connection",
        price: "$2,200",
      },
      {
        id: "men3",
        title: "Desert Men's Circle",
        dates: "May 15–20, 2026",
        location: "Joshua Tree, CA",
        cover:
          "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
        highlight: "Men's Work, Nature, Mindfulness",
        price: "$2,000",
      },
    ],
  },
  {
    name: "Astrology Retreats",
    id: "astrology",
    retreats: [
      {
        id: "astro1",
        title: "Star Wisdom in Santorini",
        dates: "Sep 15–20, 2026",
        location: "Santorini, Greece",
        cover:
          "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
        highlight: "Astrology, Myth, Self-Discovery",
        price: "$2,800",
      },
      {
        id: "astro2",
        title: "Zodiac Soul Retreat",
        dates: "Jun 10–15, 2026",
        location: "Sedona, AZ",
        cover:
          "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=600&q=80",
        highlight: "Astrology, Meditation, Healing",
        price: "$2,400",
      },
      {
        id: "astro3",
        title: "Celestial Pathways",
        dates: "Jul 20–25, 2026",
        location: "Big Sur, CA",
        cover:
          "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
        highlight: "Astrology, Stars, Nature",
        price: "$2,650",
      },
    ],
  },
];

export default function RetreatsPage() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        padding: "32px 0",
        background: "#251529",
        minHeight: "100vh",
        fontFamily: "'Montserrat', 'Inter', sans-serif",
      }}
    >
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 14px" }}>
        <h1
          style={{
            textAlign: "center",
            fontWeight: 900,
            fontSize: "2.5rem",
            color: "#fff",
            marginBottom: 14,
            letterSpacing: "0.01em",
            textShadow: "0 2px 12px #3d233e",
          }}
        >
          Retreats
        </h1>
        <p
          style={{
            textAlign: "center",
            color: "#fff",
            fontSize: "1.18rem",
            maxWidth: 700,
            margin: "0 auto 22px auto", // Reduce bottom margin by 50%
            fontWeight: 500,
          }}
        >
          Discover our handpicked WellBnB retreats — designed to nourish,
          inspire, and connect you. Reserve your spot and begin your next
          transformation.
        </p>
        {retreatCategories.map((cat) => (
          <section key={cat.name} style={{ marginBottom: 40 }}>
            <h2
              onClick={() => navigate(`/retreats/category/${cat.id}`)}
              style={{
                color: "#fff",
                fontWeight: 900,
                fontSize: "1.2rem",
                margin: "28px 0 18px 0",
                letterSpacing: "0.02em",
                borderBottom: "2px solid #fff",
                display: "inline-block",
                paddingBottom: 3,
                cursor: "pointer",
                transition: "color 0.15s",
                textTransform: "uppercase",
              }}
            >
              {cat.name}
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 16,
                paddingBottom: 8,
              }}
            >
              {cat.retreats.slice(0, 3).map((r) => (
                <div
                  key={r.id}
                  onClick={() => navigate(`/retreats/category/${cat.id}`)}
                  style={{
                    background: "rgba(61,35,62,0.92)",
                    borderRadius: 14,
                    boxShadow: "0 4px 18px 0 rgba(120,64,160,0.10)",
                    border: "1.5px solid #fff",
                    cursor: "pointer",
                    overflow: "hidden",
                    color: "#fff",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "stretch",
                    minWidth: 0,
                  }}
                >
                  <div
                    style={{
                      height: 100,
                      width: "100%",
                      background: "#43215c",
                      overflow: "hidden",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={r.cover}
                      alt={r.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        filter: "brightness(0.92) saturate(1.07)",
                      }}
                    />
                  </div>
                  <div style={{ padding: "10px 10px 12px 10px", flex: 1 }}>
                    <div
                      style={{
                        fontWeight: 600,
                        color: "#fff",
                        fontSize: 11,
                        marginBottom: 3,
                      }}
                    >
                      {r.dates}
                    </div>
                    <div
                      style={{
                        fontWeight: 900,
                        color: "#fff",
                        fontSize: 14,
                        marginBottom: 2,
                        lineHeight: 1.1,
                      }}
                    >
                      {r.title}
                    </div>
                    <div
                      style={{
                        fontWeight: 500,
                        color: "#fff",
                        fontSize: 11,
                        marginBottom: 3,
                      }}
                    >
                      {r.location}
                    </div>
                    <div
                      style={{
                        fontWeight: 700,
                        color: "#fff",
                        fontSize: 11,
                        marginBottom: 4,
                        opacity: 0.85,
                      }}
                    >
                      {r.highlight}
                    </div>
                    <div
                      style={{
                        fontWeight: 900,
                        color: "#fff",
                        fontSize: 13,
                        marginTop: 0,
                      }}
                    >
                      {r.price}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
