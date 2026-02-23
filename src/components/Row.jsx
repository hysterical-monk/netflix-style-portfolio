import Card from "./Card";

export default function Row({ title, items }) {
  return (
    <section className="px-6 md:px-12 mt-12 md:mt-20">
      {/* TITLE */}
      <h2 className="text-2xl md:text-3xl font-bold mb-6">
        {title}
      </h2>

      {/* SCROLL CONTAINER */}
      <div className="relative">
        <div
          className="
            flex gap-6 md:gap-8
            overflow-x-auto
            scrollbar-hide
            pb-4
            pr-16   /* 👈 IMPORTANT: allows card peek on mobile */
          "
        >
          {items.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>

        {/* RIGHT FADE (MOBILE ONLY) */}
        <div
          className="
            pointer-events-none
            absolute top-0 right-0
            h-full w-20
            bg-gradient-to-l
            from-black
            to-transparent
            md:hidden
          "
        />
      </div>
    </section>
  );
}