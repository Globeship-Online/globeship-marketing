"use client";
import React from "react";
import { motion } from "framer-motion";
import Section from "@/components/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AboutUsPage() {
  return (
    <main>
      <div className="mx-auto max-w-6xl px-6 py-16">
        <Section mode="animate" className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
            About us <span className="text-white/40">•</span> Service-first
          </div>
          <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Built around service — and obsessed with better shipping.
          </h1>
          <p className="max-w-2xl text-lg text-white/70">
            Globeship Online exists to help businesses ship smarter, faster, and with less friction.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild className="rounded-2xl">
              <a href="https://ship.globeship.ca" target="_blank" rel="noreferrer">Create free account</a>
            </Button>
            <Button asChild variant="secondary" className="rounded-2xl">
              <a href="/contact-us">Talk to us</a>
            </Button>
          </div>
        </Section>

        <Section className="mt-14 grid gap-4 md:grid-cols-3">
          {[
            { title: "20+ years in transportation", body: "Deep experience across courier, freight, and cross-border shipping." },
            { title: "Built for real businesses", body: "Tools and pricing designed for SMB reality, not enterprise red tape." },
            { title: "A true partner", body: "You’re not a ticket number — we help when things go sideways." },
          ].map((x) => (
            <motion.div key={x.title} whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
              <Card className="h-full">
                <CardHeader><CardTitle>{x.title}</CardTitle></CardHeader>
                <CardContent className="text-sm text-white/70">{x.body}</CardContent>
              </Card>
            </motion.div>
          ))}
        </Section>

        <Section className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Our promise</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              { t: "Clarity", d: "Simple workflows. Clear pricing. No guesswork." },
              { t: "Human support", d: "Fast help when things get complicated." },
              { t: "Better shipping by default", d: "Savings + automation without overhead." },
              { t: "Modern by design", d: "Evolving toward an AI-powered concierge." },
            ].map((p) => (
              <motion.div key={p.t} whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
                <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                  <div className="text-sm font-semibold text-white">{p.t}</div>
                  <div className="mt-1 text-sm text-white/70">{p.d}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>
      </div>
    </main>
  );
}
