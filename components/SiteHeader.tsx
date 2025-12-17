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

const ANIM_MS = 240;

export default function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [open, setOpen] = React.useState(false);

  // Mounting + animation lifecycle
  const [mounted, setMounted] = React.useState(false);
  const [renderMenu, setRenderMenu] = React.useState(false);
  const [active, setActive] = React.useState(false);

  // Drag-to-close state
  const [dragX, setDragX] = React.useState(0);
  const draggingRef = React.useRef(false);
  const startXRef = React.useRef(0);
  const lastXRef = React.useRef(0);

  React.useEffect(() => setMounted(true), []);

  // Drive open/close animation and keep menu mounted while closing
  React.useEffect(() => {
    if (open) {
      setRenderMenu(true);
      setDragX(0);
      requestAnimationFrame(() => setActive(true));
    } else {
      setActive(false);
      const t = window.setTimeout(() => {
        setRenderMenu(false);
        setDragX(0);
      }, ANIM_MS);
      return () => window.clearTimeout(t);
    }
  }, [open]);

  // Close on Escape
  React.useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // Lock body scroll while menu is visible (including during close animation)
  React.useEffect(() => {
    document.body.style.overflow = renderMenu ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [renderMenu]);

  const closeMenu = () => setOpen(false);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    // Only left mouse button if using a mouse
    if (e.pointerType === "mouse" && e.button !== 0) return;

    draggingRef.current = true;
    startXRef.current = e.clientX;
    lastXRef.current = e.clientX;

    // Capture pointer so move/up events keep firing
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;

    const dx = Math.max(0, e.clientX - startXRef.current); // drag right only
    lastXRef.current = e.clientX;
    setDragX(dx);
  };

  const onPointerUp = () => {
    if (!draggingRef.current) return;
    draggingRef.current = false;

    const w = typeof window !== "undefined" ? window.innerWidth : 390;
    const threshold = Math.min(140, w * 0.25); // close if dragged enough

    if (dragX > threshold) {
      setDragX(0);
      closeMenu();
      return;
    }

    // Snap back open
    setDragX(0);
  };

  const MobileMenuFullScreen = () => {
    // When inactive (closing), slide out to the right.
    // When active, slide in; during drag, translate by dragX.
    const baseTranslate = active ? 0 : (typeof window !== "undefined" ? window.innerWidth : 1000);
    const translateX = active ? dragX : baseTranslate;

    // Fade backdrop with drag progress
    const w = typeof window !== "undefined" ? window.innerWidth : 390;
    const progress = Math.min(1, dragX / Math.max(1, w));
    const backdropOpacity = active ? 1 - progress * 0.6 : 0; // slightly lighter as you drag

    return (
      <div className="fixed inset-0 z-[9999] md:hidden">
        {/* Backdrop */}
        <button
          className="absolute inset-0 bg-black/70 transition-opacity duration-[240ms]"
          style={{ opacity: backdropOpacity }}
          aria-label="Close menu overlay"
          onClick={closeMenu}
        />

        {/* Full-screen surface (drag anywhere to close) */}
        <div
          className={[
            "absolute inset-0 bg-[#050509]/98 backdrop-blur-xl",
            "will-change-transform",
            draggingRef.current ? "" : "transition-transform duration-[240ms] ease-out",
          ].join(" ")}
          style={{ transform: `translateX(${translateX}px)` }}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile menu"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
        >
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
            <span className="text-sm font-semibold text-white/90">Menu</span>
            <button
              onClick={closeMenu}
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
                  onClick={closeMenu}
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
              <p className="mt-2 text-[11px] text-white/35">
                Tip: swipe right to close.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050509]/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Brand (logo on all pages EXCEPT home) */}
        <Link
          href="/"
          className="inline-flex items-cent
