import { useState } from "react";

const craftIdeas = [
  {
    craft: "Block Printing",
    emoji: "🎨",
    bg: "linear-gradient(135deg, #1B3A4B 0%, #2E5266 100%)",
    accent: "#E8DCC8",
    problem: "Artisans spend weeks developing new patterns through trial and error. Younger generations find the learning curve discouraging.",
    aiSolution: "AI-assisted pattern generation where artisans sketch rough ideas and AI suggests geometric variations rooted in traditional Rajasthani motifs. The artisan picks, tweaks, and carves the final block by hand.",
    humanTouch: "The carved wooden block, the press of hand on fabric, the imperfection of ink — all stay human. AI just shortens the blank-page problem.",
    icon: "◫"
  },
  {
    craft: "Pottery & Ceramics",
    emoji: "🏺",
    bg: "linear-gradient(135deg, #8B4513 0%, #A0522D 100%)",
    accent: "#F5E6D3",
    problem: "Kiln temperatures and clay compositions are learned through decades of trial. One wrong firing can destroy weeks of work.",
    aiSolution: "Sensor-equipped kilns paired with AI that learns each artisan's clay preferences, local humidity, and firing history. Predicts optimal temperature curves and flags risk before a batch is ruined.",
    humanTouch: "The potter's wheel, the shaping, the glazing choices — all remain in the artisan's hands. AI handles the invisible chemistry.",
    icon: "◯"
  },
  {
    craft: "Textile Weaving",
    emoji: "🧵",
    bg: "linear-gradient(135deg, #4A2040 0%, #6B3A5D 100%)",
    accent: "#F0D9E5",
    problem: "Complex traditional patterns like Patola or Bandhani take months. Market demand shifts faster than artisans can adapt designs.",
    aiSolution: "AI tools that translate trending color palettes and contemporary design preferences into weavable pattern drafts while respecting the structural constraints of handlooms.",
    humanTouch: "Every thread is still passed by hand. The rhythm, tension, and texture of handwoven fabric can't be replicated. AI just helps the artisan meet the market halfway.",
    icon: "≋"
  },
  {
    craft: "Woodwork & Carving",
    emoji: "🪵",
    bg: "linear-gradient(135deg, #3E2723 0%, #5D4037 100%)",
    accent: "#EFEBE9",
    problem: "Master carvers hold intricate design knowledge that's hard to document. When they pass, entire design vocabularies can disappear.",
    aiSolution: "3D scanning and AI cataloging of master carvers' work to build living design libraries. Apprentices can study patterns, zoom into chisel techniques, and learn from masters across geographies.",
    humanTouch: "The chisel, the grain reading, the split-second decisions about where wood wants to be cut — that stays with the carver. AI becomes the archive, not the artist.",
    icon: "▤"
  },
  {
    craft: "Fashion & Craft Design",
    emoji: "👗",
    bg: "linear-gradient(135deg, #1A237E 0%, #283593 100%)",
    accent: "#E8EAF6",
    problem: "Rural artisans create extraordinary work but have zero visibility in urban or global markets. Middlemen capture most of the value.",
    aiSolution: "AI-powered marketplace matching: artisans photograph their work, AI tags it by technique, region, and style, then connects them directly with designers, boutiques, and buyers worldwide.",
    humanTouch: "The craft stays rooted in the village. The artisan sets the price. AI removes the distance between maker and buyer without removing the maker from the equation.",
    icon: "✦"
  },
  {
    craft: "Blue Pottery",
    emoji: "💙",
    bg: "linear-gradient(135deg, #0D47A1 0%, #1565C0 100%)",
    accent: "#E3F2FD",
    problem: "Jaipur's blue pottery tradition uses a fragile quartz-based process. Quality is inconsistent and breakage rates during firing are high.",
    aiSolution: "Computer vision that inspects pieces pre-firing to detect micro-fractures invisible to the eye. Reduces waste, saves weeks of artisan labor, and makes small workshops financially viable.",
    humanTouch: "The mixing, molding, and hand-painting of each piece remains entirely artisanal. AI just catches what the eye can't before it's too late.",
    icon: "◆"
  }
];

const principles = [
  { title: "AI as tool, not replacement", desc: "The artisan decides. AI assists." },
  { title: "Preserve the imperfection", desc: "Handmade means unique. That's the point." },
  { title: "Bridge, don't bypass", desc: "Connect artisans to markets without cutting them out." },
  { title: "Archive living knowledge", desc: "Traditions shouldn't die with their masters." }
];

export default function AICraftsExplorer() {
  const [activeCard, setActiveCard] = useState(null);
  const [activeTab, setActiveTab] = useState("problem");

  return (
    <div style={{
      minHeight: "100vh",
      background: "#F5F0E8",
      fontFamily: "'Georgia', 'Times New Roman', serif",
      color: "#2C1810",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Subtle texture overlay */}
      <div style={{
        position: "fixed",
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B8A88A' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        pointerEvents: "none",
        zIndex: 0
      }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 800, margin: "0 auto", padding: "40px 20px" }}>
        
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div style={{
            display: "inline-block",
            padding: "6px 16px",
            background: "#C17817",
            color: "#FFF8F0",
            borderRadius: 2,
            fontSize: 11,
            letterSpacing: 3,
            textTransform: "uppercase",
            marginBottom: 20,
            fontFamily: "'Courier New', monospace"
          }}>
            #AdvanceArtsUsingAI
          </div>
          
          <h1 style={{
            fontSize: "clamp(28px, 5vw, 42px)",
            fontWeight: 400,
            lineHeight: 1.2,
            margin: "0 0 16px 0",
            color: "#1B0F0A"
          }}>
            Where AI Meets the Artisan's Hand
          </h1>
          
          <p style={{
            fontSize: 16,
            color: "#6B5744",
            maxWidth: 520,
            margin: "0 auto",
            lineHeight: 1.7
          }}>
            Six ideas for how technology can serve craftsmanship
            without replacing what makes it human.
          </p>

          <div style={{
            width: 60, height: 2, background: "#C17817",
            margin: "24px auto 0"
          }} />
        </div>

        {/* Principles bar */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: 12,
          marginBottom: 48,
          padding: "20px 24px",
          background: "rgba(193, 120, 23, 0.08)",
          borderRadius: 4,
          border: "1px solid rgba(193, 120, 23, 0.15)"
        }}>
          {principles.map((p, i) => (
            <div key={i} style={{ textAlign: "center", padding: "8px 4px" }}>
              <div style={{
                fontSize: 12,
                fontWeight: 700,
                color: "#8B5E34",
                letterSpacing: 0.5,
                marginBottom: 4
              }}>{p.title}</div>
              <div style={{
                fontSize: 12,
                color: "#8B7355",
                lineHeight: 1.4
              }}>{p.desc}</div>
            </div>
          ))}
        </div>

        {/* Craft Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {craftIdeas.map((craft, idx) => {
            const isOpen = activeCard === idx;
            return (
              <div
                key={idx}
                onClick={() => {
                  setActiveCard(isOpen ? null : idx);
                  setActiveTab("problem");
                }}
                style={{
                  borderRadius: 6,
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  boxShadow: isOpen
                    ? "0 8px 32px rgba(44, 24, 16, 0.15)"
                    : "0 2px 8px rgba(44, 24, 16, 0.06)",
                  transform: isOpen ? "scale(1.01)" : "scale(1)"
                }}
              >
                {/* Card Header */}
                <div style={{
                  background: craft.bg,
                  padding: "20px 24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between"
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    <span style={{
                      fontSize: 28,
                      width: 48,
                      height: 48,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "rgba(255,255,255,0.12)",
                      borderRadius: 4
                    }}>{craft.emoji}</span>
                    <div>
                      <div style={{
                        color: craft.accent,
                        fontSize: 18,
                        fontWeight: 400
                      }}>{craft.craft}</div>
                      <div style={{
                        color: "rgba(255,255,255,0.5)",
                        fontSize: 12,
                        fontFamily: "'Courier New', monospace",
                        marginTop: 2
                      }}>tap to explore</div>
                    </div>
                  </div>
                  <span style={{
                    color: craft.accent,
                    fontSize: 24,
                    transition: "transform 0.3s ease",
                    transform: isOpen ? "rotate(45deg)" : "rotate(0deg)"
                  }}>+</span>
                </div>

                {/* Expanded Content */}
                {isOpen && (
                  <div style={{
                    background: "#FFFCF7",
                    padding: "0"
                  }}>
                    {/* Tabs */}
                    <div style={{
                      display: "flex",
                      borderBottom: "1px solid #E8DCC8"
                    }}>
                      {[
                        { key: "problem", label: "The Problem" },
                        { key: "ai", label: "AI Can Help" },
                        { key: "human", label: "What Stays Human" }
                      ].map(tab => (
                        <button
                          key={tab.key}
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveTab(tab.key);
                          }}
                          style={{
                            flex: 1,
                            padding: "14px 12px",
                            border: "none",
                            background: activeTab === tab.key ? "#FFFCF7" : "#F5F0E8",
                            borderBottom: activeTab === tab.key ? "2px solid #C17817" : "2px solid transparent",
                            color: activeTab === tab.key ? "#C17817" : "#8B7355",
                            fontSize: 13,
                            fontWeight: activeTab === tab.key ? 700 : 400,
                            cursor: "pointer",
                            fontFamily: "'Georgia', serif",
                            transition: "all 0.2s ease"
                          }}
                        >
                          {tab.label}
                        </button>
                      ))}
                    </div>

                    {/* Tab Content */}
                    <div style={{
                      padding: "24px",
                      fontSize: 15,
                      lineHeight: 1.8,
                      color: "#3E2A1E",
                      minHeight: 80
                    }}>
                      {activeTab === "problem" && craft.problem}
                      {activeTab === "ai" && craft.aiSolution}
                      {activeTab === "human" && craft.humanTouch}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div style={{
          textAlign: "center",
          marginTop: 56,
          padding: "32px 20px",
          borderTop: "1px solid rgba(193, 120, 23, 0.2)"
        }}>
          <div style={{
            fontSize: 22,
            color: "#1B0F0A",
            marginBottom: 12,
            fontStyle: "italic"
          }}>
            The best technology disappears into the work.
          </div>
          <p style={{
            fontSize: 14,
            color: "#8B7355",
            maxWidth: 480,
            margin: "0 auto",
            lineHeight: 1.7
          }}>
            Inspired by a visit to IICD Jaipur, where local artisans teach,
            learn, and keep India's craft traditions alive.
          </p>
          <div style={{
            marginTop: 20,
            fontSize: 11,
            color: "#B8A88A",
            letterSpacing: 2,
            fontFamily: "'Courier New', monospace",
            textTransform: "uppercase"
          }}>
            #AdvanceArtsUsingAI · #AIForNonTraditionalIndustries
          </div>
        </div>
      </div>
    </div>
  );
}
