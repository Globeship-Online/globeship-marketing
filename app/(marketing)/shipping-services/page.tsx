"use client";
import React from "react";
import { motion } from "framer-motion";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ShippingServicesPage() {
  return (
    <main>
      <div className="mx-auto max-w-6xl px-6 py-16">
        <Section mode="animate" className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
            Services <span className="text-white/40">•</span> Discounted courier + trucking
          </div>
          <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Shipping services built for speed, savings, and sanity.
          </h1>
          <p className="max-w-2xl text-lg text-white/70">
            Compare carriers, print labels fast, schedule pickups, and ship worldwide — without the usual hassle.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild className="rounded-2xl">
              <a href="https://ship.globeship.ca" target="_blank" rel="noreferrer">Start shipping</a>
            </Button>
            <Button asChild variant="secondary" className="rounded-2xl">
              <a href="/pricing">View pricing</a>
            </Button>
          </div>
        </Section>

        <Section className="mt-14 grid gap-4 md:grid-cols-4">
          {[
            { title: "Courier + trucking", body: "Domestic & cross-border options across North America." },
            { title: "Worldwide shipping", body: "International pickup & delivery for packages and freight." },
            { title: "Pickups & drop-offs", body: "Schedule pickups or drop at locations — your choice." },
            { title: "Discounted rates", body: "Volume pricing without enterprise overhead." },
          ].map((x) => (
            <motion.div key={x.title} whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
              <Card className="h-full">
                <CardHeader><CardTitle>{x.title}</CardTitle></CardHeader>
                <CardContent className="text-sm text-white/70">{x.body}</CardContent>
              </Card>
            </motion.div>
          ))}
        </Section>

        <Section className="mt-16">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">How it works</h2>
          <p className="mt-2 max-w-2xl text-white/70">Four steps. No drama.</p>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {[
              { t: "Upload details", d: "Enter shipment info and compare options instantly." },
              { t: "Pick the best", d: "Choose speed, cost, or convenience." },
              { t: "Print & label", d: "Generate labels in seconds." },
              { t: "Ship", d: "Schedule pickup or drop off — done." },
            ].map((s) => (
              <motion.div key={s.t} whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                <Card>
                  <CardHeader>
                    <div className="text-xs text-orange-400/90">STEP</div>
                    <CardTitle>{s.t}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-white/70">{s.d}</CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h3 className="text-xl font-semibold">Ready to ship smarter?</h3>
              <p className="mt-1 text-white/70">Create a free account — only pay when you ship.</p>
            </div>
            <Button asChild className="rounded-2xl">
              <a href="https://ship.globeship.ca" target="_blank" rel="noreferrer">Create free account</a>
            </Button>
          </div>
        </Section>
      </div>
    </main>
  );
}
