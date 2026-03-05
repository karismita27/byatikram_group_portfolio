// src/pages/admin/AdminInquiries.jsx
import React from "react";
import { Trash2, Eye } from "lucide-react";
import SectionCard from "../components/SectionCard.jsx";
import { initialInquiries } from "../data/adminMock.js";

export default function AdminInquiries() {
  const [open, setOpen] = React.useState(null);
  const [rows, setRows] = React.useState(initialInquiries);

  const onDelete = (id) => {
    setRows((prev) => prev.filter((x) => x.id !== id));
    if (open?.id === id) setOpen(null);
  };

  return (
    <div className="space-y-6">
      <SectionCard
        title="Contact inquiries"
        subtitle="View and delete website form submissions. (UI-only)"
      >
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="text-left text-xs uppercase tracking-[0.12em] text-slate-500">
              <tr>
                <th className="py-3 pr-4">Name</th>
                <th className="py-3 pr-4">Email</th>
                <th className="py-3 pr-4">Phone</th>
                <th className="py-3 pr-4">Message</th>
                <th className="py-3 pr-4">Date</th>
                <th className="py-3 pr-4">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {rows.map((r) => (
                <tr key={r.id} className="align-top">
                  <td className="py-4 pr-4 font-semibold text-slate-900">{r.name}</td>
                  <td className="py-4 pr-4 text-slate-700">{r.email}</td>
                  <td className="py-4 pr-4 text-slate-700">{r.phone}</td>
                  <td className="py-4 pr-4 text-slate-700">
                    <div className="max-w-[420px] line-clamp-2">{r.message}</div>
                  </td>
                  <td className="py-4 pr-4 text-slate-700">{r.date}</td>
                  <td className="py-4 pr-4">
                    <div className="flex flex-wrap gap-2">
                      <button
                        className="inline-flex items-center gap-2 rounded-2xl bg-white px-3 py-2 text-sm font-semibold text-slate-700 ring-1 ring-slate-200 transition hover:bg-slate-50"
                        onClick={() => setOpen(r)}
                      >
                        <Eye className="h-4 w-4" />
                        View
                      </button>
                      <button
                        className="inline-flex items-center gap-2 rounded-2xl bg-red-50 px-3 py-2 text-sm font-semibold text-red-700 ring-1 ring-red-100 transition hover:bg-red-100"
                        onClick={() => onDelete(r.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {open && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            onClick={() => setOpen(null)}
          >
            <div
              className="w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-slate-200"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4 border-b border-slate-200 px-6 py-5">
                <div>
                  <div className="text-lg font-semibold text-slate-900">{open.name}</div>
                  <div className="mt-1 text-sm text-slate-500">
                    {open.email} • {open.phone} • {open.date}
                  </div>
                </div>
                <button
                  className="rounded-2xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200 transition"
                  onClick={() => setOpen(null)}
                >
                  Close
                </button>
              </div>
              <div className="p-6">
                <div className="text-sm font-semibold text-slate-900">Message</div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 whitespace-pre-line">
                  {open.message}
                </p>

                <div className="mt-6 flex justify-end">
                  <button
                    className="inline-flex items-center gap-2 rounded-2xl bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700"
                    onClick={() => onDelete(open.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                    Delete inquiry
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </SectionCard>
    </div>
  );
}








