import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Globeship Online",
  description: "Canada’s first AI-powered shipping concierge.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#050509] text-slate-50">
        {/* Global background glow */}
        <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(60%_60%_at_15%_0%,rgba(249,115,22,0.22),transparent_60%),radial-gradient(50%_50%_at_80%_25%,rgba(255,255,255,0.06),transparent_60%)]" />

        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
