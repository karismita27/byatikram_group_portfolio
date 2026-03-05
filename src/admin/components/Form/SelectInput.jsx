// src/components/admin/Form/SelectInput.jsx
import React from "react";

export default function SelectInput({ label, children, ...props }) {
  return (
    <label className="block">
      <div className="mb-2 text-sm font-medium text-slate-700">{label}</div>
      <select
        {...props}
        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-indigo-300 focus:ring-4 focus:ring-indigo-50"
      >
        {children}
      </select>
    </label>
  );
}