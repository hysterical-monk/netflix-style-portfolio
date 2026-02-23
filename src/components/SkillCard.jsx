import { useNavigate } from "react-router-dom";

export default function SkillCard({ item }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(item.link)}
      className="
        relative
        shrink-0
        w-[150px] h-[200px]
        md:w-[220px] md:h-[320px]
        cursor-pointer
        rounded-xl
        group
        transition-transform duration-300
        md:hover:scale-105
      "
    >
      {/* RED GLOW — OUTSIDE ONLY */}
      <div
        className="
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
        />
      </div>

      {/* TEXT */}
      <div
        className="
          absolute inset-0
          flex items-end
          px-3 pb-3
          bg-gradient-to-t from-black/80 via-transparent
        "
      >
        <div>
          <p className="text-sm md:text-base font-semibold">
            {item.title}
          </p>
          <p className="text-xs text-gray-300">
            {item.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}