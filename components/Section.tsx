"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

export default function Section({
  children,
  className = "",
  mode = "inView",
}: {
  children: React.ReactNode;
  className?: string;
  mode?: "inView" | "animate";
}) {
  if (mode === "animate") {
    return (
      <motion.section variants={fadeUp} initial="hidden" animate="show" className={className}>
        {children}
      </motion.section>
    );
  }
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
