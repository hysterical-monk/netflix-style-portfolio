import { useParams } from "react-router-dom";
import certificates from "../data/certificates.json";

export default function CertificateDetail() {
  const { id } = useParams();
  const cert = certificates.find(c => c.id === id);

  if (!cert) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        Certificate not found
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen px-6 md:px-16 py-20">
      <h1 className="text-3xl md:text-5xl font-bold">
        {cert.title}
      </h1>

      <p className="mt-3 text-gray-400">
        {cert.subtitle}
      </p>

      <p className="mt-2 text-gray-500">
        Issued by {cert.issuer}
      </p>

      <img
  src={activeCert.image}
  alt={activeCert.title}
  className="max-h-[90vh] max-w-[90vw] rounded-lg"
/>
      <a
        href={cert.link}
        target="_blank"
        rel="noreferrer"
        className="
          inline-block
          mt-8
          bg-red-600
          hover:bg-red-700
          px-6 py-3
          rounded
          font-semibold
        "
      >
        Verify Certificate
      </a>
    </div>
  );
}
