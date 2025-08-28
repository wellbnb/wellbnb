import React, { useState } from "react";

type SlideOneData = {
  name: string;
  email: string;
  city: string;
  country: string;
  phone: string;
};

const trainingFormats = [
  "Yoga Instruction",
  "Sound Healing",
  "Energy Healing",
  "Life Coaching",
  "Retreat Facilitator",
];

type SlideTwoData = string[];

type FormState = {
  slide: number;
  one: SlideOneData;
  two: SlideTwoData;
  three: string; // Will store the date string
  submitting: boolean;
  submitted: boolean;
};

export default function ConciergeInterestForm() {
  const [state, setState] = useState<FormState>({
    slide: 1,
    one: {
      name: "",
      email: "",
      city: "",
      country: "",
      phone: "",
    },
    two: [],
    three: "",
    submitting: false,
    submitted: false,
  });

  const nextSlide = () =>
    setState((s) => ({ ...s, slide: Math.min(3, s.slide + 1) }));
  const prevSlide = () =>
    setState((s) => ({ ...s, slide: Math.max(1, s.slide - 1) }));

  const handleSlideOneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState((s) => ({
      ...s,
      one: { ...s.one, [name]: value },
    }));
  };

  const handleFormatToggle = (format: string) => {
    setState((s) => ({
      ...s,
      two: s.two.includes(format)
        ? s.two.filter((f) => f !== format)
        : [...s.two, format],
    }));
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState((s) => ({ ...s, three: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState((s) => ({ ...s, submitting: true }));

    const payload = {
      data: {
        Timestamp: new Date().toISOString(),
        Name: state.one.name,
        Email: state.one.email,
        City: state.one.city,
        Country: state.one.country,
        Phone: state.one.phone,
        TrainingFormats: state.two.join(", "),
        StartDate: state.three,
      },
    };

    try {
      const response = await fetch("https://sheetdb.io/api/v1/6n99zhtk7na4l", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        setState((s) => ({
          ...s,
          submitting: false,
          submitted: true,
        }));
      } else {
        alert("There was an error submitting the form. Please try again.");
        setState((s) => ({ ...s, submitting: false }));
      }
    } catch (err) {
      alert("There was an error submitting the form. Please try again.");
      setState((s) => ({ ...s, submitting: false }));
    }
  };

  if (state.submitted) {
    return (
      <div
        style={{
          background: "#2d1a32",
          color: "white",
          borderRadius: 18,
          padding: 32,
          textAlign: "center",
          margin: "40px auto",
          maxWidth: 420,
        }}
      >
        <h3 style={{ marginBottom: 16 }}>Thank you!</h3>
        <p>
          Your interest in becoming a WellBnB Concierge has been received. We’ll
          be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        background: "#2d1a32",
        color: "white",
        borderRadius: 18,
        padding: 32,
        margin: "40px auto",
        maxWidth: 480,
        boxShadow: "0 2px 16px rgba(0,0,0,0.11)",
      }}
    >
      {/* Slide Controls */}
      <div style={{ marginBottom: 24, textAlign: "center" }}>
        <span
          style={{
            display: "inline-block",
            width: 12,
            height: 12,
            borderRadius: "50%",
            background: state.slide === 1 ? "#a86fd6" : "#7962b7",
            margin: "0 4px",
            opacity: 0.8,
          }}
        />
        <span
          style={{
            display: "inline-block",
            width: 12,
            height: 12,
            borderRadius: "50%",
            background: state.slide === 2 ? "#a86fd6" : "#7962b7",
            margin: "0 4px",
            opacity: 0.8,
          }}
        />
        <span
          style={{
            display: "inline-block",
            width: 12,
            height: 12,
            borderRadius: "50%",
            background: state.slide === 3 ? "#a86fd6" : "#7962b7",
            margin: "0 4px",
            opacity: 0.8,
          }}
        />
      </div>

      {/* Slide 1 */}
      {state.slide === 1 && (
        <>
          <h3 style={{ textAlign: "center", marginBottom: 20 }}>
            Your Details
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <input
              name="name"
              value={state.one.name}
              onChange={handleSlideOneChange}
              required
              placeholder="Name"
              style={inputStyle}
            />
            <input
              name="email"
              value={state.one.email}
              onChange={handleSlideOneChange}
              required
              type="email"
              placeholder="Email"
              style={inputStyle}
            />
            <input
              name="city"
              value={state.one.city}
              onChange={handleSlideOneChange}
              required
              placeholder="City"
              style={inputStyle}
            />
            <input
              name="country"
              value={state.one.country}
              onChange={handleSlideOneChange}
              required
              placeholder="Country"
              style={inputStyle}
            />
            <input
              name="phone"
              value={state.one.phone}
              onChange={handleSlideOneChange}
              required
              placeholder="Phone"
              style={inputStyle}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: 28,
            }}
          >
            <button
              type="button"
              onClick={nextSlide}
              style={nextBtnStyle}
              disabled={
                !state.one.name ||
                !state.one.email ||
                !state.one.city ||
                !state.one.country ||
                !state.one.phone
              }
            >
              Next
            </button>
          </div>
        </>
      )}

      {/* Slide 2 */}
      {state.slide === 2 && (
        <>
          <h3 style={{ textAlign: "center", marginBottom: 20 }}>
            Which formats would you like to be trained in?
          </h3>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              justifyContent: "center",
              marginBottom: 24,
            }}
          >
            {trainingFormats.map((format) => (
              <button
                key={format}
                type="button"
                onClick={() => handleFormatToggle(format)}
                style={{
                  padding: "10px 20px",
                  borderRadius: 16,
                  border: "none",
                  background: state.two.includes(format)
                    ? "linear-gradient(90deg, #a86fd6 0%, #e0b3ff 100%)"
                    : "#4a2b56",
                  color: "white",
                  fontWeight: 600,
                  fontSize: 15,
                  cursor: "pointer",
                  boxShadow: state.two.includes(format)
                    ? "0 2px 8px rgba(0,0,0,0.17)"
                    : "0 1px 2px rgba(0,0,0,0.08)",
                  transition: "background .15s, box-shadow .15s",
                  outline: "none",
                }}
              >
                {format}
              </button>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 16,
            }}
          >
            <button type="button" onClick={prevSlide} style={backBtnStyle}>
              Back
            </button>
            <button
              type="button"
              onClick={nextSlide}
              style={nextBtnStyle}
              disabled={state.two.length === 0}
            >
              Next
            </button>
          </div>
        </>
      )}

      {/* Slide 3 */}
      {state.slide === 3 && (
        <>
          <h3 style={{ textAlign: "center", marginBottom: 16 }}>
            When are you looking to start?
          </h3>
          <input
            type="date"
            value={state.three}
            onChange={handleDateChange}
            required
            style={inputStyle}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 28,
            }}
          >
            <button type="button" onClick={prevSlide} style={backBtnStyle}>
              Back
            </button>
            <button
              type="submit"
              style={submitBtnStyle}
              disabled={state.submitting || !state.three}
            >
              {state.submitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </>
      )}
    </form>
  );
}

const inputStyle: React.CSSProperties = {
  padding: "12px 16px",
  fontSize: 16,
  borderRadius: 10,
  border: "1px solid #a86fd6",
  background: "#f7f0fc",
  color: "#251529",
  outline: "none",
  fontFamily: "inherit",
};

const nextBtnStyle: React.CSSProperties = {
  background: "linear-gradient(90deg, #a86fd6 0%, #e0b3ff 100%)",
  color: "white",
  border: "none",
  borderRadius: 14,
  padding: "11px 36px",
  fontWeight: 700,
  fontSize: 16,
  cursor: "pointer",
  boxShadow: "0 1px 4px rgba(0,0,0,0.13)",
  marginLeft: 8,
};

const backBtnStyle: React.CSSProperties = {
  background: "#4a2b56",
  color: "white",
  border: "none",
  borderRadius: 14,
  padding: "11px 28px",
  fontWeight: 600,
  fontSize: 15,
  cursor: "pointer",
  boxShadow: "0 1px 3px rgba(0,0,0,0.11)",
  marginRight: 8,
};

const submitBtnStyle: React.CSSProperties = {
  background: "linear-gradient(90deg, #a86fd6 0%, #e0b3ff 100%)",
  color: "white",
  border: "none",
  borderRadius: 14,
  padding: "11px 32px",
  fontWeight: 700,
  fontSize: 16,
  cursor: "pointer",
  boxShadow: "0 2px 8px rgba(0,0,0,0.14)",
  marginLeft: 8,
};
