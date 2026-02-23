export default function CertificateViewer({ cert, onClose }) {
  if (!cert) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white text-3xl"
      >
        ✕
      </button>

      {cert.type === "pdf" ? (
        <iframe
          src={cert.file}
          className="w-[90vw] h-[90vh] rounded-xl bg-black"
        />
      ) : (
        <img
          src={cert.file}
          alt={cert.title}
          className="max-w-[90vw] max-h-[90vh] rounded-xl"
        />
      )}
    </div>
  );
}