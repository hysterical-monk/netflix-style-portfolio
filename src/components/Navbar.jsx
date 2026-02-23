import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import NetflixLogo from "./NetflixLogo";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const profileImage =
    localStorage.getItem("profileImage") || "/profiles/red.png";

  const menuItems = [
    { label: "Home", path: "/home" },
    { label: "Skills", path: "/skills" },
    { label: "Journey", path: "/journey" },
    { label: "Projects", path: "/projects" },
    { label: "Hire Me", path: "/hire" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 h-16 md:h-20 bg-black/70 backdrop-blur-md">
        <div className="h-full flex items-center justify-between px-6 md:px-12">

          {/* LEFT */}
          <div className="flex items-center gap-10">
            <div onClick={() => navigate("/intro")} className="cursor-pointer">
              <NetflixLogo size="md" />
            </div>

            <div className="hidden md:flex gap-6 text-sm">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => navigate(item.path)}
                  className={`transition ${
                    isActive(item.path)
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4">
            <img
              src={profileImage}
              alt="profile"
              onClick={() => navigate("/profiles")}
              className="w-9 h-9 rounded-md object-cover cursor-pointer hover:scale-105 transition"
            />

            <button
              className="md:hidden text-white text-2xl"
              onClick={() => setOpen(!open)}
            >
              ☰
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden bg-black border-t border-gray-800">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  navigate(item.path);
                  setOpen(false);
                }}
                className="block w-full text-left px-6 py-4 text-gray-300 hover:bg-gray-900"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* SINGLE SPACER – NEVER ADD ANOTHER */}
      <div className="h-16 md:h-20" />
    </>
  );
}
