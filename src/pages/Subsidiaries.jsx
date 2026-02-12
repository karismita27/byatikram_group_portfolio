
import React from "react";
import { Link } from "react-router-dom";
import SectionShell from "../components/site/SectionShell.jsx";
import { units } from "../data/units.js";

function getInitials(name) {
  const parts = (name || "").trim().split(/\s+/).filter(Boolean);
  const a = parts[0]?.[0] || "";
  const b = parts[1]?.[0] || "";
  return (a + b).toUpperCase();
}

function SubsidiaryCard({ u }) {
  return (
    <article className="card p-7 flex flex-col">
      <div className="flex items-start gap-4">
        <div className="shrink-0">
          {u.logoSrc ? (
            <img
              src={u.logoSrc}
              alt={`${u.name} logo`}
              className="h-14 w-14 rounded-2xl ring-1 ring-slate-200 object-contain bg-white"
              loading="lazy"
            />
          ) : (
            <div className="h-14 w-14 rounded-2xl bg-brand-mist ring-1 ring-slate-200 grid place-items-center font-semibold text-slate-800">
              <span aria-hidden="true">{u.logoText || getInitials(u.name)}</span>
              <span className="sr-only">{u.name}</span>
            </div>
          )}
        </div>

        <div className="min-w-0">
          <h2 className="text-lg font-semibold text-brand-indigo leading-snug">{u.name}</h2>
          {u.legalName && u.legalName !== u.name && (
            <div className="mt-1 text-sm text-slate-500">{u.legalName}</div>
          )}
        </div>
      </div>

      <p className="mt-4 text-sm text-slate-600 leading-relaxed">{u.shortDescription}</p>

      <div className="mt-6 pt-6 border-t border-slate-200/70 flex items-center justify-between">
        <div className="text-xs text-slate-500">{u.address}</div>
        <Link
          to={`/subsidiaries/${u.slug}`}
          className="text-sm font-medium bg-brand-red text-white px-4 py-2 rounded-xl hover:bg-red-700 active:scale-95 transition-all duration-200"

          aria-label={`Read full profile for ${u.name}`}
        >
          Read Full
        </Link>
      </div>
    </article>
  );
}

export default function Subsidiaries() {
  return (
    <div>
      {/* HERO */}
      <section className="py-14 sm:py-16">
        <div className="container-pad">
          <div className="max-w-3xl">
            <div className="kicker">Group Structure</div>
            <h1 className="mt-2 text-4xl sm:text-5xl font-semibold text-brand-indigo tracking-tight">
              Subsidiaries
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              This group operates through specialized subsidiaries and divisions to ensure disciplined delivery
              across communications strategy, media coordination, digital execution, on-ground operations, and
              community initiatives. Each unit has a defined mandate and delivery model—so stakeholders receive
              consistent outcomes while the group maintains clarity, accountability, and quality control.
            </p>
          </div>
        </div>
      </section>

      {/* GRID */}
      <SectionShell
        kicker="Companies & Divisions"
        title="A structured group of specialized units"
        subtitle="Select a subsidiary to view its profile, scope of work, and representative activity."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {units.map((u) => (
            <SubsidiaryCard key={u.slug} u={u} />
          ))}
        </div>
      </SectionShell>
    </div>
  );
}
