
import React from "react";
import { X } from "lucide-react";
import SectionShell from "../components/site/SectionShell.jsx";

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
    bookingUrl: "/contact", // admin can update later
  },
  {
    date: "2026-05-12",
    title: "Corporate Leadership Meet",
    place: "Assam",
    note:
      "Closed-door leadership and stakeholder interaction focused on strategy and growth.",
    tag: "Conference",
    img: "https://placehold.co/600x400/png?text=Conference",
    hasTickets: false, // no public tickets
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
   GALLERY DATA
   ======================= */

const gallery = [
  {
    title: "Arijit Singh Live — Guwahati Night",
    date: "2026-04-05",
    place: "Guwahati",
    tag: "Concert",
    img: "https://placehold.co/1200x675/png?text=Concert+Photo",
  },
  {
    title: "Brand Activation — Campaign Moments",
    date: "2025-10-14",
    place: "Guwahati",
    tag: "Activation",
    img: "https://placehold.co/1200x675/png?text=Brand+Activation",
  },
  {
    title: "Press Conference — Media Briefing",
    date: "2025-09-02",
    place: "Assam",
    tag: "Press",
    img: "https://placehold.co/1200x675/png?text=Press+Conference",
  },
];

/* =======================
   UI HELPERS
   ======================= */

function DatePill({ date }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-brand-mist px-3 py-1 ring-1 ring-slate-200/70 text-xs font-semibold text-slate-700">
      <span className="h-2 w-2 rounded-full bg-brand-red" />
      {date}
    </div>
  );
}

function TagPill({ tag }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 ring-1 ring-slate-200/70 text-xs font-semibold text-slate-700">
      <span className="h-2 w-2 rounded-full bg-brand-red" />
      {tag}
    </div>
  );
}

/* =======================
   MAIN COMPONENT
   ======================= */

export default function Events() {
  const [tab, setTab] = React.useState("upcoming");
  const [open, setOpen] = React.useState(null);

  const activeList = tab === "upcoming" ? upcoming : past;

  // Close gallery modal on ESC
  React.useEffect(() => {
    if (open === null) return;
    const onKeyDown = (e) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <SectionShell
      kicker="Events"
      title={
        <span>
          Events <span className="text-brand-red">•</span> upcoming, past & gallery
        </span>
      }
      subtitle="Concerts, activations, conferences, and community initiatives."
    >
      {/* Toggle */}
      <div className="inline-flex rounded-2xl bg-brand-mist ring-1 ring-slate-200/70 p-1">
        <button
          onClick={() => setTab("upcoming")}
          className={`px-4 py-2 rounded-xl text-sm font-semibold transition ${
            tab === "upcoming"
              ? "bg-white text-brand-indigo shadow-soft"
              : "text-slate-600 hover:text-brand-indigo"
          }`}
        >
          Upcoming
        </button>
        <button
          onClick={() => setTab("past")}
          className={`px-4 py-2 rounded-xl text-sm font-semibold transition ${
            tab === "past"
              ? "bg-white text-brand-indigo shadow-soft"
              : "text-slate-600 hover:text-brand-indigo"
          }`}
        >
          Past
        </button>
      </div>

      {/* EVENTS LIST */}
      <div className="mt-6 card overflow-hidden">
        <div className="divide-y divide-slate-200">
          {activeList.map((e) => (
            <div
              key={`${e.title}-${e.date}`}
              className="p-6 grid grid-cols-1 sm:grid-cols-[160px_1fr_auto] gap-5 hover:bg-slate-50 transition"
            >
              {/* Image */}
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 ring-1 ring-slate-200">
                <img
                  src={e.img}
                  alt={e.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Details */}
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <DatePill date={e.date} />
                  <TagPill tag={e.tag} />
                </div>
                <div className="mt-2 font-semibold text-brand-indigo">
                  {e.title}
                </div>
                <div className="mt-1 text-sm text-slate-600">
                  {e.note}
                </div>
              </div>

              {/* Location + CTA */}
              <div className="text-sm text-slate-600">
                <div className="text-xs font-semibold text-brand-red uppercase tracking-widest">
                  Location
                </div>
                <div className="mt-1">{e.place}</div>

                <div className="mt-4">
                  {tab === "upcoming" && e.hasTickets && (
                    <a
                      href={e.bookingUrl}
                      className="inline-flex items-center justify-center rounded-xl bg-brand-red px-4 py-2 text-xs font-semibold text-white hover:opacity-90 transition"
                    >
                      Book Tickets
                    </a>
                  )}

                  {tab === "upcoming" && !e.hasTickets && (
                    <span className="text-xs font-semibold text-slate-400">
                      Entry by invitation only
                    </span>
                  )}

                  {tab === "past" && (
                    <span className="text-xs font-semibold text-slate-400">
                      Event concluded
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* GALLERY */}
      <div className="mt-12">
        <div className="kicker">Gallery</div>
        <h3 className="mt-2 text-2xl font-semibold text-brand-indigo">
          Event moments <span className="text-brand-red">•</span>
        </h3>

        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {gallery.map((g, idx) => (
            <button
              key={idx}
              onClick={() => setOpen(idx)}
              className="card overflow-hidden text-left card-hover"
            >
              <div className="aspect-video relative">
                <img src={g.img} alt="" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-slate-900/25" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <DatePill date={g.date} />
                  <TagPill tag={g.tag} />
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-brand-indigo">{g.title}</h3>
                <p className="text-sm text-slate-600">{g.place}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* GALLERY MODAL */}
      {open !== null && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setOpen(null)}
        >
          <div
            className="max-w-5xl w-full card overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 flex justify-between items-center border-b">
              <span className="font-semibold text-brand-indigo">
                Event Gallery
              </span>
              <button onClick={() => setOpen(null)}>
                <X />
              </button>
            </div>
            <img
              src={gallery[open].img}
              alt=""
              className="w-full object-cover"
            />
          </div>
        </div>
      )}
    </SectionShell>
  );
}