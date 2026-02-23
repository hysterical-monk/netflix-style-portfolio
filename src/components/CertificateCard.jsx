export default function CertificateCard({ cert, onClick }) {
  return (
    <div
      onClick={() => onClick(cert)}
      className="
        group cursor-pointer
        relative
        bg-[#141414]
        rounded-xl
        h-[220px] md:h-[260px]
        flex flex-col items-center justify-center text-center
        transition-transform duration-300
        hover:scale-[1.05]
      "
    >
      {/* RED GLOW – OUTSIDE ONLY */}
      <div
        className="
          absolute -inset-3
          rounded-2xl
          bg-red-600/40
          blur-2xl
          opacity-0
          group-hover:opacity-100
          transition
          -z-10
        "
      />

      <h3 className="text-lg font-semibold px-4">
        {cert.title}
      </h3>
      <p className="text-sm text-gray-400 mt-2">
        {cert.issuer}
      </p>
    </div>
  );
}