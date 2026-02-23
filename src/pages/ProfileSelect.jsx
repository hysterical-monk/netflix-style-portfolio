import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const profiles = [
  { name: "Recruiter", image: "/profiles/red.png" },
  { name: "Developer", image: "/profiles/blue.jpeg" },
  { name: "Adventurer", image: "/profiles/batman.jpeg" },
  { name: "Stalker", image: "/profiles/sideeyes.jpeg" },
];

export default function ProfileSelect() {
  const navigate = useNavigate();
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleCount((count) => {
        if (count >= profiles.length) {
          clearInterval(interval);
          return count;
        }
        return count + 1;
      });
    }, 180); // stagger speed

    return () => clearInterval(interval);
  }, []);

  const selectProfile = (profile) => {
    localStorage.setItem("profileName", profile.name);
    localStorage.setItem("profileImage", profile.image);
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-3xl md:text-4xl mb-12 font-semibold">
        Who’s watching?
      </h1>

      <div
        className="
          grid grid-cols-2
          sm:grid-cols-3
          md:grid-cols-4
          gap-8 md:gap-12
          place-items-center
        "
      >
        {profiles.slice(0, visibleCount).map((profile) => (
          <button
            key={profile.name}
            onClick={() => selectProfile(profile)}
            className="
              group
              flex flex-col items-center
              opacity-0
              animate-profileFade
            "
          >
            {/* IMAGE */}
            <div className="netflix-glow rounded-xl overflow-hidden">
              <img
                src={profile.image}
                alt={profile.name}
                className="
                  w-24 h-24
                  md:w-32 md:h-32
                  object-cover
                  transition-transform duration-300
                  group-hover:scale-110
                "
              />
            </div>

            {/* NAME */}
            <span
              className="
                mt-3
                text-sm md:text-base
                text-gray-300
                group-hover:text-red-500
                transition
              "
            >
              {profile.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
