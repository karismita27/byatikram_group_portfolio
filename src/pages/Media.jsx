import React from "react";
import SectionShell from "../components/site/SectionShell.jsx";

const awards = [
  { year: "2025", title: "Excellence in PR Execution", desc: "Recognized for disciplined campaign delivery and measurable coverage." },
  { year: "2024", title: "Brand Visibility Award", desc: "Awarded for consistent brand presence across media and events." },
  { year: "2024", title: "Strategic Communications Recognition", desc: "Honored for stakeholder-aligned messaging frameworks." },
  { year: "2023", title: "Outstanding Media Outreach", desc: "Noted for strong relationships and reliable media operations." },
  { year: "2023", title: "Community Impact Mention", desc: "Highlighted for regional initiatives and trust-building work." },
  { year: "2022", title: "Rising Communications Partner", desc: "Early recognition for structured PR programs and consistent delivery." },
];

const news = [
  { date: "2026-01-12", tag: "Media", title: "Byatikram Group featured in regional media", summary: "A short summary of recognition and coverage. Replace with verified article information." },
  { date: "2025-12-03", tag: "Initiative", title: "Successful community initiative concluded", summary: "Highlights of social impact and stakeholder participation. Add outcomes and partners." },
  { date: "2025-11-20", tag: "Campaign", title: "Major PR campaign launch", summary: "A clean summary of the campaign, outcomes, and next steps. Add links when available." },
];


function DatePill({ date }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-brand-mist px-3 py-1 ring-1 ring-slate-200/70 text-xs font-semibold text-slate-700">
      <span className="h-2 w-2 rounded-full bg-brand-red" />
      {date}
    </div>
  );
}

export default function Media() {
  return (
    <div>
      <SectionShell
        kicker="Media"
        title={
          <span>
            Awards & <span className="text-brand-red">news</span>
          </span>
        }
        subtitle="Recognition and newsroom updates—keep events in the Events page."
      >
        {/* Awards */}
        <div className="grid gap-6 lg:grid-cols-3 lg:items-start">
          <div className="lg:col-span-1 card p-7">
            <h2 className="text-xl font-semibold text-brand-indigo">
              Awards <span className="text-brand-red">•</span>
            </h2>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Add verified award entries with year, issuing body, and a short context. Keep it concise and factual.
            </p>
            <div className="mt-5 text-xs text-slate-500">
              Tip: Use 5–6 cards for best visual density.
            </div>
          </div>

          <div className="lg:col-span-2 grid gap-4 sm:grid-cols-2">
            {awards.slice(0, 6).map((a) => (
              <div key={a.title} className="card p-6 card-hover">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-brand-red">{a.year}</div>
                  <span className="h-2 w-2 rounded-full bg-brand-red" />
                </div>
                <h3 className="mt-3 text-base font-semibold text-brand-indigo">{a.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{a.desc}</p>
                <div className="mt-4 h-[2px] w-10 rounded-full bg-brand-red" />
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      {/* News */}
      <SectionShell
        id="news"
        kicker="News"
        title={
          <span>
            Latest <span className="text-brand-red">updates</span>
          </span>
        }
        subtitle="Professional news cards with tag, date, title, and short summary."
        className="bg-brand-mist"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {news.map((n) => (
            <article key={n.title} className="card p-6 card-hover">
              <div className="flex items-center justify-between gap-3">
                <DatePill date={n.date} />
                <div className="text-xs font-semibold text-brand-red uppercase tracking-widest">{n.tag}</div>
              </div>
              <h3 className="mt-3 text-base font-semibold text-brand-indigo">{n.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{n.summary}</p>
              <div className="mt-5 text-sm font-semibold text-brand-indigo link-underline">
                Read more →
              </div>
            </article>
          ))}
        </div>
      </SectionShell>
    </div>
  );
}
