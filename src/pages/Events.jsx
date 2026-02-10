import React from "react";
import { X } from "lucide-react";
import SectionShell from "../components/site/SectionShell.jsx";

// NOTE: Replace these demo events + images with real data later.
const upcoming = [
  {
    date: "2026-02-20",
    title: "Corporate Dialogue",
    place: "Guwahati",
    note: "Leadership + stakeholder conversation.",
    tag: "Conference",
  },
  {
    date: "2026-03-10",
    title: "Community Drive",
    place: "Assam",
    note: "Community initiative with partners.",
    tag: "CSR",
  },
];

const past = [
  {
    date: "2025-10-14",
    title: "Brand Activation",
    place: "Guwahati",
    note: "Campaign execution + media follow-up.",
    tag: "Activation",
  },
  {
    date: "2025-09-02",
    title: "Press Conference",
    place: "Assam",
    note: "Press note, Q&A, and coverage tracking.",
    tag: "Press",
  },
  {
    date: "2025-08-18",
    title: "Social Initiative",
    place: "Assam",
    note: "Community engagement and impact reporting.",
    tag: "Community",
  },
];

const gallery = [
  {
    title: "Corporate Dialogue — Stage & guests",
    date: "2026-02-20",
    place: "Guwahati",
    tag: "Conference",
    img: "https://placehold.co/1200x675/png?text=Event+Photo",
  },
  {
    title: "Community Drive — On-ground execution",
    date: "2026-03-10",
    place: "Assam",
    tag: "CSR",
    img: "https://placehold.co/1200x675/png?text=Event+Photo",
  },
  {
    title: "Press Conference — Media briefing",
    date: "2025-09-02",
    place: "Assam",
    tag: "Press",
    img: "https://placehold.co/1200x675/png?text=Event+Photo",
  },
  {
    title: "Brand Activation — Campaign moments",
    date: "2025-10-14",
    place: "Guwahati",
    tag: "Activation",
    img: "https://placehold.co/1200x675/png?text=Event+Photo",
  },
  {
    title: "Social Initiative — Community engagement",
    date: "2025-08-18",
    place: "Assam",
    tag: "Community",
    img: "https://placehold.co/1200x675/png?text=Event+Photo",
  },
  {
    title: "Event Wrap-up — Documentation & reporting",
    date: "2025-10-15",
    place: "Guwahati",
    tag: "Reporting",
    img: "https://placehold.co/1200x675/png?text=Event+Photo",
  },
];

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

export default function Events() {
  const [tab, setTab] = React.useState("upcoming");
  const [open, setOpen] = React.useState(null); // gallery index

  const activeList = tab === "upcoming" ? upcoming : past;

  // Close gallery on ESC.
  React.useEffect(() => {
    if (open === null) return;
    function onKeyDown(e) {
      if (e.key === "Escape") setOpen(null);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div>
      <SectionShell
        kicker="Events"
        title={
          <span>
            Events <span className="text-brand-red">•</span> upcoming, past & gallery
          </span>
        }
        subtitle="Keep events in one place. Use Media for awards, press, and updates."
      >
        {/* Upcoming / Past toggle */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="inline-flex rounded-2xl bg-brand-mist ring-1 ring-slate-200/70 p-1">
            <button
              onClick={() => setTab("upcoming")}
              className={[
                "px-4 py-2 rounded-xl text-sm font-semibold transition",
                tab === "upcoming"
                  ? "bg-white text-brand-indigo shadow-soft"
                  : "text-slate-600 hover:text-brand-indigo",
              ].join(" ")}
            >
              Upcoming
            </button>
            <button
              onClick={() => setTab("past")}
              className={[
                "px-4 py-2 rounded-xl text-sm font-semibold transition",
                tab === "past"
                  ? "bg-white text-brand-indigo shadow-soft"
                  : "text-slate-600 hover:text-brand-indigo",
              ].join(" ")}
            >
              Past
            </button>
          </div>

          <div className="text-xs text-slate-500">
            Tip: Use red highlights for dates & tags, not for large backgrounds.
          </div>
        </div>

        {/* Upcoming / Past list */}
        <div className="mt-6 card overflow-hidden">
          <div className="divide-y divide-slate-200">
            {activeList.map((e) => (
              <div
                key={`${e.title}-${e.date}`}
                className="p-6 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 hover:bg-slate-50 transition"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <DatePill date={e.date} />
                    <TagPill tag={e.tag} />
                  </div>
                  <div className="mt-2 font-semibold text-brand-indigo">{e.title}</div>
                  <div className="mt-1 text-sm text-slate-600">{e.note}</div>
                </div>
                <div className="text-sm text-slate-600">
                  <div className="text-xs font-semibold text-brand-red uppercase tracking-widest">
                    Location
                  </div>
                  <div className="mt-1">{e.place}</div>
                  <div className="mt-3">
                    <a
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-xl bg-white ring-1 ring-slate-200 px-4 py-2 text-xs font-semibold text-brand-indigo hover:bg-slate-50 transition"
                    >
                      Enquire
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery (separate section below events) */}
        <div className="mt-10">
          <div className="flex items-end justify-between gap-4">
            <div>
              <div className="kicker">Gallery</div>
              <h3 className="mt-2 text-2xl font-semibold text-brand-indigo">
                Event photos <span className="text-brand-red">•</span>
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Tap any image to view it larger.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {gallery.map((g, idx) => (
              <button
                key={`${g.title}-${g.date}`}
                onClick={() => setOpen(idx)}
                className="card overflow-hidden text-left card-hover"
              >
                <div className="aspect-video bg-slate-100 relative">
                  <img src={g.img} alt="" className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-slate-900/25" />
                  <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                    <DatePill date={g.date} />
                    <TagPill tag={g.tag} />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-semibold text-brand-indigo">{g.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{g.place}</p>
                  <div className="mt-4 text-xs font-semibold text-brand-red uppercase tracking-widest">
                    View
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Gallery modal */}
          {open !== null && (
            <div
              className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4"
              role="dialog"
              aria-modal="true"
              onMouseDown={() => setOpen(null)}
            >
              <div
                className="w-full max-w-5xl card overflow-hidden"
                onMouseDown={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between p-4 border-b border-slate-200">
                  <div className="text-sm font-semibold text-brand-indigo">
                    Event gallery <span className="text-brand-red">•</span>
                  </div>
                  <button
                    onClick={() => setOpen(null)}
                    className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition"
                    aria-label="Close image"
                  >
                    <X className="h-4 w-4" />
                    Close
                  </button>
                </div>

                <div className="p-4">
                  <div className="aspect-video bg-slate-100 rounded-2xl overflow-hidden relative">
                    <img
                      src={gallery[open].img}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                    {/* extra close button inside image (helps on mobile) */}
                    <button
                      onClick={() => setOpen(null)}
                      className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 hover:bg-white ring-1 ring-slate-200 shadow-soft"
                      aria-label="Close"
                    >
                      <X className="h-5 w-5 text-slate-700" />
                    </button>
                  </div>

                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    <DatePill date={gallery[open].date} />
                    <TagPill tag={gallery[open].tag} />
                    <div className="ml-auto text-sm text-slate-600">
                      <span className="text-xs font-semibold text-brand-red uppercase tracking-widest">
                        Location
                      </span>
                      <span className="ml-2">{gallery[open].place}</span>
                    </div>
                  </div>

                  <h3 className="mt-3 text-lg font-semibold text-brand-indigo">
                    {gallery[open].title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">
                    Replace these demo images with real event photos/videos and add verified captions.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </SectionShell>
    </div>
  );
}
