export default function CertificateViewer({ cert, onClose }) {
  if (!cert) return null;

  return (
    <div
      className="
        fixed inset-0 z-[100]
        bg-black/90
        flex items-center justify-center
        px-4
      "
      onClick={onClose}
    >
      <img
        src={cert.image}
        alt={cert.title}
        className="
          max-h-[90vh]
          max-w-[95vw]
          rounded-lg
          shadow-2xl
        "
      />
    </div>
  );
}