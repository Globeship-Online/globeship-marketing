"use client";

import React from "react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
          Globeship Online <span className="text-white/40">•</span> AI Shipping Concierge
        </div>

        <h1 className="mt-8 text-4xl font-semibold tracking-tight md:text-6xl">
          Canada’s first <span className="text-orange-400">AI-powered</span>
          <br />
          shipping concierge.
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-white/70">
          Smarter shipping decisions, instant comparisons, and real human backup
          — all in one platform.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="https://ship.globeship.ca"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-2xl bg-orange-500 px-6 py-3 font-medium text-black transition hover:bg-orange-400"
          >
            Start shipping
          </a>

          <a
            href="/shipping-services"
            className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
          >
            View services
          </a>
        </div>
      </div>
    </main>
  );
}
