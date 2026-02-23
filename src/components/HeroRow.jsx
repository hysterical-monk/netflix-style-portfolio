import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HeroRow({ items }) {
  const containerRef = useRef(null);
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const autoPlay = useRef(true);

  /* stop autoplay on user interaction */
  useEffect(() => {
    const stop = () => (autoPlay.current = false);
    window.addEventListener("wheel", stop, { passive: true });
    window.addEventListener("touchstart", stop, { passive: true });

    return () => {
      window.removeEventListener("wheel", stop);
      window.removeEventListener("touchstart", stop);
    };
  }, []);

  /* autoplay */
  useEffect(() => {
    const id = setInterval(() => {
      if (!autoPlay.current || !containerRef.current) return;

      const children = containerRef.current.children;
      const next = (index + 1) % children.length;

      containerRef.current.scrollTo({
        left: children[next].offsetLeft,
        behavior: "smooth",
      });

      setIndex(next);
    }, 3500);

    return () => clearInterval(id);
  }, [index]);

  /* sync dots on manual scroll */
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onScroll = () => {
      const children = Array.from(container.children);
      const center = container.scrollLeft + container.offsetWidth / 2;

      let closest = 0;
      let min = Infinity;

      children.forEach((child, i) => {
        const childCenter = child.offsetLeft + child.offsetWidth / 2;
        const dist = Math.abs(center - childCenter);
        if (dist < min) {
          min = dist;
          closest = i;
        }
      });

      setIndex(closest);
    };

    container.addEventListener("scroll", onScroll, { passive: true });
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      {/* HERO SLIDER */}
      <div
        ref={containerRef}
        className="
          flex gap-6 md:gap-12
          px-[4vw] md:px-[10vw]
          overflow-x-auto overflow-y-hidden
          snap-x snap-mandatory
          scroll-smooth
          scrollbar-hide
        "
      >
        {items.map((item, i) => (
          <div
            key={item.id || i}
            onClick={() => navigate(item.link)}
            className="snap-center shrink-0"
          >
            <div
              className="
                relative
                w-[92vw] md:w-[80vw] lg:w-[72vw]
                h-[55vh] md:h-[65vh]
                rounded-3xl overflow-hidden
                cursor-pointer
                transition-transform duration-500
                hover:scale-[1.05]
              "
            >
              {/* DESKTOP */}
              <img
                src={item.imageDesktop}
                alt={item.title}
                className="hidden md:block w-full h-full object-cover"
              />

              {/* MOBILE */}
              <img
                src={item.imageMobile}
                alt={item.title}
                className="block md:hidden w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              <div className="absolute bottom-5 left-5 right-5">
                <h2 className="text-xl md:text-4xl font-bold">
                  {item.title}
                </h2>
                <p className="text-sm md:text-base text-gray-200">
                  {item.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* DOT INDICATOR */}
      <div className="flex justify-center gap-2 mt-4">
        {items.map((_, i) => (
          <span
            key={i}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index ? "w-6 bg-white" : "w-2 bg-gray-500"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
