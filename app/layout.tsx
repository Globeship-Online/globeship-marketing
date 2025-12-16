import React from "react";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_15%_0%,rgba(249,115,22,0.22),transparent_60%),radial-gradient(50%_50%_at_80%_25%,rgba(255,255,255,0.06),transparent_60%)]" />
      <div className="relative">{children}</div>
    </div>
  );
}

