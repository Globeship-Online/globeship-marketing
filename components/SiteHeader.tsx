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

const ANIM_MS = 260;
// Nice “premium” ease
const EASE = "cubic-bezier(0.2, 0.8, 0.2, 1)";

export default function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [open, setOpen] = React.useState(false);

  // Portal mount + keep rendered while animating out
  const [mounted, setMounted] = React.useState(false);
  const [renderMenu, setRenderMenu] = React.useState(false);
  const [active, setActive] = React.useState(false);

  // Drag-to-close
  const [dragX, setDragX] = React.useState(0);
  const draggingRef = React.useRef(false);
  const startXRef = React.useRef(0);

  React.useEffect(() => setMounted(true), []);

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

  // Lock body scroll while menu is visible
  React.useEffect(() => {
    document.body.style.overflow = renderMenu ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [renderMenu]);

  const closeMenu = () => setOpen(false);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    // only left click for mouse
    if (e.pointerType === "mouse" && e.button !== 0) return;

    draggingRef.current = true;
    startXRef.current = e.clientX;

    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;

    const dx = Math.max(0, e.clientX - startXRef.current); // drag right only
    setDragX(dx);
  };

  const onPointerUp = () => {
    if (!draggingRef.current) return;
    draggingRef.current = false;

    const w = typeof window !== "undefined" ? window.innerWidth : 390;
    const threshold = Math.min(160, w * 0.28);

    if (dragX > thres

