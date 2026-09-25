import type { ReactNode } from "react";

export function TerminalWindow({
  title,
  children,
  className = "",
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-lg border border-border bg-surface/95 shadow-[0_0_40px_-15px_rgba(109,40,217,0.4)] overflow-hidden ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-border bg-white/[0.03] px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
        <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
        <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
        <span className="ml-2 text-xs text-muted truncate">{title}</span>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}
