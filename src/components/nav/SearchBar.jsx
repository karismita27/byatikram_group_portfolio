import React, { useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, ArrowRight } from "lucide-react";
import { contentIndex } from "../../data/contentIndex.js";

export default function SearchBar({ compact = false }) {
  const navigate = useNavigate();
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);

  const results = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return [];
    return contentIndex
      .filter((x) => (x.title + " " + x.excerpt).toLowerCase().includes(query))
      .slice(0, 6);
  }, [q]);

  function go(to) {
    setOpen(false);
    // Support /path#hash and /#hash
    navigate(to.replace(/\/$/, "") || "/");
    // The layout effect handles smooth scrolling for hashes
    setQ("");
  }

  React.useEffect(() => {
    function onClickOutside(e) {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <div ref={rootRef} className="relative">
      <div className="relative">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
        />
        <input
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          placeholder="Search services, events, news…"
          className={[
            "w-full rounded-2xl border border-slate-200 bg-white",
            "pl-10 pr-3 py-2.5 text-sm text-slate-700 placeholder:text-slate-400",
            "hover:border-slate-300 transition",
            compact ? "h-11" : "h-12",
          ].join(" ")}
          aria-label="Search site content"
        />
      </div>

      {open && (results.length > 0 || q.trim()) && (
        <div className="absolute mt-2 w-full card overflow-hidden">
          <div className="px-3 py-2 border-b border-slate-200 bg-white">
            <div className="text-xs text-slate-500">
              {results.length ? "Top matches" : "No results"}
            </div>
          </div>
          <div className="bg-white">
            {results.map((r) => (
              <button
                key={r.title}
                onClick={() => go(r.to)}
                className="w-full text-left px-3 py-2.5 hover:bg-slate-50 transition flex items-start gap-2"
              >
                <div className="mt-0.5 text-brand-red">
                  <ArrowRight size={16} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-800">{r.title}</div>
                  <div className="text-xs text-slate-500 line-clamp-1">{r.excerpt}</div>
                </div>
              </button>
            ))}

            {!results.length && (
              <div className="px-3 py-3 text-sm text-slate-600">
                Try searching for <span className="font-semibold">services</span>,{" "}
                <span className="font-semibold">clients</span>,{" "}
                <span className="font-semibold">news</span>, or{" "}
                <span className="font-semibold">contact</span>.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
