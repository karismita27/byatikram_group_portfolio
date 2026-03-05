// src/pages/admin/AdminGallery.jsx
import React from "react";
import { Trash2, Plus } from "lucide-react";
import SectionCard from "../components/SectionCard.jsx";
import TextInput from "../components/Form/TextInput.jsx";
import { initialGallery } from "../data/adminMock.js";

export default function AdminGallery() {
  const emptyForm = { title: "", place: "", date: "", image: "" };
  const [gallery, setGallery] = React.useState(initialGallery);
  const [form, setForm] = React.useState(emptyForm);

  const submit = (e) => {
    e.preventDefault();
    if (!form.title || !form.place || !form.date || !form.image) return;

    setGallery((prev) => [{ id: Date.now(), ...form }, ...prev]);
    setForm(emptyForm);
  };

  const onDelete = (id) => setGallery((prev) => prev.filter((x) => x.id !== id));

  return (
    <div className="space-y-6">
      <SectionCard title="Upload gallery images" subtitle="Add images with title, place, and date.">
        <form onSubmit={submit} className="grid gap-4 lg:grid-cols-2">
          <TextInput
            label="Title"
            placeholder="Enter image title"
            value={form.title}
            onChange={(e) => setForm((p) => ({ ...p, title: e.target.value }))}
          />
          <TextInput
            label="Place"
            placeholder="Enter place"
            value={form.place}
            onChange={(e) => setForm((p) => ({ ...p, place: e.target.value }))}
          />
          <TextInput
            label="Date"
            type="date"
            value={form.date}
            onChange={(e) => setForm((p) => ({ ...p, date: e.target.value }))}
          />
          <TextInput
            label="Image URL"
            placeholder="Paste image URL"
            value={form.image}
            onChange={(e) => setForm((p) => ({ ...p, image: e.target.value }))}
          />

          <div className="lg:col-span-2">
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700"
            >
              <Plus className="h-4 w-4" />
              Add image
            </button>
          </div>
        </form>
      </SectionCard>

      <SectionCard title="Gallery preview" subtitle="Clean grid preview with delete control.">
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {gallery.map((g) => (
            <div
              key={g.id}
              className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200/70"
            >
              <div className="aspect-[16/10] bg-slate-100">
                <img src={g.image} alt={g.title} className="h-full w-full object-cover" />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <div className="font-semibold text-slate-900 truncate">{g.title}</div>
                    <div className="mt-1 text-sm text-slate-600">{g.place}</div>
                    <div className="mt-1 text-xs text-slate-500">{g.date}</div>
                  </div>
                  <button
                    className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-red-50 text-red-700 ring-1 ring-red-100 transition hover:bg-red-100"
                    onClick={() => onDelete(g.id)}
                    aria-label="Delete image"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  );
}