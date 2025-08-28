import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import wellIcon from "../assets/well_icon.png";

// Example options (customize as needed)
const DESTINATIONS = [
  "—",
  "United States",
  "Asia",
  "Central America",
  "South America",
  "Western Europe",
  "Eastern Europe",
  "India",
];
const DATE_FLEX_OPTIONS = [
  "—",
  "Exact",
  "+/- 1 day",
  "+/- 3 days",
  "1 week",
  "Flexible",
];
const WELLNESS_PERKS = [
  "Spa Access",
  "Yoga Classes",
  "Massage",
  "Nutrition Consult",
  "Meditation",
  "Sound Healing",
  "Retreat Credit",
];

interface BookingModalProps {
  open: boolean;
  onClose: () => void;
  userId?: string;
  userEmail?: string;
}

interface BookingFormState {
  destination: string;
  checkIn: string;
  checkOut: string;
  dateFlex: string;
  adults: number;
  children: number;
  infants: number;
  pets: number;
  wellnessPerks: string[];
  liveConcierge: boolean;
}

function BookingModal({ open, onClose, userId, userEmail }: BookingModalProps) {
  const [form, setForm] = useState<BookingFormState>({
    destination: "",
    checkIn: "",
    checkOut: "",
    dateFlex: "",
    adults: 1,
    children: 0,
    infants: 0,
    pets: 0,
    wellnessPerks: [],
    liveConcierge: false,
  });

  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]:
        type === "number" ||
        name === "adults" ||
        name === "children" ||
        name === "infants" ||
        name === "pets"
          ? Number(value)
          : value,
    }));
  };

  const handleWellnessPerksChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const options = e.target.options;
    const selected: string[] = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selected.push(options[i].value);
      }
    }
    setForm((prev) => ({
      ...prev,
      wellnessPerks: selected,
    }));
  };

  const handleToggle = () =>
    setForm((prev) => ({ ...prev, liveConcierge: !prev.liveConcierge }));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const params = new URLSearchParams({
      destination: form.destination,
      checkIn: form.checkIn,
      checkOut: form.checkOut,
      dateFlex: form.dateFlex,
      adults: form.adults.toString(),
      children: form.children.toString(),
      infants: form.infants.toString(),
      pets: form.pets.toString(),
      wellnessPerks: form.wellnessPerks.join(","),
      liveConcierge: form.liveConcierge ? "1" : "0",
    });
    onClose();
    navigate(`/search-results?${params.toString()}`);
  };

  if (!open) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0,0,0,0.55)",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClose}
    >
      <form
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit}
        style={{
          background: "#fff",
          borderRadius: 18,
          boxShadow: "0 4px 24px #0002",
          maxWidth: 350,
          width: "95%",
          padding: 18,
          position: "relative",
          fontFamily: "Inter, sans-serif",
          color: "#000",
          boxSizing: "border-box" as const,
        }}
      >
        <button
          type="button"
          onClick={onClose}
          style={{
            position: "absolute",
            top: 16,
            right: 20,
            background: "none",
            border: "none",
            fontSize: 26,
            cursor: "pointer",
            color: "#a86fd6",
          }}
          aria-label="Close"
        >
          ×
        </button>
        <h2
          style={{
            textAlign: "left",
            fontSize: 22,
            fontWeight: 700,
            marginBottom: 20,
            color: "#2f1436",
          }}
        >
          Where will you wander next?
        </h2>

        {/* Hidden fields for user info */}
        {userId && <input type="hidden" name="userId" value={userId} />}
        {userEmail && (
          <input type="hidden" name="userEmail" value={userEmail} />
        )}

        {/* Destination */}
        <label style={labelStyle}>
          Destination
          <select
            name="destination"
            value={form.destination}
            onChange={handleChange}
            required
            style={selectStyle}
          >
            <option value="">—</option>
            {DESTINATIONS.filter((d) => d !== "—").map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </label>

        {/* Check-in/Check-out */}
        <div style={{ display: "flex", gap: 10 }}>
          <label style={{ ...labelStyle, flex: 1 }}>
            Check-in Date
            <input
              name="checkIn"
              type="date"
              required
              value={form.checkIn}
              onChange={handleChange}
              style={inputStyle}
            />
          </label>
          <label style={{ ...labelStyle, flex: 1 }}>
            Check-out Date
            <input
              name="checkOut"
              type="date"
              required
              value={form.checkOut}
              onChange={handleChange}
              style={inputStyle}
            />
          </label>
        </div>

        {/* Date Flexibility */}
        <label style={labelStyle}>
          Date Flexibility
          <select
            name="dateFlex"
            value={form.dateFlex}
            onChange={handleChange}
            style={selectStyle}
          >
            {DATE_FLEX_OPTIONS.map((f) => (
              <option key={f} value={f === "—" ? "" : f}>
                {f}
              </option>
            ))}
          </select>
        </label>

        {/* Guest counts */}
        <div style={{ display: "flex", gap: 8 }}>
          <label style={{ ...labelStyle, flex: 1 }}>
            Adults
            <input
              name="adults"
              type="number"
              min={1}
              max={20}
              required
              value={form.adults}
              onChange={handleChange}
              style={inputStyle}
            />
          </label>
          <label style={{ ...labelStyle, flex: 1 }}>
            Children
            <input
              name="children"
              type="number"
              min={0}
              max={20}
              required
              value={form.children}
              onChange={handleChange}
              style={inputStyle}
            />
          </label>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <label style={{ ...labelStyle, flex: 1 }}>
            Infants
            <input
              name="infants"
              type="number"
              min={0}
              max={10}
              required
              value={form.infants}
              onChange={handleChange}
              style={inputStyle}
            />
          </label>
          <label style={{ ...labelStyle, flex: 1 }}>
            Pets
            <input
              name="pets"
              type="number"
              min={0}
              max={5}
              required
              value={form.pets}
              onChange={handleChange}
              style={inputStyle}
            />
          </label>
        </div>

        {/* Wellness Perks */}
        <label style={labelStyle}>
          Wellness Perks
          <select
            name="wellnessPerks"
            value={form.wellnessPerks}
            onChange={handleWellnessPerksChange}
            style={{ ...selectStyle, height: 70 }}
            multiple
          >
            {WELLNESS_PERKS.map((wp) => (
              <option key={wp} value={wp}>
                {wp}
              </option>
            ))}
          </select>
          <span
            style={{
              fontSize: 12,
              color: "#555",
              display: "block",
              marginTop: 2,
            }}
          >
            Hold Ctrl (Windows) or Command (Mac) to select multiple
          </span>
        </label>

        {/* Live Concierge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: 12,
            marginBottom: 12,
          }}
        >
          <span style={{ fontWeight: 500, color: "#251529", flex: 1 }}>
            Live Concierge
          </span>
          <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <input
              type="checkbox"
              checked={form.liveConcierge}
              onChange={handleToggle}
              style={{
                width: 34,
                height: 18,
                accentColor: "#a86fd6",
                cursor: "pointer",
              }}
            />
            <span
              style={{
                display: "inline-block",
                width: 26,
                height: 14,
                background: form.liveConcierge ? "#a86fd6" : "#e0e0e0",
                borderRadius: 10,
                position: "relative",
                transition: "background 0.2s",
              }}
            >
              <span
                style={{
                  display: "block",
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: "#fff",
                  position: "absolute",
                  left: form.liveConcierge ? 11 : 2,
                  top: 2,
                  boxShadow: "0 1px 4px #0002",
                  transition: "left 0.2s",
                }}
              />
            </span>
          </label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          style={{
            background: "#a86fd6",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            padding: "12px 0",
            fontSize: 16,
            fontWeight: 600,
            cursor: "pointer",
            width: "100%",
            marginTop: 8,
            marginBottom: 4,
          }}
        >
          Enjoy Your Travels!
        </button>
        <div style={{ textAlign: "center", marginTop: 8 }}>
          <a
            href="https://wellbnb.glide.page/dl/book"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#a86fd6",
              textDecoration: "underline",
              fontSize: 13,
            }}
          >
            Or book on our full site
          </a>
        </div>
      </form>
    </div>
  );
}

const labelStyle: React.CSSProperties = {
  display: "block",
  fontWeight: 500,
  color: "#251529",
  marginBottom: 6,
  marginTop: 10,
};

const inputStyle: React.CSSProperties = {
  borderRadius: 8,
  border: "1px solid #ddd",
  padding: "7px 9px",
  fontSize: 14,
  outline: "none",
  background: "#f7f5fa",
  marginTop: 4,
  width: "100%",
  boxSizing: "border-box",
};

const selectStyle: React.CSSProperties = {
  ...inputStyle,
  minHeight: 30,
  marginTop: 4,
};

export default function TravelPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div
      style={{
        background: "#251529",
        minHeight: "100vh",
        color: "white",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <BookingModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <div style={{ padding: 2, maxWidth: 900, margin: "0 auto" }}>
        <img
          src={wellIcon}
          alt="WellBnB Icon"
          style={{
            display: "block",
            margin: "32px auto 0 auto",
            width: 210,
            height: 65,
            objectFit: "contain",
            boxShadow: "0 2px 8px rgba(0,0,0,0.13)",
          }}
        />
        <div style={{ textAlign: "center", maxWidth: 900, margin: "0 auto" }}>
          <h2>Wandering well to go?</h2>
          <p>
            Pack your bags for a getaway that feels good—explore our exclusive
            selection of wellness-focused home stays, resorts, and hotels!
          </p>
        </div>
        <div
          style={{
            background: "#2f1436",
            borderRadius: 16,
            padding: 24,
            marginTop: 24,
            boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
          }}
        >
          <div style={{ marginBottom: 20 }}>
            <input
              type="text"
              placeholder="Search stays, resorts, or destinations..."
              style={{
                width: "100%",
                padding: "12px 16px",
                borderRadius: 8,
                border: "none",
                fontSize: 18,
                fontFamily: "inherit",
                background: "#fff",
                color: "#251529",
                outline: "none",
                boxSizing: "border-box",
              }}
              onFocus={() => setModalOpen(true)}
              readOnly
            />
            <div style={{ textAlign: "right", marginTop: 8 }}>
              <a
                href="https://wellbnb.glide.page/dl/book"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#a86fd6",
                  textDecoration: "underline",
                  fontSize: 15,
                }}
              >
                Book on our full site
              </a>
            </div>
          </div>
          <div style={{ display: "grid", gap: 16 }}>
            <button
              style={{
                background: "#5b3f75",
                padding: "16px",
                borderRadius: 8,
                border: "none",
                color: "#fff",
                fontSize: 18,
                cursor: "pointer",
                transition: "background 0.2s",
              }}
            >
              Home Stays
            </button>
            <button
              style={{
                background: "#5b3f75",
                padding: "16px",
                borderRadius: 8,
                border: "none",
                color: "#fff",
                fontSize: 18,
                cursor: "pointer",
                transition: "background 0.2s",
              }}
            >
              Resorts
            </button>
            <button
              style={{
                background: "#5b3f75",
                padding: "16px",
                borderRadius: 8,
                border: "none",
                color: "#fff",
                fontSize: 18,
                cursor: "pointer",
                transition: "background 0.2s",
              }}
            >
              Hotels
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
