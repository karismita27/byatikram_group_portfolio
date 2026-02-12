
import React from "react";
import { X, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import SectionShell from "../components/site/SectionShell.jsx";
import g1 from "../assets/images/events/p-1.jpg";
import g2 from "../assets/images/events/p-2.jpg";
import g3 from "../assets/images/events/p-3.jpg";
import g4 from "../assets/images/events/p-4.jpg";
import g5 from "../assets/images/events/p-5.jpg";
import g6 from "../assets/images/events/p-6.jpg";
import g7 from "../assets/images/events/p-7.jpg";
import g8 from "../assets/images/events/p-8.jpg";
import g9 from "../assets/images/events/p-9.jpg";
import g10 from "../assets/images/events/p10.jpg";
import g11 from "../assets/images/events/p-11.jpg";
import g12 from "../assets/images/events/p-12.jpg";
import g13 from "../assets/images/events/p13.jpg";
import g14 from "../assets/images/events/p-14.jpg";
import g15 from "../assets/images/events/p-15.jpg";
import g16 from "../assets/images/events/p-16.jpg";
import g17 from "../assets/images/events/p-17.jpg";
import g18 from "../assets/images/events/p-18.jpg";
import g19 from "../assets/images/events/p-24.jpg";
import g20 from "../assets/images/events/p-26.jpg";

/* =======================
   EVENTS DATA
   ======================= */

const upcoming = [
  {
    date: "2026-04-05",
    title: "Arijit Singh Live in Concert",
    place: "Guwahati",
    note:
      "A magical live concert featuring soulful melodies, live orchestra, and special performances.",
    tag: "Concert",
    img: "https://placehold.co/600x400/png?text=Concert+Poster",
    hasTickets: true,
    bookingUrl: "/contact",
  },
  {
    date: "2026-05-12",
    title: "Corporate Leadership Meet",
    place: "Assam",
    note:
      "Closed-door leadership and stakeholder interaction focused on strategy and growth.",
    tag: "Conference",
    img: "https://placehold.co/600x400/png?text=Conference",
    hasTickets: false,
  },
];

const past = [
  {
    date: "2025-10-14",
    title: "Brand Activation",
    place: "Guwahati",
    note: "Campaign execution with media engagement and follow-up.",
    tag: "Activation",
    img: "https://placehold.co/600x400/png?text=Brand+Activation",
  },
  {
    date: "2025-09-02",
    title: "Press Conference",
    place: "Assam",
    note: "Press briefing, Q&A, and coverage tracking.",
    tag: "Press",
    img: "https://placehold.co/600x400/png?text=Press+Conference",
  },
];

/* =======================
   GALLERY DATA (20 items later)
   ======================= */

const gallery = [
  { title: "Event Highlight 01", date: "2025-01-01", place: "Guwahati", tag: "Event", img: g1 },
  { title: "Event Highlight 02", date: "2025-01-01", place: "Guwahati", tag: "Event", img: g2 },
  { title: "Event Highlight 03", date: "2025-01-01", place: "Assam", tag: "Event", img: g3 },
  { title: "Event Highlight 04", date: "2025-01-01", place: "Assam", tag: "Event", img: g4 },
  { title: "Event Highlight 05", date: "2025-01-01", place: "Guwahati", tag: "Event", img: g5 },
  { title: "Event Highlight 06", date: "2025-01-01", place: "Guwahati", tag: "Event", img: g6 },
  { title: "Event Highlight 07", date: "2025-01-01", place: "Assam", tag: "Event", img: g7 },
  { title: "Event Highlight 08", date: "2025-01-01", place: "Assam", tag: "Event", img: g8 },
  { title: "Event Highlight 09", date: "2025-01-01", place: "Guwahati", tag: "Event", img: g9 },
  { title: "Event Highlight 10", date: "2025-01-01", place: "Guwahati", tag: "Event", img: g10 },
  { title: "Event Highlight 11", date: "2025-01-01", place: "Assam", tag: "Event", img: g11 },
  { title: "Event Highlight 12", date: "2025-01-01", place: "Assam", tag: "Event", img: g12 },
  { title: "Event Highlight 13", date: "2025-01-01", place: "Guwahati", tag: "Event", img: g13 },
  { title: "Event Highlight 14", date: "2025-01-01", place: "Guwahati", tag: "Event", img: g14 },
  { title: "Event Highlight 15", date: "2025-01-01", place: "Assam", tag: "Event", img: g15 },
  { title: "Event Highlight 16", date: "2025-01-01", place: "Assam", tag: "Event", img: g16 },
  { title: "Event Highlight 17", date: "2025-01-01", place: "Guwahati", tag: "Event", img: g17 },
  { title: "Event Highlight 18", date: "2025-01-01", place: "Guwahati", tag: "Event", img: g18 },
  { title: "Event Highlight 19", date: "2025-01-01", place: "Assam", tag: "Event", img: g19 },
  { title: "Event Highlight 20", date: "2025-01-01", place: "Assam", tag: "Event", img: g20 },
];
/* =======================
   UI HELPERS
   ======================= */

function DatePill({ date, className = "" }) {
  return (
    <div
      className={[
        "inline-flex items-center gap-2 rounded-full bg-brand-mist px-3 py-1",
        "ring-1 ring-slate-200/70 text-xs font-semibold text-slate-700",
        className,
      ].join(" ")}
    >
      <span className="h-2 w-2 rounded-full bg-brand-red" />
      {date}
    </div>
  );
}

function TagPill({ tag, className = "" }) {
  return (
    <div
      className={[
        "inline-flex items-center gap-2 rounded-full bg-white/85 px-3 py-1",
        "ring-1 ring-slate-200/70 text-xs font-semibold text-slate-700",
        className,
      ].join(" ")}
    >
      <span className="h-2 w-2 rounded-full bg-brand-red" />
      {tag}
    </div>
  );
}

function SectionHeader({ kicker, title, subtitle }) {
  return (
    <div className="flex items-end justify-between gap-6">
      <div>
        <div className="kicker">{kicker}</div>
        <h3 className="mt-2 text-2xl font-semibold text-brand-indigo">
          {title} <span className="text-brand-red">•</span>
        </h3>
        {subtitle ? (
          <p className="mt-2 text-sm text-slate-600 max-w-2xl">{subtitle}</p>
        ) : null}
      </div>
    </div>
  );
}

/* =======================
   MAIN
   ======================= */

export default function Events() {
  const [open, setOpen] = React.useState(null);

  // Modal keyboard + navigation
  React.useEffect(() => {
    if (open === null) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((i) => (i + 1) % gallery.length);
      if (e.key === "ArrowLeft") setOpen((i) => (i - 1 + gallery.length) % gallery.length);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <SectionShell
      kicker="Events"
      title={
        <span>
          Events <span className="text-brand-red">•</span> upcoming, past & highlights
        </span>
      }
      subtitle="Concerts, activations, conferences, and community initiatives—delivered with operational discipline."
    >
      {/* =======================
         UPCOMING
         ======================= */}
      <div className="mt-2">
        <SectionHeader
          kicker="Upcoming"
          title="Upcoming engagements"
          subtitle="Key upcoming events—public and invitation-only."
        />

        <div className="mt-6 grid gap-4">
          {upcoming.map((e) => (
            <div
              key={`${e.title}-${e.date}`}
              className="card overflow-hidden p-5 sm:p-6 hover:bg-slate-50 transition"
            >
              <div className="grid gap-5 sm:grid-cols-[180px_1fr] sm:items-start">
                {/* Image */}
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 ring-1 ring-slate-200">
                  <img src={e.img} alt={e.title} className="h-full w-full object-cover" />
                </div>

                {/* Content */}
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <DatePill date={e.date} />
                    <TagPill tag={e.tag} />
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 ring-1 ring-slate-200/70 text-xs font-semibold text-slate-700">
                      <MapPin className="h-3.5 w-3.5 text-brand-red" />
                      {e.place}
                    </div>
                  </div>

                  <div className="mt-2 text-lg font-semibold text-brand-indigo">
                    {e.title}
                  </div>
                  <div className="mt-1 text-sm text-slate-600 leading-relaxed">
                    {e.note}
                  </div>

                  {/* CTA row */}
                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    {e.hasTickets ? (
                      <a
                        href={e.bookingUrl}
                        className="inline-flex items-center justify-center rounded-2xl bg-brand-red px-5 py-2.5 text-sm font-semibold text-white hover:opacity-95 transition"
                      >
                        Book Tickets
                      </a>
                    ) : (
                      <span className="text-sm font-semibold text-slate-500">
                        Entry by invitation only
                      </span>
                    )}

                    <span className="text-xs text-slate-400">
                      For coordination or partnerships, contact our team.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

     



{/* GALLERY */}
<div className="mt-12">
  <div className="kicker">Highlights</div>
  <h3 className="mt-2 text-2xl font-semibold text-brand-indigo">
    Event gallery <span className="text-brand-red">•</span>
  </h3>
  <p className="mt-2 text-sm text-slate-600 max-w-2xl">
    Visual proof from recent engagements—media, production, and stakeholder moments.
  </p>

  {/* Gallery grid */}
  <div className="mt-6 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
    {gallery.map((g, idx) => (
      <button
        key={`${g.title}-${idx}`}
        onClick={() => setOpen(idx)}
        type="button"
        className="group relative overflow-hidden rounded-3xl ring-1 ring-slate-200/70 bg-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-indigo/30"
        aria-label={`Open photo: ${g.title}`}
      >
        {/* Thumbnail */}
        <div className="aspect-[4/3]">
          <img
            src={g.img}
            alt={g.title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
        </div>

        {/* Hover overlay (desktop) */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent opacity-0 group-hover:opacity-100 transition" />

        {/* Minimal caption: only on hover (desktop), always visible on mobile as compact badge */}
        <div className="absolute bottom-0 left-0 right-0 p-3">
          {/* mobile badge */}
          <div className="sm:hidden inline-flex items-center gap-2 rounded-full bg-slate-950/40 backdrop-blur-sm px-3 py-1 text-[11px] font-semibold text-white max-w-full">
            <span className="h-2 w-2 rounded-full bg-brand-red shrink-0" />
            <span className="truncate">{g.tag} • {g.place}</span>
          </div>

          {/* hover caption */}
          <div className="hidden sm:block opacity-0 group-hover:opacity-100 transition text-left">
            <div className="text-white text-sm font-semibold line-clamp-1">
              {g.title}
            </div>
            <div className="mt-1 text-white/80 text-xs">
              {g.tag} • {g.place} • {g.date}
            </div>
          </div>
        </div>
      </button>
    ))}
  </div>
</div>


      {/* =======================
         PAST EVENTS
         ======================= */}
      <div className="mt-12">
        <SectionHeader
          kicker="Past"
          title="Past engagements"
          subtitle="A record of completed deliveries—useful for credibility and reference."
        />

        <div className="mt-6 grid gap-4">
          {past.map((e) => (
            <div
              key={`${e.title}-${e.date}`}
              className="card overflow-hidden p-5 sm:p-6 hover:bg-slate-50 transition"
            >
              <div className="grid gap-5 sm:grid-cols-[180px_1fr] sm:items-start">
                {/* Image */}
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 ring-1 ring-slate-200">
                  <img src={e.img} alt={e.title} className="h-full w-full object-cover" />
                </div>

                {/* Content */}
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <DatePill date={e.date} />
                    <TagPill tag={e.tag} />
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 ring-1 ring-slate-200/70 text-xs font-semibold text-slate-700">
                      <MapPin className="h-3.5 w-3.5 text-brand-red" />
                      {e.place}
                    </div>
                    <span className="text-xs font-semibold text-slate-400">
                      Event concluded
                    </span>
                  </div>

                  <div className="mt-2 text-lg font-semibold text-brand-indigo">
                    {e.title}
                  </div>
                  <div className="mt-1 text-sm text-slate-600 leading-relaxed">
                    {e.note}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* =======================
         GALLERY MODAL (premium viewer)
         ======================= */}
      {open !== null && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setOpen(null)}
        >
          <div
            className="max-w-5xl w-full card overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 sm:p-5 flex items-center justify-between gap-3 border-b">
              <div className="min-w-0">
                <div className="font-semibold text-brand-indigo truncate">
                  {gallery[open].title}
                </div>
                <div className="mt-1 text-xs text-slate-500">
                  {gallery[open].tag} • {gallery[open].place} • {gallery[open].date}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  className="rounded-xl bg-white ring-1 ring-slate-200 p-2 hover:bg-slate-50 transition"
                  onClick={() => setOpen((i) => (i - 1 + gallery.length) % gallery.length)}
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-5 w-5 text-slate-700" />
                </button>
                <button
                  className="rounded-xl bg-white ring-1 ring-slate-200 p-2 hover:bg-slate-50 transition"
                  onClick={() => setOpen((i) => (i + 1) % gallery.length)}
                  aria-label="Next image"
                >
                  <ChevronRight className="h-5 w-5 text-slate-700" />
                </button>
                <button
                  className="rounded-xl bg-white ring-1 ring-slate-200 p-2 hover:bg-slate-50 transition"
                  onClick={() => setOpen(null)}
                  aria-label="Close"
                >
                  <X className="h-5 w-5 text-slate-700" />
                </button>
              </div>
            </div>

            <img
              src={gallery[open].img}
              alt={gallery[open].title}
              className="w-full max-h-[75vh] object-contain bg-slate-950"
            />
          </div>
        </div>
      )}
    </SectionShell>
  );
}
