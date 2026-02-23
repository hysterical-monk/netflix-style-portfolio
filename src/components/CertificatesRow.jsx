export default function CertificatesRow({ items, onSelect }) {
  return (
    <section className="px-8 md:px-16 mt-20">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">
        Certificates
      </h2>

     <div
  className="
    flex gap-6
    overflow-x-auto scrollbar-hide
    pb-6

    w-[92vw]        /* 👈 MOBILE: slightly narrower */
    md:w-full       /* 👈 DESKTOP: unchanged */
  "
>
            {items.map((cert) => (
          <div
            key={cert.id}
            onClick={() => onSelect(cert)}
            className="
              group relative
              h-[180px] md:h-[260px]
              rounded-xl
              bg-[#141414]
              flex flex-col
              items-center justify-center
              text-center
              cursor-pointer
              transition-transform duration-300
              hover:scale-105
            "
          >
            {/* RED GLOW — OUTSIDE ONLY */}
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

            <h3 className="font-semibold px-4">
              {cert.title}
            </h3>
            <p className="text-sm text-gray-400 mt-2">
              {cert.issuer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}