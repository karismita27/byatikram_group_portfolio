import React from "react";

export default function SectionShell({ id, kicker, title, subtitle, children, className = "" }) {
  return (
    <section id={id} className={["py-14 sm:py-16", className].join(" ")}>
      <div className="container-pad">
        {(kicker || title || subtitle) && (
          <header className="max-w-3xl">
            {kicker && <div className="kicker">{kicker}</div>}
            {title && <h2 className="mt-2 text-3xl sm:text-4xl font-semibold section-title">{title}</h2>}
            {subtitle && <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">{subtitle}</p>}
          </header>
        )}
        <div className={title || subtitle ? "mt-10" : ""}>{children}</div>
      </div>
    </section>
  );
}
