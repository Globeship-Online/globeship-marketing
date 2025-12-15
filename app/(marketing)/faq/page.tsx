"use client";
import React from "react";
import { motion } from "framer-motion";
import Section from "@/components/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const faqs = [
  { q: "What makes Globeship Online different?", a: "We’re service-first. Think shipping butler — we help you choose the best option, move fast, and stay sane." },
  { q: "What kind of shipping rates can I expect?", a: "Preferential discounts based on aggregated volume, without enterprise contracts or commitments." },
  { q: "Can you integrate with my ecommerce platform?", a: "Yes. Shopify, WooCommerce, Magento, Etsy, and more — we help automate order flow into shipping." },
  { q: "What carriers do you work with?", a: "Multiple domestic and international couriers, plus LTL trucking across Canada and the U.S." },
  { q: "Do you offer anything beyond shipping?", a: "Yes. Optional marketing and AI services — many free or discounted for customers." },
  { q: "How can AI increase ecommerce sales?", a: "We can demo an AI service that improves buyer experience and conversion." },
];

export default function FAQPage() {
  return (
    <main>
      <div className="mx-auto max-w-6xl px-6 py-16">
        <Section mode="animate" className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
            FAQ <span className="text-white/40">•</span> Quick answers
          </div>
          <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">Questions? Good.</h1>
          <p className="max-w-2xl text-lg text-white/70">
            These are the most common things teams ask before switching shipping providers.
          </p>
        </Section>

        <Section className="mt-12 grid gap-4">
          {faqs.map((f) => (
            <motion.div key={f.q} whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
              <Card>
                <CardHeader><CardTitle>{f.q}</CardTitle></CardHeader>
                <CardContent className="text-sm text-white/70">{f.a}</CardContent>
              </Card>
            </motion.div>
          ))}
        </Section>

        <Section className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-xl font-semibold">Want to test rates in under a minute?</h3>
              <p className="mt-1 text-white/70">Create a free account and compare instantly.</p>
            </div>
            <Button asChild className="rounded-2xl">
              <a href="https://ship.globeship.ca" target="_blank" rel="noreferrer">Start shipping</a>
            </Button>
          </div>
        </Section>
      </div>
    </main>
  );
}
