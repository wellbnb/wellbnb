import React, { useState } from "react";
import wellbnbSupportAvatar from "../assets/wellbnb_support_avatar.png";

// Demo/mock messages for illustration
const mockConversations = [
  {
    id: 1,
    userName: "Samantha (Concierge)",
    userAvatar: "https://randomuser.me/api/portraits/women/68.jpg",
    lastMessage:
      "Looking forward to your Bali retreat! Let me know your flight details ✈️",
    lastTime: "2h ago",
    unread: true,
    messages: [
      {
        fromMe: false,
        body: "Looking forward to your Bali retreat! Let me know your flight details ✈️",
        time: "2h ago",
      },
      {
        fromMe: true,
        body: "Thank you! I will send them shortly.",
        time: "1h ago",
      },
    ],
  },
  {
    id: 2,
    userName: "WellBnB Support",
    userAvatar: wellbnbSupportAvatar, // uses the attached image
    lastMessage: "Your payment was received. Welcome to WellBnB!",
    lastTime: "1d ago",
    unread: false,
    messages: [
      {
        fromMe: false,
        body: "Your payment was received. Welcome to WellBnB!",
        time: "1d ago",
      },
    ],
  },
  {
    id: 3,
    userName: "John (Retreat Host)",
    userAvatar: "https://randomuser.me/api/portraits/men/11.jpg",
    lastMessage: "Hi! Can you confirm your check-in time?",
    lastTime: "3d ago",
    unread: true,
    messages: [
      {
        fromMe: false,
        body: "Hi! Can you confirm your check-in time?",
        time: "3d ago",
      },
    ],
  },
];

const inboxFont = { fontFamily: "Inter, sans-serif" };

export default function InboxPage() {
  const [selected, setSelected] = useState<number | null>(
    mockConversations[0]?.id || null
  );
  const [conversations, setConversations] = useState(mockConversations);
  const [messageInput, setMessageInput] = useState("");

  const activeConv = conversations.find((c) => c.id === selected);

  function handleSendMessage() {
    if (!messageInput.trim() || !activeConv) return;
    setConversations((convs) =>
      convs.map((c) =>
        c.id === activeConv.id
          ? {
              ...c,
              messages: [
                ...c.messages,
                { fromMe: true, body: messageInput, time: "Now" },
              ],
              lastMessage: messageInput,
              lastTime: "Now",
              unread: false,
            }
          : c
      )
    );
    setMessageInput("");
  }

  return (
    <div>
      <div style={{ padding: 32, maxWidth: 900, margin: "0 auto" }}>
        <p style={{ textAlign: "center" }}>
          Welcome to your WellBnb Inbox! Here you can view and manage your
          messages with WellBnB hosts, concierges, and retreat leaders.
        </p>
      </div>
      <div
        style={{
          ...inboxFont,
          minHeight: "80vh",
          background: "#faf7fc",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: 0,
        }}
      >
        {/* Sidebar */}
        <div
          style={{
            width: 300, // Reduced width for sidebar
            minWidth: 0,
            minHeight: 600,
            background: "#fff",
            borderRadius: 20,
            boxShadow: "0 4px 32px #0001",
            margin: 32,
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            border: "1px solid #f3e7fa",
          }}
        >
          <div
            style={{
              padding: "24px 16px 10px 16px",
              borderBottom: "1px solid #f3e7fa",
            }}
          >
            <h2
              style={{ margin: 0, fontSize: 22, fontWeight: 800, ...inboxFont }}
            >
              Inbox
            </h2>
          </div>
          <div style={{ flex: 1, overflowY: "auto" }}>
            {conversations.map((conv) => (
              <div
                key={conv.id}
                onClick={() => setSelected(conv.id)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "14px 18px",
                  background: selected === conv.id ? "#f6e6fa" : "#fff",
                  borderLeft:
                    selected === conv.id
                      ? "4px solid #a86fd6"
                      : "4px solid transparent",
                  cursor: "pointer",
                  borderBottom: "1px solid #f3e7fa",
                  position: "relative",
                  transition: "background 0.2s",
                }}
              >
                <img
                  src={conv.userAvatar}
                  alt={conv.userName}
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "2px solid #eee",
                  }}
                />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      fontWeight: conv.unread ? 800 : 500,
                      fontSize: 15,
                      color: "#24162c",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      ...inboxFont,
                    }}
                  >
                    {conv.userName}
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      color: conv.unread ? "#a86fd6" : "#7a6a88",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      ...inboxFont,
                    }}
                  >
                    {conv.lastMessage}
                  </div>
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: "#b4a6c8",
                    minWidth: 50,
                    textAlign: "right",
                  }}
                >
                  {conv.lastTime}
                  {conv.unread && (
                    <span
                      style={{
                        display: "inline-block",
                        background: "#a86fd6",
                        color: "#fff",
                        borderRadius: "50%",
                        width: 10,
                        height: 10,
                        marginLeft: 7,
                      }}
                    ></span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Chat window */}
        {activeConv && (
          <div
            style={{
              width: 440,
              minWidth: 0,
              minHeight: 600,
              background: "#fff",
              borderRadius: 20,
              boxShadow: "0 4px 32px #0001",
              margin: 32,
              marginLeft: 0,
              display: "flex",
              flexDirection: "column",
              border: "1px solid #f3e7fa",
            }}
          >
            <div
              style={{
                padding: "18px 26px",
                borderBottom: "1px solid #f3e7fa",
                display: "flex",
                alignItems: "center",
                gap: 16,
              }}
            >
              <img
                src={activeConv.userAvatar}
                alt={activeConv.userName}
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "2px solid #eee",
                }}
              />
              <div>
                <div style={{ fontWeight: 700, fontSize: 16, ...inboxFont }}>
                  {activeConv.userName}
                </div>
                <div style={{ fontSize: 12, color: "#b4a6c8" }}>Active now</div>
              </div>
            </div>
            <div
              style={{
                flex: 1,
                overflowY: "auto",
                padding: "26px 24px 0 24px",
                background: "#faf7fc",
                display: "flex",
                flexDirection: "column",
                gap: 14,
              }}
            >
              {activeConv.messages.map((msg, i) => (
                <div
                  key={i}
                  style={{
                    alignSelf: msg.fromMe ? "flex-end" : "flex-start",
                    background: msg.fromMe
                      ? "linear-gradient(90deg, #a86fd6 0%, #e0b3ff 100%)"
                      : "#ece1f7",
                    color: msg.fromMe ? "#fff" : "#24162c",
                    borderRadius: 16,
                    padding: "10px 16px",
                    maxWidth: "75%",
                    fontSize: 15,
                    fontFamily: "inherit",
                    boxShadow: msg.fromMe
                      ? "0 2px 8px rgba(168,111,214,0.07)"
                      : "0 2px 8px rgba(170,170,170,0.07)",
                  }}
                >
                  {msg.body}
                  <span
                    style={{
                      display: "block",
                      fontSize: 11,
                      color: "#b4a6c8",
                      marginTop: 4,
                      textAlign: msg.fromMe ? "right" : "left",
                    }}
                  >
                    {msg.time}
                  </span>
                </div>
              ))}
            </div>
            <div
              style={{
                padding: 18,
                borderTop: "1px solid #f3e7fa",
                background: "#fff",
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <input
                type="text"
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSendMessage();
                }}
                placeholder="Type your message..."
                style={{
                  flex: 1,
                  border: "1px solid #e1d1e8",
                  borderRadius: 14,
                  fontSize: 16,
                  padding: "12px 14px",
                  outline: "none",
                  fontFamily: "inherit",
                  background: "#faf7fc",
                }}
              />
              <button
                onClick={handleSendMessage}
                disabled={!messageInput.trim()}
                style={{
                  background:
                    "linear-gradient(90deg, #a86fd6 0%, #e0b3ff 100%)",
                  color: "#fff",
                  border: "none",
                  borderRadius: 14,
                  fontWeight: 700,
                  fontSize: 16,
                  padding: "12px 22px",
                  cursor: messageInput.trim() ? "pointer" : "not-allowed",
                  fontFamily: "inherit",
                  opacity: messageInput.trim() ? 1 : 0.7,
                  boxShadow: "0 2px 8px rgba(168,111,214,0.07)",
                }}
              >
                Send
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
