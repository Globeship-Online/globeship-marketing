"use client";

import React from "react";

export default function VideoSection() {
  return (
    <section className="bg-black border-b border-orange-500/10">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          {/* Copy */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">
              Let Us Become Your Shipping Partner
            </h2>

            <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-xl">
              Globeship Online supports growing businesses with smarter shipping
              decisions — from carrier selection to last-mile execution — all
              guided by AI intelligence.
            </p>

            <ul className="mt-6 space-y-3 text-sm sm:text-base text-slate-200">
              <li>• Want to save money on your shipping fees?</li>
              <li>• Confused about eCommerce platforms and shopping carts?</li>
              <li className="font-semibold text-orange-300">
                • Let us be your shipping team — so you can focus on growing your business.
              </li>
            </ul>
          </div>

          {/* Video */}
          <div className="group relative aspect-video rounded-2xl overflow-hidden border border-orange-500/25 bg-black shadow-xl shadow-black/60 transition-all duration-300 hover:border-orange-400 hover:shadow-[0_0_60px_rgba(249,115,22,0.25)]">
            {/* Soft glow layer */}
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_center,_rgba(249,115,22,0.18),_transparent_65%)]" />

            {/* Play overlay */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-black/70 border border-orange-400/60 shadow-lg shadow-orange-500/30 transition-all duration-300 group-hover:scale-110 group-hover:bg-black/80">
                <svg
                  className="ml-1 h-7 w-7 text-orange-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>

            {/* Video iframe */}
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/WrncV_w7f20"
              title="Globeship Online — Your Shipping Partner"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
