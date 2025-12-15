"use client";
import React from "react";

type Variant = "primary" | "secondary";

export function Button({
  asChild,
  variant = "primary",
  className = "",
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium transition active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none";
  const v =
    variant === "secondary"
      ? "border border-white/10 bg-white/5 text-white hover:bg-white/10"
      : "bg-orange-500 text-black hover:bg-orange-400";
  const cls = `${base} ${v} ${className}`.trim();

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      className: `${(children.props?.className ?? "")} ${cls}`.trim(),
    });
  }
  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
}
