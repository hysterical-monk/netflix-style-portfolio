import { useState } from "react";
import Navbar from "../components/Navbar";
import CertificatesRow from "../components/CertificatesRow";
import CertificateViewer from "../components/CertificateViewer";
import certificates from "../data/certificates.json";

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      <main className="pb-20">
        <CertificatesRow
          items={certificates}
          onSelect={setSelectedCert}
        />
      </main>

      <CertificateViewer
        cert={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </div>
  );
}