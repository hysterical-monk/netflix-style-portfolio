import { useNavigate } from "react-router-dom";

export default function Card({ item }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/project/${item.id}`)}
      className="
        netflix-glow
        relative
        shrink-0
        w-[180px] h-[260px]
        md:w-[220px] md:h-[320px]
        cursor-pointer
        rounded-xl
        group
        transition-transform duration-300
        md:hover:scale-105
      "
    >
      {/* 🔴 RED GLOW (DESKTOP ONLY) */}
      <div
        className="
          hidden md:block
          absolute -inset-2
          rounded-xl
          bg-red-600/40
          blur-xl
          opacity-0
          group-hover:opacity-90
          transition duration-300
          -z-10
        "
      />

      {/* IMAGE */}
      <div className="w-full h-full rounded-xl overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* OVERLAY */}
      <div
        className="
          absolute inset-0
          flex flex-col justify-end
          px-3 pb-3
          bg-gradient-to-t from-black/90 via-black/40 to-transparent
          opacity-100 md:opacity-0
          md:group-hover:opacity-100
          transition
        "
      >
        {/* TITLE */}
        <p className="text-sm md:text-base font-semibold leading-tight mb-2">
          {item.title}
        </p>

        {/* ACTION BUTTONS */}
        <div
          className="flex gap-2"
          onClick={(e) => e.stopPropagation()} // 🔥 THIS IS THE KEY
        >
          {item.github && (
            <a
              href={item.github}
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-xs
                px-3 py-1.5
                rounded-md
                bg-[#1f2937]
                hover:bg-[#374151]
                transition
              "
            >
              GitHub
            </a>
          )}

          {item.notebook && (
            <a
              href={item.notebook}
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-xs
                px-3 py-1.5
                rounded-md
                bg-[#1f2937]
                hover:bg-[#374151]
                transition
              "
            >
              Notebook
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
