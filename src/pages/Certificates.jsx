import { useState } from "react";
import certificates from "../data/certificates.json";
import CertificateCard from "../components/CertificateCard";
import Navbar from "../components/Navbar";

export default function Certificates() {
  const [activeCert, setActiveCert] = useState(null);

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      <main className="px-6 md:px-12 pt-10 pb-20">
        <h1 className="text-3xl md:text-4xl font-bold mb-10">
          Certificates
        </h1>

        {/* GRID */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {certificates.map((cert, i) => (
            <CertificateCard
              key={i}
              cert={cert}
              onClick={setActiveCert}
            />
          ))}
        </div>
      </main>
     
       {/* 🔥 FULLSCREEN VIEWER */}
      {activeCert && (
        <div
          className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center"
          onClick={() => setActiveCert(null)}
        >
          <img
            src={activeCert.image}
            alt={activeCert.title}
            className="max-h-[90vh] max-w-[90vw] rounded-lg"
          />
        </div>
      )}
    </div>
  );
}