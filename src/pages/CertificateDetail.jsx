import { useParams } from "react-router-dom";
import { useEffect } from "react";
import certificates from "../data/certificates.json";

export default function CertificateDetail() {
  const { id } = useParams();
  const cert = certificates.find(c => c.id === id);

  // FORCE detail page to start at top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!cert) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        Certificate not found
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen px-6 py-20">
      <h1 className="text-4xl font-bold">{cert.title}</h1>
      <p className="text-gray-400 mt-2">{cert.subtitle}</p>

      {cert.type === "pdf" ? (
        <iframe
          src={cert.file}
          className="w-full h-[80vh] mt-10 rounded"
          title={cert.title}
        />
      ) : (
        <img
          src={cert.image}
          alt={cert.title}
          className="mt-10 max-h-[80vh] mx-auto rounded"
        />
      )}
    </div>
  );
}