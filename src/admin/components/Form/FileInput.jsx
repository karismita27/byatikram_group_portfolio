/ src/components/admin/Form/FileInput.jsx
import React from "react";
import { Upload } from "lucide-react";

export default function FileInput({ label, help, ...props }) {
  return (
    <label className="block">
      <div className="mb-2 text-sm font-medium text-slate-700">{label}</div>
      <div className="flex items-center justify-between gap-4 rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-4 py-4">
        <div className="min-w-0">
          <div className="text-sm font-semibold text-slate-900">Upload image</div>
          {help ? <div className="mt-1 text-xs text-slate-500">{help}</div> : null}
        </div>
        <div className="inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-slate-700 ring-1 ring-slate-200">
          <Upload className="h-4 w-4 text-red-600" />
          Choose file
        </div>
      </div>
      <input {...props} type="file" className="sr-only" />
    </label>
  );
}