import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HeroSlider({ slides = [], intervalMs = 5000 }) {
  const [index, setIndex] = React.useState(0);
  const timerRef = React.useRef(null);

  const total = slides.length;

  const go = React.useCallback(
    (next) => {
      if (!total) return;
      const i = (next + total) % total;
      setIndex(i);
    },
    [total]
  );

  const next = React.useCallback(() => go(index + 1), [go, index]);
  const prev = React.useCallback(() => go(index - 1), [go, index]);

  React.useEffect(() => {
    if (!total) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, intervalMs);

    return () => clearInterval(timerRef.current);
  }, [total, intervalMs]);

  if (!total) return null;

  return (
    <div className="card-pro overflow-hidden bg-white/85 backdrop-blur">
      {/* Slides */}
      <div className="relative aspect-[16/11]">
        {slides.map((s, i) => {
          const active = i === index;
          return (
            <div
              key={s.title + i}
              className={[
                "absolute inset-0 transition-opacity duration-500",
                active ? "opacity-100" : "opacity-0 pointer-events-none",
              ].join(" ")}
            >
              {/* Background image (optional) */}
              {s.image ? (
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${s.image})` }}
                />
              ) : (
                <div className="absolute inset-0 bg-indigo-mist" />
              )}

              {/* Overlay */}
              <div className="absolute inset-0 bg-slate-950/45" />

              {/* Content */}
              <div className="relative z-10 h-full p-6 sm:p-8 flex flex-col justify-end text-white">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold w-fit">
                  <span className="h-2 w-2 rounded-full bg-brand-red" />
                  {s.badge || "Byatikram Group"}
                </div>

                <h3 className="mt-3 text-xl sm:text-2xl font-semibold">
                  {s.title}
                </h3>

                {s.subtitle ? (
                  <p className="mt-2 text-sm text-white/85 max-w-md">
                    {s.subtitle}
                  </p>
                ) : null}

                {Array.isArray(s.bullets) && s.bullets.length ? (
                  <ul className="mt-4 space-y-1 text-sm text-white/85">
                    {s.bullets.slice(0, 4).map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-red shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between px-4 py-3 bg-white">
        <button
          type="button"
          onClick={prev}
          className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50 transition"
          aria-label="Previous slide"
        >
          <ChevronLeft size={18} />
          Prev
        </button>

        {/* Dots */}
        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => go(i)}
              className={[
                "h-2.5 w-2.5 rounded-full transition",
                i === index ? "bg-brand-red" : "bg-slate-300 hover:bg-slate-400",
              ].join(" ")}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={next}
          className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50 transition"
          aria-label="Next slide"
        >
          Next
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
