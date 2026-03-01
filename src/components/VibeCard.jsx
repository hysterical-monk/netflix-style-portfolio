export default function VibeCard({ song }) {
  return (
    <div
      style={{
        minWidth: "180px",
        height: "180px",
        borderRadius: "12px",
        backgroundImage: `url(${song.cover})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        cursor: "pointer",
        position: "relative",
        flexShrink: 0,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(0,0,0,.8), rgba(0,0,0,.2))",
          borderRadius: "12px",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: "10px",
          left: "10px",
          right: "10px",
          color: "#fff",
          fontSize: "14px",
        }}
      >
        <div style={{ fontWeight: "600" }}>{song.title}</div>
        <div style={{ opacity: 0.7 }}>{song.artist}</div>
      </div>
    </div>
  );
}