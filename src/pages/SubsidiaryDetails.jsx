
import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ChevronLeft, ChevronRight, MapPin, Mail, Phone, ExternalLink } from "lucide-react";
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
      <div className="flex h-12 w-24 sm:h-20 sm:w-20 items-center justify-center overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200 shadow-sm">
        <img
          src={unit.logoSrc}
          alt={`${unit.name} logo`}
          className="h-12 w-12 sm:h-14 sm:w-14 object-contain"
        />
      </div>
    );
  }

  return (
    <div className="grid h-16 w-16 sm:h-20 sm:w-20 place-items-center rounded-2xl bg-gradient-to-br from-brand-indigo/10 to-brand-red/10 ring-1 ring-slate-200 shadow-sm font-semibold text-brand-indigo">
      <span aria-hidden="true">{unit.logoText || getInitials(unit.name)}</span>
      <span className="sr-only">{unit.name}</span>
    </div>
  );
}

function InfoItem({ icon, label, value, href }) {
  if (!value) return null;

  const content = href ? (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="text-sm text-slate-700 hover:text-brand-indigo transition break-all"
    >
      {value}
    </a>
  ) : (
    <div className="text-sm text-slate-700">{value}</div>
  );

  return (
    <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200/70">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 text-brand-red">{icon}</div>
        <div className="min-w-0">
          <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
            {label}
          </div>
          <div className="mt-1.5">{content}</div>
        </div>
      </div>
    </div>
  );
}

function GallerySlider({ unit }) {
  const images = Array.isArray(unit.gallery) ? unit.gallery : [];
  const [active, setActive] = React.useState(0);

  if (!images.length) return null;

  const prev = () => setActive((i) => (i - 1 + images.length) % images.length);
  const next = () => setActive((i) => (i + 1) % images.length);

  return (
    <div className="overflow-hidden rounded-[28px] bg-white ring-1 ring-slate-200/80 shadow-sm">
      <div className="relative">
        <div className="aspect-[16/10] lg:aspect-[16/7] bg-slate-100">
          <img
            src={images[active].src}
            alt={images[active].alt || `${unit.name} activity`}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-950/0 to-transparent pointer-events-none" />

        <div className="absolute left-2 right-2 bottom-2 flex items-end justify-between gap-3">
          <div className="max-w-[80%] rounded-2xl bg-slate-950/45 px-4 py-3 text-white backdrop-blur-sm">
            <div className="text-xs font-semibold uppercase tracking-[0.14em] text-white/75">
              Gallery
            </div>
            <div className="mt-1 text-sm sm:text-base font-medium leading-relaxed">
              {images[active].alt || `${unit.name} representative work`}
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-2">
            <button
              type="button"
              onClick={prev}
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/95 text-slate-700 shadow-sm transition hover:bg-white"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={next}
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/95 text-slate-700 shadow-sm transition hover:bg-white"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200/80 p-4 sm:p-5">
        <div className="flex items-center justify-between gap-4">
          <div className="text-xs font-medium text-slate-500">
            {active + 1} / {images.length} images
          </div>

          <div className="flex sm:hidden items-center gap-2">
            <button
              type="button"
              onClick={prev}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white text-slate-700 ring-1 ring-slate-200 transition hover:bg-slate-50"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={next}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white text-slate-700 ring-1 ring-slate-200 transition hover:bg-slate-50"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-5">
          {images.map((g, idx) => (
            <button
              key={`${unit.slug}-thumb-${idx}`}
              type="button"
              onClick={() => setActive(idx)}
              className={[
                "group overflow-hidden rounded-2xl ring-1 transition",
                active === idx
                  ? "ring-brand-indigo shadow-sm"
                  : "ring-slate-200/70 hover:ring-brand-indigo/30",
              ].join(" ")}
              aria-label={`Open image ${idx + 1}`}
            >
              <div className="aspect-[4/3] bg-slate-100">
                <img
                  src={g.src}
                  alt={g.alt || `${unit.name} thumbnail ${idx + 1}`}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function SubsidiaryDetail() {
  const { slug } = useParams();
  const unit = React.useMemo(() => units.find((u) => u.slug === slug), [slug]);

  if (!unit) return <Navigate to="/subsidiaries" replace />;

  return (
    <div className="bg-slate-50/70">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(49,46,129,0.06),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(220,38,38,0.06),transparent_30%)]" />

        <div className="container-pad relative py-12 sm:py-14 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <div className="flex items-start gap-4 sm:gap-5">
                <LogoBlock unit={unit} />

                <div className="min-w-0">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 ring-1 ring-slate-200/80 shadow-sm">
                    <span className="h-2 w-2 rounded-full bg-brand-red" />
                    Subsidiary Profile
                  </div>

                  <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-brand-indigo">
                    {unit.name}
                  </h1>

                  {unit.legalName && unit.legalName !== unit.name && (
                    <div className="mt-2 text-sm text-slate-500">{unit.legalName}</div>
                  )}

                  <p className="mt-4 max-w-3xl text-sm sm:text-base leading-relaxed text-slate-600">
                    {unit.shortDescription}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    <div className="inline-flex items-center gap-2 rounded-full bg-brand-mist px-3 py-1 text-xs font-semibold text-brand-indigo ring-1 ring-slate-200/70">
                      <span className="h-2 w-2 rounded-full bg-brand-red" />
                      {unit.category || unit.industry || "Business Unit"}
                    </div>

                    {(unit.location || unit.address) && (
                      <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200/70">
                        <MapPin className="h-3.5 w-3.5 text-brand-red" />
                        {unit.location || unit.address}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
              <Link to="/subsidiaries" className="btn-outline-indigo text-sm">
                Back to Subsidiaries
              </Link>

              {unit.website && (
                <a
                  href={unit.website}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-brand-red px-5 py-3 text-sm font-semibold text-white transition hover:opacity-95"
                >
                  Visit Website
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* BODY */}
      <SectionShell
        kicker="Overview"
        title={
          <span>
            Mandate and <span className="text-brand-red">operating model</span>
          </span>
        }
        subtitle="A clean, corporate profile page designed for clarity, scope visibility, and responsive reading."
        className="section-soft"
      >
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-8 space-y-6">
            <div className="rounded-[28px] bg-white p-6 sm:p-7 ring-1 ring-slate-200/80 shadow-sm">
              <div className="flex items-center gap-2">
                <span className="h-[2px] w-8 rounded-full bg-brand-red" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                  Detailed overview
                </span>
              </div>

              <h2 className="mt-4 text-xl font-semibold text-brand-indigo">
                Profile description
              </h2>

              <p className="mt-4 whitespace-pre-line text-sm sm:text-base leading-relaxed text-slate-700">
                {unit.description}
              </p>
            </div>

            {Array.isArray(unit.services) && unit.services.length > 0 && (
              <div className="rounded-[28px] bg-white p-6 sm:p-7 ring-1 ring-slate-200/80 shadow-sm">
                <div className="flex items-center gap-2">
                  <span className="h-[2px] w-8 rounded-full bg-brand-red" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                    Scope of work
                  </span>
                </div>

                <h2 className="mt-4 text-xl font-semibold text-brand-indigo">
                  Services / Activities
                </h2>

                <ul className="mt-5 grid gap-3 text-sm sm:text-base text-slate-700">
                  {unit.services.map((s) => (
                    <li key={s} className="flex items-start gap-3 rounded-2xl bg-slate-50 px-4 py-3 ring-1 ring-slate-200/70">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red"
                        aria-hidden="true"
                      />
                      <span className="leading-relaxed">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <aside className="lg:col-span-4 space-y-6">
            <div className="rounded-[28px] bg-white p-6 sm:p-7 ring-1 ring-slate-200/80 shadow-sm">
              <h2 className="text-xl font-semibold text-brand-indigo">Profile snapshot</h2>

              <div className="mt-5 space-y-3">
                <InfoItem
                  icon={<MapPin className="h-4 w-4" />}
                  label="Primary location"
                  value={unit.address || unit.location}
                  href={unit.maps || undefined}
                />
                <InfoItem
                  icon={<Mail className="h-4 w-4" />}
                  label="Email"
                  value={unit.email}
                  href={unit.email ? `mailto:${unit.email}` : undefined}
                />
                <InfoItem
                  icon={<Phone className="h-4 w-4" />}
                  label="Phone"
                  value={unit.phone}
                  href={unit.phone ? `tel:${unit.phone}` : undefined}
                />
                <InfoItem
                  icon={<ExternalLink className="h-4 w-4" />}
                  label="Website"
                  value={unit.website}
                  href={unit.website || undefined}
                />
              </div>
            </div>

            <div className="rounded-[28px] bg-brand-mist p-6 sm:p-7 ring-1 ring-slate-200/80 shadow-sm">
              <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-indigo">
                Corporate note
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                This page is structured to present each subsidiary with a clean profile,
                readable service scope, contact references, and representative visual documentation.
              </p>
            </div>
             <div className="rounded-[28px] bg-brand-mist p-6 sm:p-7 ring-1 ring-slate-200/80 shadow-sm">
              <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-indigo">
                Contact
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                For business enquiries, proposals, and partnership discussions, reach the group office using the contact details above.
              </p>
              <div className="flex justify-center">
              <a href="/contact"
                  className="inline-flex items-center justify-center rounded-2xl bg-brand-red px-20 py-2 text-sm font-semibold text-white transition hover:opacity-95"
                >Contact the Team</a></div>
            </div>
          </aside>
        </div>
      </SectionShell>

      {/* GALLERY SLIDER */}
      {Array.isArray(unit.gallery) && unit.gallery.length > 0 && (
        <SectionShell
          kicker="Gallery"
          title={
            <span>
              Representative work and <span className="text-brand-red">activity</span>
            </span>
          }
          subtitle="A responsive image slider for event documentation, field activity, media coverage, or project highlights."
        >
          <GallerySlider unit={unit} />
        </SectionShell>
      )}
    </div>
  );
}