"use client";

import React from "react";

export default function GabrielIntro() {
  return (
    <section className="border-b border-orange-500/10 bg-[#050509]">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-[220px,1fr] md:items-center">
          {/* Portrait */}
          <div className="mx-auto md:mx-0">
            <div className="group relative h-44 w-44 overflow-hidden rounded-full border border-orange-500/40 bg-gradient-to-b from-slate-900 to-black shadow-xl shadow-black/70 transition-transform duration-300 ease-out hover:-translate-y-1">
              {/* Glow ring */}
              <div className="pointer-events-none absolute inset-[-8px] rounded-full border border-orange-500/20 opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-100" />
              {/* Inner image */}
              <img
                src="/gabriel.png"
                alt="Gabriel — AI Shipping Concierge"
                className="h-full w-full object-cover"
                draggable={false}
              />
            </div>
          </div>

          {/* Copy */}
          <div className="text-left">
            <h2 className="text-xl font-semibold text-white sm:text-2xl">
              Meet Gabriel
            </h2>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-orange-300">
              Your AI Shipping Concierge
            </p>
            <p className="mt-3 text-sm italic text-slate-300">
              He takes shipping seriously. Himself? Less so.
            </p>

            <p className="mt-4 text-sm text-slate-200">
              Gabriel is Globeship&apos;s most unlikely self-appointed
              spokesperson — sharp, sarcastic, and surprisingly helpful.
            </p>

            <p className="mt-3 text-sm text-slate-200">
              A{" "}
              <span className="font-semibold text-orange-200">
                gourmet hot sauce Shopify entrepreneur
              </span>{" "}
              at heart, Gabriel now travels the globe helping frustrated
              shippers untangle rates, carriers, customs, and last-mile chaos —
              with zero patience for bad logistics.
            </p>

            <p className="mt-3 text-sm text-slate-200">
              Ask for a quote, approve it, and Gabriel will generate your
              shipping label instantly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

