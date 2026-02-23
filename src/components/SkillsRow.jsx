import { useNavigate } from "react-router-dom";

export default function SkillsRow({ title, items }) {
  const navigate = useNavigate();

  return (
    <section className="px-6 md:px-12 mt-12 md:mt-20">
      {/* TITLE */}
      <h2 className="text-2xl md:text-3xl font-bold mb-6">
        {title}
      </h2>

      {/* ROW WRAPPER */}
      <div className="relative">
        {/* SCROLL ROW */}
        <div
          className="
            flex gap-6 md:gap-8
            overflow-x-auto
            scrollbar-hide
            pb-4
            pr-16          /* 👈 card peek */
          "
        >
          {items.map((item, i) => (
            <div
              key={i}
              onClick={() => navigate(item.link)}
              className="
                group
                relative
                min-w-[180px] h-[260px]
                md:min-w-[220px] md:h-[320px]
                cursor-pointer
                rounded-xl
                transition-transform duration-300
                hover:scale-[1.05]
              "
            >
              {/* 🔴 RED GLOW — OUTSIDE ONLY */}
              <div
                className="
                  absolute -inset-3
                  rounded-2xl
                  bg-red-600/40
                  blur-2xl
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity duration-300
                  pointer-events-none
                  -z-10
                "
              />

              {/* CARD */}
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#141414]">
                {/* IMAGE */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    absolute inset-0
                    w-full h-full
                    object-cover
                    object-center
                    scale-[1.05]
                  "
                />

                {/* GRADIENT */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                {/* TEXT */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-semibold text-base">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-300">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 👉 MOBILE SCROLL HINT (NETFLIX STYLE) */}
        <div
          className="
            pointer-events-none
            absolute top-0 right-0 h-full w-14
            bg-gradient-to-l from-black to-transparent
            md:hidden
          "
        />
      </div>
    </section>
  );
}