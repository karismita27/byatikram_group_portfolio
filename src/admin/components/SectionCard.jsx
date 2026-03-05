// src/components/admin/SectionCard.jsx
import React from "react";

export default function SectionCard({ title, subtitle, actions, children }) {
  return (
    <div className="rounded-3xl bg-white shadow-sm ring-1 ring-slate-200/70">
      <div className="flex flex-col gap-4 border-b border-slate-200/70 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold tracking-tight text-slate-900">{title}</h2>
          {subtitle ? <p className="mt-1 text-sm text-slate-500">{subtitle}</p> : null}
        </div>
        {actions ? <div className="flex flex-wrap gap-2">{actions}</div> : null}
      </div>
      <div className="p-6">{children}</div>
    </div>
  );
}