import CertificateCard from "./CertificateCard";

/*
  CertificatesRow
  ---------------
  Keep it as BOX GRID.
  NO overflow, NO scroll tricks.
*/

export default function CertificatesRow({ items, onSelect }) {
  return (
    <section className="px-6 md:px-12 mt-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">
        Certificates
      </h2>

      <div
        className="
          grid
          grid-cols-2
          md:grid-cols-3
          gap-6 md:gap-8
        "
      >
        {items.map(cert => (
          <CertificateCard
            key={cert.id}
            cert={cert}
            onClick={() => onSelect(cert)}
          />
        ))}
      </div>
    </section>
  );
}