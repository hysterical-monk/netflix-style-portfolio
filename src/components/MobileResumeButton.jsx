export default function MobileResumeButton() {
  return (
    <a
      href="/resume.pdf"
      className="fixed bottom-4 right-4 z-50
                 bg-red-600 text-white
                 px-4 py-3 rounded-full
                 shadow-lg md:hidden"
    >
      Resume
    </a>
  );
}
