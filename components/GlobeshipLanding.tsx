// src/pages/GlobeshipLanding.tsx
import React from 'react';
import globeshipLogo from '../assets/globeship-logo.png';

export function GlobeshipLanding() {
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
                {/* Glow that appears on hover */}
                <div className="absolute inset-0 rounded-full bg-orange-500/15 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img
                  src={globeshipLogo}
                  alt="Globeship Online logo"
                  className="relative h-12 sm:h-14 md:h-16 w-auto select-none"
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
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
                <span className="block">Canada’s first</span>
                <span className="mt-1 block text-orange-400">
                  AI-powered shipping concierge.
                </span>
              </h1>

              <p className="mt-6 text-base sm:text-lg leading-relaxed text-slate-300 max-w-xl">
                Most shipping providers sell you rates and walk away.{' '}
                <span className="font-semibold text-orange-300">
                  Globeship Online
                </span>{' '}
                pairs best-in-class shipping with{' '}
                <span className="font-semibold text-orange-300">
                  NFC.ICU-powered Contact Intelligence™
                </span>{' '}
                — so every shipment comes with marketing, automation, and
                analytics baked in.
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="#/snapshot"
                  className="inline-flex items-center justify-center rounded-full bg-orange-500 px-7 py-3 text-sm font-semibold text-black shadow-lg shadow-orange-500/40 transition hover:bg-orange-400"
                >
                  Talk to the AI Shipping Concierge
                </a>

                <a
                  href="#/"
                  className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-black/60 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-orange-400 hover:text-orange-100"
                >
                  Back to NFC.ICU main site
                </a>
              </div>

              <p className="mt-5 text-xs text-slate-400 max-w-md">
                Built on Globeship Online’s multi-carrier engine with NFC.ICU’s
                AI experience layer on top. Quote → choice → label → upsell —
                all in one guided flow.
              </p>
            </div>

            {/* Right column – experience card */}
            <div className="lg:pl-6">
              <div className="rounded-3xl border border-orange-500/30 bg-black/70 backdrop-blur-lg p-6 sm:p-7 shadow-2xl shadow-black/60">
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
                <div className="mt-6 rounded-2xl bg-[#050509] border border-orange-500/30 px-5 py-4 text-sm text-slate-100">
                  <p className="leading-relaxed">
                    “Upload a shipment list and I’ll instantly recommend the
                    fastest, cheapest, or most profitable carriers — and batch
                    generate labels when you approve.”
                  </p>

                  <div className="mt-4 flex flex-wrap gap-3 text-xs">
                    <div className="rounded-full bg-black px-4 py-2 font-semibold text-orange-300 border border-orange-500/50">
                      40+ carrier &amp; service options
                    </div>
                    <div className="rounded-full bg-orange-500/10 px-4 py-2 font-semibold text-orange-200 border border-orange-400/60">
                      +12% avg. margin lift
                    </div>
                    <div className="rounded-full bg-orange-500/10 px-4 py-2 font-semibold text-emerald-200 border border-emerald-400/60">
                      6× faster than manual quoting
                    </div>
                  </div>
                </div>

                {/* Metrics */}
                <div className="mt-6 grid grid-cols-3 gap-3 sm:gap-4 text-xs">
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
        <div className="max-w-6xl mx-auto px-6 py-16 lg:py-20 grid gap-10 lg:grid-cols-[1.2fr,1fr] lg:items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">
              Your current shipping provider gives you{' '}
              <span className="text-slate-300">labels.</span>{' '}
              <span className="text-orange-400">
                Globeship Online gives you growth.
              </span>
            </h2>

            <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-xl">
              We turn every shipment into a chance to win a repeat customer —
              with automation and AI most carriers never talk about.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-slate-200">
              <li>• An AI Shipping Concierge that handles quote → choice → label.</li>
              <li>• Batch quotes from CSV or order feeds (no more manual typing).</li>
              <li>• Smart recommendations: cheapest, fastest, or best-margin.</li>
              <li>• Post-purchase flows wired to NFC.ICU reps and video.</li>
            </ul>
          </div>

          <div className="grid gap-4 text-sm">
            <div className="rounded-2xl border border-orange-500/25 bg-black/70 px-4 py-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-300">
                01 · More than “just rates”
              </p>
              <p className="mt-2 text-slate-200">
                If your current partner only talks about rates, you’re already
                behind. Globeship Online bundles the marketing and automation
                engine in for active shippers.
              </p>
            </div>

            <div className="rounded-2xl border border-orange-500/25 bg-black/70 px-4 py-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-300">
                02 · A ton on top of ops
              </p>
              <p className="mt-2 text-slate-200">
                Globeship Online + NFC.ICU gives you reps, video, affiliate
                flows, and funnels — all riding on top of your existing shipping
                operations.
              </p>
            </div>

            <div className="rounded-2xl border border-orange-500/25 bg-black/70 px-4 py-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-300">
                03 · Easy to try
              </p>
              <p className="mt-2 text-slate-200">
                Start with one lane or one warehouse. Your team still sees
                familiar labels and carriers — the AI just does the heavy
                lifting in the background.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-black border-b border-orange-500/10">
        <div className="max-w-6xl mx-auto px-6 py-16 lg:py-20">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-50">
              How the AI Shipping Concierge works
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-300">
              High-level only — no dev work needed. We plug into your Globeship
              Online account and handle the logic layer.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-orange-500/25 bg-[#050509] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-300">
                Step 1
              </p>
              <h3 className="mt-2 text-sm font-semibold text-slate-50">
                Drop in shipments
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-300">
                Upload a CSV, sync your orders, or paste a few test shipments.
                The concierge ingests everything in seconds.
              </p>
            </div>

            <div className="rounded-2xl border border-orange-500/25 bg-[#050509] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-300">
                Step 2
              </p>
              <h3 className="mt-2 text-sm font-semibold text-slate-50">
                Get guided recommendations
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-300">
                See best carrier/service per shipment — or per batch — with
                clear trade-offs between speed, cost, and margin.
              </p>
            </div>

            <div className="rounded-2xl border border-orange-500/25 bg-[#050509] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-300">
                Step 3
              </p>
              <h3 className="mt-2 text-sm font-semibold text-slate-50">
                Approve and print
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-300">
                Approve in one click. Labels, pickups, and notifications are
                triggered through Globeship Online — your ops keep moving.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Uber story – concierge snapshot */}
      <section className="bg-[#050509] border-b border-orange-500/10">
        <div className="max-w-6xl mx-auto px-6 py-16 lg:py-20 grid gap-10 lg:grid-cols-[1.2fr,1fr] lg:items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">
              A shipping panic, solved in the back of an Uber.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-xl">
              John is on the way to the airport when he realizes he forgot to
              send a critical contract that must arrive by 10:30 a.m. tomorrow.
              No laptop, no time to log into a portal — just his phone and the
              Globeship Online AI Shipping Concierge.
            </p>
            <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-xl">
              He opens the concierge, speaks to his AI rep Gabriel, and in under
              a minute the label is generated, emailed to his assistant, and the
              pickup is scheduled. John goes back to his ride — no panic, no
              missed deadline.
            </p>

            <ul className="mt-6 space-y-2 text-sm text-slate-200">
              <li>• No portal login or manual quoting — just talk or text.</li>
              <li>• AI remembers your usual ship-from details and preferences.</li>
              <li>• Labels can be emailed or texted to anyone on your team.</li>
              <li>• Perfect for last-minute “oh no” shipments from anywhere.</li>
            </ul>

            <div className="mt-8">
              <a
                href="#/snapshot"
                className="inline-flex items-center justify-center rounded-full bg-orange-500 px-6 py-2.5 text-xs sm:text-sm font-semibold text-black shadow-md shadow-orange-500/40 transition hover:bg-orange-400"
              >
                Talk to Gabriel — the AI Shipping Concierge
              </a>
            </div>
          </div>

          {/* Dialogue card */}
          <div className="rounded-3xl border border-orange-500/25 bg-black/70 p-5 sm:p-6 shadow-xl shadow-black/60">
            <p className="text-[10px] uppercase tracking-[0.2em] text-orange-300 mb-3">
              Concierge snapshot · “Gabriel” helping John
            </p>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="rounded-2xl bg-[#0b0b11] px-4 py-3 border border-slate-800">
                <p className="text-[11px] font-semibold text-emerald-300">
                  Gabriel
                </p>
                <p className="mt-1 text-slate-200">
                  Hey John, I’ve got you. Tell me where this contract needs to
                  go and when it has to arrive.
                </p>
              </div>

              <div className="rounded-2xl bg-[#050509] px-4 py-3 border border-slate-800/80">
                <p className="text-[11px] font-semibold text-sky-300">John</p>
                <p className="mt-1 text-slate-200">
                  I’m in an Uber to the airport. I need an overnight document to
                  Big Deals USA in New York, there by 10:30 a.m. tomorrow.
                </p>
              </div>

              <div className="rounded-2xl bg-[#0b0b11] px-4 py-3 border border-slate-800">
                <p className="text-[11px] font-semibold text-emerald-300">
                  Gabriel
                </p>
                <p className="mt-1 text-slate-200">
                  Got it. I’ll use your usual ship-from address and find the
                  best express option. What’s the contact email and phone at the
                  destination?
                </p>
              </div>

              <div className="rounded-2xl bg-[#050509] px-4 py-3 border border-slate-800/80">
                <p className="text-[11px] font-semibold text-sky-300">John</p>
                <p className="mt-1 text-slate-200">
                  Send the label to my assistant at nancy@visioncorp.com.
                </p>
              </div>

              <div className="rounded-2xl bg-[#0b0b11] px-4 py-3 border border-slate-800">
                <p className="text-[11px] font-semibold text-emerald-300">
                  Gabriel
                </p>
                <p className="mt-1 text-slate-200">
                  Done. The label’s in Nancy’s inbox and pickup is scheduled.
                  Anything else before your flight, John?
                </p>
              </div>

              <div className="rounded-2xl bg-[#050509] px-4 py-3 border border-slate-800/80">
                <p className="text-[11px] font-semibold text-sky-300">John</p>
                <p className="mt-1 text-slate-200">
                  You just saved my day. That’s exactly why I use Globeship
                  Online.
                </p>
              </div>
            </div>

            <p className="mt-4 text-[10px] text-slate-500">
              This is the kind of “live at the label” moment the concierge is
              built for — labels and logistics handled while you keep moving.
            </p>
          </div>
        </div>
      </section>

      {/* Warehousing + 3PL micro-block */}
      <section className="bg-[#050509] border-b border-orange-500/10">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="rounded-2xl border border-orange-500/25 bg-black/70 p-5 sm:p-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-300">
                Warehousing + 3PL
              </p>
              <h3 className="mt-2 text-sm sm:text-base font-semibold text-slate-50">
                Storage without getting locked into the wrong carrier.
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-xl">
                Optional 300,000 sq ft pick &amp; pack warehouse in Milton,
                Ontario — so you’re never trapped with a carrier just because
                they hold your inventory. Migrate lanes and stock on your
                timeline while the concierge keeps shipments flowing.
              </p>
            </div>
            <div className="text-xs sm:text-sm text-slate-300 md:text-right">
              <p>• B2B and D2C pick &amp; pack.</p>
              <p>• Container de-stuffing, palletizing, and returns.</p>
              <p>• Designed to plug directly into Globeship Online flows.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Viral video placeholder */}
      <section className="bg-[#050509] border-b border-orange-500/10">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-300">
                Coming soon
              </p>
              <h3 className="mt-2 text-sm sm:text-base font-semibold text-slate-50">
                Your 60-second elevator pitch and viral-style video, on
                autopilot.
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-slate-300 max-w-xl">
                Globeship Online will soon include a Free AI-generated &quot;Elevator
                Pitch&quot; (AI Snapshot) as well as a viral-style brand video, powered
                by NFC.ICU, that explains who you are, what you ship, and why
                customers should choose you — in under a minute.
              </p>
            </div>

            <div className="rounded-2xl border border-dashed border-orange-500/40 bg-black/50 px-6 py-8 text-center text-xs sm:text-sm text-slate-400">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-300">
                Free syndication for your Elevator Pitch and viral video to
                NFC.ICU&apos;s marketplace for powerful link juice. Rank higher for
                SEO and AI answer search results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10 reasons section */}
      <section className="bg-black">
        <div className="max-w-6xl mx-auto px-6 py-16 lg:py-20">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-50">
              10 reasons your shipping provider isn’t helping you grow.
            </h2>
            <p className="mt-3 text-sm text-slate-300">
              If your current shipping partner only provides you with rates,
              your company risks not being optimized for the paradigm AI Era
              shift. This will kill many a business — similar to companies that
              did not adapt to the Internet. Globeship Online includes
              intelligence, automation, and growth — by default.
            </p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.22em] text-orange-300">
              Rates are table stakes. Intelligence is the edge.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 text-xs sm:text-sm">
            {/* 01 */}
            <div className="rounded-2xl border border-orange-500/25 bg-[#050509] p-4 sm:p-5">
              <p className="font-semibold text-orange-200">
                01 · No elevator pitch working for you
              </p>
              <p className="mt-2 text-slate-300">
                Most providers never help you explain what makes you different.
                With Globeship Online, every active shipper can unlock an
                AI-crafted elevator pitch (AI Snapshot) — a clear, sharp story
                you can use on your site, emails, and sales conversations.
              </p>
            </div>

            {/* 02 */}
            <div className="rounded-2xl border border-orange-500/25 bg-[#050509] p-4 sm:p-5">
              <p className="font-semibold text-orange-200">
                02 · No review engine
              </p>
              <p className="mt-2 text-slate-300">
                Traditional carriers ship parcels and move on. Globeship Online
                helps you turn happy shippers into public proof — with
                AI-assisted review prompts and copy you can reuse across your
                funnel.
              </p>
            </div>

            {/* 03 */}
            <div className="rounded-2xl border border-orange-500/25 bg-[#050509] p-4 sm:p-5">
              <p className="font-semibold text-orange-200">
                03 · No video selling for you 24/7
              </p>
              <p className="mt-2 text-slate-300">
                Your current provider talks in tracking numbers. Globeship
                Online, via NFC.ICU’s video engine, can generate a short video
                that explains who you are, what you do, and why buyers should
                choose you — in under 60 seconds. Syndicate your Snapshot and
                video to NFC.ICU&apos;s Marketplace for powerful ranking link juice
                for SEO and AI search answer results.
              </p>
            </div>

            {/* 04 */}
            <div className="rounded-2xl border border-orange-500/25 bg-[#050509] p-4 sm:p-5">
              <p className="font-semibold text-orange-200">
                04 · No affiliate program built in
              </p>
              <p className="mt-2 text-slate-300">
                Most shippers leave referrals to chance. Globeship Online
                connects you into an affiliate-ready flow so partners,
                influencers, or happy customers can spread the word — with
                tracking and payouts handled.
              </p>
            </div>

            {/* 05 */}
            <div className="rounded-2xl border border-orange-500/25 bg-[#050509] p-4 sm:p-5">
              <p className="font-semibold text-orange-200">
                05 · No conversion-optimized cart
              </p>
              <p className="mt-2 text-slate-300">
                Your provider doesn’t care what happens on your product page.
                Globeship Online can pair your shipping with a
                WooCommerce-ready checkout and funnel patterns that are designed
                to convert, not just calculate postage.
              </p>
            </div>

            {/* 06 */}
            <div className="rounded-2xl border border-orange-500/25 bg-[#050509] p-4 sm:p-5">
              <p className="font-semibold text-orange-200">
                06 · No visibility boost
              </p>
              <p className="mt-2 text-slate-300">
                Carriers rarely help you get discovered. Active shippers with
                Globeship Online can tap into exposure inside the Globeship.ca /
                NFC.ICU ecosystem — putting your brand in front of buyers who
                are already in-market. Also, using Globeship Online’s backend AI
                algorithms powered by NFC.ICU allows your company to be found
                online through AI search answer results like ChatGPT, Perplexity,
                Claude, Siri, Copilot, Gemini, Alexa and many more platforms.
                Does your current shipping provider offer the same?
              </p>
            </div>

            {/* 07 */}
            <div className="rounded-2xl border border-orange-500/25 bg-[#050509] p-4 sm:p-5">
              <p className="font-semibold text-orange-200">
                07 · No AI rep guiding your visitors
              </p>
              <p className="mt-2 text-slate-300">
                A static website treats every visitor the same. With NFC.ICU’s
                Instant Engage™ layer, your traffic can be guided by an AI rep
                that qualifies, routes, and educates — instead of sending people
                to a dead-end form.
              </p>
            </div>

            {/* 08 */}
            <div className="rounded-2xl border border-orange-500/25 bg-[#050509] p-4 sm:p-5">
              <p className="font-semibold text-orange-200">
                08 · No true shipping concierge
              </p>
              <p className="mt-2 text-slate-300">
                Logging into carrier portals and guessing is not a strategy. The
                Globeship Online concierge reads your shipment list, applies
                your rules, and returns smart defaults — best rate, best margin,
                or best experience — ready to approve.
              </p>
            </div>

            {/* 09 */}
            <div className="rounded-2xl border border-orange-500/25 bg-[#050509] p-4 sm:p-5">
              <p className="font-semibold text-orange-200">
                09 · No advisor or business-in-a-box layer
              </p>
              <p className="mt-2 text-slate-300">
                Most providers treat you like an account number. Globeship
                Online + NFC.ICU can act like an AI advisor — surfacing offers,
                upsell ideas, and funnel tweaks that match the way you actually
                ship and sell.
              </p>
            </div>

            {/* 10 */}
            <div className="rounded-2xl border border-orange-500/25 bg-[#050509] p-4 sm:p-5">
              <p className="font-semibold text-orange-200">
                10 · No growth loop connected to your shipments
              </p>
              <p className="mt-2 text-slate-300">
                In a traditional setup, data dies at the label. With Globeship
                Online, shipping activity feeds back into reps, video, funnels,
                and analytics — so every month you’re a little sharper than the
                last, not starting from zero.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
      }
