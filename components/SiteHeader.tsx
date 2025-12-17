"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";

const NAV = [
  { href: "/shipping-services", label: "Shipping Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
  { href: "/about-us", label: "About Us" },
  { href: "/contact-us", label: "Contact Us" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [open, setOpen] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  // Close on Escape
  React.useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // Lock body scroll
  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const MobileMenu = () => (
    <div className="fixed inset-0 z-[9999] md:hidden">
      {/* Backdrop */}
      <button
        className="absolute inset-0 bg-black/70"
        aria-label="Close menu overlay"
        onClick={() => setOpen(false)}
      />

      {/* Panel (full screen) */}
      <div
        className="absolute inset-0 bg-[#050509]/98 backdrop-blur-xl"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile menu"
      >
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <span className="text-sm font-semibold text-white/90">Menu</span>
          <button
            onClick={() => setOpen(false)}
            className="rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/80 transition hover:bg-white/10"
            aria-label="Close menu"
          >
            Close
          </button>
        </div>

        <div className="px-5 py-5">
          <div className="space-y-1">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-3 text-base font-medium text-white/85 transition hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="mt-6 border-t border-white/10 pt-6">
            <a
              href="https://ship.globeship.ca"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center rounded-2xl bg-orange-500 px-5 py-4 text-base font-semibold text-black transition hover:bg-orange-400"
            >
              Start Shipping
            </a>
            <p className="mt-3 text-xs text-white/50">
              Rates are table stakes. Intelligence is the edge.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050509]/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Brand */}
        <Link
          href="/"
          className="inline-flex items-center gap-3 rounded-xl px-2 py-1 transition hover:bg-white/5"
          aria-label="Globeship Online Home"
        >
          {!isHome && (
            <span className="inline-flex items-center justify-center rounded-full bg-white/95 px-3 py-1.5 shadow-[0_10px_28px_rgba(0,0,0,0.45)] ring-1 ring-black/5 transition hover:bg-white hover:shadow-[0_14px_36px_rgba(0,0,0,0.55)]">
              <img
                src="/globeship-logo.png"
                alt="Globeship Online"
                className="h-8 w-auto select-none"
                draggable={false}
              />
            </span>
          )}
          <span className="text-sm font-semibold tracking-tight text-white/90">
            Globeship Online
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl px-3 py-2 text-sm font-medium text-white/70 transition hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex">
          <a
            href="https://ship.globeship.ca"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-2xl bg-orange-500 px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-orange-400"
          >
            Start Shipping
          </a>
        </div>

        {/* Mobile button */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-white/90 transition hover:bg-white/10 md:hidden"
          aria-label="Open menu"
        >
          ☰
        </button>
      </div>

      {/* Portal */}
      {mounted && open ? createPortal(<MobileMenu />, document.body) : null}
    </header>
  );
}
