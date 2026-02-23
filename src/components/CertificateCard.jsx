export default function CertificateCard({ cert, onClick }) {
  return (
    <div
      onClick={onClick}
      className="
        group relative
        h-[180px] md:h-[240px]
        rounded-xl
        bg-[#141414]
        cursor-pointer
        flex items-center justify-center
        text-center
        px-6
        transition-transform duration-300
        hover:scale-[1.05]
      "
    >
      {/* RED GLOW */}
      <div
        className="
          absolute -inset-3
          rounded-2xl
          bg-red-600/40
          blur-2xl
          opacity-0
          group-hover:opacity-100
          transition
          pointer-events-none
          -z-10
        "
      />

      {/* OPEN ICON */}
      <div
        className="
          absolute top-3 right-3
          text-gray-400
          text-sm md:text-base
          group-hover:text-white
        "
      >
        {cert.type === "pdf" ? "📄" : "🖼️"}
      </div>

      {/* TEXT */}
      <div>
        <h3 className="font-semibold text-base md:text-lg">
          {cert.title}
        </h3>
        <p className="text-sm text-gray-400 mt-2">
          {cert.issuer}
        </p>
      </div>
    </div>
  );
}