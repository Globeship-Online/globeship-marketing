"use client";
import React from "react";
import { motion } from "framer-motion";
import Section from "@/components/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ContactUsPage() {
  return (
    <main>
      <div className="mx-auto max-w-6xl px-6 py-16">
        <Section mode="animate" className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
            Contact <span className="text-white/40">•</span> Temporary
          </div>

          <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">Talk to a human. Or the concierge.</h1>

          <p className="max-w-2xl text-lg text-white/70">
            This page will be replaced by Contact Engage once the AI Rep is fully live.
          </p>
        </Section>

        <Section className="mt-12 grid gap-4 md:grid-cols-3">
          <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }} className="md:col-span-2">
            <Card className="h-full">
              <CardHeader><CardTitle className="text-xl">Contact info</CardTitle></CardHeader>
              <CardContent className="space-y-4 text-white/70">
                <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                  <div className="text-sm font-semibold text-white">Email</div>
                  <a className="underline hover:text-white" href="mailto:info@globeship.ca">info@globeship.ca</a>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                  <div className="text-sm font-semibold text-white">Phone</div>
                  <a className="underline hover:text-white" href="tel:18884876935">+1 (888) 487-6935</a>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                  <div className="text-sm font-semibold text-white">Address</div>
                  <div>4188 Finch Avenue E, Unit 17<br/>Scarborough, Ontario M1S 4T6</div>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button asChild className="rounded-2xl">
                    <a href="https://ship.globeship.ca" target="_blank" rel="noreferrer">Start shipping</a>
                  </Button>
                  <Button asChild variant="secondary" className="rounded-2xl">
                    <a href="/faq">Read FAQs</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
            <Card className="h-full">
              <CardHeader><CardTitle className="text-xl">Support hours</CardTitle></CardHeader>
              <CardContent className="space-y-3 text-sm text-white/70">
                <div className="rounded-2xl border border-white/10 bg-black/30 p-4">Monday–Friday: 9 AM – 7 PM</div>
                <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                  Create a shipment and we’ll jump in if anything gets weird.
                </div>
                <Button asChild className="w-full rounded-2xl">
                  <a href="https://ship.globeship.ca" target="_blank" rel="noreferrer">Create free account</a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </Section>
      </div>
    </main>
  );
}
