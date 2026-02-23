import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) return;

    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("userEmail", email);

    navigate("/");
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="bg-zinc-900 p-8 rounded-xl w-full max-w-md">
        <h1 className="text-white text-3xl font-bold mb-6">
          Welcome back
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-full p-3 rounded bg-zinc-800 text-white outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-red-600 py-3 rounded font-semibold text-white hover:bg-red-700"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}
