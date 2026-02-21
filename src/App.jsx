import React, { useState } from "react";

export default function App() {
  const [tab, setTab] = useState("Home");

  return (
    <div style={{ background: "#0B0F14", color: "#E8EEF5", minHeight: "100vh", padding: 20 }}>
      <h1>Discipline AI</h1>
      <nav style={{ marginBottom: 20 }}>
        {["Home", "Workouts", "Tips", "AI"].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            style={{
              marginRight: 10,
              padding: 8,
              borderRadius: 8,
              background: tab === t ? "#2563EB" : "#121A23",
              color: "#E8EEF5",
              border: "none"
            }}
          >
            {t}
          </button>
        ))}
      </nav>

      {tab === "Home" && <div>🏠 Cut Logger content goes here</div>}
      {tab === "Workouts" && <div>💪 Push/Pull workouts content goes here</div>}
      {tab === "Tips" && <div>📋 Tips content goes here</div>}
      {tab === "AI" && <div>🤖 AI Assistant goes here</div>}
    </div>
  );
}
