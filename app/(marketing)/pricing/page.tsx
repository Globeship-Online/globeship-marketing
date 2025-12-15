"use client";
import React from "react";
import { motion } from "framer-motion";
import Section from "@/components/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const included = [
  "Free account",
  "Discounted rates",
  "Unlimited shipments",
  "Address book",
  "Pickups & drop-offs",
  "Shopping cart integrations",
  "Admin management panel",
  "Product book",
  "And more",
];

export default function PricingPage() {
  return (
    <main>
      <div className="mx-auto max-w-6xl px-6 py-16">
        <Section mode="animate" className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
            Pricing <span className="text-white/40">•</span> Simple by design
          </div>
          <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">Free account. Pay only when you ship.</h1>
          <p className="max-w-2xl text-lg text-white/70">
            No subscriptions. No locked contracts. Create an account and ship when you need to.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild className="rounded-2xl">
              <a href="https://ship.globeship.ca" target="_blank" rel="noreferrer">Create free account</a>
            </Button>
            <Button asChild variant="secondary" className="rounded-2xl">
              <a href="/shipping-services">Explore services</a>
            </Button>
          </div>
        </Section>

        <Section className="mt-12 grid gap-4 md:grid-cols-3">
          <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }} className="md:col-span-2">
            <Card className="h-full">
              <CardHeader><CardTitle className="text-xl">What’s included</CardTitle></CardHeader>
              <CardContent>
                <div className="grid gap-3 sm:grid-cols-2">
                  {included.map((x) => (
                    <div key={x} className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/80">
                      {x}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
            <Card className="h-full">
              <CardHeader><CardTitle className="text-xl">Best for</CardTitle></CardHeader>
              <CardContent className="space-y-3 text-sm text-white/70">
                <div className="rounded-2xl border border-white/10 bg-black/30 p-4">SMBs shipping daily or weekly</div>
                <div className="rounded-2xl border border-white/10 bg-black/30 p-4">Ecommerce teams needing automation</div>
                <div className="rounded-2xl border border-white/10 bg-black/30 p-4">Anyone tired of manual quoting</div>
                <Button asChild className="mt-2 w-full rounded-2xl">
                  <a href="https://ship.globeship.ca" target="_blank" rel="noreferrer">Start shipping</a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </Section>
      </div>
    </main>
  );
}
