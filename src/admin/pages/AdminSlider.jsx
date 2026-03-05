// src/pages/admin/AdminSlider.jsx
import React from "react";
import { Pencil, Trash2, Upload } from "lucide-react";
import SectionCard from "../components/SectionCard.jsx";
import TextInput from "../components/Form/TextInput.jsx";
import TextArea from "../components/Form/TextArea.jsx";
import { initialSliders } from "../data/adminMock.js";

export default function AdminSlider() {
  const emptyForm = { title: "", subtitle: "", image: "" };
  const [sliders, setSliders] = React.useState(initialSliders);
  const [form, setForm] = React.useState(emptyForm);
  const [editId, setEditId] = React.useState(null);

  const submit = (e) => {
    e.preventDefault();
    if (!form.title || !form.subtitle || !form.image) return;

    if (editId) {
      setSliders((prev) => prev.map((x) => (x.id === editId ? { ...x, ...form } : x)));
    } else {
      setSliders((prev) => [{ id: Date.now(), ...form }, ...prev]);
    }

    setEditId(null);
    setForm(emptyForm);
  };

  const onEdit = (item) => {
    setEditId(item.id);
    setForm({ title: item.title, subtitle: item.subtitle, image: item.image });
  };

  const onDelete = (id) => {
    setSliders((prev) => prev.filter((x) => x.id !== id));
    if (editId === id) {
      setEditId(null);
      setForm(emptyForm);
    }
  };

  return (
    <div className="space-y-6">
      <SectionCard
        title="Add / edit slider"
        subtitle="Upload image URL (UI-only) + set title and subtitle."
      >
        <form onSubmit={submit} className="grid gap-4 lg:grid-cols-2">
          <TextInput
            label="Title"
            placeholder="Enter slider title"
            value={form.title}
            onChange={(e) => setForm((p) => ({ ...p, title: e.target.value }))}
          />
          <TextInput
            label="Image URL"
            placeholder="Paste image URL"
            value={form.image}
            onChange={(e) => setForm((p) => ({ ...p, image: e.target.value }))}
          />
          <div className="lg:col-span-2">
            <TextArea
              label="Subtitle"
              placeholder="Enter subtitle"
              value={form.subtitle}
              onChange={(e) => setForm((p) => ({ ...p, subtitle: e.target.value }))}
            />
          </div>

          <div className="lg:col-span-2 flex flex-wrap gap-3">
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700"
            >
              <Upload className="h-4 w-4" />
              {editId ? "Update Slider" : "Add Slider"}
            </button>

            {editId ? (
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 ring-1 ring-slate-200 transition hover:bg-slate-50"
                onClick={() => {
                  setEditId(null);
                  setForm(emptyForm);
                }}
              >
                Cancel
              </button>
            ) : null}
          </div>
        </form>
      </SectionCard>

      <SectionCard title="Slider preview" subtitle="Current slider items displayed on the homepage.">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {sliders.map((s) => (
            <div
              key={s.id}
              className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200/70"
            >
              <div className="aspect-[16/10] bg-slate-100">
                <img src={s.image} alt={s.title} className="h-full w-full object-cover" />
              </div>
              <div className="p-5">
                <div className="text-base font-semibold text-slate-900">{s.title}</div>
                <div className="mt-2 text-sm leading-relaxed text-slate-600">{s.subtitle}</div>

                <div className="mt-5 flex gap-2">
                  <button
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 ring-1 ring-slate-200 transition hover:bg-slate-50"
                    onClick={() => onEdit(s)}
                  >
                    <Pencil className="h-4 w-4" /> Edit
                  </button>
                  <button
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-red-50 px-4 py-2.5 text-sm font-semibold text-red-700 ring-1 ring-red-100 transition hover:bg-red-100"
                    onClick={() => onDelete(s.id)}
                  >
                    <Trash2 className="h-4 w-4" /> Delete
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