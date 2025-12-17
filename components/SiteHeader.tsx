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

const ANIM_MS = 280;
const EASE = "cubic-bezier(0.2, 0.8, 0.2, 1)";

export default function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [open, setOpen] = React.useState(false);

  // Portal / lifecycle
  const [mounted, setMounted] = React.useState(false);
  const [renderMenu, setRenderMenu] = React.useState(false);
  const [active, setActive] = React.useState(false);

  // Swipe (touch) state
  const [dragX, setDragX] = React.useState(0);
  const touchStartXRef = React.useRef(0);
  const draggingRef = React.useRef(false);

  React.useEffect(() => setMounted(true), []);

  // Open/close lifecycle with a tiny delay to ensure transitions always fire
  React.useEffect(() => {
    if (open) {
      setRenderMenu(true);
      setDragX(0);
      setActive(false);
      const t = window.setTimeout(() => setActive(true), 10);
      return () => window.clearTimeout(t);
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

  // Lock body scroll while menu is visible
  React.useEffect(() => {
    document.body.style.overflow = renderMenu ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [renderMenu]);

  const closeMenu = () => setOpen(false);

  // --- Touch handlers (more reliable on Android than pointer for this use) ---
  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    // only one-finger drags
    if (e.touches.length !== 1) return;
    draggingRef.current = true;
    touchStartXRef.current = e.touches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    if (e.touches.length !== 1) return;

    const dx = Math.max(0, e.touches[0].clientX - touchStartXRef.current);
    setDragX(dx);

    // prevent page from interpreting as scroll/gesture
    e.preventDefault();
  };

  const onTouchEnd = () => {
    if (!draggingRef.current) return;
    draggingRef.current = false;

    const w = typeof window !== "undefined" ? window.innerWidth : 390;
    const threshold = Math.min(160, w * 0.28);

    if (dragX > threshold) {
      setDragX(0);
      closeMenu();
      return;
    }
    setDragX(0);
  };

  const MobileMenuFullScreen = () => {
    const w = typeof window !== "undefined" ? window.innerWidth : 390;
    const progress = Math.min(1, dragX / Math.max(1, w));

    const backdropOpacity = active ? 1 - progress * 0.6 : 0;
    const translateX = active ? dragX : w; // when inactive, stay offscreen right

    const baseDelay = 90;
    const stepDelay = 55;

    return (
      <div className="fixed inset-0 z-[9999] md:hidden">
        {/* Backdrop */}
        <button
          className="absolute inset-0 bg-black/70"
          style={{
            opacity: backdropOpacity,
            transition: `opacity ${ANIM_MS}ms ${EASE}`,
          }}
          aria-label="Close menu overlay"
          onClick={closeMenu}
        />

        {/* Full-screen surface */}
        <div
          className="absolute inset-0 bg-[#050509]/98 backdrop-blur-xl"
          style={{
            transform: `translateX(${translateX}px)`,
            transition: draggingRef.current
              ? "none"
              : `transform ${ANIM_MS}ms ${EASE}`,
            willChange: "transform",
            // VERY important for Android: allow horizontal drag, block vertical gestures
            touchAction: "pan-y",
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile menu"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Top bar */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
            <span
              className="text-sm font-semibold text-white/90"
              style={{
                opacity: active ? 1 : 0,
