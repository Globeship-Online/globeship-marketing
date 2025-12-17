"use client";

import React from "react";
import GabrielIntro from "./GabrielIntro";

export default function GlobeshipLanding() {
  return (
    <main className="min-h-screen bg-[#050509] text-slate-50">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-orange-500/10">
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(249,115,22,0.26),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(15,23,42,0.9),_transparent_65%)]" />

        <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-16 lg:pb-28 lg:pt-20">
          {/* Logo block */}
          <div className="mb-6 flex justify-start">
            <div
              className="
                group inline-flex items-center rounded-full
                bg-white/95 px-7 py-2.5 shadow-[0_18px_45px_rgba(0,0,0,0.65)]
                ring-1 ring-orange-400/70 transition-all duration-300 ease-out
                hover:-translate-y-0.5 hover:bg-white hover:ring-orange-300
                hover:shadow-[0_26px_70px_rgba(0,0,0,0.9)]
                animate-fade-in
              "
            >
              <div className="relative flex items-center justify-center">
                {/* Glow that appears on hover */}
                <div className="absolute inset-0 rounded-full bg-orange-500/15 blur-md opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <img
                  src="/globeship-logo.png"
                  alt="Globeship Online logo"
                  className="relative h-12 w-auto select-none sm:h-14 md:h-16"
                  draggable={false}
                />
              </div>
            </div>
          </div>

          {/* Tag / breadcrumb */}
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/40 bg-black/70 px-4 py-1 text-xs font-semibold text-orange-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>Globeship Online · AI Shipping Concierge</span>
          </div>

          <div className="mt-10 grid gap-14 lg:grid-cols-[1.15fr,0.95fr] lg:items-center">
            {/* Left column – main copy */}
            <div>
              {/* Main heading */}
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                <span className="block">Canada’s first</span>
                <span className="mt-1 block text-orange-400">
                  AI-powered shipping concierge.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
                Most shipping providers sell you rates and walk away.{" "}
                <span className="font-semibold text-orange-300">
                  Globeship Online
                </span>{" "}
                pairs best-in-class shipping with{" "}
                <span className="font-semibold text-orange-300">
                  NFC.ICU-powered Contact Intelligence™
                </span>{" "}
                — so every shipment comes with marketing, automation, and
                analytics baked in.
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://ship.globeship.ca"
                  className="inline-flex items-center justify-center rounded-full bg-orange-500 px-7 py-3 text-sm font-semibold text-black shadow-lg shadow-orange-500/40 transition hover:bg-orange-400"
                >
                  Talk to the AI Shipping Concierge
                </a>

                <a
                  href="/"
                  className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-black/60 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-orange-400 hover:text-orange-100"
                >
                  Back to NFC.ICU main site
                </a>
              </div>

              <p className="mt-5 max-w-md text-xs text-slate-400">
                Built on Globeship Online’s multi-carrier engine with NFC.ICU’s
                AI experience layer on top. Quote → choice → label → upsell —
                all in one guided flow.
              </p>

              {/* ✅ Gabriel intro goes here (fills the blank space under the CTA area) */}
              <GabrielIntro />
            </div>

            {/* Right column – experience card */}
            <div className="lg:pl-6">
              <div className="rounded-3xl border border-orange-500/30 bg-black/70 p-6 shadow-2xl shadow-black/60 backdrop-blur-lg sm:p-7">
                {/* Window chrome */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.24em] text-slate-500">
                    AI Shipping Flow
                  </span>
                </div>

                {/* Conversation */}
                <div className="mt-6 rounded-2xl border border-orange-500/30 bg-[#050509] px-5 py-4 text-sm text-slate-100">
                  <p className="leading-relaxed">
                    “Upload a shipment list and I’ll instantly recommend the
                    fastest, cheapest, or most profitable carriers — and batch
                    generate labels when you approve.”
                  </p>

                  <div className="mt-4 flex flex-wrap gap-3 text-xs">
                    <div className="rounded-full border border-orange-500/50 bg-black px-4 py-2 font-semibold text-orange-300">
                      40+ carrier &amp; service options
                    </div>
                    <div className="rounded-full border border-orange-400/60 bg-orange-500/10 px-4 py-2 font-semibold text-orange-200">
                      +12% avg. margin lift
                    </div>
                    <div className="rounded-full border border-emerald-400/60 bg-orange-500/10 px-4 py-2 font-semibold text-emerald-200">
                      6× faster than manual quoting
                    </div>
                  </div>
                </div>

                {/* Metrics */}
                <div className="mt-6 grid grid-cols-3 gap-3 text-xs sm:gap-4">
                  <div className="rounded-2xl border border-orange-500/25 bg-black/70 px-4 py-3">
                    <p className="text-[10px] uppercase tracking-wide text-slate-500">
                      Carriers
                    </p>
                    <p className="mt-1 text-2xl font-semibold text-emerald-400">
                      40+
                    </p>
                    <p className="mt-1 text-[11px] text-slate-400">
                      Service options via Globeship Online
                    </p>
                  </div>
                  <div className="rounded-2xl border border-orange-500/25 bg-black/70 px-4 py-3">
                    <p className="text-[10px] uppercase tracking-wide text-slate-500">
                      Margin lift
                    </p>
                    <p className="mt-1 text-2xl font-semibold text-orange-300">
                      +12%
                    </p>
                    <p className="mt-1 text-[11px] text-slate-400">
                      Avg. recovered via smart routing &amp; fees
                    </p>
                  </div>
                  <div className="rounded-2xl border border-orange-500/25 bg-black/70 px-4 py-3">
                    <p className="text-[10px] uppercase tracking-wide text-slate-500">
                      Time saved
                    </p>
                    <p className="mt-1 text-2xl font-semibold text-emerald-300">
                      6×
                    </p>
                    <p className="mt-1 text-[11px] text-slate-400">
                      Faster than manual quoting &amp; labels
                    </p>
                  </div>
                </div>

                <p className="mt-5 text-[11px] text-slate-500">
                  Demo shell only — live labels, billing, and pickups run
                  through your Globeship Online account.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* “Labels vs growth” section */}
      <section className="border-b border-orange-500/10 bg-[#050509]">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[1.2fr,1fr] lg:items-start lg:py-20">
          <div>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Your current shipping provider gives you{" "}
              <span className="text-slate-300">labels.</span>{" "}
              <span className="text-orange-400">
                Globeship Online gives you growth.
              </span>
            </h2>

            <p className="mt-4 max-w-xl text-sm text-slate-300 sm:text-base">
