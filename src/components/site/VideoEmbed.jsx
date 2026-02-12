import React from "react";

export default function VideoEmbed({ type = "youtube", src, title = "Video" }) {
  if (type === "file") {
    return (
      <video
        className="aspect-video w-full rounded-2xl ring-1 ring-slate-200 bg-black shadow-soft"
        src={src}
        controls
        playsInline
      />
    );
  }

  return (
    <div className="aspect-video w-full overflow-hidden rounded-2xl ring-1 ring-slate-200 bg-black shadow-soft">
      <iframe
        className="h-full w-full"
        src={src}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
