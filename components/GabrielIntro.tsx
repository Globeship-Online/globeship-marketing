"use client";

import React from "react";

export default function GabrielIntro() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-14 pt-6 sm:px-6">
      <div className="grid items-center gap-10 md:grid-cols-[220px_1fr]">
        {/* Portrait */}
        <div className="mx-auto">
          <div
            className="
              group relative h-44 w-44 overflow-hidden rounded-full
              ring-2 ring-orange-500/30
              shadow-[0_0_70px_rgba(249,115,22,0.18)]
              transition-all duration-500 ease-out
              hover:-translate-y-1
              hover:ring-orange-400/60
              hover:shadow-[0_0_110px_rgba(249,115,22,0.32)]
            "
          >
            {/* Ambient glow */}
            <div
              className="
                pointer-events-none absolute inset-0 rounded-full
                bg-orange-500/20 blur-xl opacity-35
                transition-opacity duration-500 ease-out
                group-hover:opacity-55
              "
            />

            {/* Warm tint overlay */}
            <div
              className="
                pointer-events-none absolute inset-0 z-20 rounded-full
                bg-orange-500/10 opacity-0
                transition-opacity duration-500 ease-out
                group-hover:opacity-100
              "
            />

            <img
              src="/gabriel.png"
              alt="Gabriel — AI Shipping Concierge"
              className="
                relative z-10 h-full w-full object-cover
                transition-all duration-500 ease-out
                group-hover:scale-[1.03]
                group-hover:contrast-110
                group-hover:saturate-110
                group-hover:brightness-105
              "
              draggable={false}
            />
          </div>
        </div>

        {/* Copy */}
        <div>
          <h3 className="text-xl font-semibold text-white">
            Meet Gabriel
          </h3>

          <p className="mt-1 text-sm font-semibold text-orange-400">
            Your AI Shipping Concierge
          </p>

          <p className="mt-3 italic text-slate-300">
            He takes shipping seriously. Himself? Less so.
          </p>

          <p className="mt-4 text-sm leading-relaxed text-slate-200">
            Gabriel is Globeship’s most unlikely self-appointed spokesperson —
            sharp, sarcastic, and surprisingly helpful.
          </p>

          <p className="mt-3 text-sm leading-relaxed text-slate-200">
            A gourmet hot sauce Shopify entrepreneur at heart, Gabriel travels
            the globe helping frustrated shippers untangle rates, carriers,
            customs, and last-mile chaos — with zero patience for ba
