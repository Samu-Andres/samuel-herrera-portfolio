import type { ReactNode } from "react";

export function BrowserWindow({
  url,
  children,
  className = "",
}: {
  url: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-lg border border-border bg-surface/80 overflow-hidden ${className}`}
    >
      <div className="flex items-center gap-3 border-b border-border bg-white/[0.03] px-4 py-2.5">
        <div className="flex gap-2 shrink-0">
          <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
          <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
          <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
        </div>
        <div className="flex-1 min-w-0 rounded-md bg-black/40 border border-border px-3 py-1 text-xs text-muted truncate">
          {url.includes(".") ? `https://${url}` : url}
        </div>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}
