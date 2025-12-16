"use client";

import React from "react";

export default function GlobeshipLanding() {
  return (
    <main className="min-h-screen bg-[#050509] text-slate-50">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-orange-500/10">
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(249,115,22,0.26),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(15,23,42,0.9),_transparent_65%)]" />

        <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-24 lg:pt-20 lg:pb-28">
          {/* Logo block */}
          <div className="flex justify-start mb-6">
            <div
              className="
                group inline-flex items-center rounded-full
                bg-white/95 px-7 sm:px-8 py-2.5 sm:py-3
                shadow-[0_18px_45px_rgba(0,0,0,0.65)]
                ring-1 ring-orange-400/70
                hover:ring-orange-300 hover:bg-white
                hover:shadow-[0_26px_70px_rgba(0,0,0,0.9)]
                transition-all duration-300 ease-out
                hover:-translate-y-0.5
                animate-fade-in
              "
            >
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-orange-500/15 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img
                  src="/globeship-logo.png"
                  alt="Globeship Online logo"
                  className="relative h-12 sm:h-14 md:h-16 w-auto select-none"
                  draggable={false}
                />
              </div>
            </div>
          </div>

          {/* Tag */}
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/40 bg-black/70 px-4 py-1 text-xs font-semibold text-orange-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>Globeship Online · AI Shipping Concierge</span>
          </div>

          <div className="mt-10 grid gap-14 lg:grid-cols-[1.15fr,0.95fr] lg:items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
                <span className="block">Canada’s first</span>
                <span className="mt-1 block text-orange-400">
                  AI-powered shipping concierge.
                </span>
              </h1>

              <p className="mt-6 text-base sm:text-lg leading-relaxed text-slate-300 max-w-xl">
                Most shipping providers sell you rates and walk away.{" "}
                <span className="font-semibold text-orange-300">
                  Globeship Online
                </span>{" "}
                pairs best-in-class shipping with{" "}
                <span className="font-semibold text-orange-300">
                  NFC.ICU-powered Contact Intelligence™
                </span>{" "}
                — so every shipment comes with marketing, automation, and analytics baked in.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://ship.globeship.ca"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-orange-500 px-7 py-3 text-sm font-semibold text-black shadow-lg shadow-orange-500/40 transition hover:bg-orange-400"
                >
                  Talk to the AI Shipping Concierge
                </a>

                <a
                  href="/shipping-services"
                  className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-black/60 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-orange-400 hover:text-orange-100"
                >
                  View shipping services
                </a>
              </div>

              <p className="mt-5 text-xs text-slate-400 max-w-md">
                Built on Globeship Online’s multi-carrier engine with NFC.ICU’s AI experience layer on top.
                Quote → choice → label → upsell — all in one guided flow.
              </p>
            </div>

            {/* Right column card (keep your existing JSX below this point as-is) */}
            {/* Paste the rest of your landing code here (the right card + all sections) */}
          </div>
        </div>
      </section>

      {/* Paste the rest of your sections (unchanged) below */}
    </main>
  );
}
