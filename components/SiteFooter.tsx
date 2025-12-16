import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#050509]">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Col 1 */}
          <div>
            <div className="flex items-center gap-3">
              {/* White pill behind logo (footer) */}
              <span className="inline-flex items-center justify-center rounded-full bg-white/95 px-3 py-1.5 shadow-[0_10px_28px_rgba(0,0,0,0.35)] ring-1 ring-black/5">
                <img
                  src="/globeship-logo.png"
                  alt="Globeship Online"
                  className="h-7 w-auto select-none"
                  draggable={false}
                />
              </span>
            </div>

            <p className="mt-4 text-sm text-white/60">
              Canada’s first AI-powered shipping concierge.
            </p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.22em] text-orange-300">
              Rates are table stakes. Intelligence is the edge.
            </p>
          </div>

          {/* Col 2 */}
          <div>
            <p className="text-sm font-semibold text-white">Globeship</p>
            <div className="mt-4 space-y-2 text-sm">
              <Link className="block text-white/60 hover:text-white" href="/shipping-services">
                Shipping Services
              </Link>
              <Link className="block text-white/60 hover:text-white" href="/pricing">
                Pricing
              </Link>
              <Link className="block text-white/60 hover:text-white" href="/faq">
                FAQ
              </Link>
              <Link className="block text-white/60 hover:text-white" href="/about-us">
                About Us
              </Link>
              <Link className="block text-white/60 hover:text-white" href="/contact-us">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Col 3 */}
          <div>
            <p className="text-sm font-semibold text-white">Platform</p>
            <div className="mt-4 space-y-2 text-sm">
              <span className="block text-white/50">AI Shipping Concierge (coming soon)</span>
              <span className="block text-white/50">Integrations (coming soon)</span>
              <span className="block text-white/50">Partnerships (coming soon)</span>
              <span className="block text-white/50">Blog (coming soon)</span>
            </div>
          </div>

          {/* Col 4 */}
          <div>
            <p className="text-sm font-semibold text-white">Contact</p>
            <div className="mt-4 space-y-2 text-sm text-white/60">
              <p>Milton, Ontario</p>
              <a className="block hover:text-white" href="mailto:info@globeship.ca">
                info@globeship.ca
              </a>
              <a
                className="inline-flex items-center justify-center rounded-2xl bg-orange-500 px-4 py-2 text-sm font-semibold text-black transition hover:bg-orange-400"
                href="https://ship.globeship.ca"
                target="_blank"
                rel="noreferrer"
              >
                Start Shipping
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Globeship Online. All rights reserved.</p>
          <div className="flex gap-4">
            <Link className="hover:text-white" href="/privacy">
              Privacy
            </Link>
            <Link className="hover:text-white" href="/terms">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}


