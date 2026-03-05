// src/pages/admin/AdminEvents.jsx
import React from "react";
import { Pencil, Trash2, Plus } from "lucide-react";
import SectionCard from "../components/SectionCard.jsx";
import TextInput from "../components/Form/TextInput.jsx";
import TextArea from "../components/Form/TextArea.jsx";
import SelectInput from "../components/Form/SelectInput.jsx";
import { initialEvents } from "../data/adminMock.js";

export default function AdminEvents() {
  const emptyForm = {
    title: "",
    date: "",
    location: "",
    description: "",
    image: "",
    type: "Upcoming",
  };

  const [events, setEvents] = React.useState(initialEvents);
  const [form, setForm] = React.useState(emptyForm);
  const [editId, setEditId] = React.useState(null);

  const submit = (e) => {
    e.preventDefault();
    if (!form.title || !form.date || !form.location || !form.description || !form.image) return;

    if (editId) {
      setEvents((prev) => prev.map((x) => (x.id === editId ? { ...x, ...form } : x)));
    } else {
      setEvents((prev) => [{ id: Date.now(), ...form }, ...prev]);
    }

    setEditId(null);
    setForm(emptyForm);
  };

  const onEdit = (item) => {
    setEditId(item.id);
    setForm({
      title: item.title,
      date: item.date,
      location: item.location,
      description: item.description,
      image: item.image,
      type: item.type,
    });
  };

  const onDelete = (id) => {
    setEvents((prev) => prev.filter((x) => x.id !== id));
    if (editId === id) {
      setEditId(null);
      setForm(emptyForm);
    }
  };

  return (
    <div className="space-y-6">
      <SectionCard
        title="Add / edit event"
        subtitle="Create and manage events. Use type to mark upcoming or past."
      >
        <form onSubmit={submit} className="grid gap-4 lg:grid-cols-2">
          <TextInput
            label="Title"
            placeholder="Enter event title"
            value={form.title}
            onChange={(e) => setForm((p) => ({ ...p, title: e.target.value }))}
          />
          <TextInput
            label="Date"
            type="date"
            value={form.date}
            onChange={(e) => setForm((p) => ({ ...p, date: e.target.value }))}
          />
          <TextInput
            label="Location"
            placeholder="Enter location"
            value={form.location}
            onChange={(e) => setForm((p) => ({ ...p, location: e.target.value }))}
          />
          <SelectInput
            label="Event Type"
            value={form.type}
            onChange={(e) => setForm((p) => ({ ...p, type: e.target.value }))}
          >
            <option value="Upcoming">Upcoming</option>
            <option value="Past">Past</option>
          </SelectInput>

          <div className="lg:col-span-2">
            <TextInput
              label="Event Image URL"
              placeholder="Paste image URL"
              value={form.image}
              onChange={(e) => setForm((p) => ({ ...p, image: e.target.value }))}
            />
          </div>

          <div className="lg:col-span-2">
            <TextArea
              label="Description"
              placeholder="Enter event description"
              value={form.description}
              onChange={(e) => setForm((p) => ({ ...p, description: e.target.value }))}
            />
          </div>

          <div className="lg:col-span-2 flex flex-wrap gap-3">
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700"
            >
              <Plus className="h-4 w-4" />
              {editId ? "Update Event" : "Add Event"}
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

      <SectionCard title="Events list" subtitle="Manage events in a clean table layout.">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="text-left text-xs uppercase tracking-[0.12em] text-slate-500">
              <tr>
                <th className="py-3 pr-4">Event</th>
                <th className="py-3 pr-4">Type</th>
                <th className="py-3 pr-4">Date</th>
                <th className="py-3 pr-4">Location</th>
                <th className="py-3 pr-4">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {events.map((e) => (
                <tr key={e.id} className="align-top">
                  <td className="py-4 pr-4">
                    <div className="flex items-start gap-3">
                      <div className="h-14 w-20 overflow-hidden rounded-2xl bg-slate-100 ring-1 ring-slate-200">
                        <img src={e.image} alt={e.title} className="h-full w-full object-cover" />
                      </div>
                      <div className="min-w-0">
                        <div className="font-semibold text-slate-900">{e.title}</div>
                        <div className="mt-1 text-xs text-slate-500 line-clamp-2">
                          {e.description}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 pr-4">
                    <span
                      className={[
                        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ring-1",
                        e.type === "Upcoming"
                          ? "bg-indigo-50 text-indigo-700 ring-indigo-100"
                          : "bg-slate-50 text-slate-700 ring-slate-200",
                      ].join(" ")}
                    >
                      {e.type}
                    </span>
                  </td>
                  <td className="py-4 pr-4 text-slate-700">{e.date}</td>
                  <td className="py-4 pr-4 text-slate-700">{e.location}</td>
                  <td className="py-4 pr-4">
                    <div className="flex flex-wrap gap-2">
                      <button
                        className="inline-flex items-center gap-2 rounded-2xl bg-white px-3 py-2 text-sm font-semibold text-slate-700 ring-1 ring-slate-200 transition hover:bg-slate-50"
                        onClick={() => onEdit(e)}
                      >
                        <Pencil className="h-4 w-4" /> Edit
                      </button>
                      <button
                        className="inline-flex items-center gap-2 rounded-2xl bg-red-50 px-3 py-2 text-sm font-semibold text-red-700 ring-1 ring-red-100 transition hover:bg-red-100"
                        onClick={() => onDelete(e.id)}
                      >
                        <Trash2 className="h-4 w-4" /> Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>
    </div>
  );
}