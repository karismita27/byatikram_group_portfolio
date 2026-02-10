import React from "react";

export default function LogoPill({ text, title }) {
  return (
    <div
      title={title}
      className="h-16 rounded-2xl bg-white ring-1 ring-slate-200 grid place-items-center font-semibold text-slate-500 tracking-wide shadow-sm
                 grayscale opacity-80 hover:opacity-100 hover:grayscale-0 hover:ring-brand-red/40 transition"
    >
      <span className="select-none">{text}</span>
    </div>
  );
}
