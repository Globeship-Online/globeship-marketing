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

    {/* Portrait */}
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
