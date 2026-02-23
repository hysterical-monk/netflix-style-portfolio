import { useNavigate } from "react-router-dom";

export default function BackButton({
  label = "Back to Dashboard",
  to = "/home",
}) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(to)}
      className="
        mb-8
        inline-flex items-center gap-3
        text-gray-400 hover:text-white
        transition
        group
      "
    >
      <span
        className="
          text-xl
          group-hover:-translate-x-1
          transition-transform
        "
      >
        ←
      </span>

      <span className="tracking-wide">
        {label}
      </span>
    </button>
  );
}
