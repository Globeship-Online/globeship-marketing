"use client";

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
              hover:shadow-[0_0_90px_rgba(249,115,22,0.28)]
            "
          >
            {/* Ambient glow */}
            <div
              className="
                pointer-events-none absolute inset-0
                rounded-full
                bg-orange-500/20
                blur-xl
                opacity-40
                animate-pulse
              "
            />

            <img
              src="/gabriel.png"
              alt="Gabriel — AI Shipping Concierge"
              className="
                relative z-10 h-full w-full object-cover
                transition-transform duration-500 ease-out
                group-hover:scale-[1.03]
              "
              draggable={false}
            />
          </div>
        </div>

        {/* Copy */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold text-white">Meet Gabriel</h3>
          <p className="mt-1 text-sm font-medium text-orange-400">
            Your AI Shipping Concierge
          </p>

          <p className="mt-2 text-sm text-white/75 italic">
            He takes shipping seriously. Himself? Less so.
          </p>

          <div className="mt-4 space-y-3 text-sm leading-relaxed text-white/80">
            <p>
              Gabriel is Globeship’s most unlikely self-appointed spokesperson —
              sharp, sarcastic, and surprisingly helpful.
            </p>

            <p>
              A{" "}
              <span className="font-medium text-white/90">
                gourmet hot sauce Shopify entrepreneur at heart
              </span>
              , Gabriel now travels the globe helping frustrated shippers
              untangle rates, carriers, customs, and last-m
