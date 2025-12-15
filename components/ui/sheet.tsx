"use client";
import React from "react";

const SheetContext = React.createContext<{ open: boolean; setOpen: (v: boolean) => void } | null>(null);

export function Sheet({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);
  return <SheetContext.Provider value={{ open, setOpen }}>{children}</SheetContext.Provider>;
}

export function SheetTrigger({ asChild, children }: { asChild?: boolean; children: React.ReactNode }) {
  const ctx = React.useContext(SheetContext);
  if (!ctx) throw new Error("SheetTrigger must be used within Sheet");
  const onClick = () => ctx.setOpen(true);

 if (asChild && React.isValidElement(children)) {
  const child = children as React.ReactElement<{ onClick?: () => void }>;
  return React.cloneElement(child, { onClick });
}
export function SheetContent({
  side = "right",
  className = "",
  children,
}: {
  side?: "right" | "left";
  className?: string;
  children: React.ReactNode;
}) {
  const ctx = React.useContext(SheetContext);
  if (!ctx) throw new Error("SheetContent must be used within Sheet");
  const { open, setOpen } = ctx;

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      <div
        className="absolute inset-0 bg-black/60"
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
      <div
        className={[
          "absolute top-0 h-full w-[86%] max-w-sm border-l border-white/10 bg-black p-6 text-white shadow-2xl",
          side === "right" ? "right-0" : "left-0 border-l-0 border-r",
          className,
        ].join(" ")}
        role="dialog"
        aria-modal="true"
      >
        <button
          className="absolute right-4 top-4 rounded-xl border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 hover:bg-white/10"
          onClick={() => setOpen(false)}
        >
          Close
        </button>
        {children}
      </div>
    </div>
  );
}
