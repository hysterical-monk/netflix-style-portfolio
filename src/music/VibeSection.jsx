export default function VibeSection({ title, items }) {
  if (!items || items.length === 0) return null;

  return (
    <div style={{ marginBottom: "40px" }}>
      <h2 style={{ marginBottom: "14px" }}>{title}</h2>

      <div
        style={{
          display: "flex",
          gap: "16px",
          overflowX: "auto",
          paddingBottom: "10px",
        }}
      >
        {items.map(song => (
          <div
            key={song.id}
            style={{
              minWidth: "160px",
              background: "#111",
              borderRadius: "10px",
              cursor: "pointer",
              padding: "10px",
            }}
          >
            <img
              src={song.cover}
              alt={song.title}
              style={{
                width: "100%",
                height: "160px",
                objectFit: "cover",
                borderRadius: "8px",
                marginBottom: "8px",
              }}
            />
            <div style={{ fontWeight: "bold" }}>{song.title}</div>
            <div style={{ fontSize: "0.85rem", opacity: 0.7 }}>
              {song.artist}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}