import React from "react";
import { useNavigate } from "react-router-dom";
import CircularImageRow from "../components/CircularImageRow";
import ConciergeInterestForm from "../components/ConciergeInterestForm";
import wellLogo from "../assets/well_logo.png";
import baliImg from "../assets/bali.jpg";
import bowlsImg from "../assets/bowls.jpg";
import yoga1Img from "../assets/yoga1.jpg";
import thaiImg from "../assets/thai.jpg";
import tumiImg from "../assets/tumi.jpg";

const plans = [
  {
    name: "Wanderlust",
    price: "$0",
    desc: "No commitment, just wanderlusting. Pay per use to join access to trainings, and all WellBnB® yoga, fitness live and wellness archive videos.",
    cta: "Join Free!",
    link: "/travel", // Link to TravelPage
  },
  {
    name: "Mindful",
    price: "$9",
    desc: "Monthly subscription. Includes 10% off all bookings and trainings, free access to all WellBnB® yoga, fitness live and wellness archive videos.",
    cta: "Start Now!",
    link: "https://buy.stripe.com/4gM8wO5XTcYi0CN8gW0x201",
  },
  {
    name: "Holistic",
    price: "$19",
    desc: "Monthly subscription. Includes 15% off all bookings and trainings, free access to all WellBnB® yoga, fitness live and wellness archive videos.",
    cta: "Healthy Living!",
    link: "https://buy.stripe.com/8x29ASfyt6zU0CN9l00x202",
  },
  {
    name: "Longevity",
    price: "$29",
    desc: "Monthly subscription. Includes 25% off all bookings and trainings, free access to all WellBnB® yoga, fitness and wellness live and archive videos.",
    cta: "We've got you!",
    link: "https://buy.stripe.com/fZubJ02LHbUe1GR7cS0x200",
  },
];

const planButtonStyle: React.CSSProperties = {
  margin: "24px auto 0 auto",
  background: "linear-gradient(90deg, #a86fd6 0%, #e0b3ff 100%)",
  color: "white",
  border: "none",
  borderRadius: 16,
  padding: "16px 0",
  fontSize: 18,
  fontWeight: 600,
  cursor: "pointer",
  boxShadow: "0 2px 8px rgba(0,0,0,0.13)",
  display: "block",
  textAlign: "center",
  width: 160,
  whiteSpace: "normal",
  wordBreak: "break-word",
  textDecoration: "none",
};

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        background: "#251529",
        minHeight: "100vh",
        color: "white",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div style={{ padding: 1, maxWidth: 900, margin: "0 auto" }}>
        <img
          src={wellLogo}
          alt="WellBnB Logo"
          style={{
            display: "block",
            margin: "32px auto 0 auto",
            width: 200,
            height: 130,
            objectFit: "contain",
            boxShadow: "0 2px 8px rgba(0,0,0,0.13)",
          }}
        />
        <h1 style={{ textAlign: "center", marginTop: 24 }}>
          Welcome to WellBnB, where{" "}
          <span style={{ fontStyle: "italic" }}>Wellness meets Travel!</span>
        </h1>
        <p style={{ textAlign: "center", maxWidth: 700, margin: "18px auto" }}>
          You don’t have to pause your wellness practices when you’re on the
          road—we make it easy to stay balanced wherever you go. Our curated
          retreats, our WellBnB home stays, as well as our hand selected resort
          partners are prepared to keep you aligned, healthy, and inspired,
          wherever you go.
        </p>
        <div style={{ textAlign: "center", maxWidth: 700, margin: "0 auto" }}>
          With access to local Wellness Concierges, trained and certified by our
          WellBnB experts, you’ll be <i>in the know</i> as to the best wellness
          offerings and insider rituals in every city.
        </div>
        <p style={{ textAlign: "center", maxWidth: 700, margin: "18px auto" }}>
          Discover wellness-focused travel stays, retreats, and experiences with
          a WellBnb membership. Cancel anytime!
        </p>
        <h2
          style={{
            textAlign: "center",
            fontSize: "125%",
            fontWeight: "bold",
            margin: "32px 0",
          }}
        >
          Choose a plan below to get started:
        </h2>
        <div
          style={{
            display: "flex",
            gap: 32,
            marginTop: 32,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {plans.map((plan) => (
            <div
              key={plan.name}
              style={{
                background: "#3d233e",
                borderRadius: 24,
                padding: 20,
                minWidth: 120,
                maxWidth: 160,
                boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 32,
              }}
            >
              <h2 style={{ fontSize: 28, marginBottom: 12 }}>{plan.name}</h2>
              <div style={{ fontSize: 48, margin: "16px 0", fontWeight: 700 }}>
                {plan.price}
              </div>
              <div
                style={{
                  fontSize: 16,
                  minHeight: 120,
                  textAlign: "center",
                  marginBottom: 12,
                }}
              >
                {plan.desc}
              </div>
              {plan.name === "Wanderlust" ? (
                <button
                  onClick={() => navigate("/travel")}
                  style={{ ...planButtonStyle, margin: "14px auto 0 auto" }}
                >
                  {plan.cta}
                </button>
              ) : (
                <a
                  href={plan.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={planButtonStyle}
                >
                  {plan.cta}
                </a>
              )}
            </div>
          ))}
        </div>
        <p style={{ textAlign: "center", maxWidth: 700, margin: "18px auto" }}>
          WellBnB Concierges are trusted local guides who specialize in creating
          personalized wellness journeys tailored to your specific goals,
          preferences, and intentions.
        </p>
        <p style={{ textAlign: "center", maxWidth: 700, margin: "18px auto" }}>
          Each concierge is professionally trained by WellBnB to ensure a
          seamless, high-quality, and consistent guest experience—no matter
          where you travel.
        </p>
        <p style={{ textAlign: "center", maxWidth: 700, margin: "18px auto" }}>
          They know where the best of the best is offering services, and if
          there’s something outside of their certifications and expertise?
          They’ll connect you with the most respected wellness practitioners in
          the area — handpicked for quality, integrity, and alignment with your
          needs.
        </p>
        <p style={{ textAlign: "center", maxWidth: 700, margin: "18px auto" }}>
          From yoga and sound healing to massage, cold plunges, and spa rituals
          — they’re here to elevate your wellness.
        </p>
        <p style={{ textAlign: "center", maxWidth: 700, margin: "18px auto" }}>
          <b>Available Wellness Modalities:</b>
        </p>
        <p
          style={{ textAlign: "center", maxWidth: 700, margin: "18px auto" }}
        ></p>
        <ul style={{ maxWidth: 700, margin: "18px auto" }}>
          <li>Yoga</li>
          <li>Massage Spa Services (Facials, Scrubs, Manicures)</li>
          <li>Sauna + Cold Plunge</li>
          <li>Sound Healing</li>
          <li>Energy Healing</li>
          <li>Light + Laser Therapies</li>
        </ul>
        <p style={{ textAlign: "center", maxWidth: 700, margin: "18px auto" }}>
          ...or ask us specifically for what you're looking for, and we will
          find it for you!
        </p>
        <div style={{ margin: "30px 0" }}>
          <CircularImageRow
            images={[
              { src: baliImg, alt: "Concierge" },
              { src: bowlsImg, alt: "Sound Healing" },
              { src: yoga1Img, alt: "Yoga" },
              { src: thaiImg, alt: "Retreats" },
              { src: tumiImg, alt: "Spa" },
            ]}
          />
        </div>
        <h2
          style={{
            textAlign: "center",
            fontSize: "125%",
            fontWeight: "bold",
            margin: "32px 0",
          }}
        >
          Become a WellBnB Concierge!
        </h2>
        <p style={{ textAlign: "center", maxWidth: 700, margin: "18px auto" }}>
          At WellBnB, we’re building a global community of wellness enthusiasts
          who live to inspire and uplift. Whether you dream of becoming a yoga
          teacher, sculpt instructor, meditation guide, sound facilitator, or
          energy healer, we’ll give you the training and tools to grow.
        </p>
        <p style={{ textAlign: "center", maxWidth: 700, margin: "18px auto" }}>
          Our online trainings, offered once a month, make it easy to learn from
          anywhere—and connect you with like-minded souls around the world. Step
          into your purpose, expand your skills, and join our movement to bring
          wellness wherever people travel.
        </p>
        <p style={{ textAlign: "center", maxWidth: 700, margin: "18px auto" }}>
          Already trained? Let us know below! Whether you’re certified or just
          starting your journey, someone from WellBnB will connect with you soon
          and share everything you need to get started.
        </p>
        <p style={{ textAlign: "center" }}>
          Use the form below for details on becoming a WellBnB Concierge!
        </p>
        <div style={{ marginTop: 15 }}>
          <ConciergeInterestForm />
        </div>
      </div>
    </div>
  );
}
