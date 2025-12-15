"use client";

import React from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const NAV = [
  { href: "/shipping-services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
  { href: "/about-us", label: "About" },
  { href: "/contact-us", label: "Contact" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" className="group flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-2xl border border-white/10 bg-white/5">
            <span className="text-sm font-semibold text-white/80 transition group-hover:text-white">G</span>
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold text-white">Globeship Online</div>
            <div className="text-xs text-white/60">AI Shipping Concierge</div>
          </div>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV.map((n) => (
            <a key={n.href} className="text-sm text-white/70 transition hover:text-white" href={n.href}>
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button asChild variant="secondary" className="hidden rounded-2xl md:inline-flex">
            <a href="/">AI Concierge</a>
          </Button>

          <Button asChild className="hidden rounded-2xl md:inline-flex">
            <a href="https://ship.globeship.ca" target="_blank" rel="noreferrer">
              Start shipping
            </a>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="secondary" className="rounded-2xl md:hidden" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="border-white/10 bg-black text-white">
              <div className="mt-6 space-y-2">
                <div className="text-sm font-semibold text-white">Menu</div>
                <div className="h-px bg-white/10" />
                <div className="flex flex-col gap-2 pt-2">
                  <a className="rounded-xl px-3 py-2 text-white/80 transition hover:bg-white/5 hover:text-white" href="/">
                    AI Concierge
                  </a>
                  {NAV.map((n) => (
                    <a
                      key={n.href}
                      className="rounded-xl px-3 py-2 text-white/80 transition hover:bg-white/5 hover:text-white"
                      href={n.href}
                    >
                      {n.label}
                    </a>
                  ))}
                </div>
                <div className="pt-4">
                  <Button asChild className="w-full rounded-2xl">
                    <a href="https://ship.globeship.ca" target="_blank" rel="noreferrer">
                      Start shipping
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
