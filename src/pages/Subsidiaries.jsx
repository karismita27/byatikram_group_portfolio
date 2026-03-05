
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
    <article className="group relative overflow-hidden rounded-[28px] bg-white p-6 sm:p-7 ring-1 ring-slate-200/70 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:ring-brand-indigo/20">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-indigo via-brand-red to-brand-indigo opacity-90" />
      <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-brand-red/5 blur-3xl transition duration-300 group-hover:bg-brand-indigo/10" />

      <div className="relative z-10 flex h-full flex-col">
        <div className="flex items-start gap-4">
          <div className="shrink-0">
            {u.logoSrc ? (
              <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200 shadow-sm">
                <img
                  src={u.logoSrc}
                  alt={`${u.name} logo`}
                  className="h-12 w-12 object-contain"
                  loading="lazy"
                />
              </div>
            ) : (
              <div className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-brand-indigo/10 to-brand-red/10 ring-1 ring-slate-200 shadow-sm">
                <span className="text-sm font-semibold tracking-wide text-brand-indigo">
                  {u.logoText || getInitials(u.name)}
                </span>
                <span className="sr-only">{u.name}</span>
              </div>
            )}
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-mist px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-indigo ring-1 ring-slate-200/70">
                <span className="h-2 w-2 rounded-full bg-brand-red" />
                {u.category || u.industry || "Business Unit"}
              </span>
            </div>

            <h2 className="mt-3 text-lg sm:text-xl font-semibold leading-snug tracking-tight text-brand-indigo">
              {u.name}
            </h2>

            {u.legalName && u.legalName !== u.name && (
              <div className="mt-1 text-sm text-slate-500">{u.legalName}</div>
            )}
          </div>
        </div>

        <p className="mt-5 text-sm leading-relaxed text-slate-600">
          {u.shortDescription}
        </p>

        {(u.address || u.location) && (
          <div className="mt-5 rounded-2xl bg-slate-50/90 p-4 ring-1 ring-slate-200/70">
            <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
              Location
            </div>
            <div className="mt-1.5 text-sm font-medium text-slate-700">
              {u.location || u.address}
            </div>
          </div>
        )}

        <div className="mt-6 border-t border-slate-200/80 pt-5">
          <div className="flex items-center justify-between gap-4">
            <div className="text-xs font-medium text-slate-500">
              Profile • Scope • Activity
            </div>

            <Link
              to={`/subsidiaries/${u.slug}`}
              className="inline-flex items-center justify-center rounded-2xl bg-brand-red px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:opacity-95 active:scale-95"
              aria-label={`View details for ${u.name}`}
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Subsidiaries() {
  return (
    <div className="bg-slate-50/70">
      {/* PAGE HEADER */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(49,46,129,0.06),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(220,38,38,0.06),transparent_30%)]" />

        <div className="container-pad relative py-14 sm:py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <div className="kicker">Subsidiaries</div>

              <h1 className="mt-2 text-4xl sm:text-4xl font-semibold tracking-tight text-brand-indigo">
                Our Subsidiaries <span className="text-brand-red">•</span>
              </h1>

              <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600">
                This group operates through specialized subsidiaries and divisions to ensure disciplined delivery across communications strategy, media coordination, digital execution, on-ground operations, and community initiatives. Each unit has a defined mandate and delivery model—so stakeholders receive consistent outcomes while the group maintains clarity, accountability, and quality control.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-[28px] bg-white p-6 sm:p-7 ring-1 ring-slate-200/80 shadow-sm">
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "Structure", value: "Specialized units" },
                    { label: "Focus", value: "Defined mandates" },
                    { label: "Delivery", value: "Corporate-grade" },
                    { label: "Coverage", value: "Multi-domain" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200/70"
                    >
                      <div className="text-[11px] font-medium uppercase tracking-[0.14em] text-slate-500">
                        {item.label}
                      </div>
                      <div className="mt-1.5 text-sm font-semibold text-slate-800">
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-2xl bg-brand-mist p-4 ring-1 ring-slate-200/70">
                  <div className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-indigo">
                    Group ecosystem
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    Each subsidiary operates with a defined scope, allowing the group to maintain
                    clarity, accountability, and delivery quality across different verticals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUBSIDIARIES GRID */}
      <SectionShell
        kicker="Companies & Initiatives"
        title={
          <span>
            A structured ecosystem of <span className="text-brand-red">specialized units</span>
          </span>
        }
        subtitle="Each subsidiary is presented with a clear profile, category, and direct access to its detailed page."
        className="section-soft"
      >
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl text-sm leading-relaxed text-slate-600">
            Browse the group’s subsidiaries and initiatives through a clean, corporate interface
            designed for clarity, consistency, and professional presentation.
          </div>

          <div className="inline-flex items-center rounded-full bg-white px-4 py-2 text-xs font-semibold text-slate-700 ring-1 ring-slate-200/80 shadow-sm">
            {units.length} units listed
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {units.map((u) => (
            <SubsidiaryCard key={u.slug} u={u} />
          ))}
        </div>
      </SectionShell>
    </div>
  );
}