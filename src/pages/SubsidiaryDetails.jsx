
import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import SectionShell from "../components/site/SectionShell.jsx";
import { units } from "../data/units.js";

function getInitials(name) {
  const parts = (name || "").trim().split(/\s+/).filter(Boolean);
  const a = parts[0]?.[0] || "";
  const b = parts[1]?.[0] || "";
  return (a + b).toUpperCase();
}

function LogoBlock({ unit }) {
  if (unit.logoSrc) {
    return (
      <img
        src={unit.logoSrc}
        alt={`${unit.name} logo`}
        className="h-16 w-16 sm:h-20 sm:w-20 rounded-2xl ring-1 ring-slate-200 object-contain bg-white"
      />
    );
  }

  return (
    <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-2xl bg-brand-mist ring-1 ring-slate-200 grid place-items-center font-semibold text-slate-800">
      <span aria-hidden="true">{unit.logoText || getInitials(unit.name)}</span>
      <span className="sr-only">{unit.name}</span>
    </div>
  );
}

export default function SubsidiaryDetail() {
  const { slug } = useParams();
  const unit = React.useMemo(() => units.find((u) => u.slug === slug), [slug]);

  if (!unit) return <Navigate to="/subsidiaries" replace />;

  return (
    <div>
      {/* HERO */}
      <section className="py-12 sm:py-14">
        <div className="container-pad">
          <div className="max-w-5xl">
            <div className="flex items-start justify-between gap-6">
              <div className="flex items-start gap-4 sm:gap-5">
                <LogoBlock unit={unit} />
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-slate-500">Subsidiary Profile</div>
                  <h1 className="mt-1 text-3xl sm:text-4xl font-semibold text-brand-indigo tracking-tight">
                    {unit.name}
                  </h1>
                  <div className="mt-2 text-sm text-slate-600 leading-relaxed max-w-2xl">
                    {unit.shortDescription}
                  </div>
                </div>
              </div>

              <div className="hidden sm:flex items-center gap-3">
                <Link to="/subsidiaries" className="btn-outline-indigo text-sm">
                  Back to Subsidiaries
                </Link>
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="card p-5">
                <div className="text-xs font-semibold text-slate-500 tracking-widest">LOCATION</div>
                <div className="mt-2 text-sm font-semibold text-slate-800">{unit.address}</div>
              </div>
              <div className="card p-5">
                <div className="text-xs font-semibold text-slate-500 tracking-widest">CONTACT</div>
                <div className="mt-2 text-sm text-slate-700">
                  <div className="font-semibold">{unit.email}</div>
                  <div className="mt-1">{unit.phone}</div>
                </div>
              </div>
              <div className="card p-5">
                <div className="text-xs font-semibold text-slate-500 tracking-widest">MAP</div>
                <a
                  className="mt-2 inline-flex text-sm font-semibold text-brand-indigo link-underline"
                  href={unit.maps}
                  target="_blank"
                  rel="noreferrer"
                >
                  View location
                </a>
              </div>
            </div>

            {/* mobile back */}
            <div className="mt-6 sm:hidden">
              <Link to="/subsidiaries" className="btn-outline-indigo w-full justify-center text-sm">
                Back to Subsidiaries
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BODY */}
      <SectionShell
        kicker="Overview"
        title="Mandate and operating model"
        subtitle="A structured profile with an emphasis on clarity, scope, and governance-ready documentation."
      >
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-8">
            <div className="card p-7">
              <h2 className="text-lg font-semibold text-brand-indigo">Detailed description</h2>
              <p className="mt-4 text-sm sm:text-base text-slate-700 leading-relaxed whitespace-pre-line">
                {unit.description}
              </p>
            </div>

            {Array.isArray(unit.services) && unit.services.length > 0 && (
              <div className="mt-6 card p-7">
                <h2 className="text-lg font-semibold text-brand-indigo">Services / Activities</h2>
                <ul className="mt-4 space-y-2 text-sm sm:text-base text-slate-700">
                  {unit.services.map((s) => (
                    <li key={s} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-red shrink-0" aria-hidden="true" />
                      <span className="leading-relaxed">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <aside className="lg:col-span-4">
            <div className="card p-7">
              <h2 className="text-lg font-semibold text-brand-indigo">Profile snapshot</h2>
              <dl className="mt-4 space-y-4">
                <div>
                  <dt className="text-xs font-semibold text-slate-500 tracking-widest">UNIT</dt>
                  <dd className="mt-1 text-sm text-slate-700">{unit.legalName || unit.name}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold text-slate-500 tracking-widest">PRIMARY LOCATION</dt>
                  <dd className="mt-1 text-sm text-slate-700">{unit.address}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold text-slate-500 tracking-widest">EMAIL</dt>
                  <dd className="mt-1 text-sm text-slate-700">{unit.email}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold text-slate-500 tracking-widest">PHONE</dt>
                  <dd className="mt-1 text-sm text-slate-700">{unit.phone}</dd>
                </div>
              </dl>
            </div>

            <div className="mt-6 card p-7">
              <h2 className="text-lg font-semibold text-brand-indigo">Notes</h2>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Replace placeholder descriptions and gallery images with real subsidiary-specific content. This layout is
                designed to read like a corporate profile section in an annual report.
              </p>
            </div>
          </aside>
        </div>
      </SectionShell>

      {/* GALLERY */}
      {Array.isArray(unit.gallery) && unit.gallery.length > 0 && (
        <SectionShell
          kicker="Gallery"
          title="Representative work and activity"
          subtitle="A structured gallery section suitable for event documentation, media coverage, or project highlights."
        >
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {unit.gallery.map((g, idx) => (
              <figure key={`${unit.slug}-g-${idx}`} className="card overflow-hidden">
                <div className="relative aspect-[4/3]">
                  <img
                    src={g.src}
                    alt={g.alt || `${unit.name} activity`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                {g.alt && (
                  <figcaption className="p-4 text-sm text-slate-600 leading-relaxed border-t border-slate-200/70">
                    {g.alt}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        </SectionShell>
      )}
    </div>
  );
}
