import React, { useState } from "react";

interface BookingModalProps {
  open: boolean;
  onClose: () => void;
  userId: string;
  userEmail: string;
}

export default function BookingModal({
  open,
  onClose,
  userId,
  userEmail,
}: BookingModalProps) {
  // Example state for form fields
  const [message, setMessage] = useState("");

  // Typed handleSubmit function
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Example: You can put your submission logic here
    // For example, send the booking details to your API
    // fetch('/api/book', { method: 'POST', body: JSON.stringify({ userId, userEmail, message }) })

    alert(
      `Booking submitted!\nUser ID: ${userId}\nEmail: ${userEmail}\nMessage: ${message}`
    );

    // Close the modal after submission
    onClose();
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
          maxWidth: 416,
          width: "78.4%",
          padding: 28.8,
          position: "relative",
          fontFamily: "Inter, sans-serif",
          color: "#000",
        }}
      >
        <h2>Book Now</h2>
        <div>
          <label>
            Your Email:
            <input
              type="email"
              value={userEmail}
              disabled
              style={{ width: "100%", marginBottom: 12 }}
            />
          </label>
        </div>
        <div>
          <label>
            Message:
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Add a note..."
              style={{ width: "100%", minHeight: 60, marginBottom: 12 }}
            />
          </label>
        </div>
        <button type="submit" style={{ marginRight: 10 }}>
          Submit
        </button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
}
